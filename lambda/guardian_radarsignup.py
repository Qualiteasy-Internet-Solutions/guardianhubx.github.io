"""
Lambda: Guardian_RadarSignup

Receives a POST from the GuardianRadar signup form (guardianhubx.github.io),
stores the new client in DynamoDB Guardian_Clients, sends a confirmation email
to the client via SES, sends an internal notification to the team, and writes
a backup row to Google Sheets via Apps Script.

Expected POST body (application/x-www-form-urlencoded or JSON):
    pack, admin_nom, admin_dni, contacte_whatsapp,
    dominis, emails_radar,
    empresa, contacte_nom, nif, adreca, cp, poblacio, provincia, pais,
    telefon, email_reg, pagament, discount_code, lang, referral

Environment variables:
    API_KEY — secret key validated against x-api-key request header
"""

import os
import boto3
import json
import re
import urllib.request
import urllib.parse
from datetime import datetime, timezone

# ── Configuration ─────────────────────────────────────────────────────────────

CLIENTS_TABLE   = "Guardian_Clients"
AWS_REGION      = "eu-west-1"

SES_SENDER      = "info@guardianhubx.com"
INTERNAL_EMAILS = ["inogues@qualiteasy.com", "jamacia@qualiteasy.com"]

APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzPPxawkK4p8IRoJddxjtzIcKY1P-eUeVZFgyNcV4tJSQ6ARecBTDcfHSZFlZOtX8eD/exec"

ALLOWED_ORIGINS = {
    'https://guardianhubx.com',
    'http://localhost:1313',
}

# IPs allowed to bypass API Key (VPN + local dev)
ALLOWED_IPS = {
    '79.127.139.80',  # VPN / oficina
    '127.0.0.1',
}

# ── CORS & Auth ───────────────────────────────────────────────────────────────

def _cors_origin(event: dict) -> str:
    origin = (event.get('headers') or {}).get('origin', '')
    return origin if origin in ALLOWED_ORIGINS else 'https://guardianhubx.com'

def _cors_headers(event: dict) -> dict:
    return {
        'Access-Control-Allow-Origin':  _cors_origin(event),
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, x-api-key',
    }

def _check_api_key(event: dict) -> bool:
    expected = os.environ.get('API_KEY', '')
    provided = (event.get('headers') or {}).get('x-api-key', '')
    return bool(expected) and provided == expected

def _check_ip(event: dict) -> bool:
    ip = (event.get('requestContext') or {}).get('http', {}).get('sourceIp', '')
    return ip in ALLOWED_IPS

def _is_authorized(event: dict) -> bool:
    origin = (event.get('headers') or {}).get('origin', '')
    if origin in ALLOWED_ORIGINS:
        return _check_api_key(event)
    return _check_ip(event)

# ── Helpers ───────────────────────────────────────────────────────────────────

def _split_domains(value: str) -> list:
    value = re.sub(r'https?://', ' ', str(value))
    parts = re.split(r'[,;\t\n\r/]+', value)
    result = []
    for part in parts:
        part = part.strip().rstrip('/')
        part = re.sub(r'^www\.', '', part, flags=re.IGNORECASE)
        if part and '.' in part and ' ' not in part:
            result.append(part)
    return result

def _split_list(value: str) -> list:
    return [v.strip() for v in re.split(r'[,;\t\n\r]+', str(value)) if v.strip()]

def _get(params: dict, key: str) -> str:
    return str(params.get(key) or '').strip().lstrip("'")

def _parse_body(event: dict) -> dict:
    import base64
    content_type = (event.get('headers') or {}).get('content-type', '')
    body = event.get('body') or ''
    if event.get('isBase64Encoded'):
        body = base64.b64decode(body).decode('utf-8')
    if 'application/json' in content_type:
        return json.loads(body)
    return dict(urllib.parse.parse_qsl(body))

# ── DynamoDB ──────────────────────────────────────────────────────────────────

def _save_to_dynamodb(p: dict) -> str:
    dynamodb = boto3.resource('dynamodb', region_name=AWS_REGION)
    table = dynamodb.Table(CLIENTS_TABLE)

    empresa = _get(p, 'empresa')
    if not empresa:
        raise ValueError("El camp 'empresa' és obligatori")

    client_id = empresa

    dominis = _split_domains(_get(p, 'dominis'))
    correus = _split_list(_get(p, 'emails_radar'))

    facturacio = {
        'NIF':                 _get(p, 'nif'),
        'Contacte_Facturacio': _get(p, 'contacte_nom'),
        'Telefon_Facturacio':  _get(p, 'telefon'),
        'Adreca':              _get(p, 'adreca'),
        'CP':                  _get(p, 'cp'),
        'Poblacio':            _get(p, 'poblacio'),
        'Provincia':           _get(p, 'provincia'),
        'Pais':                _get(p, 'pais'),
        'Pack':                _get(p, 'pack'),
        'Pagament':            _get(p, 'pagament'),
        'Referral':            _get(p, 'referral'),
        'Admin_DNI':           _get(p, 'admin_dni'),
        'Discount_Code':       _get(p, 'discount_code'),
    }

    table.update_item(
        Key={'ClientID': client_id},
        UpdateExpression="""
            SET Empresa            = :empresa,
                Persona_Contacte   = :admin_nom,
                Email              = :email,
                Telefon            = :whatsapp,
                Dominis            = :dominis,
                Llista_Correus     = :correus,
                Facturacio         = :facturacio,
                Data_Alta          = if_not_exists(Data_Alta, :data_alta),
                Estat_Servei       = if_not_exists(Estat_Servei, :estat),
                Edgewatch_Configurat = if_not_exists(Edgewatch_Configurat, :ew)
        """,
        ExpressionAttributeValues={
            ':empresa':    empresa,
            ':admin_nom':  _get(p, 'admin_nom'),
            ':email':      _get(p, 'email_reg'),
            ':whatsapp':   _get(p, 'contacte_whatsapp'),
            ':dominis':    dominis,
            ':correus':    correus,
            ':facturacio': facturacio,
            ':data_alta':  datetime.now(timezone.utc).isoformat(),
            ':estat':      'PENDENT_ALTA',
            ':ew':         False,
        }
    )
    return client_id

# ── SES emails ────────────────────────────────────────────────────────────────

def _send_confirmation_to_client(p: dict):
    client_email = _get(p, 'email_reg')
    if not client_email:
        return

    ses = boto3.client('ses', region_name=AWS_REGION)
    empresa = _get(p, 'empresa')
    nom     = _get(p, 'admin_nom')
    pack    = _get(p, 'pack').upper()
    lang    = _get(p, 'lang') or 'es'

    texts = {
        'ca': {
            'subject': f"Hem rebut la teva sol·licitud de GuardianRadar – {empresa}",
            'body': f"""Hola {nom},

Hem rebut correctament la teva sol·licitud d'activació de GuardianRadar per a {empresa}.

El nostre equip la revisarà en les properes 24-48 hores i et contactarem per confirmar l'activació del servei {pack}.

Si tens qualsevol dubte, pots contactar-nos a hola@guardianhubx.com.

Gràcies per confiar en GuardianHubX.

—————————————————
GuardianHubX · https://guardianhubx.com
""",
        },
        'es': {
            'subject': f"Hemos recibido tu solicitud de GuardianRadar – {empresa}",
            'body': f"""Hola {nom},

Hemos recibido correctamente tu solicitud de activación de GuardianRadar para {empresa}.

Nuestro equipo la revisará en las próximas 24-48 horas y nos pondremos en contacto contigo para confirmar la activación del servicio {pack}.

Si tienes cualquier duda, puedes contactarnos en hola@guardianhubx.com.

Gracias por confiar en GuardianHubX.

—————————————————
GuardianHubX · https://guardianhubx.com
""",
        },
        'en': {
            'subject': f"We have received your GuardianRadar request – {empresa}",
            'body': f"""Hi {nom},

We have successfully received your GuardianRadar activation request for {empresa}.

Our team will review it within the next 24-48 hours and will contact you to confirm the activation of the {pack} service.

If you have any questions, feel free to contact us at hola@guardianhubx.com.

Thank you for trusting GuardianHubX.

—————————————————
GuardianHubX · https://guardianhubx.com
""",
        },
    }

    t = texts.get(lang, texts['es'])
    ses.send_email(
        Source=SES_SENDER,
        Destination={'ToAddresses': [client_email]},
        Message={
            'Subject': {'Data': t['subject'], 'Charset': 'UTF-8'},
            'Body':    {'Text': {'Data': t['body'], 'Charset': 'UTF-8'}},
        }
    )


def _send_internal_notification(p: dict, client_id: str):
    ses = boto3.client('ses', region_name=AWS_REGION)
    empresa = _get(p, 'empresa')

    referral_block = ""
    if _get(p, 'referral'):
        referral_block = f"\nREFERRAL\n----------------------------------\nCodi partner: {_get(p, 'referral')}\n"

    discount_block = ""
    if _get(p, 'discount_code'):
        discount_block = f"\nDESCOMPTE\n----------------------------------\nCodi: {_get(p, 'discount_code')}\n"

    body = f"""S'ha rebut una nova activació de GuardianRadar.

DADES DE FACTURACIÓ
----------------------------------
Empresa:          {empresa}
CIF/NIF:          {_get(p, 'nif')}
Persona contacte: {_get(p, 'contacte_nom')}
Email registre:   {_get(p, 'email_reg')}
Telèfon:          {_get(p, 'telefon')}
Adreça:           {_get(p, 'adreca')}, {_get(p, 'cp')}, {_get(p, 'poblacio')} ({_get(p, 'provincia')})
País:             {_get(p, 'pais')}

DADES DEL RESPONSABLE DEL RADAR
----------------------------------
Pack triat:       {_get(p, 'pack').upper()}
Administrador:    {_get(p, 'admin_nom')}
DNI:              {_get(p, 'admin_dni')}
WhatsApp alertes: {_get(p, 'contacte_whatsapp')}

MÈTODE DE PAGAMENT
----------------------------------
Triat: {_get(p, 'pagament').upper()}

ACTIUS TÈCNICS A MONITORITZAR
----------------------------------
Dominis: {_get(p, 'dominis')}
Correus: {_get(p, 'emails_radar')}
Idioma:  {_get(p, 'lang')}
{referral_block}{discount_block}
ClientID DynamoDB: {client_id}
"""
    ses.send_email(
        Source=SES_SENDER,
        Destination={'ToAddresses': INTERNAL_EMAILS},
        Message={
            'Subject': {'Data': f"Nou Registre GuardianRadar: {empresa}", 'Charset': 'UTF-8'},
            'Body':    {'Text': {'Data': body, 'Charset': 'UTF-8'}},
        }
    )

# ── Google Sheets backup ──────────────────────────────────────────────────────

def _backup_to_sheet(p: dict):
    try:
        form_data = urllib.parse.urlencode(p).encode('utf-8')
        req = urllib.request.Request(
            APPS_SCRIPT_URL,
            data=form_data,
            method='POST',
            headers={'Content-Type': 'application/x-www-form-urlencoded'}
        )
        urllib.request.urlopen(req, timeout=10)
    except Exception as e:
        print(f"[WARN] Sheet backup failed: {e}")

# ── Handler ───────────────────────────────────────────────────────────────────

def lambda_handler(event, context):
    # CORS preflight
    if event.get('requestContext', {}).get('http', {}).get('method') == 'OPTIONS':
        return {'statusCode': 200, 'headers': _cors_headers(event), 'body': ''}

    if not _is_authorized(event):
        return {
            'statusCode': 403,
            'headers': _cors_headers(event),
            'body': json.dumps({'error': 'Forbidden'})
        }

    try:
        p = _parse_body(event)

        if not _get(p, 'empresa') or not _get(p, 'email_reg'):
            return {
                'statusCode': 400,
                'headers': _cors_headers(event),
                'body': json.dumps({'error': "Els camps 'empresa' i 'email_reg' són obligatoris"})
            }

        client_id = _save_to_dynamodb(p)
        _send_confirmation_to_client(p)
        _send_internal_notification(p, client_id)
        _backup_to_sheet(p)

        return {
            'statusCode': 200,
            'headers': _cors_headers(event),
            'body': json.dumps({'ok': True, 'clientId': client_id})
        }

    except ValueError as e:
        return {
            'statusCode': 400,
            'headers': _cors_headers(event),
            'body': json.dumps({'error': str(e)})
        }
    except Exception as e:
        print(f"[ERROR] RadarSignup failed: {e}")
        return {
            'statusCode': 500,
            'headers': _cors_headers(event),
            'body': json.dumps({'error': 'Error intern del servidor'})
        }

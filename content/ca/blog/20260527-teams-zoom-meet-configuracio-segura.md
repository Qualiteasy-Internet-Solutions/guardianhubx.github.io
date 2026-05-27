---
title: "Configuració segura de Microsoft Teams, Zoom i Google Meet per a la teva empresa"
author: "GuardianHubX"
date: 2026-05-27T11:00:00+00:00
draft: false
slug: "teams-zoom-meet-configuracio-segura"
url: "/blog/ca/teams-zoom-meet-configuracio-segura/"
layout: "blog"
categories:
  - ciberseguretat
tags:
  - microsoft-teams
  - zoom
  - google-meet
  - teletreball
  - seguretat-informàtica
  - bones-pràctiques
description: "Guia pràctica: 3 ajustos crítics a Teams, Zoom i Google Meet per protegir les teves reunions. Llista de control per nivell de sensibilitat."
cover:
  image: "/images/blog/2026/teams-zoom-meet-seguridad.webp"
  width: 451
  height: 301
  alt: "Configuració segura de Teams, Zoom i Google Meet"
  caption: "Font: GuardianHubX"
relatedProduct: "guardianaradar"
featured: false
keywords:
  - "Teams configuració segura"
  - "Zoom seguretat reunions"
  - "Google Meet protecció"
  - "teletreball segur"
translationKey: "teams-zoom-meet-secure-configuration"
---

Una videoconferència sense protecció és com deixar la porta de la teva oficina oberta. Qualsevol pot entrar, escoltar, gravar i fins i tot suplantar-se com a empleat.

La bona notícia és que Teams, Zoom i Google Meet ja inclouen els controls que necessites. El problema és que molt poques empreses els activen.

---

## Què pot sortir malament

**Accés sense control.** Sense lobby o sala d'espera, qualsevol amb l'enllaç entra directament. Si és una reunió interna, algú desconegut estarà escoltant.

**Comparticions accidentals.** Si tots poden presentar, algú comparteix documents sensibles sense adonar-se'n. O a propòsit.

**Gravacions sense consentiment.** Es grava sense avisar. Violació de RGPD = multa de fins a €20 milions.

**Usuaris anònims.** Es suplantan com a empleats, clients o socis comercials.

---

## Comparativa: Teams vs Zoom vs Meet

<table class="blog-table">
<thead>
<tr>
<th>Característica</th>
<th>Teams</th>
<th>Zoom</th>
<th>Google Meet</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sala d'espera (Lobby/Waiting Room)</td>
<td>Excel·lent</td>
<td>Molt bé</td>
<td>Disponible</td>
</tr>
<tr>
<td>Control de presentadors</td>
<td>Granular</td>
<td>Molt bé</td>
<td>Sí (Host Management)</td>
</tr>
<tr>
<td>Autenticació obligatòria</td>
<td>Per organització</td>
<td>SSO</td>
<td>Per domini</td>
</tr>
<tr>
<td>Control de gravació</td>
<td>Total</td>
<td>Total</td>
<td>Només host</td>
</tr>
<tr>
<td>Xifratge punt a punt (E2EE)</td>
<td>Sí</td>
<td>Sí</td>
<td>No</td>
</tr>
</tbody>
</table>

---

## <i class="fa-brands fa-microsoft"></i> Tres ajustos que funcionen a Teams

<div class="blog-section blog-section-teams">

**Primer: Activa la sala d'espera.** Sense ella, qualsevol entra. Vés a Configuració de reunió i selecciona qui pot saltar-se la sala d'espera. Per a reunions internes, tria "només la teva organització".

**Segon: Només l'anfitrió presenta.** Evita que els empleats comparteixin accidentalment documents sensibles. Aquesta opció està als mateixos ajustos de reunió.

**Tercer: Desactiva usuaris anònims.** Al Centre d'administració de Teams, vés a Configuració de reunió i apaga l'accés anònim per a reunions internes. Requereix que tots s'autentiquin.

</div>

---

## <i class="fa-brands fa-zoom"></i> Tres ajustos que funcionen a Zoom

<div class="blog-section blog-section-zoom">

**Primer: Contrasenya + Waiting Room.** Doble barrera. Requereix contrasenya i que autoritzis qui entra. Vés a Configuració de compte, secció Seguretat, i activa ambdues opcions com a requisit obligatori.

**Segon: La Waiting Room filtra.** Permet que els teus empleats entrin automàticament, però manté el control sobre els externs. Configura-ho a la mateixa secció de Seguretat.

**Tercer: Només l'anfitrió comparteix pantalla.** Deixa-ho així per defecte. No ho canviis tret que realment necessitis que altres presentin. Si ho necessites, dóna-li control temporal, no permanent.

</div>

---

## <i class="fa-brands fa-google"></i> Tres ajustos que funcionen a Google Meet

<div class="blog-section blog-section-meet">

**Primer: Activa Host Management.** Dóna a l'anfitrió control total: expulsar usuaris, mutejat, blocar xat, controlar qui presenta. Està a Configuració de Meet, secció Controls de l'anfitrió.

**Segon: Els participants demanen accés.** No entren automàtics. L'anfitrió autoritza cada entrada. Així filtra els desconeguts abans que entrin.

**Tercer: Usa bloquejos en reunions grans o sensibles.** Pots blocar xat, presentació o micròfon segons el que necessitis. En reunions de 200 persones, blocar el micròfon evita el caos.

</div>

---

## Llista de control per tipus de reunió

**Per a reunions públiques (amb clients, prospects):**
- Sala d'espera activada
- Només l'anfitrió pot presentar
- Contrasenya o autenticació requerida
- Avís visible: "Aquesta reunió pot ser gravada"

**Per a reunions internes (equip, departament):**
- Accés anònim desactivat
- Autenticació d'empleats requerida
- Presentadors limitats a 2-3 persones
- Gravació permesa, però amb notificació prèvia

**Per a reunions sensibles (executiva, legal, nòmina, dades personals):**
- Sala d'espera obligatòria
- Autenticació de domini requerida
- Només un presentador (l'anfitrió)
- Sense gravació, o només amb consentiment explícit de tots
- Xifratge punt a punt activat si està disponible
- Sense descàrrega de xat o notes

---

## Els dos errors que la majoria comet

**Primer: Usar la mateixa configuració per a tot.**

Una demostració de vendes no necessita el mateix nivell de protecció que una reunió de nòmina. Defineix tres plantilles i usa-les per defecte.

**Segon: Gravar sense avisar.**

És la violació més comuna. Abans de gravar, pregunta explícitament a tots els participants. Si algú diu que no, detén la gravació.

---

## Conclusió

Configurar bé tarda una hora. Una bretxa de dades costa desenes de milers d'euros.

Els controls estan allà. La majoria d'empreses simplement no els usen.

Si vols una auditoria de seguretat en les teves reunions i col·laboració remota, a [GuardianHub](/ca/) podem ajudar-te. Descobreix com [GuardianRadar](/ca/guardianaradar/) detecta configuracions insegures en temps real.

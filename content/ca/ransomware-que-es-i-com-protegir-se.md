---
title: "Ransomware: Què és i com protegir-se. Guia completa per a empreses"
description: "Què és el ransomware, com arriba a la teva empresa i com protegir-se: les 5 capes de defensa, què fer si patiu un atac i eines de detecció."
ogTitle: "Ransomware: Què és i com protegir la teva empresa el 2026"
ogDescription: "Guia completa sobre ransomware per a pimes: vectors d'entrada, 5 capes de protecció (formació, endpoints, còpies de seguretat, xarxa, monitorització) i pla de resposta."
ogImage: "/img/ransomware-attack-hero.webp"
ogImageAlt: "Il·lustració d'un atac de ransomware xifrant dades d'empresa"
twitterTitle: "Ransomware: Guia completa de protecció per a empreses"
twitterDescription: "Com funciona el ransomware, com entra a la teva empresa i quines mesures implementar per prevenir-lo i respondre si t'afecta."
twitterImage: "/img/ransomware-attack-hero.webp"
translationKey: "ransomware-what-is-how-to-protect"
date: 2026-06-10T00:00:00+00:00
layout: "landing-ciberseguridad"
translations:
- lang: es
  path: "/es/ransomware-que-es-y-como-protegerse/"
- lang: en
  path: "/en/ransomware-what-is-and-how-to-protect/"
faq_items:
- question: "Què és exactament un ransomware?"
  answer: "És un programari maliciós que xifra fitxers o bloqueja sistemes per exigir un rescat econòmic a canvi de recuperar-los, sovint combinat amb l'amenaça de publicar les dades robades."
- question: "Quina és la principal via d'entrada del ransomware?"
  answer: "El phishing, l'abús de credencials i l'error humà continuen sent les vies més utilitzades per comprometre organitzacions. Els accessos remots insegurs (RDP exposat, VPN sense MFA) també són vectors freqüents."
- question: "Puc recuperar les meves dades sense pagar el rescat?"
  answer: "Depèn del tipus d'atac, però disposar de còpies de seguretat adequades, aïllades i provades sol permetre la recuperació sense necessitat de pagar. Pagar no garanteix la recuperació: molts atacants desapareixen o demanen noves quantitats."
- question: "Quina solució és més important per protegir-se del ransomware?"
  answer: "No existeix una única mesura. La protecció efectiva combina formació d'usuaris, còpies de seguretat resilients, protecció d'endpoints, segmentació de xarxa i monitorització contínua."
- question: "Quant temps sol passar entre la intrusió i el xifratge?"
  answer: "Els atacants solen romandre dies o fins i tot setmanes dins de la xarxa abans d'executar el xifratge. Durant aquest temps roben informació, escalen privilegis i identifiquen sistemes crítics. Per això la detecció primerenca és fonamental."
- question: "Què és el Ransomware-as-a-Service (RaaS)?"
  answer: "És un model de negoci criminal on grups especialitzats desenvolupen el ransomware i el llogen a altres atacants (afiliats) que el despleguen. Redueix la barrera tècnica i ha multiplicat el nombre d'atacs."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://guardianhubx.com/ca/ransomware-que-es-i-com-protegir-se/"
  },
  "headline": "Ransomware: Què és i com protegir-se. Guia completa per a empreses",
  "description": "Què és el ransomware, com arriba a la teva empresa i com protegir-se: les 5 capes de defensa, què fer si patiu un atac i eines de detecció.",
  "image": {
    "@type": "ImageObject",
    "url": "https://guardianhubx.com/img/ransomware-attack-hero.webp",
    "width": 500,
    "height": 400
  },
  "author": {
    "@type": "Organization",
    "name": "GuardianHubX",
    "url": "https://guardianhubx.com"
  },
  "datePublished": "2026-06-10T00:00:00+00:00",
  "dateModified": "2026-06-10T00:00:00+00:00",
  "publisher": {
    "@type": "Organization",
    "name": "GuardianHubX",
    "logo": {
      "@type": "ImageObject",
      "url": "https://guardianhubx.com/img/guardianhubx-logo.webp"
    }
  },
  "inLanguage": "ca",
  "about": {
    "@type": "Thing",
    "name": "Ransomware"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Com respondre a un atac de ransomware en 5 passos",
  "description": "Guia de resposta davant d'un incident de ransomware: des de l'aïllament fins a la restauració.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Aïllar els equips afectats",
      "text": "Desconnecta els sistemes compromesos de la xarxa (cable i Wi-Fi) per frenar la propagació. Evita continuar treballant sobre ells sense indicació de l'equip de resposta."
    },
    {
      "@type": "HowToStep",
      "name": "No pagar de manera impulsiva",
      "text": "Pagar no garanteix la recuperació. Molts atacants desapareixen després de rebre els diners, o en demanen de nous. Avalua amb experts abans de prendre cap decisió."
    },
    {
      "@type": "HowToStep",
      "name": "Activar el pla de resposta a incidents",
      "text": "Involucra la direcció, l'equip d'IT, la ciberseguretat interna o externa, l'assessoria legal i el DPO si escau. La coordinació és clau per minimitzar l'impacte."
    },
    {
      "@type": "HowToStep",
      "name": "Analitzar l'abast",
      "text": "Determina quins sistemes estan afectats, quines dades han estat compromeses o exfiltrades, i quin va ser el punt d'entrada probable."
    },
    {
      "@type": "HowToStep",
      "name": "Restaurar des de còpies de seguretat netes",
      "text": "Recupera l'activitat fent servir còpies verificades i lliures de programari maliciós. Prioritza els serveis crítics i revisa la seguretat abans de reobrir l'entorn."
    }
  ]
}
</script>

<!-- Hero Section -->
<section class="landing-hero-section">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6 landing-fade-in">
      <h1 class="landing-hero-title">Ransomware: Què és i com protegir la teva empresa</h1>
      <p class="landing-hero-subtitle">Un únic atac pot xifrar els teus servidors, bloquejar l'activitat durant setmanes i generar costos de recuperació devastadors. Aprèn a prevenir-lo.</p>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <div class="landing-hero-img-wrapper">
        <img src="/img/ransomware-attack-hero.webp" alt="Atac de ransomware xifrant dades d'empresa" class="landing-hero-img-custom img-fluid" width="500" height="400" loading="lazy">
      </div>
    </div>
  </div>
</div>
</section>

<!-- Stats Highlight -->
<section class="landing-stats-highlight">
<div class="container">
  <h2 class="stats-title">El Ransomware en Xifres</h2>
  <div class="row text-center">
    <div class="col-md-4 mb-4 landing-fade-in">
      <div class="landing-stat-number">44%</div>
      <div class="landing-stat-text">de les bretxes analitzades inclouen ransomware o extorsió relacionada</div>
    </div>
    <div class="col-md-4 mb-4 landing-fade-in">
      <div class="landing-stat-number">60%</div>
      <div class="landing-stat-text">de les organitzacions detecten almenys un intent d'atac de ransomware a l'any</div>
    </div>
    <div class="col-md-4 mb-4 landing-fade-in">
      <div class="landing-stat-number">+50%</div>
      <div class="landing-stat-text">dels incidents reportats en sectors europeus estan vinculats a ransomware</div>
    </div>
  </div>
</div>
</section>

<!-- Definition Section -->
<section class="landing-section">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6 landing-slide-in-left">
      <h2 class="landing-section-title text-start">Què és el Ransomware?</h2>
      <p class="mb-3 landing-text-muted">El ransomware és un tipus de programari maliciós dissenyat per bloquejar sistemes o xifrar fitxers i exigir un pagament per recuperar-los.</p>
      <p class="mb-3 landing-text-muted">Els atacants solen sol·licitar el rescat en criptomonedes per dificultar-ne el rastreig i, cada vegada més, combinen el xifratge amb el robatori i la filtració de dades.</p>
      <p class="mb-4 landing-text-muted">En els atacs moderns són habituals la <strong>doble extorsió</strong> (xifren i amenacen de filtrar), la <strong>triple extorsió</strong> (afegeixen pressió sobre clients i socis) i el <strong>Ransomware-as-a-Service (RaaS)</strong>, que permet a grups sense coneixements tècnics llançar atacs devastadors.</p>
      <a href="/ca/tipus-atacs-cibernetica/" class="landing-btn landing-btn-primary">
        Tots els Tipus de Ciberatacs <i class="fas fa-arrow-right landing-arrow-soft-green"></i>
      </a>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <img src="/img/ransomware-attack-vectors.webp" alt="Vectors d'entrada del ransomware: phishing, credencials, RDP" class="img-fluid landing-training-img" loading="lazy">
    </div>
  </div>
</div>
</section>

<!-- Targets & Consequences -->
<section class="landing-section landing-section-alt">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center">A qui Ataca i Quines Conseqüències Té?</h2>
  <p class="landing-section-subtitle landing-fade-in text-center">Cap sector n'és immune. El ransomware afecta empreses de qualsevol mida i genera conseqüències greus en múltiples àmbits.</p>
  <div class="row g-4 mt-2">
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-building"></i>
        </div>
        <h3 class="landing-benefit-title">Objectius Habituals</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Empreses de qualsevol mida</li>
          <li class="mb-1">Administracions públiques</li>
          <li class="mb-1">Hospitals i sector sanitari</li>
          <li class="mb-1">Centres educatius</li>
          <li class="mb-1">Despatxos professionals</li>
          <li class="mb-1">Infraestructures crítiques</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3 class="landing-benefit-title">Conseqüències Operatives</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Pèrdua d'accés a sistemes crítics</li>
          <li class="mb-1">Interrupció de l'activitat</li>
          <li class="mb-1">Costos de recuperació elevats</li>
          <li class="mb-1">Pèrdua d'ingressos durant dies o setmanes</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-balance-scale"></i>
        </div>
        <h3 class="landing-benefit-title">Conseqüències Legals i Reputacionals</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Sancions regulatòries (RGPD)</li>
          <li class="mb-1">Dany reputacional davant clients</li>
          <li class="mb-1">Filtració de dades sensibles</li>
          <li class="mb-1">Responsabilitat legal davant tercers</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

<!-- Attack Vectors Section -->
<section class="landing-section">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-5">Com Arriba el Ransomware a la Teva Empresa</h2>

  <div class="row g-5 mt-2">
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--phishing p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-envelope threat-icon-search"></i> Phishing i Enginyeria Social</h5>
        <p class="landing-threat-text">La porta d'entrada més habitual. Els atacants envien missatges que semblen factures, documents compartits o comunicacions internes, generats sovint amb IA. Un clic descarrega el programari maliciós o lliura les credencials.</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--ransomware p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-bug threat-icon-link"></i> Vulnerabilitats sense Pegats</h5>
        <p class="landing-threat-text">Els ciberdelinqüents busquen equips, servidors i dispositius de xarxa amb vulnerabilitats conegudes sense pegats instal·lats. Els serveis exposats a Internet són els objectius més freqüents.</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--malware p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-desktop threat-icon-warning"></i> Accessos Remots Insegurs</h5>
        <p class="landing-threat-text">RDP exposat a Internet, VPN sense MFA, dispositius perimetrals desactualitzats o contrasenyes febles reutilitzades són vectors recurrents en atacs reeixits.</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--ddos p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-key threat-icon-spell"></i> Robatori i Abús de Credencials</h5>
        <p class="landing-threat-text">Credencials filtrades en bretxes anteriors o venudes en mercats clandestins permeten accedir sense explotar cap vulnerabilitat tècnica. Els <em>Initial Access Brokers</em> venen aquests accessos a operadors de ransomware.</p>
      </div>
    </div>
  </div>
</div>
</section>

<!-- 5 Layers of Protection -->
<section class="landing-section landing-section-alt">
<div class="container">
  <div class="row align-items-center mb-5">
    <div class="col-lg-6 landing-slide-in-left">
      <h2 class="landing-section-title text-start">Les 5 Capes de Protecció Contra el Ransomware</h2>
      <p class="landing-text-muted">Una estratègia eficaç no depèn d'una sola eina. La protecció real es construeix amb diverses capes que es reforcen mútuament.</p>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <img src="/img/ransomware-layers-protection.webp" alt="Les 5 capes de protecció contra el ransomware" class="img-fluid landing-training-img" loading="lazy">
    </div>
  </div>

  <div class="row g-4">
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-user-graduate"></i>
        </div>
        <h3 class="landing-benefit-title">Capa 1: Formació i Conscienciació</h3>
        <p class="landing-benefit-text">La majoria d'atacs reeixits comencen amb una acció realitzada per un usuari. La formació ensenya a identificar correus sospitosos, detectar enllaços fraudulents i comunicar incidents ràpidament.</p>
        <a href="/ca/formacio-phishing-software/" class="landing-btn landing-btn-primary mt-3">
          Veure Programa de Formació <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-shield-virus"></i>
        </div>
        <h3 class="landing-benefit-title">Capa 2: Protecció d'Endpoints</h3>
        <p class="landing-benefit-text">Cada ordinador, portàtil o servidor és una possible porta d'entrada. Les solucions de protecció d'endpoints inclouen anàlisi de comportament, bloqueig automàtic d'amenaces, aïllament de dispositius compromesos i tecnologies de congelació de sistema que impedeixen que el ransomware persisteixi després d'un reinici.</p>
        <a href="/ca/faronics/" class="landing-btn landing-btn-primary mt-3">
          Veure Solucions d'Endpoint de Faronics <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-database"></i>
        </div>
        <h3 class="landing-benefit-title">Capa 3: Còpies de Seguretat Resilients</h3>
        <p class="landing-benefit-text">Sense còpies de seguretat fiables, recents i aïllades, la recuperació pot ser impossible o molt costosa. Aplica la regla 3-2-1: 3 còpies, en 2 suports diferents, amb 1 còpia fora de la xarxa principal.</p>
        <a href="/ca/copies-de-seguretat-empresa/" class="landing-btn landing-btn-primary mt-3">
          Veure Solucions de Backup <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-network-wired"></i>
        </div>
        <h3 class="landing-benefit-title">Capa 4: Segmentació de Xarxa</h3>
        <p class="landing-benefit-text">La segmentació dificulta enormement el moviment lateral de l'atacant. VLANs separades, tallafocs interns i xarxes aïllades per a servidors crítics i còpies de seguretat contenen l'impacte d'un incident.</p>
        <a href="/ca/smartlayer/" class="landing-btn landing-btn-primary mt-3">
          Veure SmartLayer (Seguretat de Xarxa) <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-12 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-satellite-dish"></i>
        </div>
        <h3 class="landing-benefit-title">Capa 5: Detecció Primerenca i Monitorització Contínua</h3>
        <p class="landing-benefit-text">Com més aviat es detecta una amenaça, menor és l'impacte. Amb <strong>GuardianRadar</strong> pots centralitzar esdeveniments, detectar indicadors de compromís primerencs i reaccionar abans que el ransomware executi el xifratge — monitoritzant accessos sospitosos, credencials filtrades i activitat anòmala en servidors.</p>
        <a href="/ca/guardianradar/" class="landing-btn landing-btn-primary mt-3">
          Descobrir GuardianRadar <i class="fas fa-arrow-right landing-arrow-soft-green"></i>
        </a>
      </div>
    </div>
  </div>
</div>
</section>

<!-- Backup Strategy -->
<section class="landing-section">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6 text-center landing-slide-in-left">
      <img src="/img/ransomware-backup-strategy.webp" alt="Estratègia de backup 3-2-1 per a protecció davant del ransomware" class="img-fluid landing-training-img" loading="lazy">
    </div>
    <div class="col-lg-6 landing-slide-in-right">
      <h2 class="landing-section-title text-start">La Regla 3-2-1 per a Còpies de Seguretat Indestructibles</h2>
      <p class="mb-3 landing-text-muted">Una còpia de seguretat és el darrer recurs quan totes les altres mesures fallen. Sense còpies de seguretat fiables, l'únic camí pot ser pagar el rescat — o perdre-ho tot.</p>
      <ul class="mb-4">
        <li class="mb-2"><strong>3 còpies</strong> de les teves dades crítiques</li>
        <li class="mb-2"><strong>2 tipus de suport</strong> diferents (disc, núvol, cinta...)</li>
        <li class="mb-2"><strong>1 còpia fora</strong> de la xarxa principal o en entorn aïllat</li>
      </ul>
      <p class="mb-4 landing-text-muted">A més: versionat de fitxers, còpies immutables (WORM) i proves periòdiques de restauració. Una còpia de seguretat que mai es prova és una còpia de seguretat que no existeix.</p>
    </div>
  </div>
</div>
</section>

<!-- Warning Signs -->
<section class="landing-section landing-section-alt">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-4">Senyals que Pots Estar Patint un Atac</h2>
  <p class="landing-section-subtitle landing-fade-in text-center mb-5">Davant qualsevol d'aquests senyals, actua immediatament: aïlla equips, avisa l'equip de resposta i evita apagar sistemes sense coordinació.</p>

  <div class="row mt-4">
    <div class="col-12 landing-fade-in">
      <div class="alert alert-threat-ai py-4 px-5">
        <div class="d-flex gap-3 align-items-start">
          <div class="alert-icon-lg"><i class="fas fa-exclamation-circle alert-icon-warning"></i></div>
          <div>
            <h5 class="mb-2">Indicadors de Compromís Freqüents</h5>
            <ul class="mb-0">
              <li class="mb-1">Fitxers que deixen d'obrir-se o apareixen amb extensions desconegudes</li>
              <li class="mb-1">Equips extremadament lents sense cap motiu aparent</li>
              <li class="mb-1">Aparició de notes de rescat a carpetes o escriptoris</li>
              <li class="mb-1">Usuaris bloquejats sense explicació clara</li>
              <li class="mb-1">Activitat inusual en servidors de fitxers o creació massiva de fitxers xifrats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>

<!-- Response Plan -->
<section class="landing-section">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-5">La Teva Empresa Ha Patit un Atac? Actua en 5 Passos</h2>

  <div class="row align-items-center mb-5">
    <div class="col-lg-6 landing-slide-in-left">
      <img src="/img/ransomware-response-plan.webp" alt="Pla de resposta davant un atac de ransomware" class="img-fluid landing-training-img" loading="lazy">
    </div>
    <div class="col-lg-6 landing-slide-in-right">
      <ol class="mb-0">
        <li class="mb-4">
          <strong>Aïllar els equips afectats.</strong>
          <p class="landing-text-muted mb-0">Desconnecta els sistemes compromesos de la xarxa per frenar la propagació. No continuïs treballant sobre ells sense indicació de l'equip de resposta.</p>
        </li>
        <li class="mb-4">
          <strong>No pagar de manera impulsiva.</strong>
          <p class="landing-text-muted mb-0">Pagar no garanteix la recuperació. Molts atacants desapareixen o demanen noves quantitats. Avalua amb experts abans de decidir.</p>
        </li>
        <li class="mb-4">
          <strong>Activar el pla de resposta a incidents.</strong>
          <p class="landing-text-muted mb-0">Involucra la direcció, l'IT, la ciberseguretat i l'assessoria legal (i el DPO si escau). La coordinació minimitza l'impacte.</p>
        </li>
        <li class="mb-4">
          <strong>Analitzar l'abast de l'incident.</strong>
          <p class="landing-text-muted mb-0">Determina quins sistemes i dades han estat afectats, i quin va ser el punt d'entrada. Això ajuda a prioritzar la recuperació i prevenir recaigudes.</p>
        </li>
        <li class="mb-0">
          <strong>Restaurar des de còpies de seguretat netes.</strong>
          <p class="landing-text-muted mb-0">Recupera des de còpies verificades i lliures de programari maliciós. Prioritza els serveis crítics i revisa la seguretat abans de reobrir l'entorn.</p>
        </li>
      </ol>
    </div>
  </div>
</div>
</section>

<!-- Prevention Summary -->
<section class="landing-section landing-section-alt">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-5">Com Reduir el Risc: Un Marc Complet</h2>

  <div class="row g-4">
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3 class="landing-benefit-title">Prevenció</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Formació contínua</li>
          <li class="mb-1">MFA en accessos crítics</li>
          <li class="mb-1">Aplicació de pegats i gestió de vulnerabilitats</li>
          <li class="mb-1">Polítiques de seguretat clares</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-lock"></i>
        </div>
        <h3 class="landing-benefit-title">Protecció</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">EDR/XDR</li>
          <li class="mb-1">Segmentació de xarxa</li>
          <li class="mb-1">Control d'accessos i mínim privilegi</li>
          <li class="mb-1">Protecció d'endpoints i servidors</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-eye"></i>
        </div>
        <h3 class="landing-benefit-title">Detecció</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Monitorització contínua</li>
          <li class="mb-1">Alertes automatitzades</li>
          <li class="mb-1">Vigilància de credencials filtrades</li>
          <li class="mb-1">Intel·ligència d'amenaces</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-redo"></i>
        </div>
        <h3 class="landing-benefit-title">Recuperació</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Còpies de seguretat automàtiques i provades</li>
          <li class="mb-1">Plans de contingència</li>
          <li class="mb-1">Simulacres d'incident</li>
          <li class="mb-1">Procediments documentats</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

<!-- GuardianRadar Detection Section -->
<section class="landing-section">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6 landing-slide-in-left">
      <h2 class="landing-section-title text-start">Detecta el Ransomware Abans que Sigui Massa Tard</h2>
      <p class="mb-3 landing-text-muted">Moltes organitzacions descobreixen el ransomware quan els fitxers ja estan xifrats. Tanmateix, els atacants solen romandre dies o setmanes dins de la xarxa abans d'executar el xifratge.</p>
      <p class="mb-3 landing-text-muted">Durant aquest temps poden robar informació sensible, escalar privilegis i identificar sistemes crítics. Per això la monitorització contínua i la detecció primerenca són una de les inversions més rendibles en ciberseguretat.</p>
      <p class="mb-4 landing-text-muted">Amb <strong>GuardianRadar</strong> és possible detectar indicadors de compromís abans que es produeixi l'impacte.</p>
      <a href="/ca/guardianradar/" class="landing-btn landing-btn-primary">
        Descobrir GuardianRadar <i class="fas fa-arrow-right landing-arrow-soft-green"></i>
      </a>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <img src="/img/ransomware-monitoring-detection.webp" alt="Monitorització contínua per a detecció primerenca de ransomware" class="img-fluid landing-training-img" loading="lazy">
    </div>
  </div>
</div>
</section>

<!-- Blog Posts Section -->
<section class="landing-section landing-section-alt">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-5">Aprèn Més Sobre Ransomware</h2>
  <div class="row g-4">
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-clock"></i>
        </div>
        <h3 class="landing-benefit-title">Els primers 60 minuts després d'un atac</h3>
        <p class="landing-benefit-text">Guia pràctica de resposta immediata: què fer (i què no fer) en la primera hora crítica després de detectar un atac de ransomware.</p>
        <a href="/blog/ca/guia-60-minuts-atac-ransomware/" class="landing-btn landing-btn-primary mt-3">
          Llegir article <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-network-wired"></i>
        </div>
        <h3 class="landing-benefit-title">Com protegir la teva xarxa d'atacs de ransomware</h3>
        <p class="landing-benefit-text">Mesures concretes de segmentació, control d'accessos i configuració de xarxa per reduir la superfície d'atac i contenir la propagació.</p>
        <a href="/blog/ca/com-protegir-xarxa-atacs-ransomware/" class="landing-btn landing-btn-primary mt-3">
          Llegir article <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-school"></i>
        </div>
        <h3 class="landing-benefit-title">Com evitar el ransomware als centres educatius</h3>
        <p class="landing-benefit-text">Els centres educatius són un dels objectius més atacats. Guia específica per protegir entorns amb molts usuaris i dispositius.</p>
        <a href="/blog/ca/com-evitar-el-ransomware-a-les-escoles/" class="landing-btn landing-btn-primary mt-3">
          Llegir article <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>
</div>
</section>

<!-- CTA Section -->
<section class="landing-cta-section py-5">
<div class="container text-center">
  <h2 class="landing-cta-title landing-fade-in">La Teva Empresa Està Protegida Contra el Ransomware?</h2>
  <p class="landing-cta-subtitle landing-fade-in">Avalua el teu nivell de risc. Implementa les capes de protecció. Detecta amenaces abans que sigui massa tard.</p>
  <a href="/ca/test-ciberseguretat/" class="landing-btn landing-btn-primary me-3">
    Fer el Test de Risc <i class="fas fa-arrow-right"></i>
  </a>
</div>
</section>

{{< contact-cta >}}

<div id="contact"></div>
<section class="contact-section mb-5">
  {{< contact-form >}}
</section>

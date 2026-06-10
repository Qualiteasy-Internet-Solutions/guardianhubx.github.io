---
title: "Ransomware: What is it and how to protect your business. Complete guide"
description: "What ransomware is, how it reaches your business and how to protect against it: the 5 defence layers, what to do if you are attacked and detection tools."
ogTitle: "Ransomware: What is it and how to protect your business in 2026"
ogDescription: "Complete ransomware guide for SMEs: entry vectors, 5 protection layers (training, endpoints, backups, network, monitoring) and incident response plan."
ogImage: "/img/ransomware-attack-hero.webp"
ogImageAlt: "Illustration of a ransomware attack encrypting company data"
twitterTitle: "Ransomware: Complete protection guide for businesses"
twitterDescription: "How ransomware works, how it enters your business and what measures to implement to prevent it and respond if you are affected."
twitterImage: "/img/ransomware-attack-hero.webp"
translationKey: "ransomware-what-is-how-to-protect"
date: 2026-06-10T00:00:00+00:00
layout: "landing-ciberseguridad"
translations:
- lang: es
  path: "/es/ransomware-que-es-y-como-protegerse/"
- lang: ca
  path: "/ca/ransomware-que-es-i-com-protegir-se/"
faq_items:
- question: "What exactly is ransomware?"
  answer: "It is malicious software that encrypts files or locks systems to demand a ransom in exchange for recovering them, often combined with the threat of publishing the stolen data."
- question: "What is the main entry point for ransomware?"
  answer: "Phishing, credential abuse and human error remain the most common ways organisations are compromised. Insecure remote access (exposed RDP, VPN without MFA) is also a frequent vector."
- question: "Can I recover my data without paying the ransom?"
  answer: "It depends on the type of attack, but having adequate, isolated and tested backups usually allows recovery without paying. Paying does not guarantee recovery: many attackers disappear or demand additional amounts."
- question: "What is the most important solution to protect against ransomware?"
  answer: "There is no single measure. Effective protection combines user training, resilient backups, endpoint protection, network segmentation and continuous monitoring."
- question: "How long does it typically take between intrusion and encryption?"
  answer: "Attackers typically remain inside the network for days or even weeks before executing the encryption. During that time they steal information, escalate privileges and identify critical systems. This is why early detection is essential."
- question: "What is Ransomware-as-a-Service (RaaS)?"
  answer: "It is a criminal business model where specialised groups develop ransomware and lease it to other attackers (affiliates) who deploy it. It lowers the technical barrier and has multiplied the number of attacks."
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://guardianhubx.com/en/ransomware-what-is-and-how-to-protect/"
  },
  "headline": "Ransomware: What is it and how to protect your business. Complete guide",
  "description": "What ransomware is, how it reaches your business and how to protect against it: the 5 defence layers, what to do if you are attacked and detection tools.",
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
  "inLanguage": "en",
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
  "name": "How to respond to a ransomware attack in 5 steps",
  "description": "Incident response guide for ransomware: from isolation to restoration.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Isolate the affected systems",
      "text": "Disconnect the compromised systems from the network (cable and Wi-Fi) to stop the spread. Avoid continuing to work on them without guidance from the response team."
    },
    {
      "@type": "HowToStep",
      "name": "Do not pay impulsively",
      "text": "Paying does not guarantee recovery. Many attackers disappear after receiving the money, or demand new amounts. Evaluate with experts before making any decision."
    },
    {
      "@type": "HowToStep",
      "name": "Activate the incident response plan",
      "text": "Involve management, IT, internal or external cybersecurity, legal counsel and the DPO if applicable. Coordination is key to minimising the impact."
    },
    {
      "@type": "HowToStep",
      "name": "Analyse the scope",
      "text": "Determine which systems are affected, what data was compromised or exfiltrated, and what the likely entry point was."
    },
    {
      "@type": "HowToStep",
      "name": "Restore from clean backups",
      "text": "Recover operations using verified, malware-free backups. Prioritise critical services and review security before reopening the environment."
    }
  ]
}
</script>

<!-- Hero Section -->
<section class="landing-hero-section">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6 landing-fade-in">
      <h1 class="landing-hero-title">Ransomware: What is it and how to protect your business</h1>
      <p class="landing-hero-subtitle">A single attack can encrypt your servers, halt operations for weeks and generate devastating recovery costs. Learn how to prevent it.</p>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <div class="landing-hero-img-wrapper">
        <img src="/img/ransomware-attack-hero.webp" alt="Ransomware attack encrypting company data" class="landing-hero-img-custom img-fluid" width="500" height="400" loading="lazy">
      </div>
    </div>
  </div>
</div>
</section>

<!-- Stats Highlight -->
<section class="landing-stats-highlight">
<div class="container">
  <h2 class="stats-title">Ransomware by the Numbers</h2>
  <div class="row text-center">
    <div class="col-md-4 mb-4 landing-fade-in">
      <div class="landing-stat-number">44%</div>
      <div class="landing-stat-text">of analysed breaches involve ransomware or related extortion</div>
    </div>
    <div class="col-md-4 mb-4 landing-fade-in">
      <div class="landing-stat-number">60%</div>
      <div class="landing-stat-text">of organisations detect at least one ransomware attack attempt per year</div>
    </div>
    <div class="col-md-4 mb-4 landing-fade-in">
      <div class="landing-stat-number">+50%</div>
      <div class="landing-stat-text">of incidents reported across European sectors are linked to ransomware</div>
    </div>
  </div>
</div>
</section>

<!-- Definition Section -->
<section class="landing-section">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6 landing-slide-in-left">
      <h2 class="landing-section-title text-start">What is Ransomware?</h2>
      <p class="mb-3 landing-text-muted">Ransomware is a type of malicious software designed to lock systems or encrypt files and demand payment to recover them.</p>
      <p class="mb-3 landing-text-muted">Attackers typically request the ransom in cryptocurrencies to make tracking difficult and, increasingly, combine encryption with data theft and leakage.</p>
      <p class="mb-4 landing-text-muted">Modern attacks commonly involve <strong>double extortion</strong> (encrypt and threaten to leak), <strong>triple extortion</strong> (add pressure on customers and partners) and <strong>Ransomware-as-a-Service (RaaS)</strong>, which allows groups with no technical knowledge to launch devastating attacks.</p>
      <a href="/en/types-of-cyberattacks/" class="landing-btn landing-btn-primary">
        All Types of Cyberattacks <i class="fas fa-arrow-right landing-arrow-soft-green"></i>
      </a>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <img src="/img/ransomware-attack-vectors.webp" alt="Ransomware entry vectors: phishing, credentials, RDP" class="img-fluid landing-training-img" loading="lazy">
    </div>
  </div>
</div>
</section>

<!-- Targets & Consequences -->
<section class="landing-section landing-section-alt">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center">Who Does it Target and What are the Consequences?</h2>
  <p class="landing-section-subtitle landing-fade-in text-center">No sector is safe. Ransomware affects businesses of any size and causes serious consequences across multiple areas.</p>
  <div class="row g-4 mt-2">
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-building"></i>
        </div>
        <h3 class="landing-benefit-title">Common Targets</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Businesses of any size</li>
          <li class="mb-1">Public administrations</li>
          <li class="mb-1">Hospitals and healthcare</li>
          <li class="mb-1">Educational institutions</li>
          <li class="mb-1">Professional firms</li>
          <li class="mb-1">Critical infrastructure</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
        <h3 class="landing-benefit-title">Operational Consequences</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Loss of access to critical systems</li>
          <li class="mb-1">Business disruption</li>
          <li class="mb-1">High recovery costs</li>
          <li class="mb-1">Lost revenue for days or weeks</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-balance-scale"></i>
        </div>
        <h3 class="landing-benefit-title">Legal and Reputational Consequences</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Regulatory fines (GDPR)</li>
          <li class="mb-1">Reputational damage with clients</li>
          <li class="mb-1">Sensitive data leakage</li>
          <li class="mb-1">Legal liability to third parties</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</section>

<!-- Attack Vectors Section -->
<section class="landing-section">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-5">How Ransomware Reaches Your Business</h2>

  <div class="row g-5 mt-2">
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--phishing p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-envelope threat-icon-search"></i> Phishing and Social Engineering</h5>
        <p class="landing-threat-text">The most common entry point. Attackers send messages that look like invoices, shared documents or internal communications, often generated with AI. One click downloads malware or hands over credentials.</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--ransomware p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-bug threat-icon-link"></i> Unpatched Vulnerabilities</h5>
        <p class="landing-threat-text">Cybercriminals look for devices, servers and network equipment with known vulnerabilities that have not been patched. Internet-facing services are the most frequent targets.</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--malware p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-desktop threat-icon-warning"></i> Insecure Remote Access</h5>
        <p class="landing-threat-text">RDP exposed to the internet, VPN without MFA, outdated perimeter devices or weak reused passwords are recurring vectors in successful attacks.</p>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-threat-card landing-threat-card--ddos p-5">
        <h5 class="landing-threat-title mb-3"><i class="fas fa-key threat-icon-spell"></i> Credential Theft and Abuse</h5>
        <p class="landing-threat-text">Credentials leaked in previous breaches or sold on underground markets allow access without exploiting any technical vulnerability. <em>Initial Access Brokers</em> sell these accesses to ransomware operators.</p>
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
      <h2 class="landing-section-title text-start">The 5 Layers of Protection Against Ransomware</h2>
      <p class="landing-text-muted">An effective strategy does not rely on a single tool. Real protection is built with several layers that reinforce each other.</p>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <img src="/img/ransomware-layers-protection.webp" alt="The 5 layers of protection against ransomware" class="img-fluid landing-training-img" loading="lazy">
    </div>
  </div>

  <div class="row g-4">
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-user-graduate"></i>
        </div>
        <h3 class="landing-benefit-title">Layer 1: Training and Awareness</h3>
        <p class="landing-benefit-text">Most successful attacks begin with an action taken by a user. Training teaches staff to identify suspicious emails, detect fraudulent links and report incidents quickly.</p>
        <a href="/en/cybersecurity-phishing-training/" class="landing-btn landing-btn-primary mt-3">
          View Training Programme <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-shield-virus"></i>
        </div>
        <h3 class="landing-benefit-title">Layer 2: Endpoint Protection</h3>
        <p class="landing-benefit-text">Every computer, laptop or server is a potential entry point. Endpoint protection solutions include behavioural analysis, automatic threat blocking, isolation of compromised devices and system-freeze technologies that prevent ransomware from persisting after a reboot.</p>
        <a href="/en/faronics/" class="landing-btn landing-btn-primary mt-3">
          View Faronics Endpoint Solutions <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-database"></i>
        </div>
        <h3 class="landing-benefit-title">Layer 3: Resilient Backups</h3>
        <p class="landing-benefit-text">Without reliable, recent and isolated backups, recovery can be impossible or very costly. Apply the 3-2-1 rule: 3 copies, on 2 different media types, with 1 copy off the main network.</p>
        <a href="/en/business-cloud-backup/" class="landing-btn landing-btn-primary mt-3">
          View Backup Solutions <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-network-wired"></i>
        </div>
        <h3 class="landing-benefit-title">Layer 4: Network Segmentation</h3>
        <p class="landing-benefit-text">Segmentation makes lateral movement enormously difficult for attackers. Separate VLANs, internal firewalls and isolated networks for critical servers and backups contain the impact of an incident.</p>
        <a href="/en/smartlayer/" class="landing-btn landing-btn-primary mt-3">
          View SmartLayer (Network Security) <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
    <div class="col-lg-12 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-satellite-dish"></i>
        </div>
        <h3 class="landing-benefit-title">Layer 5: Early Detection and Continuous Monitoring</h3>
        <p class="landing-benefit-text">The earlier a threat is detected, the lower the impact. With <strong>GuardianRadar</strong> you can centralise events, detect early indicators of compromise and react before ransomware executes its encryption — monitoring suspicious access, leaked credentials and anomalous server activity.</p>
        <a href="/en/guardianradar/" class="landing-btn landing-btn-primary mt-3">
          Discover GuardianRadar <i class="fas fa-arrow-right landing-arrow-soft-green"></i>
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
      <img src="/img/ransomware-backup-strategy.webp" alt="3-2-1 backup strategy for ransomware protection" class="img-fluid landing-training-img" loading="lazy">
    </div>
    <div class="col-lg-6 landing-slide-in-right">
      <h2 class="landing-section-title text-start">The 3-2-1 Rule for Unbreakable Backups</h2>
      <p class="mb-3 landing-text-muted">A backup is the last resort when all other measures fail. Without reliable backups, the only path may be paying the ransom — or losing everything.</p>
      <ul class="mb-4">
        <li class="mb-2"><strong>3 copies</strong> of your critical data</li>
        <li class="mb-2"><strong>2 different media types</strong> (disk, cloud, tape...)</li>
        <li class="mb-2"><strong>1 copy off-site</strong> or in an isolated environment</li>
      </ul>
      <p class="mb-4 landing-text-muted">Also: file versioning, immutable backups (WORM) and regular restore tests. A backup that is never tested is a backup that does not exist.</p>
    </div>
  </div>
</div>
</section>

<!-- Warning Signs -->
<section class="landing-section landing-section-alt">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-4">Signs You May Be Under Attack</h2>
  <p class="landing-section-subtitle landing-fade-in text-center mb-5">If you notice any of these signs, act immediately: isolate systems, alert the response team and avoid shutting down machines without coordination.</p>

  <div class="row mt-4">
    <div class="col-12 landing-fade-in">
      <div class="alert alert-threat-ai py-4 px-5">
        <div class="d-flex gap-3 align-items-start">
          <div class="alert-icon-lg"><i class="fas fa-exclamation-circle alert-icon-warning"></i></div>
          <div>
            <h5 class="mb-2">Common Indicators of Compromise</h5>
            <ul class="mb-0">
              <li class="mb-1">Files that can no longer be opened or appear with unknown extensions</li>
              <li class="mb-1">Extremely slow systems with no apparent reason</li>
              <li class="mb-1">Ransom notes appearing in folders or on desktops</li>
              <li class="mb-1">Users locked out without clear explanation</li>
              <li class="mb-1">Unusual activity on file servers or mass creation of encrypted files</li>
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
  <h2 class="landing-section-title landing-fade-in text-center mb-5">Has Your Business Been Hit? Act in 5 Steps</h2>

  <div class="row align-items-center mb-5">
    <div class="col-lg-6 landing-slide-in-left">
      <img src="/img/ransomware-response-plan.webp" alt="Incident response plan for a ransomware attack" class="img-fluid landing-training-img" loading="lazy">
    </div>
    <div class="col-lg-6 landing-slide-in-right">
      <ol class="mb-0">
        <li class="mb-4">
          <strong>Isolate the affected systems.</strong>
          <p class="landing-text-muted mb-0">Disconnect compromised systems from the network to stop the spread. Do not continue working on them without guidance from the response team.</p>
        </li>
        <li class="mb-4">
          <strong>Do not pay impulsively.</strong>
          <p class="landing-text-muted mb-0">Paying does not guarantee recovery. Many attackers disappear or demand additional amounts. Evaluate with experts before deciding.</p>
        </li>
        <li class="mb-4">
          <strong>Activate the incident response plan.</strong>
          <p class="landing-text-muted mb-0">Involve management, IT, cybersecurity and legal counsel (and DPO if applicable). Coordination minimises impact.</p>
        </li>
        <li class="mb-4">
          <strong>Analyse the scope of the incident.</strong>
          <p class="landing-text-muted mb-0">Determine which systems and data were affected, and what the entry point was. This helps prioritise recovery and prevent recurrence.</p>
        </li>
        <li class="mb-0">
          <strong>Restore from clean backups.</strong>
          <p class="landing-text-muted mb-0">Recover from verified, malware-free backups. Prioritise critical services and review security before reopening the environment.</p>
        </li>
      </ol>
    </div>
  </div>
</div>
</section>

<!-- Prevention Summary -->
<section class="landing-section landing-section-alt">
<div class="container">
  <h2 class="landing-section-title landing-fade-in text-center mb-5">How to Reduce Risk: A Complete Framework</h2>

  <div class="row g-4">
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-shield-alt"></i>
        </div>
        <h3 class="landing-benefit-title">Prevention</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Ongoing training</li>
          <li class="mb-1">MFA on critical access</li>
          <li class="mb-1">Patching and vulnerability management</li>
          <li class="mb-1">Clear security policies</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-lock"></i>
        </div>
        <h3 class="landing-benefit-title">Protection</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">EDR/XDR</li>
          <li class="mb-1">Network segmentation</li>
          <li class="mb-1">Access control and least privilege</li>
          <li class="mb-1">Endpoint and server protection</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-eye"></i>
        </div>
        <h3 class="landing-benefit-title">Detection</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Continuous monitoring</li>
          <li class="mb-1">Automated alerts</li>
          <li class="mb-1">Leaked credential surveillance</li>
          <li class="mb-1">Threat intelligence</li>
        </ul>
      </div>
    </div>
    <div class="col-lg-3 col-md-6 landing-fade-in">
      <div class="landing-benefit-card">
        <div class="landing-benefit-icon">
          <i class="fas fa-redo"></i>
        </div>
        <h3 class="landing-benefit-title">Recovery</h3>
        <ul class="landing-benefit-text list-unstyled mb-0">
          <li class="mb-1">Automated and tested backups</li>
          <li class="mb-1">Contingency plans</li>
          <li class="mb-1">Incident simulations</li>
          <li class="mb-1">Documented procedures</li>
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
      <h2 class="landing-section-title text-start">Detect Ransomware Before It Is Too Late</h2>
      <p class="mb-3 landing-text-muted">Many organisations discover ransomware only when files are already encrypted. However, attackers typically remain inside the network for days or weeks before executing the encryption.</p>
      <p class="mb-3 landing-text-muted">During that time they can steal sensitive information, escalate privileges and identify critical systems. This is why continuous monitoring and early detection are one of the most valuable investments in cybersecurity.</p>
      <p class="mb-4 landing-text-muted">With <strong>GuardianRadar</strong> it is possible to detect indicators of compromise before the impact occurs.</p>
      <a href="/en/guardianradar/" class="landing-btn landing-btn-primary">
        Discover GuardianRadar <i class="fas fa-arrow-right landing-arrow-soft-green"></i>
      </a>
    </div>
    <div class="col-lg-6 text-center landing-slide-in-right">
      <img src="/img/ransomware-monitoring-detection.webp" alt="Continuous monitoring for early ransomware detection" class="img-fluid landing-training-img" loading="lazy">
    </div>
  </div>
</div>
</section>

<!-- CTA Section -->
<section class="landing-cta-section py-5">
<div class="container text-center">
  <h2 class="landing-cta-title landing-fade-in">Is Your Business Protected Against Ransomware?</h2>
  <p class="landing-cta-subtitle landing-fade-in">Assess your risk level. Implement the protection layers. Detect threats before it is too late.</p>
  <a href="/en/cybersecurity-test/" class="landing-btn landing-btn-primary me-3">
    Take the Risk Assessment <i class="fas fa-arrow-right"></i>
  </a>
</div>
</section>

{{< contact-cta >}}

<div id="contact"></div>
<section class="contact-section mb-5">
  {{< contact-form >}}
</section>

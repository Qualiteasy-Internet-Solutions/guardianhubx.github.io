$(document).ready(function () {
  const savedLang = localStorage.getItem("selectedLanguage") || "es";  
  const translations = {
    es: {
      "about-title": "Sobre Nosotros",
      "about-description": "En GuardianHubX, ofrecemos una solución integrada para sus necesidades de ciberseguridad. Nuestra plataforma conecta las mejores herramientas para la gestión de contraseñas, el mantenimiento automatizado, la capacitación sobre phishing, las copias de seguridad, la detección de amenazas y más, todo con un único interlocutor.",
      "solutions-title": "Nuestros Partners",
      "solution-faronics-desc": "Gestión integral del sistema y protección contra amenazas cibernéticas, incluido el ransomware.",
      "solution-nordsecurity-desc": "Proteja el acceso remoto de su equipo con soluciones VPN avanzadas y gestión de contraseñas.",
      "solution-passwork-desc": "Gestión segura offline y online de contraseñas para empresas e individuos.",
      "solution-edgewatch-desc": "Detección de amenazas en tiempo real y defensa cibernética proactiva.",
      "solution-outkept-desc": "Formación en phishing para empleados con simulaciones realistas y análisis detallados.",
      "solution-idrive-desc": "Copias de seguridad confiables y soluciones de recuperación ante desastres para datos críticos.",
      "contact-title": "Contáctanos",
      "contact-get-in-touch": "Ponte en Contacto",
      "contact-email": "<strong>Correo:</strong> <a href='mailto:info@guardianhubx.com'>info@guardianhubx.com</a>",
      "contact-phone": "<strong>Teléfono:</strong> <a href='tel:+34934153115'>+34 93 415 31 15</a>",
      "form-name": "Nombre:",
      "form-email": "Correo Electrónico:",
      "form-message": "Mensaje:",
      "form-solutions": "Selecciona las soluciones que te interesan <span class='text-danger'>*</span>:",
      "form-solutions-error": "Por favor, selecciona al menos una solución.",
      "form-submit": "Enviar",
      "footer-text": "&copy; 2024 GuardianHubX. Todos los derechos reservados.",
      "thanks": "Gracias, hemos recibido vuestro mensaje, nos pondemos en contacto en breve.",
      "goback": "Volver a la página inicial",
      
      "faronics-description": "<strong>Faronics Cloud</strong>: De los creadores de Deep Freeze: Soluciones simples para la seguridad de endpoints y la gestión de dispositivos.",
      "faronics-description-2": "Faronics ofrece soluciones de ciberseguridad y gestión de sistemas diseñadas para proteger y administrar entornos informáticos de múltiples usuarios.  Algunos de los softwares más conocidos son: <strong>Deep Freeze, Deploy, MDM, Power Save, Win Select y el Anti Virus.</strong>",
      "faronics-description-3": "Los productos de Faronics nos ayudan a <strong>prevenir, detectar y recuperar</strong>, los tres <a href='objetivos-ciberseguirdad.html'>objetivos de ciberseguridad</a>.",
      "faronics-video-url": "https://www.youtube.com/embed/7OKaXe-Ym9Q?rel=0&cc_load_policy=0",
      
      
        "nordsecurity-description": "<strong>NordSecurity</strong>: Proteja el acceso remoto de su equipo con soluciones VPN avanzadas y gestión de contraseñas.",
        "nordsecurity-description-2": "NordSecurity ofrece una amplia gama de productos diseñados para proteger la privacidad en línea y garantizar la seguridad de los datos.",
        "nordsecurity-description-3": "Los productos de NordSecurity nos ayudan a <strong>proteger la privacidad, asegurar los datos y garantizar el acceso seguro</strong>, pilares fundamentales de la ciberseguridad.",
        "nordsecurity-video-url": "https://www.youtube.com/embed/q9GNO9wwZTI?rel=0&cc_load_policy=0",
      
        "passwork-description": "<strong>Passwork</strong>: Gestión segura offline y online de contraseñas para empresas e individuos.",
        "passwork-description-2": "Passwork permite a las empresas organizar y gestionar contraseñas en un entorno seguro, facilitando el acceso controlado y la colaboración entre equipos.",
        "passwork-description-3": "Con Passwork, las organizaciones pueden <strong>mejorar la seguridad, aumentar la eficiencia y cumplir con las regulaciones</strong> relacionadas con la gestión de contraseñas.",
        "passwork-video-url": "https://www.youtube.com/embed/PDk5Hg_m_3o?rel=0&cc_load_policy=0",
        "passwork-image": "img/passwork-features-es.webp",
      
        "edgewatch-description": "<strong>Edgewatch</strong>: Detección de amenazas en tiempo real y defensa cibernética proactiva.",
        "edgewatch-description-2": "Con tecnología avanzada, Edgewatch monitorea continuamente las redes para identificar y neutralizar amenazas antes de que puedan causar daño.",
        "edgewatch-description-3": "Los servicios de Edgewatch ayudan a las empresas a <strong>mantener la integridad de sus sistemas, proteger datos sensibles y garantizar la continuidad del negocio</strong>.",
        "edgewatch-video-url": "https://www.youtube.com/embed/R7RnAkYrVJc?rel=0&cc_load_policy=0",
      
        "outkept-description": "<strong>Outkept</strong>: Formación en phishing para empleados con simulaciones realistas y análisis detallados.",
        "outkept-description-2": "Outkept ayuda a las organizaciones a fortalecer la concienciación sobre ciberseguridad mediante campañas de phishing personalizadas y evaluaciones continuas.",
        "outkept-description-3": "Con Outkept, las empresas pueden <strong>identificar vulnerabilidades humanas, reducir riesgos y mejorar la preparación ante ataques cibernéticos</strong>.",
        "outkept-video-url": "https://www.youtube.com/embed/Er6PYUweQr4?rel=0&cc_load_policy=0",
      
        "idrive-description": "<strong>iDrive</strong>: Copias de seguridad confiables y soluciones de recuperación ante desastres para datos críticos.",
        "idrive-description-2": "Con su sistema de almacenamiento en la nube, iDrive permite realizar copias de seguridad automáticas y acceder a los datos desde cualquier dispositivo en cualquier momento.",
        "idrive-description-3": "Gracias a <a href='https://www.idrive.com/p=qualiteasy' target='_blank'>iDrive</a>, las empresas pueden <strong>minimizar la pérdida de datos, garantizar la continuidad del negocio y recuperar archivos en caso de incidentes</strong>.",
        "idrive-video-url": "https://www.youtube.com/embed/enSn-XPjzCc?rel=0&cc_load_policy=0",
      
        "privacidad-title": "Política de privacidad",
        "cookies-title": "Política de cookies",

    },
    en: {
      "about-title": "About Us",
      "about-description": "At GuardianHubX, we provide an integrated solution for your cybersecurity needs. Our platform connects the best tools for password management, automated maintenance, phishing training, backups, threat detection, and more — all in one central hub.",
      "solutions-title": "Our Partners",
      "solution-faronics-desc": "Comprehensive system management and protection against cyber threats, including ransomware.",
      "solution-nordsecurity-desc": "Secure your team's remote access with advanced VPN solutions and password management.",
      "solution-passwork-desc": "Secure offline and online password management for businesses.",
      "solution-edgewatch-desc": "Real-time threat detection and proactive cyber defense.",
      "solution-outkept-desc": "Phishing training for employees with realistic simulations and detailed analytics.",
      "solution-idrive-desc": "Reliable backup and disaster recovery solutions for critical data.",
      "contact-title": "Contact Us",
      "contact-get-in-touch": "Get in Touch",
      "contact-email": "<strong>Email:</strong> <a href='mailto:info@guardianhubx.com'>info@guardianhubx.com</a>",
      "contact-phone": "<strong>Phone:</strong> <a href='tel:+34934153115'>+34 93 415 31 15</a>",
      "form-name": "Name:",
      "form-email": "Email:",
      "form-message": "Message:",
      "form-solutions": "Select the solutions you're interested in <span class='text-danger'>*</span>:",
      "form-solutions-error": "Please select at least one solution.",
      "form-submit": "Submit",
      "footer-text": "&copy; 2024 GuardianHubX. All rights reserved.",
      "thanks": "Thanks, we received your message. We will contact you soon.",
      "goback": "Go back to the homepage",
      "faronics-description": "<strong>Faronics Cloud</strong>: From the creators of Deep Freeze: Simple solutions for endpoint security and device management.",
      "faronics-description-2": "Faronics offers cybersecurity and system management solutions designed to protect and manage multi-user computing environments. Some of its most well-known software includes: <strong>Deep Freeze, Deploy, MDM, Power Save, Win Select and Anti-Virus.</strong>",
      "faronics-description-3": "Faronics products help us <strong>prevent, detect, and recover</strong>— the three key objectives of <a href='objetivos-ciberseguirdad.html'>cybersecurity</a>.",
      "faronics-video-url": "https://www.youtube.com/embed/AR43wDZ5zH8?rel=0&cc_load_policy=0",
      
        "nordsecurity-description": "<strong>NordSecurity</strong>: Secure your team's remote access with advanced VPN solutions and password management.",
        "nordsecurity-description-2": "NordSecurity offers a wide range of products designed to protect online privacy and ensure data security.",
        "nordsecurity-description-3": "NordSecurity products help us <strong>protect privacy, secure data, and ensure safe access</strong>, key pillars of cybersecurity.",
        "nordsecurity-video-url": "https://www.youtube.com/embed/q9GNO9wwZTI?rel=0&cc_load_policy=0",
      
        "passwork-description": "<strong>Passwork</strong>: Secure offline and online password management for businesses and individuals.",
        "passwork-description-2": "Passwork allows companies to organize and manage passwords in a secure environment, enabling controlled access and team collaboration.",
        "passwork-description-3": "With Passwork, organizations can <strong>enhance security, increase efficiency, and comply with password management regulations</strong>.",
        "passwork-video-url": "https://www.youtube.com/embed/PDk5Hg_m_3o?rel=0&cc_load_policy=0",
        "passwork-image": "img/passwork-features-en.webp",
      
        "edgewatch-description": "<strong>Edgewatch</strong>: Real-time threat detection and proactive cyber defense.",
        "edgewatch-description-2": "With advanced technology, Edgewatch continuously monitors networks to identify and neutralize threats before they cause damage.",
        "edgewatch-description-3": "Edgewatch services help businesses <strong>maintain system integrity, protect sensitive data, and ensure business continuity</strong>.",
        "edgewatch-video-url": "https://www.youtube.com/embed/R7RnAkYrVJc?rel=0&cc_load_policy=0",
      
        "outkept-description": "<strong>Outkept</strong>: Phishing training for employees with realistic simulations and detailed analytics.",
        "outkept-description-2": "Outkept helps organizations strengthen cybersecurity awareness through personalized phishing campaigns and continuous assessments.",
        "outkept-description-3": "With Outkept, companies can <strong>identify human vulnerabilities, reduce risks, and improve preparedness against cyberattacks</strong>.",
        "outkept-video-url": "https://www.youtube.com/embed/Er6PYUweQr4?rel=0&cc_load_policy=0",
      
        "idrive-description": "<strong>iDrive</strong>: Reliable backup and disaster recovery solutions for critical data.",
        "idrive-description-2": "With its cloud storage system, iDrive enables automatic backups and allows access to data from any device, anytime.",
        "idrive-description-3": "Thanks to <a href='https://www.idrive.com/p=qualiteasy' target='_blank'>Idrive</a>iDrive, businesses can <strong>minimize data loss, ensure business continuity, and recover files in case of incidents</strong>.",
        "idrive-video-url": "https://www.youtube.com/embed/enSn-XPjzCc?rel=0&cc_load_policy=0",
        
        "privacidad-title": "Privacy policy",
        "cookies-title": "Cookies policy",

      
    },
  };

  let loadCounter = 0;
  function updateFooterLinks() {
    const privacyLink = $("#privacy-policy-link");
    if (privacyLink.length) {
        privacyLink.attr("href", savedLang === "en" ? "politica-privacidad-en.html" : "politica-privacidad-es.html");
    }

    const cookiesLink = $("#cookies-policy-link");
    if (cookiesLink.length) {
        cookiesLink.attr("href", savedLang === "en" ? "politica-cookies-en.html" : "politica-cookies-es.html");
    }
}

  function checkIfAllLoaded() {
    if (loadCounter === 3) {
      $("body").removeClass("loading").addClass("loaded");
      applyInitialLanguage();
    }
  }

  function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang); // Guardar idioma seleccionado    
    const currentURL = window.location.href;
    let newURL = "";

    if (currentURL.includes("politica-privacidad")) {
      newURL = lang === "en" ? "politica-privacidad-en.html" : "politica-privacidad-es.html";
    } else if (currentURL.includes("politica-cookies")) {
      newURL = lang === "en" ? "politica-cookies-en.html" : "politica-cookies-es.html";
    }


    // Si estamos en una de esas páginas, redirigir en lugar de cambiar textos
    if (newURL && !currentURL.includes(newURL)) {
      window.location.href = newURL;
        return;
    }

    $("[data-key]").each(function () {
      const key = $(this).data("key");
      if (translations[lang] && translations[lang][key]) {
        if ($(this).is("input, textarea")) {
          $(this).val(translations[lang][key]);
        } else if ($(this).is("iframe")) {
          // Si es un iframe, cambia el src
          $(this).attr("src", translations[lang][key]);
        } else if ($(this).is("img")) {
          // Si es una imagen, cambia el src
          $(this).attr("src", translations[lang][key]);
        } else {
          $(this).html(translations[lang][key]);
        }
      }
    });
    $("html").attr("lang", lang);
    $("#languageSwitcher").val(lang);
    $('input[name=_next]').val(`https://guardianhubx.com/thanks.html?idioma=${lang}`);
    updateGoBackLink(lang);
  }

  function updateGoBackLink(lang) {
    const goBackLink = $("#goback");
    if (goBackLink.length > 0) {
      const currentHref = goBackLink.attr("href") ? goBackLink.attr("href").split("?")[0] : "index.html";
      goBackLink.attr("href", `${currentHref}?idioma=${lang}`);
    }
  }

  function getLanguageFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("idioma");
  }

  function applyInitialLanguage() {
    const languageFromURL = getLanguageFromURL();
    const defaultLanguage = languageFromURL || savedLang;
    changeLanguage(["en", "es"].includes(defaultLanguage) ? defaultLanguage : "es");
  }

  applyInitialLanguage();

  // Delegar el evento del selector de idioma
  $(document).on("change", "#languageSwitcher", function () {
    const lang = $(this).val();
    if (lang === "es" || lang === "en") {
      changeLanguage(lang);
    }
  });

  // Carga dinámica de las secciones
  $.get("head.html", function (data) {
    $("#common-head").html(data);
    loadCounter++;
    checkIfAllLoaded();
  });

  $("#header-container").load("header.html", function () {
    loadCounter++;
    checkIfAllLoaded();
  });

  $("#footer-container").load("footer.html", function () {    
    loadCounter++;
    checkIfAllLoaded();
    updateFooterLinks();
  });
});

function openFullscreen(imgElement) {
  const fullscreenOverlay = document.getElementById("fullscreen-overlay");
  const fullscreenImage = document.getElementById("fullscreen-image");

  fullscreenImage.src = imgElement.src;
  fullscreenOverlay.style.display = "flex";

  // Forzar un pequeño retraso para activar la animación
  setTimeout(() => {
    fullscreenOverlay.classList.add("visible");
    fullscreenImage.classList.add("visible");
  }, 10);
}

function closeFullscreen() {
  const fullscreenOverlay = document.getElementById("fullscreen-overlay");
  const fullscreenImage = document.getElementById("fullscreen-image");

  fullscreenOverlay.classList.remove("visible");
  fullscreenImage.classList.remove("visible");

  // Esperar la animación antes de ocultar el overlay
  setTimeout(() => {
    fullscreenOverlay.style.display = "none";
  }, 300);

  
}
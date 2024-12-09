const translations = {
    es: {
      "about-title": "Sobre Nosotros",
      "about-description": "En GuardianHubX, proporcionamos una solución integral para tus necesidades de ciberseguridad...",
      "solutions-title": "Nuestros Partners",
      "solution-faronics-desc": "Gestión integral del sistema y protección contra amenazas cibernéticas, incluido el ransomware.",
      "solution-nordlayer-desc": "Asegura el acceso remoto de tu equipo con soluciones avanzadas de VPN.",
      "solution-nordpass-desc": "Gestión segura de contraseñas para empresas e individuos.",
      "solution-edgewatch-desc": "Detección de amenazas en tiempo real y defensa cibernética proactiva.",
      "solution-outkept-desc": "Monitoreo y mantenimiento automatizado para garantizar el tiempo de actividad del sistema.",
      "solution-acronis-desc": "Copias de seguridad confiables y soluciones de recuperación ante desastres para datos críticos.",
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
      "footer-text": "&copy; 2024 GuardianHubX. Todos los derechos reservados."
    },
    en: {
      "about-title": "About Us",
      "about-description": "At GuardianHubX, we provide an integrated solution for your cybersecurity needs...",
      "solutions-title": "Our Partners",
      "solution-faronics-desc": "Comprehensive system management and protection against cyber threats, including ransomware.",
      "solution-nordlayer-desc": "Secure your team's remote access with advanced VPN solutions.",
      "solution-nordpass-desc": "Secure password management for businesses and individuals.",
      "solution-edgewatch-desc": "Real-time threat detection and proactive cyber defense.",
      "solution-outkept-desc": "Automated monitoring and maintenance to ensure system uptime.",
      "solution-acronis-desc": "Reliable backup and disaster recovery solutions for critical data.",
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
      "footer-text": "&copy; 2024 GuardianHubX. All rights reserved."
    }
  };
  
  $(document).ready(function () {
    // Language Switcher
    function changeLanguage(lang) {
      $("[data-key]").each(function () {
        const key = $(this).data("key");
        if (translations[lang][key]) {
          $(this).html(translations[lang][key]);
        }
      });
    }
  
    // Default Language
    changeLanguage("en");
  
    // Language Switcher Dropdown
    $("#languageSwitcher").change(function () {
      const lang = $(this).val();
      changeLanguage(lang);
    });
  
    // Form Validation
    $("#contactForm").submit(function (event) {
      const selectedSolutions = $("input[name='solutions']:checked").length;
      if (selectedSolutions === 0) {
        event.preventDefault();
        $("#checkboxError").removeClass("d-none");
      } else {
        $("#checkboxError").addClass("d-none");
      }
    });
  });
  
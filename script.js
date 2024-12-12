$(document).ready(function () {
  // Cargar el contenido del <head>
  $.get("head.html", function (data) {
    $("#common-head").html(data);
  }).fail(function (xhr, status, error) {
    console.error("Error loading head:", status, error);
  });

  // Cargar el header
  $("#header-container").load("header.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading header:", xhr.status, xhr.statusText);
    }
  });

  // Cargar el footer
  $("#footer-container").load("footer.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading footer:", xhr.status, xhr.statusText);
    }
  });

const translations = {
    es: {
      "about-title": "Sobre Nosotros",
      "about-description": "En GuardianHubX, ofrecemos una solución integral para tus necesidades de ciberseguridad. Nuestra plataforma conecta las mejores herramientas para la gestión de contraseñas, mantenimiento automatizado, formación en phishing, copias de seguridad, detección de amenazas y más, todo en un única consola centralizada.",
      "solutions-title": "Nuestros Partners",
      "solution-faronics-desc": "Gestión integral del sistema y protección contra amenazas cibernéticas, incluido el ransomware.",
      "solution-nordlayer-desc": "Asegura el acceso remoto de tu equipo con soluciones avanzadas de VPN.",
      "solution-nordpass-desc": "Gestión segura de contraseñas para empresas e individuos.",
      "solution-edgewatch-desc": "Detección de amenazas en tiempo real y defensa cibernética proactiva.",
      "solution-outkept-desc": "Formación en phishing para empleados con simulaciones realistas y análisis detallados.",
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
      "footer-text": "&copy; 2024 GuardianHubX. Todos los derechos reservados.",
      "thanks": "Gracias, hemos recibido vuestro mensaje, nos pondemos en contacto en breve.",
      "goback": "Volver a la página inicial"
    },
    en: {
      "about-title": "About Us",
      "about-description": "At GuardianHubX, we provide an integrated solution for your cybersecurity needs. Our platform connects the best tools for password management, automated maintenance, phishing training, backups, threat detection, and more — all in one central hub.",
      "solutions-title": "Our Partners",
      "solution-faronics-desc": "Comprehensive system management and protection against cyber threats, including ransomware.",
      "solution-nordlayer-desc": "Secure your team's remote access with advanced VPN solutions.",
      "solution-nordpass-desc": "Secure password management for businesses and individuals.",
      "solution-edgewatch-desc": "Real-time threat detection and proactive cyber defense.",
      "solution-outkept-desc": "Phishing training for employees with realistic simulations and detailed analytics.",
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
      "footer-text": "&copy; 2024 GuardianHubX. All rights reserved.",
      "thanks": "Thanks, we recived your message, we will contact you soon.",
      "goback": "Go back to the homesite"
    }
  };
  
    // Función para cambiar el idioma dinámicamente
    function changeLanguage(lang) {
      $("[data-key]").each(function () {
        const key = $(this).data("key");
        if (translations[lang] && translations[lang][key]) {
          if ($(this).is("input, textarea")) {
            // Si es un input o textarea, actualiza el atributo value
            $(this).val(translations[lang][key]);
          } else {
            // Si no, actualiza el contenido HTML
            $(this).html(translations[lang][key]);
          }
        }
      });
      $("html").attr("lang", lang); // Actualizar atributo lang
      $("#languageSwitcher").val(lang); // Marcar idioma en el <select>
      $('input[name=_next]').val(`https://guardianhubx.com/thanks.html?idioma=${lang}`); // Actualizar enlace de redirección
      updateGoBackLink(lang); // Actualizar enlace "Go back to the homesite"
    }
  
    // Función para actualizar el enlace "Go back to the homesite"
    function updateGoBackLink(lang) {
      const goBackLink = $("#goback");
    
      // Verifica si el elemento existe
      if (goBackLink.length > 0) {
        // Verifica si el atributo href está definido
        const currentHref = goBackLink.attr("href") ? goBackLink.attr("href").split("?")[0] : "index.html";
        goBackLink.attr("href", `${currentHref}?idioma=${lang}`);
      } else {
        console.info("El elemento #goback no está presente en el DOM."); // Mensaje informativo
      }
    }
  
    // Función para detectar idioma desde la URL
    function getLanguageFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get("idioma");
    }
  
    // Detectar idioma inicial desde la URL o usar predeterminado
    const languageFromURL = getLanguageFromURL();
    const defaultLanguage = languageFromURL || "en";
  
    if (["es", "en"].includes(defaultLanguage)) {
      changeLanguage(defaultLanguage);
    } else {
      changeLanguage("en");
    }
  
    // Event Listener para el selector de idioma
    $("#languageSwitcher").on("change", function () {
      const lang = $(this).val();
      if (lang === "es" || lang === "en") {
        changeLanguage(lang); // Cambiar idioma dinámicamente
      }
    });
  
    // Validación del formulario
    $("#contactForm").submit(function (event) {
      const selectedSolutions = $("input[name='solutions']:checked").length;
      if (selectedSolutions === 0) {
        event.preventDefault();
        $("#checkboxError").removeClass("d-none");
      } else {
        $("#checkboxError").addClass("d-none");
      }
    });
    $("body").removeClass("loading");
  });
  
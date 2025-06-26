document.addEventListener("DOMContentLoaded", function () {
  // Cargar reCAPTCHA y form handler si hay formulario
  if (document.getElementById("contactForm")) {
    // reCAPTCHA
    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const recaptcha = document.createElement("script");
      recaptcha.src = "https://www.google.com/recaptcha/api.js?render=6LfRmeoqAAAAAH-Dizpt81ZOBrU5YT-utPXeBUNn";
      recaptcha.async = true;
      recaptcha.defer = true;
      document.body.appendChild(recaptcha);
    }

    // form-submission-handler.js
    if (!document.querySelector('script[src*="form-submission-handler.js"]')) {
      const handler = document.createElement("script");
      handler.src = "/form-submission-handler.js";
      handler.async = true;
      document.body.appendChild(handler);
    }
  }

  // Gestor de idioma en el selector
  const languageSwitcher = document.getElementById("languageSwitcher");
  if (languageSwitcher) {
    const pathLang = window.location.pathname.split("/")[1];
    if (["es", "en", "ca"].includes(pathLang)) {
      languageSwitcher.value = pathLang;
    }

    languageSwitcher.addEventListener("change", function () {
      const selectedLang = this.value;

      // Si hi ha traducció definida, redirigeix-hi
      if (window.translations && window.translations[selectedLang]) {
        window.location.href = window.translations[selectedLang];
      } else {
        // Sinó, canvia el prefix d'idioma
        const currentPath = window.location.pathname.split("/").slice(2).join("/");
        window.location.href = "/" + selectedLang + "/" + currentPath;
      }
    });
  }
});
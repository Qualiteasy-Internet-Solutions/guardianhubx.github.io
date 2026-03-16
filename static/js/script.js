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
      const currentPath = window.location.pathname;
      const currentLang = window.currentLang;

      // Check if we're on a blog page and trying to switch to English (no blog in English)
      if (currentPath.includes("/blog/") && selectedLang === "en") {
        alert("Blog content is not available in English. Only available in Spanish and Catalan.");
        // Reset the selector to the current language
        languageSwitcher.value = currentLang;
        return;
      }

      // Si hi ha traducció definida, redirigeix-hi
      if (window.translations && window.translations[selectedLang]) {
        window.location.href = window.translations[selectedLang];
      } else {
        // Sinó, canvia el prefix d'idioma
        // Handle Spanish (default language without prefix) and other languages (with prefix)
        let pathSegments;

        if (currentLang === "es") {
          // Spanish: /blog/article/ → remove leading slash and reconstruct with new lang prefix
          pathSegments = currentPath.substring(1); // Remove leading /
        } else {
          // Other languages: /ca/blog/article/ or /en/blog/article/ → remove language prefix
          pathSegments = currentPath.split("/").slice(2).join("/");
        }

        if (selectedLang === "es") {
          // Going to Spanish (no prefix)
          window.location.href = "/" + pathSegments;
        } else {
          // Going to another language (with prefix)
          window.location.href = "/" + selectedLang + "/" + pathSegments;
        }
      }
    });
  }

const homeBanner = document.querySelector('.home-banner');
  let bannerHasBeenHidden = false;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      document.body.classList.add('scrolled');
      if (homeBanner && !bannerHasBeenHidden) {
        homeBanner.classList.add('hide-permanently');
        bannerHasBeenHidden = true;
      }
    } else {
      document.body.classList.remove('scrolled');
    }
  });

  const rotatorContainer = document.getElementById('banner-rotator');
  
  if (rotatorContainer) {
    const items = rotatorContainer.querySelectorAll('.rotator-item');
    let currentItem = 0;

    if (items.length > 1) {
      setInterval(() => {
        if (items[currentItem]) {
          items[currentItem].classList.remove('active');
        }
        
        currentItem = (currentItem + 1) % items.length;
        
        if (items[currentItem]) {
          items[currentItem].classList.add('active');
        }
      }, 7000); // Canvia de banner cada 7 segons
    }
  }

});

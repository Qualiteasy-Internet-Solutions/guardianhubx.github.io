(function() {
  // get all data in form and return object
  window.loaded = function () {
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };  
  if (document.readyState === "complete") {
    loaded();
  } else {
    document.addEventListener("DOMContentLoaded", loaded, false);
  }

  // Get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var honeypot;

    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "honeypot") {
        honeypot = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      formData[name] = element.value;

      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "responses";
    formData.formGoogleSendEmail = form.dataset.email || "";

    return {data: formData, honeypot: honeypot};
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    var form = event.target;
    var submitButton = form.querySelector("button[type='submit']");
    var loadingOverlay = document.getElementById("formLoadingOverlay");

    //Verificación de reCAPTCHA v3
    if (typeof grecaptcha === "undefined") {
      alert("Error: Google reCAPTCHA no está disponible. Recarga la página.");
      return false;
    }

    // Show loading state
    if (submitButton) {
      submitButton.disabled = true;
    }
    if (loadingOverlay) {
      loadingOverlay.classList.add("show");
    }

    grecaptcha.execute('6LfRmeoqAAAAAH-Dizpt81ZOBrU5YT-utPXeBUNn', { action: 'submit' }).then(function(token) {
      if (!token) {
          alert("Por favor, verifica que no eres un robot antes de enviar el formulario.");
          if (submitButton) {
            submitButton.disabled = false;
          }
          if (loadingOverlay) {
            loadingOverlay.classList.remove("show");
          }
          return false;
      }
      // Insertar el token en un campo oculto del formulario
      var recaptchaInput = document.createElement("input");
      recaptchaInput.setAttribute("type", "hidden");
      recaptchaInput.setAttribute("name", "g-recaptcha-response");
      recaptchaInput.setAttribute("value", token);
      form.appendChild(recaptchaInput);

      var formData = getFormData(form);
      if (formData.honeypot) {
        if (submitButton) {
          submitButton.disabled = false;
        }
        if (loadingOverlay) {
          loadingOverlay.classList.remove("show");
        }
        return false;
      }

      disableAllButtons(form);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', form.action);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              form.reset();
              var nextUrl = form.querySelector("input[name='_next']").value;
              if (nextUrl) window.location.href = nextUrl;
            } else {
              alert("Error al enviar el formulario. Por favor, intenta de nuevo.");
              if (submitButton) {
                submitButton.disabled = false;
              }
              if (loadingOverlay) {
                loadingOverlay.classList.remove("show");
              }
            }
          }
      };

      var encoded = Object.keys(formData.data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(formData.data[k]);
      }).join('&');

      xhr.send(encoded);
    }).catch(function(error) {
      alert("Error con reCAPTCHA: " + error);
      if (submitButton) {
        submitButton.disabled = false;
      }
      if (loadingOverlay) {
        loadingOverlay.classList.remove("show");
      }
      return false;
    });
  }

  function loaded() {
    var forms = document.querySelectorAll("form.gform");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  }
  
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})();


window.addEventListener('load', function () {

    CookieConsent.run({

        cookie: {
            name: 'ghx_consent',
            expiresAfterDays: 365
        },

        guiOptions: {
            consentModal: {
                layout: 'bar',
                position: 'bottom',
                equalWeightButtons: false
            },
            preferencesModal: {
                layout: 'box'
            }
        },

        onConsent: function () {
            // Si accepta analytics, activem GTM
            if (CookieConsent.acceptedCategory('analytics')) {
                loadGTM();
            }
        },

        onChange: function () {
            if (CookieConsent.acceptedCategory('analytics')) {
                loadGTM();
            }
        },

        categories: {
            necessary: {
                enabled: true,
                readOnly: true,
                cookies: [
                    { name: 'ghx_ref' },
                    { name: 'ghx_consent' },
                    { name: '_GRECAPTCHA' }
                ]
            },
            analytics: {
                enabled: false,
                autoClear: {
                    cookies: [
                        { name: /^_ga/ },
                        { name: '_gid' },
                        { name: '_gat' }
                    ]
                }
            }
        },

        language: {
            default: 'es',
            autoDetect: 'document',
            translations: {
                es: {
                    consentModal: {
                        title: 'Usamos cookies',
                        description: 'Utilizamos cookies esenciales para el funcionamiento del sitio y, con tu consentimiento, cookies analíticas para mejorar nuestra web.',
                        acceptAllBtn: 'Aceptar todo',
                        acceptNecessaryBtn: 'Solo esenciales',
                        showPreferencesBtn: 'Personalizar'
                    },
                    preferencesModal: {
                        title: 'Preferencias de cookies',
                        acceptAllBtn: 'Aceptar todo',
                        acceptNecessaryBtn: 'Solo esenciales',
                        savePreferencesBtn: 'Guardar preferencias',
                        closeIconLabel: 'Cerrar',
                        sections: [
                            {
                                title: 'Cookies esenciales',
                                description: 'Estas cookies son necesarias para el funcionamiento básico del sitio: seguimiento de referidos de partners (ghx_ref) y protección antispam de formularios (reCAPTCHA). No requieren consentimiento.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Cookies analíticas',
                                description: 'Google Analytics nos ayuda a entender cómo los visitantes interactúan con nuestra web. Toda la información es anónima.',
                                linkedCategory: 'analytics'
                            }
                        ]
                    }
                },
                ca: {
                    consentModal: {
                        title: 'Usem galetes',
                        description: 'Utilitzem galetes essencials per al funcionament del lloc i, amb el teu consentiment, galetes analítiques per millorar la nostra web.',
                        acceptAllBtn: 'Acceptar-ho tot',
                        acceptNecessaryBtn: 'Només essencials',
                        showPreferencesBtn: 'Personalitzar'
                    },
                    preferencesModal: {
                        title: 'Preferències de galetes',
                        acceptAllBtn: 'Acceptar-ho tot',
                        acceptNecessaryBtn: 'Només essencials',
                        savePreferencesBtn: 'Desar preferències',
                        closeIconLabel: 'Tancar',
                        sections: [
                            {
                                title: 'Galetes essencials',
                                description: 'Aquestes galetes són necessàries per al funcionament bàsic del lloc: seguiment de referits de partners (ghx_ref) i protecció antispam dels formularis (reCAPTCHA). No requereixen consentiment.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Galetes analítiques',
                                description: 'Google Analytics ens ajuda a entendre com els visitants interactuen amb la nostra web. Tota la informació és anònima.',
                                linkedCategory: 'analytics'
                            }
                        ]
                    }
                },
                en: {
                    consentModal: {
                        title: 'We use cookies',
                        description: 'We use essential cookies for site functionality and, with your consent, analytics cookies to improve our website.',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Essential only',
                        showPreferencesBtn: 'Customize'
                    },
                    preferencesModal: {
                        title: 'Cookie preferences',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Essential only',
                        savePreferencesBtn: 'Save preferences',
                        closeIconLabel: 'Close',
                        sections: [
                            {
                                title: 'Essential cookies',
                                description: 'These cookies are necessary for basic site functionality: partner referral tracking (ghx_ref) and form spam protection (reCAPTCHA). They do not require consent.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Analytics cookies',
                                description: 'Google Analytics helps us understand how visitors interact with our website. All information is anonymous.',
                                linkedCategory: 'analytics'
                            }
                        ]
                    }
                }
            }
        }
    });
});

function loadGTM() {
    if (window._gtmLoaded) return;
    window._gtmLoaded = true;
    (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-584VRJ97');
}

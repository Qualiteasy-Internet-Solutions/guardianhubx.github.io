(function () {
    var COOKIE_NAME = 'ghx_ref';
    var COOKIE_DAYS = 30;

    function setCookie(name, value, days) {
        var expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = name + '=' + encodeURIComponent(value) +
            '; expires=' + expires + '; path=/; SameSite=Lax';
    }

    function getCookie(name) {
        var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
        return match ? decodeURIComponent(match[1]) : '';
    }

    // Captura ?ref= de la URL i guarda cookie (només caràcters segurs)
    var params = new URLSearchParams(window.location.search);
    var ref = params.get('ref');
    if (ref && /^[a-zA-Z0-9_-]{2,30}$/.test(ref)) {
        setCookie(COOKIE_NAME, ref, COOKIE_DAYS);
    }

    // Getter global per al formulari
    window.getGhxReferral = function () {
        return getCookie(COOKIE_NAME);
    };
})();

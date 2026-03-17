(function () {
  var script = document.currentScript;
  var params = new URLSearchParams((script.src.split('?')[1]) || '');
  var ref  = params.get('ref')  || '';
  var type = params.get('type') || 'a';
  var BASE = 'https://guardianhubx.com';
  var url  = BASE + '/es/guardianradar/' + (ref ? '?ref=' + encodeURIComponent(ref) : '');

  var html = type === 'b' ? bannerB(url) : bannerA(url);
  var el = document.getElementById('ghx-banner-' + type);
  if (el) el.innerHTML = html;

  function bannerA(url) {
    return '<a href="' + url + '" target="_blank" rel="noopener sponsored" style="display:flex;flex-direction:column;justify-content:space-between;width:300px;height:250px;background:linear-gradient(135deg,#0a1628 0%,#1a3a6b 100%);padding:18px;box-sizing:border-box;text-decoration:none;color:white;font-family:Arial,sans-serif;overflow:hidden;position:relative;">'
      + '<img src="' + BASE + '/img/logo_GHX_01-01.webp" alt="GuardianHubX" style="height:75px;width:auto;max-width:220px;object-fit:contain;filter:brightness(0) invert(1);">'
      + '<div style="position:relative;z-index:1;">'
      + '<div style="font-size:15px;font-weight:700;line-height:1.3;margin-bottom:6px;">Protege tu empresa de amenazas digitales</div>'
      + '<div style="font-size:11px;color:#94a3b8;line-height:1.4;">Monitorización de dominios, correos y credenciales en la Dark Web.</div>'
      + '<div style="background:#007BFF;color:white;font-size:12px;font-weight:700;padding:8px 16px;border-radius:6px;display:inline-block;margin-top:12px;">Descubre GuardianRadar &#8594;</div>'
      + '</div>'
      + '<img src="' + BASE + '/img/cybersecurity-illustration.webp" alt="" style="position:absolute;right:-10px;bottom:-10px;width:140px;height:140px;object-fit:cover;opacity:0.35;border-radius:50%;">'
      + '</a>';
  }

  function bannerB(url) {
    return '<a href="' + url + '" target="_blank" rel="noopener sponsored" style="display:flex;flex-direction:column;justify-content:flex-end;width:300px;height:250px;background:url(' + BASE + '/img/guardianradar-informe.webp) center/cover no-repeat;text-decoration:none;color:white;font-family:Arial,sans-serif;overflow:hidden;">'
      + '<div style="background:linear-gradient(to top,rgba(0,0,0,0.88) 0%,rgba(0,0,0,0.1) 100%);padding:16px 18px 18px;">'
      + '<img src="' + BASE + '/img/guardianradar-logo.webp" alt="GuardianRadar" style="height:22px;width:auto;max-width:160px;object-fit:contain;display:block;margin-bottom:8px;filter:brightness(0) invert(1);">'
      + '<div style="font-size:14px;font-weight:700;line-height:1.3;margin-bottom:8px;">Vigilancia digital para autónomos y pymes</div>'
      + '<div style="background:#007BFF;color:white;font-size:11px;font-weight:700;padding:7px 14px;border-radius:5px;display:inline-block;">Saber m&#225;s &#8594;</div>'
      + '</div>'
      + '</a>';
  }
})();

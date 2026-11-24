/* Sélecteur de thème fixé en bas de la fenêtre (pas du site). */
(function () {
  var T = [
    ['index.html', 'Original', '#2447f5'],
    ['f1.html', 'F1', '#f01a10'],
    ['f1vintage.html', 'F1 Vintage', '#ff5a47'],
    ['rallye.html', 'Rallye', '#c2410c'],
    ['motogp.html', 'MotoGP', '#ff6a00'],
    ['motogplemans.html', 'MotoGP Le Mans', '#d90429'],
    ['retro.html', 'Arcade Rétro', '#55ffff']
  ];
  var cur = location.pathname.split('/').pop() || 'index.html';
  var css = '.rt-switch{position:fixed;left:50%;bottom:max(.75rem,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;display:flex;gap:.2rem;padding:.3rem;background:rgba(10,10,12,.9);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.2);border-radius:999px;box-shadow:0 8px 30px rgba(0,0,0,.45);max-width:calc(100vw - 1rem);overflow-x:auto;font:600 .8rem/1 system-ui,sans-serif}' +
    '.rt-switch a{display:flex;align-items:center;gap:.45rem;padding:.55rem .85rem;border-radius:999px;color:#d9d9e0;text-decoration:none;white-space:nowrap}' +
    '.rt-switch a:hover{background:rgba(255,255,255,.12);color:#fff}' +
    '.rt-switch a[aria-current="page"]{background:#fff;color:#000}' +
    '.rt-switch i{width:.65rem;height:.65rem;border-radius:50%;background:var(--c)}' +
    '.rt-switch a:focus-visible{outline:2px solid #fff;outline-offset:2px}' +
    '@media(max-width:520px){.rt-switch a{padding:.5rem .6rem;font-size:.74rem}.rt-switch i{display:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var nav = document.createElement('nav');
  nav.className = 'rt-switch'; nav.setAttribute('aria-label', 'Changer de thème');
  T.forEach(function (t) {
    var a = document.createElement('a');
    a.href = t[0]; a.innerHTML = '<i style="--c:' + t[2] + '"></i>' + t[1];
    if (t[0] === cur) a.setAttribute('aria-current', 'page');
    a.addEventListener('click', function () {
      try { sessionStorage.setItem('rt-scroll', String(window.scrollY)); } catch (e) {}
    });
    nav.appendChild(a);
  });
  document.body.appendChild(nav);

  // Compteur de kilométrage dans la marge : 0 en haut de page, 370,1 tout en bas.
  var kcss = '.rt-km{position:fixed;right:4px;top:50%;transform:translateY(-50%);height:min(64vh,560px);width:22px;z-index:55;pointer-events:none;font:700 12px/1 system-ui,sans-serif}' +
    '.rt-km .tk{position:absolute;left:50%;top:0;bottom:0;width:10px;margin-left:-5px;background:repeating-linear-gradient(to bottom,var(--line-2,#999) 0 1px,transparent 1px 10%);border-bottom:1px solid var(--line-2,#999);opacity:.8}' +
    '.rt-km .tr{position:absolute;left:50%;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--line-2,#999)}' +
    '.rt-km .th{position:absolute;left:0;right:0;top:0}' +
    '.rt-km b{display:block;writing-mode:vertical-rl;white-space:nowrap;padding:.5rem .25rem;border-radius:3px;background:var(--accent,#2447f5);color:var(--accent-ink,#fff);letter-spacing:.04em;font-variant-numeric:tabular-nums}' +
    '@media(max-width:520px){.rt-km{display:none}}';
  var kst = document.createElement('style'); kst.textContent = kcss; document.head.appendChild(kst);
  var km = document.createElement('div');
  km.className = 'rt-km'; km.setAttribute('aria-hidden', 'true');
  km.innerHTML = '<div class="tk"></div><div class="tr"></div><div class="th"><b>0 km</b></div>';
  document.body.appendChild(km);
  var th = km.querySelector('.th'), val = km.querySelector('b'), tick = false;
  function updKm() {
    tick = false;
    var d = document.documentElement, max = d.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    th.style.top = (p * 100) + '%'; th.style.transform = 'translateY(-' + (p * 100) + '%)';
    val.textContent = p === 0 ? '0 km' : (p * 370.1).toFixed(1).replace('.', ',') + ' km';
  }
  function reqKm() { if (!tick) { tick = true; requestAnimationFrame(updKm); } }
  window.addEventListener('scroll', reqKm, { passive: true });
  window.addEventListener('resize', reqKm);
  window.addEventListener('load', function () { reqKm(); setTimeout(reqKm, 600); });
  updKm();
  // On reste au même endroit de la page après un changement de thème.
  window.addEventListener('load', function () {
    try {
      var y = sessionStorage.getItem('rt-scroll');
      if (y !== null) { sessionStorage.removeItem('rt-scroll'); setTimeout(function () { window.scrollTo({ top: +y, behavior: 'instant' }); }, 60); }
    } catch (e) {}
  });
})();

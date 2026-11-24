/* Intros d'ouverture + décors animés par thème. */
(function () {
  var id = document.documentElement.dataset.theme;
  if (!id) return;

  // Voiture vue de dos (pixel art)
  function car(c, d) {
    return '<svg viewBox="0 0 24 14" shape-rendering="crispEdges" aria-hidden="true">' +
        '<rect x="1" y="8" width="4" height="6" fill="#111"/><rect x="19" y="8" width="4" height="6" fill="#111"/>' +
        '<rect x="2" y="3" width="20" height="2" fill="' + d + '"/><rect x="3" y="5" width="18" height="7" fill="' + c + '"/>' +
        '<rect x="7" y="1" width="10" height="5" fill="' + c + '"/><rect x="8" y="2" width="8" height="3" fill="#9fd6ff"/>' +
        '<rect x="4" y="8" width="3" height="2" fill="#ff3030"/><rect x="17" y="8" width="3" height="2" fill="#ff3030"/></svg>';
  }

  // Retro : des voitures roulent sur la route de l'accueil
  if (id === 'retro') {
    var hero = document.querySelector('.hero');
    if (hero) {
      var list = [
        ['#55ffff', '#1a8a8a', -1, 3.6, 0], 
        ['#ff55ff', '#9a2a9a', 1, 4.4, 1.2],
        ['#ffffff', '#999999', 1.75, 5, .6], 
        ['#55ff55', '#1a8a1a', -1, 4.8, 2.9]];
      var h = '<div class="mtn"></div>';
      list.forEach(function (o) {
        h += '<div class="car" style="--lane:' + o[2] + ';animation-duration:' + o[3] + 's;animation-delay:' + o[4] + 's">' + car(o[0], o[1]) + '</div>';
      });
      h += '<div class="me">' + car('#e8261c', '#8a120c') + '</div>';
      var road = document.createElement('div');
      road.className = 'road'; road.setAttribute('aria-hidden', 'true'); road.innerHTML = h;
      hero.appendChild(road);
      var fit = function () { road.style.setProperty('--w', road.clientWidth + 'px'); };
      fit(); window.addEventListener('resize', fit);
    }
  }

  // Roue vue de côté (pneu, flanc rouge, jante, 5 branches)
  function wheel(x, y, s) {
    return '<g transform="translate(' + x + ' ' + y + ') scale(' + s + ')"><g class="spin">' +
        '<circle r="106" fill="#111"/><circle r="99" fill="none" stroke="#2c2c2c" stroke-width="14" stroke-dasharray="7 5"/>' +
        '<circle r="88" fill="#0d0d0d"/><circle r="80" fill="none" stroke="#f01a10" stroke-width="5" stroke-dasharray="40 14"/><circle r="66" fill="#1b1b1e"/>' +
        '<circle r="60" fill="#8f949c"/><circle r="52" fill="#2b2d33"/><g stroke="#b8bcc4" stroke-width="9" stroke-linecap="round">' +
        [0, 72, 144, 216, 288].map(function (a) { return '<path d="M0 0V-47" transform="rotate(' + a + ')"/>'; }).join('') +
        '</g><circle r="13" fill="#e8c14a"/><circle r="4" fill="#222"/></g></g>';
  }
  // Monoplace de F1 vue de profil, tournée vers la droite
  var F1CAR = '<svg viewBox="0 0 400 110" aria-hidden="true">' +
      '<path d="M34 22h24l4 46H40z" fill="#c80500"/><rect x="30" y="26" width="34" height="5" fill="#fff"/><rect x="57" y="60" width="7" height="30" fill="#222"/>' +
      '<rect x="56" y="90" width="296" height="6" rx="2" fill="#1a1a1a"/>' +
      '<path d="M62 90 L66 62 L108 50 L148 30 L176 40 L214 47 L246 49 L300 67 L374 80 L374 87 L300 91 Z" fill="#e10600"/>' +
      '<path d="M138 62 L230 57 L262 73 L232 89 L138 89 Z" fill="#a80400"/><path d="M262 57 L300 67 L300 73 L264 63 Z" fill="#fff"/>' +
      '<path d="M140 31 L152 27 L160 34 L146 40Z" fill="#111"/>' +
      '<circle cx="228" cy="43" r="8" fill="#f2c230"/><rect x="226" y="39" width="10" height="4" fill="#111"/>' +
      '<path d="M206 49 C210 33 238 30 254 48" fill="none" stroke="#222" stroke-width="4" stroke-linecap="round"/>' +
      '<path d="M350 72 L398 70 L399 92 L350 92Z" fill="#161616"/><rect x="348" y="87" width="52" height="5" fill="#fff"/><rect x="348" y="92" width="52" height="3" fill="#e10600"/>' +
      wheel(92, 72, 0.255) + wheel(318, 77, 0.208) + '</svg>';

  var lights = [0, 1, 2, 3, 4].map(function (n) { return '<div class="pod" style="--d:' + (0.5 + n * 0.45).toFixed(2) + 's"><i></i><i></i></div>'; }).join('');

  // Fumée du burn : une bouffée toutes les 80 ms entre le feu vert (2,75 s) et le départ (4,15 s)
  var smoke = '';
  for (var k = 0; k < 18; k++) {
    smoke += '<i style="--d:' + (2.75 + k * 0.08).toFixed(2) + 's;--dx:' + (-70 - (k % 4) * 45) + '%"></i>';
  }

  var TRACK = 'M70 150 L220 150 C250 150 270 135 268 112 L262 95 C258 82 244 78 232 84 L215 92 C205 97 196 90 200 80 L212 52 C218 38 204 28 190 34 L120 62 C106 68 96 60 100 48 L104 38 C108 26 96 20 84 26 L54 44 C38 53 32 70 40 88 L52 118 C60 138 70 140 70 150Z';

  var INTROS = {
    f1: { ms: 6500, html: '<div class="speed"></div>' + '<div class="ground"></div>' + '<div class="lights">' + lights + '</div>' + '<div class="iname">Maël Lemaire</div>' + '<div class="smokewrap">' + smoke + '</div>' + '<div class="carwrap">' + F1CAR + '</div>' },
    f1vintage: { ms: 4600, html: '<div class="lights">' + lights + '</div><div class="go">Feu vert, c’est parti</div>' },
    rallye: { ms: 4000, html: '<div class="fill"></div><div class="book"><p>SS1 · Maël Lemaire</p><b class="trip" data-count="1240" data-fmt="km" data-dur="2800" data-delay="300">0,00 km</b>' +
          '<ul><li style="--i:0">0,00 km · Départ chronométré</li><li style="--i:1">0,25 km · Gauche 3 serré</li><li style="--i:2">0,60 km · Droite 4, ne pas couper</li><li style="--i:3">0,95 km · Bosse, gravier</li><li style="--i:4">1,24 km · Arrivée</li></ul></div>' },
    motogp: { ms: 3900, html: '<div class="gauge"><svg viewBox="0 0 300 190" aria-hidden="true"><defs><linearGradient id="gg" x1="0" x2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset=".65" stop-color="#ffd000"/><stop offset="1" stop-color="#ff2a00"/></linearGradient></defs>' +
          '<path class="arc" d="M30 165 A120 120 0 0 1 270 165" fill="none" stroke="url(#gg)" stroke-width="16" stroke-dasharray="7 5"/>' +
          '<g class="needle"><path d="M150 165 L150 62" stroke="#ff6a00" stroke-width="4" stroke-linecap="round"/><circle cx="150" cy="165" r="9" fill="#ff6a00"/></g></svg>' +
          '<p class="kmh"><b data-count="312" data-fmt="int" data-dur="1200" data-delay="300">0</b> <small>km/h</small></p><p class="who">Maël Lemaire</p></div>' },
    motogplemans: { ms: 3700, html: '<div class="map"><svg viewBox="0 0 320 200" aria-hidden="true"><path d="' + TRACK + '" fill="none" stroke="#d5d9e0" stroke-width="14" stroke-linejoin="round"/>' +
          '<path class="draw" pathLength="1" d="' + TRACK + '" fill="none" stroke="#d90429" stroke-width="5" stroke-linejoin="round"/>' +
          '<circle r="7" fill="#d90429" opacity="0"><set attributeName="opacity" to="1" begin=".4s" fill="freeze"/><animateMotion dur="2.4s" begin=".4s" fill="freeze" path="' + TRACK + '"/></circle></svg>' +
          '<p class="lap" data-count="107312" data-fmt="lap" data-dur="2400" data-delay="400">0:00.000</p><p class="who">Maël Lemaire</p></div><div class="tri"></div>' },
    retro: { ms: 3900, html: '<div class="rroad"></div><div class="term"><span class="ty" style="--n:18;--d:.3s">PREPARE TO QUALIFY</span><span class="ty y" style="--n:20;--d:1.4s">TIME 90   LAP 1   GO!</span></div>' +
          '<div class="rcar">' + car('#e8261c', '#8a120c') + '</div><div class="flash"></div>' }
  };

  // F1 : compteur de vitesse dans le rail, sous « Contact », piloté par le défilement
  // (0 km/h tout en haut de la page, 370.1 km/h tout en bas : vitesse de pointe d'une F1)
  if (id === 'f1' || id === 'f1vintage') {
    var slot = document.querySelector('.nav-in nav');
    if (slot) {
      var MAXV = 370.1, CX = 110, CY = 104, ticks = '';
      for (var t = 0; t <= 10; t++) {
        var ang = (-90 + t * 18) * Math.PI / 180, big = t % 5 === 0, r1 = big ? 64 : 72, r2 = 80;
        ticks += '<line x1="' + (CX + r1 * Math.sin(ang)).toFixed(1) + '" y1="' + (CY - r1 * Math.cos(ang)).toFixed(1) +
            '" x2="' + (CX + r2 * Math.sin(ang)).toFixed(1) + '" y2="' + (CY - r2 * Math.cos(ang)).toFixed(1) +
            '" stroke="' + (big ? '#fff' : '#8d8d98') + '" stroke-width="' + (big ? 2.5 : 1.5) + '"/>';
      }
      var sp = document.createElement('div');
      sp.className = 'speedo'; sp.setAttribute('aria-hidden', 'true');
      sp.innerHTML = '<svg viewBox="0 0 220 124">' +
          '<path class="sp-track" pathLength="1" d="M20 104 A90 90 0 0 1 200 104" fill="none" stroke-width="8"/>' +
          '<path class="sp-fill" pathLength="1" d="M20 104 A90 90 0 0 1 200 104" fill="none" stroke-width="8" stroke-dasharray="1 1" stroke-dashoffset="1"/>' +
          ticks +
          '<text x="20" y="121" class="sp-lab" text-anchor="middle">0</text><text x="200" y="121" class="sp-lab" text-anchor="middle">370</text>' +
          '<g class="sp-needle" transform="rotate(-90 ' + CX + ' ' + CY + ')"><path d="M' + CX + ' ' + (CY + 10) + 'L' + CX + ' 30" stroke="#f01a10" stroke-width="4" stroke-linecap="round"/></g>' +
          '<circle cx="' + CX + '" cy="' + CY + '" r="8" fill="#f01a10"/><circle cx="' + CX + '" cy="' + CY + '" r="3" fill="#000"/></svg>' +
          '<p class="sp-val"><b>0.0</b><small>km/h</small></p>';
      slot.insertAdjacentElement('afterend', sp);

      var needle = sp.querySelector('.sp-needle'), fillArc = sp.querySelector('.sp-fill'), val = sp.querySelector('.sp-val b');
      var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, cur = 0, target = 0, raf = 0;
      function draw() {
        needle.setAttribute('transform', 'rotate(' + (-90 + cur * 180).toFixed(2) + ' ' + CX + ' ' + CY + ')');
        fillArc.setAttribute('stroke-dashoffset', (1 - cur).toFixed(4));
        val.textContent = (cur * MAXV).toFixed(1);
      }
      function tick() {
        if (reduce || Math.abs(target - cur) < 0.0003) { cur = target; raf = 0; } else { cur += (target - cur) * 0.18; raf = requestAnimationFrame(tick); }
        draw();
      }
      function update() {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        target = h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0;
        if (!raf) raf = requestAnimationFrame(tick);
      }
      window.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      window.addEventListener('load', update);
      update();
    }
  }

  var I = INTROS[id];
  if (!I || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var el = document.createElement('div');
  el.className = 'intro i-' + id;
  el.innerHTML = I.html + '<button type="button" class="skip-i">Passer l’intro</button>';
  document.body.appendChild(el);
  document.body.classList.add('lock');

  // Compteurs animés (kilomètres, tour chronométré, vitesse)
  Array.prototype.forEach.call(el.querySelectorAll('[data-count]'), function (n) {
    var to = +n.dataset.count, dur = +n.dataset.dur, delay = +n.dataset.delay, f = n.dataset.fmt, t0 = null;
    function fmt(v) {
      if (f === 'km') return (v / 1000).toFixed(2).replace('.', ',') + ' km';
      if (f === 'lap') { var m = Math.floor(v / 60000), s = Math.floor(v % 60000 / 1000), ms = Math.floor(v % 1000); return m + ':' + (s < 10 ? '0' : '') + s + '.' + ('00' + ms).slice(-3); }
      return String(Math.round(v));
    }
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min(1, (t - t0) / dur);
      n.textContent = fmt(to * p);
      if (p < 1) requestAnimationFrame(step);
    }
    setTimeout(function () { requestAnimationFrame(step); }, delay);
  });

  var done = false, timer;
  function end() {
    if (done) return; done = true; clearTimeout(timer);
    el.classList.add('out'); document.body.classList.remove('lock');
    setTimeout(function () { el.remove(); }, 700);
  }
  timer = setTimeout(end, I.ms);
  el.addEventListener('click', end);
  window.addEventListener('keydown', end, { once: true });
  el.querySelector('.skip-i').focus({ preventScroll: true });
})();
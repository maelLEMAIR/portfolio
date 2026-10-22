(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let lang = 'fr', filter = 'all', openId = null;
try { const s = localStorage.getItem('lang'); if (s === 'fr' || s === 'en') lang = s; } catch (e) {}
const L = v => v == null ? '' : typeof v === 'string' ? v : (v[lang] ?? v.fr ?? '');
const T = k => (I18N[lang] && I18N[lang][k]) ?? k;

/* Image absente : on la masque, le texte de remplacement derrière reste visible */
document.addEventListener('error', e => { if (e.target.tagName === 'IMG') e.target.classList.add('broken'); }, true);

/* ---------- Médias ---------- */
function archetypeSVG() {
  let s = '';
  [[2, 4], [3, 3], [4, 5]].forEach(([n, rows], i) => {
    const x0 = 12 + i * 98, w = 88 / n;
    for (let c = 0; c < n; c++) s += `<rect class="h" x="${x0 + c * w + 1}" y="14" width="${w - 2}" height="12" rx="2" style="opacity:${1 - c * 0.18}"/>`;
    for (let r = 0; r < rows; r++) for (let c = 0; c < n; c++) s += `<rect class="c" x="${x0 + c * w + 1}" y="${32 + r * 14}" width="${w - 2}" height="10" rx="2"/>`;
  });
  return `<svg viewBox="0 0 300 112" role="img" aria-label="${esc(T('artAlt'))}">${s}</svg>`;
}
const tile = (src, alt) => `<div class="media"><span class="ph">${esc(T('imgMissing'))}</span><img src="${esc(src)}" alt="${esc(L(alt))}" loading="lazy" decoding="async"></div>`;
const slot = key => `<div class="media"><span class="ph">${esc(T(key))}</span></div>`;
function visual(p) {
  const im = p.images && p.images[0];
  if (im) return tile(im.src, im.alt);
  if (p.art === 'archetypes') return `<div class="media art">${archetypeSVG()}</div>`;
  return slot('shot');
}
function videoHTML(p) {
  if (p.video) {
    return /\.(mp4|webm)$/i.test(p.video)
      ? `<video controls preload="none" playsinline src="${esc(p.video)}"></video>`
      : `<iframe class="vid" loading="lazy" src="${esc(p.video)}" title="${esc(L(p.name))}" allowfullscreen></iframe>`;
  }
  return p.videoSlot ? slot('videoSlot') : '';
}

/* ---------- Rendu ---------- */
function renderFilters() {
  $('#filters').innerHTML = CATEGORIES.map(c =>
    `<button type="button" data-filter="${c.id}" aria-pressed="${c.id === filter}">${esc(L(c.label))}</button>`).join('');
}
function card(p, i) {
  const tags = p.tech.map(t => `<li>${esc(L(t))}</li>`).join('');
  const status = `<span class="chip ${p.statusKind === 'done' ? 'done' : 'proto'}">${esc(L(p.status))}</span>`;
  const btn = `<button type="button" class="open" data-id="${esc(p.id)}" aria-haspopup="dialog">${esc(L(p.name))}</button>`;
  if (p.featured) {
    return `<li class="feat reveal"><div class="feat-card">${visual(p)}
      <div class="feat-body">
        <div class="row">${status}<span class="chip">${esc(T('featured'))}</span></div>
        <h3>${btn}</h3>
        <p class="type">${esc(L(p.type))}</p>
        <p>${esc(L(p.short))}</p>
        <ul class="tags">${tags}</ul>
        <span class="details">${esc(T('details'))}</span>
      </div></div></li>`;
  }
  return `<li class="prow reveal">
    <span class="no" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
    <div><h3>${btn}</h3><p class="type">${esc(L(p.type))}</p></div>
    <div class="desc"><p>${esc(L(p.short))}</p><ul class="tags">${tags}</ul></div>
    <div class="side">${status}<span class="details">${esc(T('details'))}</span></div></li>`;
}
function renderProjects() {
  const list = PROJECTS.filter(p => filter === 'all' || p.categories.includes(filter));
  $('#grid').innerHTML = list.length ? list.map((p, i) => card(p, i)).join('') : `<li class="empty">${esc(T('noProjects'))}</li>`;
  observeReveals();
}
function renderSkills() {
  $('#skills-list').innerHTML = SKILLS.map(g =>
    `<div class="skill-group reveal"><h3>${esc(L(g.title))}</h3><ul>${g.items.map(i => `<li>${esc(L(i))}</li>`).join('')}</ul></div>`).join('');
  $('#interests').innerHTML = `<h3>${esc(T('interestsTitle'))}</h3><p>${esc(T('interestsNote'))}</p><ul class="tags">${INTERESTS.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
}
function renderJourney() {
  $('#timeline').innerHTML = JOURNEY.map(j => {
    const td = f => (j.todo || []).includes(f) ? ' todo' : '';
    return `<li class="reveal"><p class="when${td('period')}">${esc(L(j.period))}</p><div><h3>${esc(L(j.title))}</h3>${j.place ? `<p class="where${td('place')}">${esc(L(j.place))}</p>` : ''}</div><p>${esc(L(j.text))}</p></li>`;
  }).join('');
}
function renderContact() {
  const mail = `mailto:${SITE.email}?subject=${encodeURIComponent(T('mailSubject'))}`;
  $('#mail-link').href = `mailto:${SITE.email}`; $('#mail-link').textContent = SITE.email;
  $('#mail-btn').href = mail;
  const cv = $('#cv-btn');
  cv.hidden = !SITE.cv.enabled; cv.href = SITE.cv.file;
  $('#avail').hidden = !SITE.available;
}

/* ---------- Fiche projet ---------- */
function fillDialog(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  const gallery = (p.images && p.images.length ? p.images.map(i => tile(i.src, i.alt)).join('') : visual(p)) + videoHTML(p);
  const secs = (p.sections || []).map(s => `<section class="dsec"><h3>${esc(L(s.title))}</h3>${s.body ? `<p>${esc(L(s.body))}</p>` : ''}${s.todo ? `<p class="todo">${esc(T('todo'))}</p>` : ''}</section>`).join('');
  const team = p.team ? `<section class="dsec"><h3>${esc(p.teamLabel ? L(p.teamLabel) : T('teamFallback'))}</h3><ul class="team">${p.team.map(m =>
    `<li>${m.url ? `<a href="${esc(m.url)}" target="_blank" rel="noopener noreferrer">${esc(m.name)}</a>` : esc(m.name)}${m.role ? ` <span>(${esc(L(m.role))})</span>` : ''}</li>`).join('')}</ul></section>` : '';
  $('#dlg-body').innerHTML = `
    <div class="row"><span class="chip ${p.statusKind === 'done' ? 'done' : 'proto'}">${esc(L(p.status))}</span><span class="chip">${esc(L(p.type))}</span></div>
    <h2 id="dlg-title">${esc(L(p.name))}</h2>
    <div class="gallery">${gallery}</div>
    ${(p.long ? L(p.long) : []).map(t => `<p>${esc(t)}</p>`).join('')}
    <section class="dsec"><h3>${esc(T('techLabel'))}</h3><ul class="tags">${p.tech.map(t => `<li>${esc(L(t))}</li>`).join('')}</ul></section>
    ${team}${secs}
    ${p.github ? `<p class="dlinks"><a class="btn primary" href="${esc(p.github)}" target="_blank" rel="noopener noreferrer">${esc(T('repo'))}</a></p>` : ''}`;
}
const dlg = $('#dlg');
function openProject(id) {
  openId = id; fillDialog(id);
  if (!dlg.open) dlg.showModal();
  document.body.classList.add('lock');
  history.replaceState(null, '', '#project-' + id);
  dlg.scrollTop = 0;
}
dlg.addEventListener('close', () => {
  openId = null; document.body.classList.remove('lock');
  history.replaceState(null, '', '#projects');
});
dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
$('#dlg-close').addEventListener('click', () => dlg.close());

/* ---------- Langue ---------- */
function applyI18n() {
  document.documentElement.lang = lang;
  document.title = T('title');
  const md = $('meta[name="description"]'); if (md) md.content = T('desc');
  const og = $('meta[property="og:title"]'); if (og) og.content = T('title');
  $$('[data-i18n]').forEach(el => { el.textContent = T(el.dataset.i18n); });
  $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', T(el.dataset.i18nAria)));
  $$('[data-i18n-alt]').forEach(el => el.setAttribute('alt', T(el.dataset.i18nAlt)));
  $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  $$('[data-site]').forEach(a => { a.href = SITE[a.dataset.site]; });
  $('#photo').setAttribute('src', SITE.photo);
  $('#year').textContent = new Date().getFullYear();
}
function renderAll() {
  applyI18n(); renderFilters(); renderProjects(); renderSkills(); renderJourney(); renderContact();
  if (openId) fillDialog(openId);
  observeReveals();
}
function setLang(l) {
  if (l === lang) return;
  lang = l;
  try { localStorage.setItem('lang', l); } catch (e) {}
  document.body.classList.add('switching');
  setTimeout(() => { renderAll(); document.body.classList.remove('switching'); }, 150);
}

/* ---------- Animations d'apparition ---------- */
let io = null;
function observeReveals() {
  const els = $$('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  io = io || new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* ---------- Événements ---------- */
$('#filters').addEventListener('click', e => {
  const b = e.target.closest('[data-filter]'); if (!b) return;
  filter = b.dataset.filter; renderFilters(); renderProjects();
  $(`#filters [data-filter="${filter}"]`).focus();
});
$('#grid').addEventListener('click', e => {
  const b = e.target.closest('.open'); if (b) openProject(b.dataset.id);
});
$$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

const nav = $('#nav'), menuBtn = $('#menu-btn');
const closeMenu = () => { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); };
menuBtn.addEventListener('click', () => {
  const o = nav.classList.toggle('open'); menuBtn.setAttribute('aria-expanded', String(o));
});
$$('#nav-links a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menuBtn.focus(); } });

/* Lien actif dans la navigation */
if ('IntersectionObserver' in window) {
  const links = $$('#nav-links a');
  const spy = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    links.forEach(a => a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + en.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(s => spy.observe(s));
}

/* Copie de l'email */
let statusTimer;
const say = msg => {
  const s = $('#copy-status'); s.textContent = msg;
  clearTimeout(statusTimer); statusTimer = setTimeout(() => { s.textContent = ''; }, 4000);
};
$('#copy-btn').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(SITE.email); say(T('copied')); }
  catch (err) {
    const ta = document.createElement('textarea');
    ta.value = SITE.email; ta.style.cssText = 'position:fixed;opacity:0';
    document.body.append(ta); ta.select();
    let ok = false; try { ok = document.execCommand('copy'); } catch (_) {}
    ta.remove(); say(ok ? T('copied') : `${T('copyFail')} ${SITE.email}`);
  }
});

/* ---------- Démarrage ---------- */
renderAll();
if (location.hash.startsWith('#project-')) {
  const id = location.hash.slice(9);
  if (PROJECTS.some(p => p.id === id)) openProject(id);
}
})();

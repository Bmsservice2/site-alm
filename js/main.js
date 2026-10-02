/* ============================================================
   ALMEIDA, LEAL & MOLINA — Interações essenciais (engine BMS)
   Header mínimo (logo + botão de menu), menu lateral em tela cheia
   (único, para qualquer tamanho de tela — sem barra fixa de links),
   scrollspy, preloader e ano.
   Sem dependência de CDN: funciona mesmo se as libs falharem.
   ============================================================ */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header: sólido ao rolar, recolhe ao descer ---------- */
  var header = document.querySelector(".header");
  var toggle = document.querySelector(".menu-toggle");
  var toggleLabel = toggle && toggle.querySelector(".menu-toggle__label");
  var navDrawer = document.getElementById("nav-drawer");
  var navPanel = navDrawer && navDrawer.querySelector(".nav-drawer__panel");
  var lastY = window.scrollY;
  var navOpen = false;
  var solidPage = document.body.classList.contains("page--solid-header");

  function updateHeader() {
    if (!header) { return; }
    var y = window.scrollY;
    header.classList.toggle("header--scrolled", solidPage || y > 24 || navOpen);
    header.classList.toggle("header--nav-open", navOpen);
    var down = y > lastY + 4, up = y < lastY - 4;
    if (down && y > 560 && !navOpen) { header.classList.add("header--hidden"); }
    else if (up || y <= 560) { header.classList.remove("header--hidden"); }
    lastY = y;
  }
  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  /* ---------- Menu lateral (mesmo padrão do painel de perfil) ---------- */
  function setNav(open) {
    if (!navDrawer) { return; }
    navOpen = open;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    var menuLabels = { pt: {open:"Fechar", closed:"Menu", ariaOpen:"Fechar menu", ariaClosed:"Abrir menu"}, en: {open:"Close", closed:"Menu", ariaOpen:"Close menu", ariaClosed:"Open menu"}, es: {open:"Cerrar", closed:"Menú", ariaOpen:"Cerrar menú", ariaClosed:"Abrir menú"} };
    var ml = menuLabels[(window.ALM_I18N && window.ALM_I18N.get()) || "pt"];
    toggle.setAttribute("aria-label", open ? ml.ariaOpen : ml.ariaClosed);
    if (toggleLabel) { toggleLabel.textContent = open ? ml.open : ml.closed; }
    document.body.classList.toggle("is-locked", open);
        if (open) {
      navDrawer.hidden = false;
      if (navPanel) { navPanel.scrollTop = 0; }
      requestAnimationFrame(function () { navDrawer.classList.add("is-open"); });
    } else {
      navDrawer.classList.remove("is-open");
      setTimeout(function () { navDrawer.hidden = true; }, 650);
    }
    updateHeader();
  }
  if (toggle && navDrawer) {
    toggle.addEventListener("click", function () { setNav(!navOpen); });
    navDrawer.addEventListener("click", function (e) {
      if (e.target.closest("[data-nav-close]")) { setNav(false); return; }
      if (e.target.closest(".nav-drawer__link")) { setNav(false); }
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && navOpen) { setNav(false); toggle.focus(); } });
  }

  /* ---------- Logo volta ao topo (só na home; nas outras é link) ---------- */
  document.querySelectorAll('.logo[href="#topo"]').forEach(function (logo) {
    logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  });

  /* ---------- Scrollspy (marca o link do menu lateral) ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-drawer__link[href^="#"]'));
  var byId = {};
  links.forEach(function (l) { var id = l.getAttribute("href").slice(1); if (document.getElementById(id)) { byId[id] = l; } });
  if ("IntersectionObserver" in window && Object.keys(byId).length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("is-active"); });
          if (byId[en.target.id]) { byId[en.target.id].classList.add("is-active"); }
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    Object.keys(byId).forEach(function (id) { spy.observe(document.getElementById(id)); });
  }

  var ano = document.getElementById("ano-atual");
  if (ano) { ano.textContent = String(new Date().getFullYear()); }
})();

(function () {
  "use strict";
  var C = window.ALM_CONFIG || {};
  var U = window.ALM_UTILS || {};
  var btn = document.getElementById("contact-guided-open");
  var box = document.getElementById("contact-guided");
  if (!btn || !box) return;
  var area = box.querySelector("[data-guided-area]");
  var name = box.querySelector("[data-guided-name]");
  var desc = box.querySelector("[data-guided-desc]");
  var wa = box.querySelector("[data-guided-wa]");
  var mail = box.querySelector("[data-guided-mail]");
  function update() {
    var msg = "Olá! Vim pelo site do Almeida, Leal & Molina.";
    if (area.value) msg += "\nÁrea: " + area.value;
    if (name.value.trim()) msg += "\nNome: " + name.value.trim();
    if (desc.value.trim()) msg += "\nResumo: " + desc.value.trim();
    var url = (U.whatsUrl ? U.whatsUrl(msg) : "https://wa.me/" + (C.whatsapp || {}).numero + "?text=" + encodeURIComponent(msg));
    wa.href = url;
    mail.href = "mailto:" + (C.email || "") + "?subject=" + encodeURIComponent("Contato pelo site") + "&body=" + encodeURIComponent(msg);
  }
  btn.addEventListener("click", function () {
    box.hidden = !box.hidden;
    if (!box.hidden) { update(); area.focus(); }
  });
  box.addEventListener("input", update);
})();

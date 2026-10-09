/* ÁREAS DE ATUAÇÃO — estrutura. Os textos (PT/EN/ES) ficam em server/site/content.js.
   - path: endereço sob /atuacao/
   - equipe: ids de área do cadastro de pessoas (js/data/equipe.js) usados para listar a equipe relacionada
   - responsaveis: sócios responsáveis (todo painel de área precisa de ao menos um)
   - categoria: valor do campo "area" das publicações relacionadas */
window.ALM_AREAS = [
  { id: "tributario",  path: "tributario",                  equipe: ["tributario"],              responsaveis: ["raissa-de-almeida", "marcello-leal", "yan-molina"] },
  { id: "consultivo",  path: "tributario/consultivo",       equipe: ["consultivo-tributario"],   responsaveis: ["raissa-de-almeida", "marcello-leal"], parent: "tributario" },
  { id: "contencioso", path: "tributario/contencioso",      equipe: ["contencioso-tributario"],  responsaveis: ["yan-molina", "marcello-leal"], parent: "tributario" },
  { id: "reforma",     path: "reforma-tributaria",          equipe: [],                          responsaveis: ["marcello-leal"], parent: "tributario" },
  { id: "recuperacao", path: "recuperacao-de-creditos",     equipe: [],                          responsaveis: ["marcello-leal"], parent: "tributario" },
  { id: "societario",  path: "societario",                  equipe: ["societario"],              responsaveis: ["marcello-leal", "yan-molina"] },
  { id: "contratos",   path: "contratos",                   equipe: ["contratos"],               responsaveis: ["marcello-leal", "yan-molina"] },
  { id: "civel",       path: "civel",                       equipe: ["civel"],                   responsaveis: ["yan-molina"] },
  { id: "trabalhista", path: "trabalhista",                 equipe: ["trabalhista"],             responsaveis: ["yan-molina"] },
  { id: "arbitragem",  path: "arbitragem",                  equipe: ["arbitragem"],              responsaveis: ["marcello-leal"], independente: true }
];

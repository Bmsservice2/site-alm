/* Carrega as fontes de dados do navegador (js/config.js, js/data/*.js) no
   servidor, para que páginas e navegador usem exatamente os mesmos dados. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const db = require("../lib/store");

const ROOT = path.join(__dirname, "..", "..");

function load(file) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), "utf8"), ctx, { filename: file });
  return ctx.window;
}

const cfgWin = load("js/config.js");
const equipeWin = load("js/data/equipe.js");
const areasWin = load("js/data/areas.js");

const CONFIG = cfgWin.ALM_CONFIG;
const EQUIPE = equipeWin.ALM_EQUIPE;
const FILTROS = equipeWin.ALM_FILTROS_EQUIPE;
const ORDEM = equipeWin.ALM_ORDEM_CARGO;
const AREAS = areasWin.ALM_AREAS;

/* Contato efetivo: js/config.js + o que foi salvo em /admin → Configurações.
   É a ÚNICA fonte dos destinos (WhatsApp flutuante, botões, rodapé, contato). */
async function contact() {
  const s = await db.read((d) => d.settings || {}).catch(() => ({}));
  const numero = (s.whatsappNumero || CONFIG.whatsapp.numero).replace(/\D/g, "");
  return {
    wa: numero,
    waText: s.whatsappExibicao || CONFIG.whatsapp.exibicao,
    waMsg: CONFIG.whatsapp.mensagem,
    email: s.email || CONFIG.email
  };
}

function rankCargo(p) {
  if (p.socio) { return -1; }
  const i = ORDEM.findIndex((re) => re.test(p.cargo));
  return i === -1 ? ORDEM.length : i;
}
/* Sócios primeiro; depois por categoria de cargo (gestão, coordenação, advogados,
   trainees, estagiários), mantendo a ordem do cadastro dentro de cada categoria. */
function sortedEquipe() {
  return EQUIPE.map((p, i) => ({ p, i })).sort((a, b) => (rankCargo(a.p) - rankCargo(b.p)) || (a.i - b.i)).map((x) => x.p);
}

module.exports = { CONFIG, EQUIPE, FILTROS, AREAS, ROOT, contact, sortedEquipe };

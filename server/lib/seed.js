/* ============================================================
   ADMINISTRADOR INICIAL — garante, a cada boot, que o usuário
   administrativo exista e que a senha confira com a configurada.
   Lê ADMIN_EMAIL e ADMIN_PASSWORD do ambiente; sem elas, usa a
   credencial FIXA DE DEMONSTRAÇÃO abaixo (documentada no LEIA-ME).
   ANTES DE PUBLICAR EM PRODUÇÃO: defina ADMIN_PASSWORD forte no
   ambiente (ou remova DEMO_ADMIN) e troque a senha pelo painel.
   ============================================================ */
const DEMO_ADMIN = { email: "admin@almeidaleal.adv.br", senha: "AlmeidaDemo2026!" };

"use strict";
const bcrypt = require("bcryptjs");
const db = require("./store");
const { isEmail } = require("./util");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { sanitizeConteudo } = require("./sanitize");

async function ensureAdmin() {
  const email = (process.env.ADMIN_EMAIL || DEMO_ADMIN.email).trim().toLowerCase();
  const senha = process.env.ADMIN_PASSWORD || DEMO_ADMIN.senha;
  if (!isEmail(email)) {
    console.error("[seed] ADMIN_EMAIL inválido (" + email + "). Corrija a variável de ambiente e reinicie.");
    return;
  }

  // Idempotente: procura o usuário pelo e-mail (nunca duplica) e só regrava o
  // hash quando a senha armazenada NÃO confere com a configurada. Antes, o
  // admin só era criado com o banco vazio — um data/db.json já existente (com
  // hash de outra senha) fazia ADMIN_PASSWORD ser ignorada e o login falhar.
  // Defina ADMIN_ENFORCE_PASSWORD=false para que senhas trocadas pelo painel
  // não sejam revertidas ao reiniciar (use isso em produção, após trocar a senha).
  const enforce = String(process.env.ADMIN_ENFORCE_PASSWORD || "true").toLowerCase() !== "false";
  const atual = await db.read((d) => d.users.find((u) => u.email === email));
  if (atual && (!enforce || await bcrypt.compare(senha, atual.senhaHash || ""))) { return; }

  const senhaHash = await bcrypt.hash(senha, 12);
  const acao = await db.mutate((d) => {
    const u = d.users.find((x) => x.email === email);
    if (u) { u.senhaHash = senhaHash; u.papel = "admin"; return "atualizado"; }
    d.users.push({ nome: "Administrador", email, papel: "admin", senhaHash });
    return "criado";
  });
  console.log("[seed] Administrador " + email + " " + acao + " (senha definida em ADMIN_PASSWORD / padrão de demonstração).");
}

/* Publica as postagens de js/data/seed-posts.js UMA vez (flag em
   meta.postsSeeded). Se alguém excluir uma delas pelo painel, ela
   não volta no próximo boot. Slugs já existentes são ignorados. */
async function ensurePosts() {
  const already = await db.read((d) => d.meta && d.meta.postsSeeded);
  if (already) { return; }
  let seeds = [];
  try {
    const ctx = { window: {} }; vm.createContext(ctx);
    vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "..", "js", "data", "seed-posts.js"), "utf8"), ctx);
    seeds = Array.isArray(ctx.window.ALM_SEED_POSTS) ? ctx.window.ALM_SEED_POSTS : [];
  } catch (e) {
    // Não marca como publicado: na próxima inicialização tenta de novo.
    console.error("[seed] Não foi possível ler js/data/seed-posts.js:", e.message);
    return;
  }
  const added = await db.mutate((d) => {
    d.meta = d.meta || {};
    let n = 0;
    seeds.forEach((p) => {
      if (!p || !p.slug || d.posts.some((x) => x.slug === p.slug)) { return; }
      d.posts.push(Object.assign({}, p, { conteudo: sanitizeConteudo(p.conteudo) }));
      n++;
    });
    d.meta.postsSeeded = true;
    return n;
  });
  if (added) { console.log("[seed] " + added + " publicação(ões) inicial(is) adicionada(s) ao blog."); }
}

module.exports = { ensureAdmin, ensurePosts };

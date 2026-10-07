/* ============================================================
   PRIMEIRO ACESSO — cria o administrador inicial se o banco
   ainda não tiver nenhum usuário.
   Lê ADMIN_EMAIL e ADMIN_PASSWORD do ambiente (defina-as no
   Coolify). Sem elas, gera uma senha aleatória e a imprime UMA
   vez no log — troque-a pelo painel assim que entrar.
   ============================================================ */
"use strict";
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const db = require("./store");
const { isEmail } = require("./util");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { sanitizeConteudo } = require("./sanitize");

async function ensureAdmin() {
  const users = await db.read((d) => d.users);
  if (users.length > 0) { return; }

  const email = (process.env.ADMIN_EMAIL || "admin@almeidaleal.adv.br").trim().toLowerCase();
  let senha = process.env.ADMIN_PASSWORD;
  let gerada = false;
  if (!senha) { senha = crypto.randomBytes(9).toString("base64url"); gerada = true; }
  if (!isEmail(email)) {
    console.error("[seed] ADMIN_EMAIL inválido (" + email + "). Corrija a variável de ambiente e reinicie.");
    return;
  }

  const senhaHash = await bcrypt.hash(senha, 12);
  await db.mutate((d) => {
    d.users.push({ nome: "Administrador", email, papel: "admin", senhaHash });
  });

  console.log("============================================================");
  console.log(" Primeiro acesso ao painel criado:");
  console.log("   E-mail: " + email);
  if (gerada) {
    console.log("   Senha (gerada automaticamente, anote agora): " + senha);
    console.log("   Defina ADMIN_PASSWORD nas variáveis de ambiente para controlar a senha inicial.");
  } else {
    console.log("   Senha: a definida em ADMIN_PASSWORD");
  }
  console.log(" Troque a senha (ou crie seu usuário e remova este) em /admin → Usuários.");
  console.log("============================================================");
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

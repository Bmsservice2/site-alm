/* ÁREAS DE ATUAÇÃO — conteúdo institucional centralizado. */
/* EQUIPE RESPONSÁVEL POR MODO DE ATUAÇÃO (botões Consultivo / Contencioso).
   >>> PROVISÓRIO: a Jéssica Bastos vai definir a equipe de cada botão.
   Até lá, a lista segue apenas o cargo informado em js/data/equipe.js
   ("... Consultivo" / "... Contencioso"). Para ajustar, edite só este
   objeto (slugs de js/data/equipe.js). Lista vazia mostra "Equipe em
   definição". Quem ainda não tem foto não aparece (mesma regra do site). */
window.ALM_AREAS_TIMES = {
  tributario:  { consultivo: ["luana-secundino", "larissa-piotto", "gabriela-paranhos"], contencioso: ["eduarda-velloso", "julia-motta", "jaqueline-costa", "gabriel-pereira"] },
  societario:  { consultivo: ["luciana-belarmino", "leonardo-crivano"], contencioso: [] },
  contratos:   { consultivo: ["luciana-belarmino", "leonardo-crivano"], contencioso: [] },
  civel:       { consultivo: [], contencioso: ["eduarda-velloso", "julia-motta", "jaqueline-costa", "gabriel-pereira"] },
  trabalhista: { consultivo: ["nicolas-salles"], contencioso: ["nicolas-salles"] }
};

window.ALM_AREAS = [
  {
    id: "tributario",
    titulo: "Direito Tributário",
    resumo: "Carro-chefe do escritório, com atuação consultiva e contenciosa em matéria tributária.",
    icone: "balanca",
    equipe: ["tributario"],
    detalhe: []
  },
  {
    id: "societario",
    titulo: "Societário",
    resumo: "Estruturação e organização de sociedades e acompanhamento das relações entre sócios.",
    icone: "estrutura",
    equipe: ["societario"],
    detalhe: []
  },
  {
    id: "contratos",
    titulo: "Contratos",
    resumo: "Elaboração, revisão e negociação de contratos e atuação em disputas deles decorrentes.",
    icone: "documento",
    equipe: ["contratos"],
    detalhe: []
  },
  {
    id: "civel",
    titulo: "Cível",
    resumo: "Assessoria preventiva e condução de demandas cíveis de interesse de empresas e pessoas.",
    icone: "pilar",
    equipe: ["contencioso"],
    detalhe: []
  },
  {
    id: "trabalhista",
    titulo: "Trabalhista",
    resumo: "Orientação nas relações de trabalho e defesa em reclamações e processos trabalhistas.",
    icone: "pessoas",
    equipe: ["trabalhista"],
    detalhe: []
  }
];

window.ALM_DESTAQUES = [
  { id: "reforma-tributaria", titulo: "Reforma Tributária", href: "reforma-tributaria/", resumo: "Página dedicada ao acompanhamento e à preparação para a Reforma Tributária." },
  { id: "recuperacao-creditos", titulo: "Recuperação de Créditos", href: "recuperacao-creditos/", resumo: "Página dedicada à atuação do escritório em recuperação de créditos tributários." },
  { id: "arbitragem", titulo: "Arbitragem", href: "arbitragem/", resumo: "Serviço independente, apresentado em página própria." }
];

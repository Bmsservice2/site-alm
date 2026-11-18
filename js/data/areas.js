/* ÁREAS DE ATUAÇÃO — conteúdo institucional centralizado. */
/* EQUIPE RESPONSÁVEL POR MODO DE ATUAÇÃO (botões Consultivo / Contencioso).
   Definida pela Jéssica Bastos (documento "Áreas de Atuação", 17/11/2026):
   Contencioso, Consultivo e "Contencioso e consultivo". Para ajustar, edite só
   este objeto (slugs de js/data/equipe.js). Lista vazia mostra "Equipe em
   definição". Quem ainda não tem foto não aparece (mesma regra do site).
   Direito Regulatório ainda não tem integrantes indicados no documento. */
window.ALM_AREAS_TIMES = {
  tributario:  { consultivo: ["luana-secundino", "larissa-piotto"], contencioso: ["eduarda-velloso", "julia-motta", "jaqueline-costa", "gabriel-pereira"] },
  societario:  { consultivo: ["leonardo-crivano", "nathalia-vivas", "pedro-bornay"], contencioso: ["luciana-belarmino"] },
  contratos:   { consultivo: ["leonardo-crivano", "nathalia-vivas", "pedro-bornay"], contencioso: ["luciana-belarmino"] },
  regulatorio: { consultivo: [], contencioso: [] },
  trabalhista: { consultivo: ["nicolas-salles"], contencioso: ["nicolas-salles"] }
};

window.ALM_AREAS = [
  {
    id: "tributario",
    titulo: "Direito Tributário",
    resumo: "Carro-chefe do escritório, com atuação consultiva e contenciosa.",
    icone: "balanca",
    equipe: ["tributario"],
    detalhe: [
      "Consultivo: orientação preventiva, análise de riscos e estruturação de decisões antes que se tornem litígio.",
      "Contencioso: defesa e condução de processos nas esferas administrativa e judicial."
    ]
  },
  {
    id: "societario",
    titulo: "Direito Societário",
    resumo: "Estruturação, organização de sociedades e acompanhamento das rotinas societárias.",
    icone: "estrutura",
    equipe: ["societario"],
    detalhe: ["Contencioso cível e arbitragem civil-societária."]
  },
  {
    id: "contratos",
    titulo: "Direito Civil e Contratos",
    resumo: "Elaboração, revisão e negociação de contratos e atuação em disputas deles decorrentes.",
    icone: "documento",
    equipe: ["contratos"],
    detalhe: ["Contencioso cível.", "Arbitragem comercial doméstica e internacional."]
  },
  {
    id: "regulatorio",
    titulo: "Direito Regulatório",
    resumo: "Assessoria preventiva e condução de demandas em mercados regulados.",
    icone: "pilar",
    equipe: [],
    detalhe: ["Contencioso administrativo, judicial e arbitral."]
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

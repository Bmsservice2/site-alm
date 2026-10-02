/* ============================================================
   EQUIPE — fonte única dos dados de cada integrante.
   Para trocar foto, cargo, LinkedIn ou biografia, altere só aqui.
   - foto: caminho base SEM extensão (o site usa .webp e .jpg,
     e a versão "-480" para a grade). null = placeholder elegante.
   - linkedin: null = botão oculto até o link ser cadastrado.
   - bio: [] = sem biografia (nada é inventado).
   - areas: usadas no filtro da Equipe e no cruzamento com "Atuação".
   Conteúdo 100% conforme briefing aprovado (e-mail de 18/09/2026).
   ============================================================ */
window.ALM_EQUIPE = [
  {
    slug: "raissa-de-almeida",
    nome: "Raíssa de Almeida Pereira Leal",
    nomeCurto: "Raíssa de Almeida",
    cargo: "Sócia fundadora",
    socio: true,
    oab: "OAB/RJ 210.318",
    areas: ["tributario"],
    foto: "assets/img/equipe/raissa-de-almeida",
    fotoAmbiente: "assets/img/escritorio/raissa-escritorio",
    linkedin: "https://www.linkedin.com/in/raissadealmeida/",
    destaque: "Procuradora do Município de Niterói e ex-Procuradora da Fazenda Nacional.",
    bio: [
      "Advogada inscrita na OAB/RJ sob o nº 210.318.",
      "Procuradora do Município de Niterói.",
      "Ex-Procuradora da Fazenda Nacional, tendo atuado na Divisão de Grandes Devedores (DIGRA) da Procuradoria Regional da 3ª Região (São Paulo – Capital)."
    ],
    formacao: [
      "LLM em Direito Tributário pela FGV.",
      "Mestre em Finanças Públicas, Tributação e Desenvolvimento pela UERJ."
    ]
  },
  {
    slug: "marcello-leal",
    nome: "Marcello de Almeida Fernandes Leal",
    nomeCurto: "Marcello Leal",
    cargo: "Sócio fundador",
    socio: true,
    oab: "OAB/RJ 158.193",
    areas: ["tributario"],
    foto: "assets/img/equipe/marcello-leal",
    linkedin: "https://www.linkedin.com/in/advmarcelloleal/",
    destaque: "Ex-Conselheiro do Conselho de Contribuintes do Estado do Rio de Janeiro, professor de Direito Tributário e mestre em Finanças Públicas e Tributação pela UERJ.",
    bio: [
      "Advogado inscrito na OAB/RJ sob o nº 158.193, sócio fundador do Almeida, Leal & Molina Advogados.",
      "Ex-Conselheiro do Conselho de Contribuintes do Estado do Rio de Janeiro.",
      "Foi Coordenador Acadêmico dos cursos de pós-graduação do Ibmec/RJ de 2017 a 2020 e atualmente é Professor de Direito Tributário dos cursos de MBA, LLM e pós-graduação do Ibmec-RJ e de outras instituições de ensino superior.",
      "Ex-Diretor Jurídico da Federação das Câmaras de Comércio Exterior (FCCE). Membro-Titular da Câmara Especial de Cooperativismo da FCCE."
    ],
    formacao: [
      "Graduado pela Universidade Federal do Estado do Rio de Janeiro (UNIRIO).",
      "Pós-graduado em Direito Financeiro e Tributário pela UFFRJ/SEFAZ.",
      "Mestrado em Finanças Públicas e Tributação pela Universidade do Estado do Rio de Janeiro (UERJ).",
      "MBA Executivo em Gestão Estratégica de Negócios pela Fundação Getulio Vargas (FGV)."
    ]
  },
  {
    slug: "yan-molina",
    nome: "Yan Dutra Molina",
    nomeCurto: "Yan Dutra Molina",
    cargo: "Sócio",
    socio: true,
    oab: "OAB/RJ 99.350",
    areas: ["tributario", "contencioso"],
    foto: "assets/img/equipe/yan-molina",
    linkedin: "https://www.linkedin.com/in/yan-dutra-molina-97524257/",
    destaque: "Mais de 25 anos de advocacia no contencioso tributário e empresarial.",
    bio: [
      "Advogado inscrito na OAB/RJ sob o nº 99.350, professor, com mais de 25 anos de experiência na advocacia.",
      "Atua no contencioso tributário e empresarial, com destacada participação em tribunais administrativos e judiciais.",
      "Já participou da banca examinadora do Concurso de Exame de Ordem da Ordem dos Advogados do Brasil – Estado do Rio de Janeiro.",
      "Membro da Associação Brasileira de Direito Financeiro (ABDF) e da International Fiscal Association (IFA).",
      "Professor de Direito Tributário nos cursos de pós-graduação em Direito da Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio) há mais de 15 anos, com artigos técnicos publicados em revistas e livros especializados."
    ],
    formacao: [
      "Mestre em Direito Público pela Universidade Estácio de Sá, com ênfase em Direito Tributário (2005)."
    ]
  },

  { slug: "jessica-bastos",    nome: "Jessica Bastos",    cargo: "Gerente",                                   areas: ["gestao", "tributario"],       foto: "assets/img/equipe/jessica-bastos",    linkedin: null, bio: [] },
  { slug: "eduarda-velloso",   nome: "Eduarda Velloso",   cargo: "Coordenadora Contencioso",                  areas: ["contencioso"],              foto: "assets/img/equipe/eduarda-velloso",   linkedin: null, bio: [] },
  { slug: "luana-secundino",   nome: "Luana Secundino",   cargo: "Advogada Consultivo Tributário",            areas: ["tributario"],               foto: "assets/img/equipe/luana-secundino",   linkedin: null, bio: [] },
  { slug: "larissa-piotto",    nome: "Larissa Piotto",    cargo: "Advogada Consultivo Tributário",            areas: ["tributario"],               foto: null /* TODO: foto não enviada */, linkedin: null, bio: [] },
  { slug: "gabriela-paranhos", nome: "Gabriela Paranhos", cargo: "Advogada Consultivo Tributário",            areas: ["tributario"],               foto: null /* TODO: foto não enviada */, linkedin: null, bio: [] },
  { slug: "julia-motta",       nome: "Julia Motta",       cargo: "Advogada Contencioso",                      areas: ["contencioso"],              foto: "assets/img/equipe/julia-motta",       linkedin: null, bio: [] },
  { slug: "nicolas-salles",    nome: "Nicolas Salles",    cargo: "Advogado Consultivo e Contencioso Trabalhista", areas: ["trabalhista"],          foto: "assets/img/equipe/nicolas-salles",    linkedin: null, bio: [] },
  { slug: "jaqueline-costa",   nome: "Jaqueline Costa",   cargo: "Trainee Contencioso",                       areas: ["contencioso"],              foto: "assets/img/equipe/jaqueline-costa",   linkedin: null, bio: [] },
  { slug: "leonardo-crivano",  nome: "Leonardo Crivano",  cargo: "Advogado Contratos e Societário",           areas: ["contratos", "societario"],  foto: "assets/img/equipe/leonardo-crivano",  linkedin: null, bio: [] },
  { slug: "gabriel-pereira",   nome: "Gabriel Pereira",   cargo: "Estagiário Contencioso",                    areas: ["contencioso"],              foto: null /* TODO: foto não enviada */, linkedin: null, bio: [] },
  { slug: "luciana-belarmino", nome: "Luciana Belarmino", cargo: "Advogada Consultivo",                       areas: ["contratos", "societario"],   foto: "assets/img/equipe/luciana-belarmino", linkedin: null, bio: [] },
  { slug: "pedro-bornay",      nome: "Pedro Bornay",      cargo: "Estagiário Contratos e Societário",         areas: ["contratos", "societario"],  foto: null /* TODO: foto não enviada */, linkedin: null, bio: [] },
  { slug: "nathalia-vivas",    nome: "Nathalia Vivas",    cargo: "Estagiária Contratos e Societário",         areas: ["contratos", "societario"],  foto: null /* TODO: foto não enviada */, linkedin: null, bio: [] },
];

/* Rótulos dos filtros da Equipe (ordem de exibição) */
window.ALM_FILTROS_EQUIPE = [
  { id: "todos", rotulo: "Todos" },
  { id: "tributario", rotulo: "Tributário" },
  { id: "contencioso", rotulo: "Contencioso" },
  { id: "contratos", rotulo: "Contratos e Societário" },
  { id: "trabalhista", rotulo: "Trabalhista" },
  { id: "consultivo", rotulo: "Consultivo" },
  { id: "gestao", rotulo: "Gestão" }
];

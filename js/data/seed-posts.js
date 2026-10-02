/* ============================================================
   PUBLICAÇÕES INICIAIS
   O servidor publica estas postagens UMA vez, no primeiro boot
   (server/lib/seed.js → ensurePosts). Depois disso elas vivem no
   banco e podem ser editadas ou excluídas pelo painel /admin como
   qualquer outra. No modo demonstração (adaptador "local") elas
   também servem de semente.
   Regra: não copiar conteúdo externo sem autorização — o artigo
   do Marcello entra como REFERÊNCIA com link para o LinkedIn.
   ============================================================ */
window.ALM_SEED_POSTS = [
  {
    id: "p-reforma-tributaria-2026",
    slug: "reforma-tributaria-o-que-muda-para-as-empresas",
    titulo: "Reforma tributária: o que muda para as empresas a partir de 2026",
    resumo: "CBS, IBS e Imposto Seletivo: um panorama do novo modelo de tributação sobre o consumo e do calendário de transição que começa em 2026.",
    conteudo:
      "<p>A Emenda Constitucional nº 132, promulgada em dezembro de 2023, redesenhou a tributação sobre o consumo no Brasil. No lugar de cinco tributos com regras próprias, o país passa a adotar um modelo de IVA dual, regulamentado pela Lei Complementar nº 214/2025.</p>" +
      "<h2>O que sai e o que entra</h2>" +
      "<p>A <strong>CBS</strong> (Contribuição sobre Bens e Serviços), de competência federal, substitui o PIS e a Cofins. O <strong>IBS</strong> (Imposto sobre Bens e Serviços), compartilhado entre estados e municípios, substitui o ICMS e o ISS. O IPI tem alíquota reduzida a zero, com exceções ligadas à Zona Franca de Manaus. Completa o desenho o <strong>Imposto Seletivo</strong>, que incide sobre bens e serviços prejudiciais à saúde ou ao meio ambiente.</p>" +
      "<h2>Os princípios do novo modelo</h2>" +
      "<ul><li><strong>Não cumulatividade ampla:</strong> em regra, o imposto pago nas etapas anteriores gera crédito, reduzindo o efeito cascata.</li>" +
      "<li><strong>Tributação no destino:</strong> o tributo passa a pertencer ao local de consumo, e não ao de produção.</li>" +
      "<li><strong>Base ampla e legislação uniforme:</strong> menos regimes específicos e regras comuns para todo o país.</li>" +
      "<li><strong>Split payment:</strong> mecanismo que permite separar o tributo no momento do pagamento da operação.</li></ul>" +
      "<h2>O calendário da transição</h2>" +
      "<p>A mudança é gradual. Em <strong>2026</strong>, CBS e IBS começam em caráter de teste, com alíquotas de 0,9% e 0,1%, compensáveis com o PIS e a Cofins. Em <strong>2027</strong>, a CBS passa a vigorar plenamente, PIS e Cofins são extintos e o Imposto Seletivo entra em vigor. Entre <strong>2029 e 2032</strong>, ICMS e ISS são reduzidos progressivamente enquanto o IBS aumenta, até que, em <strong>2033</strong>, o novo sistema esteja inteiramente implantado.</p>" +
      "<blockquote>A convivência entre os dois sistemas durante a transição exige atenção redobrada a créditos, cadastros, sistemas de emissão de documentos fiscais e contratos de longo prazo.</blockquote>" +
      "<h2>Por onde começar</h2>" +
      "<p>Mapear a cadeia de fornecedores e clientes, revisar a formação de preços, avaliar o impacto sobre benefícios fiscais existentes e adaptar os sistemas são passos que as empresas já podem dar agora, para atravessar a transição com previsibilidade.</p>" +
      "<p><em>Publicação de demonstração, criada para apresentar o layout do blog. Pode ser editada ou excluída pelo painel. Foto: Kelly Sikkema / Unsplash.</em></p>",
    categoria: "Tributário",
    autor: "",
    data: "2026-09-22",
    capa: "",
    linkExterno: "",
    status: "publicado",
    atualizadoEm: "2026-09-22T12:00:00.000Z"
  },
  {
    id: "p-cbs-estoque-abertura",
    slug: "credito-de-cbs-sobre-estoque-de-abertura",
    titulo: "O crédito de CBS sobre estoque de abertura vale para quem?", // TODO: confirmar título exato com o autor
    resumo: "Artigo de Marcello Leal publicado no LinkedIn sobre o crédito de CBS relativo ao estoque de abertura.",
    conteudo: "<p>Este artigo foi publicado originalmente por Marcello Leal no LinkedIn.</p><p>O texto integral pode ser reproduzido aqui mediante autorização do autor; até lá, a publicação direciona para o original.</p>",
    categoria: "Tributário",
    autor: "marcello-leal",
    data: "", // TODO: data de publicação original não informada
    capa: "",
    linkExterno: "https://www.linkedin.com/pulse/o-cr%C3%A9dito-de-cbs-sobre-estoque-abertura-vale-para-quem-marcello-leal-otzcf/",
    status: "publicado",
    atualizadoEm: "2026-09-23T12:00:00.000Z"
  }
];

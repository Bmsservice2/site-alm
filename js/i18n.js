/* ============================================================
   ALMEIDA, LEAL & MOLINA — i18n completo da interface
   PT / EN / ES. Conteúdo editorial do blog permanece no idioma
   em que foi publicado; a interface e o conteúdo institucional
   desta versão são traduzidos por este módulo.
   ============================================================ */
(function () {
  "use strict";
  var supported = ["pt", "en", "es"];
  var saved = localStorage.getItem("alm-lang");
  var browser = (navigator.language || "pt").slice(0, 2).toLowerCase();
  var lang = supported.indexOf(saved) >= 0 ? saved : (supported.indexOf(browser) >= 0 ? browser : "pt");

  var common = {
    "Pular para o conteúdo": {en:"Skip to content", es:"Saltar al contenido"},
    "Menu": {en:"Menu", es:"Menú"}, "Fechar": {en:"Close", es:"Cerrar"}, "Advogados": {en:"Attorneys", es:"Abogados"}, "Scroll": {en:"Scroll", es:"Desplazar"},
    "Voltar ao site": {en:"Back to website", es:"Volver al sitio"},
    "O Escritório": {en:"The Firm", es:"El Estudio"}, "Áreas de Atuação": {en:"Practice Areas", es:"Áreas de Actuación"},
    "Sócios": {en:"Partners", es:"Socios"}, "Equipe": {en:"Team", es:"Equipo"},
    "Conteúdos": {en:"Insights", es:"Contenidos"}, "Contato": {en:"Contact", es:"Contacto"},
    "Navegação": {en:"Navigation", es:"Navegación"}, "Endereços": {en:"Offices", es:"Direcciones"},
    "Fale pelo WhatsApp": {en:"Contact via WhatsApp", es:"Hablar por WhatsApp"},
    "Fale conosco": {en:"Contact us", es:"Contáctenos"}, "Fale com o escritório": {en:"Contact the firm", es:"Contacte al estudio"},
    "Conheça o escritório": {en:"Meet the firm", es:"Conozca el estudio"}, "Conheça os sócios": {en:"Meet the partners", es:"Conozca a los socios"},
    "Direito Tributário": {en:"Tax Law", es:"Derecho Tributario"}, "Tributário": {en:"Tax", es:"Tributario"},
    "Societário": {en:"Corporate Law", es:"Derecho Societario"}, "Contratos": {en:"Contracts", es:"Contratos"},
    "Cível": {en:"Civil Law", es:"Derecho Civil"}, "Trabalhista": {en:"Labor Law", es:"Derecho Laboral"},
    "Contencioso": {en:"Litigation", es:"Contencioso"}, "Consultivo": {en:"Advisory", es:"Consultivo"}, "Gestão": {en:"Management", es:"Gestión"},
    "Reforma Tributária": {en:"Tax Reform", es:"Reforma Tributaria"}, "Recuperação de Créditos": {en:"Tax Credit Recovery", es:"Recuperación de Créditos"},
    "Arbitragem": {en:"Arbitration", es:"Arbitraje"},
    "Foco do escritório": {en:"Firm focus", es:"Enfoque del estudio"},
    "Direito Tributário em primeiro plano.": {en:"Tax Law comes first.", es:"El Derecho Tributario está en primer plano."},
    "Duas frentes com espaço próprio e destaque no atendimento do escritório.": {en:"Two dedicated practices with prominent space in the firm's service offering.", es:"Dos áreas con espacio propio y protagonismo en la atención del estudio."},
    "Conheça a atuação dedicada a esse tema.": {en:"Learn about our dedicated work in this area.", es:"Conozca nuestra actuación dedicada a este tema."},
    "Conheça a atuação dedicada a essa frente.": {en:"Learn about our dedicated work in this practice.", es:"Conozca nuestra actuación dedicada a esta área."},
    "Serviço apresentado separadamente.": {en:"Service presented separately.", es:"Servicio presentado por separado."},
    "O Escritório": {en:"The Firm", es:"El Estudio"},
    "Advocacia empresarial com raiz no Direito Tributário.": {en:"Business law practice rooted in Tax Law.", es:"Abogacía empresarial con raíces en el Derecho Tributario."},
    "O Almeida, Leal & Molina Advogados atua no consultivo e no contencioso nas áreas tributária, societária, contratual, cível e trabalhista, com unidades no Rio de Janeiro e em São Paulo.": {en:"Almeida, Leal & Molina Advogados advises and represents clients in Tax, Corporate, Contract, Civil and Labor matters, with offices in Rio de Janeiro and São Paulo.", es:"Almeida, Leal & Molina Advogados actúa en consultivo y contencioso en las áreas tributaria, societaria, contractual, civil y laboral, con oficinas en Río de Janeiro y São Paulo."},
    "Os sócios reúnem trajetória na advocacia pública e no julgamento administrativo tributário — na Procuradoria da Fazenda Nacional, na Procuradoria do Município de Niterói e no Conselho de Contribuintes do Estado do Rio de Janeiro — e mantêm atividade acadêmica como professores de Direito Tributário em cursos de pós-graduação da PUC-Rio e do Ibmec.": {en:"The partners have backgrounds in public law practice and administrative tax adjudication — including the National Treasury Attorney's Office, the Municipality of Niterói Attorney's Office and the Rio de Janeiro State Taxpayers' Council — and remain active academically as Tax Law professors in postgraduate programs at PUC-Rio and Ibmec.", es:"Los socios cuentan con trayectoria en la abogacía pública y en el juzgamiento tributario administrativo — en la Procuraduría de la Hacienda Nacional, la Procuraduría del Municipio de Niterói y el Consejo de Contribuyentes del Estado de Río de Janeiro — y mantienen actividad académica como profesores de Derecho Tributario en posgrados de PUC-Rio e Ibmec."},
    "Formação e trajetória": {en:"Education and career", es:"Formación y trayectoria"},
    "Biografia em atualização.": {en:"Biography being updated.", es:"Biografía en actualización."},
    "Os profissionais do escritório.": {en:"The firm's professionals.", es:"Los profesionales del estudio."},
    "Parte da equipe do Almeida, Leal & Molina.": {en:"Part of the Almeida, Leal & Molina team.", es:"Parte del equipo de Almeida, Leal & Molina."},
    "sócios à frente do escritório": {en:"partners leading the firm", es:"socios al frente del estudio"},
    "profissionais na equipe": {en:"professionals on the team", es:"profesionales en el equipo"},
    "áreas de atuação, consultivo e contencioso": {en:"practice areas, advisory and litigation", es:"áreas de actuación, consultivo y contencioso"},
    "unidades: Rio de Janeiro e São Paulo": {en:"offices: Rio de Janeiro and São Paulo", es:"oficinas: Río de Janeiro y São Paulo"},
    "Ver no mapa": {en:"View on map", es:"Ver en el mapa"},
    "Abrir no Google Maps": {en:"Open in Google Maps", es:"Abrir en Google Maps"},
    "Carregar mapa da unidade": {en:"Load office map", es:"Cargar mapa de la oficina"},
    "Mapa da unidade": {en:"Office map", es:"Mapa de la oficina"},
    "Quem conduz o escritório.": {en:"The people who lead the firm.", es:"Quienes conducen el estudio."},
    "Análises e publicações da equipe.": {en:"Analysis and publications by the team.", es:"Análisis y publicaciones del equipo."},
    "Ver todas as publicações": {en:"View all publications", es:"Ver todas las publicaciones"},
    "Publicações": {en:"Publications", es:"Publicaciones"},
    "Artigos, análises e notícias produzidos pela equipe do escritório.": {en:"Articles, analysis and news produced by the firm's team.", es:"Artículos, análisis y noticias producidos por el equipo del estudio."},
    "Buscar publicações": {en:"Search publications", es:"Buscar publicaciones"},
    "Carregando publicações…": {en:"Loading publications…", es:"Cargando publicaciones…"},
    "Carregando publicação…": {en:"Loading publication…", es:"Cargando publicación…"},
    "Leia também": {en:"Read also", es:"Lea también"}, "Todas as publicações": {en:"All publications", es:"Todas las publicaciones"},
    "01 — Análise em destaque": {en:"01 — Featured analysis", es:"01 — Análisis destacado"},
    "Conteúdo técnico produzido pela equipe para acompanhar temas jurídicos relevantes.": {en:"Technical content produced by the team to follow relevant legal topics.", es:"Contenido técnico producido por el equipo para acompañar temas jurídicos relevantes."},
    "Contato": {en:"Contact", es:"Contacto"}, "Fale com o escritório.": {en:"Talk to the firm.", es:"Hable con el estudio."},
    "Conte brevemente a sua demanda. A equipe retorna pelo canal de sua preferência.": {en:"Briefly describe your matter. The team will reply through your preferred channel.", es:"Cuente brevemente su asunto. El equipo responderá por el canal de su preferencia."},
    "Atendimento guiado": {en:"Guided contact", es:"Atención guiada"},
    "Atendimento guiado (opcional)": {en:"Guided contact (optional)", es:"Atención guiada (opcional)"},
    "Preencha apenas o que quiser. Não é necessário informar dados sensíveis para iniciar o contato.": {en:"Fill in only what you want. Sensitive information is not required to start the conversation.", es:"Complete solo lo que desee. No es necesario proporcionar datos sensibles para iniciar el contacto."},
    "Selecione, se quiser": {en:"Select, if you wish", es:"Seleccione, si lo desea"},
    "Nome (opcional)": {en:"Name (optional)", es:"Nombre (opcional)"}, "Resumo da demanda (opcional)": {en:"Matter summary (optional)", es:"Resumen del asunto (opcional)"},
    "Enviar pelo WhatsApp": {en:"Send via WhatsApp", es:"Enviar por WhatsApp"}, "Enviar por e-mail": {en:"Send by email", es:"Enviar por correo electrónico"},
    "Direito Tributário como foco principal, com atuação empresarial estratégica.": {en:"Tax Law as our main focus, with strategic corporate legal support.", es:"Derecho Tributario como enfoque principal, con actuación empresarial estratégica."},
    "Rio de Janeiro e São Paulo": {en:"Rio de Janeiro and São Paulo", es:"Río de Janeiro y São Paulo"},
    "Rio de Janeiro": {en:"Rio de Janeiro", es:"Río de Janeiro"}, "São Paulo": {en:"São Paulo", es:"São Paulo"},
    "Áreas de Atuação": {en:"Practice Areas", es:"Áreas de Actuación"},
    "Tributário, Societário, Contratos, Cível e Trabalhista — consultivo e contencioso.": {en:"Tax, Corporate, Contracts, Civil and Labor Law — advisory and litigation.", es:"Tributario, Societario, Contratos, Civil y Laboral — consultivo y contencioso."},
    "Consultivo": {en:"Advisory", es:"Consultivo"}, "Orientação preventiva, análise de riscos e estruturação de decisões antes que se tornem litígio.": {en:"Preventive advice, risk analysis and decision structuring before matters become disputes.", es:"Orientación preventiva, análisis de riesgos y estructuración de decisiones antes de que se conviertan en litigios."},
    "Defesa e condução de processos nas esferas administrativa e judicial.": {en:"Defense and conduct of administrative and judicial proceedings.", es:"Defensa y conducción de procesos en las esferas administrativa y judicial."},
    "Procuradoria da Fazenda Nacional": {en:"National Treasury Attorney's Office", es:"Procuraduría de la Hacienda Nacional"},
    "Atuação na Divisão de Grandes Devedores da 3ª Região": {en:"Work in the Large Debtors Division of the 3rd Region", es:"Actuación en la División de Grandes Deudores de la 3.ª Región"},
    "Conselho de Contribuintes do RJ": {en:"Rio de Janeiro Taxpayers' Council", es:"Consejo de Contribuyentes de Río de Janeiro"},
    "Experiência como conselheiro no julgamento administrativo": {en:"Experience as a member in administrative tax adjudication", es:"Experiencia como consejero en el juzgamiento administrativo"},
    "PUC-Rio e Ibmec": {en:"PUC-Rio and Ibmec", es:"PUC-Rio e Ibmec"},
    "Docência em Direito Tributário na pós-graduação, MBA e LLM": {en:"Teaching Tax Law in graduate, MBA and LLM programs", es:"Docencia en Derecho Tributario en posgrados, MBA y LLM"},
    "ABDF e IFA": {en:"ABDF and IFA", es:"ABDF e IFA"},
    "Associação Brasileira de Direito Financeiro e International Fiscal Association": {en:"Brazilian Association of Financial Law and International Fiscal Association", es:"Asociación Brasileña de Derecho Financiero e International Fiscal Association"},
    "Formação": {en:"Education", es:"Formación"}, "Atuação": {en:"Experience", es:"Actuación"}, "Biografia e formação": {en:"Biography and education", es:"Biografía y formación"},
    "Sócia fundadora · OAB/RJ 210.318": {en:"Founding partner · OAB/RJ 210.318", es:"Socia fundadora · OAB/RJ 210.318"},
    "Sócio fundador · OAB/RJ 158.193": {en:"Founding partner · OAB/RJ 158.193", es:"Socio fundador · OAB/RJ 158.193"},
    "Sócio · OAB/RJ 99.350": {en:"Partner · OAB/RJ 99.350", es:"Socio · OAB/RJ 99.350"},
    "Procuradora do Município de Niterói e ex-Procuradora da Fazenda Nacional.": {en:"Attorney for the Municipality of Niterói and former National Treasury Attorney.", es:"Procuradora del Municipio de Niterói y ex-Procuradora de la Hacienda Nacional."},
    "Procuradora do Município de Niterói.": {en:"Attorney for the Municipality of Niterói.", es:"Procuradora del Municipio de Niterói."},
    "Ex-Procuradora da Fazenda Nacional, tendo atuado na Divisão de Grandes Devedores (DIGRA) da Procuradoria Regional da 3ª Região (São Paulo – Capital).": {en:"Former National Treasury Attorney, having worked in the Large Debtors Division (DIGRA) of the Regional Attorney's Office for the 3rd Region (São Paulo).", es:"Ex-Procuradora de la Hacienda Nacional, donde actuó en la División de Grandes Deudores (DIGRA) de la Procuraduría Regional de la 3.ª Región (São Paulo)."},
    "LLM em Direito Tributário pela FGV.": {en:"LL.M. in Tax Law from FGV.", es:"LLM en Derecho Tributario por la FGV."},
    "Mestre em Finanças Públicas, Tributação e Desenvolvimento pela UERJ.": {en:"Master's degree in Public Finance, Taxation and Development from UERJ.", es:"Máster en Finanzas Públicas, Tributación y Desarrollo por la UERJ."},
    "Ex-Conselheiro do Conselho de Contribuintes do Estado do Rio de Janeiro e professor de Direito Tributário.": {en:"Former member of the Rio de Janeiro State Taxpayers' Council and Tax Law professor.", es:"Exconsejero del Consejo de Contribuyentes del Estado de Río de Janeiro y profesor de Derecho Tributario."},
    "Advogado inscrito na OAB/RJ sob o nº 158.193, sócio fundador do Almeida, Leal & Molina Advogados.": {en:"Attorney registered with OAB/RJ under no. 158.193 and founding partner of Almeida, Leal & Molina Advogados.", es:"Abogado inscrito en la OAB/RJ con el n.º 158.193 y socio fundador de Almeida, Leal & Molina Advogados."},
    "Ex-Conselheiro do Conselho de Contribuintes do Estado do Rio de Janeiro.": {en:"Former member of the Rio de Janeiro State Taxpayers' Council.", es:"Exconsejero del Consejo de Contribuyentes del Estado de Río de Janeiro."},
    "Foi Coordenador Acadêmico dos cursos de pós-graduação do Ibmec/RJ de 2017 a 2020 e atualmente é Professor de Direito Tributário dos cursos de MBA, LLM e pós-graduação do Ibmec-RJ e de outras instituições de ensino superior.": {en:"He was Academic Coordinator of Ibmec/RJ graduate programs from 2017 to 2020 and is currently a Tax Law professor in MBA, LL.M. and graduate programs at Ibmec-RJ and other higher education institutions.", es:"Fue Coordinador Académico de los posgrados de Ibmec/RJ de 2017 a 2020 y actualmente es profesor de Derecho Tributario en los programas de MBA, LLM y posgrado de Ibmec-RJ y otras instituciones de educación superior."},
    "Ex-Diretor Jurídico da Federação das Câmaras de Comércio Exterior (FCCE). Membro-Titular da Câmara Especial de Cooperativismo da FCCE.": {en:"Former Legal Director of the Federation of Foreign Trade Chambers (FCCE). Full member of FCCE's Special Chamber for Cooperativism.", es:"Exdirector Jurídico de la Federación de Cámaras de Comercio Exterior (FCCE). Miembro titular de la Cámara Especial de Cooperativismo de la FCCE."},
    "Graduado pela Universidade Federal do Estado do Rio de Janeiro (UNIRIO).": {en:"Law degree from the Federal University of the State of Rio de Janeiro (UNIRIO).", es:"Graduado por la Universidad Federal del Estado de Río de Janeiro (UNIRIO)."},
    "Pós-graduado em Direito Financeiro e Tributário pela UFFRJ/SEFAZ.": {en:"Postgraduate degree in Financial and Tax Law from UFFRJ/SEFAZ.", es:"Posgrado en Derecho Financiero y Tributario por UFFRJ/SEFAZ."},
    "Mestrado em Finanças Públicas e Tributação pela Universidade do Estado do Rio de Janeiro (UERJ).": {en:"Master's degree in Public Finance and Taxation from the State University of Rio de Janeiro (UERJ).", es:"Máster en Finanzas Públicas y Tributación por la Universidad del Estado de Río de Janeiro (UERJ)."},
    "MBA Executivo em Gestão Estratégica de Negócios pela Fundação Getulio Vargas (FGV).": {en:"Executive MBA in Strategic Business Management from Fundação Getulio Vargas (FGV).", es:"MBA Ejecutivo en Gestión Estratégica de Negocios por la Fundação Getulio Vargas (FGV)."},
    "Mais de 25 anos de advocacia no contencioso tributário e empresarial.": {en:"More than 25 years of practice in tax and corporate litigation.", es:"Más de 25 años de ejercicio en litigios tributarios y empresariales."},
    "Advogado inscrito na OAB/RJ sob o nº 99.350, professor, com mais de 25 anos de experiência na advocacia.": {en:"Attorney registered with OAB/RJ under no. 99.350, professor, with more than 25 years of legal practice.", es:"Abogado inscrito en la OAB/RJ con el n.º 99.350, profesor, con más de 25 años de experiencia en la abogacía."},
    "Atua no contencioso tributário e empresarial, com destacada participação em tribunais administrativos e judiciais.": {en:"He works in tax and corporate litigation, with significant experience before administrative and judicial courts.", es:"Actúa en litigios tributarios y empresariales, con destacada participación ante tribunales administrativos y judiciales."},
    "Já participou da banca examinadora do Concurso de Exame de Ordem da Ordem dos Advogados do Brasil – Estado do Rio de Janeiro.": {en:"He has served on the examining board for the Brazilian Bar Examination in the State of Rio de Janeiro.", es:"Ha participado en la comisión examinadora del Examen de Orden de la OAB del Estado de Río de Janeiro."},
    "Membro da Associação Brasileira de Direito Financeiro (ABDF) e da International Fiscal Association (IFA).": {en:"Member of the Brazilian Association of Financial Law (ABDF) and the International Fiscal Association (IFA).", es:"Miembro de la Asociación Brasileña de Derecho Financiero (ABDF) y de la International Fiscal Association (IFA)."},
    "Professor de Direito Tributário nos cursos de pós-graduação em Direito da Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio) há mais de 15 anos, com artigos técnicos publicados em revistas e livros especializados.": {en:"Tax Law professor in the graduate Law programs at Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio) for more than 15 years, with technical articles published in specialized journals and books.", es:"Profesor de Derecho Tributario en los posgrados de Derecho de la Pontificia Universidad Católica de Río de Janeiro (PUC-Rio) desde hace más de 15 años, con artículos técnicos publicados en revistas y libros especializados."},
    "Mestre em Direito Público pela Universidade Estácio de Sá, com ênfase em Direito Tributário (2005).": {en:"Master's degree in Public Law from Universidade Estácio de Sá, with an emphasis on Tax Law (2005).", es:"Máster en Derecho Público por la Universidade Estácio de Sá, con énfasis en Derecho Tributario (2005)."},
    "Mestrado em Finanças Públicas e Tributação pela Universidade do Estado do Rio de Janeiro (UERJ).": {en:"Master's degree in Public Finance and Taxation from the State University of Rio de Janeiro (UERJ).", es:"Máster en Finanzas Públicas y Tributación por la Universidad del Estado de Río de Janeiro (UERJ)."},
    "Pular para o conteúdo": {en:"Skip to content", es:"Saltar al contenido"},
    "Nenhum profissional nesta área.": {en:"No professionals in this area.", es:"No hay profesionales en esta área."},
    "Responsável(is)": {en:"Responsible partner(s)", es:"Socio(s) responsable(s)"},
    "Profissionais relacionados": {en:"Related professionals", es:"Profesionales relacionados"},
    "Todos": {en:"All", es:"Todos"}, "Contratos e Societário": {en:"Contracts and Corporate", es:"Contratos y Societario"},
    "Publicado no LinkedIn": {en:"Published on LinkedIn", es:"Publicado en LinkedIn"}, "Por": {en:"By", es:"Por"},
    "Conteúdo institucional": {en:"Institutional content", es:"Contenido institucional"}, "Compartilhar": {en:"Share", es:"Compartir"},
    "Copiar link": {en:"Copy link", es:"Copiar enlace"}, "Link copiado": {en:"Link copied", es:"Enlace copiado"},
    "Publicado originalmente no LinkedIn.": {en:"Originally published on LinkedIn.", es:"Publicado originalmente en LinkedIn."},
    "Ler o artigo completo no LinkedIn": {en:"Read the full article on LinkedIn", es:"Leer el artículo completo en LinkedIn"},
    "Esta página foi estruturada como frente independente do site. O conteúdo técnico definitivo desta atuação deve ser validado e enviado pelo escritório antes da publicação.": {en:"This page was structured as an independent practice area. The final technical content must be reviewed and provided by the firm before publication.", es:"Esta página fue estructurada como un área independiente del sitio. El contenido técnico definitivo debe ser validado y enviado por el estudio antes de su publicación."},
    "Enquanto essa validação não chega, nenhum dado técnico, promessa de resultado ou informação específica de serviço é inventado nesta página.": {en:"Until that review is completed, this page does not invent technical data, promises of results or specific service information.", es:"Hasta completar esa validación, esta página no inventa datos técnicos, promesas de resultados ni información específica de servicios."},
    "Página dedicada ao acompanhamento e à preparação para a Reforma Tributária.": {en:"A page dedicated to monitoring and preparing for Tax Reform.", es:"Página dedicada al seguimiento y preparación para la Reforma Tributaria."},
    "Página dedicada à atuação do escritório em recuperação de créditos tributários.": {en:"A page dedicated to the firm's work in tax credit recovery.", es:"Página dedicada a la actuación del estudio en la recuperación de créditos tributarios."},
    "Serviço independente de arbitragem, apresentado em página própria.": {en:"Independent arbitration service, presented on its own page.", es:"Servicio independiente de arbitraje, presentado en una página propia."},
    "Responsável:": {en:"Responsible:", es:"Responsable:"}, "Fale com o escritório": {en:"Contact the firm", es:"Contacte al estudio"},
    "Erro 404": {en:"404 Error", es:"Error 404"}, "Esta página não existe ou foi movida.": {en:"This page does not exist or has been moved.", es:"Esta página no existe o fue movida."},
    "Confira o endereço ou volte para o início.": {en:"Check the address or return to the home page.", es:"Compruebe la dirección o vuelva al inicio."},
    "Voltar ao site": {en:"Back to website", es:"Volver al sitio"},
    "Rua Sete de Setembro, 71 — Centro": {en:"71 Sete de Setembro Street — Centro", es:"Rua Sete de Setembro, 71 — Centro"},
    "Todos os direitos reservados.": {en:"All rights reserved.", es:"Todos los derechos reservados."},
    "© 2026 Almeida, Leal & Molina Advogados. Todos os direitos reservados. CNPJ 52.297.109/0001-36.": {en:"© 2026 Almeida, Leal & Molina Advogados. All rights reserved. CNPJ 52.297.109/0001-36.", es:"© 2026 Almeida, Leal & Molina Advogados. Todos los derechos reservados. CNPJ 52.297.109/0001-36."},
    "Site por": {en:"Website by", es:"Sitio web por"}, "BMS Service": {en:"BMS Service", es:"BMS Service"},
    "Pós-graduado em Direito Financeiro e Tributário pela UFFRJ/SEFAZ.": {en:"Postgraduate degree in Financial and Tax Law from UFFRJ/SEFAZ.", es:"Posgrado en Derecho Financiero y Tributario por UFFRJ/SEFAZ."},
    "Orientação às empresas sobre os impactos da Reforma Tributária, com atuação consultiva e contenciosa.": {"en": "Guidance for companies on the impacts of Tax Reform, with advisory and litigation work.", "es": "Orientación a las empresas sobre los impactos de la Reforma Tributaria, con actuación consultiva y contenciosa."},
    "Análise e recuperação de créditos tributários, nas esferas administrativa e judicial.": {"en": "Analysis and recovery of tax credits, in administrative and judicial proceedings.", "es": "Análisis y recuperación de créditos tributarios, en las esferas administrativa y judicial."},
    "Atuação em procedimentos arbitrais, apresentada como serviço independente das demais áreas.": {"en": "Work in arbitration proceedings, offered as a service independent from the firm's other practice areas.", "es": "Actuación en procedimientos arbitrales, ofrecida como servicio independiente de las demás áreas."},
    "Serviço": {"en": "Service", "es": "Servicio"},
    "Responsável(is):": {"en": "Responsible partner(s):", "es": "Socio(s) responsable(s):"},
    "Ex-Conselheiro do Conselho de Contribuintes do Estado do Rio de Janeiro, professor de Direito Tributário e mestre em Finanças Públicas e Tributação pela UERJ.": {"en": "Former member of the Rio de Janeiro State Taxpayers' Council, Tax Law professor and holder of a master's degree in Public Finance and Taxation from UERJ.", "es": "Exconsejero del Consejo de Contribuyentes del Estado de Río de Janeiro, profesor de Derecho Tributario y magíster en Finanzas Públicas y Tributación por la UERJ."},
    "Yan Dutra Molina, Raíssa de Almeida e Marcello Leal": {"en": "Yan Dutra Molina, Raíssa de Almeida and Marcello Leal", "es": "Yan Dutra Molina, Raíssa de Almeida y Marcello Leal"},
    "Não foi possível carregar as publicações agora.": {"en": "We could not load the publications right now.", "es": "No fue posible cargar las publicaciones ahora."},
    "Abrir a página de conteúdos": {"en": "Open the insights page", "es": "Abrir la página de contenidos"},
    "Navegação": {en:"Navigation", es:"Navegación"}
  };

  var roles = {
    "Sócia fundadora": {en:"Founding partner", es:"Socia fundadora"},
    "Sócio fundador": {en:"Founding partner", es:"Socio fundador"},
    "Sócio": {en:"Partner", es:"Socio"},
    "Coordenadora Contencioso": {en:"Litigation Coordinator", es:"Coordinadora de Contencioso"},
    "Advogada Consultivo Tributário": {en:"Tax Advisory Attorney", es:"Abogada de Consultivo Tributario"},
    "Advogada Contencioso": {en:"Litigation Attorney", es:"Abogada de Contencioso"},
    "Advogado Consultivo e Contencioso Trabalhista": {en:"Labor Advisory and Litigation Attorney", es:"Abogado de Consultivo y Contencioso Laboral"},
    "Trainee Contencioso": {en:"Litigation Trainee", es:"Trainee de Contencioso"},
    "Advogado Contratos e Societário": {en:"Contracts and Corporate Attorney", es:"Abogado de Contratos y Societario"},
    "Estagiário Contencioso": {en:"Litigation Intern", es:"Pasante de Contencioso"},
    "Advogada Consultivo": {en:"Advisory Attorney", es:"Abogada de Consultivo"},
    "Estagiário Contratos e Societário": {en:"Contracts and Corporate Intern", es:"Pasante de Contratos y Societario"},
    "Estagiária Contratos e Societário": {en:"Contracts and Corporate Intern", es:"Pasante de Contratos y Societario"},
    "Gerente": {en:"Manager", es:"Gerente"}
  };

  function translateText(value) {
    if (lang === "pt") return value;
    var clean = value.replace(/\s+/g, " ").trim();
    if (!clean) return value;
    var item = common[clean] || roles[clean];
    if (item && item[lang]) return value.replace(clean, item[lang]);
    /* Translate common role fragments inside composite cards. */
    Object.keys(roles).forEach(function (k) { if (value.indexOf(k) >= 0 && roles[k][lang]) value = value.split(k).join(roles[k][lang]); });
    return value;
  }

  function translateAttributes(root) {
    root.querySelectorAll("[aria-label]").forEach(function (e) { e.setAttribute("aria-label", translateText(e.getAttribute("aria-label"))); });
    root.querySelectorAll("[title]").forEach(function (e) { e.setAttribute("title", translateText(e.getAttribute("title"))); });
    root.querySelectorAll("[placeholder]").forEach(function (e) { e.setAttribute("placeholder", translateText(e.getAttribute("placeholder"))); });
  }

  function translateDOM() {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.querySelectorAll("[data-lang]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function (node) {
      if (!node.parentElement || ["SCRIPT","STYLE","NOSCRIPT"].indexOf(node.parentElement.tagName) >= 0) return;
      if (typeof node.__almOriginalText === "undefined") node.__almOriginalText = node.nodeValue;
      var next = translateText(node.__almOriginalText);
      if (next !== node.nodeValue) node.nodeValue = next;
    });
    translateAttributes(document);
    var titleMap = {
      pt: ["Almeida, Leal & Molina Advogados","Conteúdos — Almeida, Leal & Molina Advogados","Publicação — Almeida, Leal & Molina Advogados","Página não encontrada — Almeida, Leal & Molina Advogados","Reforma Tributária — Almeida, Leal & Molina Advogados","Recuperação de Créditos — Almeida, Leal & Molina Advogados","Arbitragem — Almeida, Leal & Molina Advogados"],
      en: ["Almeida, Leal & Molina Attorneys","Insights — Almeida, Leal & Molina Advogados","Publication — Almeida, Leal & Molina Advogados","Page not found — Almeida, Leal & Molina Advogados","Tax Reform — Almeida, Leal & Molina Advogados","Tax Credit Recovery — Almeida, Leal & Molina Advogados","Arbitration — Almeida, Leal & Molina Advogados"],
      es: ["Almeida, Leal & Molina Abogados","Contenidos — Almeida, Leal & Molina Advogados","Publicación — Almeida, Leal & Molina Advogados","Página no encontrada — Almeida, Leal & Molina Advogados","Reforma Tributaria — Almeida, Leal & Molina Advogados","Recuperación de Créditos — Almeida, Leal & Molina Advogados","Arbitraje — Almeida, Leal & Molina Advogados"]
    };
    var path = location.pathname;
    if (path.indexOf("/conteudos/artigo") >= 0) document.title = titleMap[lang][2];
    else if (path.indexOf("/conteudos") >= 0) document.title = titleMap[lang][1];
    else if (path.indexOf("/reforma-tributaria") >= 0) document.title = titleMap[lang][4];
    else if (path.indexOf("/recuperacao-creditos") >= 0) document.title = titleMap[lang][5];
    else if (path.indexOf("/arbitragem") >= 0) document.title = titleMap[lang][6];
    else if (path.indexOf("404") >= 0) document.title = titleMap[lang][3];
    else document.title = titleMap[lang][0];
  }

  function apply() {
    translateDOM();
    window.dispatchEvent(new CustomEvent("alm:language", {detail:{lang:lang}}));
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-lang]");
    if (!b) return;
    lang = b.getAttribute("data-lang");
    localStorage.setItem("alm-lang", lang);
    apply();
  });

  window.ALM_I18N = {
    get: function () { return lang; },
    dict: common,
    roles: roles,
    translate: translateText,
    apply: apply,
    refresh: translateDOM
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply); else apply();
})();

# Revisão solicitada pelo cliente — Almeida, Leal & Molina

## O que já foi alterado

- Hero sem foto dos sócios e sem vídeo automático: agora usa fundo neutro.
- Removidos efeitos de texto, GSAP, Lenis, cursor/efeitos de apresentação e pop-up automático.
- Removido o acesso público ao `/admin/` do header, menu e rodapé.
- Criadas páginas independentes:
  - `/reforma-tributaria/`
  - `/recuperacao-creditos/`
  - `/arbitragem/`
- Reforma Tributária e Recuperação de Créditos ganharam destaque próprio na Home e no menu.
- Arbitragem deixou de ser tratada como subárea e ganhou página própria.
- Equipe passou a ser renderizada somente com fotos disponíveis: não aparecem mais “Foto em breve” nem iniciais.
- Jéssica Bastos fica em primeiro na lista e vinculada a Gestão + Tributário.
- Luciana Belarmino foi vinculada a Contratos + Societário.
- Marcello passou a destacar explicitamente o mestrado em Finanças Públicas e Tributação pela UERJ.
- Áreas exibem sócios responsáveis.
- Atendimento guiado deixou de abrir automaticamente; agora é opcional e não exige dados sensíveis.
- Seletor PT / EN / ES foi adicionado ao header, visível também no mobile.
- Capa de demonstração do blog que usava Unsplash foi retirada.

## O que NÃO deve ser inventado

Ainda dependem de confirmação/arquivos do escritório:
- foto real do escritório em alta resolução;
- logo oficial e paleta exata do PSD;
- WhatsApp definitivo;
- e-mails corporativos reais;
- dados acadêmicos/cargos que ainda não foram validados;
- texto técnico definitivo das páginas de Reforma Tributária, Recuperação de Créditos e Arbitragem;
- tradução editorial definitiva dos artigos do blog.

## Quando a foto do escritório chegar

1. Coloque a versão WebP em:
   `assets/img/escritorio/hero-escritorio.webp`
2. Se quiser também fallback JPG:
   `assets/img/escritorio/hero-escritorio.jpg`
3. O ponto central de configuração está em:
   `js/config.js`
4. No objeto `heroVideo`, a propriedade `poster` já aponta para:
   `assets/img/escritorio/hero-escritorio.webp`

A Home já está preparada para usar essa imagem sem voltar a mostrar a foto dos sócios.

## Quando o logo oficial chegar

O projeto atual ainda usa texto estilizado para representar a marca. Para obedecer literalmente ao briefing do cliente, não substitua por outro logo inventado.

O ideal é receber:
- SVG oficial, preferencialmente;
- ou PNG/WebP em alta resolução;
- versões para fundo claro e escuro, se existirem.

Depois, centralizar o uso do logo em:
- `index.html`
- `conteudos/index.html`
- `conteudos/artigo.html`
- `admin/index.html` (área interna)
- páginas de serviços

## Contatos

Editar somente:
`js/config.js`

Campos:
- `ALM_CONFIG.whatsapp.numero`
- `ALM_CONFIG.whatsapp.exibicao`
- `ALM_CONFIG.email`

O painel também possui configurações de contato, mas os dados de produção devem ser validados antes do lançamento.

## Equipe

Fonte principal:
`js/data/equipe.js`

Para uma pessoa:
- `nome`
- `cargo`
- `areas`
- `foto`
- `linkedin`
- `bio`
- `formacao`

Não cadastrar placeholders. Se uma foto ou dado obrigatório não existir, aguardar o escritório.

## Áreas e responsáveis

Fonte:
`js/data/areas.js`

Responsáveis das áreas atuais são definidos em:
`js/site.js`

Quando o escritório validar os responsáveis definitivos, alterar somente o objeto `responsaveis`.

## Conteúdo das novas páginas

Arquivos:
- `reforma-tributaria/index.html`
- `recuperacao-creditos/index.html`
- `arbitragem/index.html`

As páginas estão estruturalmente prontas, mas o texto técnico definitivo precisa vir do escritório. Não publique conteúdo jurídico específico inventado para preencher espaço.

## Idiomas

Arquivo:
`js/i18n.js`

O seletor já troca o idioma da interface principal. A tradução editorial completa dos artigos e textos jurídicos deve ser revisada/fornecida pelo escritório antes de considerar EN/ES como conteúdo definitivo de lançamento.

## Arquivos que podem ser removidos depois da homologação

Os arquivos de efeitos antigos ainda podem permanecer no repositório por segurança histórica, mas não são mais carregados pela Home:
- `js/motion.js`
- `js/experience.js`
- `css/experience.css`

Recomenda-se só apagar esses arquivos em uma limpeza posterior, depois de validar a versão em produção.

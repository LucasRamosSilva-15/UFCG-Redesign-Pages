# Design System — UFCG Redesign Pages

## 1. Visão geral

O UFCG Redesign Pages utiliza uma linguagem visual institucional, acadêmica e contemporânea para propor uma reformulação do portal da Universidade Federal de Campina Grande.

Os objetivos visuais do projeto são:

- modernizar a experiência sem descaracterizar uma instituição pública;
- melhorar a hierarquia e a leitura das informações;
- facilitar a navegação entre serviços e áreas institucionais;
- manter seriedade, clareza e confiança;
- preservar uma identidade pública e acadêmica;
- criar páginas internas visualmente consistentes.

Este design system pertence a um protótipo visual independente, criado para estudo e portfólio. O projeto não é oficial e não possui vínculo institucional com a UFCG.

## 2. Identidade visual

A identidade combina referências de portais universitários federais com uma composição mais limpa e responsiva. A interface deve parecer pública, organizada e confiável, evitando linguagem visual de startup, produto comercial ou dashboard SaaS.

Características principais:

- azul institucional como cor dominante;
- azul claro/ciano aplicado em detalhes e estados ativos;
- fundos claros para leitura prolongada;
- contraste forte em áreas institucionais profundas;
- títulos serifados com caráter acadêmico;
- textos sem serifa para legibilidade;
- cards informativos com bordas discretas;
- seções bem divididas e com ritmo vertical consistente;
- grids voltados para leitura, comparação e acesso rápido.

## 3. Paleta de cores

Os tokens oficiais estão configurados no bloco `@theme` de `src/index.css`. O projeto usa Tailwind CSS v4 por meio do plugin `@tailwindcss/vite`, sem arquivo `tailwind.config.js`.

### Cores principais

```css
--color-primary: #002D72;
--color-primary-dark: #001B4D;
--color-primary-reflex: #001489;
--color-accent: #00AFEB;
--color-background: #F8FAFC;
--color-text: #1E293B;
```

| Token | Valor | Uso |
| --- | --- | --- |
| `primary` | `#002D72` | Títulos, botões principais, links, ícones e elementos institucionais. |
| `primary-dark` | `#001B4D` | Footer, seções escuras, números, áreas de impacto, overlays e hover de ações principais. |
| `primary-reflex` | `#001489` | Azul de apoio mais saturado, usado com moderação em estados de interação. |
| `accent` | `#00AFEB` | Linhas, bordas ativas, ícones, marcadores e pequenos detalhes. |
| `background` | `#F8FAFC` | Fundo claro principal. |
| `text` | `#1E293B` | Texto principal em superfícies claras. |

### Superfícies e apoio

```css
--color-surface: #F8FAFC;
--color-surface-white: #FFFFFF;
--color-surface-container-lowest: #FFFFFF;
--color-surface-container-low: #F3F4F5;
--color-surface-container: #EDEEEF;
--color-surface-container-high: #E7E8E9;
--color-surface-container-highest: #E1E3E4;
--color-primary-fixed: #E6F7FD;
--color-on-primary: #FFFFFF;
--color-on-primary-fixed: #001B4D;
--color-on-surface: #1E293B;
--color-on-surface-variant: #444653;
--color-border-gray: #E6E6E6;
```

### Regras de cor

- Não usar amarelo ou dourado como destaque principal.
- Não usar o roxo da identidade anterior como cor principal.
- Evitar cores fora da paleta documentada.
- Textos sobre `primary` ou `primary-dark` devem ser brancos ou claros.
- Usar `accent` principalmente em detalhes; texto pequeno ciano sobre branco deve ser evitado.
- Usar `primary` para links e textos importantes sobre fundos claros.
- Preferir `primary-fixed` para badges, ícones e estados claros.
- Categorias e status devem combinar texto, ícone, borda ou rótulo, sem depender apenas da cor.

Há classes verdes, roxas, laranjas e cinzas legadas em alguns status e categorias de `homeData.js`. Elas não fazem parte da paleta principal e não devem ser copiadas para páginas novas; a direção é normalizá-las gradualmente com `primary`, `accent`, superfícies e cores semânticas estritamente necessárias.

## 4. Tipografia

As fontes são importadas no `index.html` por meio do Google Fonts.

### Títulos

- Família: **IBM Plex Serif**.
- Pesos importados: `500`, `600` e `700`.
- Uso: hero, títulos de página, títulos de seção e títulos acadêmicos de maior destaque.

### Textos e interface

- Família: **IBM Plex Sans**.
- Pesos importados: `400`, `500` e `600`.
- Uso: corpo de texto, navbar, botões, links, tabelas, filtros, badges e metadados.

### Escala recorrente

- Hero desktop: até `48px`, com linha de `56px`.
- Hero mobile: aproximadamente `34px`, com altura de linha proporcional.
- Título de seção: `32px / 40px`.
- Título de seção mobile: `28px / 36px`.
- Título de card: normalmente entre `18px` e `24px`.
- Corpo principal: `16px / 24px`.
- Corpo destacado: `18px / 28px`.
- Labels e metadados: `12px` a `14px`.

A classe global `.section-title` concentra o padrão dos títulos de seção. A hierarquia deve permanecer clara, com poucos pesos por bloco e sem tipografia hero dentro de cards compactos.

## 5. Layout

O projeto utiliza a classe global `.container-page`:

```css
.container-page {
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  padding-inline: 16px;
}
```

Os recuos responsivos são:

- mobile: `16px`;
- tablet, a partir de `768px`: `32px`;
- desktop, a partir de `1024px`: `48px`;
- largura máxima: `1280px`.

As páginas alternam fundos `background`, branco, superfícies cinza-claras e blocos institucionais azuis. O espaçamento vertical mais comum é `64px`, chegando a `80px` em telas maiores.

Os grids usam de duas a quatro colunas no desktop, reduzem colunas no tablet e empilham os itens no mobile. Textos extensos ficam em contêineres de largura controlada, normalmente entre `max-w-2xl` e `max-w-3xl`.

As páginas internas seguem, em geral:

1. breadcrumb;
2. hero interno;
3. seções de cards ou recursos;
4. seção institucional destacada;
5. editais, listas ou indicadores;
6. chamada final.

O conteúdo da página começa após a Navbar global e termina antes do Footer global.

## 6. Componentes globais

### Navbar

O componente `src/components/Navbar.jsx` é responsável pela navegação global.

- Barra utilitária com `26px`, fundo `primary` e texto branco.
- Cabeçalho principal com `64px`, fundo branco e largura máxima de `1180px`.
- Marca da UFCG à esquerda.
- Links para Página Inicial, Cursos, Pesquisa e Inovação e Extensão.
- Item ativo identificado por sublinhado ciano.
- Busca e botão de menu com área clicável de `40px`.
- Menu recolhido em telas menores que `lg`.
- Comportamento `sticky` no topo.

A Navbar não deve ser recriada dentro das páginas.

### Footer

O componente `src/components/Footer.jsx` é o rodapé global.

- Fundo `primary-dark`.
- Borda superior de `4px` em `accent`.
- Marca, informações institucionais e colunas de links.
- Texto branco com opacidades moderadas.
- Títulos e estados de interação com destaque ciano.
- Grid responsivo de uma, duas ou seis colunas.

O Footer não deve ser recriado dentro das páginas.

## 7. Páginas

### Página Inicial

`src/pages/Home.jsx` apresenta o portal e concentra:

- hero institucional com imagem e overlay azul;
- acesso rápido;
- notícias e destaques;
- acesso por perfil;
- cursos e oportunidades;
- campi da UFCG;
- pilares acadêmicos;
- editais e comunicados;
- indicadores em seção escura.

### Cursos

`src/pages/Cursos.jsx` usa:

- breadcrumb;
- hero interno institucional;
- busca visual e filtros nativos;
- cursos em destaque;
- tags de grau e turno;
- seção de pós-graduação;
- cards de Especializações, Mestrado e Doutorado.

### Pesquisa e Inovação

`src/pages/PesquisaInovacao.jsx` contém:

- breadcrumb;
- hero com destaque “Excelência em C&T”;
- Pesquisa na UFCG;
- Áreas de Pesquisa;
- seção escura de Inovação e Tecnologia;
- Iniciação Científica;
- Editais e Oportunidades;
- Pesquisa em Números;
- chamada “Transformando conhecimento em impacto”.

### Extensão

`src/pages/Extensao.jsx` contém:

- breadcrumb;
- hero de Extensão Universitária;
- Extensão na UFCG;
- Áreas de atuação;
- seção escura de impacto social e desenvolvimento regional;
- Como participar;
- Editais e oportunidades;
- chamada “Conhecimento que transforma realidades”.

## 8. Cards

O padrão principal dos cards é:

- fundo branco;
- borda `1px` com `border-gray`;
- raio `rounded-lg`, equivalente a `8px`;
- preenchimento entre `20px` e `32px`;
- ícones em `primary`, `accent` ou sobre `primary-fixed`;
- títulos curtos e com boa hierarquia;
- texto objetivo em `on-surface-variant`;
- hover com `border-primary` e sombra discreta;
- sombra recorrente: `0 4px 12px rgba(0, 45, 114, 0.08)`.

Tipos existentes:

- cards de acesso rápido;
- cards de perfil;
- cards de cursos;
- cards de áreas acadêmicas e de atuação;
- cards institucionais;
- cards de participação;
- cards de notícias e campi;
- cards de estatísticas sobre fundo escuro.

Cards não devem ser colocados dentro de outros cards decorativos. Blocos de página devem continuar como seções ou faixas de largura total.

## 9. Botões e links

### Botão primário

- Fundo `primary`.
- Texto branco.
- Hover em `primary-dark` ou, pontualmente, `primary-reflex` sobre áreas profundas.
- Raio `rounded-lg`.
- Altura confortável, geralmente entre `44px` e `48px`.
- Peso `600` e tamanho próximo de `14px`.

### Botão secundário

- Borda `primary` e texto `primary` em superfícies claras.
- Borda branca e texto branco em fundos escuros.
- Fundo branco ou transparente.
- Hover com `primary-fixed`, cinza claro ou branco com baixa opacidade.

### Links

- Cor `primary` em fundos claros.
- Hover com sublinhado ou mudança discreta de cor.
- Em áreas escuras, usar branco ou `accent` com contraste adequado.
- Links com ícone devem manter alinhamento, espaçamento e área clicável confortável.

## 10. Seções escuras

Os blocos profundos usam principalmente `primary-dark` e aparecem em:

- áreas de impacto social;
- Inovação e Tecnologia;
- indicadores e números;
- Footer;
- overlays do hero da Página Inicial.

Os heros internos atuais usam `primary`, enquanto os blocos mais profundos usam `primary-dark`.

Regras:

- texto sempre branco ou branco com opacidade controlada;
- `accent` reservado para linhas, ícones, números e marcadores;
- bordas brancas com baixa opacidade;
- elementos decorativos discretos;
- evitar ruído visual e excesso de efeitos.

## 11. Responsividade

- Desktop: grids de duas, três ou quatro colunas conforme o conteúdo.
- Tablet: redução gradual para duas colunas.
- Mobile: cards empilhados ou grids compactos quando o conteúdo permitir.
- Heros internos reduzem a tipografia e ocultam elementos puramente decorativos.
- Navbar usa menu recolhido abaixo de `lg`.
- Tabelas de editais possuem versões em cards para mobile nas páginas internas.
- Botões podem quebrar para múltiplas linhas, mantendo espaçamento e tamanho clicável.
- Imagens usam proporções estáveis como `aspect-video` ou `aspect-[4/3]`.
- Textos longos devem permanecer em blocos de largura controlada.
- Nenhum elemento deve causar rolagem horizontal não intencional.

## 12. Acessibilidade visual

- Manter contraste adequado entre texto e fundo.
- Usar texto branco sobre fundos `primary` e `primary-dark`.
- Não usar `accent` como texto pequeno sobre branco.
- Preservar hierarquia semântica entre `h1`, `h2` e `h3`.
- Fornecer `alt` descritivo em imagens informativas e `alt=""` em imagens decorativas.
- Usar `aria-label`, `aria-labelledby`, `aria-current` e `aria-hidden` quando apropriado.
- Garantir áreas clicáveis confortáveis para botões e controles.
- Não depender somente de cor para status; combinar rótulo, borda, marcador ou ícone.
- Manter foco visível em campos e controles.
- Revisar navegação por teclado antes de concluir novas páginas.

## 13. Imagens e ícones

O projeto usa assets locais em `src/assets` e imagens institucionais remotas em conteúdos demonstrativos.

- Priorizar fotografias reais de campi, laboratórios, estudantes e ações universitárias.
- Usar `object-cover` e proporções estáveis para evitar mudanças de layout.
- Evitar imagens genéricas ou excessivamente promocionais.
- Prever fallback quando uma imagem remota puder falhar.
- Usar carregamento tardio em imagens abaixo da dobra quando adequado.

Os ícones usam **Material Symbols Outlined**, carregado no `index.html` e configurado pela classe global `.material-symbols-outlined`.

- Usar ícones simples, reconhecíveis e de uma única cor.
- Preferir `primary` em superfícies claras e `accent` em áreas escuras.
- Evitar conjuntos de ícones multicoloridos.
- Ícones decorativos devem usar `aria-hidden="true"`.

## 14. Regras para novas páginas

Toda nova página deve:

- seguir este `design.md`;
- usar os tokens existentes em `src/index.css`;
- não criar Navbar ou Footer próprios;
- começar com breadcrumb quando for página interna;
- usar hero interno coerente com Cursos, Pesquisa e Extensão;
- manter grids, cards, títulos e botões consistentes;
- extrair listas repetidas para `src/data`;
- evitar cores novas ou valores hexadecimais isolados;
- evitar aparência de startup, landing page comercial ou dashboard SaaS;
- preservar a identidade pública e acadêmica;
- funcionar em desktop, tablet e mobile;
- converter o HTML do Stitch para JSX limpo, removendo scripts e elementos globais exportados.

## 15. Fluxo de criação de páginas

1. Criar o protótipo visual no Google Stitch.
2. Exportar o HTML da página específica.
3. Usar o HTML como referência de estrutura, conteúdo e hierarquia.
4. Comparar cores e estilos do HTML com este documento.
5. Converter o conteúdo principal para React e Tailwind CSS.
6. Ignorar Navbar e Footer exportados pelo Stitch.
7. Reutilizar Navbar e Footer globais do projeto.
8. Extrair arrays repetidos para `src/data`.
9. Revisar semântica, acessibilidade e responsividade.
10. Executar `npm run lint` e `npm run build`.
11. Integrar a rota somente depois de a página estar pronta.

## 16. Restrições de design

- Não usar paleta diferente da documentada.
- Não reintroduzir amarelo ou dourado antigo.
- Não reintroduzir o roxo da identidade anterior.
- Não criar estilos isolados quando uma classe ou token existente resolver o problema.
- Não duplicar Navbar ou Footer dentro das páginas.
- Não criar páginas com aparência de startup ou produto comercial.
- Não exagerar em sombras, animações, gradientes ou decoração.
- Não usar glassmorphism como linguagem dominante.
- Não usar cards aninhados sem necessidade funcional.
- Não comprometer legibilidade para preservar detalhes do Stitch.
- Não usar `accent` em textos pequenos sobre superfícies claras.
- Não adicionar dependências apenas para resolver elementos visuais simples.

## 17. Status do design

O design system está em evolução. Novas páginas podem revelar necessidades de componentes, estados ou tokens adicionais, mas qualquer mudança deve ser documentada e aplicada de forma consistente no projeto.

Antes de ampliar a paleta ou criar um novo padrão, deve-se verificar se os tokens, superfícies, cards, botões e layouts existentes já atendem ao caso de uso.

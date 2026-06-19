# AGENTS.md — Instruções para o Codex

Este projeto é um redesign moderno e responsivo do portal da Universidade Federal de Campina Grande, desenvolvido com React.js, Vite e Tailwind CSS.

O objetivo deste arquivo é orientar o Codex em todas as alterações futuras do projeto, reduzindo a necessidade de prompts longos.

---

## 1. Contexto do projeto

O projeto é uma proposta visual independente de redesign do portal da UFCG.

Ele não é um site oficial da Universidade Federal de Campina Grande e não possui vínculo institucional com a UFCG.

O projeto tem foco em:

* visual institucional e acadêmico;
* modernização da interface;
* organização de informações;
* responsividade;
* acessibilidade visual;
* navegação clara;
* consistência entre páginas internas.

---

## 2. Tecnologias usadas

O projeto usa:

* React.js
* Vite
* Tailwind CSS
* JavaScript
* HTML5
* CSS3
* Vercel para deploy
* Google Stitch como ferramenta de prototipação visual

Não usar TypeScript, a menos que o projeto seja migrado explicitamente no futuro.

Não instalar bibliotecas novas sem necessidade clara.

---

## 3. Fluxo de criação de páginas

O fluxo padrão para criar novas páginas é:

1. Criar o layout visual no Google Stitch.
2. Exportar o HTML da página específica.
3. Usar o HTML exportado como referência estrutural.
4. Converter o HTML para React + Tailwind CSS.
5. Ignorar Navbar e Footer exportados pelo Stitch.
6. Usar sempre o Navbar e o Footer globais do projeto.
7. Seguir rigorosamente o `design.md`.
8. Criar a página dentro de `src/pages`.
9. Criar dados repetidos em `src/data`, se fizer sentido.
10. Só adicionar rota quando solicitado.

---

## 4. Arquivos importantes

Sempre verificar estes arquivos antes de alterações relevantes:

* `design.md`
* `README.md`
* `src/App.jsx`
* `src/main.jsx`
* `src/index.css`
* `src/components/Navbar.jsx`
* `src/components/Footer.jsx`
* `src/pages`
* `src/data`, se existir
* `tailwind.config.js`, se existir

O `design.md` é a fonte principal para identidade visual, cores, padrões de layout, cards, botões e consistência entre páginas.

---

## 5. Regra principal de design

Sempre seguir o `design.md`.

Se o HTML exportado pelo Google Stitch tiver cores, fontes, botões ou estilos que entrem em conflito com o `design.md`, o `design.md` tem prioridade.

Não criar nova identidade visual sem solicitação explícita.

Não usar cores fora da paleta definida no `design.md`.

Não usar amarelo/dourado antigo se ele tiver sido removido da identidade visual.

Não usar roxo antigo se ele não fizer mais parte da paleta atual.

---

## 6. Paleta visual esperada

Usar a paleta definida no `design.md`.

Caso o projeto esteja usando a paleta baseada na identidade da UFCG, considerar como referência:

```css
--color-primary: #002D72;
--color-primary-dark: #001B4D;
--color-primary-reflex: #001489;
--color-accent: #00AFEB;
--color-background: #F8FAFC;
--color-text: #1E293B;
```

Uso esperado:

* `#002D72`: cor principal institucional;
* `#001B4D`: footer, áreas escuras, overlays e hover;
* `#001489`: azul de apoio próximo ao Reflex Blue, usado com moderação;
* `#00AFEB`: detalhes, ícones, linhas, bordas ativas e pequenos destaques;
* `#F8FAFC`: fundo claro principal;
* `#1E293B`: texto principal.

Manter contraste adequado.

Evitar usar `#00AFEB` como texto pequeno sobre fundo branco se a leitura ficar fraca.

---

## 7. Estrutura geral do projeto

Preferir esta organização:

```txt
src/
  assets/
  components/
    Navbar.jsx
    Footer.jsx
  pages/
    Home.jsx
    Cursos.jsx
    PesquisaInovacao.jsx
    Extensao.jsx
    Campi.jsx
  data/
  App.jsx
  main.jsx
  index.css
```

A estrutura real do projeto pode variar. Antes de alterar, verificar os arquivos existentes.

---

## 8. Componentes globais

Navbar e Footer são componentes globais.

Não recriar Navbar dentro das páginas.

Não recriar Footer dentro das páginas.

Ao converter HTML do Stitch, remover qualquer header, navbar ou footer que venha exportado no HTML.

As páginas internas devem conter apenas o conteúdo principal entre Navbar e Footer.

---

## 9. Páginas internas

Toda nova página interna deve seguir este padrão:

* breadcrumb no topo;
* hero interno;
* seções com cards;
* seção institucional destacada;
* listas ou cards informativos;
* chamada final antes do Footer;
* responsividade para desktop, tablet e mobile.

As páginas devem parecer parte do mesmo portal, não telas isoladas.

---

## 10. Conversão de HTML do Stitch para React

Ao converter HTML exportado do Google Stitch:

* usar o HTML como referência principal de layout;
* converter `class` para `className`;
* converter `for` para `htmlFor`;
* fechar tags como `img`, `input`, `br` e `hr`;
* converter `style=""` para objeto JSX;
* remover scripts desnecessários;
* remover código morto;
* corrigir imports;
* adaptar imagens e assets;
* manter Tailwind CSS;
* não redesenhar a página do zero;
* não alterar textos sem necessidade;
* não alterar a estrutura visual sem motivo.

---

## 11. Dados repetidos

Quando houver muitos cards ou listas, preferir arrays.

Exemplos:

* `quickAccessItems`
* `featuredCourses`
* `researchHighlights`
* `extensionHighlights`
* `campiItems`
* `noticeItems`
* `statsItems`

Se os dados forem usados apenas em uma página simples, podem ficar no próprio arquivo da página.

Se a página tiver muitos dados ou listas grandes, criar arquivo em `src/data`.

Exemplos:

```txt
src/data/cursosData.js
src/data/pesquisaInovacaoData.js
src/data/extensaoData.js
src/data/campiData.js
```

---

## 12. Rotas

Não criar ou alterar rotas sem solicitação explícita.

Quando solicitado, integrar a página no roteamento existente sem alterar o design da página.

Manter Navbar e Footer globais.

---

## 13. Regras para novas páginas

Ao criar uma nova página:

* criar em `src/pages/NomeDaPagina.jsx`;
* não criar Navbar;
* não criar Footer;
* seguir `design.md`;
* usar a paleta oficial do projeto;
* manter responsividade;
* usar Tailwind CSS;
* evitar CSS solto desnecessário;
* manter código limpo;
* não instalar bibliotecas novas;
* não criar backend;
* não implementar funcionalidades complexas sem pedido.

---

## 14. Páginas já planejadas ou implementadas

O projeto pode conter ou vir a conter:

* Página Inicial
* Cursos
* Pesquisa e Inovação
* Extensão
* Campi
* Ingresso
* Institucional
* Estudantes
* Servidores
* Editais
* Notícias

Antes de afirmar que uma página existe, verificar `src/pages`.

---

## 15. Estilo visual

O estilo deve ser:

* institucional;
* acadêmico;
* moderno;
* limpo;
* organizado;
* sério;
* acessível;
* consistente com uma universidade pública federal brasileira.

Evitar:

* visual de startup;
* visual de dashboard SaaS;
* glassmorphism exagerado;
* cores neon;
* excesso de gradientes;
* minimalismo vazio demais;
* cards com arredondamento exagerado;
* sombras fortes demais;
* animações desnecessárias.

---

## 16. Cards

Cards devem seguir padrão consistente:

* fundo branco;
* borda sutil;
* sombra leve, se usada;
* espaçamento interno confortável;
* títulos claros;
* textos curtos;
* ícones discretos;
* hover suave;
* boa responsividade.

---

## 17. Botões

Botão primário:

* fundo azul institucional;
* texto branco;
* hover com azul mais escuro;
* formato retangular ou levemente arredondado.

Botão secundário:

* fundo branco ou transparente;
* borda azul institucional;
* texto azul institucional;
* hover discreto.

Links:

* azul institucional;
* hover com sublinhado ou mudança sutil;
* em fundo escuro, usar branco ou azul claro com contraste adequado.

---

## 18. Responsividade

Garantir que todas as páginas funcionem em:

* desktop;
* tablet;
* mobile.

Padrões esperados:

* grids de 3 ou 4 colunas no desktop;
* redução para 2 colunas no tablet;
* cards empilhados no mobile;
* hero adaptado para telas pequenas;
* textos sem estouro;
* botões sem quebrar layout.

---

## 19. Acessibilidade visual

Manter:

* contraste adequado;
* hierarquia semântica de headings;
* textos legíveis;
* botões com área clicável confortável;
* imagens com `alt`;
* links identificáveis;
* foco visual quando aplicável.

Não depender apenas de cor para transmitir informação importante.

---

## 20. Qualidade de código

Antes de finalizar alterações:

* remover imports não usados;
* remover código morto;
* evitar duplicação excessiva;
* manter JSX organizado;
* usar nomes claros;
* preservar responsividade;
* rodar ou orientar rodar `npm run dev`;
* garantir que não existam erros de JSX;
* manter o projeto simples e fácil de editar.

---

## 21. README e documentação

Quando novas páginas forem criadas, atualizar o `README.md` se solicitado.

O README deve sempre deixar claro que:

* o projeto é um protótipo visual independente;
* não é site oficial da UFCG;
* o deploy atual é na Vercel;
* as páginas implementadas devem refletir o código real.

---

## 22. Regra de segurança contra alterações grandes

Não fazer refatorações grandes sem pedido explícito.

Não alterar a estrutura global do projeto sem necessidade.

Não alterar Navbar, Footer, App.jsx ou rotas se a tarefa for apenas converter uma página.

Não mudar o design da homepage se a tarefa for uma página interna.

Não reescrever arquivos inteiros se uma alteração pontual resolver.

---

## 23. Quando houver dúvida

Se algum dado, curso, campus, edital, número ou informação institucional não estiver confirmado, usar texto genérico e seguro.

Não inventar dados específicos.

Preferir linguagem institucional neutra.

Exemplo:

“Informações sujeitas a atualização conforme dados oficiais da instituição.”

---

## 24. Resultado esperado do trabalho do Codex

As alterações devem manter o projeto:

* funcional;
* organizado;
* visualmente consistente;
* fiel ao `design.md`;
* responsivo;
* fácil de continuar editando;
* sem duplicação de Navbar/Footer;
* sem bugs visuais evidentes.

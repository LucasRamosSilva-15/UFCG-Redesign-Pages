# UFCG Redesign Pages

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Vercel Deploy](https://img.shields.io/badge/Vercel-Deploy-blue?logo=vercel)
![npm version](https://img.shields.io/npm/v/ufcg-redesign-pages.svg)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3.0-%2338B2AC?logo=tailwindcss)
![React.js](https://img.shields.io/badge/React-18.2.0-%2361DAFB?logo=react)

Proposta de redesign visual, moderno e responsivo do portal da Universidade Federal de Campina Grande (UFCG), desenvolvida com React.js, Vite e Tailwind CSS.

O projeto tem como foco a modernização da interface, a melhor organização das informações, uma navegação institucional mais clara, responsividade, acessibilidade visual e uma identidade acadêmica consistente.

> **Aviso:** este é um projeto independente de estudo e prototipação visual. Ele não representa oficialmente a Universidade Federal de Campina Grande.

## Deploy

A versão publicada está disponível na Vercel:

**[Acessar UFCG Redesign Pages](https://ufcg-redesign-pages.vercel.app/)**

## Páginas implementadas

### Página Inicial

Apresenta a proposta geral do portal, com hero institucional, acesso rápido, notícias e destaques, perfis de acesso, cursos, campi, pilares acadêmicos, editais e indicadores da UFCG.

Rota: `/`

### Cursos

Página dedicada à apresentação dos cursos da UFCG, com hero interno, busca visual, filtros, cursos em destaque e seção de pós-graduação.

Rota: `/cursos`

### Pesquisa e Inovação

Página voltada para produção científica, inovação tecnológica, áreas de pesquisa, iniciação científica, laboratórios, editais e indicadores de pesquisa.

Rota: `/pesquisa-e-inovacao`

### Extensão

Página dedicada à extensão universitária, destacando projetos, programas, áreas de atuação, impacto social, formas de participação da comunidade e editais.

Rota: `/extensao`

## Tecnologias utilizadas

- React.js
- Vite
- Tailwind CSS
- JavaScript
- HTML5
- CSS3
- Vercel
- Google Stitch, utilizado na prototipação visual inicial

## Funcionalidades e seções

- Navbar institucional responsiva
- Footer institucional
- Página inicial responsiva
- Páginas internas com identidade visual consistente
- Hero sections institucionais
- Cards informativos
- Áreas de acesso rápido
- Listas de editais e oportunidades
- Seções de cursos, pesquisa, inovação e extensão
- Navegação entre as páginas implementadas
- Layout adaptado para desktop, tablet e dispositivos móveis

## Estrutura do projeto

```text
src/
  assets/
    hero.png
    image.png
    ufcg-logo1.png
    ufcg-logo2.png
    ufcg-mark.svg
    UFCG.png
  components/
    Footer.jsx
    Navbar.jsx
  data/
    cursosData.js
    extensaoData.js
    homeData.js
    pesquisaInovacaoData.js
  pages/
    Cursos.jsx
    Extensao.jsx
    Home.jsx
    PesquisaInovacao.jsx
  App.jsx
  index.css
  main.jsx
```

Outros arquivos importantes:

- `docs/design.md`: identidade visual, paleta, tipografia e regras de interface.
- `html/`: arquivos HTML exportados do Google Stitch usados como referência.
- `vercel.json`: configuração de rewrite para as rotas da aplicação na Vercel.

## Como rodar localmente

Clone o repositório:

```bash
git clone https://github.com/LucasRamosSilva-15/UFCG-Redesign-Pages.git
```

Acesse a pasta do projeto e instale as dependências:

```bash
cd UFCG-Redesign-Pages
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Normalmente, o projeto estará disponível em:

```text
http://localhost:5173
```

## Build de produção

Gere os arquivos otimizados para produção:

```bash
npm run build
```

Visualize localmente o resultado do build:

```bash
npm run preview
```

Para executar a verificação de código:

```bash
npm run lint
```

## Processo de desenvolvimento

O projeto foi desenvolvido a partir do seguinte fluxo:

1. Criação inicial dos layouts no Google Stitch.
2. Exportação das páginas em HTML.
3. Análise e conversão dos arquivos HTML para páginas React.
4. Adaptação visual com Tailwind CSS conforme o design system do projeto.
5. Organização de conteúdos repetidos em arquivos de dados.
6. Integração das páginas à navegação global.
7. Build de produção e deploy na Vercel.

## Status do projeto

O projeto está em desenvolvimento e funciona como protótipo visual. Ele pode receber novas páginas, ajustes de interface, melhorias de responsividade e refinamentos de acessibilidade.

## Próximos passos

- Melhorar a responsividade em telas menores.
- Revisar acessibilidade e navegação por teclado.
- Adicionar novas páginas institucionais.
- Refinar textos e substituir conteúdos demonstrativos por dados reais.
- Evoluir o gerenciamento de rotas e a navegação.
- Otimizar imagens e recursos externos.
- Revisar configurações básicas de SEO.
- Corrigir pequenos bugs visuais e inconsistências entre páginas.

## Aviso legal

Este projeto é uma proposta visual independente, criada para fins de estudo e portfólio. Ele não é um site oficial da UFCG e não possui vínculo institucional com a Universidade Federal de Campina Grande.

## Autor

Desenvolvido por **Lucas Ramos Silva**.

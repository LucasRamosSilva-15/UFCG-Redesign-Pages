# UFCG Redesign Pages

Proposta de redesign moderno da homepage institucional da Universidade Federal de Campina Grande (UFCG), desenvolvida com React.js, Vite e Tailwind CSS.

O projeto foi baseado em um layout criado inicialmente no Google Stitch e posteriormente convertido para uma aplicação React componentizada, organizada e pronta para evolução.

> **Importante:** este é um projeto independente de estudo e prototipação visual. Ele não representa oficialmente a Universidade Federal de Campina Grande.

## Deploy

Acesse a versão publicada na Vercel:

https://ufcg-redesign-pages.vercel.app/

## Sobre o projeto

O objetivo deste redesign é propor uma experiência mais clara, responsiva e institucional para a homepage da UFCG, com foco em:

- visual moderno e consistente;
- melhor organização das informações;
- acessibilidade e legibilidade;
- responsividade para desktop, tablet e celular;
- identidade visual alinhada à marca da UFCG;
- navegação mais clara para estudantes, servidores, pesquisadores, candidatos e comunidade.

## Tecnologias utilizadas

- React.js
- Vite
- Tailwind CSS
- JavaScript
- HTML5
- CSS3
- Vercel

## Funcionalidades e seções

A página foi organizada em seções independentes e componentizadas:

- Header institucional
- Hero section
- Acesso rápido
- Notícias e destaques
- Acesso por perfil
- Cursos e oportunidades
- Campi da UFCG
- Pilares acadêmicos
- Editais e comunicados
- UFCG em números
- Footer institucional

## Estrutura do projeto

```text
src/
  assets/
  components/
    Header.jsx
    Hero.jsx
    QuickAccess.jsx
    NewsSection.jsx
    ProfileAccess.jsx
    CoursesSection.jsx
    CampiSection.jsx
    AcademicPillars.jsx
    NoticesSection.jsx
    StatsSection.jsx
    Footer.jsx
  data/
    quickAccess.js
    news.js
    profiles.js
    courses.js
    campi.js
    pillars.js
    notices.js
    stats.js
  App.jsx
  main.jsx
  index.css
```

### Pastas principais

- `src/assets`: imagens, logos e arquivos visuais usados no projeto.
- `src/components`: componentes React responsáveis por cada seção da homepage.
- `src/data`: listas e conteúdos reutilizáveis renderizados pelos componentes.
- `src/index.css`: configuração visual global, tokens de tema e estilos base do Tailwind CSS.
- `docs/design.md`: documentação da direção visual e paleta institucional do projeto.

## Como rodar localmente

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Acesse a pasta do projeto:

```bash
cd UFCG-Redesign-Pages
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto será executado em um endereço local, geralmente:

```text
http://localhost:5173
```

## Build de produção

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar o build localmente:

```bash
npm run preview
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o ambiente de desenvolvimento com Vite.

```bash
npm run build
```

Gera os arquivos otimizados para produção.

```bash
npm run preview
```

Executa uma prévia local do build de produção.

```bash
npm run lint
```

Executa a verificação de lint do projeto.

## Observação importante

Este projeto é uma proposta visual independente e não representa oficialmente a Universidade Federal de Campina Grande.

## Créditos

Desenvolvido por Lucas Ramos Silva.

import { useMemo, useState } from 'react'
import HeroNavigation from '../components/HeroNavigation'
import { featuredNews, newsItems } from '../data/homeData'

const categories = ['Todas', ...new Set(newsItems.map((item) => item.category))]

const navigationItems = [
  { label: 'Notícia em destaque', href: '#destaque' },
  { label: 'Arquivo de notícias', href: '#arquivo' },
  { label: 'Editais', href: '/editais' },
]

export default function Noticias() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase('pt-BR')
  const filteredNews = useMemo(() => newsItems.filter((item) => {
    const matchesSearch = `${item.title} ${item.category} ${item.date}`.toLocaleLowerCase('pt-BR').includes(normalizedSearch)
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory

    return matchesSearch && matchesCategory
  }), [normalizedSearch, selectedCategory])

  return (
    <main className="bg-background text-text-main">
      <nav className="container-page flex items-center gap-2 py-4 text-xs font-medium leading-4" aria-label="Navegação estrutural">
        <a className="text-primary hover:underline" href="/">Início</a>
        <span className="text-on-surface-variant" aria-hidden="true">/</span>
        <span aria-current="page">Notícias</span>
      </nav>

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" aria-hidden="true" />
        <div className="container-page relative grid min-h-[410px] items-center gap-10 py-14 md:grid-cols-[1.35fr_0.65fr] md:py-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">Informação e vida universitária</p>
            <h1 className="font-serif text-[34px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[56px]">Notícias da UFCG</h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/90">
              Acompanhe os destaques de ensino, pesquisa, extensão e atividades institucionais da universidade.
            </p>
            <HeroNavigation items={navigationItems} />
          </div>
          <aside className="hidden rounded-lg border border-white/20 bg-white/5 p-8 md:block" aria-label="Cobertura de notícias">
            <span className="material-symbols-outlined text-[44px] text-accent" aria-hidden="true">article</span>
            <h2 className="mt-4 font-serif text-2xl font-medium leading-8 text-white">Conhecimento em movimento</h2>
            <p className="mt-3 text-base leading-6 text-white/80">Histórias, projetos e informações sobre a comunidade acadêmica.</p>
          </aside>
        </div>
      </section>

      <section className="scroll-mt-32 border-b border-border-gray bg-white py-16 md:py-20" id="destaque" aria-labelledby="featured-news-title">
        <div className="container-page">
          <div className="mb-8">
            <p className="mb-2 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-primary">Em destaque</p>
            <h2 className="section-title" id="featured-news-title">Pesquisa, ensino e comunidade</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
          </div>
          <article className="grid overflow-hidden rounded-lg border border-border-gray bg-background md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high md:aspect-auto">
              <div className="absolute inset-0 grid place-items-center">
                <span className="material-symbols-outlined text-5xl text-primary/30" aria-hidden="true">image</span>
              </div>
              <img
                className="relative h-full w-full object-cover"
                src={featuredNews.image}
                alt="Projeto relacionado à pesquisa e ao tratamento de água no semiárido"
                loading="lazy"
                onError={(event) => { event.currentTarget.style.display = 'none' }}
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded bg-primary-fixed px-3 py-1 text-xs font-semibold text-on-primary-fixed">{featuredNews.category}</span>
                <time className="text-xs font-medium text-on-surface-variant">{featuredNews.date}</time>
              </div>
              <h3 className="font-serif text-2xl font-semibold leading-8 text-primary md:text-3xl md:leading-10">{featuredNews.title}</h3>
              <p className="mt-4 text-base leading-6 text-on-surface-variant">{featuredNews.excerpt}</p>
            </div>
          </article>
          <p className="mt-4 text-xs leading-5 text-on-surface-variant">Conteúdo demonstrativo do protótipo; confirme informações atualizadas nos canais oficiais da UFCG.</p>
        </div>
      </section>

      <section className="scroll-mt-32 py-16 md:py-20" id="arquivo" aria-labelledby="news-archive-title">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="section-title" id="news-archive-title">Arquivo de notícias</h2>
              <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
              <p className="mt-4 max-w-2xl text-base leading-6 text-on-surface-variant">Busque publicações por assunto ou área de cobertura.</p>
            </div>
            <p className="text-xs font-medium text-on-surface-variant">Conteúdo demonstrativo do protótipo</p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 rounded-lg border border-border-gray bg-white p-5 md:grid-cols-[1fr_240px] md:items-end md:p-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-primary" htmlFor="news-search">Buscar notícia</label>
              <input
                className="h-11 w-full rounded-lg border border-border-gray bg-background px-3 text-sm text-text-main outline-none transition-colors placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary-fixed"
                id="news-search"
                type="search"
                placeholder="Digite uma palavra-chave"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-primary" htmlFor="news-category">Área</label>
              <select
                className="h-11 w-full rounded-lg border border-border-gray bg-background px-3 text-sm text-text-main outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-fixed"
                id="news-category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                {categories.map((category) => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <article className="group overflow-hidden rounded-lg border border-border-gray bg-white transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={item.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-surface-container-high">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="material-symbols-outlined text-4xl text-primary/30" aria-hidden="true">article</span>
                  </div>
                  <img
                    className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={item.image}
                    alt=""
                    loading="lazy"
                    onError={(event) => { event.currentTarget.style.display = 'none' }}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded bg-primary-fixed px-2 py-1 text-xs font-semibold text-on-primary-fixed">{item.category}</span>
                    <time className="text-xs font-medium text-on-surface-variant">{item.date}</time>
                  </div>
                  <h3 className="font-serif text-xl font-medium leading-7 text-primary">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <p className="rounded-lg border border-border-gray bg-white p-6 text-center text-sm text-on-surface-variant" role="status">
              Nenhuma notícia encontrada. Ajuste a busca ou escolha outra área.
            </p>
          )}
        </div>
      </section>

      <section className="bg-surface-container py-16 text-center md:py-20" aria-labelledby="news-cta-title">
        <div className="container-page">
          <span className="material-symbols-outlined text-[52px] text-primary" aria-hidden="true">campaign</span>
          <h2 className="section-title mt-3" id="news-cta-title">Acompanhe as oportunidades da universidade</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">Consulte editais e seleções relacionados ao ensino, à pesquisa e à extensão.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark" href="/editais">Ver editais</a>
            <a className="rounded-lg border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed" href="/pesquisa-e-inovacao">Pesquisa e inovação</a>
          </div>
        </div>
      </section>
    </main>
  )
}

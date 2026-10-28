import { useState } from 'react'
import HeroNavigation from '../components/HeroNavigation'

const editalAreas = [
  {
    category: 'Assistência Estudantil',
    title: 'Auxílios e permanência estudantil',
    icon: 'volunteer_activism',
    description: 'Orientações sobre processos seletivos e programas de apoio à trajetória acadêmica.',
    href: '/assistencia-estudantil',
    action: 'Ver assistência estudantil',
  },
  {
    category: 'Ensino',
    title: 'Graduação e pós-graduação',
    icon: 'school',
    description: 'Informações sobre seleções, oportunidades acadêmicas e programas de formação.',
    href: '/cursos',
    action: 'Conhecer os cursos',
  },
  {
    category: 'Pesquisa',
    title: 'Pesquisa e inovação',
    icon: 'science',
    description: 'Chamadas e oportunidades relacionadas à iniciação científica e ao desenvolvimento tecnológico.',
    href: '/pesquisa-e-inovacao',
    action: 'Ver pesquisa e inovação',
  },
  {
    category: 'Extensão',
    title: 'Projetos e ações de extensão',
    icon: 'diversity_3',
    description: 'Oportunidades de participação em ações que aproximam a universidade da sociedade.',
    href: '/extensao',
    action: 'Conhecer a extensão',
  },
]

const trackingSteps = [
  { title: 'Leia o documento completo', icon: 'description', description: 'Consulte objetivos, requisitos, documentos necessários e etapas do processo.' },
  { title: 'Confira os prazos', icon: 'calendar_month', description: 'Verifique o cronograma publicado e acompanhe eventuais retificações.' },
  { title: 'Use o canal indicado', icon: 'link', description: 'Siga as orientações do edital para inscrição, envio de documentos e acompanhamento.' },
]

const areaFilters = ['Todas', ...new Set(editalAreas.map((area) => area.category))]

const navigationItems = [
  { label: 'Editais por área', href: '#oportunidades' },
  { label: 'Como acompanhar', href: '#como-acompanhar' },
  { label: 'Assistência estudantil', href: '/assistencia-estudantil' },
]

export default function Editais() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedArea, setSelectedArea] = useState('Todas')
  const normalizedSearch = searchTerm.trim().toLocaleLowerCase('pt-BR')
  const filteredAreas = editalAreas.filter((area) => {
    const matchesSearch = `${area.category} ${area.title} ${area.description}`.toLocaleLowerCase('pt-BR').includes(normalizedSearch)
    const matchesArea = selectedArea === 'Todas' || area.category === selectedArea

    return matchesSearch && matchesArea
  })

  return (
    <main className="bg-background text-text-main">
      <nav className="container-page flex items-center gap-2 py-4 text-xs font-medium leading-4" aria-label="Navegação estrutural">
        <a className="text-primary hover:underline" href="/">Início</a>
        <span className="text-on-surface-variant" aria-hidden="true">/</span>
        <span aria-current="page">Editais</span>
      </nav>

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" aria-hidden="true" />
        <div className="container-page relative grid min-h-[410px] items-center gap-10 py-14 md:grid-cols-[1.35fr_0.65fr] md:py-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">Oportunidades e seleções</p>
            <h1 className="font-serif text-[34px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[56px]">Editais da UFCG</h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/90">
              Encontre oportunidades acadêmicas e institucionais por área e consulte as orientações para acompanhar cada publicação.
            </p>
            <HeroNavigation items={navigationItems} />
          </div>
          <aside className="hidden rounded-lg border border-white/20 bg-white/5 p-8 md:block" aria-label="Orientação sobre editais">
            <span className="material-symbols-outlined text-[44px] text-accent" aria-hidden="true">campaign</span>
            <h2 className="mt-4 font-serif text-2xl font-medium leading-8 text-white">Informação oficial, decisão segura</h2>
            <p className="mt-3 text-base leading-6 text-white/80">Confira sempre o documento integral e os canais indicados em cada publicação.</p>
          </aside>
        </div>
      </section>

      <section className="scroll-mt-32 py-16 md:py-20" id="oportunidades" aria-labelledby="edital-areas-title">
        <div className="container-page">
          <div className="mb-8 max-w-3xl">
            <h2 className="section-title" id="edital-areas-title">Editais por área</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-base leading-6 text-on-surface-variant">
              Explore os temas relacionados às oportunidades da universidade. Prazos, requisitos e disponibilidade devem ser confirmados no edital oficial.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 rounded-lg border border-border-gray bg-white p-5 md:grid-cols-[1fr_240px] md:items-end md:p-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-primary" htmlFor="edital-search">Buscar por tema</label>
              <input
                className="h-11 w-full rounded-lg border border-border-gray bg-background px-3 text-sm text-text-main outline-none transition-colors placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary-fixed"
                id="edital-search"
                type="search"
                placeholder="Ex.: pesquisa, auxílio, extensão"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-primary" htmlFor="edital-area">Área</label>
              <select
                className="h-11 w-full rounded-lg border border-border-gray bg-background px-3 text-sm text-text-main outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-fixed"
                id="edital-area"
                value={selectedArea}
                onChange={(event) => setSelectedArea(event.target.value)}
              >
                {areaFilters.map((area) => <option key={area} value={area}>{area}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredAreas.map((area) => (
              <article className="group flex h-full flex-col rounded-lg border border-border-gray bg-white p-6 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={area.category}>
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded bg-primary-fixed px-3 py-1 text-xs font-semibold text-on-primary-fixed">{area.category}</span>
                  <span className="material-symbols-outlined text-[32px] text-primary" aria-hidden="true">{area.icon}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium leading-8 text-primary">{area.title}</h3>
                <p className="mt-3 flex-1 text-base leading-6 text-on-surface-variant">{area.description}</p>
                <a className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" href={area.href}>
                  {area.action}
                  <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">arrow_forward</span>
                </a>
              </article>
            ))}
          </div>

          {filteredAreas.length === 0 && (
            <p className="rounded-lg border border-border-gray bg-white p-6 text-center text-sm text-on-surface-variant" role="status">
              Nenhuma área encontrada. Ajuste a busca ou escolha outra categoria.
            </p>
          )}
        </div>
      </section>

      <section className="scroll-mt-32 border-y border-border-gray bg-surface-container-low py-16 md:py-20" id="como-acompanhar" aria-labelledby="follow-notices-title">
        <div className="container-page">
          <div className="mb-10 max-w-3xl">
            <h2 className="section-title" id="follow-notices-title">Como acompanhar um edital</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-base leading-6 text-on-surface-variant">Cada publicação tem suas próprias regras. Use este roteiro para localizar as informações principais.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {trackingSteps.map((step, index) => (
              <article className="rounded-lg border border-border-gray bg-white p-6" key={step.title}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined" aria-hidden="true">{step.icon}</span>
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.05em] text-primary">Etapa {index + 1}</p>
                <h3 className="font-serif text-xl font-medium leading-7 text-primary">{step.title}</h3>
                <p className="mt-2 text-sm leading-5 text-on-surface-variant">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-14 text-white md:py-16" aria-labelledby="official-notice-title">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-serif text-[28px] font-semibold leading-9 text-white" id="official-notice-title">Consulte sempre a publicação oficial</h2>
            <p className="mt-3 text-base leading-6 text-white/80">Confira o cronograma, os requisitos e os canais de inscrição no documento divulgado pela unidade responsável.</p>
          </div>
          <a className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="/assistencia-estudantil">
            Assistência Estudantil
            <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">arrow_forward</span>
          </a>
        </div>
      </section>
    </main>
  )
}

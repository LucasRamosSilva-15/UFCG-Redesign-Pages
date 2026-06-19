import { campiItems, campusHeroImage, regionalHighlights } from '../data/campiData'

export default function Campi() {
  return (
    <main className="bg-background text-text-main">
      {/* Breadcrumb */}
      <nav className="container-page flex items-center gap-2 py-4 text-xs font-medium leading-4" aria-label="Navegação estrutural">
        <a className="text-primary hover:underline" href="/">Início</a>
        <span className="material-symbols-outlined text-[15px] text-on-surface-variant" aria-hidden="true">chevron_right</span>
        <span aria-current="page">Campi</span>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" aria-hidden="true" />
        <div className="container-page relative grid min-h-[420px] items-center gap-10 py-14 md:grid-cols-[1.2fr_0.8fr] md:py-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">Presença em toda a Paraíba</p>
            <h1 className="font-serif text-[34px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[56px]">Campi da UFCG</h1>
            <p className="mt-4 font-serif text-xl font-medium leading-8 text-white/90 md:text-2xl">Uma universidade multicampi presente em diferentes regiões da Paraíba.</p>
            <p className="mt-4 max-w-2xl text-base leading-6 text-white/80">
              A UFCG atua em 7 campi, fortalecendo o ensino, a pesquisa, a extensão e o desenvolvimento regional por meio de unidades acadêmicas distribuídas pelo estado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low" href="#nossos-campi">Conheça os campi</a>
              <a className="rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#nossos-campi">Cursos por campus</a>
              <a className="inline-flex items-center rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#nossos-campi">
                <span className="material-symbols-outlined mr-2 text-[18px]" aria-hidden="true">map</span>
                Ver localização
              </a>
            </div>
          </div>
          <div className="hidden aspect-[4/3] overflow-hidden rounded-lg border border-white/15 bg-primary-dark md:block">
            <img className="h-full w-full object-cover" src={campusHeroImage} alt="Vista do campus sede da UFCG em Campina Grande" />
          </div>
        </div>
      </section>

      {/* Presença regional */}
      <section className="py-16 md:py-20" aria-labelledby="regional-presence-title">
        <div className="container-page">
          <div className="mb-10 max-w-3xl">
            <h2 className="section-title" id="regional-presence-title">Presença regional e desenvolvimento</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-base leading-6 text-on-surface-variant">
              A estrutura multicampi da UFCG é um pilar estratégico para a democratização do ensino superior e o impulsionamento socioeconômico do interior da Paraíba.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regionalHighlights.map((item) => (
              <article className="group rounded-lg border border-border-gray bg-white p-6 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={item.title}>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined transition-transform group-hover:scale-110" aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-5 text-on-surface-variant">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos campi */}
      <section className="border-y border-border-gray bg-surface-container-low py-16 md:py-20" id="nossos-campi" aria-labelledby="campi-title">
        <div className="container-page">
          <div className="mb-10">
            <h2 className="section-title" id="campi-title">Nossos campi</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {campiItems.map((campus) => (
              <article className="group flex min-h-[470px] flex-col overflow-hidden rounded-lg border border-border-gray bg-white transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={campus.name}>
                <div className="relative h-48 shrink-0 overflow-hidden bg-surface-container-high">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="material-symbols-outlined text-[42px] text-primary/25" aria-hidden="true">account_balance</span>
                  </div>
                  <img
                    className="relative h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={campus.image}
                    alt={campus.alt}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                  />
                  {campus.isHeadquarters && (
                    <span className="absolute left-4 top-4 rounded bg-primary px-3 py-1 text-xs font-semibold text-white">Campus Sede</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-2xl font-medium leading-8 text-primary">{campus.name}</h3>
                  <p className="mt-1 text-xs font-semibold leading-4 text-primary">{campus.focus}</p>
                  <p className="mt-4 flex-1 text-sm leading-5 text-on-surface-variant">{campus.description}</p>
                  <a className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-primary bg-white px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed" href="#">
                    Ver campus
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

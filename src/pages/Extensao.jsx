import {
  actionAreas,
  editalItems,
  extensionHighlights,
  participationItems,
  socialImpactImage,
  socialImpactPoints,
} from '../data/extensaoData'

export default function Extensao() {
  return (
    <main className="bg-background text-text-main">
      {/* Breadcrumb */}
      <nav className="container-page flex items-center gap-2 py-4 text-xs font-medium leading-4" aria-label="Navegação estrutural">
        <a className="text-primary hover:underline" href="/">Início</a>
        <span className="text-on-surface-variant" aria-hidden="true">/</span>
        <span aria-current="page">Extensão</span>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" aria-hidden="true" />
        <div className="container-page relative grid min-h-[410px] items-center gap-10 py-14 md:grid-cols-[1.4fr_0.6fr] md:py-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">Universidade e sociedade</p>
            <h1 className="font-serif text-[34px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[56px]">Extensão Universitária</h1>
            <p className="mt-3 font-serif text-xl font-medium leading-8 text-white/90 md:text-2xl">Conhecimento, compromisso social e transformação junto à comunidade.</p>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/85">
              A extensão universitária conecta a UFCG à sociedade por meio de projetos, programas e ações que promovem desenvolvimento social, cultural, científico e tecnológico.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low" href="#extensao-na-ufcg">Conheça os projetos</a>
              <a className="rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#editais">Editais de extensão</a>
              <a className="rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#como-participar">Como participar</a>
            </div>
          </div>
          <div className="hidden min-h-[260px] place-items-center border-l border-white/15 md:grid">
            <span className="material-symbols-outlined text-[128px] text-white/15" aria-hidden="true">diversity_1</span>
          </div>
        </div>
      </section>

      {/* Extensão na UFCG */}
      <section className="py-16 md:py-20" id="extensao-na-ufcg" aria-labelledby="extension-title">
        <div className="container-page">
          <div className="mb-10 max-w-3xl">
            <h2 className="section-title" id="extension-title">Extensão na UFCG</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-lg leading-7 text-on-surface-variant">
              O diálogo permanente entre a universidade e os diversos setores da sociedade visa à troca de saberes, à democratização do conhecimento e à busca de soluções para os problemas sociais contemporâneos, consolidando o compromisso cidadão da instituição.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {extensionHighlights.map((item) => (
              <article className="group rounded-lg border border-border-gray bg-white p-6 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={item.title}>
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined transition-transform group-hover:scale-110" aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-medium leading-7 text-primary">{item.title}</h3>
                <p className="mt-2 text-base leading-6 text-on-surface-variant">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de atuação */}
      <section className="border-y border-border-gray bg-surface-container-low py-16" aria-labelledby="action-areas-title">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <h2 className="section-title" id="action-areas-title">Áreas de atuação</h2>
              <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            </div>
            <a className="hidden items-center text-sm font-semibold text-primary hover:underline sm:inline-flex" href="#">Ver todas <span className="material-symbols-outlined ml-1 text-[18px]" aria-hidden="true">arrow_forward</span></a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {actionAreas.map((area) => (
              <a className="group flex min-h-[180px] flex-col rounded-lg border border-border-gray bg-white p-5 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" href="#" key={area.title}>
                <span className="material-symbols-outlined text-[38px] text-primary transition-transform group-hover:scale-110" aria-hidden="true">{area.icon}</span>
                <h3 className="mt-5 flex-1 text-base font-semibold leading-6 text-primary">{area.title}</h3>
                <span className="mt-3 inline-flex items-center text-xs font-semibold text-primary">Ver ações <span className="material-symbols-outlined ml-1 text-[15px]" aria-hidden="true">arrow_forward</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto social */}
      <section className="bg-primary-dark py-16 text-white md:py-20" aria-labelledby="social-impact-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-[28px] font-semibold leading-9 text-white md:text-[32px] md:leading-10" id="social-impact-title">Impacto social e desenvolvimento regional</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-lg leading-7 text-white/85">
              As ações de extensão da UFCG fortalecem a presença da universidade nos territórios, promovendo a transformação sustentável, a redução de desigualdades e a emancipação das comunidades envolvidas, alinhando-se aos objetivos de desenvolvimento sustentável.
            </p>
            <ul className="mt-6 space-y-3">
              {socialImpactPoints.map((point) => (
                <li className="flex items-center gap-3 text-base font-medium text-white" key={point}>
                  <span className="material-symbols-outlined text-[20px] text-accent" aria-hidden="true">check_circle</span>
                  {point}
                </li>
              ))}
            </ul>
            <a className="mt-8 inline-flex rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-reflex" href="#extensao-na-ufcg">Conhecer ações de extensão</a>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/15 bg-primary">
            <img className="h-full w-full object-cover" src={socialImpactImage} alt="Estudantes e comunidade participando de uma ação de extensão" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Como participar */}
      <section className="py-16 md:py-20" id="como-participar" aria-labelledby="participation-title">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 className="section-title" id="participation-title">Como participar</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {participationItems.map((item) => (
              <article className="flex flex-col items-center rounded-lg border border-border-gray border-t-4 border-t-accent bg-white p-6 text-center" key={item.title}>
                <span className="material-symbols-outlined text-[40px] text-primary" aria-hidden="true">{item.icon}</span>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-primary">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-5 text-on-surface-variant">{item.description}</p>
                <a className="mt-5 text-sm font-semibold text-primary hover:underline" href="#">{item.action}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editais */}
      <section className="border-y border-border-gray bg-white py-16 md:py-20" id="editais" aria-labelledby="extension-edital-title">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title" id="extension-edital-title">Editais e oportunidades</h2>
              <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            </div>
            <a className="inline-flex items-center text-sm font-semibold text-primary hover:underline" href="#">Todos os editais <span className="material-symbols-outlined ml-1 text-[18px]" aria-hidden="true">arrow_forward</span></a>
          </div>

          <div className="hidden overflow-x-auto rounded-lg border border-border-gray md:block">
            <table className="w-full border-collapse text-left">
              <thead className="bg-primary-dark text-sm text-white">
                <tr>
                  <th className="p-4 font-semibold">Data</th>
                  <th className="p-4 font-semibold">Categoria</th>
                  <th className="p-4 font-semibold">Título</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 text-center font-semibold">Acesso</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-gray text-base">
                {editalItems.map((item) => (
                  <tr className="transition-colors hover:bg-background" key={item.title}>
                    <td className="whitespace-nowrap p-4 text-sm text-on-surface-variant">{item.date}</td>
                    <td className="p-4"><span className="rounded bg-primary-fixed px-2 py-1 text-xs font-semibold text-on-primary-fixed">{item.category}</span></td>
                    <td className="p-4 font-medium text-text-main">{item.title}</td>
                    <td className="p-4"><span className={`inline-flex items-center gap-2 whitespace-nowrap rounded border px-2 py-1 text-xs font-semibold ${item.statusClass}`}><span className={`h-2 w-2 rounded-full ${item.dotClass}`} aria-hidden="true" />{item.status}</span></td>
                    <td className="p-4 text-center"><a className="inline-grid h-9 w-9 place-items-center rounded-lg text-primary hover:bg-primary-fixed" href="#" aria-label={`Acessar ${item.title}`}><span className="material-symbols-outlined text-[20px]" aria-hidden="true">description</span></a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:hidden">
            {editalItems.map((item) => (
              <article className="rounded-lg border border-border-gray bg-white p-5" key={item.title}>
                <div className="mb-3 flex flex-wrap items-center gap-2"><span className="text-xs font-medium text-on-surface-variant">{item.date}</span><span className="rounded bg-primary-fixed px-2 py-1 text-xs font-semibold text-on-primary-fixed">{item.category}</span></div>
                <h3 className="text-base font-semibold leading-6 text-text-main">{item.title}</h3>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3"><span className={`inline-flex items-center gap-2 rounded border px-2 py-1 text-xs font-semibold ${item.statusClass}`}><span className={`h-2 w-2 rounded-full ${item.dotClass}`} aria-hidden="true" />{item.status}</span><a className="text-sm font-semibold text-primary hover:underline" href="#">Acessar</a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-surface-container py-16 text-center md:py-20" aria-labelledby="extension-cta-title">
        <div className="container-page">
          <span className="material-symbols-outlined text-[52px] text-primary" aria-hidden="true">volunteer_activism</span>
          <h2 className="section-title mt-3" id="extension-cta-title">Conhecimento que transforma realidades</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">Engaje-se nas ações de extensão da UFCG e faça parte do desenvolvimento social e tecnológico da nossa região.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark" href="#editais">Ver editais</a>
            <a className="rounded-lg border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed" href="#extensao-na-ufcg">Conhecer projetos</a>
          </div>
        </div>
      </section>
    </main>
  )
}

import {
  editalItems,
  innovationImage,
  innovationItems,
  researchAreas,
  researchHighlights,
  scientificInitiationItems,
  statsItems,
} from '../data/pesquisaInovacaoData'

export default function PesquisaInovacao() {
  return (
    <main className="bg-background text-text-main">
      {/* Breadcrumb */}
      <nav className="container-page flex items-center gap-2 py-4 text-xs font-medium leading-4" aria-label="Navegação estrutural">
        <a className="text-primary hover:underline" href="/">
          Início
        </a>
        <span className="text-on-surface-variant" aria-hidden="true">/</span>
        <span aria-current="page">Pesquisa e Inovação</span>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary py-16 text-white md:py-20">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">
              Ciência, tecnologia e desenvolvimento
            </p>
            <h1 className="font-serif text-[34px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[56px]">
              Pesquisa e Inovação
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/90">
              Conhecimento científico, desenvolvimento tecnológico e inovação a serviço da sociedade. Liderando a fronteira acadêmica no Nordeste Brasileiro.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low" href="#pesquisa">
                Conheça os projetos
              </a>
              <a className="rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#iniciacao-cientifica">
                Iniciação Científica
              </a>
              <a className="rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#editais">
                Editais de Pesquisa
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-white/20 bg-white/5 p-6 md:p-8" aria-label="Destaque da pesquisa">
            <div className="mb-5 flex items-center gap-4">
              <span className="material-symbols-outlined text-[38px] text-accent" aria-hidden="true">science</span>
              <h2 className="font-serif text-2xl font-medium leading-8 text-white">Excelência em C&amp;T</h2>
            </div>
            <blockquote className="text-base italic leading-6 text-white/80">
              “A pesquisa na UFCG é o motor que impulsiona o desenvolvimento do Polo Tecnológico de Campina Grande e transforma realidades regionais.”
            </blockquote>
            <div className="my-4 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="text-sm font-semibold text-white">Coordenação de Pesquisa</p>
          </aside>
        </div>
      </section>

      {/* Pesquisa na UFCG */}
      <section className="py-16 md:py-20" id="pesquisa" aria-labelledby="research-title">
        <div className="container-page">
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 className="section-title" id="research-title">Pesquisa na UFCG</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-base leading-6 text-on-surface-variant">
              Integramos a formação acadêmica à prática científica para gerar soluções inovadoras e formar pesquisadores de alto nível para o mercado e academia.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {researchHighlights.map((item) => (
              <article className="group rounded-lg border border-border-gray bg-white p-6 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)] md:p-8" key={item.title}>
                <span className="material-symbols-outlined mb-4 text-[36px] text-primary transition-transform group-hover:scale-110" aria-hidden="true">{item.icon}</span>
                <h3 className="font-serif text-2xl font-medium leading-8 text-primary">{item.title}</h3>
                <p className="mt-2 text-base leading-6 text-on-surface-variant">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Pesquisa */}
      <section className="border-y border-border-gray bg-white py-16 md:py-20" aria-labelledby="research-areas-title">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="section-title" id="research-areas-title">Áreas de Pesquisa</h2>
              <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
              <p className="mt-5 text-base leading-6 text-on-surface-variant">
                A interdisciplinaridade é a nossa força. Explore as grandes áreas do conhecimento em que a UFCG atua.
              </p>
            </div>
            <a className="inline-flex items-center text-sm font-semibold text-primary hover:underline" href="#">
              Todas as áreas
              <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchAreas.map((area) => (
              <article className="flex min-h-[260px] flex-col rounded-lg border border-border-gray bg-white p-6 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={area.title}>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary-fixed">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">{area.icon}</span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium leading-8 text-primary">{area.title}</h3>
                <p className="mt-2 flex-1 text-base leading-6 text-on-surface-variant">{area.description}</p>
                <a className="mt-5 inline-flex items-center text-sm font-semibold text-primary hover:underline" href="#">
                  Ver área
                  <span className="material-symbols-outlined ml-1 text-[18px]" aria-hidden="true">chevron_right</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inovação e Tecnologia */}
      <section className="bg-primary-dark py-16 text-white md:py-20" aria-labelledby="innovation-title">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="aspect-video overflow-hidden rounded-lg border border-white/10 bg-primary">
            <img className="h-full w-full object-cover" src={innovationImage} alt="Pesquisadores trabalhando em um laboratório de tecnologia" loading="lazy" />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/75">Fomento Tecnológico</p>
            <h2 className="font-serif text-[28px] font-semibold leading-9 text-white md:text-[32px] md:leading-10" id="innovation-title">Inovação e Tecnologia</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-lg leading-7 text-white/90">
              A UFCG atua como ponte entre o conhecimento acadêmico e o mercado, acelerando a transformação de ideias em produtos e serviços.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {innovationItems.map((item) => (
                <div className="flex gap-4" key={item.title}>
                  <span className="material-symbols-outlined shrink-0 text-accent" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-white/75">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Iniciação Científica */}
      <section className="py-16 md:py-20" id="iniciacao-cientifica" aria-labelledby="scientific-initiation-title">
        <div className="container-page">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="section-title" id="scientific-initiation-title">Iniciação Científica</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-base leading-6 text-on-surface-variant">
              Programas dedicados a inserir o estudante de graduação no universo da pesquisa, preparando-os para os desafios da pós-graduação e do mercado.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scientificInitiationItems.map((item, index) => (
              <article className="rounded-lg border border-border-gray bg-white p-6 text-center" key={item.title}>
                <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-primary text-sm font-bold text-white">{index + 1}</div>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-5 text-on-surface-variant">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Editais */}
      <section className="border-y border-border-gray bg-white py-16 md:py-20" id="editais" aria-labelledby="edital-title">
        <div className="container-page">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="section-title" id="edital-title">Editais e Oportunidades</h2>
              <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            </div>
            <a className="inline-flex min-h-11 items-center justify-center self-start rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark" href="#">
              Ver arquivo completo
            </a>
          </div>

          <div className="hidden overflow-x-auto rounded-lg border border-border-gray md:block">
            <table className="w-full border-collapse text-left">
              <thead className="bg-primary-dark text-sm text-white">
                <tr>
                  <th className="p-4 font-semibold">Data</th>
                  <th className="p-4 font-semibold">Categoria</th>
                  <th className="p-4 font-semibold">Título do Edital</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 text-center font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-gray text-base">
                {editalItems.map((item) => (
                  <tr className="transition-colors hover:bg-background" key={item.title}>
                    <td className="whitespace-nowrap p-4 text-sm text-on-surface-variant">{item.date}</td>
                    <td className="p-4"><span className="rounded bg-primary-fixed px-2 py-1 text-xs font-semibold uppercase text-on-primary-fixed">{item.category}</span></td>
                    <td className="p-4 font-medium text-text-main">{item.title}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded border px-2 py-1 text-xs font-semibold ${item.statusClass}`}>
                        <span className={`h-2 w-2 rounded-full ${item.dotClass}`} aria-hidden="true" />
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-center"><a className="text-sm font-semibold text-primary hover:underline" href="#">Acessar</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 md:hidden">
            {editalItems.map((item) => (
              <article className="rounded-lg border border-border-gray bg-white p-5" key={item.title}>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-on-surface-variant">{item.date}</span>
                  <span className="rounded bg-primary-fixed px-2 py-1 text-xs font-semibold uppercase text-on-primary-fixed">{item.category}</span>
                </div>
                <h3 className="text-base font-semibold leading-6 text-text-main">{item.title}</h3>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <span className={`inline-flex items-center gap-2 rounded border px-2 py-1 text-xs font-semibold ${item.statusClass}`}>
                    <span className={`h-2 w-2 rounded-full ${item.dotClass}`} aria-hidden="true" />
                    {item.status}
                  </span>
                  <a className="text-sm font-semibold text-primary hover:underline" href="#">Acessar</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="bg-primary-dark py-16 text-white md:py-20" aria-labelledby="research-stats-title">
        <div className="container-page">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-[28px] font-semibold leading-9 text-white md:text-[32px] md:leading-10" id="research-stats-title">Pesquisa em Números</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-4 text-base leading-6 text-white/75">Impacto e abrangência da nossa rede de conhecimento.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {statsItems.map((stat) => (
              <div className="rounded-lg border border-white/10 bg-white/5 p-5 text-center md:p-8" key={stat.label}>
                <p className="font-serif text-[34px] font-semibold leading-tight text-accent md:text-[42px]">{stat.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="bg-white py-16 text-center md:py-20" aria-labelledby="research-cta-title">
        <div className="container-page">
          <span className="material-symbols-outlined text-[52px] text-primary" aria-hidden="true">auto_awesome</span>
          <h2 className="section-title mt-3" id="research-cta-title">Transformando conhecimento em impacto</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">
            Seja você aluno, professor ou parceiro externo, há um lugar para sua inovação na UFCG.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark" href="#editais">
              Ver editais abertos
            </a>
            <a className="rounded-lg border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed" href="#pesquisa">
              Conhecer grupos de pesquisa
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

import HeroNavigation from '../components/HeroNavigation'

const navigationItems = [
  { label: 'Apoios e serviços', href: '#apoios' },
  { label: 'Como acessar', href: '#como-acessar' },
  { label: 'Editais', href: '/editais' },
]

const supportAreas = [
  {
    title: 'Auxílios estudantis',
    icon: 'volunteer_activism',
    description: 'Consulte editais, critérios e orientações sobre os programas de apoio disponíveis.',
  },
  {
    title: 'Alimentação universitária',
    icon: 'restaurant',
    description: 'Encontre informações sobre os serviços de alimentação e as regras de acesso em cada campus.',
  },
  {
    title: 'Acolhimento e orientação',
    icon: 'support_agent',
    description: 'Conheça os canais de atendimento e os caminhos para buscar orientação durante a vida acadêmica.',
  },
  {
    title: 'Apoio à vida acadêmica',
    icon: 'school',
    description: 'Acesse informações que ajudam estudantes a conhecer oportunidades e serviços da universidade.',
  },
]

const accessSteps = [
  {
    title: 'Acompanhe as publicações',
    icon: 'notifications_active',
    description: 'Consulte os editais e comunicados para conhecer oportunidades e períodos de inscrição.',
  },
  {
    title: 'Confira os critérios',
    icon: 'fact_check',
    description: 'Leia o documento completo e verifique requisitos, documentos e prazos de cada seleção.',
  },
  {
    title: 'Procure orientação',
    icon: 'forum',
    description: 'Em caso de dúvida, busque os canais de atendimento da unidade responsável no seu campus.',
  },
]

export default function AssistenciaEstudantil() {
  return (
    <main className="bg-background text-text-main">
      <nav className="container-page flex items-center gap-2 py-4 text-xs font-medium leading-4" aria-label="Navegação estrutural">
        <a className="text-primary hover:underline" href="/">Início</a>
        <span className="text-on-surface-variant" aria-hidden="true">/</span>
        <span aria-current="page">Assistência Estudantil</span>
      </nav>

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" aria-hidden="true" />
        <div className="container-page relative grid min-h-[410px] items-center gap-10 py-14 md:grid-cols-[1.35fr_0.65fr] md:py-16">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">Apoio para a vida universitária</p>
            <h1 className="font-serif text-[34px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[56px]">Assistência Estudantil</h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/90">
              Informações e orientações sobre serviços que apoiam a trajetória acadêmica e a permanência estudantil na UFCG.
            </p>
            <HeroNavigation items={navigationItems} />
          </div>
          <aside className="hidden rounded-lg border border-white/20 bg-white/5 p-8 md:block" aria-label="Orientação estudantil">
            <span className="material-symbols-outlined text-[44px] text-accent" aria-hidden="true">diversity_3</span>
            <h2 className="mt-4 font-serif text-2xl font-medium leading-8 text-white">Acolhimento, informação e permanência</h2>
            <p className="mt-3 text-base leading-6 text-white/80">Encontre caminhos para conhecer os serviços e acompanhar as oportunidades disponíveis.</p>
          </aside>
        </div>
      </section>

      <section className="scroll-mt-32 py-16 md:py-20" id="apoios" aria-labelledby="student-support-title">
        <div className="container-page">
          <div className="mb-10 max-w-3xl">
            <h2 className="section-title" id="student-support-title">Apoios e serviços</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-lg leading-7 text-on-surface-variant">
              Consulte as informações de cada serviço e confirme condições, disponibilidade e formas de atendimento nos canais institucionais.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((area) => (
              <article className="group h-full rounded-lg border border-border-gray bg-white p-6 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={area.title}>
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary-fixed text-primary">
                  <span className="material-symbols-outlined transition-transform group-hover:scale-110" aria-hidden="true">{area.icon}</span>
                </div>
                <h3 className="mt-5 font-serif text-xl font-medium leading-7 text-primary">{area.title}</h3>
                <p className="mt-2 text-sm leading-5 text-on-surface-variant">{area.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-primary-dark py-16 text-white md:py-20" id="como-acessar" aria-labelledby="how-to-access-title">
        <div className="container-page">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/75">Orientação para estudantes</p>
            <h2 className="font-serif text-[28px] font-semibold leading-9 text-white md:text-[32px] md:leading-10" id="how-to-access-title">Como acessar os serviços</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {accessSteps.map((step, index) => (
              <article className="rounded-lg border border-white/15 bg-white/5 p-6" key={step.title}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-sm font-bold text-primary">{index + 1}</span>
                  <span className="material-symbols-outlined text-[28px] text-accent" aria-hidden="true">{step.icon}</span>
                </div>
                <h3 className="font-serif text-xl font-medium leading-7 text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/75">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-container py-16 text-center md:py-20" aria-labelledby="student-support-cta-title">
        <div className="container-page">
          <span className="material-symbols-outlined text-[52px] text-primary" aria-hidden="true">campaign</span>
          <h2 className="section-title mt-3" id="student-support-cta-title">Acompanhe editais e oportunidades</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">Consulte as publicações para verificar critérios, documentos e prazos atualizados.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark" href="/editais">Ver editais</a>
            <a className="rounded-lg border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed" href="/campi">Conhecer os campi</a>
          </div>
        </div>
      </section>
    </main>
  )
}

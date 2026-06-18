import {
  campiItems,
  courseItems,
  featuredNews,
  heroBadges,
  heroImage,
  newsItems,
  noticeItems,
  pillarItems,
  profileCards,
  quickAccessItems,
  statsItems,
} from '../data/homeData'

function Home() {
  return (
    <main>
      <section className="relative flex min-h-[520px] w-full items-center overflow-hidden lg:min-h-[600px]">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={heroImage}
          alt="Campus sede da Universidade Federal de Campina Grande"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/45" />
        <div className="container-page relative z-10 py-20">
          <div className="max-w-2xl text-white">
            <h1 className="font-serif text-[34px] font-semibold leading-[1.12] text-white sm:text-[44px] lg:text-[48px]">
              Universidade Federal de Campina Grande
            </h1>
            <p className="mt-4 text-lg leading-7 text-white/90">
              Conhecimento, inovação e compromisso social no desenvolvimento da Paraíba e do Brasil.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroBadges.map((badge) => (
                <span
                  className="inline-flex items-center rounded border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium tracking-[0.03em] text-white backdrop-blur-sm"
                  key={badge.label}
                >
                  <span className="material-symbols-outlined mr-2 text-[16px]">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold tracking-[0.05em] text-white shadow-sm transition-colors hover:bg-primary-dark" href="#">
                Conheça a UFCG
              </a>
              <a className="rounded-lg border border-primary bg-white px-6 py-3 text-sm font-semibold tracking-[0.05em] text-primary shadow-sm transition-colors hover:bg-surface-container-low" href="#">
                Cursos de Graduação
              </a>
              <a className="rounded-lg border border-white bg-transparent px-6 py-3 text-sm font-semibold tracking-[0.05em] text-white transition-colors hover:bg-white/10" href="#">
                Editais e Seleções
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {quickAccessItems.map((item) => (
              <a
                className="group flex min-h-[116px] flex-col items-center justify-center rounded-lg border border-border-gray bg-surface-white p-4 text-center transition-shadow hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]"
                href={item.href}
                key={item.label}
              >
                <span className="material-symbols-outlined mb-2 text-3xl text-primary transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="text-xs font-medium leading-4 tracking-[0.03em] text-text-main">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-white py-16">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="section-title">Notícias e Destaques</h2>
              <div className="mt-2 h-1 w-16 bg-accent" />
            </div>
            <a className="hidden text-sm font-semibold tracking-[0.05em] text-primary hover:underline sm:block" href="#">
              Ver todas as notícias
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <article className="group cursor-pointer lg:col-span-7">
              <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={featuredNews.image}
                  alt="Estudantes em laboratório da UFCG"
                />
                <span className="absolute left-4 top-4 rounded bg-primary px-2 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {featuredNews.category}
                </span>
              </div>
              <p className="mb-2 text-xs font-medium leading-4 tracking-[0.03em] text-on-surface-variant">
                {featuredNews.date}
              </p>
              <h3 className="mb-2 font-serif text-2xl font-semibold leading-8 text-text-main transition-colors group-hover:text-primary">
                {featuredNews.title}
              </h3>
              <p className="line-clamp-2 text-base leading-6 text-on-surface-variant">{featuredNews.excerpt}</p>
            </article>

            <div className="flex flex-col justify-between gap-6 lg:col-span-5">
              {newsItems.map((item) => (
                <article className="group flex cursor-pointer gap-4" key={item.title}>
                  <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded bg-surface-container-high">
                    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-surface-container-highest">
                      <span className="material-symbols-outlined text-3xl text-primary/30">article</span>
                    </div>
                    {item.image && (
                      <img
                        className="relative z-10 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.display = 'none'
                        }}
                      />
                    )}
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold leading-4 tracking-[0.03em] text-primary">
                      {item.category} • {item.date}
                    </p>
                    <h4 className="line-clamp-2 text-lg font-semibold leading-7 text-text-main transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>
                  </div>
                </article>
              ))}
              <a className="mt-2 inline-block text-sm font-semibold tracking-[0.05em] text-primary hover:underline sm:hidden" href="#">
                Ver todas as notícias
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <h2 className="mb-8 text-center font-serif text-3xl font-semibold leading-10 text-primary">
            Para quem você é?
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {profileCards.map((profile) => (
              <article
                className="rounded-lg border border-border-gray bg-surface-white p-6 shadow-sm transition-shadow hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]"
                key={profile.title}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed">
                  <span className="material-symbols-outlined text-primary">{profile.icon}</span>
                </div>
                <h3 className="mb-4 border-b border-border-gray pb-2 text-lg font-semibold leading-7 text-primary">
                  {profile.title}
                </h3>
                <ul className="space-y-3">
                  {profile.links.map((link) => (
                    <li key={link}>
                      <a className="flex items-center text-xs font-medium leading-4 tracking-[0.03em] text-text-main hover:text-primary" href="#">
                        <span className="material-symbols-outlined mr-2 text-[16px]">chevron_right</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-white py-16">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="section-title">Cursos e Oportunidades</h2>
              <div className="mt-2 h-1 w-16 bg-accent" />
            </div>
            <a className="hidden text-sm font-semibold tracking-[0.05em] text-primary hover:underline sm:block" href="#">
              Ver todos os cursos
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {courseItems.map((course) => (
              <a
                className="group flex items-center rounded-lg border border-border-gray bg-surface p-6 transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]"
                href={course.href}
                key={course.title}
              >
                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded border border-border-gray bg-white transition-colors group-hover:bg-primary">
                  <span className="material-symbols-outlined text-primary group-hover:text-white">{course.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-7 text-text-main group-hover:text-primary">
                    {course.title}
                  </h3>
                  <p className="text-xs font-medium leading-4 tracking-[0.03em] text-on-surface-variant">
                    {course.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="section-title">Campi da UFCG</h2>
              <div className="mt-2 h-1 w-16 bg-accent" />
            </div>
            <a className="hidden text-sm font-semibold tracking-[0.05em] text-primary hover:underline sm:block" href="#">
              Conheça a infraestrutura
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {campiItems.map((campus) => (
              <article className="flex overflow-hidden rounded-lg border border-border-gray bg-surface-white" key={campus.name}>
                <div className="flex w-full flex-col">
                  <div className="relative h-32 bg-surface-container-high">
                    {campus.image ? (
                      <img className="h-full w-full object-cover" src={campus.image} alt={campus.alt} />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(135deg,#e1e3e4,#c4c5d5)]">
                        <span className="material-symbols-outlined text-4xl text-primary/35">account_balance</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-lg font-semibold leading-7 text-white">{campus.name}</h3>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="mb-4 flex-1 text-xs font-medium leading-4 tracking-[0.03em] text-on-surface-variant">
                      {campus.description}
                    </p>
                    <a className="text-left text-xs font-semibold leading-4 tracking-[0.03em] text-primary hover:underline" href="#">
                      Ver campus
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-white py-16">
        <div className="container-page">
          <div className="mb-8 text-center">
            <h2 className="section-title">Pilares Acadêmicos</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillarItems.map((pillar) => (
              <article
                className="flex h-full flex-col overflow-hidden rounded-lg border border-border-gray bg-surface shadow-sm"
                key={pillar.title}
              >
                <div className="h-48 overflow-hidden bg-surface-container-high">
                  {pillar.image ? (
                    <img className="h-full w-full object-cover" src={pillar.image} alt={pillar.title} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/10">
                      <span className="material-symbols-outlined text-6xl text-primary/30">emoji_objects</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center">
                    <span className="material-symbols-outlined mr-2 text-2xl text-primary">{pillar.icon}</span>
                    <h3 className="font-serif text-2xl font-semibold leading-8 text-primary">{pillar.title}</h3>
                  </div>
                  <p className="mb-6 flex-1 text-base leading-6 text-on-surface-variant">{pillar.description}</p>
                  <a className="w-full rounded border border-primary px-4 py-2 text-center text-sm font-semibold tracking-[0.05em] text-primary transition-colors hover:bg-primary hover:text-white" href="#">
                    Saiba mais
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="container-page">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="section-title">Editais e Comunicados</h2>
              <div className="mt-2 h-1 w-16 bg-accent" />
            </div>
            <a className="hidden text-sm font-semibold tracking-[0.05em] text-primary hover:underline sm:block" href="#">
              Mural completo
            </a>
          </div>

          <div className="hidden overflow-hidden rounded-lg border border-border-gray bg-surface-white md:block">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border-gray bg-surface-container-low text-xs font-medium leading-4 tracking-[0.03em] text-on-surface-variant">
                    <th className="w-32 p-4 font-semibold">Data</th>
                    <th className="w-40 p-4 font-semibold">Categoria</th>
                    <th className="p-4 font-semibold">Título</th>
                    <th className="w-48 p-4 text-right font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-gray text-base leading-6 text-text-main">
                  {noticeItems.map((notice) => (
                    <tr className="group cursor-pointer transition-colors hover:bg-surface-container-lowest" key={notice.title}>
                      <td className="p-4 text-xs font-medium leading-4 tracking-[0.03em]">{notice.date}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${notice.categoryClass}`}>
                          {notice.category}
                        </span>
                      </td>
                      <td className="p-4 transition-colors group-hover:text-primary">{notice.title}</td>
                      <td className="p-4 text-right">
                        <span className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${notice.statusClass}`}>
                          {notice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid gap-4 md:hidden">
            {noticeItems.map((notice) => (
              <article className="rounded-lg border border-border-gray bg-surface-white p-4" key={notice.title}>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium leading-4 tracking-[0.03em] text-on-surface-variant">{notice.date}</span>
                  <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${notice.categoryClass}`}>
                    {notice.category}
                  </span>
                </div>
                <h3 className="mb-3 text-base font-semibold leading-6 text-text-main">{notice.title}</h3>
                <span className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-medium ${notice.statusClass}`}>
                  {notice.status}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary-dark py-16 text-white">
        <div className="absolute inset-0 opacity-10 stats-pattern" />
        <div className="container-page relative z-10">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-semibold leading-10 text-white">A UFCG em Números</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
          </div>

          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {statsItems.map((stat) => (
              <div key={stat.label}>
                <p className="mb-2 font-serif text-[42px] font-bold leading-[1.1] text-accent lg:text-[48px]">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold uppercase leading-5 tracking-[0.05em] text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

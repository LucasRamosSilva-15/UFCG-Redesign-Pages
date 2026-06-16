import { featuredNews, newsItems } from '../data/news'

function NewsSection() {
  return (
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
                <div className="h-24 w-32 shrink-0 overflow-hidden rounded bg-surface-container-high">
                  <div className="flex h-full w-full items-center justify-center bg-surface-container-highest">
                    <span className="material-symbols-outlined text-3xl text-primary/30">article</span>
                  </div>
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
  )
}

export default NewsSection

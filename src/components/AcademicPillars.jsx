import { pillars } from '../data/pillars'

function AcademicPillars() {
  return (
    <section className="bg-surface-white py-16">
      <div className="container-page">
        <div className="mb-8 text-center">
          <h2 className="section-title">Pilares Acadêmicos</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
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
  )
}

export default AcademicPillars

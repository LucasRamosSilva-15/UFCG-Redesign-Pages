import { campi } from '../data/campi'

function CampiSection() {
  return (
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
          {campi.map((campus) => (
            <article className="flex overflow-hidden rounded-lg border border-border-gray bg-surface-white" key={campus.name}>
              <div className="flex w-full flex-col">
                <div className="relative h-32 bg-surface-container-high">
                  {campus.image ? (
                    <img className="h-full w-full object-cover" src={campus.image} alt={`Campus ${campus.name}`} />
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
  )
}

export default CampiSection

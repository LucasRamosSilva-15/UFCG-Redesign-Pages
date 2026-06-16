import { stats } from '../data/stats'

function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-16 text-white">
      <div className="absolute inset-0 opacity-10 stats-pattern" />
      <div className="container-page relative z-10">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-semibold leading-10 text-white">A UFCG em Números</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
        </div>

        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((stat) => (
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
  )
}

export default StatsSection

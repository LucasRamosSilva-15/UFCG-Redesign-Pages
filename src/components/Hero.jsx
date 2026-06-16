const heroImage =
  'https://cdn.jornaldaparaiba.com.br/img/inline/190000/900x0/Apos-cortes-no-orcamento-UFCG-alerta-para-grave-cr0019030800202505121029-8.webp?fallback=https%3A%2F%2Fcdn.jornaldaparaiba.com.br%2Fimg%2Finline%2F190000%2FApos-cortes-no-orcamento-UFCG-alerta-para-grave-cr0019030800202505121029.jpg%3Fxid%3D1125559&xid=1125559'
const badges = [
  { icon: 'location_on', label: '7 campi' },
  { icon: 'school', label: 'Ensino público e gratuito' },
  { icon: 'science', label: 'Pesquisa e extensão' },
]

function Hero() {
  return (
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
            {badges.map((badge) => (
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
  )
}

export default Hero

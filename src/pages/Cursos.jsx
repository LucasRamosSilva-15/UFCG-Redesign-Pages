import {
  campusOptions,
  degreeOptions,
  featuredCourses,
  knowledgeAreaOptions,
  postgraduateOptions,
  shiftOptions,
} from '../data/cursosData'

const filterFields = [
  { id: 'campus', label: 'Campus', options: campusOptions },
  { id: 'knowledge-area', label: 'Área do Conhecimento', options: knowledgeAreaOptions },
  { id: 'degree', label: 'Grau', options: degreeOptions },
  { id: 'shift', label: 'Turno', options: shiftOptions },
]

export default function Cursos() {
  return (
    <main className="bg-background text-text-main">
      <nav className="container-page flex items-center gap-2 py-4 text-xs font-medium leading-4" aria-label="Navegacao estrutural">
        <a className="text-primary hover:underline" href="/">
          Início
        </a>
        <span className="text-on-surface-variant" aria-hidden="true">/</span>
        <span aria-current="page">Cursos</span>
      </nav>

      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-accent" aria-hidden="true" />
        <div className="container-page relative py-12 md:py-16">
          <span className="material-symbols-outlined absolute right-8 top-1/2 hidden -translate-y-1/2 text-[180px] text-white/10 lg:block" aria-hidden="true">
            account_balance
          </span>
          <div className="relative max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase leading-4 tracking-[0.05em] text-white/80">
              Ensino público e gratuito
            </p>
            <h1 className="font-serif text-[34px] font-semibold leading-[1.15] text-white md:text-[48px] md:leading-[56px]">
              Cursos da UFCG
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/90">
              Explore a diversidade acadêmica da Universidade Federal de Campina Grande. Oferecemos excelência em graduação e pós-graduação, conectando conhecimento e inovação em sete campi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low" href="#graduacao">
                Ver cursos de graduação
              </a>
              <a className="rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#pos-graduacao">
                Pós-graduação
              </a>
              <a className="inline-flex items-center rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" href="#ingresso">
                Formas de Ingresso
                <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10 md:py-12" aria-labelledby="course-search-title">
        <div className="rounded-lg border border-border-gray bg-white p-5 shadow-[0_4px_12px_rgba(0,45,114,0.08)] md:p-6">
          <div className="mb-6 flex items-center gap-3">
            <span className="material-symbols-outlined text-accent" aria-hidden="true">manage_search</span>
            <h2 id="course-search-title" className="font-serif text-2xl font-medium leading-8 text-primary">
              Encontre seu curso
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="relative md:col-span-2 xl:col-span-1">
              <label className="sr-only" htmlFor="course-search">Buscar por nome</label>
              <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant" aria-hidden="true">search</span>
              <input
                className="h-11 w-full rounded-lg border border-border-gray bg-background py-2 pl-10 pr-3 text-sm text-text-main outline-none transition-colors placeholder:text-on-surface-variant focus:border-primary focus:ring-2 focus:ring-primary-fixed"
                id="course-search"
                placeholder="Buscar por nome do curso..."
                type="search"
              />
            </div>
            {filterFields.map((field) => (
              <div key={field.id}>
                <label className="sr-only" htmlFor={field.id}>{field.label}</label>
                <select
                  className="h-11 w-full rounded-lg border border-border-gray bg-background px-3 text-sm text-text-main outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-fixed"
                  defaultValue=""
                  id={field.id}
                >
                  <option value="">{field.label}</option>
                  {field.options.map((option) => (
                    <option value={option.value} key={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page pb-16" id="graduacao" aria-labelledby="featured-courses-title">
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <h2 id="featured-courses-title" className="section-title">Cursos em Destaque</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
          </div>
          <a className="hidden items-center text-sm font-semibold text-primary hover:underline sm:inline-flex" href="#">
            Ver todos os 98 cursos
            <span className="material-symbols-outlined ml-1 text-[18px]" aria-hidden="true">chevron_right</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <article className="flex min-h-[320px] flex-col overflow-hidden rounded-lg border border-border-gray bg-white transition-all hover:border-primary hover:shadow-[0_4px_12px_rgba(0,45,114,0.08)]" key={course.name}>
              <div className="h-1 w-full bg-accent" aria-hidden="true" />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex flex-wrap gap-2">
                  {course.tags.map((tag, index) => (
                    <span className={index === 0 ? 'rounded bg-primary-fixed px-2 py-1 text-xs font-medium text-on-primary-fixed' : 'rounded bg-surface-container px-2 py-1 text-xs font-medium text-on-surface-variant'} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-2xl font-medium leading-8 text-primary">{course.name}</h3>
                <p className="mt-2 flex items-center text-xs font-medium leading-4 text-on-surface-variant">
                  <span className="material-symbols-outlined mr-1 text-[17px] text-primary" aria-hidden="true">location_on</span>
                  {course.campus}
                </p>
                <p className="mt-5 flex-1 text-base leading-6 text-on-surface-variant">{course.description}</p>
              </div>
              <a className="flex min-h-12 items-center justify-center border-t border-border-gray bg-background px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary-fixed" href="#">
                Ver detalhes do curso
                <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">arrow_forward</span>
              </a>
            </article>
          ))}
        </div>
        <a className="mt-6 inline-flex items-center text-sm font-semibold text-primary hover:underline sm:hidden" href="#">
          Ver todos os cursos
          <span className="material-symbols-outlined ml-1 text-[18px]" aria-hidden="true">arrow_forward</span>
        </a>
      </section>

      <section className="border-y border-border-gray bg-surface-container-low py-14 md:py-16" id="pos-graduacao" aria-labelledby="postgraduate-title">
        <div className="container-page">
          <div className="max-w-3xl">
            <h2 id="postgraduate-title" className="section-title">Pós-Graduação</h2>
            <div className="mt-2 h-1 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-base leading-6 text-on-surface-variant">
              Aprofunde seus conhecimentos. A UFCG oferece programas de excelência acadêmica reconhecidos nacionalmente pela CAPES, nas mais diversas áreas do saber.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {postgraduateOptions.map((option) => (
              <article className="rounded-lg border border-border-gray border-t-4 border-t-accent bg-white p-6" key={option.title}>
                <span className="material-symbols-outlined mb-4 text-[36px] text-primary" aria-hidden="true">{option.icon}</span>
                <h3 className="text-lg font-semibold leading-7 text-primary">{option.title}</h3>
                <p className="mt-2 text-sm leading-5 text-on-surface-variant">{option.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-start md:justify-end">
            <a className="inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark" href="#">
              Acessar Portal da Pós-Graduação
              <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">open_in_new</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
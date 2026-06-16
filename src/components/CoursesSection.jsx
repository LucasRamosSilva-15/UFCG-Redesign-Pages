import { courses } from '../data/courses'

function CoursesSection() {
  return (
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
          {courses.map((course) => (
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
  )
}

export default CoursesSection

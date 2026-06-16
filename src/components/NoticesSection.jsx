import { notices } from '../data/notices'

function NoticesSection() {
  return (
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
                {notices.map((notice) => (
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
          {notices.map((notice) => (
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
  )
}

export default NoticesSection

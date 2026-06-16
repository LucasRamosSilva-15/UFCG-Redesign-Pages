import { quickAccessItems } from '../data/quickAccess'

function QuickAccess() {
  return (
    <section className="bg-surface py-12">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
          {quickAccessItems.map((item) => (
            <a
              className="group flex min-h-[116px] flex-col items-center justify-center rounded-lg border border-border-gray bg-surface-white p-4 text-center transition-shadow hover:shadow-[0_4px_12px_rgba(0,31,84,0.08)]"
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
  )
}

export default QuickAccess

function HeroNavigation({ items, ariaLabel = 'Navegação da página' }) {
  return (
    <nav className="mt-8 flex flex-wrap gap-3" aria-label={ariaLabel}>
      {items.map((item, index) => (
        <a
          className={
            index === 0
              ? 'inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
              : 'inline-flex min-h-11 items-center justify-center rounded-lg border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
          }
          href={item.href}
          key={`${item.href}-${item.label}`}
        >
          {item.icon && item.iconPosition !== 'end' && (
            <span className="material-symbols-outlined mr-2 text-[18px]" aria-hidden="true">
              {item.icon}
            </span>
          )}
          {item.label}
          {item.icon && item.iconPosition === 'end' && (
            <span className="material-symbols-outlined ml-2 text-[18px]" aria-hidden="true">
              {item.icon}
            </span>
          )}
        </a>
      ))}
    </nav>
  )
}

export default HeroNavigation

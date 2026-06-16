import { useState } from 'react'
import ufcgLogo from '../assets/ufcg-logo2.png'

const utilityLinks = ['Acesso à Informação', 'Transparência', 'Ouvidoria', 'SEI', 'Sistemas', 'Contato']
const navLinks = [
  'A UFCG',
  'Cursos',
  'Pesquisa e Inovação',
  'Extensão',
  'Assistência Estudantil',
  'Campi',
  'Editais',
  'Notícias',
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border-gray/80 bg-white">
      <nav className="bg-primary text-white">
        <div className="mx-auto flex h-[26px] w-full max-w-[1180px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-6">
            <span className="shrink-0 text-[12px] font-bold leading-none">UFCG</span>
            <div className="hidden items-center gap-5 md:flex">
              {utilityLinks.map((link) => (
                <a className="text-[12px] font-medium leading-none text-white/95 transition-colors hover:text-accent" href="#" key={link}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <a className="shrink-0 text-[12px] font-bold leading-none text-accent transition-colors hover:text-white" href="#">
            Sistemas UFCG
          </a>
        </div>
      </nav>

      <div className="mx-auto flex h-[64px] w-full max-w-[1180px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <a className="flex min-w-0 shrink-0 items-center gap-2.5" href="#" aria-label="Página inicial da UFCG">
          <img className="h-[52px] w-[52px] shrink-0 object-contain" src={ufcgLogo} alt="" />
          <span className="hidden font-serif text-[15px] font-medium leading-[1.18] text-primary sm:block">
            Universidade Federal
            <br />
            de Campina Grande
          </span>
          <span className="font-serif text-[17px] font-semibold leading-none text-primary sm:hidden">UFCG</span>
        </a>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-6">
          {navLinks.map((link, index) => (
            <a
              className={
                index === 0
                  ? 'border-b-[3px] border-accent pb-[9px] pt-3 text-[12px] font-bold tracking-[0.12em] text-primary'
                  : 'pb-[9px] pt-3 text-[12px] font-semibold tracking-[0.12em] text-primary transition-colors hover:text-primary-reflex'
              }
              href="#"
              key={link}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-primary transition-colors hover:bg-surface-container-low"
            type="button"
            aria-label="Buscar"
          >
            <span className="material-symbols-outlined text-[26px]">search</span>
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg text-primary transition-colors hover:bg-surface-container-low lg:hidden"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-border-gray bg-white lg:hidden">
          <div className="grid gap-1 px-5 py-3 sm:grid-cols-2 sm:px-8">
            {navLinks.map((link) => (
              <a
                className="rounded-lg px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low hover:text-primary-reflex"
                href="#"
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header

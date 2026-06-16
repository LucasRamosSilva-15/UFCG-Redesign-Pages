import ufcgMark from '../assets/ufcg-logo2.png'

const footerColumns = [
  {
    title: 'Institucional',
    links: ['A Instituição', 'Reitoria', 'Pró-Reitorias', 'Centros e Unidades', 'Conselhos Superiores'],
  },
  {
    title: 'Ensino',
    links: ['Graduação', 'Pós-Graduação', 'Calendário Acadêmico', 'Bibliotecas'],
  },
  {
    title: 'Pesquisa e Extensão',
    links: ['Pesquisa e Inovação', 'Extensão', 'Grupos de Pesquisa', 'NIT'],
  },
  {
    title: 'Servicos',
    links: ['Portal do Aluno', 'Portal do Servidor', 'Sistemas Web', 'SEI', 'Webmail'],
  },
  {
    title: 'Transparência e Contato',
    links: ['Transparência', 'Acesso à Informação', 'Ouvidoria', 'Contato', 'Imprensa'],
  },
]

const socialLinks = [
  { label: 'Facebook', icon: 'thumb_up' },
  { label: 'Instagram', icon: 'photo_camera' },
  { label: 'Twitter', icon: 'chat' },
  { label: 'YouTube', icon: 'play_arrow' },
]

function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-primary-dark text-on-primary">
      <div className="container-page grid grid-cols-1 gap-10 py-14 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-1">
          <div className="mb-5 flex items-center gap-3">
            <img className="h-12 w-12 rounded-lg bg-white object-contain p-1" src={ufcgMark} alt="" />
            <div>
              <p className="text-lg font-semibold leading-tight text-white">UFCG</p>
              <p className="text-xs font-medium uppercase tracking-[0.05em] text-accent">Universidade Federal</p>
            </div>
          </div>
          <address className="mb-6 space-y-1 text-xs font-medium leading-5 tracking-[0.03em] text-white/70 not-italic">
            Rua Aprígio Veloso, 882 - Universitário
            <br />
            Campina Grande - PB, CEP: 58429-900
            <br />
            CNPJ: 05.055.128/0001-76
            <br />
            Telefone: (83) 2101-1000
          </address>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent hover:text-primary"
                href="#"
                aria-label={link.label}
                key={link.label}
              >
                <span className="material-symbols-outlined text-sm">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="mb-4 text-sm font-semibold uppercase leading-5 tracking-[0.05em] text-accent">
              {column.title}
            </h4>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link}>
                  <a className="text-xs font-medium leading-4 tracking-[0.03em] text-white/80 transition-colors hover:text-white" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container-page border-t border-white/10 py-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-[13px] leading-[18px] text-white/60">
            © 2024 Universidade Federal de Campina Grande - UFCG. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] leading-[18px] text-white/60">
            <a className="transition-colors hover:text-white" href="#">
              Política de Privacidade
            </a>
            <a className="transition-colors hover:text-white" href="#">
              LGPD
            </a>
            <a className="transition-colors hover:text-white" href="#">
              Mapa do Site
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

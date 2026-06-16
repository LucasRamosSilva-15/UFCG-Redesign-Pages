import { profiles } from '../data/profiles'

function ProfileAccess() {
  return (
    <section className="bg-surface py-16">
      <div className="container-page">
        <h2 className="mb-8 text-center font-serif text-3xl font-semibold leading-10 text-primary">
          Para quem você é?
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {profiles.map((profile) => (
            <article
              className="rounded-lg border border-border-gray bg-surface-white p-6 shadow-sm transition-shadow hover:shadow-[0_4px_12px_rgba(0,31,84,0.08)]"
              key={profile.title}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-fixed">
                <span className="material-symbols-outlined text-primary">{profile.icon}</span>
              </div>
              <h3 className="mb-4 border-b border-border-gray pb-2 text-lg font-semibold leading-7 text-primary">
                {profile.title}
              </h3>
              <ul className="space-y-3">
                {profile.links.map((link) => (
                  <li key={link}>
                    <a className="flex items-center text-xs font-medium leading-4 tracking-[0.03em] text-text-main hover:text-primary" href="#">
                      <span className="material-symbols-outlined mr-2 text-[16px]">chevron_right</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProfileAccess

import { useNavigate } from "react-router-dom"

export function Hero() {
  const navigate = useNavigate()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="portfolio-section pb-18 pt-16 sm:pt-24" id="top">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="eyebrow">Full-stack portfolio</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-50 text-balance sm:text-5xl lg:text-7xl">
            Building thoughtful product experiences across frontend, backend,
            and developer workflows.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 text-pretty">
            I&apos;m Niall Mahford, a software engineer focused on clear UX,
            practical full-stack systems, and work that stays readable as it
            grows. My background includes React, Ruby on Rails, SQL, and
            product-oriented interface work.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <button
              type="button"
              className="button-primary justify-center sm:justify-start"
              onClick={() => scrollToSection("work")}
            >
              View selected work
            </button>
            <button
              type="button"
              className="button-secondary justify-center sm:justify-start"
              onClick={() => scrollToSection("contact")}
            >
              Contact me
            </button>
            <button
              type="button"
              className="button-secondary justify-center sm:justify-start"
              onClick={() => navigate("/auth-lab")}
            >
              Open Auth Lab
            </button>
          </div>

          <dl className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <div className="surface-panel lift-card rounded-3xl p-5">
              <dt className="text-slate-400">Focus</dt>
              <dd className="mt-2 text-base font-medium text-slate-50">
                Product-minded engineering
              </dd>
            </div>
            <div className="surface-panel lift-card rounded-3xl p-5">
              <dt className="text-slate-400">Stack</dt>
              <dd className="mt-2 text-base font-medium text-slate-50">
                React, TypeScript, Ruby, SQL
              </dd>
            </div>
            <div className="surface-panel lift-card rounded-3xl p-5">
              <dt className="text-slate-400">Strength</dt>
              <dd className="mt-2 text-base font-medium text-slate-50">
                Shipping clean, usable interfaces
              </dd>
            </div>
          </dl>
        </div>

        <aside className="surface-panel rounded-[32px] p-6 sm:p-8">
          <p className="text-sm font-medium tracking-[0.2em] text-[var(--accent)] uppercase">
            Snapshot
          </p>
          <div className="mt-6 space-y-5">
            <div className="surface-soft rounded-[28px] p-5">
              <p className="text-sm text-slate-400">What I care about</p>
              <p className="mt-2 text-base leading-7 text-slate-200">
                Strong information architecture, maintainable interfaces, and
                the small polish details that make software feel trustworthy.
              </p>
            </div>
            <div className="surface-soft rounded-[28px] p-5">
              <p className="text-sm text-slate-400">Selected themes</p>
              <p className="mt-2 text-base leading-7 text-slate-200">
                Product architecture, interaction design, and the pragmatic
                engineering decisions that keep features easy to evolve.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(107,226,213,0.18),rgba(107,226,213,0.04))] p-5">
              <p className="text-sm text-slate-300">Links</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  className="button-secondary justify-center sm:justify-start"
                  href="https://github.com/niall-m"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  className="button-secondary justify-center sm:justify-start"
                  href="https://www.linkedin.com/in/niallmahford/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

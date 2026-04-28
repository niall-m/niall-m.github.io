export function Hero() {
  return (
    <section className="portfolio-section pb-18 pt-16 sm:pt-24" id="top">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="eyebrow">Full-stack portfolio</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-50 text-balance sm:text-5xl lg:text-6xl">
            Building product flows where UX, auth, and backend systems all have to line up.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 text-pretty">
            I&apos;m Niall Mahford, a software engineer who likes working at the seam 
            between product UX and backend systems. A lot of my work has focused 
            on onboarding flows, Auth0/OAuth integrations, account state, redirects, 
            and the messy handoffs where products either feel seamless or start to fall apart.
          </p>

          <dl className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
            <div className="surface-panel lift-card rounded-3xl p-5">
              <dt className="text-slate-400">Focus</dt>
              <dd className="mt-2 text-base font-medium text-slate-50">
                Onboarding, auth, internal tools
              </dd>
            </div>
            <div className="surface-panel lift-card rounded-3xl p-5">
              <dt className="text-slate-400">Stack</dt>
              <dd className="mt-2 text-base font-medium text-slate-50">
                React, TypeScript, Next.js, Auth0
              </dd>
            </div>
            <div className="surface-panel lift-card rounded-3xl p-5">
              <dt className="text-slate-400">Experience</dt>
              <dd className="mt-2 text-base font-medium text-slate-50">
                Full-stack product engineering
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
                Clear flows, resilient systems, and code that other developers can safely change.
              </p>
            </div>
            <div className="surface-soft rounded-[28px] p-5">
              <p className="text-sm text-slate-400">How I work</p>
              <p className="mt-2 text-base leading-7 text-slate-200">
                Making complex flows feel clear: users should know 
                where they are, what&apos;s happening, and what to do next.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

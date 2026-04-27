import { Link } from "react-router-dom"

const previewSteps = [
  {
    label: "Signed Out",
    detail: "No identity context yet"
  },
  {
    label: "Authenticated",
    detail: "User exists, access still blocked"
  },
  {
    label: "Authorized",
    detail: "Claims and entitlements applied"
  }
]

export function AuthLabPreview() {
  return (
    <section className="portfolio-section pt-4">
      <div className="mx-auto max-w-6xl">
        <div className="surface-panel grid rounded-[36px] p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div>
            <p className="eyebrow">Featured demo</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 text-balance sm:text-4xl">
              Explore the Auth + Authorization Flow Lab as a dedicated walkthrough.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300 text-pretty">
              The full lab lives on its own route and demonstrates how auth
              state, onboarding, claims, and product access can change over a
              single user journey without any real backend.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <Link className="button-primary justify-center sm:justify-start" to="/auth-lab">
                Open Auth Lab
              </Link>
              <span className="status-pill justify-center sm:justify-start">
                GitHub Pages-safe via HashRouter
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(8,15,22,0.78))] p-6 lg:mt-0">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-slate-50">Preview states</p>
              <span className="rounded-full border border-[rgba(114,221,209,0.18)] bg-[rgba(114,221,209,0.08)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
                Local state only
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {previewSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="surface-soft grid grid-cols-[44px_1fr] gap-4 rounded-[24px] p-4"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-slate-100">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-50">{step.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="surface-soft mt-5 rounded-[24px] p-4 font-mono text-xs leading-6 text-slate-400">
              <div>{`401 -> 403 -> 200 -> access granted`}</div>
              <div>{`claims.scopes += ["access:product"]`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

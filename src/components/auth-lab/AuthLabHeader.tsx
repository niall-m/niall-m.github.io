import { Link } from "react-router-dom"
import { ArrowLeftIcon } from "./icons/ArrowLeftIcon"

export function AuthLabHeader() {
  return (
    <section className="portfolio-section pb-4 pt-9 sm:pb-5 sm:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <Link className="button-secondary gap-2" to="/">
            <ArrowLeftIcon className="size-4" />
            Back to Portfolio
          </Link>
          <span className="eyebrow">Interactive Lab</span>
        </div>

        <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
          Authentication vs. Authorization Lab
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300 text-pretty">
          A local-state demo showing why signing in proves identity, but does
          not automatically grant product access.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
          <span className="status-pill">React state only</span>
          <span className="status-pill">Simulated auth provider</span>
          <span className="status-pill">No API routes</span>
        </div>
      </div>
    </section>
  )
}

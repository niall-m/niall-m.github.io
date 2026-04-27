export function TeachingCard() {
  return (
    <article className="surface-panel rounded-[28px] p-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-50">
          Authentication vs Authorization
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Related concepts, but not the same job.
        </p>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <section className="rounded-[24px] border border-white/8 bg-slate-950/35 p-5">
          <h4 className="text-sm font-semibold text-slate-50">
            Authentication
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Confirms who the user is through login, session creation, or
            identity verification.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-slate-400">
            <li>Email and password</li>
            <li>OAuth with Google or GitHub</li>
            <li>Magic links or MFA</li>
          </ul>
        </section>

        <section className="rounded-[24px] border border-[rgba(114,221,209,0.16)] bg-[rgba(114,221,209,0.06)] p-5">
          <h4 className="text-sm font-semibold text-[var(--accent)]">
            Authorization
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Determines what that authenticated user is allowed to access once
            the app knows who they are.
          </p>
          <ul className="mt-4 space-y-2 text-xs text-slate-400">
            <li>Role-based or entitlement-based access</li>
            <li>Scoped API tokens</li>
            <li>Product and feature gates</li>
          </ul>
        </section>
      </div>

      <div className="mt-6 rounded-[24px] border border-white/8 bg-slate-950/35 p-4">
        <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
          Key takeaway
        </p>
        <p className="mt-2 text-sm leading-7 text-slate-300">
          A user can be fully authenticated and still blocked from the product
          until onboarding or entitlement setup is complete. That gap is what
          this demo is modeling.
        </p>
      </div>
    </article>
  )
}

export function ScopeCard() {
  return (
    <article className="surface-soft rounded-[1.75rem] p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
        Scope of this demo
      </p>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        This lab focuses only on authN/authZ. Signup, onboarding,
        payment, claim refresh, and backend integration are
        intentionally out of scope.
      </p>

      <div className="mt-4 rounded-[1.25rem] border border-cyan-300/14 bg-cyan-300/8 p-4">
        <p className="text-sm leading-6 text-cyan-50">
          Key takeaway: signing in proves identity. It does not
          automatically grant access to a product unless the app or
          API can verify the required entitlement.
        </p>
      </div>
    </article>
  )
}

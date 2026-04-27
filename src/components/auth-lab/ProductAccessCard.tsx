import type { AuthClaims } from "./TokenPreview"

type AuthLabState =
  | "signed_out"
  | "onboarding_required"
  | "onboarding_complete"
  | "authorized"

interface ProductAccessCardProps {
  state: AuthLabState
  claims: AuthClaims
  onLogin: () => void
  onCompleteOnboarding: () => void
  onRefreshClaims: () => void
}

export function ProductAccessCard({
  state,
  claims,
  onLogin,
  onCompleteOnboarding,
  onRefreshClaims
}: ProductAccessCardProps) {
  const isLocked = !claims.product_access

  return (
    <article
      className={[
        "surface-panel rounded-[28px] p-6 transition-colors duration-300",
        isLocked ? "" : "ring-1 ring-[rgba(114,221,209,0.25)]"
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-slate-50">Product Access</h3>
          <p className="mt-1 text-xs text-slate-400">
            {isLocked
              ? "Complete the flow to unlock the app shell."
              : "The session now carries the entitlement needed for entry."}
          </p>
        </div>
        <div
          className={[
            "flex h-11 w-11 items-center justify-center rounded-2xl text-lg font-semibold",
            isLocked
              ? "border border-white/10 bg-white/5 text-slate-500"
              : "bg-[var(--accent)] text-slate-950"
          ].join(" ")}
        >
          {isLocked ? "L" : "U"}
        </div>
      </div>

      <div
        className={[
          "mt-6 overflow-hidden rounded-[24px] border border-white/8 bg-slate-950/40 transition duration-300",
          isLocked ? "opacity-60 grayscale-[0.2]" : "opacity-100"
        ].join(" ")}
      >
        <div className="border-b border-white/8 bg-white/4 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-300/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-300/70" />
            <span className="ml-2 text-xs text-slate-500">app.example.com</span>
          </div>
        </div>
        <div className="grid gap-3 p-4">
          <div className="h-3 w-3/4 rounded-full bg-white/8" />
          <div className="h-3 w-1/2 rounded-full bg-white/8" />
          <div className="h-16 rounded-[18px] bg-[linear-gradient(135deg,rgba(114,221,209,0.12),rgba(255,255,255,0.03))]" />
        </div>
      </div>

      <div className="mt-6">
        {state === "signed_out" ? (
          <button type="button" onClick={onLogin} className="button-primary w-full justify-center">
            Sign in to continue
          </button>
        ) : null}
        {state === "onboarding_required" ? (
          <button
            type="button"
            onClick={onCompleteOnboarding}
            className="button-primary w-full justify-center"
          >
            Complete onboarding
          </button>
        ) : null}
        {state === "onboarding_complete" ? (
          <button
            type="button"
            onClick={onRefreshClaims}
            className="button-primary w-full justify-center"
          >
            Refresh to unlock
          </button>
        ) : null}
        {state === "authorized" ? (
          <div className="rounded-[24px] border border-[rgba(114,221,209,0.22)] bg-[rgba(114,221,209,0.1)] px-4 py-3 text-center text-sm font-medium text-[var(--accent)]">
            Product unlocked. The user is authenticated and authorized.
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-xs text-slate-500">
        {claims.product_access
          ? "Access granted because product_access is true."
          : "Access remains blocked until the session contains product_access: true."}
      </p>
    </article>
  )
}

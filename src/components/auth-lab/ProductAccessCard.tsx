import { IconShell } from "./IconShell"
import { CheckIcon } from "./icons/CheckIcon"
import { LockIcon } from "./icons/LockIcon"
import { ShieldIcon } from "./icons/ShieldIcon"
import { UnlockIcon } from "./icons/UnlockIcon"
import { XIcon } from "./icons/XIcon"
import type { AuthState } from "./lib/types"
import { cx } from "./lib/utils"

export function ProductAccessCard({ state }: { state: AuthState }) {
  const hasAccess = state === "entitled_user"

  return (
    <article
      className={cx(
        "surface-panel rounded-[1.75rem] p-5",
        hasAccess
          ? "border-emerald-400/20 bg-[linear-gradient(180deg,rgba(16,185,129,0.12),rgba(15,24,34,0.82))]"
          : "border-white/8"
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <IconShell tone={hasAccess ? "success" : state === "basic_user" ? "warning" : "muted"}>
            {hasAccess ? <UnlockIcon className="size-5" /> : <LockIcon className="size-5" />}
          </IconShell>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Product Access
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-50">
              {hasAccess ? "Unlocked by entitlement" : "Locked for this user"}
            </h3>
          </div>
        </div>
        <span
          className={cx(
            "rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase",
            hasAccess
              ? "border-emerald-500/30 bg-emerald-500/12 text-emerald-200"
              : "border-white/10 bg-white/6 text-slate-300"
          )}
        >
          {hasAccess ? "Authorized" : "Not Authorized"}
        </span>
      </div>

      <div
        className={cx(
          "mt-5 rounded-[1.25rem] border border-dashed p-5 text-center",
          hasAccess
            ? "border-emerald-400/22 bg-emerald-500/8"
            : "border-white/10 bg-slate-950/45"
        )}
      >
        <div className="mx-auto flex max-w-md flex-col items-center">
          {hasAccess ? (
            <>
              <IconShell tone="success">
                <CheckIcon className="size-5" />
              </IconShell>
              <p className="mt-4 text-lg font-semibold text-emerald-100">
                Access granted
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The required entitlement is present, so product access is
                unlocked for this authenticated user.
              </p>
            </>
          ) : state === "basic_user" ? (
            <>
              <IconShell tone="warning">
                <ShieldIcon className="size-5" />
              </IconShell>
              <p className="mt-4 text-lg font-semibold text-amber-100">
                Authenticated, but still blocked
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Identity is verified, but product access stays locked because
                `auth_lab_access` is missing.
              </p>
            </>
          ) : (
            <>
              <IconShell tone="muted">
                <XIcon className="size-5" />
              </IconShell>
              <p className="mt-4 text-lg font-semibold text-slate-200">
                No authenticated session
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-400">
                Without a valid session, the request returns `401 Unauthorized`
                before product access can be granted.
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

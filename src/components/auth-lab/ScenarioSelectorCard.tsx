import { STATE_INFO } from "./lib/data"
import { IconShell } from "./IconShell"
import { KeyIcon } from "./icons/KeyIcon"
import { UserCheckIcon } from "./icons/UserCheckIcon"
import { UserIcon } from "./icons/UserIcon"
import { UserOffIcon } from "./icons/UserOffIcon"
import { ScenarioButton } from "./ScenarioButton"
import type { AuthState } from "./lib/types"

export function ScenarioSelectorCard({
  currentState,
  onSelect
}: {
  currentState: AuthState
  onSelect: (state: AuthState) => void
}) {
  return (
    <section className="surface-soft rounded-[1.75rem] p-4 sm:p-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <IconShell>
            <KeyIcon className="size-5" />
          </IconShell>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Choose a Scenario
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Signed-in users keep the same OAuth/OIDC scopes here. Access
              changes only through entitlements.
            </p>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          <ScenarioButton
            currentState={currentState}
            icon={<UserOffIcon className="size-5" />}
            label={STATE_INFO.signed_out.label}
            onSelect={onSelect}
            state="signed_out"
          />
          <ScenarioButton
            currentState={currentState}
            icon={<UserIcon className="size-5" />}
            label={STATE_INFO.basic_user.label}
            onSelect={onSelect}
            state="basic_user"
          />
          <ScenarioButton
            currentState={currentState}
            icon={<UserCheckIcon className="size-5" />}
            label={STATE_INFO.entitled_user.label}
            onSelect={onSelect}
            state="entitled_user"
          />
        </div>

        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="rounded-[1.25rem] border border-white/8 bg-slate-950/45 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Current interpretation
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {STATE_INFO[currentState].description}
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-3 xl:min-w-[23rem]">
            <div className="rounded-[1.1rem] border border-red-500/15 bg-red-500/6 px-3 py-2.5 text-center">
              <p className="text-base font-semibold text-red-200">401</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-red-200/80">
                No session
              </p>
            </div>
            <div className="rounded-[1.1rem] border border-amber-500/15 bg-amber-500/6 px-3 py-2.5 text-center">
              <p className="text-base font-semibold text-amber-200">403</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-amber-200/80">
                Missing entitlement
              </p>
            </div>
            <div className="rounded-[1.1rem] border border-emerald-500/15 bg-emerald-500/6 px-3 py-2.5 text-center">
              <p className="text-base font-semibold text-emerald-200">200</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-emerald-200/80">
                Authorized
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

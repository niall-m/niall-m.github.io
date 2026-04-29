import type { ReactNode } from "react"
import { IconShell } from "./IconShell"
import type { AuthState } from "./lib/types"
import { cx } from "./lib/utils"

export function ScenarioButton({
  currentState,
  state,
  icon,
  label,
  onSelect
}: {
  currentState: AuthState
  state: AuthState
  icon: ReactNode
  label: string
  onSelect: (state: AuthState) => void
}) {
  const isActive = currentState === state

  return (
    <button
      aria-pressed={isActive}
      className={cx(
        "group rounded-[1.25rem] border px-4 py-3.5 text-left transition duration-200",
        isActive
          ? "border-cyan-300/30 bg-cyan-300/10 shadow-[0_24px_60px_rgba(0,0,0,0.18)]"
          : "border-white/8 bg-white/4 hover:border-white/14 hover:bg-white/7"
      )}
      onClick={() => onSelect(state)}
      type="button"
    >
      <div className="flex items-center gap-3">
        <IconShell tone={isActive ? "default" : "muted"}>{icon}</IconShell>
        <div>
          <p className="text-sm font-semibold text-slate-100">{label}</p>
          <p className="mt-1 text-xs text-slate-400">
            {state === "signed_out"
              ? "No session"
              : state === "basic_user"
                ? "Authenticated only"
                : "Authenticated + entitled"}
          </p>
        </div>
      </div>
    </button>
  )
}

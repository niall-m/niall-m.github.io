import type { ReactNode } from "react"
import { cx } from "./lib/utils"

export function IconShell({
  children,
  tone = "default"
}: {
  children: ReactNode
  tone?: "default" | "success" | "warning" | "muted"
}) {
  const toneClasses =
    tone === "success"
      ? "bg-emerald-500/12 text-emerald-300 ring-1 ring-inset ring-emerald-500/20"
      : tone === "warning"
        ? "bg-amber-500/12 text-amber-300 ring-1 ring-inset ring-amber-500/20"
        : tone === "muted"
          ? "bg-slate-500/12 text-slate-300 ring-1 ring-inset ring-white/8"
          : "bg-cyan-400/12 text-cyan-200 ring-1 ring-inset ring-cyan-300/18"

  return (
    <span
      className={cx(
        "inline-flex size-10 items-center justify-center rounded-2xl",
        toneClasses
      )}
    >
      {children}
    </span>
  )
}


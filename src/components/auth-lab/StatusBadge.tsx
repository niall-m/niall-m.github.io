import { cx } from "./lib/utils"

export function StatusBadge({
  status,
  statusText
}: {
  status: number
  statusText: string
}) {
  const statusClasses =
    status === 200
      ? "border-emerald-500/25 bg-emerald-500/10 text-emerald-200"
      : status === 403
        ? "border-amber-500/25 bg-amber-500/10 text-amber-200"
        : "border-red-500/25 bg-red-500/10 text-red-200"

  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.14em] uppercase",
        statusClasses
      )}
    >
      <span>{status}</span>
      <span>{statusText}</span>
    </span>
  )
}


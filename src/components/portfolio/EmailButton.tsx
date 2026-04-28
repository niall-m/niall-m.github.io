import { useEffect, useState } from "react"
import type { ReactNode } from "react"

type EmailButtonProps = {
  containerClassName?: string
  className: string
  children: ReactNode
  copiedLabel: string
  statusClassName?: string
}

export const EMAIL_ADDRESS = "niall.mahford@gmail.com"

async function copyEmailAddress() {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(EMAIL_ADDRESS)
    return
  }

  const textarea = document.createElement("textarea")
  textarea.value = EMAIL_ADDRESS
  textarea.setAttribute("readonly", "")
  textarea.style.position = "absolute"
  textarea.style.left = "-9999px"

  document.body.appendChild(textarea)
  textarea.select()

  const didCopy = document.execCommand("copy")
  document.body.removeChild(textarea)

  if (!didCopy) {
    throw new Error("Unable to copy email address")
  }
}

export function EmailButton({
  containerClassName,
  className,
  children,
  copiedLabel,
  statusClassName
}: EmailButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied">("idle")

  useEffect(() => {
    if (status !== "copied") return

    const timeoutId = window.setTimeout(() => {
      setStatus("idle")
    }, 2000)

    return () => window.clearTimeout(timeoutId)
  }, [status])

  const handleClick = async () => {
    try {
      await copyEmailAddress()
      setStatus("copied")
    } catch {
      window.prompt("Copy email address:", EMAIL_ADDRESS)
    }
  }

  return (
    <span className={containerClassName ?? "inline-flex items-center gap-3"}>
      <button
        type="button"
        className={className}
        onClick={handleClick}
        aria-label={`Copy ${EMAIL_ADDRESS}`}
      >
        {children}
      </button>
      <span
        aria-live="polite"
        className={
          statusClassName ??
          "min-w-[4.5rem] text-left text-sm text-[var(--accent)] transition-opacity"
        }
      >
        {status === "copied" ? copiedLabel : "\u00a0"}
      </span>
    </span>
  )
}

import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </SvgIcon>
  )
}


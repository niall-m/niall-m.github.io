import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <circle cx="12" cy="8" r="4" />
    </SvgIcon>
  )
}


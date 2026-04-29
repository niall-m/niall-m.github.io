import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function UserCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M20 21a8 8 0 0 0-13.6-5.6" />
      <circle cx="12" cy="8" r="4" />
      <path d="m16 18 2 2 4-4" />
    </SvgIcon>
  )
}


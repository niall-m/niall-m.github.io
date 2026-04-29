import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function KeyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <circle cx="7.5" cy="15.5" r="3.5" />
      <path d="m10.5 13 10-10" />
      <path d="m17 6 1.5 1.5" />
      <path d="m14 9 1.5 1.5" />
    </SvgIcon>
  )
}


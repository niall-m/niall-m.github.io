import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function UserOffIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m3 3 18 18" />
      <path d="M10.6 6.8A5 5 0 0 1 17 12" />
      <path d="M6.7 6.7A5 5 0 0 0 7 17h8" />
      <path d="M4 21a8 8 0 0 1 9.4-3.1" />
    </SvgIcon>
  )
}


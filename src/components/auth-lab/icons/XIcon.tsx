import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </SvgIcon>
  )
}


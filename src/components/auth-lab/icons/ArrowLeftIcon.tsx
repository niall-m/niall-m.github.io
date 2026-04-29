import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </SvgIcon>
  )
}


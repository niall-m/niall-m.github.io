import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="m5 13 4 4L19 7" />
    </SvgIcon>
  )
}


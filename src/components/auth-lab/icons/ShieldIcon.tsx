import type { SVGProps } from "react"
import { SvgIcon } from "./SvgIcon"

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3 5 6v6c0 5 3.3 8.7 7 10 3.7-1.3 7-5 7-10V6l-7-3Z" />
    </SvgIcon>
  )
}


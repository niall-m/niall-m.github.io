import { IconShell } from "./IconShell"
import { KeyIcon } from "./icons/KeyIcon"
import { ShieldIcon } from "./icons/ShieldIcon"

export function ConceptsCard() {
  return (
    <article className="surface-soft rounded-[1.75rem] p-5">
      <div className="flex items-center gap-3">
        <IconShell>
          <KeyIcon className="size-5" />
        </IconShell>
        <h2 className="text-xl font-semibold text-slate-50">
          Authentication
        </h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Authentication answers “who is this user?” by checking whether
        a session is valid and which identity claims are present.
      </p>

      <div className="mt-5 flex items-center gap-3">
        <IconShell tone="success">
          <ShieldIcon className="size-5" />
        </IconShell>
        <h2 className="text-xl font-semibold text-slate-50">
          Authorization
        </h2>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Authorization answers “what may this user access?” by checking
        roles, permissions, or entitlements after identity is known.
      </p>
    </article>
  )
}

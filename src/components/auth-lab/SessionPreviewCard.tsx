import { CodeBlock } from "./CodeBlock"
import { IconShell } from "./IconShell"
import { UserIcon } from "./icons/UserIcon"
import type { SessionClaims } from "./lib/types"

export function SessionPreviewCard({ session }: { session: SessionClaims }) {
  return (
    <article className="surface-soft rounded-[1.75rem] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Session / Claims Preview
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-50">
            What the app knows about this user
          </h2>
        </div>
        <IconShell tone="muted">
          <UserIcon className="size-5" />
        </IconShell>
      </div>
      <div className="mt-4">
        <CodeBlock>{JSON.stringify(session, null, 2)}</CodeBlock>
      </div>
    </article>
  )
}

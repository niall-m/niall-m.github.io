import { CodeBlock } from "./CodeBlock"
import { StatusBadge } from "./StatusBadge"
import type { ApiResponse } from "./lib/types"

export function MockApiResponseCard({
  apiResponse
}: {
  apiResponse: ApiResponse
}) {
  return (
    <article className="surface-soft rounded-[1.75rem] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Mock API Response
          </p>
          <h2 className="mt-2 text-xl font-semibold text-slate-50">
            `GET /api/protected-resource`
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            The simulated API checks for a session first, then verifies whether
            the required entitlement grants product access.
          </p>
        </div>
        <StatusBadge
          status={apiResponse.status}
          statusText={apiResponse.statusText}
        />
      </div>
      <div className="mt-4">
        <CodeBlock>{JSON.stringify(apiResponse.body, null, 2)}</CodeBlock>
      </div>
    </article>
  )
}

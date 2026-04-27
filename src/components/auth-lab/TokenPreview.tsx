export interface AuthClaims {
  sub: string | null
  email: string | null
  iat: number | null
  exp: number | null
  product_access: boolean
  onboarding_complete: boolean
  entitlements: string[]
  scopes: string[]
}

interface TokenPreviewProps {
  claims: AuthClaims
  isTransitioning: boolean
}

function formatValue(value: unknown) {
  if (value === null) return "null"
  if (Array.isArray(value)) {
    if (value.length === 0) return "[]"
    return `[\n    ${value.map((entry) => `"${entry}"`).join(",\n    ")}\n  ]`
  }
  if (typeof value === "boolean" || typeof value === "number") {
    return String(value)
  }
  return `"${value}"`
}

function getHighlightClass(key: string, value: unknown) {
  if (value === null || (Array.isArray(value) && value.length === 0)) {
    return "text-slate-500"
  }
  if (key === "product_access" || key === "onboarding_complete") {
    return "text-[var(--accent)]"
  }
  if (key === "entitlements" || key === "scopes") {
    return "text-cyan-300"
  }
  return "text-slate-100"
}

export function TokenPreview({
  claims,
  isTransitioning
}: TokenPreviewProps) {
  return (
    <article className="surface-panel rounded-[28px] p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-slate-50">JWT Claims Preview</h3>
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-400">
          decoded
        </span>
      </div>

      <div
        className={[
          "mt-4 rounded-[24px] border border-white/8 bg-slate-950/55 p-4 font-mono text-sm transition-opacity duration-300",
          isTransitioning ? "opacity-55" : "opacity-100"
        ].join(" ")}
      >
        <pre className="code-block overflow-x-auto tabular-nums leading-7">
          <code>
            <span className="text-slate-500">{"{"}</span>
            {Object.entries(claims).map(([key, value], index, entries) => (
              <div key={key} className="ml-2">
                <span className="text-slate-500">&quot;{key}&quot;</span>
                <span className="text-slate-500">: </span>
                <span className={getHighlightClass(key, value)}>
                  {formatValue(value)}
                </span>
                {index < entries.length - 1 ? (
                  <span className="text-slate-500">,</span>
                ) : null}
              </div>
            ))}
            <span className="text-slate-500">{"}"}</span>
          </code>
        </pre>
      </div>
    </article>
  )
}

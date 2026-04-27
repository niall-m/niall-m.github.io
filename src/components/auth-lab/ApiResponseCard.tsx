import type { AuthClaims } from "./TokenPreview"

type AuthLabState =
  | "signed_out"
  | "onboarding_required"
  | "onboarding_complete"
  | "authorized"

interface ApiResponseCardProps {
  state: AuthLabState
  claims: AuthClaims
}

function getResponse(state: AuthLabState, claims: AuthClaims) {
  if (state === "signed_out") {
    return {
      status: 401,
      statusText: "Unauthorized",
      body: {
        error: "authentication_required",
        message: "No valid session found"
      }
    }
  }

  if (state === "onboarding_required") {
    return {
      status: 403,
      statusText: "Forbidden",
      body: {
        error: "onboarding_required",
        message: "User is authenticated but lacks the required entitlement",
        user_id: claims.sub
      }
    }
  }

  if (state === "onboarding_complete") {
    return {
      status: 200,
      statusText: "OK",
      body: {
        message: "Entitlement provisioned",
        entitlement: {
          id: "ent_demo_017",
          user_id: claims.sub,
          tier: "basic_tier"
        },
        action: "Refresh session to apply updated claims"
      }
    }
  }

  return {
    status: 200,
    statusText: "OK",
    body: {
      message: "Access granted",
      user: {
        id: claims.sub,
        email: claims.email,
        entitlements: claims.entitlements
      },
      product: {
        access: true,
        features: ["dashboard", "api", "analytics"]
      }
    }
  }
}

export function ApiResponseCard({ state, claims }: ApiResponseCardProps) {
  const response = getResponse(state, claims)
  const isError = response.status >= 400

  return (
    <article className="surface-panel rounded-[28px] p-6">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-sm font-semibold text-slate-50">Mock API Response</h3>
        <span
          className={[
            "rounded-md px-2 py-1 text-xs font-semibold",
            isError
              ? "bg-red-500/12 text-red-300"
              : "bg-[rgba(114,221,209,0.12)] text-[var(--accent)]"
          ].join(" ")}
        >
          {response.status} {response.statusText}
        </span>
      </div>

      <div className="mt-4 rounded-[24px] border border-white/8 bg-slate-950/55 p-4 font-mono text-sm">
        <div className="mb-2 text-xs text-slate-500">
          POST /api/v1/entitlements/check
        </div>
        <pre className="code-block overflow-x-auto leading-7 text-slate-100">
          <code>{JSON.stringify(response.body, null, 2)}</code>
        </pre>
      </div>

      <p className="mt-4 text-xs text-slate-500">
        The response changes as the demo state changes, without any real API.
      </p>
    </article>
  )
}

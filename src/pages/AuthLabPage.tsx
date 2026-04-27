import { useEffect, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ApiResponseCard } from "../components/auth-lab/ApiResponseCard"
import { ProductAccessCard } from "../components/auth-lab/ProductAccessCard"
import { StateTimeline } from "../components/auth-lab/StateTimeline"
import { TeachingCard } from "../components/auth-lab/TeachingCard"
import { TokenPreview, type AuthClaims } from "../components/auth-lab/TokenPreview"

type AuthLabState =
  | "signed_out"
  | "onboarding_required"
  | "onboarding_complete"
  | "authorized"

function getClaimsForState(state: AuthLabState): AuthClaims {
  const issuedAt = Math.floor(Date.now() / 1000)
  const expiresAt = issuedAt + 3600

  if (state === "signed_out") {
    return {
      sub: null,
      email: null,
      iat: null,
      exp: null,
      product_access: false,
      onboarding_complete: false,
      entitlements: [],
      scopes: []
    }
  }

  if (state === "onboarding_required") {
    return {
      sub: "usr_a1b2c3d4e5f6",
      email: "demo-user@local.test",
      iat: issuedAt,
      exp: expiresAt,
      product_access: false,
      onboarding_complete: false,
      entitlements: [],
      scopes: ["read:profile"]
    }
  }

  if (state === "onboarding_complete") {
    return {
      sub: "usr_a1b2c3d4e5f6",
      email: "demo-user@local.test",
      iat: issuedAt,
      exp: expiresAt,
      product_access: false,
      onboarding_complete: true,
      entitlements: ["basic_tier"],
      scopes: ["read:profile", "write:settings"]
    }
  }

  return {
    sub: "usr_a1b2c3d4e5f6",
    email: "demo-user@local.test",
    iat: issuedAt,
    exp: expiresAt,
    product_access: true,
    onboarding_complete: true,
    entitlements: ["basic_tier", "api_access"],
    scopes: ["read:profile", "write:settings", "access:product"]
  }
}

export function AuthLabPage() {
  const [state, setState] = useState<AuthLabState>("signed_out")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const transitionTo = (nextState: AuthLabState) => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }

    setIsTransitioning(true)
    timeoutRef.current = window.setTimeout(() => {
      setState(nextState)
      setIsTransitioning(false)
      timeoutRef.current = null
    }, 400)
  }

  const claims = useMemo(() => getClaimsForState(state), [state])

  return (
    <div className="min-h-screen">
      <section className="portfolio-section pb-8 pt-16">
        <div className="mx-auto max-w-5xl text-center">
          <Link className="button-secondary" to="/">
            Back to portfolio
          </Link>
          <div className="mt-8">
            <p className="eyebrow justify-center">Interactive Lab</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-50 text-balance sm:text-5xl lg:text-6xl">
              Auth + Authorization Flow Lab
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 text-pretty">
              A local-state demo showing how authentication, onboarding, claims,
              and product access can evolve across a single user journey. It is
              intentionally simulated: no real auth provider, backend, or API
              route is involved.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-400">
            <span className="status-pill">
              React state only
            </span>
            <span className="status-pill">
              No API routes
            </span>
            <span className="status-pill">
              Static Vite page
            </span>
          </div>
        </div>
      </section>

      <StateTimeline
        state={state}
        isTransitioning={isTransitioning}
        onReset={() => transitionTo("signed_out")}
        onLogin={() => transitionTo("onboarding_required")}
        onCompleteOnboarding={() => transitionTo("onboarding_complete")}
        onRefreshClaims={() => transitionTo("authorized")}
      />

      <section className="portfolio-section pt-6">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <TokenPreview claims={claims} isTransitioning={isTransitioning} />
            <ProductAccessCard
              state={state}
              claims={claims}
              onLogin={() => transitionTo("onboarding_required")}
              onCompleteOnboarding={() => transitionTo("onboarding_complete")}
              onRefreshClaims={() => transitionTo("authorized")}
            />
          </div>
          <div className="space-y-6">
            <TeachingCard />
            <ApiResponseCard state={state} claims={claims} />
          </div>
        </div>
      </section>
    </div>
  )
}

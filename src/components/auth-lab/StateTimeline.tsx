type AuthLabState =
  | "signed_out"
  | "onboarding_required"
  | "onboarding_complete"
  | "authorized"

interface StateTimelineProps {
  state: AuthLabState
  isTransitioning: boolean
  onReset: () => void
  onLogin: () => void
  onCompleteOnboarding: () => void
  onRefreshClaims: () => void
}

const steps: {
  state: AuthLabState
  label: string
  description: string
  marker: string
}[] = [
  {
    state: "signed_out",
    label: "Signed Out",
    description: "No session or identity context",
    marker: "1"
  },
  {
    state: "onboarding_required",
    label: "Authenticated",
    description: "Identity verified, product access pending",
    marker: "2"
  },
  {
    state: "onboarding_complete",
    label: "Onboarding Done",
    description: "Claims updated, refresh still required",
    marker: "3"
  },
  {
    state: "authorized",
    label: "Authorized",
    description: "Entitlements and access fully applied",
    marker: "4"
  }
]

const stateOrder: AuthLabState[] = [
  "signed_out",
  "onboarding_required",
  "onboarding_complete",
  "authorized"
]

function getStepStatus(currentState: AuthLabState, stepState: AuthLabState) {
  const currentIndex = stateOrder.indexOf(currentState)
  const stepIndex = stateOrder.indexOf(stepState)

  if (stepIndex < currentIndex) return "complete"
  if (stepIndex === currentIndex) return "current"
  return "upcoming"
}

export function StateTimeline({
  state,
  isTransitioning,
  onReset,
  onLogin,
  onCompleteOnboarding,
  onRefreshClaims
}: StateTimelineProps) {
  const progress = (stateOrder.indexOf(state) / (stateOrder.length - 1)) * 100

  return (
    <section className="portfolio-section pb-8 pt-8">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(11,20,29,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-50">
              Auth Flow Timeline
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Move through the lifecycle to see claims and access change.
            </p>
          </div>
          <button
            type="button"
            onClick={onReset}
            disabled={state === "signed_out" || isTransitioning}
            className="button-secondary justify-center disabled:cursor-not-allowed disabled:opacity-45"
          >
            Reset demo
          </button>
        </div>

        <div className="relative mt-8">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 md:block" />
          <div
            className="absolute left-0 top-6 hidden h-px bg-[var(--accent)] transition-[width] duration-500 md:block"
            style={{ width: `${progress}%` }}
          />

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
            {steps.map((step) => {
              const status = getStepStatus(state, step.state)
              const isCurrent = status === "current"
              const isComplete = status === "complete"

              return (
                <div key={step.state} className="relative text-center sm:text-left md:text-center">
                  <div
                    className={[
                      "relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border text-sm font-semibold transition-colors duration-300 sm:mx-0 md:mx-auto",
                      isComplete
                        ? "border-transparent bg-[var(--accent)] text-slate-950"
                        : "",
                      isCurrent
                        ? "border-[var(--accent)] bg-white/5 text-[var(--accent)] shadow-[0_0_0_8px_rgba(114,221,209,0.08)]"
                        : "",
                      status === "upcoming"
                        ? "border-white/10 bg-slate-950/50 text-slate-500"
                        : ""
                    ].join(" ")}
                  >
                    {step.marker}
                  </div>
                  <p
                    className={[
                      "mt-4 text-sm font-medium transition-colors",
                      isCurrent || isComplete ? "text-slate-50" : "text-slate-400"
                    ].join(" ")}
                  >
                    {step.label}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-center">
          <button
            type="button"
            onClick={onLogin}
            disabled={state !== "signed_out" || isTransitioning}
            className="button-primary w-full justify-center lg:w-auto disabled:cursor-not-allowed disabled:opacity-45"
          >
            Start login
          </button>
          <button
            type="button"
            onClick={onCompleteOnboarding}
            disabled={state !== "onboarding_required" || isTransitioning}
            className="button-secondary w-full justify-center lg:w-auto disabled:cursor-not-allowed disabled:opacity-45"
          >
            Complete onboarding
          </button>
          <button
            type="button"
            onClick={onRefreshClaims}
            disabled={state !== "onboarding_complete" || isTransitioning}
            className="button-secondary w-full justify-center lg:w-auto disabled:cursor-not-allowed disabled:opacity-45"
          >
            Refresh claims
          </button>
        </div>
      </div>
    </section>
  )
}

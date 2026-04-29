import { useState } from "react"
import { API_RESPONSES, SESSION_DATA } from "../components/auth-lab/lib/data"
import { AuthLabHeader } from "../components/auth-lab/AuthLabHeader"
import { ConceptsCard } from "../components/auth-lab/ConceptsCard"
import { MockApiResponseCard } from "../components/auth-lab/MockApiResponseCard"
import { ProductAccessCard } from "../components/auth-lab/ProductAccessCard"
import { ScenarioSelectorCard } from "../components/auth-lab/ScenarioSelectorCard"
import { ScopeCard } from "../components/auth-lab/ScopeCard"
import { SessionPreviewCard } from "../components/auth-lab/SessionPreviewCard"
import type { AuthState } from "../components/auth-lab/lib/types"

export function AuthLabPage() {
  const [currentState, setCurrentState] = useState<AuthState>("signed_out")

  const session = SESSION_DATA[currentState]
  const apiResponse = API_RESPONSES[currentState]

  return (
    <div className="min-h-screen">
      <AuthLabHeader />

      <section className="portfolio-section pb-10 pt-0 sm:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="surface-panel rounded-[2rem] p-4 sm:p-5 lg:p-6">
            <ScenarioSelectorCard
              currentState={currentState}
              onSelect={setCurrentState}
            />

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              <ProductAccessCard state={currentState} />
              <MockApiResponseCard apiResponse={apiResponse} />
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <SessionPreviewCard session={session} />
              <div className="grid gap-4">
                <ConceptsCard />
                <ScopeCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

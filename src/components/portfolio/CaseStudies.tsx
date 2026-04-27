import { Link } from "react-router-dom"

const caseStudies = [
  {
    title: "Auth + Authorization Flow Lab",
    category: "Interactive demo",
    summary:
      "A client-side walkthrough of signed-out, authenticated, onboarding, and authorized states built entirely with local React state.",
    details: [
      "JWT-style claims preview that changes per state",
      "Product access gate tied to entitlement changes",
      "Mock API response panel to explain the flow"
    ],
    outcome: "A clearer way to talk through auth and authorization behavior"
  },
  {
    title: "Portfolio Replatform",
    category: "Portfolio engineering",
    summary:
      "Replacing a legacy static portfolio with a smaller Vite, React, and TypeScript setup that is easier to maintain and deploy.",
    details: [
      "Move from ad hoc static files to a modern build pipeline",
      "Keep the app fully static and GitHub Pages friendly",
      "Create a cleaner base for future interactive work samples"
    ],
    outcome: "Clearer structure, fewer moving parts, easier iteration"
  },
  {
    title: "Full-stack Book Review App",
    category: "ShouldReads",
    summary:
      "A Goodreads-inspired application centered on discovery, reviews, and a smoother browsing experience.",
    details: [
      "React and Redux on the frontend",
      "Ruby on Rails and SQL on the backend",
      "Feature work around search, reviews, and user flows"
    ],
    outcome: "Strong end-to-end product thinking across UI and data modeling"
  },
  {
    title: "Collaborative Task Management",
    category: "DoDate",
    summary:
      "A Kanban-style collaboration project exploring drag-and-drop workflows and team-oriented interaction patterns.",
    details: [
      "Single-page application behavior",
      "Shared ownership in a team delivery setting",
      "Attention to usability in high-interaction views"
    ],
    outcome: "Hands-on experience balancing UI complexity with maintainability"
  }
]

export function CaseStudies() {
  return (
    <section className="portfolio-section" id="work">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 text-balance sm:text-4xl">
            A few representative projects and the kind of problems they sharpened.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300 text-pretty">
            Product work, full-stack implementation, and one focused interactive
            demo that explains a tricky system in a hands-on way.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {caseStudies.map((study) => (
            <article key={study.title} className="surface-panel lift-card rounded-[32px] p-7 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[var(--accent)]">
                    {study.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-50">
                    {study.title}
                  </h3>
                </div>
                <p className="status-pill">
                  {study.outcome}
                </p>
              </div>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                {study.summary}
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                {study.details.map((detail) => (
                  <li
                    key={detail}
                    className="surface-soft rounded-[24px] px-4 py-4 text-sm leading-6 text-slate-300"
                  >
                    {detail}
                  </li>
                ))}
              </ul>

              {study.title === "Auth + Authorization Flow Lab" ? (
                <div className="mt-6">
                  <Link className="button-primary" to="/auth-lab">
                    Open the live auth lab
                  </Link>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const experienceItems = [
  {
    period: "Now",
    title: "Portfolio architecture and frontend polish",
    description:
      "Reworking this site around a smaller static stack, with room for more detailed project pages and interactive demos."
  },
  {
    period: "Projects",
    title: "ShouldReads, DoDate, and other application work",
    description:
      "Built full-stack applications across React, Ruby on Rails, and SQL, with an emphasis on usability and end-to-end product flow."
  },
  {
    period: "2018",
    title: "App Academy",
    description:
      "Completed App Academy's immersive software engineering program, building the habits around shipping, debugging, and iteration."
  }
]

export function Experience() {
  return (
    <section className="portfolio-section" id="experience">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 text-balance sm:text-4xl">
            A concise timeline of the work and training that shaped this portfolio.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {experienceItems.map((item) => (
            <article
              key={item.title}
              className="surface-panel lift-card grid rounded-[28px] p-6 sm:grid-cols-[140px_1fr] sm:gap-6"
            >
              <p className="text-sm font-medium tracking-[0.18em] text-slate-400 uppercase">
                {item.period}
              </p>
              <div className="mt-3 sm:mt-0">
                <h3 className="text-xl font-semibold text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

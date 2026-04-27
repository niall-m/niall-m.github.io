export function ContactCta() {
  return (
    <section className="portfolio-section" id="contact">
      <div className="mx-auto max-w-4xl">
        <div className="surface-panel rounded-[36px] p-8 text-center sm:p-12">
          <p className="eyebrow justify-center">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 text-balance sm:text-5xl">
            Let&apos;s build something thoughtful and useful.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300 text-pretty">
            Reach out directly if you&apos;d like to talk about frontend work,
            product engineering, or building software that feels clear and dependable.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a className="button-primary min-w-[220px] justify-center" href="mailto:niall.mahford@gmail.com">
              niall.mahford@gmail.com
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              className="button-secondary"
              href="https://github.com/niall-m"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="button-secondary"
              href="https://www.linkedin.com/in/niallmahford/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

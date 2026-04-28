import { EMAIL_ADDRESS, EmailButton } from "./EmailButton"

export function ContactCta() {
  return (
    <section className="portfolio-section" id="contact">
      <div className="mx-auto max-w-4xl">
        <div className="surface-panel rounded-[36px] p-8 text-center sm:p-12">
          <p className="eyebrow justify-center">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50 text-balance sm:text-5xl">
            Let&apos;s build software people actually like using.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300 text-pretty">
            Reach out if you&apos;d like to talk about product engineering, 
            onboarding flows, auth, or full-stack work.
          </p>

          <div className="mt-8 flex justify-center">
            <EmailButton
              containerClassName="inline-grid justify-items-center gap-2"
              className="button-primary min-w-[220px] justify-center"
              copiedLabel="Copied to clipboard"
              statusClassName="min-h-5 text-sm text-[var(--accent)]"
            >
              {EMAIL_ADDRESS}
            </EmailButton>
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
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

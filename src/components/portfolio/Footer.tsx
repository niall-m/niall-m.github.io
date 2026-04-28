import { EmailButton } from "./EmailButton"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <p>© {new Date().getFullYear()} Niall Mahford. Built with Vite, React, and Tailwind CSS.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/niall-m"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/niallmahford/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            LinkedIn
          </a>
          <EmailButton
            containerClassName="inline-flex items-center gap-2"
            className="transition-colors hover:text-slate-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            copiedLabel="Copied"
            statusClassName="min-w-[3.75rem] text-xs text-[var(--accent)] transition-opacity"
          >
            Email
          </EmailButton>
        </div>
      </div>
    </footer>
  )
}

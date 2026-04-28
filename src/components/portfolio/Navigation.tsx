import { useState } from "react"
import { Link } from "react-router-dom"

const navLinks = [
  { label: "Work", sectionId: "work" },
  { label: "Experience", sectionId: "experience" }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (!section) return

    section.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(8,16,24,0.8)] backdrop-blur-xl">
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16"
        aria-label="Primary"
      >
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex min-h-10 items-center rounded-full text-base font-semibold tracking-[0.18em] text-slate-100 uppercase transition-colors hover:text-[var(--accent)]"
        >
          Niall Mahford
        </button>

        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-slate-100 transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          {isOpen ? "Close" : "Menu"}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => scrollToSection(link.sectionId)}
              className="min-h-10 rounded-full text-sm font-medium text-slate-300 transition-colors hover:text-slate-50"
            >
              {link.label}
            </button>
          ))}
          <Link
            className="inline-flex min-h-10 items-center rounded-full text-sm font-medium text-slate-300 transition-colors hover:text-slate-50"
            to="/auth-lab"
          >
            Auth Lab
          </Link>
          <button
            type="button"
            className="button-primary"
            onClick={() => scrollToSection("contact")}
          >
            Get in touch
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[rgba(8,16,24,0.95)] px-6 py-5 md:hidden"
        >
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToSection(link.sectionId)}
                className="inline-flex min-h-10 items-center rounded-2xl px-2 text-base text-slate-200 transition-colors hover:text-slate-50"
              >
                {link.label}
              </button>
            ))}
            <Link
              className="inline-flex min-h-10 items-center rounded-2xl px-2 text-base text-slate-200 transition-colors hover:text-slate-50"
              to="/auth-lab"
              onClick={() => setIsOpen(false)}
            >
              Auth Lab
            </Link>
            <button
              type="button"
              className="button-primary w-full justify-center"
              onClick={() => scrollToSection("contact")}
            >
              Get in touch
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

import { AuthLabPreview } from "../components/portfolio/AuthLabPreview"
import { CaseStudies } from "../components/portfolio/CaseStudies"
import { ContactCta } from "../components/portfolio/ContactCta"
import { Experience } from "../components/portfolio/Experience"
import { Hero } from "../components/portfolio/Hero"
import { Navigation } from "../components/portfolio/Navigation"

export function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AuthLabPreview />
        <CaseStudies />
        <Experience />
        <ContactCta />
      </main>
    </>
  )
}

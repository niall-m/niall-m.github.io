import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/portfolio/Footer"
import { AuthLabPage } from "./pages/AuthLabPage"
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(82,208,196,0.16),transparent_30%),linear-gradient(180deg,var(--page-top)_0%,var(--page-middle)_48%,var(--page-bottom)_100%)] text-slate-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/auth-lab"
          element={
            <main>
              <AuthLabPage />
            </main>
          }
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

import AcademicPillars from './components/AcademicPillars'
import CampiSection from './components/CampiSection'
import CoursesSection from './components/CoursesSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import NewsSection from './components/NewsSection'
import NoticesSection from './components/NoticesSection'
import ProfileAccess from './components/ProfileAccess'
import QuickAccess from './components/QuickAccess'
import StatsSection from './components/StatsSection'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <Header />
      <main>
        <Hero />
        <QuickAccess />
        <NewsSection />
        <ProfileAccess />
        <CoursesSection />
        <CampiSection />
        <AcademicPillars />
        <NoticesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App

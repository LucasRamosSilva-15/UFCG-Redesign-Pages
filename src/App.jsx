import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cursos from './pages/Cursos'
import Home from './pages/Home'

function App() {
  const currentPage = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />
      {currentPage === '/cursos' ? <Cursos /> : <Home />}
      <Footer />
    </div>
  )
}

export default App

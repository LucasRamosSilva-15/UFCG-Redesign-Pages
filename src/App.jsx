import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Cursos from './pages/Cursos'
import Home from './pages/Home'
import PesquisaInovacao from './pages/PesquisaInovacao'

function App() {
  const currentPage = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />
      {currentPage === '/cursos' && <Cursos />}
      {currentPage === '/pesquisa-e-inovacao' && <PesquisaInovacao />}
      {currentPage !== '/cursos' && currentPage !== '/pesquisa-e-inovacao' && <Home />}
      <Footer />
    </div>
  )
}

export default App

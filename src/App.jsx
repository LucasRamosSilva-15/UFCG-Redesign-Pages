import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Campi from './pages/Campi'
import Cursos from './pages/Cursos'
import Extensao from './pages/Extensao'
import Home from './pages/Home'
import PesquisaInovacao from './pages/PesquisaInovacao'

function App() {
  const currentPage = window.location.pathname.replace(/\/+$/, '') || '/'

  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />
      {currentPage === '/campi' && <Campi />}
      {currentPage === '/cursos' && <Cursos />}
      {currentPage === '/extensao' && <Extensao />}
      {currentPage === '/pesquisa-e-inovacao' && <PesquisaInovacao />}
      {currentPage !== '/campi' && currentPage !== '/cursos' && currentPage !== '/extensao' && currentPage !== '/pesquisa-e-inovacao' && <Home />}
      <Footer />
    </div>
  )
}

export default App

import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AssistenciaEstudantil from './pages/AssistenciaEstudantil'
import Campi from './pages/Campi'
import Cursos from './pages/Cursos'
import Editais from './pages/Editais'
import Extensao from './pages/Extensao'
import Home from './pages/Home'
import Noticias from './pages/Noticias'
import PesquisaInovacao from './pages/PesquisaInovacao'

const pageRoutes = {
  '/assistencia-estudantil': AssistenciaEstudantil,
  '/campi': Campi,
  '/cursos': Cursos,
  '/editais': Editais,
  '/extensao': Extensao,
  '/noticias': Noticias,
  '/pesquisa-e-inovacao': PesquisaInovacao,
}

function App() {
  const currentPage = window.location.pathname.replace(/\/+$/, '') || '/'
  const CurrentPage = pageRoutes[currentPage] || Home

  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />
      <CurrentPage />
      <Footer />
    </div>
  )
}

export default App

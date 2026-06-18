import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Serveis from './components/Serveis'
import Paquets from './components/Paquets'
import { ComFunciona, SobreMi, FAQ, Contacte, Footer } from './components/Seccions'
import AvisLegal from './pages/AvisLegal'
import Privacitat from './pages/Privacitat'

function Home() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.4s ease' }}>
        <Navbar />
        <main>
          <Hero />
          <Serveis />
          <Paquets />
          <ComFunciona />
          <SobreMi />
          <FAQ />
          <Contacte />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avis-legal" element={<AvisLegal />} />
        <Route path="/privacitat" element={<Privacitat />} />
      </Routes>
    </BrowserRouter>
  )
}

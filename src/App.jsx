import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Serveis from './components/Serveis'
import Paquets from './components/Paquets'
import { ComFunciona, SobreMi, FAQ, Contacte, Footer } from './components/Seccions'

export default function App() {
  return (
    <>
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
    </>
  )
}

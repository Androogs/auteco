import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Fab from './components/Fab.jsx'
import Inicio from './pages/Inicio.jsx'
import Motos from './pages/Motos.jsx'
import Ofertas from './pages/Ofertas.jsx'
import Marcas from './pages/Marcas.jsx'
import Moto from './pages/Moto.jsx'
import Comparar from './pages/Comparar.jsx'
import Financiacion from './pages/Financiacion.jsx'
import Posventa from './pages/Posventa.jsx'
import Sedes from './pages/Sedes.jsx'
import Contacto from './pages/Contacto.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return (
    <>
      <Header />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/motos" element={<Motos />} />
          <Route path="/motos/:categoria" element={<Motos />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/marcas" element={<Marcas />} />
          <Route path="/marcas/:marca" element={<Marcas />} />
          <Route path="/moto/:slug" element={<Moto />} />
          <Route path="/comparar" element={<Comparar />} />
          <Route path="/financiacion" element={<Financiacion />} />
          <Route path="/posventa" element={<Posventa />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NoEncontrado />} />
        </Routes>
      </main>
      <Footer />
      <Fab />
    </>
  )
}

import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIAS, MARCAS, MOTOS } from '../data/catalogo.js'
import { SEDES, waLink } from '../data/sitio.js'
import { getMoto, getMarca, deCategoria, deMarca, desdeLista, pesos, baseDe, mejorBono, promoDe, tienePromo, BANNERS, DESTACADAS } from '../utils/catalogo.js'
import MotoImagen from '../components/MotoImagen.jsx'
import MotoCard from '../components/MotoCard.jsx'
import Precio from '../components/Precio.jsx'
import useReveal from '../components/useReveal.js'
import { IconArrow, IconWhatsApp, IconCard, IconWrench, IconPin, CatIcon } from '../components/Icons.jsx'

const MS = 5000

function CarruselOfertas({ ofertas }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i) => {
    const track = trackRef.current
    if (!track ||!track.children[0]) return
    const gap = 16
    const w = track.children[0].offsetWidth + gap
    track.style.transform = `translateX(-${i * w}px)`
    setIndex(i)
  }

  const next = () => {
    if (index >= ofertas.length - 1) scrollTo(0)
    else scrollTo(index + 1)
  }
  const prev = () => {
    if (index <= 0) scrollTo(ofertas.length - 1)
    else scrollTo(index - 1)
  }

  useEffect(() => {
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [index])

  return (
    <div style={{ position: 'relative', overflow: 'hidden', padding: '10px 44px' }}>
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '16px',
          transition: 'transform 0.6s cubic-bezier(.4,0,.2,1)',
          willChange: 'transform',
        }}
      >
        {ofertas.map((x) => (
          <div key={x.slug} style={{ width: '100%', maxWidth: '300px', flexShrink: 0 }}>
            <MotoCard moto={x} />
          </div>
        ))}
      </div>

      <button onClick={prev} aria-label="Anterior" style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '50%', background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,.12)', cursor: 'pointer', zIndex: 2, fontSize: '22px', lineHeight: '1' }}>‹</button>
      <button onClick={next} aria-label="Siguiente" style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', width: '38px', height: '38px', borderRadius: '50%', background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 2px 12px rgba(0,0,0,.12)', cursor: 'pointer', zIndex: 2, fontSize: '22px', lineHeight: '1' }}>›</button>
    </div>
  )
}

export default function Inicio() {
  useReveal()
  const [i, setI] = useState(0)
  const [pausa, setPausa] = useState(false)
  useEffect(() => { if (pausa) return; const t = setTimeout(() => setI((i + 1) % BANNERS.length), MS); return () => clearTimeout(t) }, [i, pausa])
  const b = BANNERS[i]
  const m = getMoto(b.slug)
  const marca = getMarca(m.marca)
  const bono = mejorBono(m), promo = promoDe(m)
  const ofertas = MOTOS.filter(tienePromo).sort((a, z) => mejorBono(z) - mejorBono(a))
  const destacadas = DESTACADAS.map(getMoto).filter(Boolean)

  return (
    <>
      <section className="banner" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)}>
        <div className="wrap">
          <div className="banner__card" style={{ '--b': marca.color }} key={i}>
            <div className="banner__copy">
              <span className="banner__brand">{marca.nombre}</span>
              <h1 className="t-hero">{b.titulo}</h1>
              <p>{b.texto}</p>
              <div className="banner__price">
                {(bono > 0 || promo) && <span className="ribbon ribbon--static">{bono > 0? `Bono ${pesos(bono)}` : `Gratis ${promo}`}</span>}
                <Precio v={baseDe(m)} desde={m.versiones.length > 1} grande />
              </div>
              <div className="banner__ctas">
                <Link to={`/moto/${m.slug}`} className="btn btn--white">Ver {m.nombre} <IconArrow /></Link>
                <a className="btn btn--line" href={waLink(`Hola, quiero cotizar la ${marca.nombre} ${m.nombre}.`)} target="_blank" rel="noreferrer"><IconWhatsApp width="18" /> Cotizar</a>
              </div>
            </div>
            <div className="banner__img"><MotoImagen moto={m} eager /></div>
          </div>
          <div className="banner__dots" role="tablist" aria-label="Promociones">
            {BANNERS.map((x, k) => (
              <button key={x.slug} role="tab" aria-selected={k === i} className={k === i? 'is-on' : ''} onClick={() => setI(k)} aria-label={x.titulo}>
                <span>{x.titulo}</span><i><em style={{ animationDuration: `${MS}ms`, animationPlayState: pausa? 'paused' : 'running' }} /></i>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="brands-strip">
        <div className="wrap brands-strip__in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
          {MARCAS.map((mm) => {
            const LOGOS = {
              tvs: '/tvs.png',
              victory: '/victory.png',
              kymco: '/kymco.png',
              ceronte: '/ceronte.png',
              zontes: '/zontes.png',
            }
            const TAMAÑOS = {
              tvs: { maxWidth: '140px', maxHeight: '275px' },
              victory: { maxWidth: '145px', maxHeight: '105px' },
              kymco: { maxWidth: '155px', maxHeight: '200px' },
              ceronte: { maxWidth: '130px', maxHeight: '70px' },
              zontes: { maxWidth: '180px', maxHeight: '75px' },
            }
            const id = mm.id.toLowerCase()
            const size = TAMAÑOS[id] || { maxWidth: '130px', maxHeight: '70px' }
            return (
              <Link key={mm.id} to={`/marcas/${mm.id}`} className="bchip" style={{ '--b': mm.color, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', padding: '12px' }}>
                <img src={LOGOS[id]} alt={mm.nombre} style={{ width: '100%', maxWidth: size.maxWidth, maxHeight: size.maxHeight, height: 'auto', objectFit: 'contain' }} />
              </Link>
            )
          })}
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec__head reveal"><div><span className="kicker">Explora</span><h2 className="t-h2">Encuentra tu moto por uso</h2></div><Link to="/motos" className="link">Ver las {MOTOS.length} referencias <IconArrow width="16" /></Link></div>
          <div className="cats">
            {CATEGORIAS.map((c, k) => { const I = CatIcon[c.id]; const l = deCategoria(c.id); return (
              <Link key={c.id} to={`/motos/${c.id}`} className="cat reveal" style={{ '--d': `${k * 50}ms` }}>
                <span className="cat__ic"><I width="30" height="30" /></span>
                <b>{c.nombre}</b><small>{l.length} {l.length === 1? 'modelo' : 'modelos'}</small><em>desde {pesos(desdeLista(l))}</em>
              </Link>) })}
          </div>
        </div>
      </section>

      <section className="sec sec--soft">
        <div className="wrap">
          <div className="sec__head reveal"><div><span className="kicker kicker--red">Ofertas del mes</span><h2 className="t-h2">Motos con bono de descuento</h2></div><Link to="/ofertas" className="link">Ver todas las ofertas <IconArrow width="16" /></Link></div>
          <CarruselOfertas ofertas={ofertas} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec__head reveal"><div><span className="kicker">Vitrina</span><h2 className="t-h2">Las más buscadas</h2></div><Link to="/comparar" className="link">Comparar modelos <IconArrow width="16" /></Link></div>
          <div className="grid">{destacadas.map((x) => <MotoCard key={x.slug} moto={x} />)}</div>
          <p className="fine">* Precio de lista modelo 2027 con bono vigente. No incluye SOAT, matrícula ni impuestos.</p>
        </div>
      </section>

      <section className="sec sec--blue">
        <div className="wrap svc">
          {[[IconCard, 'Financiación', 'Calcula tu cuota inicial y solicita tu estudio de crédito.', '/financiacion'],
            [IconWrench, 'Taller y repuestos', 'Mantenimiento y repuestos originales para todas las marcas.', '/posventa'],
            [IconPin, `${SEDES.length} sede en el Valle`, 'Encuentra el punto de venta más cercano.', '/sedes']].map(([I, t, d, to], k) => (
            <Link key={t} to={to} className="svc__card reveal" style={{ '--d': `${k * 60}ms` }}><span className="svc__ic"><I /></span><b>{t}</b><p>{d}</p><span className="link link--light">Ver más <IconArrow width="14" /></span></Link>
          ))}
          <div className="svc__cta reveal"><b>¿Hablamos?</b><p>Un asesor te ayuda a elegir y cotizar por WhatsApp.</p><a className="btn btn--red" href={waLink('Hola, quiero asesoría para comprar una moto.')} target="_blank" rel="noreferrer"><IconWhatsApp width="18" /> Hablar con un asesor</a></div>
        </div>
      </section>
    </>
  )
}
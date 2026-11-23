import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import MotoImagen from './MotoImagen.jsx'
import { CATEGORIAS, MARCAS, MOTOS } from '../data/catalogo.js'
import { waLink } from '../data/sitio.js'
import { deCategoria, deMarca, desdeLista, desdeDe, pesos, getMarca, tienePromo } from '../utils/catalogo.js'
import { IconDown, IconMenu, IconClose, IconSearch, IconWhatsApp, IconCompare, IconArrow, IconTag, CatIcon } from './Icons.jsx'

const LINKS = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/motos', label: 'Motos', mega: true },
  { to: '/ofertas', label: 'Ofertas', hot: true },
  { to: '/marcas', label: 'Marcas' },
  { to: '/financiacion', label: 'Financiación' },
  { to: '/posventa', label: 'Posventa' },
  { to: '/sedes', label: 'Sedes' },
  { to: '/contacto', label: 'Contacto' },
]
const nOfertas = MOTOS.filter(tienePromo).length

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mega, setMega] = useState(false)
  const [buscar, setBuscar] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => { setOpen(false); setMega(false); setBuscar(false) }, [pathname])
  useEffect(() => { const f = () => setScrolled(window.scrollY > 4); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { document.body.style.overflow = open || buscar? 'hidden' : '' }, [open, buscar])

  return (
    <header className={`hd ${scrolled? 'is-scrolled' : ''}`}>
      <div className="hd__promo">
        <div className="wrap hd__promoIn">
          <span><IconTag width="15" height="15" /> <b>{nOfertas} motos con bono</b> <em className="hd__promoX">este mes</em></span>
          <Link to="/ofertas">Ver ofertas <IconArrow width="14" height="14" /></Link>
        </div>
      </div>
      <div className="hd__main">
        <div className="wrap hd__bar" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo />

          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button
                className="hd__search"
                onClick={() => setBuscar(true)}
                style={{
                  height: '46px',
                  borderRadius: '999px',
                  background: '#eef1f5',
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0 6px 0 18px',
                  gap: '10px',
                  position: 'relative',
                  zIndex: 1
                }}
              >
              <IconSearch width="20" height="20" style={{ color: '#6b7280', flexShrink: 0 }} />
              <span style={{ flex: 1, textAlign: 'center', color: '#6b7280', fontWeight: 500 }}>
                ¿Qué moto buscas?
              </span>
              <kbd
                style={{
                  background: '#143a8a',
                  color: '#fff',
                  borderRadius: '999px',
                  padding: '8px 18px',
                  fontSize: '14px',
                  fontWeight: 700,
                  border: 'none',
                  lineHeight: 1,
                }}
              >
                Buscar
              </kbd>
            </button>
          </div>

          <div className="hd__actions">
            <Link
              to="/comparar"
              className="btn btn--sm btn--cmp"
              style={{
                background: '#111',
                color: '#fff',
                fontWeight: 700,
                border: '1px solid #111',
                padding: '8px 14px',
                borderRadius: '8px'
              }}
            >
              Compare y Decide.
            </Link>
            <a className="btn btn--red btn--sm hd__cta" href={waLink('Hola, quiero cotizar una moto Auteco.')} target="_blank" rel="noreferrer"><IconWhatsApp width="17" height="17" /> Cotizar</a>
            <button className="icon-btn hd__burger" onClick={() => setOpen(!open)} aria-label={open? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} style={{ position: 'relative', zIndex: 20 }}>{open? <IconClose /> : <IconMenu />}</button>
          </div>
        </div>
      </div>
      <nav className="hd__nav" aria-label="Principal">
        <div className="wrap hd__navIn">
          {LINKS.map((l) => l.mega? (
            <div key={l.to} className="hd__item" onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
              <NavLink to={l.to} onFocus={() => setMega(true)} aria-expanded={mega} className={({ isActive }) => `hd__link ${isActive || pathname.startsWith('/moto/')? 'is-on' : ''}`}>{l.label} <IconDown width="14" height="14" /></NavLink>
              <Mega visible={mega} />
            </div>
          ) : (
            <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `hd__link ${l.hot? 'hd__link--hot' : ''} ${isActive? 'is-on' : ''}`}>{l.label}{l.hot && <em>{nOfertas}</em>}</NavLink>
          ))}
        </div>
      </nav>

      <div className={`drawer ${open? 'is-open' : ''}`}>
        <nav className="drawer__in" aria-label="Móvil">
          {LINKS.map((l, i) => <NavLink key={l.to} to={l.to} end={l.end} style={{ '--i': i }} className={({ isActive }) => `drawer__link ${isActive? 'is-on' : ''}`}>{l.label}<IconArrow width="18" /></NavLink>)}
          <div className="drawer__chips">{MARCAS.map((m) => <Link key={m.id} to={`/marcas/${m.id}`} style={{ '--b': m.color }}><i />{m.nombre}</Link>)}</div>
          <a className="btn btn--red btn--block" href={waLink('Hola, quiero cotizar una moto Auteco.')} target="_blank" rel="noreferrer"><IconWhatsApp width="18" /> Cotizar por WhatsApp</a>
        </nav>
      </div>
      {buscar && <Buscador onClose={() => setBuscar(false)} />}
    </header>
  )
}

function Mega({ visible }) {
  const [sel, setSel] = useState({ tipo: 'marca', id: MARCAS[0].id })
  const lista = (sel.tipo === 'marca'? deMarca(sel.id) : deCategoria(sel.id)).slice(0, 6)
  const verTodo = sel.tipo === 'marca'? `/marcas/${sel.id}` : `/motos/${sel.id}`
  return (
    <div className={`mega ${visible? 'is-visible' : ''}`}>
      <div className="wrap mega__in">
        <div className="mega__col">
          <h6>Marcas</h6>
          {MARCAS.map((m) => (
            <Link key={m.id} to={`/marcas/${m.id}`} onMouseEnter={() => setSel({ tipo: 'marca', id: m.id })} className={`mega__row ${sel.id === m.id? 'is-on' : ''}`} style={{ '--b': m.color }}>
              <i className="dot" /><b>{m.nombre}</b><small>{deMarca(m.id).length}</small>
            </Link>
          ))}
        </div>
        <div className="mega__col">
          <h6>Categorías</h6>
          {CATEGORIAS.map((c) => {
            return (
              <Link key={c.id} to={`/motos/${c.id}`} onMouseEnter={() => setSel({ tipo: 'cat', id: c.id })} className={`mega__row ${sel.id === c.id? 'is-on' : ''}`}>
                <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#143a8a', marginRight: '8px', verticalAlign: 'middle' }} />
                <b>{c.nombre}</b><small>desde {pesos(desdeLista(deCategoria(c.id)))}</small>
              </Link>
            ) })}
        </div>
        <div className="mega__models">
          {lista.map((m) => (
            <Link key={m.slug} to={`/moto/${m.slug}`} className="mega__model">
              <MotoImagen moto={m} small />
              <span><small>{getMarca(m.marca).nombre}</small><b>{m.nombre}</b><em>{pesos(desdeDe(m))}</em></span>
            </Link>
          ))}
          <Link to={verTodo} className="mega__all">Ver todo <IconArrow width="16" /></Link>
        </div>
      </div>
    </div>
  )
}

function Buscador({ onClose }) {
  const [q, setQ] = useState('')
  const ref = useRef(null)
  const navigate = useNavigate()
  useEffect(() => { ref.current?.focus(); const k = (e) => e.key === 'Escape' && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [onClose])
  const t = q.trim().toLowerCase()
  const res = t? MOTOS.filter((m) => `${getMarca(m.marca).nombre} ${m.nombre} ${m.versiones.map((v) => v.nombre).join(' ')}`.toLowerCase().includes(t)).slice(0, 8) : []
  return (
    <div className="search" role="dialog" aria-modal="true" aria-label="Buscar" onClick={onClose}>
      <div className="search__box" onClick={(e) => e.stopPropagation()}>
        <form className="search__f" onSubmit={(e) => { e.preventDefault(); navigate(`/motos?q=${encodeURIComponent(q)}`) }}>
          <IconSearch /><input ref={ref} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Raider, MRX, Ntorq, Apache…" />
          <button type="button" className="icon-btn" onClick={onClose} aria-label="Cerrar"><IconClose /></button>
        </form>
        {res.length > 0 && <ul className="search__res">{res.map((m) => (
          <li key={m.slug}><Link to={`/moto/${m.slug}`}><MotoImagen moto={m} small /><span><small>{getMarca(m.marca).nombre}</small><b>{m.nombre}</b></span><em>{pesos(desdeDe(m))}</em></Link></li>
        ))}</ul>}
        {t &&!res.length && <p className="search__empty">Sin resultados para “{q}”.</p>}
        {!t && <div className="search__sug">{['Raider', 'MRX', 'Apache', 'Ntorq', 'Bet', 'King'].map((s) => <button key={s} onClick={() => setQ(s)}>{s}</button>)}</div>}
      </div>
    </div>
  )
}
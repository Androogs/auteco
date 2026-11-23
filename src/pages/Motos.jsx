import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { CATEGORIAS, MARCAS, MOTOS } from '../data/catalogo.js'
import { getCategoria, getMoto, getMarca, desdeDe, ccNum, mejorBono, tienePromo } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import MotoCard from '../components/MotoCard.jsx'
import MotoImagen from '../components/MotoImagen.jsx'
import { IconSearch, IconClose, IconCompare, IconFilter, CatIcon } from '../components/Icons.jsx'

const ORDEN = { rel: ['Destacados', () => 0], menor: ['Menor precio', (a, b) => desdeDe(a) - desdeDe(b)], mayor: ['Mayor precio', (a, b) => desdeDe(b) - desdeDe(a)], bono: ['Mayor bono', (a, b) => mejorBono(b) - mejorBono(a)], cc: ['Mayor cilindraje', (a, b) => ccNum(b) - ccNum(a)] }
const TOPES = [['', 'Todos'], ['6000000', 'Hasta $6 M'], ['8000000', 'Hasta $8 M'], ['10000000', 'Hasta $10 M'], ['13000000', 'Hasta $13 M']]

export default function Motos() {
  const { categoria } = useParams()
  const cat = categoria ? getCategoria(categoria) : null
  const [sp, setSp] = useSearchParams()
  const navigate = useNavigate()
  const [comp, setComp] = useState([])
  const [panel, setPanel] = useState(false)
  const q = sp.get('q') || '', max = sp.get('max') || '', orden = sp.get('orden') || 'rel', soloBono = sp.get('bono') === '1'
  const marcas = (sp.get('marca') || '').split(',').filter(Boolean)
  const upd = (k, v) => { const n = new URLSearchParams(sp); if (v) n.set(k, v); else n.delete(k); setSp(n, { replace: true }) }
  const tMarca = (id) => upd('marca', (marcas.includes(id) ? marcas.filter((x) => x !== id) : [...marcas, id]).join(','))
  const tComp = (s) => setComp((c) => (c.includes(s) ? c.filter((x) => x !== s) : c.length < 3 ? [...c, s] : c))
  const base = cat ? MOTOS.filter((m) => m.categoria === cat.id) : MOTOS
  const lista = useMemo(() => {
    let l = base
    if (marcas.length) l = l.filter((m) => marcas.includes(m.marca))
    if (max) l = l.filter((m) => desdeDe(m) <= +max)
    if (soloBono) l = l.filter(tienePromo)
    if (q) { const t = q.toLowerCase(); l = l.filter((m) => `${getMarca(m.marca).nombre} ${m.nombre}`.toLowerCase().includes(t)) }
    return [...l].sort(ORDEN[orden][1])
  }, [base, marcas.join(), max, soloBono, q, orden])
  if (categoria && !cat) return <div className="wrap sec"><h1 className="t-h2">Categoría no encontrada</h1><Link className="link" to="/motos">Ver catálogo</Link></div>
  const Ic = cat ? CatIcon[cat.id] : null

  return (
    <>
      <PageHead kicker={cat ? 'Categoría' : 'Catálogo'} title={cat ? cat.nombre : 'Todas las motos'} crumbs={cat ? [{ label: 'Motos', to: '/motos' }, { label: cat.nombre }] : [{ label: 'Motos' }]}
        aside={Ic ? <span className="ph__badge"><Ic width="64" height="64" /></span> : <span className="ph__badge"><b>{MOTOS.length}</b><small>modelos</small></span>}>
        <p>{cat ? `${cat.lema}. ${base.length} modelos disponibles en nuestras sedes.` : 'TVS, Victory, Kymco, Zontes y Ceronte. Filtra, compara y cotiza por WhatsApp.'}</p>
      </PageHead>
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="pills">
            <Link to={{ pathname: '/motos', search: sp.toString() }} className={!cat ? 'is-on' : ''}>Todas</Link>
            {CATEGORIAS.map((c) => <Link key={c.id} to={{ pathname: `/motos/${c.id}`, search: sp.toString() }} className={cat?.id === c.id ? 'is-on' : ''}>{c.nombre}</Link>)}
          </div>
          <div className="layout">
            <aside className={`filters ${panel ? 'is-open' : ''}`}>
              <div className="filters__b"><h6>Marca</h6>
                {MARCAS.map((m) => { const n = base.filter((x) => x.marca === m.id).length; return (
                  <label key={m.id} className={`chk ${n ? '' : 'is-off'}`} style={{ '--b': m.color }}><input type="checkbox" disabled={!n} checked={marcas.includes(m.id)} onChange={() => tMarca(m.id)} /><i className="dot" />{m.nombre}<small>{n}</small></label>) })}
              </div>
              <div className="filters__b"><h6>Precio con bono</h6><div className="mini">{TOPES.map(([v, t]) => <button key={t} className={max === v ? 'is-on' : ''} onClick={() => upd('max', v)}>{t}</button>)}</div></div>
              <div className="filters__b"><label className="switch"><input type="checkbox" checked={soloBono} onChange={(e) => upd('bono', e.target.checked ? '1' : '')} /><span /> Solo con bono</label></div>
              {(marcas.length || max || q || soloBono) ? <button className="btn btn--ghost btn--sm" onClick={() => setSp({}, { replace: true })}>Limpiar filtros</button> : null}
            </aside>
            <div>
              <div className="toolbar">
                <button className="btn btn--line-blue btn--sm toolbar__f" onClick={() => setPanel(!panel)}><IconFilter width="16" /> Filtros</button>
                <label className="sbox"><IconSearch width="18" /><input value={q} onChange={(e) => upd('q', e.target.value)} placeholder="Buscar modelo" aria-label="Buscar modelo" /></label>
                <span className="toolbar__n">{lista.length} resultados</span>
                <select className="select" value={orden} onChange={(e) => upd('orden', e.target.value === 'rel' ? '' : e.target.value)} aria-label="Ordenar">{Object.entries(ORDEN).map(([k, [t]]) => <option key={k} value={k}>{t}</option>)}</select>
              </div>
              <div className="grid grid--cat">
                {lista.map((m) => <MotoCard key={m.slug} moto={m} onCompare={tComp} comparing={comp.includes(m.slug)} />)}
                {!lista.length && <div className="empty"><p>No hay modelos con estos filtros.</p><button className="btn btn--blue btn--sm" onClick={() => setSp({})}>Limpiar filtros</button></div>}
              </div>
              <p className="fine">* Precio de lista modelo 2027 menos el bono vigente. No incluye SOAT, matrícula ni impuestos. Sujeto a cambios y disponibilidad por sede.</p>
            </div>
          </div>
        </div>
      </section>
      {comp.length > 0 && (
        <div className="cbar"><div className="wrap cbar__in">
          <div className="cbar__items">{comp.map((s) => { const m = getMoto(s); return <span key={s} className="cbar__it"><MotoImagen moto={m} small />{m.nombre}<button onClick={() => tComp(s)} aria-label="Quitar"><IconClose width="14" /></button></span> })}<small>{comp.length}/3</small></div>
          <button className="btn btn--red btn--sm" disabled={comp.length < 2} onClick={() => navigate(`/comparar?m=${comp.join(',')}`)}><IconCompare width="18" /> Comparar</button>
        </div></div>
      )}
    </>
  )
}

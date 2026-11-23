import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CATEGORIAS, MOTOS } from '../data/catalogo.js'
import { waLink } from '../data/sitio.js'
import { getMoto, getMarca, getCategoria, pesos, desdeDe, mejorBono } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import MotoImagen from '../components/MotoImagen.jsx'
import { IconWhatsApp, IconClose } from '../components/Icons.jsx'

const s = (m, k) => { for (const g of Object.values(m.specs)) if (g[k]) return g[k]; return '—' }
const FILAS = [
  ['Marca', (m) => getMarca(m.marca).nombre], ['Categoría', (m) => getCategoria(m.categoria).nombre],
  ['Precio desde*', (m) => pesos(desdeDe(m))], ['Bono máximo', (m) => (mejorBono(m) ? pesos(mejorBono(m)) : '—')],
  ['Versiones', (m) => m.versiones.map((v) => v.nombre).join(' · ')],
  ['Cilindraje', (m) => s(m, 'Cilindraje')], ['Potencia', (m) => s(m, 'Potencia máxima')], ['Torque', (m) => s(m, 'Torque máximo')],
  ['Transmisión', (m) => s(m, 'Transmisión')], ['Alimentación', (m) => s(m, 'Alimentación')],
  ['Freno delantero', (m) => s(m, 'Freno delantero')], ['Freno trasero', (m) => s(m, 'Freno trasero')],
  ['Suspensión trasera', (m) => s(m, 'Suspensión trasera')], ['Tanque', (m) => s(m, 'Tanque')], ['Peso', (m) => s(m, 'Peso')],
]

export default function Comparar() {
  const [sp, setSp] = useSearchParams()
  const sel = useMemo(() => (sp.get('m') || '').split(',').filter(getMoto).slice(0, 3), [sp])
  const motos = sel.map(getMoto)
  const setSlot = (k, v) => { const n = [...sel]; if (v) n[k] = v; else n.splice(k, 1); setSp({ m: n.filter(Boolean).join(',') }) }
  return (
    <>
      <PageHead kicker="Herramienta" title="Compara y Decide" crumbs={[{ label: 'Comparar' }]}><p>Compara hasta tres motos, de cualquier marca, lado a lado.</p></PageHead>
      <section className="sec sec--tight"><div className="wrap">
        <div className="cmp">
          <div className="cmp__row cmp__row--head"><div className="cmp__lbl" />
            {[0, 1, 2].map((k) => { const m = motos[k]; return (
              <div key={k} className={`cmp__slot ${m ? '' : 'is-empty'}`}>
                {m ? <><button className="cmp__x" onClick={() => setSlot(k, null)} aria-label="Quitar"><IconClose width="16" /></button><MotoImagen moto={m} /><Link to={`/moto/${m.slug}`} className="cmp__name"><small>{getMarca(m.marca).nombre}</small>{m.nombre}</Link></> : <span className="cmp__plus">+</span>}
                <select className="select" value={m?.slug || ''} disabled={!m && k > sel.length} onChange={(e) => setSlot(k, e.target.value)} aria-label={`Moto ${k + 1}`}>
                  <option value="">{m ? 'Cambiar moto' : 'Agregar moto'}</option>
                  {CATEGORIAS.map((c) => <optgroup key={c.id} label={c.nombre}>{MOTOS.filter((x) => x.categoria === c.id && (!sel.includes(x.slug) || x.slug === m?.slug)).map((x) => <option key={x.slug} value={x.slug}>{getMarca(x.marca).nombre} {x.nombre}</option>)}</optgroup>)}
                </select>
              </div>) })}
          </div>
          {motos.length > 0 && FILAS.map(([l, fn]) => <div key={l} className="cmp__row"><div className="cmp__lbl">{l}</div>{[0, 1, 2].map((k) => <div key={k} className="cmp__cell">{motos[k] ? fn(motos[k]) : ''}</div>)}</div>)}
          {motos.length > 0 && <div className="cmp__row"><div className="cmp__lbl" />{[0, 1, 2].map((k) => <div key={k} className="cmp__cell">{motos[k] && <a className="btn btn--red btn--sm" href={waLink(`Hola, quiero cotizar la ${getMarca(motos[k].marca).nombre} ${motos[k].nombre}.`)} target="_blank" rel="noreferrer"><IconWhatsApp width="16" /> Cotizar</a>}</div>)}</div>}
        </div>
        {!motos.length && <p className="empty">Agrega una moto para comenzar.</p>}
        <p className="fine">* Precio con bono de la versión más económica. "—" = dato no publicado en la ficha de referencia.</p>
      </div></section>
    </>
  )
}

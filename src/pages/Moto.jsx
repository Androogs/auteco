import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { waLink } from '../data/sitio.js'
import { getMoto, getMarca, getCategoria, deCategoria, fotosDe, pesos, finalDe, num } from '../utils/catalogo.js'
import MotoImagen from '../components/MotoImagen.jsx'
import MotoCard from '../components/MotoCard.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWhatsApp, IconCard, IconCompare, IconCheck, IconEngine, IconBolt, IconGauge, IconDrop, IconWeight, IconTag } from '../components/Icons.jsx'
import NoEncontrado from './NoEncontrado.jsx'

export default function Moto() {
  const { slug } = useParams()
  const moto = getMoto(slug)
  const [vi, setVi] = useState(0)
  const [fi, setFi] = useState(0)
  const [tab, setTab] = useState(0)
  if (!moto) return <NoEncontrado />
  const marca = getMarca(moto.marca), cat = getCategoria(moto.categoria)
  const v = moto.versiones[vi], fotos = fotosDe(moto), r = moto.resumen
  const nombre = `${marca.nombre} ${moto.nombre}${moto.versiones.length > 1 ? ` ${v.nombre}` : ''}`
  const kpis = [[IconEngine, r.cc, 'cc'], [IconBolt, num(r.hp), 'hp'], [IconGauge, num(r.nm), 'Nm'], [IconDrop, num(r.tanque), 'L tanque'], [IconWeight, r.peso, 'kg']].filter(([, x]) => x)
  const grupos = Object.entries(moto.specs)
  const g = grupos[Math.min(tab, grupos.length - 1)]
  const otras = deCategoria(moto.categoria).filter((m) => m.slug !== moto.slug).slice(0, 4)

  return (
    <>
      <section className="pd" style={{ '--b': marca.color }}>
        <div className="wrap">
          <nav className="crumbs" aria-label="Ruta"><Link to="/">Inicio</Link><Link to={`/motos/${cat.id}`}>{cat.nombre}</Link><Link to={`/marcas/${marca.id}`}>{marca.nombre}</Link><span>{moto.nombre}</span></nav>
          <div className="pd__g">
            <div className="pd__gal">
              <div className="pd__stage">
                {v.bono > 0 && <span className="ribbon">Bono {pesos(v.bono)}</span>}
                {v.promo && <span className="ribbon">Gratis {v.promo}</span>}
                <MotoImagen key={fi} moto={moto} i={fi} eager />
              </div>
              {fotos.length > 1 && <div className="pd__thumbs">{fotos.map((src, k) => <button key={src} className={k === fi ? 'is-on' : ''} onClick={() => setFi(k)} aria-label={`Foto ${k + 1}`}><img src={src} alt="" /></button>)}</div>}
</div>
            <aside className="pd__info">
              <Link to={`/marcas/${marca.id}`} className="pd__brand"><i className="dot" />{marca.nombre}</Link>
              <h1 className="t-h1">{moto.nombre}</h1>
              <p className="pd__meta">{cat.nombre} · Modelo 2027</p>
              {moto.versiones.length > 1 && (
                <div className="vers" role="radiogroup" aria-label="Versión">
                  <span>Elige la versión</span>
                  {moto.versiones.map((x, k) => (
                    <button key={x.ref} role="radio" aria-checked={k === vi} className={k === vi ? 'is-on' : ''} onClick={() => setVi(k)}>
                      <b>{x.nombre}</b><small>{pesos(finalDe(x))}{x.bono > 0 && <em> · bono {pesos(x.bono)}</em>}</small>
                    </button>
                  ))}
                </div>
              )}
              <div className="pbox">
                <div className="pbox__row"><span>Precio de lista 2027</span><b className={v.bono ? 'tach' : ''}>{pesos(v.precio)}</b></div>
                {v.bono > 0 && <div className="pbox__row pbox__row--bono"><span><IconTag width="15" /> Bono de descuento</span><b>− {pesos(v.bono)}</b></div>}
                {v.promo && <div className="pbox__row pbox__row--bono"><span><IconTag width="15" /> Beneficio</span><b>{v.promo} gratis</b></div>}
                <div className="pbox__total"><span>Precio {v.bono ? 'con bono' : ''}</span><strong>{pesos(finalDe(v))}*</strong></div>
                <small>* No incluye SOAT, matrícula ni impuestos. Sujeto a cambios y disponibilidad.</small>
              </div>
              <div className="pd__ctas">
                <a className="btn btn--red btn--block" href={waLink(`Hola, quiero cotizar la ${nombre} (${pesos(finalDe(v))}).`)} target="_blank" rel="noreferrer"><IconWhatsApp width="18" /> Cotizar por WhatsApp</a>
                <div className="pd__ctas2">
                  <Link className="btn btn--line-blue" to={`/financiacion?moto=${moto.slug}&v=${vi}`}><IconCard /> Financiar</Link>
                  <Link className="btn btn--line-blue" to={`/comparar?m=${moto.slug}`}><IconCompare /> Comparar</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap pd__det">
          <div>
            {kpis.length > 0 && <div className="kpis">{kpis.map(([I, val, u]) => <div key={u}><I /><b>{val}</b><small>{u}</small></div>)}</div>}
            {moto.destacados?.length > 0 && <><h2 className="t-h3">Lo que más destaca</h2><ul className="feats">{moto.destacados.map((d) => <li key={d}><IconCheck /> {d}</li>)}</ul></>}
            {moto.nota && <p className="nota">Nota interna: {moto.nota}</p>}
          </div>
          <div>
            <span className="kicker">Ficha técnica</span><h2 className="t-h2">Especificaciones</h2>
            {grupos.length === 0 ? (
              <div className="nospec"><p>La ficha técnica de este modelo se publicará pronto. Pídela a un asesor.</p><a className="btn btn--line-blue btn--sm" href={waLink(`Hola, ¿me compartes la ficha técnica de la ${nombre}?`)} target="_blank" rel="noreferrer"><IconWhatsApp width="16" /> Pedir ficha</a></div>
            ) : (<>
              <div className="tabs" role="tablist">{grupos.map(([n], k) => <button key={n} role="tab" aria-selected={k === tab} className={k === tab ? 'is-on' : ''} onClick={() => setTab(k)}>{n}</button>)}</div>
              <dl className="specs" key={tab}>{Object.entries(g[1]).map(([k, val]) => <div key={k}><dt>{k}</dt><dd>{val}</dd></div>)}</dl>
              {moto.fuente && <p className="fine">Ficha de referencia pública (<a href={moto.fuente} target="_blank" rel="noreferrer">fuente</a>). Valida con la ficha oficial Auteco. Puede variar según la versión.</p>}
            </>)}
          </div>
        </div>
      </section>
      <section className="sec sec--soft">
        <div className="wrap pd__bot">
          <div>
            <span className="kicker">Pruébala</span><h2 className="t-h2">Agenda tu prueba de manejo</h2>
            <LeadForm asunto={`Prueba de manejo – ${nombre}`} boton="Agendar prueba" initial={{ moto: nombre }}
              fields={[{ name: 'nombre', label: 'Nombre completo', required: true, full: true }, { name: 'celular', label: 'Celular', type: 'tel', required: true }, { name: 'ciudad', label: 'Ciudad' }, { name: 'fecha', label: 'Fecha preferida', type: 'date' }, { name: 'moto', label: 'Moto' }]} />
          </div>
          {otras.length > 0 && <div><h3 className="t-h3">También te puede gustar</h3><div className="grid grid--2">{otras.map((m) => <MotoCard key={m.slug} moto={m} />)}</div></div>}
        </div>
      </section>
    </>
  )
}

import { useState } from 'react'
import { SEDES, SITIO, waLink } from '../data/sitio.js'
import PageHead from '../components/PageHead.jsx'
import { IconPin, IconPhone, IconClock, IconWhatsApp, IconCheck } from '../components/Icons.jsx'

export default function Sedes() {
  const [sel, setSel] = useState(SEDES[0].id)
  const s = SEDES.find((x) => x.id === sel)
  return (
    <>
      <PageHead kicker={SITIO.empresa} title="Nuestras sedes" crumbs={[{ label: 'Sedes' }]} aside={<><span className="ph__count"><b>{SEDES.length}</b>sede</span><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapa)}`} target="_blank" rel="noreferrer" className="ph__map"><IconPin width="14" /> Ver en Google Maps</a></>}>
        <p>Concesionarios autorizados Auteco en el {SITIO.region}. Elige la sede más cercana.</p>
      </PageHead>
      <section className="sec sec--tight">
        <div className="wrap sedes">
          <div className="sedes__list">
            {SEDES.map((x) => (
              <button key={x.id} className={`sede ${x.id === sel ? 'is-on' : ''}`} onClick={() => setSel(x.id)}>
                <small>{x.ciudad}</small><b>{x.nombre}</b><span><IconPin width="15" /> {x.direccion}</span>
                <div className="sede__tags">{x.servicios.map((t) => <em key={t}>{t}</em>)}</div>
              </button>
            ))}
          </div>
          <div className="sedes__det">
            <div className="sedes__map"><iframe key={s.id} title={`Mapa ${s.nombre}`} src={`https://www.google.com/maps?q=${encodeURIComponent(s.mapa)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
            <div className="sedes__card">
              <h2 className="t-h3">{s.nombre}</h2>
              <ul>
                <li><IconPin /> <span>{s.direccion} · {s.ciudad}</span></li>
                <li><IconPhone /> <a href={`tel:${s.telefono.replace(/[^\d+]/g, '')}`}>{s.telefono}</a></li>
                <li><IconClock /> <span>{s.horario.join(' · ')}</span></li>
                <li><IconCheck /> <span>{s.servicios.join(' · ')}</span></li>
              </ul>
              <div className="sedes__btns">
                <a className="btn btn--blue" href={waLink(`Hola, quiero información de la sede ${s.nombre}.`, s.whatsapp)} target="_blank" rel="noreferrer"><IconWhatsApp width="18" /> WhatsApp</a>
                <a className="btn btn--line-blue" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapa)}`} target="_blank" rel="noreferrer"><IconPin /> Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

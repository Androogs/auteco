import { useSearchParams } from 'react-router-dom'
import { MOTOS } from '../data/catalogo.js'
import { SITIO, SEDES } from '../data/sitio.js'
import { getMarca } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWrench, IconBox, IconShield, IconCheck } from '../components/Icons.jsx'

const S = {
  taller: { I: IconWrench, t: 'Taller autorizado', c: 'Taller', d: 'Mantenimientos preventivos y correctivos con técnicos capacitados, herramienta especializada y repuestos originales para todas las marcas Auteco.',
    items: ['Mantenimientos según el manual del fabricante', 'Diagnóstico y reparación', 'Revisiones de garantía', 'Alistamiento y entrega de motos nuevas'], tipos: ['Mantenimiento preventivo', 'Revisión de garantía', 'Reparación / diagnóstico', 'Otro'], b: 'Agendar cita' },
  repuestos: { I: IconBox, t: 'Repuestos y accesorios', c: 'Repuestos', d: 'Repuestos originales, lubricantes y accesorios para TVS, Victory, Kymco, Zontes y Ceronte. Consulta disponibilidad en tu sede.',
    items: ['Repuestos originales', 'Accesorios y equipamiento', 'Lubricantes y consumibles', 'Pedidos especiales bajo consulta'], tipos: ['Repuesto', 'Accesorio', 'Lubricante', 'Otro'], b: 'Consultar disponibilidad' },
  garantia: { I: IconShield, t: 'Garantía', c: 'Garantía', d: 'Te acompañamos en todo el proceso de garantía de fábrica de tu moto. Las condiciones dependen de cada marca y modelo, según la política vigente de Auteco.',
    items: ['Cumple los mantenimientos en el kilometraje indicado', 'Conserva tus soportes de mantenimiento', 'Usa repuestos y lubricantes recomendados', 'Consulta las condiciones de tu modelo con un asesor'], tipos: ['Consulta de condiciones', 'Solicitud de revisión', 'Otro'], b: 'Enviar consulta' },
}

export default function Posventa() {
  const [sp, setSp] = useSearchParams()
  const k = S[sp.get('s')] ? sp.get('s') : 'taller'
  const s = S[k]
  return (
    <>
      <PageHead kicker="Servicio" title="Posventa" crumbs={[{ label: 'Posventa' }]}><p>Taller, repuestos y garantía en nuestras sedes del {SITIO.region}.</p></PageHead>
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="seg" role="tablist">
            {Object.entries(S).map(([id, v]) => <button key={id} role="tab" aria-selected={k === id} className={k === id ? 'is-on' : ''} onClick={() => setSp({ s: id })}><v.I /> {v.c}</button>)}
          </div>
          <div className="pv" key={k}>
            <div>
              <span className="pv__ic"><s.I width="30" height="30" /></span>
              <h2 className="t-h2">{s.t}</h2>
              <p className="muted pv__d">{s.d}</p>
              <ul className="feats feats--2">{s.items.map((i) => <li key={i}><IconCheck /> {i}</li>)}</ul>
            </div>
            <LeadForm titulo={s.b} asunto={`${s.c} – Auteco Valle`} boton={s.b}
              fields={[{ name: 'nombre', label: 'Nombre', required: true, full: true }, { name: 'celular', label: 'Celular', type: 'tel', required: true }, { name: 'placa', label: 'Placa' },
                { name: 'moto', label: 'Moto', type: 'select', options: MOTOS.map((m) => `${getMarca(m.marca).nombre} ${m.nombre}`).concat('Otra') },
                { name: 'sede', label: 'Sede', type: 'select', options: SEDES.map((x) => x.nombre) }, { name: 'tipo', label: 'Tipo de solicitud', type: 'select', options: s.tipos, full: true },
                { name: 'detalle', label: 'Detalle', type: 'textarea', full: true }]} />
          </div>
        </div>
      </section>
    </>
  )
}

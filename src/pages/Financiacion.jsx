import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIAS, MOTOS } from '../data/catalogo.js'
import { waLink } from '../data/sitio.js'
import { getMoto, getMarca, pesos, finalDe } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import MotoImagen from '../components/MotoImagen.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWhatsApp } from '../components/Icons.jsx'

/**
 * TASA_MENSUAL: déjala en null hasta tener la tasa de la entidad aliada.
 * Con null el simulador muestra cuota inicial y monto a financiar.
 * Ejemplo ilustrativo: 0.0199 = 1,99 % mensual.
 */
const TASA_MENSUAL = null
const PLAZOS = [12, 24, 36, 48]
const ALIADOS = ['Entidad aliada 1 – POR CONFIRMAR', 'Entidad aliada 2 – POR CONFIRMAR', 'Entidad aliada 3 – POR CONFIRMAR']
const PASOS = [['Elige tu moto', 'Escoge modelo y versión en el catálogo o en la sede.'], ['Calcula tu inicial', 'Usa el simulador para definir cuánto pagar de entrada.'], ['Envía tus datos', 'Un asesor radica tu estudio de crédito con la entidad aliada.'], ['Estrena', 'Firmas, matriculamos y te entregamos tu moto.']]
const OPC = MOTOS.flatMap((m) => m.versiones.map((v, i) => ({ id: `${m.slug}|${i}`, m, v, label: `${getMarca(m.marca).nombre} ${m.nombre}${m.versiones.length > 1 ? ` · ${v.nombre}` : ''}` })))

export default function Financiacion() {
  const [sp] = useSearchParams()
  const pre = getMoto(sp.get('moto')) ? `${sp.get('moto')}|${sp.get('v') || 0}` : 'tvs-raider-125|0'
  const [sel, setSel] = useState(OPC.some((o) => o.id === pre) ? pre : OPC[0].id)
  const [pct, setPct] = useState(20)
  const [plazo, setPlazo] = useState(36)
  const o = OPC.find((x) => x.id === sel)
  const precio = finalDe(o.v)
  const { ini, fin, cuota } = useMemo(() => { const ini = Math.round(precio * pct / 100), fin = precio - ini, i = TASA_MENSUAL; return { ini, fin, cuota: i ? Math.round(fin * i / (1 - Math.pow(1 + i, -plazo))) : null } }, [precio, pct, plazo])
  return (
    <>
      <PageHead kicker="Crédito" title="Financiación" crumbs={[{ label: 'Financiación' }]}><p>Calcula tu cuota inicial y solicita tu estudio de crédito con nuestros asesores.</p></PageHead>
      <section className="sec sec--tight"><div className="wrap fin">
        <div className="calc">
          <div className="calc__moto"><MotoImagen moto={o.m} /><div><small>{getMarca(o.m.marca).nombre}</small><h3>{o.m.nombre}</h3><span>{o.v.nombre}</span><b>{pesos(precio)}*</b></div></div>
          <label className="fld"><span>Moto y versión</span><select value={sel} onChange={(e) => setSel(e.target.value)}>{CATEGORIAS.map((c) => <optgroup key={c.id} label={c.nombre}>{OPC.filter((x) => x.m.categoria === c.id).map((x) => <option key={x.id} value={x.id}>{x.label} · {pesos(finalDe(x.v))}</option>)}</optgroup>)}</select></label>
          <label className="fld"><span>Cuota inicial: <b>{pct}%</b> · {pesos(ini)}</span><input type="range" min="0" max="70" step="5" value={pct} onChange={(e) => setPct(+e.target.value)} /></label>
          {TASA_MENSUAL && <div className="fld"><span>Plazo</span><div className="mini">{PLAZOS.map((p) => <button key={p} type="button" className={p === plazo ? 'is-on' : ''} onClick={() => setPlazo(p)}>{p} meses</button>)}</div></div>}
          <div className="calc__out">
            <div><small>Precio{o.v.bono ? ' con bono' : ''}</small><b>{pesos(precio)}</b></div>
            <div><small>Cuota inicial</small><b>{pesos(ini)}</b></div>
            <div className="is-main"><small>Monto a financiar</small><b>{pesos(fin)}</b></div>
            {cuota && <div><small>Cuota mensual estimada</small><b>{pesos(cuota)}</b></div>}
          </div>
          <p className="fine">Cálculo de referencia sobre el precio sin SOAT, matrícula ni impuestos. La tasa, el plazo y la aprobación dependen de la entidad financiera. No constituye una oferta de crédito.</p>
          <ol className="steps">{PASOS.map(([t, d], k) => <li key={t}><span>{k + 1}</span><b>{t}</b><small>{d}</small></li>)}</ol>
        </div>
        <aside className="fin__side">
          <LeadForm titulo="Solicita tu estudio de crédito" asunto="Solicitud de crédito – Auteco Valle" boton="Solicitar crédito" initial={{ moto: o.label, inicial: `${pct}% (${pesos(ini)})` }}
            fields={[{ name: 'nombre', label: 'Nombre completo', required: true, full: true }, { name: 'celular', label: 'Celular', type: 'tel', required: true }, { name: 'ciudad', label: 'Ciudad' }, { name: 'moto', label: 'Moto', full: true }, { name: 'inicial', label: 'Cuota inicial' }, { name: 'actividad', label: 'Actividad', type: 'select', options: ['Empleado', 'Independiente', 'Pensionado', 'Otro'] }]} />
          <div className="aliados"><h6>Entidades aliadas</h6><ul>{ALIADOS.map((a) => <li key={a}>{a}</li>)}</ul><a className="link" href={waLink('Hola, quiero conocer los requisitos de crédito.')} target="_blank" rel="noreferrer"><IconWhatsApp width="16" /> Consultar requisitos</a></div>
        </aside>
      </div></section>
    </>
  )
}

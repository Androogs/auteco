import { Link } from 'react-router-dom'
import { MOTOS } from '../data/catalogo.js'
import { SITIO, SEDES, waLink } from '../data/sitio.js'
import { getMarca } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import LeadForm from '../components/LeadForm.jsx'
import { IconWhatsApp, IconPhone, IconMail, IconPin } from '../components/Icons.jsx'

export default function Contacto() {
  const can = [
    [IconWhatsApp, 'WhatsApp', 'Escríbenos ahora', waLink('Hola, necesito información.'), true],
    [IconPhone, 'Teléfono', SITIO.telefono, `tel:${SITIO.telefonoLink}`],
    [IconMail, 'Correo', SITIO.email, `mailto:${SITIO.email}`],
  ]
  return (
    <>
      <PageHead kicker="Hablemos" title="Contacto" crumbs={[{ label: 'Contacto' }]}><p>¿Dudas sobre un modelo, tu crédito o tu mantenimiento? Te respondemos.</p></PageHead>
      <section className="sec sec--tight">
        <div className="wrap contact">
          <div className="contact__ch">
            {can.map(([I, t, v, h, ext]) => <a key={t} href={h} target={ext ? '_blank' : undefined} rel="noreferrer" className="chan"><span className="chan__ic"><I width="22" height="22" /></span><span><small>{t}</small><b>{v}</b></span></a>)}
            <Link to="/sedes" className="chan"><span className="chan__ic"><IconPin width="22" height="22" /></span><span><small>Visítanos</small><b>{SEDES.length} sede en el {SITIO.region}</b></span></Link>
          </div>
          <LeadForm titulo="Escríbenos" asunto="Contacto web – Auteco Valle"
            fields={[{ name: 'nombre', label: 'Nombre completo', required: true }, { name: 'celular', label: 'Celular', type: 'tel', required: true }, { name: 'email', label: 'Correo', type: 'email' },
              { name: 'sede', label: 'Sede de preferencia', type: 'select', options: SEDES.map((s) => s.nombre) },
              { name: 'interes', label: 'Me interesa', type: 'select', options: ['Comprar una moto', 'Financiación', 'Taller', 'Repuestos', 'Garantía', 'Otro'] },
              { name: 'moto', label: 'Modelo', type: 'select', options: MOTOS.map((m) => `${getMarca(m.marca).nombre} ${m.nombre}`).concat('Aún no sé') },
              { name: 'mensaje', label: 'Mensaje', type: 'textarea', full: true }]} />
        </div>
        <div className="wrap" id="datos">
          <details className="legal">
            <summary>Política de tratamiento de datos personales</summary>
            <p>{SITIO.empresa} trata los datos personales suministrados en este sitio para atender solicitudes de cotización, financiación, servicio posventa y contacto comercial, conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013. El titular puede conocer, actualizar, rectificar y suprimir sus datos, o revocar la autorización, escribiendo a {SITIO.email}.</p>
            <p><b>Texto de referencia: reemplazar por la política oficial vigente de SUMOTO S.A.</b></p>
          </details>
        </div>
      </section>
    </>
  )
}

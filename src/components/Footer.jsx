import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { CATEGORIAS, MARCAS } from '../data/catalogo.js'
import { SITIO, SEDES } from '../data/sitio.js'
import { IconFacebook, IconInstagram, IconTiktok, IconPhone, IconMail, IconPin, IconCard, IconWrench, IconTag } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft__perks">
        <div className="wrap ft__perksIn">
          <Link to="/ofertas"><IconTag /> <span><b>Bonos del mes</b><small>Precios vigentes</small></span></Link>
          <Link to="/financiacion"><IconCard /> <span><b>Financiación</b><small>Estudio de crédito ágil</small></span></Link>
          <Link to="/posventa"><IconWrench /> <span><b>Taller y repuestos</b><small>Originales Auteco</small></span></Link>
          <Link to="/sedes"><IconPin /> <span><b>{SEDES.length} sede</b><small>en el {SITIO.region}</small></span></Link>
        </div>
      </div>
      <div className="wrap ft__g">
        <div className="ft__brand">
          <Logo claro />
          <p>{SITIO.empresa} · {SITIO.descriptor} en el {SITIO.region}. Venta de motos, financiación, taller y repuestos.</p>
          <div className="ft__social">
            <a href={SITIO.redes.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFacebook /></a>
            <a href={SITIO.redes.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><IconInstagram /></a>
            <a href={SITIO.redes.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok"><IconTiktok /></a>
          </div>
        </div>
        <div><h6>Marcas</h6><ul>{MARCAS.map((m) => <li key={m.id}><Link to={`/marcas/${m.id}`}>{m.nombre}</Link></li>)}</ul></div>
        <div><h6>Categorías</h6><ul>{CATEGORIAS.map((c) => <li key={c.id}><Link to={`/motos/${c.id}`}>{c.nombre}</Link></li>)}</ul></div>
        <div><h6>Servicios</h6><ul>
          <li><Link to="/ofertas">Ofertas</Link></li><li><Link to="/financiacion">Financiación</Link></li>
          <li><Link to="/posventa">Taller</Link></li><li><Link to="/posventa?s=repuestos">Repuestos</Link></li><li><Link to="/comparar">Comparador</Link></li>
        </ul></div>
        <div><h6>Contacto</h6><ul className="ft__c">
          <li><IconPhone width="16" /> <a href={`tel:${SITIO.telefonoLink}`}>{SITIO.telefono}</a></li>
          <li><IconMail width="16" /> <a href={`mailto:${SITIO.email}`}>{SITIO.email}</a></li>
          <li><IconPin width="16" /> <Link to="/sedes">Ver sede</Link></li>
        </ul></div>
      </div>
      <div className="wrap ft__legal">
        <p>© {new Date().getFullYear()} {SITIO.empresa} Todos los derechos reservados. Sitio de concesionarios autorizados; no es el sitio oficial de Auteco.</p>
        <p>Precios de lista modelo 2027 vigentes, sujetos a cambio sin previo aviso. No incluyen SOAT, matrícula ni impuestos. Bonos sujetos a disponibilidad. Imágenes de referencia.</p>
        <p><Link to="/contacto#datos">Política de tratamiento de datos personales (Ley 1581 de 2012)</Link></p>
      </div>
    </footer>
  )
}

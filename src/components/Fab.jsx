import { waLink } from '../data/sitio.js'
import { IconWhatsApp } from './Icons.jsx'

export default function Fab() {
  return <a className="fab" href={waLink('Hola, vengo de la página de Auteco Valle.')} target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWhatsApp width="26" height="26" /><span>Asesor en línea</span></a>
}

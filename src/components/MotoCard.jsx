import { Link } from 'react-router-dom'
import MotoImagen from './MotoImagen.jsx'
import Precio from './Precio.jsx'
import { getMarca, getCategoria, baseDe, mejorBono, promoDe, pesos, num } from '../utils/catalogo.js'
import { IconArrow } from './Icons.jsx'

export default function MotoCard({ moto, onCompare, comparing }) {
  const marca = getMarca(moto.marca)
  const v = baseDe(moto)
  const bono = mejorBono(moto)
  const promo = promoDe(moto)
  const r = moto.resumen
  return (
    <article className="card" style={{ '--b': marca.color }}>
      <Link to={`/moto/${moto.slug}`} className="card__img" aria-label={`Ver ${marca.nombre} ${moto.nombre}`}>
        {(bono > 0 || promo) && <span className="ribbon">{bono > 0 ? `Bono ${pesos(bono)}` : `Gratis ${promo}`}</span>}
        <MotoImagen moto={moto} />
      </Link>
      <div className="card__body">
        <div className="card__meta"><span className="card__brand"><i />{marca.nombre}</span><span>{getCategoria(moto.categoria).nombre}</span></div>
        <h3><Link to={`/moto/${moto.slug}`}>{moto.nombre}</Link></h3>
        <p className="card__specs">
          {r.cc && <span>{r.cc} cc</span>}{num(r.hp) && <span>{num(r.hp)} hp</span>}
          {moto.versiones.length > 1 && <span className="card__vers">{moto.versiones.length} versiones</span>}
        </p>
      </div>
      <div className="card__foot">
        <Precio v={v} desde={moto.versiones.length > 1} />
        <Link to={`/moto/${moto.slug}`} className="card__go" aria-label="Ver detalle"><IconArrow /></Link>
      </div>
      {onCompare && (
        <label className={`card__cmp ${comparing ? 'is-on' : ''}`}>
          <input type="checkbox" checked={comparing} onChange={() => onCompare(moto.slug)} /> Comparar
        </label>
      )}
    </article>
  )
}

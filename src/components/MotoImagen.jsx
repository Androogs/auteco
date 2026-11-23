import { fotosDe, getMarca } from '../utils/catalogo.js'
import { IconCamera } from './Icons.jsx'

/** Foto del modelo o espacio reservado "Foto próximamente". */
export default function MotoImagen({ moto, i = 0, small = false, eager = false }) {
  const f = fotosDe(moto)
  const marca = getMarca(moto.marca)
  if (f.length) return <img className="mimg" src={f[i] || f[0]} alt={`${marca.nombre} ${moto.nombre}`} loading={eager ? 'eager' : 'lazy'} />
  return (
    <div className={`mimg mimg--ph ${small ? 'mimg--sm' : ''}`} style={{ '--b': marca.color }} role="img" aria-label={`${marca.nombre} ${moto.nombre}: foto pendiente`}>
      <IconCamera className="mimg__ic" />
      {!small && <><b>{moto.nombre}</b><span>Foto próximamente</span></>}
    </div>
  )
}

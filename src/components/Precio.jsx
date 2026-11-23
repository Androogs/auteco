import { pesos, finalDe } from '../utils/catalogo.js'

/** Bloque de precio: lista tachada + bono + precio final. */
export default function Precio({ v, desde = false, grande = false }) {
  const f = finalDe(v)
  return (
    <div className={`precio ${grande ? 'precio--xl' : ''}`}>
      {v.bono > 0 && <s>{pesos(v.precio)}</s>}
      <strong>{desde && <small>Desde </small>}{pesos(f)}{f ? '*' : ''}</strong>
    </div>
  )
}

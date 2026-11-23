import { MOTOS } from '../data/catalogo.js'
import { tienePromo, mejorBono, pesos } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import MotoCard from '../components/MotoCard.jsx'
import { IconTag } from '../components/Icons.jsx'

export default function Ofertas() {
  const lista = MOTOS.filter(tienePromo).sort((a, b) => mejorBono(b) - mejorBono(a))
  const max = Math.max(...lista.map(mejorBono))
  return (
    <>
      <PageHead kicker="Vigentes" title="Ofertas del mes" crumbs={[{ label: 'Ofertas' }]} color="#c8141b"
        aside={<span className="ph__badge ph__badge--red"><IconTag width="30" height="30" /><b>{pesos(max)}</b><small>bono máximo</small></span>}>
        <p>{lista.length} modelos con bono de descuento o beneficio especial. Aplica sobre el precio de lista y hasta agotar existencias.</p>
      </PageHead>
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="grid">{lista.map((m) => <MotoCard key={m.slug} moto={m} />)}</div>
          <p className="fine">Bonos y beneficios según la lista de precios vigente. En modelos con varias versiones el bono puede aplicar solo a algunas: revisa la ficha. Precios sin SOAT, matrícula ni impuestos.</p>
        </div>
      </section>
    </>
  )
}

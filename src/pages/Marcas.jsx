import { Link, useParams } from 'react-router-dom'
import { MARCAS, CATEGORIAS } from '../data/catalogo.js'
import { getMarca, deMarca, desdeLista, pesos, fotosDe } from '../utils/catalogo.js'
import PageHead from '../components/PageHead.jsx'
import MotoCard from '../components/MotoCard.jsx'
import MotoImagen from '../components/MotoImagen.jsx'
import { IconArrow } from '../components/Icons.jsx'
import NoEncontrado from './NoEncontrado.jsx'

export default function Marcas() {
  const { marca } = useParams()
  if (marca) {
    const b = getMarca(marca); if (!b) return <NoEncontrado />
    const l = deMarca(b.id)
    const cats = CATEGORIAS.filter((c) => l.some((m) => m.categoria === c.id))
    return (
      <>
        <PageHead kicker="Marca" title={b.nombre} color={b.color} crumbs={[{ label: 'Marcas', to: '/marcas' }, { label: b.nombre }]} aside={<span className="ph__badge"><b>{l.length}</b><small>{l.length === 1 ? 'modelo' : 'modelos'}</small></span>}>
          <p>{b.lema} Desde {pesos(desdeLista(l))}*.</p>
        </PageHead>
        <section className="sec sec--tight">
          <div className="wrap">
            <div className="pills">{MARCAS.map((m) => <Link key={m.id} to={`/marcas/${m.id}`} className={m.id === b.id ? 'is-on' : ''}>{m.nombre}</Link>)}</div>
            {cats.map((c) => (
              <div key={c.id} className="group"><h2 className="t-h3">{c.nombre} <small>{l.filter((m) => m.categoria === c.id).length}</small></h2>
                <div className="grid">{l.filter((m) => m.categoria === c.id).map((m) => <MotoCard key={m.slug} moto={m} />)}</div></div>
            ))}
          </div>
        </section>
      </>
    )
  }
  return (
    <>
      <PageHead kicker="Portafolio Auteco" title="Nuestras marcas" crumbs={[{ label: 'Marcas' }]}><p>Cinco marcas en nuestros concesionarios del Valle del Cauca.</p></PageHead>
      <section className="sec sec--tight">
        <div className="wrap brands">
          {MARCAS.map((b) => { const l = deMarca(b.id); const top = [...l].sort((x, y) => fotosDe(y).length - fotosDe(x).length).slice(0, 3); return (
            <Link key={b.id} to={`/marcas/${b.id}`} className="brand" style={{ '--b': b.color }}>
              <div className="brand__head"><h2>{b.nombre}</h2><span>{l.length} {l.length === 1 ? 'modelo' : 'modelos'}</span></div>
              <p>{b.lema}</p>
              <div className="brand__imgs">{top.map((m) => <MotoImagen key={m.slug} moto={m} small />)}</div>
              <div className="brand__foot"><span>Desde <b>{pesos(desdeLista(l))}*</b></span><span className="brand__go"><IconArrow /></span></div>
            </Link>) })}
        </div>
      </section>
    </>
  )
}

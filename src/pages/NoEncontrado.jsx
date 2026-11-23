import { Link } from 'react-router-dom'

export default function NoEncontrado() {
  return (
    <section className="nf"><div className="wrap">
      <span className="nf__c">404</span>
      <h1 className="t-h2">Esta ruta no está en el mapa</h1>
      <p>La página que buscas no existe o cambió de dirección.</p>
      <Link to="/" className="btn btn--red">Volver al inicio</Link>
    </div></section>
  )
}

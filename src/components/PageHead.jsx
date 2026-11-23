import { Link } from 'react-router-dom'

export default function PageHead({ kicker, title, children, crumbs = [], aside, color }) {
  return (
    <section className="ph" style={color ? { '--b': color } : undefined}>
      <div className="wrap">
        <nav className="crumbs" aria-label="Ruta">
          <Link to="/">Inicio</Link>
          {crumbs.map((c) => (c.to ? <Link key={c.label} to={c.to}>{c.label}</Link> : <span key={c.label}>{c.label}</span>))}
        </nav>
        <div className="ph__in">
          <div>
            {kicker && <span className="kicker">{kicker}</span>}
            <h1 className="t-h1">{title}</h1>
            {children && <div className="ph__lead">{children}</div>}
          </div>
          {aside && <div className="ph__aside">{aside}</div>}
        </div>
      </div>
    </section>
  )
}

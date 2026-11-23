import { Link } from 'react-router-dom'
import { SITIO } from '../data/sitio.js'

export default function Logo({ claro = false }) {
  return (
    <Link 
      to="/" 
      className={`logo ${claro ? 'logo--claro' : ''}`} 
      aria-label={`${SITIO.nombre} – inicio`}
      style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <img 
        src="/Auteco_logo.jpg" 
        alt={SITIO.nombre} 
        style={{ height: '42px', width: 'auto', objectFit: 'contain', flexShrink: 0 }}
      />
      <span 
        style={{ 
          width: '1px', 
          height: '32px', 
          background: claro ? '#fff' : '#d0d0d0',
          display: 'inline-block',
          verticalAlign: 'middle',
          margin: '0 8px',
          flexShrink: 0
        }} 
      />
      {claro ? (
        <img 
          src="/sumoto_logo_blanco.png" 
          alt="SUMOTO S.A." 
          style={{ height: '45px', width: 'auto', objectFit: 'contain', display: 'block', flexShrink: 0 }}
        />
      ) : (
        <img 
          src="/sumoto_logo.png" 
          alt="SUMOTO S.A." 
          style={{ height: '155px', width: 'auto', objectFit: 'contain', display: 'block', flexShrink: 0 }}
        />
      )}
    </Link>
  )
}
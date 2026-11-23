import { CATEGORIAS, MARCAS, MOTOS } from '../data/catalogo.js'

// Fotos detectadas automáticamente en src/assets/motos/<slug>/*
const archivos = import.meta.glob('/src/assets/motos/*/*.{webp,png,jpg,jpeg}', { eager: true, import: 'default' })
const FOTOS = {}
Object.keys(archivos).sort().forEach((ruta) => {
  const slug = ruta.split('/')[4]
  ;(FOTOS[slug] ||= []).push(archivos[ruta])
})
export const fotosDe = (m) => FOTOS[m.slug] || []

export const pesos = (n) => (n == null ? 'Consulta el precio' : '$' + n.toLocaleString('es-CO'))
export const finalDe = (v) => (v.precio ? v.precio - (v.bono || 0) : null)
/** Versión más económica (precio con bono). */
export const baseDe = (m) => [...m.versiones].sort((a, b) => (finalDe(a) ?? 9e12) - (finalDe(b) ?? 9e12))[0]
export const desdeDe = (m) => finalDe(baseDe(m))
export const mejorBono = (m) => Math.max(0, ...m.versiones.map((v) => v.bono || 0))
export const tienePromo = (m) => mejorBono(m) > 0 || m.versiones.some((v) => v.promo)
export const promoDe = (m) => m.versiones.find((v) => v.promo)?.promo

export const getMoto = (s) => MOTOS.find((m) => m.slug === s)
export const getMarca = (id) => MARCAS.find((m) => m.id === id)
export const getCategoria = (id) => CATEGORIAS.find((c) => c.id === id)
export const deMarca = (id) => MOTOS.filter((m) => m.marca === id)
export const deCategoria = (id) => MOTOS.filter((m) => m.categoria === id)
export const ccNum = (m) => parseFloat(String(m.resumen.cc || 0).replace(',', '.'))
export const desdeLista = (l) => { const p = l.map(desdeDe).filter(Boolean); return p.length ? Math.min(...p) : null }
export const num = (s) => { const r = /(\d+(?:[.,]\d+)?)/.exec(s || ''); return r ? r[1].replace('.', ',') : null }

/** Banners del inicio (edítalos: slug + titular). */
export const BANNERS = [
  { slug: 'tvs-apache-rtr-160-4v', titulo: 'Velocidad que se siente', texto: 'La Apache RTR 160 4V con tres versiones, incluida la Racing Duo Tono.' },
  { slug: 'victory-bet-adv', titulo: 'Nueva Bet ADV', texto: 'Scooter aventurera con baúl y parabrisas alto. Llegó a nuestras vitrinas.' },
  { slug: 'kymco-agility-fusion', titulo: 'Agility Fusion con bono', texto: 'Automática práctica y moderna, con bono de descuento este mes.' },
  { slug: 'zontes-200-u1', titulo: 'Zontes 200 U1', texto: 'Tecnología premium en 200 cc. Te regalamos SOAT y matrícula.' },
]
export const DESTACADAS = ['tvs-raider-125', 'victory-mrx-125', 'tvs-ntorq-125', 'victory-bet-abs', 'tvs-apache-160-fi-ng', 'victory-advance-r-125', 'tvs-sport-100-els', 'victory-switch-125']

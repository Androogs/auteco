/**
 * DATOS DE LOS CONCESIONARIOS – EDITA AQUÍ
 */
export const SITIO = {
  empresa: 'SUMOTO S.A.',
  nombre: 'Auteco Valle',
  descriptor: 'Concesionarios autorizados Auteco',
  region: 'Valle del Cauca',
  whatsapp: '573105582085',
  telefono: '3105582308',
  telefonoLink: '+573105582308',
  email: '',
  redes: {
    facebook: '',
    instagram: '',
    tiktok: '',
  },
}

/** Una entrada por cada punto de venta del Valle. `mapa` = texto para Google Maps. */
export const SEDES = [
  { id: 'sede-1', nombre: 'AUTECO SUMOTO CALI', ciudad: 'Cali', direccion: 'Cra 1 # 42-03', telefono: '3105582308', whatsapp: '573105582085', horario: ['Lunes a domingo: 8:30 a.m. – 6:00 p.m.'], servicios: ['Venta', 'Taller', 'Repuestos', 'Estudio de crédito'], mapa: 'https://www.google.com/maps/place/Cra.+1+%2342-03,+COMUNA+4,+Cali,+Valle+del+Cauca/@3.4692015,-76.5139065,17z/data=!3m1!4b1!4m6!3m5!1s0x8e30a630e00ae745:0x3e61ad4246d1f319!8m2!3d3.4692015!4d-76.5113316!16s%2Fg%2F11pw1y2b1_?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D' },
]

export const waLink = (mensaje = '', numero = SITIO.whatsapp) => `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`

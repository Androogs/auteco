# Auteco Valle – SUMOTO S.A.

Sitio web multipágina para los concesionarios Auteco de SUMOTO S.A. en el Valle del Cauca.
Stack: React 18 + Vite 5 + React Router 6. Fuentes Archivo e Inter auto-hospedadas con `@fontsource`, sin CDN.

## Arranque

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera /dist para publicar
npm run preview    # prueba local del build
```

El sitio usa rutas SPA. Ya vienen las reglas de reescritura para el hosting:

| Hosting | Archivo |
|---|---|
| Vercel | `vercel.json` |
| Netlify | `public/_redirects` |
| Apache / cPanel | `public/.htaccess` |

## Pestañas (una por ítem del menú)

| Ruta | Página |
|---|---|
| `/` | Inicio: carrusel de campañas, marcas, categorías, ofertas y destacadas |
| `/motos` y `/motos/:categoria` | Catálogo con filtros (marca, precio, solo con bono), búsqueda, orden y comparador |
| `/ofertas` | Modelos con bono o beneficio |
| `/marcas` y `/marcas/:marca` | TVS, Victory, Kymco, Ceronte, Zontes |
| `/moto/:slug` | Ficha: galería, versiones, precio con bono, ficha técnica, prueba de manejo |
| `/comparar` | Hasta 3 modelos lado a lado |
| `/financiacion` | Simulador de cuota inicial y solicitud de crédito |
| `/posventa` | Taller, repuestos y garantía |
| `/sedes` | Puntos de venta en el Valle |
| `/contacto` | Canales y formulario |

Todos los formularios abren WhatsApp con el mensaje armado e incluyen la autorización de datos (Ley 1581 de 2012). No se guarda información en ningún servidor.

## Dónde editar

| Qué | Archivo |
|---|---|
| Modelos, versiones, precios, bonos, specs, colores | `src/data/catalogo.js` |
| WhatsApp, teléfono, correo, redes, sedes, vigencia de precios | `src/data/sitio.js` |
| Banners del Inicio (`BANNERS`) y "Las más buscadas" (`DESTACADAS`) | `src/utils/catalogo.js` |
| Colores, tipografía y estilos | `src/styles/global.css` (variables en `:root`) |
| Logo | `src/components/Logo.jsx`: pon el logo oficial en `public/brand/logo.svg` y cambia `USAR_LOGO_OFICIAL = true` |

Precios: `precio` es el valor de lista del modelo 2027 y `bono` es el descuento. El precio mostrado es `precio - bono`. Si no hay bono, usa `bono: 0`. Para beneficios que no son dinero (p. ej. Zontes "SOAT + matrícula"), usa `promo: 'texto'`.

## Cómo agregar las fotos que faltan

1. Cada modelo tiene su carpeta en `src/assets/motos/<slug>/`.
2. Copia las imágenes allí con nombres `01.webp`, `02.webp`, … (también sirven `.png` y `.jpg`). La `01` es la principal.
3. El sitio las detecta solo. Mientras la carpeta esté vacía se muestra el aviso "Foto próximamente".

Recomendado: fondo transparente, 1200 × 800 px, formato WebP.

**Modelos sin foto (carpetas vacías, con un `LEEME.txt`):**

- TVS: `tvs-sport-110-fi`, `tvs-ntorq-125`, `tvs-dazz-110`, `tvs-apache-200-carb-abs`, `tvs-apache-rtr-200-4v`
- Victory: `victory-mrx-125-s`, `victory-mrx-150`, `victory-mrx-200`, `victory-mrx-arizona`

**Carpeta `fotos-por-asignar/`.** Fotos del paquete que no se pudieron asignar con certeza. Muévelas a la carpeta correcta o descártalas:

| Foto | Situación |
|---|---|
| #54–56 | Son MRX 150, 200 o Arizona; falta identificarlas |
| #12 | Apache 160 FI Racing gris humo; validar si corresponde a la versión Racing Duo Tono |
| #11 | Apache 160 FI ABS Edición Especial; no está en la lista de precios |
| #17 y #18 | Apache RTR 310; no está en la lista de precios |

Esta carpeta no forma parte del build.

## Pendientes antes de publicar

- [ ] Datos reales de las sedes, WhatsApp, teléfonos, correo y redes. Todo lo marcado `POR CONFIRMAR` está en `src/data/sitio.js`.
- [ ] Logo oficial y colores exactos de marca. Los colores actuales son aproximados.
- [ ] Financiación:
  - Las entidades aliadas son marcadores.
  - La tasa está desactivada (`TASA_MENSUAL = null` en `src/pages/Financiacion.jsx`), así que el simulador solo calcula la cuota inicial y no muestra cuotas mensuales.
- [ ] Fichas técnicas:
  - Son de referencia pública (fuente indicada en cada ficha); validar con la ficha oficial Auteco.
  - Victory Bet ADV, TVS Sport 110 FI, Ntorq 125 y otros modelos aparecen sin ficha.
- [ ] Notas por confirmar, que se muestran en la ficha del modelo:
  - Apache RTR 160 4V Racing Duo Tono
  - King Deluxe Pasajero
  - Colores de la MRX 125
  - Foto de la Switch 125
- [ ] Promoción Zontes 200 U1 (SOAT + matrícula): confirmar condiciones.
- [ ] Vigencia de precios: octubre de 2026 (`vigenciaPrecios` en `sitio.js`). Actualizar cada mes.
- [ ] Texto de la política de tratamiento de datos: revisar con el área jurídica.

Fuente de precios: lista "PRECIOS OCTUBRE BAJAJ AUTECO", hoja AUTECO 2027 (64 referencias, 35 modelos).

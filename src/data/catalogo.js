/**
 * CATÁLOGO – Concesionarios Auteco en el Valle del Cauca (SUMOTO S.A.)
 * ------------------------------------------------------------------
 * PRECIOS: lista "AUTECO 2027" (precios de octubre) entregada por el jefe comercial.
 *   - precio: precio de lista modelo 2027
 *   - bono:   bono de descuento (0 si no tiene)
 *   - promo:  beneficio en texto cuando no es dinero (ej. "SOAT + Matrícula")
 *   - ref:    nombre exacto de la fila en el Excel (para cruzar al actualizar)
 *   Los precios NO incluyen SOAT, matrícula ni impuestos.
 *
 * FICHAS TÉCNICAS: referencia pública de distribuidores Auteco (ver `fuente`).
 *   Valídalas con la ficha oficial antes de publicar.
 *
 * FOTOS: src/assets/motos/<slug>/01.webp, 02.webp… (también .png/.jpg).
 *   El sitio las detecta solas. Si la carpeta está vacía se muestra un espacio
 *   "Foto próximamente". La primera foto es la principal.
 */
export const MARCAS = [
  {
    "id": "tvs",
    "nombre": "TVS",
    "color": "#1b3c8c",
    "lema": "Ingeniería con alma deportiva: Apache, Raider, Ntorq, Neo, Sport y los motocarros King."
  },
  {
    "id": "victory",
    "nombre": "Victory",
    "color": "#d6141d",
    "lema": "La marca colombiana de Auteco: MRX, Bet, Advance, Nitro, Switch y más para el día a día."
  },
  {
    "id": "kymco",
    "nombre": "Kymco",
    "color": "#0067b1",
    "lema": "Scooters automáticas de diseño, prácticas y eficientes."
  },
  {
    "id": "ceronte",
    "nombre": "Ceronte",
    "color": "#e5820c",
    "lema": "Motocarros robustos para mover tu negocio."
  },
  {
    "id": "zontes",
    "nombre": "Zontes",
    "color": "#2a2f36",
    "lema": "Tecnología y desempeño premium en media cilindrada."
  }
]

export const CATEGORIAS = [
  {
    "id": "urbanas",
    "nombre": "Urbanas",
    "lema": "Económicas y confiables para el día a día"
  },
  {
    "id": "deportivas",
    "nombre": "Deportivas",
    "lema": "Diseño agresivo y desempeño"
  },
  {
    "id": "automaticas",
    "nombre": "Automáticas",
    "lema": "Scooters sin cambios, comodidad total"
  },
  {
    "id": "semiautomaticas",
    "nombre": "Semiautomáticas",
    "lema": "Fáciles de manejar desde el primer día"
  },
  {
    "id": "doble-proposito",
    "nombre": "Doble propósito",
    "lema": "Del asfalto a la trocha"
  },
  {
    "id": "motocarros",
    "nombre": "Motocarros",
    "lema": "Trabajo y pasajeros"
  }
]

export const MOTOS = [
  {
    "slug": "tvs-raider-125",
    "marca": "tvs",
    "nombre": "Raider 125",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "SBT",
        "ref": "RAIDER 125 SBT",
        "precio": 7799999,
        "bono": 300000,
        "promo": null
      },
      {
        "nombre": "TK",
        "ref": "RAIDER 125 TK",
        "precio": 7999999,
        "bono": 300000,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,79",
      "hp": "12,73",
      "nm": "11,5",
      "tanque": "10 l (2.64 gal)"
    },
    "colores": [
      "Verde Slate"
    ],
    "destacados": [
      "Carenaje agresivo deportivo",
      "12.73 HP @ 8000 rpm",
      "Posición de manejo deportiva",
      "Arranque eléctrico ISG"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124.79 CC",
        "Potencia máxima": "12.73 HP @ 8000 rpm",
        "Torque máximo": "11.5 Nm @ 6500 rpm",
        "Diámetro × carrera": "53.5 x 55.5 mm",
        "Relación de compresión": "10.0:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "TCI",
        "Arranque": "Eléctrico ISG",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco (240 mm), pinza flotante de 2 émbolos",
        "Freno trasero": "Tambor (130 mm)",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Monoamortiguador con ajuste de precarga",
        "Llanta delantera": "80/100 - R17 46P",
        "Llanta trasera": "100/90 - R17 65P",
        "Rines": "Aspas",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2067 mm",
        "Ancho": "767 mm",
        "Alto": "1236 mm",
        "Distancia entre ejes": "1326 mm",
        "Altura del sillín": "781 mm",
        "Tanque": "10 l (2.64 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-raider-125/"
  },
  {
    "slug": "tvs-raider-125-fi",
    "marca": "tvs",
    "nombre": "Raider 125 FI",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "FI",
        "ref": "RAIDER 125 FI",
        "precio": 8199999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,8",
      "hp": "11,22",
      "nm": "11,2",
      "tanque": "10 l (2.64 gal)"
    },
    "colores": [
      "Negro Gris"
    ],
    "destacados": [
      "Tecnología FI inyección electrónica",
      "11.22 HP @ 7500 rpm",
      "Arranque eléctrico ISG",
      "Tanque 10 litros"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "Monocilíndrico, 4 Tiempos",
        "Cilindraje": "124.8 cc",
        "Potencia máxima": "11.22 HP @ 7500 rpm",
        "Torque máximo": "11.2 Nm @ 6000 rpm",
        "Diámetro × carrera": "53.5 x 55.5 mm",
        "Relación de compresión": "10.3:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico ISG",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco de 240 mm, SBT",
        "Freno trasero": "Tambor de 130 mm, SBT",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Monoamortiguador",
        "Llanta delantera": "80/100-17 Tubeless",
        "Llanta trasera": "100/90-17 Tubeless",
        "Rines": "Aspas",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2070 mm",
        "Ancho": "785 mm",
        "Alto": "1028 mm",
        "Distancia entre ejes": "1326 mm",
        "Altura del sillín": "180 mm",
        "Tanque": "10 l (2.64 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-raider-125-fi/"
  },
  {
    "slug": "tvs-raider-125-racing",
    "marca": "tvs",
    "nombre": "Raider 125 Racing",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "Racing SBT",
        "ref": "RAIDER 125 RACING SBT",
        "precio": 8049999,
        "bono": 300000,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,79",
      "hp": "12,73",
      "nm": "11,5",
      "tanque": "10 l (2.64 gal)"
    },
    "colores": [
      "Gris Rojo"
    ],
    "destacados": [
      "12.73 HP @ 8000 rpm",
      "Rines rojos exclusivos (Aspas)",
      "Diseño Racing Special Edition 2027",
      "Motor 4 tiempos monocilíndrico"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 TIEMPOS, MONOCILÍNDRICO",
        "Cilindraje": "124.79 cc",
        "Potencia máxima": "12.73 HP @ 8000 rpm",
        "Torque máximo": "11.5 Nm @ 6500 rpm",
        "Diámetro × carrera": "53.5 x 55.5 mm",
        "Relación de compresión": "10.0:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "TCI",
        "Arranque": "Eléctrico ISG",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "DISCO (240 MM), PINZA FLOTANTE DE 2 ÉMBOLOS",
        "Freno trasero": "TAMBOR (130 MM)",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Monoamortiguador con ajuste de precarga",
        "Llanta delantera": "80/100 - R17 46P",
        "Llanta trasera": "100/90 - R17 65P",
        "Rines": "Aspas",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2067 mm",
        "Ancho": "767 mm",
        "Alto": "1236 mm",
        "Distancia entre ejes": "1326 mm",
        "Altura del sillín": "781 mm",
        "Tanque": "10 l (2.64 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-raider-racing-special-edition/"
  },
  {
    "slug": "tvs-sport-100-els",
    "marca": "tvs",
    "nombre": "Sport 100 ELS",
    "categoria": "urbanas",
    "versiones": [
      {
        "nombre": "ELS",
        "ref": "SPORT 100 ELS",
        "precio": 5749999,
        "bono": 500000,
        "promo": null
      },
      {
        "nombre": "ELS AS TK",
        "ref": "SPORT ELS AS TK",
        "precio": 5999999,
        "bono": 500000,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "99,7",
      "hp": "7,38",
      "nm": "7,5",
      "tanque": "11 L (2.64 GAL)"
    },
    "colores": [
      "Negro Azul",
      "Negro Gris"
    ],
    "destacados": [
      "Motor 99cc con tecnología Duralife",
      "Transporte confiable y eficiente",
      "Insignia en calidad, economía y comodidad",
      "Respaldo AUTECO"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "99.7 cc",
        "Potencia máxima": "7.38 HP @ 7500 rpm",
        "Torque máximo": "7.5 Nm @ 5000 rpm",
        "Diámetro × carrera": "51 X 48.8 mm",
        "Relación de compresión": "9.15:1",
        "Transmisión": "Mecánica 4 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "TCI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Tambor, 130 mm",
        "Freno trasero": "Tambor, 110 mm",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "2.75 X 17\" 41P 4PR",
        "Llanta trasera": "3-17 50P 6PR",
        "Rines": "Aspas",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1950 mm",
        "Ancho": "705 mm",
        "Alto": "1080 mm",
        "Distancia entre ejes": "1236 mm",
        "Altura del sillín": "780 mm",
        "Tanque": "11 L (2.64 GAL)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-sport-100-els/"
  },
  {
    "slug": "tvs-sport-100-kls",
    "marca": "tvs",
    "nombre": "Sport 100 KLS Spoke",
    "categoria": "urbanas",
    "versiones": [
      {
        "nombre": "KLS Spoke",
        "ref": "SPORT KLS SPOKE",
        "precio": 4999999,
        "bono": 500000,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "99,7",
      "hp": "7,38",
      "nm": "7,5",
      "tanque": "10 l (2.64 gal)"
    },
    "colores": [
      "Negro Nebulosa Gris",
      "Negro Nebulosa Roja"
    ],
    "destacados": [
      "Sistema de frenado conjunto CBS",
      "SOAT más económico del mercado",
      "Motor 4 tiempos monocilíndrico",
      "Caja mecánica 4 velocidades"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico, SOHC",
        "Cilindraje": "99.7 cc",
        "Potencia máxima": "7.38 HP @ 7500 rpm",
        "Torque máximo": "7.5 Nm @ 5000 rpm",
        "Diámetro × carrera": "51 x 48.8 mm",
        "Relación de compresión": "9.15:1",
        "Transmisión": "Mecánica 4 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "TCI",
        "Arranque": "Pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Tambor, 130 mm",
        "Freno trasero": "Tambor, 110 mm",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "2.75 x 17\" 41P 4PR",
        "Llanta trasera": "3-17 50P 6PR",
        "Rines": "Radios",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1950 mm",
        "Ancho": "705 mm",
        "Alto": "1080 mm",
        "Distancia entre ejes": "1236 mm",
        "Altura del sillín": "780 mm",
        "Tanque": "10 l (2.64 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-sport-100-kls/"
  },
  {
    "slug": "tvs-sport-110-fi",
    "marca": "tvs",
    "nombre": "Sport 110 FI",
    "categoria": "urbanas",
    "versiones": [
      {
        "nombre": "FI",
        "ref": "SPORT 110 FI",
        "precio": 6199999,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "FI TK",
        "ref": "SPORT 110 FI TK",
        "precio": 6599999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "hp": "8,1",
      "nm": "8,4",
      "tanque": "10 LT (2,64 GAL)",
      "peso": "114"
    },
    "colores": [
      "Negro Nebulosa Gris",
      "Gris Grafito",
      "Negro Nebulosa Azul"
    ],
    "destacados": [
      "Motor 4T monocilíndrico 109,7cc",
      "Inyección electrónica",
      "Peso ligero 114 kg",
      "Suspensión regulable 5 posiciones"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4T MONOCILÍNDRICO",
        "Potencia máxima": "8,1 hp @7350 rpm",
        "Torque máximo": "8,4 NM @ 4500 RPM",
        "Diámetro × carrera": "53,5 X 48,8 MM",
        "Relación de compresión": "10:1",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Aire",
        "Encendido": "ECU",
        "Arranque": "Eléctrico",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "DISCO 240 MM",
        "Freno trasero": "CAMPANA 110 MM",
        "Suspensión delantera": "TELESCOPICA HIDRÁULICA",
        "Suspensión trasera": "DOBLE AMORTIGUADOR TRASERO REGULABLE EN 5 POSICIONES",
        "Llanta delantera": "2.75 - 17 41P 4PR",
        "Llanta trasera": "3.00 - 17 50P 6PR",
        "Rines": "Aspas de Aleación"
      },
      "Dimensiones": {
        "Largo": "1950 MM",
        "Ancho": "705 MM",
        "Alto": "1080 MM",
        "Distancia entre ejes": "1236 MM",
        "Altura del sillín": "1236 MM",
        "Peso": "114 KG",
        "Tanque": "10 LT (2,64 GAL)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tsv-sport-110-fi/"
  },
  {
    "slug": "tvs-neo-nx-110",
    "marca": "tvs",
    "nombre": "Neo NX 110",
    "categoria": "semiautomaticas",
    "versiones": [
      {
        "nombre": "SBT",
        "ref": "NEO NX 110 SBT",
        "precio": 6399999,
        "bono": 300000,
        "promo": null
      },
      {
        "nombre": "TK",
        "ref": "NEO NX 110 TK",
        "precio": 6699999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "109,7",
      "hp": "8,44",
      "nm": "8,5",
      "tanque": "4L (1.06 GAL)"
    },
    "colores": [
      "Gris Nardo Azul",
      "Negro Mate Dorado"
    ],
    "destacados": [
      "Diseño moderno y estilo característico",
      "Potente y económica",
      "Motor 4 tiempos, monocilíndrico",
      "8.44 HP @ 7500 rpm"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "109.7 CC",
        "Potencia máxima": "8.44 HP @ 7500 rpm",
        "Torque máximo": "8.5 Nm @ 4500 rpm",
        "Diámetro × carrera": "53.5 X 48.8 mm",
        "Relación de compresión": "9.35:1",
        "Transmisión": "Semi-automática",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco (220 mm) pinza flotante de 1 émbolo",
        "Freno trasero": "Tambor (110 mm)",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "2.5 X R17 O 70/90 R17",
        "Llanta trasera": "2.75 X R17 O 80/90 R17",
        "Rines": "Aspas de Aleación",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1915 mm",
        "Ancho": "665 mm",
        "Alto": "1100 mm",
        "Distancia entre ejes": "1260 mm",
        "Altura del sillín": "760 mm",
        "Tanque": "4L (1.06 GAL)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-neo-nx-110/"
  },
  {
    "slug": "tvs-neo-125-fi",
    "marca": "tvs",
    "nombre": "Neo 125 FI",
    "categoria": "semiautomaticas",
    "versiones": [
      {
        "nombre": "FI",
        "ref": "NEO 125 FI",
        "precio": 7999999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,5",
      "hp": "9,25",
      "nm": "9,3",
      "tanque": "4,6 Lt",
      "peso": "106"
    },
    "colores": [
      "Gris"
    ],
    "destacados": [
      "Inyección electrónica",
      "Semiautomática 4 velocidades",
      "Peso ligero 106 kg",
      "Arranque eléctrico y pedal"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 Tiempos monocilíndrico",
        "Cilindraje": "124,5 cc",
        "Potencia máxima": "9,25 HP @ 8000 rpm",
        "Torque máximo": "9,3 Nm @ 6000 rpm",
        "Diámetro × carrera": "57,0 x 48,8 mm",
        "Relación de compresión": "9,7:1",
        "Transmisión": "Semiautomática 4 velocidades",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 220 mm",
        "Freno trasero": "Campana 130 mm",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Telescópica hidráulica",
        "Llanta delantera": "70/90-17",
        "Llanta trasera": "80/90-17"
      },
      "Dimensiones": {
        "Largo": "1940 mm",
        "Ancho": "700 mm",
        "Alto": "1098 mm",
        "Distancia entre ejes": "1260 mm",
        "Altura del sillín": "767 mm",
        "Peso": "106 kg",
        "Tanque": "4,6 Lt"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-neo-nx-125-fi/"
  },
  {
    "slug": "tvs-ntorq-125",
    "marca": "tvs",
    "nombre": "Ntorq 125 XConnect",
    "categoria": "automaticas",
    "versiones": [
      {
        "nombre": "SBT",
        "ref": "NTORQ 125 XCONNECT SBT",
        "precio": 8199999,
        "bono": 300000,
        "promo": null
      },
      {
        "nombre": "Edición Especial SBT",
        "ref": "NTORQ 125 XCONNECT ED ESPECIAL SBT",
        "precio": 8449999,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "XC TK",
        "ref": "NTORQ 125 XC TK",
        "precio": 8499999,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "FI",
        "ref": "NTORQ 125 XCONNECT FI",
        "precio": 10199999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,79",
      "hp": "9,25",
      "nm": "10,5",
      "tanque": "5 L (1.32 GAL)"
    },
    "colores": [
      "Negro Mate - Dorado",
      "Negro Mate Gris Carbono - Verde Neón"
    ],
    "destacados": [
      "Tecnología SmartXConnect",
      "Scooter conectada más deportiva",
      "Motor 4 tiempos monocilíndrico",
      "Transmisión automática"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124.79 CC",
        "Potencia máxima": "9.25 @ 7500 rpm",
        "Torque máximo": "10.5 Nm @ 5500 rpm",
        "Diámetro × carrera": "53.5 X 55.5 mm",
        "Relación de compresión": "9.8:1",
        "Transmisión": "Automática",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire forzado",
        "Encendido": "TCI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco (220 mm) pinza fija de 1 émbolo",
        "Freno trasero": "Tambor (130 mm)",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Monoamortiguador",
        "Llanta delantera": "100/80 R12",
        "Llanta trasera": "110/80 R12",
        "Rines": "Aspas de aleación",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1865 mm",
        "Ancho": "710 mm",
        "Alto": "1160 mm",
        "Distancia entre ejes": "1285 mm",
        "Altura del sillín": "790 mm",
        "Tanque": "5 L (1.32 GAL)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-ntorq-125/"
  },
  {
    "slug": "tvs-dazz-110",
    "marca": "tvs",
    "nombre": "Dazz 110",
    "categoria": "automaticas",
    "versiones": [
      {
        "nombre": "Dazz 110",
        "ref": "DAZZ 110",
        "precio": 6499999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "109,7",
      "hp": "7,9",
      "nm": "8,3",
      "tanque": "5,3 L (1,4 GAL)"
    },
    "colores": [
      "Gris Grafito Azul",
      "Negro Mate Roja"
    ],
    "destacados": [
      "Scooter slim urbana compacta",
      "Motor 4 tiempos de 7.9 HP",
      "Transmisión automática",
      "Control y facilidad en la ciudad"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "109.7 CC",
        "Potencia máxima": "7,9 HP @ 7500 rpm",
        "Torque máximo": "8.3 Nm @ 5500 rpm",
        "Diámetro × carrera": "53,5 x 48,8 mm",
        "Relación de compresión": "9.5:1",
        "Transmisión": "Automática",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "TCI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Tambor o campana",
        "Suspensión delantera": "TVS Telescópica",
        "Suspensión trasera": "Mono amortiguador",
        "Llanta delantera": "MA-3DN",
        "Llanta trasera": "MA-3DN",
        "Rines": "Aspas",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1810 mm",
        "Ancho": "670 mm",
        "Alto": "1119 mm",
        "Distancia entre ejes": "1250 mm",
        "Altura del sillín": "780 mm",
        "Tanque": "5,3 L (1,4 GAL)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-dazz-110/"
  },
  {
    "slug": "tvs-apache-160-carb-abs",
    "marca": "tvs",
    "nombre": "Apache 160 Carburada ABS",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "Carb ABS",
        "ref": "APACHE 160 CARB ABS",
        "precio": 9649999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "159,7",
      "hp": "16,3",
      "nm": "14,8",
      "tanque": "12 L (3.17 GAL)",
      "peso": "145"
    },
    "colores": [
      "Gris Humo Azul",
      "Negro Verde"
    ],
    "destacados": [
      "Motor 4 tiempos monocilíndrico",
      "Frenos ABS disco delantero y trasero",
      "Caja mecánica 5 velocidades",
      "Suspensión trasera ajustable en precarga"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "159.7 CC",
        "Potencia máxima": "16.3 HP @ 8000 rpm",
        "Torque máximo": "14.8 Nm @ 6500 RPM",
        "Diámetro × carrera": "62 X 52.9 mm",
        "Relación de compresión": "10.15:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire/Aceite",
        "Encendido": "TCI",
        "Arranque": "Eléctrico",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco (270 mm), pinza flotante de 2 émbolos",
        "Freno trasero": "Disco (200 mm), pinza flotante de 1 émbolo",
        "Suspensión delantera": "Horquilla telescópica",
        "Suspensión trasera": "Monoamortiguador, ajustable en precarga",
        "Llanta delantera": "90/90 R17",
        "Llanta trasera": "130/70 R17",
        "Rines": "Aspas",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2050 mm",
        "Ancho": "790 mm",
        "Alto": "1050 mm",
        "Distancia entre ejes": "1357 mm",
        "Altura del sillín": "810 mm",
        "Peso": "145 KG",
        "Tanque": "12 L (3.17 GAL)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-apache-160-carburada-abs/"
  },
  {
    "slug": "tvs-apache-200-carb-abs",
    "marca": "tvs",
    "nombre": "Apache 200 Carburada ABS",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "Carb ABS",
        "ref": "APACHE 200 CARB ABS",
        "precio": 12199999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "197,75",
      "hp": "20,24",
      "nm": "18,1",
      "tanque": "12 l (3.17 gal)"
    },
    "colores": [
      "Negro Mate - Dorado",
      "Negro Mate - Roja"
    ],
    "destacados": [
      "Motor 4T monocilíndrico 20.24 HP",
      "Frenos ABS delantero y trasero",
      "Suspensión Kayaba ajustable",
      "Tanque 12L, arranque eléctrico"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "197.75 CC",
        "Potencia máxima": "20.24 HP @ 8000 rpm",
        "Torque máximo": "18.1 Nm @ 7000 rpm",
        "Diámetro × carrera": "66 x 57.8 mm",
        "Relación de compresión": "9.7:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire/Aceite",
        "Encendido": "TCI",
        "Arranque": "Eléctrico",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 270mm, pinza flotante 2 émbolos",
        "Freno trasero": "Disco 240mm, pinza flotante 1 émbolo",
        "Suspensión delantera": "Horquilla telescópica Kayaba, 105mm recorrido",
        "Suspensión trasera": "Monoamortiguador Kayaba, ajustable precarga",
        "Llanta delantera": "90/90 R17",
        "Llanta trasera": "130/70 R17",
        "Rines": "Aspas de Aleación"
      },
      "Dimensiones": {
        "Largo": "2050 mm",
        "Ancho": "790 mm",
        "Alto": "1080 mm",
        "Distancia entre ejes": "1353 mm",
        "Altura del sillín": "800 mm",
        "Tanque": "12 l (3.17 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-apache-200-carburada-abs/"
  },
  {
    "slug": "tvs-apache-rtr-160-4v",
    "marca": "tvs",
    "nombre": "Apache RTR 160 4V XC FI",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "XC FI",
        "ref": "APACHE RTR 160 4V XC FI",
        "precio": 10499999,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "ABS Racing",
        "ref": "APACHE RTR 160 4V XC FI ABS RACING",
        "precio": 10749999,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "ABS Racing Duo Tono",
        "ref": "APACHE RTR 160 4V XC FI ABS RACING DUO TONO",
        "precio": 11149999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "159,7",
      "hp": "17,3",
      "nm": "14,7",
      "tanque": "12 l (3.17 gal)"
    },
    "colores": [
      "Negro Rojo"
    ],
    "destacados": [
      "17.3 HP potencia máxima",
      "Modos de manejo y ABS",
      "Tecnología SmartXConnect",
      "Transmisión mecánica 5 velocidades"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 TIEMPOS, MONOCILÍNDRICO",
        "Cilindraje": "159.7 CC",
        "Potencia máxima": "17.3 HP @ 9250 rpm",
        "Torque máximo": "14.7 Nm @ 7250 rpm (MODO SPORT) / 14.1 Nm @ 7250 rpm (MODO URBAN - LLUVIA)",
        "Diámetro × carrera": "62 X 52.9 mm",
        "Relación de compresión": "10.15:1",
        "Transmisión": "Transmisión Mecánica de 5 velocidades - Sistema de arrastre de Cadena ORING y piñones con guardas",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Aire/Aceite",
        "Encendido": "ECU",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina"
      },
      "Chasis": {
        "Freno delantero": "Disco (270 mm) pinza flotante de 2 émbolos",
        "Freno trasero": "Disco (200 mm), pinza flotante de 1 émbolo",
        "Suspensión delantera": "HORQUILLA TELESCÓPICA CONVENCIONAL",
        "Suspensión trasera": "Monoamortiguador hidráulico con ajustes de precarga",
        "Llanta delantera": "90/90 R17",
        "Llanta trasera": "130/70 R17",
        "Rines": "Aspas",
        "Posición de manejo": "deportiva"
      },
      "Dimensiones": {
        "Largo": "2035 mm",
        "Ancho": "790 mm (850 mm con handsavers)",
        "Alto": "1050 mm",
        "Distancia entre ejes": "1357 mm",
        "Altura del sillín": "810 mm",
        "Tanque": "12 l (3.17 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-apache-rtr-160-4v-xc-fi/",
    "nota": "Valida cuál foto corresponde a la versión Racing Duo Tono."
  },
  {
    "slug": "tvs-apache-160-fi-ng",
    "marca": "tvs",
    "nombre": "Apache 160 FI ABS NG",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "FI ABS NG",
        "ref": "APACHE 160 FI ABS NG",
        "precio": 11499999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "159,7",
      "hp": "17,3",
      "nm": "14,73",
      "tanque": "12 Lt (3,17 gal)"
    },
    "colores": [
      "Negro Nebulosa Rojo"
    ],
    "destacados": [
      "Motor 4T monocilíndrico SOHC 4 válvulas",
      "Inyección electrónica",
      "Suspensión delantera invertida 37 mm",
      "Frenos de disco delantero y trasero"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4T MONOCILÍNDRICO SOHC 4 VÁLVULAS",
        "Cilindraje": "159,7 cc",
        "Potencia máxima": "17,3 Hp @ 9250 rpm - Sport mode",
        "Torque máximo": "14.73 Nm @ 7500 rpm - Sport mode",
        "Diámetro × carrera": "62 x 52.9 mm",
        "Relación de compresión": "10,15:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Radiador de aceite",
        "Encendido": "CDI",
        "Arranque": "Eléctrico",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 270 mm",
        "Freno trasero": "Disco 240 mm",
        "Suspensión delantera": "Suspensión delantera invertida 37 mm diámetro",
        "Suspensión trasera": "Monoamortiguador ajustable en precarga",
        "Llanta delantera": "90/90-17 49P",
        "Llanta trasera": "130/70 R17 M/C 62P",
        "Rines": "Aspas de Aleación"
      },
      "Dimensiones": {
        "Largo": "2035 mm",
        "Ancho": "819 mm",
        "Alto": "1111 mm",
        "Distancia entre ejes": "1357 mm",
        "Altura del sillín": "800 mm",
        "Tanque": "12 Lt (3,17 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-apache-160-ng/"
  },
  {
    "slug": "tvs-apache-rtr-200-4v",
    "marca": "tvs",
    "nombre": "Apache RTR 200 4V XC FI ABS",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "ABS",
        "ref": "APACHE RTR 200 4V XC FI ABS",
        "precio": 12999999,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "ABS Racing Duo Tono",
        "ref": "APACHE RTR 200 4V XC FI ABS RCING DUOTONO",
        "precio": 13299999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "197,75",
      "hp": "20,54",
      "nm": "17,25",
      "tanque": "12 L (3.17 GAL)"
    },
    "colores": [
      "Azul Cuarzo"
    ],
    "destacados": [
      "3 modos de manejo",
      "Conectividad SmartXConnect",
      "Frenos ABS",
      "Inyección electrónica"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 TIEMPOS, MONOCILÍNDRICO",
        "Cilindraje": "197.75 cc",
        "Potencia máxima": "20.54 HP @ 9000 rpm",
        "Torque máximo": "17.25 Nm @ 7250 rpm",
        "Diámetro × carrera": "66 X 57.8 mm",
        "Relación de compresión": "10:1",
        "Transmisión": "Transmisión Mecánica de 5 velocidades - Sistema de arrastre de Cadena ORING y piñones con guardas",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Aire/Aceite",
        "Encendido": "ECU",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina"
      },
      "Chasis": {
        "Freno delantero": "Disco lobulado (270 mm), pinza flotante de 2 émbolos",
        "Freno trasero": "Disco lobulado (240 mm), pinza flotante de 1 émbolo",
        "Suspensión delantera": "Horquilla telescópica graduable en dureza",
        "Suspensión trasera": "Monoamortiguador hidráulico con ajustes de precarga",
        "Llanta delantera": "90/90 R17",
        "Llanta trasera": "130/70 R17",
        "Rines": "Aspas de Aleación",
        "Posición de manejo": "deportiva"
      },
      "Dimensiones": {
        "Largo": "2050 mm",
        "Ancho": "790 mm",
        "Alto": "1050 mm",
        "Distancia entre ejes": "1353 mm",
        "Altura del sillín": "800 mm",
        "Tanque": "12 L (3.17 GAL)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-apache-200-4v-fi-abs/"
  },
  {
    "slug": "tvs-apache-200-fi-ng",
    "marca": "tvs",
    "nombre": "Apache 200 FI ABS NG",
    "categoria": "deportivas",
    "versiones": [
      {
        "nombre": "FI ABS NG",
        "ref": "APACHE 200 FI ABS NG",
        "precio": 14999999,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "197,75",
      "hp": "20,54",
      "nm": "17,25",
      "tanque": "12 Lt (3,17 gal)"
    },
    "colores": [
      "Negro Nebulosa Rojo"
    ],
    "destacados": [
      "Motor 4T monocilíndrico SOHC 4 válvulas",
      "Inyección electrónica",
      "Suspensión delantera invertida 37 mm",
      "Frenos de disco 270 mm delantero y 240 mm trasero"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4T MONOCILÍNDRICO SOHC 4 VÁLVULAS",
        "Cilindraje": "197.75 cc",
        "Potencia máxima": "20.54 HP @ 9000 rpm",
        "Torque máximo": "17.25 Nm @ 7250 rpm",
        "Diámetro × carrera": "66 x 57.8 mm",
        "Relación de compresión": "10,1:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Radiador de aceite",
        "Encendido": "ECU",
        "Arranque": "Eléctrico",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 270 mm",
        "Freno trasero": "Disco 240 mm",
        "Suspensión delantera": "Suspensión delantera invertida 37 mm diámetro",
        "Suspensión trasera": "Monoamortiguador ajustable en precarga",
        "Llanta delantera": "90/90-17",
        "Llanta trasera": "130/70 R17",
        "Rines": "Aspas de Aleación"
      },
      "Dimensiones": {
        "Largo": "2020 mm",
        "Ancho": "820 mm",
        "Alto": "1050 mm",
        "Distancia entre ejes": "1353 mm",
        "Altura del sillín": "800 mm",
        "Tanque": "12 Lt (3,17 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-apache-200-ng-preventa/"
  },
  {
    "slug": "tvs-king-deluxe",
    "marca": "tvs",
    "nombre": "King Deluxe",
    "categoria": "motocarros",
    "versiones": [
      {
        "nombre": "Pasajero",
        "ref": "KING DELUXE PASAJERO",
        "precio": 17999000,
        "bono": 400000,
        "promo": null
      },
      {
        "nombre": "Carpa Especial",
        "ref": "KING DELUXE CARPA ESPECIAL",
        "precio": 18799000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "Carpa Full",
        "ref": "KING DELUXE CARPA FULL",
        "precio": 19599000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "hp": "10,06",
      "nm": "15,5",
      "peso": "347"
    },
    "colores": [
      "Blanco Infinito"
    ],
    "destacados": [
      "Chasis tipo escalera con cabina en acero reforzado",
      "Potencia de 10.06 HP @ 5500 rpm",
      "Adaptable a terrenos exigentes",
      "Techo y amplio espacio para conductor y pasajeros"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4-tiempos",
        "Potencia máxima": "10.06 HP @ 5500 rpm",
        "Torque máximo": "15.5 Nm @ 3250 rpm",
        "Diámetro × carrera": "62 X 66 mm",
        "Relación de compresión": "9.6:1",
        "Transmisión": "Mecánica 4 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire forzado",
        "Encendido": "Eléctrico",
        "Arranque": "Eléctrico/ palanca",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "TAMBOR",
        "Freno trasero": "TAMBOR",
        "Suspensión delantera": "Brazo oscilante coaxial con amortiguador hidraulico de doble acción y resorte helicoidal",
        "Suspensión trasera": "Brazo oscilante coaxial con amortiguador hidraulico de doble acción y resorte helicoidal",
        "Llanta delantera": "4.00 - R8 76F",
        "Llanta trasera": "4.00 - R8 76F",
        "Rines": "Aleación",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2724 mm",
        "Ancho": "1329 mm",
        "Alto": "1740 mm",
        "Distancia entre ejes": "1990 mm",
        "Peso": "347 KG"
      }
    },
    "fuente": "https://dismerca.com/referencias/tvs-king-gs/",
    "nota": "La foto de la versión Pasajero se tomó de \"King Deluxe GS\"; confírmala."
  },
  {
    "slug": "victory-mrx-125",
    "marca": "victory",
    "nombre": "MRX 125",
    "categoria": "doble-proposito",
    "versiones": [
      {
        "nombre": "TK F",
        "ref": "MRX125 TK F",
        "precio": 8290000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "CBS MB TK",
        "ref": "MRX125 CBS MB TK",
        "precio": 8590000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "CBS GP TK",
        "ref": "MRX125 CBS GP TK",
        "precio": 8790000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,7",
      "hp": "9,7",
      "nm": "9,2",
      "tanque": "11 L (2.90 gal)",
      "peso": "117"
    },
    "colores": [
      "Negro Verde Hunter",
      "Blanco Verde",
      "Gris Plata Negro Mate Roja"
    ],
    "destacados": [
      "Tablero digital para mejor visibilidad",
      "Suspensión mono amortiguador trasera",
      "Llantas doble propósito",
      "Luces LED potentes"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124,7 cc",
        "Potencia máxima": "9.7 HP @ 7500 rpm",
        "Torque máximo": "9.2 Nm @ 6000 rpm",
        "Diámetro × carrera": "52.4 x 57.8 mm",
        "Relación de compresión": "9.5:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 267 mm",
        "Freno trasero": "Disco",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Mono amortiguador",
        "Llanta delantera": "90/90 R19",
        "Llanta trasera": "110/90 R17",
        "Rines": "Radios",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2060 mm",
        "Ancho": "830 mm",
        "Alto": "1160 mm",
        "Distancia entre ejes": "1340 mm",
        "Altura del sillín": "840 mm",
        "Peso": "117 kg",
        "Tanque": "11 L (2.90 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-mrx-125/",
    "nota": "Las fotos son de la familia MRX 125; confirma colores por versión."
  },
  {
    "slug": "victory-mrx-125-s",
    "marca": "victory",
    "nombre": "MRX 125 S",
    "categoria": "doble-proposito",
    "versiones": [
      {
        "nombre": "TK F",
        "ref": "MRX 125 S TK F",
        "precio": 8290000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "CBS MB TK",
        "ref": "MRX125 S CBS MB TK",
        "precio": 8590000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "CBS GP TK",
        "ref": "MRX125 S CBS GP TK",
        "precio": 8740000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,7",
      "hp": "9,7",
      "nm": "9,2",
      "tanque": "11 L (2.90 gal)"
    },
    "colores": [
      "Negro Nebulosa - Azul",
      "Negro Nebulosa - Verde Militar"
    ],
    "destacados": [
      "Doble freno de disco y frenos CBS",
      "Tablero digital con total visibilidad",
      "Suspensión monoamortiguador trasera",
      "Llantas doble propósito"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124,7 cc",
        "Potencia máxima": "9.7 Hp @ 7500 rpm",
        "Torque máximo": "9.2 Nm @ 6000 rpm",
        "Diámetro × carrera": "52.4 x 57.8 mm",
        "Relación de compresión": "9.5:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 267 mm",
        "Freno trasero": "Campana 130 mm",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Mono amortiguador",
        "Llanta delantera": "90/90 R17",
        "Llanta trasera": "110/90 R16",
        "Rines": "Radios"
      },
      "Dimensiones": {
        "Largo": "1900 mm",
        "Ancho": "830 mm",
        "Alto": "1150 mm",
        "Distancia entre ejes": "1340 mm",
        "Altura del sillín": "780 mm",
        "Tanque": "11 L (2.90 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-mrx-125-s/"
  },
  {
    "slug": "victory-mrx-150",
    "marca": "victory",
    "nombre": "MRX 150",
    "categoria": "doble-proposito",
    "versiones": [
      {
        "nombre": "TK CBS",
        "ref": "MRX150 TK CBS",
        "precio": 9340000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "CBS MB TK",
        "ref": "MRX150 CBS MB TK",
        "precio": 9690000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "CBS GP TK",
        "ref": "MRX150 CBS GP TK",
        "precio": 9840000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "149,2",
      "hp": "10,5",
      "nm": "11,5",
      "tanque": "12 l (3,17 gal)"
    },
    "colores": [
      "Naranja/Gris",
      "Negro Mate Oro/Oro",
      "Negro Nebulosa/Verde"
    ],
    "destacados": [
      "Tablero digital con puerto USB",
      "Sistema de rastreo TRAKKU",
      "Frenos de disco delantero y trasero",
      "Luces LED potentes"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "149,2 cc",
        "Potencia máxima": "10,5 Hp @ 7000 rpm",
        "Torque máximo": "11.5 Nm @ 5500 rpm",
        "Diámetro × carrera": "57.3 x 57.8 mm",
        "Relación de compresión": "9,2:1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco (260 mm) doble pistón",
        "Freno trasero": "Disco (260 mm) doble pistón",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Mono amortiguador",
        "Llanta delantera": "90/90*19",
        "Llanta trasera": "110/90*R17",
        "Rines": "Radios",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2210 mm",
        "Ancho": "830 mm",
        "Alto": "1230 mm",
        "Distancia entre ejes": "1360 mm",
        "Altura del sillín": "870 mm",
        "Tanque": "12 l (3,17 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-mrx-150-trakku/"
  },
  {
    "slug": "victory-mrx-200",
    "marca": "victory",
    "nombre": "MRX 200",
    "categoria": "doble-proposito",
    "versiones": [
      {
        "nombre": "TK ABS",
        "ref": "MRX200 TK ABS",
        "precio": 11590000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "ABS MB TK",
        "ref": "MRX200 ABS MB TK",
        "precio": 11940000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "199,6",
      "hp": "17,4",
      "nm": "17",
      "tanque": "10 L (2,64 gal)"
    },
    "colores": [
      "Café",
      "Negro Azul Hunter",
      "Negro Nebulosa Camaleón"
    ],
    "destacados": [
      "Tablero digital con puerto USB",
      "Frenos de disco con ABS",
      "Suspensión delantera invertida",
      "GPS Trakku integrado de fábrica"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "Monocilíndrico 4 tiempos SOHC de 2 válvulas (PR 200)",
        "Cilindraje": "199,6 cc",
        "Potencia máxima": "17,4 HP @ 8000 rpm",
        "Torque máximo": "17 Nm @ 6000 rpm",
        "Diámetro × carrera": "67 x 56,6 mm",
        "Relación de compresión": "9,0 : 1",
        "Transmisión": "Mecánica 6 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco de 265 mm",
        "Freno trasero": "Disco de 220 mm",
        "Suspensión delantera": "Barras invertidas de 37 mm",
        "Suspensión trasera": "Mono amortiguador ajustable en precarga",
        "Llanta delantera": "90/90-19",
        "Llanta trasera": "110/90-17",
        "Rines": "Radios",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2210 mm",
        "Ancho": "830 mm",
        "Alto": "1230 mm",
        "Distancia entre ejes": "1360 mm",
        "Altura del sillín": "860 mm",
        "Tanque": "10 L (2,64 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-mrx-200/"
  },
  {
    "slug": "victory-mrx-arizona",
    "marca": "victory",
    "nombre": "MRX Arizona",
    "categoria": "doble-proposito",
    "versiones": [
      {
        "nombre": "ABS MB TK",
        "ref": "MRX ARIZONA ABS MB TK",
        "precio": 12490000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "ABS GP TK",
        "ref": "MRX ARIZONA ABS GP TK",
        "precio": 12590000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "199,5",
      "hp": "17,4",
      "nm": "17",
      "tanque": "16 L (4,2 gal)"
    },
    "colores": [
      "Gris Asfalto Verde",
      "Negro Gris"
    ],
    "destacados": [
      "Frenos ABS para control superior",
      "Tablero digital con visibilidad total",
      "Puerto USB para carga de celular",
      "Sistema de rastreo Trakku en tiempo real"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "Monocilíndrico 4 tiempos SOHC de 2 válvulas",
        "Cilindraje": "199,5 cc",
        "Potencia máxima": "17,4 HP @ 8000 rpm",
        "Torque máximo": "17 Nm @ 6000 rpm",
        "Relación de compresión": "9,0 : 1",
        "Transmisión": "Mecánica 6 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco de 280 mm",
        "Freno trasero": "Disco de 210 mm",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Mono amortiguador ajustable en precarga",
        "Llanta delantera": "90/90-19",
        "Llanta trasera": "110/90-17",
        "Rines": "Radios",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2140 mm",
        "Ancho": "945 mm",
        "Alto": "1325 mm",
        "Distancia entre ejes": "1330 mm",
        "Altura del sillín": "860 mm",
        "Tanque": "16 L (4,2 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/moto-victory-mrx-arizona/"
  },
  {
    "slug": "victory-bet-abs",
    "marca": "victory",
    "nombre": "Bet ABS",
    "categoria": "automaticas",
    "versiones": [
      {
        "nombre": "ABS TK",
        "ref": "BET ABS TK",
        "precio": 13090000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "149,2",
      "hp": "14,8",
      "nm": "14",
      "tanque": "9 L (2,37 gal)",
      "peso": "144"
    },
    "colores": [
      "Gris Tormenta",
      "Blanco Infinito",
      "Negro"
    ],
    "destacados": [
      "Frenos ABS para máxima seguridad",
      "Motor 4T de 14,8 HP con aceleración inmediata",
      "Iluminación LED y tablero digital",
      "Transmisión automática CVT"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4T, Monocilíndrico de 4 válvulas SOHC",
        "Cilindraje": "149,2 cc",
        "Potencia máxima": "14,8 HP @ 8000 rpm",
        "Torque máximo": "14 Nm @ 6750 rpm",
        "Diámetro × carrera": "57,3 x 57,9 mm",
        "Relación de compresión": "11:1",
        "Transmisión": "Automática centrífuga (CVT)",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Líquido",
        "Encendido": "ECU",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina extra"
      },
      "Chasis": {
        "Freno delantero": "Disco de 270 mm",
        "Freno trasero": "Disco de 218 mm",
        "Suspensión delantera": "Telescópica hidráulica con barras de 33 mm",
        "Suspensión trasera": "Doble amortiguador con ajuste en precarga de 5 posiciones",
        "Llanta delantera": "100/80-14",
        "Llanta trasera": "120/70-14",
        "Rines": "Aspas de Aleación"
      },
      "Dimensiones": {
        "Largo": "1926 mm",
        "Ancho": "766 mm",
        "Alto": "1230 mm",
        "Distancia entre ejes": "1330 mm",
        "Altura del sillín": "770 mm",
        "Peso": "144 Kg",
        "Tanque": "9 L (2,37 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-bet-abs/"
  },
  {
    "slug": "victory-bet-adv",
    "marca": "victory",
    "nombre": "Bet ADV",
    "categoria": "automaticas",
    "versiones": [
      {
        "nombre": "ADV TK",
        "ref": "BET ADV TK",
        "precio": 14990000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {},
    "colores": [],
    "destacados": [],
    "specs": {},
    "fuente": null
  },
  {
    "slug": "victory-new-life-125",
    "marca": "victory",
    "nombre": "New Life 125",
    "categoria": "automaticas",
    "versiones": [
      {
        "nombre": "CBS",
        "ref": "NEW LIFE 125 CBS",
        "precio": 6999000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "TK CBS",
        "ref": "NEW LIFE 125 TK CBS",
        "precio": 7199000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,6",
      "hp": "8,4",
      "nm": "8,7",
      "tanque": "5,35 L (1,41 gal)"
    },
    "colores": [
      "Negro Nebulosa - Verde Militar",
      "Gris Grafito - Azul"
    ],
    "destacados": [
      "Scooter deportiva con transmisión automática CVT",
      "Motor 4 tiempos monocilíndrico de 8.4 HP",
      "Precio accesible sin incluir matrícula ni SOAT",
      "Arranque eléctrico y pedal"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124,6 cc",
        "Potencia máxima": "8.4 HP @ 7500 rpm",
        "Torque máximo": "8,7 Nm @ 6500 rpm",
        "Diámetro × carrera": "52,4 X 57,8 mm",
        "Relación de compresión": "9,5:1",
        "Transmisión": "Automática centrífuga (CVT)",
        "Refrigeración": "Aire forzado",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco, pinza doble pistón",
        "Freno trasero": "Disco central",
        "Suspensión delantera": "Telecópica hidráulica",
        "Suspensión trasera": "Mono amortiguador",
        "Llanta delantera": "120/70 - R12",
        "Llanta trasera": "120/70 - R12",
        "Rines": "Aspas de Aleación",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1775 mm",
        "Ancho": "670 mm",
        "Alto": "1170 mm",
        "Distancia entre ejes": "1285 mm",
        "Altura del sillín": "810 mm",
        "Tanque": "5,35 L (1,41 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-new-life/"
  },
  {
    "slug": "victory-advance-r-125",
    "marca": "victory",
    "nombre": "Advance R 125",
    "categoria": "semiautomaticas",
    "versiones": [
      {
        "nombre": "CBS tablero digital",
        "ref": "ADVANCE R 125/CBS TAB DIG",
        "precio": 6299000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "TK CBS tablero digital",
        "ref": "ADVANCE R 125 TK/CBS TAB DIGITAL",
        "precio": 6499000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,7",
      "hp": "8,7",
      "nm": "8,7",
      "tanque": "3,7 L (0,97 gal)"
    },
    "colores": [
      "Gris Asfalto",
      "Verde"
    ],
    "destacados": [
      "Balanceador de motor para menor vibración",
      "Tablero digital moderno con fondo azul",
      "Luces LED frontal y stop",
      "Cargador USB integrado"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124,7 cc",
        "Potencia máxima": "8,7 HP @ 8000 rpm",
        "Torque máximo": "8,7 Nm @ 6000 rpm",
        "Diámetro × carrera": "53,5 x 55,5 mm",
        "Relación de compresión": "9,8:1",
        "Transmisión": "Semiautomática 4 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 220 mm. Pinza doble pistón",
        "Freno trasero": "Bandas expandibles de 110 mm",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "2.50 – R17",
        "Llanta trasera": "2,75 - R17",
        "Rines": "Aspas de Aleación",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1940 mm",
        "Ancho": "705 mm",
        "Alto": "1120 mm",
        "Distancia entre ejes": "1245 mm",
        "Altura del sillín": "770 mm",
        "Tanque": "3,7 L (0,97 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-advance-r-125/"
  },
  {
    "slug": "victory-x1-fi",
    "marca": "victory",
    "nombre": "X1 FI",
    "categoria": "semiautomaticas",
    "versiones": [
      {
        "nombre": "TK CBS",
        "ref": "X1 FI TK CBS",
        "precio": 7949000,
        "bono": 500000,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,9",
      "hp": "10,1",
      "nm": "10,5",
      "tanque": "4 L (1 gal)",
      "peso": "98"
    },
    "colores": [
      "Negro Nebulosa - Verde",
      "Gris Grafito - Azul"
    ],
    "destacados": [
      "Motor inyección electrónica más potente de su categoría",
      "Luces LED de día y noche",
      "Diseño moderno y lujo accesible",
      "Semiautomática 4 velocidades"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "Monocilindrico 4 tiempos, 2 válvulas SOHC",
        "Cilindraje": "124,9 cc",
        "Potencia máxima": "10.1 HP @ 8000 rpm",
        "Torque máximo": "10.5 Nm @ 5500 rpm",
        "Diámetro × carrera": "54 x 54.54 mm",
        "Relación de compresión": "9.1:1",
        "Transmisión": "Semiautomática 4 velocidades",
        "Alimentación": "Inyección electrónica",
        "Refrigeración": "Aire",
        "Encendido": "ECU",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 220 mm",
        "Freno trasero": "Campana de 110 mm",
        "Suspensión delantera": "Telescópica hidráulica con 93 mm de recorrido",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "70/90 - 17",
        "Llanta trasera": "80/90 - 17",
        "Rines": "Aspas de Aleación"
      },
      "Dimensiones": {
        "Largo": "1980 mm",
        "Ancho": "720 mm",
        "Alto": "1020 mm",
        "Distancia entre ejes": "1260 mm",
        "Altura del sillín": "770 mm",
        "Peso": "98 kg",
        "Tanque": "4 L (1 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-x1-fi-125-tk/"
  },
  {
    "slug": "victory-one-mp",
    "marca": "victory",
    "nombre": "One MP",
    "categoria": "semiautomaticas",
    "versiones": [
      {
        "nombre": "CBS",
        "ref": "ONE MP CBS",
        "precio": 5190000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "TK CBS",
        "ref": "ONE MP TK CBS",
        "precio": 5390000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "97",
      "hp": "5,9",
      "nm": "6,5",
      "tanque": "3.0 L (0,8 gal)"
    },
    "colores": [
      "Gris",
      "Negro Nebulosa Verde Militar"
    ],
    "destacados": [
      "Arranque eléctrico y de pedal",
      "Freno de disco delantero",
      "Parrilla funcional",
      "No paga impuesto por ser de 97cc"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "97 cc",
        "Potencia máxima": "5.9 HP @ 7500 rpm",
        "Torque máximo": "6.5 Nm @ 5000 rpm",
        "Diámetro × carrera": "50 x 49.5 mm",
        "Relación de compresión": "8.6:1",
        "Transmisión": "Semiautomática 4 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco (220 mm) doble pistón",
        "Freno trasero": "Tambor (110 mm)",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble amortiguador hidráulico",
        "Llanta delantera": "2.50 - 17",
        "Llanta trasera": "2.75 - 17",
        "Rines": "Radios",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1910 mm",
        "Ancho": "680 mm",
        "Alto": "1110 mm",
        "Distancia entre ejes": "1210 mm",
        "Altura del sillín": "750 mm",
        "Tanque": "3.0 L (0,8 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-one-mp/"
  },
  {
    "slug": "victory-combat-100",
    "marca": "victory",
    "nombre": "Combat 100",
    "categoria": "urbanas",
    "versiones": [
      {
        "nombre": "Combat 100",
        "ref": "COMBAT 100",
        "precio": 4390000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "99,85",
      "hp": "8",
      "nm": "8",
      "tanque": "15 L (3.96 gal)"
    },
    "colores": [
      "Azul",
      "Gris Piedra Negro Nebulosa",
      "Negro Nebulosa Gris"
    ],
    "destacados": [
      "Diseño robusto y asequible",
      "Motor 4 tiempos monocilíndrico",
      "Caja mecánica 4 velocidades",
      "Suspensión telescópica delantera"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "99,85 cc",
        "Potencia máxima": "8 HP @ 8000 rpm",
        "Torque máximo": "8 Nm @ 6000 rpm",
        "Diámetro × carrera": "54 x 43,6 mm",
        "Relación de compresión": "9.4 : 1",
        "Transmisión": "Mecánica 4 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Campana",
        "Freno trasero": "Campana",
        "Suspensión delantera": "Telescópica Hidráulica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "2,50 -17",
        "Llanta trasera": "3,00 - 17",
        "Rines": "Radios",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1950 mm",
        "Ancho": "715 mm",
        "Alto": "1050 mm",
        "Distancia entre ejes": "1250 mm",
        "Altura del sillín": "750 mm",
        "Tanque": "15 L (3.96 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-combat-100/"
  },
  {
    "slug": "victory-bomber-125",
    "marca": "victory",
    "nombre": "Bomber 125",
    "categoria": "urbanas",
    "versiones": [
      {
        "nombre": "TK CBS",
        "ref": "BOMBER 125 TK CBS",
        "precio": 5999000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124",
      "hp": "10,72",
      "nm": "9",
      "tanque": "2.64 gal (10L)",
      "peso": "105"
    },
    "colores": [
      "Negro Rojo"
    ],
    "destacados": [
      "GPS Trakku instalado de fábrica",
      "Económica en gasolina",
      "Farola LED para mayor visibilidad",
      "Resistente para trabajo diario"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124 cc",
        "Potencia máxima": "10,72 Hp @ 9000 rpm",
        "Torque máximo": "9 Nm @ 7500 rpm",
        "Diámetro × carrera": "56,5 x 49,5 mm",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "CDI",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco de 240mm",
        "Freno trasero": "Tambor de 130mm",
        "Suspensión delantera": "Telescópica, hidráulica",
        "Suspensión trasera": "Doble amortiguador hidraulico",
        "Llanta delantera": "2.50 - 18",
        "Llanta trasera": "2.75 - 18",
        "Rines": "Radios"
      },
      "Dimensiones": {
        "Largo": "1940 mm",
        "Ancho": "765 mm",
        "Alto": "1025 mm",
        "Distancia entre ejes": "1220 mm",
        "Altura del sillín": "785 mm",
        "Peso": "105 kg",
        "Tanque": "2.64 gal (10L)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-bomber-125-tk/"
  },
  {
    "slug": "victory-nitro-125",
    "marca": "victory",
    "nombre": "Nitro 125 Facelift",
    "categoria": "urbanas",
    "versiones": [
      {
        "nombre": "CBS",
        "ref": "NITRO 125 FACELIFT CBS",
        "precio": 6699000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "TK CBS",
        "ref": "NITRO 125 FACELIFT TK CBS",
        "precio": 6899000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,8",
      "hp": "10,72",
      "nm": "10",
      "tanque": "13 L (3,43 Gal)",
      "peso": "120"
    },
    "colores": [
      "Negro Mate Rojo"
    ],
    "destacados": [
      "Tablero 100% digital",
      "Freno de disco lobulado",
      "Euro 3",
      "Motor 4 tiempos monocilíndrico"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, monocilíndrico",
        "Cilindraje": "124,8 cc",
        "Potencia máxima": "10,72 HP @ 8500 rpm",
        "Torque máximo": "10 Nm @ 7000 rpm",
        "Diámetro × carrera": "57,3 x 48,4 mm",
        "Relación de compresión": "9,5:1",
        "Transmisión": "Mecánica",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco delantero lobulado de 240 mm",
        "Freno trasero": "Tambor (110 mm)",
        "Suspensión delantera": "Telecópica hidráulica",
        "Suspensión trasera": "Doble amortiguador",
        "Llanta delantera": "80/90-17",
        "Llanta trasera": "110/80-17",
        "Rines": "Aspas de Aleación",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "2000 mm",
        "Ancho": "760 mm",
        "Alto": "1055 mm",
        "Distancia entre ejes": "1320 mm",
        "Altura del sillín": "780 mm",
        "Peso": "120 kg",
        "Tanque": "13 L (3,43 Gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-nitro-125/"
  },
  {
    "slug": "victory-switch-125",
    "marca": "victory",
    "nombre": "Switch 125",
    "categoria": "urbanas",
    "versiones": [
      {
        "nombre": "CBS",
        "ref": "SWITCH 125 CBS",
        "precio": 7899000,
        "bono": 0,
        "promo": null
      },
      {
        "nombre": "TK CBS",
        "ref": "SWITCH 125 TK CBS",
        "precio": 8099000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,8",
      "hp": "10,7",
      "nm": "10",
      "tanque": "7.2 L (1.9 gal)",
      "peso": "105"
    },
    "colores": [
      "Negro-Naranja"
    ],
    "destacados": [
      "Diseño compacto y ágil para ciudad",
      "Fácil de controlar",
      "Motor 4 tiempos SOHC",
      "Transmisión mecánica 5 velocidades"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "4 tiempos, Monocilíndrico SOHC",
        "Cilindraje": "124,8 cc",
        "Potencia máxima": "10.7 HP @ 9000 rpm",
        "Torque máximo": "10 Nm @ 7000 rpm",
        "Diámetro × carrera": "57,3 x 48,4 mm",
        "Relación de compresión": "9,5 : 1",
        "Transmisión": "Mecánica 5 velocidades",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire",
        "Encendido": "CDI",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Disco",
        "Suspensión delantera": "Telescópica",
        "Suspensión trasera": "Monoamortiguador",
        "Llanta delantera": "120/70*12",
        "Llanta trasera": "130/70*12",
        "Rines": "Aspas de Aleación"
      },
      "Dimensiones": {
        "Largo": "1790 mm",
        "Ancho": "740 mm",
        "Alto": "1000 mm",
        "Distancia entre ejes": "1150 mm",
        "Altura del sillín": "730 mm",
        "Peso": "105 Kg",
        "Tanque": "7.2 L (1.9 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/victory-switch-125/",
    "nota": "Foto identificada visualmente; confírmala."
  },
  {
    "slug": "kymco-agility-fusion",
    "marca": "kymco",
    "nombre": "Agility Fusion",
    "categoria": "automaticas",
    "versiones": [
      {
        "nombre": "CBS",
        "ref": "AGILITY FUSION CBS",
        "precio": 9699000,
        "bono": 500000,
        "promo": null
      },
      {
        "nombre": "TK CBS",
        "ref": "AGILITY FUSION TK CBS",
        "precio": 9899000,
        "bono": 0,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "124,6",
      "hp": "9,3",
      "nm": "9,1",
      "tanque": "5 l (1,32 gal)"
    },
    "colores": [
      "Azul Negro"
    ],
    "destacados": [
      "Tablero digital",
      "Farola LED",
      "Parrilla para carga",
      "Diseño deportivo moderno"
    ],
    "specs": {
      "Motor": {
        "Cilindraje": "124.6 cc",
        "Potencia máxima": "9.3 HP @ 7000 rpm",
        "Torque máximo": "9.1 Nm @ 6500 rpm",
        "Diámetro × carrera": "52.4 x 57.8 mm",
        "Relación de compresión": "9.6 +/- 0.2:1",
        "Transmisión": "Automática centrífuga (CVT)",
        "Alimentación": "Carburador",
        "Refrigeración": "Aire forzado",
        "Encendido": "CDI",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco 200 mm Doble pistón",
        "Freno trasero": "Disco",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Monoamortiguador hidráulico",
        "Llanta delantera": "120/70 - 12",
        "Llanta trasera": "130/70 - 12",
        "Rines": "Aspas de Aleación",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "1940 mm",
        "Ancho": "685 mm",
        "Alto": "1130 mm",
        "Distancia entre ejes": "1330 mm",
        "Altura del sillín": "780 mm",
        "Tanque": "5 l (1,32 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/kymco-agility-fusion/"
  },
  {
    "slug": "ceronte-200",
    "marca": "ceronte",
    "nombre": "Ceronte 200",
    "categoria": "motocarros",
    "versiones": [
      {
        "nombre": "Tricargo 200",
        "ref": "CERONTE 200",
        "precio": 16140000,
        "bono": 500000,
        "promo": null
      }
    ],
    "resumen": {
      "cc": "200",
      "hp": "13,4",
      "nm": "13,5",
      "peso": "380"
    },
    "colores": [
      "Negro Nebulosa",
      "Gris"
    ],
    "destacados": [
      "Motor refrigerado por aceite",
      "13.4 Hp @ 7500 rpm",
      "Caja mecánica 5 marchas + Booster",
      "Frenos disco delantero / campana trasero"
    ],
    "specs": {
      "Motor": {
        "Potencia máxima": "13.4 Hp @ 7500 rpm",
        "Torque máximo": "13.5 Nm @ 6500 rpm",
        "Diámetro × carrera": "63.5 x 62.3 mm",
        "Relación de compresión": "8.5 – 9.3 : 2",
        "Transmisión": "Mecánica de 5 marchas + Booster",
        "Alimentación": "Carburador",
        "Refrigeración": "Aceite",
        "Encendido": "Eléctrico",
        "Arranque": "Eléctrico y pedal",
        "Combustible": "Gasolina corriente"
      },
      "Chasis": {
        "Freno delantero": "Disco",
        "Freno trasero": "Campana",
        "Suspensión delantera": "Telescópica hidráulica",
        "Suspensión trasera": "Telescópica hidráulica",
        "Llanta delantera": "4.50 – R12",
        "Llanta trasera": "4.50 – R12",
        "Rines": "3.00 x 13",
        "Posición de manejo": "Deportiva"
      },
      "Dimensiones": {
        "Largo": "3320 mm",
        "Ancho": "1260 mm",
        "Alto": "1410 mm",
        "Distancia entre ejes": "2300 mm",
        "Altura del sillín": "845 mm",
        "Peso": "380 kg"
      }
    },
    "fuente": "https://dismerca.com/referencias/ceronte-tricargo-200-refrigerado-por-aceite/"
  },
  {
    "slug": "zontes-200-u1",
    "marca": "zontes",
    "nombre": "Zontes 200 U1",
    "categoria": "doble-proposito",
    "versiones": [
      {
        "nombre": "200 U1",
        "ref": "ZONTES 200 U1",
        "precio": 13999000,
        "bono": 0,
        "promo": "SOAT + matrícula"
      }
    ],
    "resumen": {
      "cc": "198",
      "hp": "21,6",
      "nm": "19",
      "tanque": "12.5 L (3,3 gal)",
      "peso": "150"
    },
    "colores": [
      "Azul Naranja",
      "Gris Negro Verde"
    ],
    "destacados": [
      "Motor 198 cc de 4 válvulas y refrigeración líquida",
      "Inyección electrónica BOSCH",
      "Suspensión delantera invertida",
      "Frenos de disco 320 / 230 mm"
    ],
    "specs": {
      "Motor": {
        "Tipo de motor": "Monocilíndrico 4 tiempos de 4 válvulas",
        "Cilindraje": "198 cc",
        "Potencia máxima": "21,6 HP @ 9000 rpm",
        "Torque máximo": "19 Nm @ 7000 rpm",
        "Diámetro × carrera": "63.5 x 62.5 mm",
        "Relación de compresión": "12,5 : 1",
        "Transmisión": "Mecánica 6 velocidades",
        "Alimentación": "Inyección electrónica BOSCH",
        "Refrigeración": "Líquido",
        "Encendido": "ECU",
        "Arranque": "Eléctrico",
        "Combustible": "Gasolina extra"
      },
      "Chasis": {
        "Freno delantero": "Disco de 320 mm",
        "Freno trasero": "Disco de 230 mm",
        "Suspensión delantera": "Telescópica invertida",
        "Suspensión trasera": "Monoamortiguador",
        "Llanta delantera": "110/70-17",
        "Llanta trasera": "130/70-17",
        "Rines": "Radios"
      },
      "Dimensiones": {
        "Largo": "1980 mm",
        "Ancho": "825 mm",
        "Alto": "1070 mm",
        "Distancia entre ejes": "1360 mm",
        "Altura del sillín": "770 mm",
        "Peso": "150 Kg",
        "Tanque": "12.5 L (3,3 gal)"
      }
    },
    "fuente": "https://dismerca.com/referencias/zontes-200u1/"
  }
]

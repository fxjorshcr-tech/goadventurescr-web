export interface Tour {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  duration: string;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  highlights: string[];
  included: string[];
  notIncluded?: string[];
  itinerary: string[];
  location: string;
  maxParticipants: number;
  cancellationPolicy: string;
  ageRange?: string;
  accessibility?: string;
  additionalInfo?: string[];
}

export const tours: Tour[] = [
  {
    id: "tirolesa-aventura",
    title: "Aventura en Tirolesa Personalizable",
    description: "¡Muchas aventuras y momentos inolvidables le esperan a toda su familia! Algunos de nuestros escaladores más confiados comienzan a entrenar a la edad de 2 años.",
    longDescription: `¿Estás buscando una actividad divertida para toda la familia? Únase a nosotros y a los monos aulladores que se balancean de árbol en árbol. ¡De jóvenes a mayores, la experiencia está diseñada para todos ustedes! Nuestros aventureros más jóvenes tienen 2 años y aspiran a convertirse en escaladores ágiles y seguros.

El parkour está diseñado para mejorar la cohesión de tu familia mientras exploras el importante acuífero de Nimboyores, responsable de una gran cantidad de agua que fluye hacia la costa.

A poca distancia en auto de varias ubicaciones de playa, este lugar invita a una entretenida excursión de medio día.

Además de las tirolesas descubre:
• Puente colgante
• Puente tibetano
• Escalera de caracol que envuelve un árbol gigante de Guanacaste
• ¡E incluso un columpio de Tarzán!

ATARDECER
¡Las puestas de sol más hermosas necesitan un cielo nublado que pinte el mundo artísticamente en naranja y púrpura! ¡Ponte el casco y enciende la linterna frontal porque se va a poner serio! Balancéate como Tarzán de árbol en árbol, vuela en tirolesa por el cielo y pasa por encima de un puente colgante mientras la noche se acerca.

NOCHE
Para una dosis extra de adrenalina, ¡apaguemos las luces! Entrena tus ojos de búho y da el salto. Experimente los misterios de la selva costarricense por la noche, esté atento a los animales que solo salen en la oscuridad y disfrute de esta aventura única de autodescubrimiento.`,
    price: 86,
    duration: "3 horas",
    rating: 5.0,
    reviewCount: 1,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/sloth-costa-rica.jpeg",
    category: "Tirolina",
    highlights: [
      "Cancelación gratuita hasta 24 horas antes",
      "Guía en español e inglés",
      "Apto para toda la familia (desde 2 años)",
      "Experiencia al atardecer o noche disponible",
      "Incluye puente colgante y tibetano",
      "Columpio de Tarzán incluido"
    ],
    included: [
      "Agua embotellada",
      "Equipo de seguridad completo",
      "Guía profesional certificado",
      "Casco y linterna (tours nocturnos)"
    ],
    notIncluded: [
      "Recogida en hotel (disponible con costo adicional)",
      "Fotos de recuerdo"
    ],
    itinerary: [
      "Llegada y registro en el parque",
      "Briefing de seguridad y equipamiento",
      "Recorrido de tirolesas principales",
      "Cruce de puente colgante",
      "Aventura en puente tibetano",
      "Escalera de caracol en árbol gigante",
      "Columpio de Tarzán",
      "Tiempo libre y fotos",
      "Regreso al punto de inicio"
    ],
    location: "Province of Guanacaste",
    maxParticipants: 15,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece.",
    ageRange: "2 a 99 años",
    accessibility: "No es accesible para sillas de ruedas",
    additionalInfo: [
      "La confirmación se recibirá en el momento en que se realice la reserva",
      "No es recomendable para viajeros con problemas de espalda",
      "No es recomendable para embarazadas",
      "La mayoría de viajeros pueden participar en la experiencia",
      "En esta excursión debe haber un número mínimo de viajeros"
    ]
  },
  {
    id: "zona-azul-guanacaste",
    title: "Tour de Medio Día en Zona Azul de Guanacaste",
    description: "Revelan los secretos de la longevidad en Costa Rica. Imagina vivir una vida llena de alegría y vitalidad, donde puedas apreciar cada momento.",
    longDescription: `Descubra los secretos de la longevidad: viaje a través de zonas de vitalidad, donde las enfermedades crónicas son raras y la esperanza de vida aumenta.

Sumérgete en un estilo de vida marcado por una vigorizante actividad física, sólidos vínculos comunitarios y una dieta profundamente arraigada en las tradiciones regionales. Descubra los matices culturales de los centenarios y deleite sus sentidos con sus tesoros culinarios locales.

GUAITIL POTTERY STUDIO (1 hora)
Para en: Guaitil Pottery Studio, La Rotonda next to the restaurant Surf Shack, Tamarindo, Costa Rica

Únase a nosotros en este viaje de retroceso a mil años de tradición, para experimentar la Costa Rica de otros milenios, antes de los conquistadores, antes de la modernización, antes de que Costa Rica fuera Costa Rica. Guaitil vive, respira historia. Guaitil es un pueblo indígena Chorotega, llamado así por el árbol Guaitil que da tintes, donde encontrará más respuestas sobre cómo surgió la Zona Azul.

NICOYA (1 hora)
Para en: Nicoya, Nicoya, Province of Guanacaste

¿Sabías que Nicoya es una de las 7 Zonas Azules reconocidas mundialmente?

Emprendamos un viaje en el tiempo en Nicoya, donde los ecos del pasado resuenan en cada rincón. Sumérgete en el ambiente sereno de esta joya cultural, un testimonio del legado de Costa Rica. Maravíllate ante la obra maestra arquitectónica histórica que representa las iglesias más antiguas del país.`,
    price: 208,
    duration: "5-6 horas",
    rating: 3.0,
    reviewCount: 1,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/artesania.jpeg",
    category: "Privados y de lujo",
    highlights: [
      "Cancelación gratuita hasta 24 horas antes",
      "Tour privado y de lujo",
      "Almuerzo tradicional incluido",
      "Visita a Guaitil Pottery Studio",
      "Explora una de las 7 Zonas Azules del mundo",
      "Recogida incluida en hotel"
    ],
    included: [
      "Agua embotellada",
      "Sodas y refrescos",
      "Almuerzo Tradicional Local",
      "Entrada a Guaitil Pottery Studio",
      "Transporte en vehículo con aire acondicionado",
      "Guía local experto",
      "Recogida y regreso al hotel"
    ],
    itinerary: [
      "Recogida en hotel",
      "Traslado a Santa Bárbara, Guanacaste",
      "Visita a Guaitil Pottery Studio (1 hora)",
      "Demostración de cerámica Chorotega",
      "Traslado a Nicoya",
      "Exploración del pueblo de Nicoya (1 hora)",
      "Visita a la iglesia histórica",
      "Almuerzo tradicional",
      "Regreso al hotel"
    ],
    location: "Santa Bárbara y Nicoya, Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece.",
    ageRange: "Todas las edades",
    accessibility: "No es accesible para sillas de ruedas",
    additionalInfo: [
      "La confirmación se recibirá en el momento en que se realice la reserva",
      "Esta es una excursión o actividad privada. Solo puede participar su grupo",
      "Se reserva con 78 días de antelación en promedio",
      "En esta experiencia debe haber un número mínimo de viajeros"
    ]
  },
  {
    id: "inmersion-cafe",
    title: "Inmersión para Amantes del Café",
    description: "Una excelente manera de aprender sobre la cultura costarricense es a través de su café, y este tour privado hace precisamente eso.",
    longDescription: `¿Desea conocer la cultura costarricense? ¡Entonces empieza con el café!

Más del 90% de la producción de café se exporta a todo el mundo debido a la combinación ideal de clima, altitud y suelo de Costa Rica. ¡Pruébelo usted mismo y deje que nuestros agricultores locales lo guíen a través de los procesos y técnicas que transforman estos frutos rojos en una delicia aromática! 🍒

Por supuesto, esto incluye probar las múltiples variedades y aprender a distinguir cervezas de calidad.

*DE PRIMERA CALIDAD*
Para aquellos que buscan descubrir más secretos culturales, actualice a nuestra Experiencia Premium que agrega una inmersión en la cultura chorotega y un refrigerio local a su viaje.

Lo llevaremos a un pueblo que conserva el espíritu indígena a través de una experiencia práctica de cerámica que tiene como objetivo transmitir y atesorar la memoria de sus antepasados.

Una excelente manera de aprender sobre la cultura costarricense es a través de su café, y este tour privado hace precisamente eso. Comenzará el recorrido con la recogida en el hotel para mayor comodidad y luego aprenderá todo sobre el café costarricense.`,
    price: 169,
    duration: "6 horas",
    rating: 4.8,
    reviewCount: 4,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/ave-costa-rica.jpeg",
    category: "Clases de cocina",
    highlights: [
      "Cancelación gratuita hasta 24 horas antes",
      "Tour privado personalizado",
      "Degustación de múltiples variedades de café",
      "Recogida y regreso al hotel incluidos",
      "Guía en español e inglés",
      "Opción Premium con cerámica Chorotega"
    ],
    included: [
      "Todas las actividades",
      "Conductor / guía",
      "Botella de agua",
      "Recogida y regreso al hotel",
      "Transporte en minivan con aire acondicionado",
      "Degustación de café"
    ],
    notIncluded: [
      "Fotos de recuerdo (disponibles para comprar)",
      "Propinas"
    ],
    itinerary: [
      "Recogida en hotel",
      "Traslado a la finca cafetalera",
      "Tour por los cultivos de café",
      "Explicación del proceso de cosecha",
      "Demostración del proceso de tostado",
      "Clase de preparación de café",
      "Degustación de variedades",
      "Tiempo para compras (opcional)",
      "Regreso al hotel"
    ],
    location: "Tamarindo, Province of Guanacaste",
    maxParticipants: 12,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece.",
    ageRange: "1 a 99 años",
    accessibility: "Accesible en silla de ruedas",
    additionalInfo: [
      "La confirmación se recibirá en el momento en que se realice la reserva",
      "Los niños deben estar acompañados por un adulto",
      "Puede ser operado por un guía multilingüe",
      "Esta es una excursión o actividad privada. Solo puede participar su grupo"
    ]
  },
  {
    id: "cascadas-spa",
    title: "Cascadas y Spa",
    description: "¡Explore la fascinante naturaleza de Costa Rica y camine hacia una majestuosa cascada que cae en una cuenca natural!",
    longDescription: `¡Explore la fascinante naturaleza de Costa Rica, tenga cuidado con la vida silvestre que habita en el área y camine hacia una majestuosa cascada que cae en una cuenca natural! Mientras admiras esta gigantesca belleza, disfruta de las aguas y deja que tu espíritu se maraville mientras sientes cómo todas tus cargas se desvanecen.

*DE PRIMERA CALIDAD*
Para aquellos que deseen agregar un toque cultural a su viaje, con gusto su conductor privado incluirá una experiencia de degustación de café o compras de recuerdos en el camino. Además, ¡varias delicias locales estarán esperando a nuestros invitados como sorpresa!

LLANOS DE CORTÉS
Para en: Llanos de Cortés, Provincia de Guanacaste, Bagaces, Costa Rica

Descubre una de las cascadas más impresionantes de Costa Rica. La cascada de Llanos de Cortés es un tesoro escondido que te dejará sin aliento. Sus aguas cristalinas caen desde una altura considerable formando una cortina de agua espectacular, perfecta para refrescarse y conectar con la naturaleza.

El recorrido incluye tiempo suficiente para disfrutar del entorno natural, nadar en las pozas de agua fresca y capturar fotografías increíbles de este paraíso natural.`,
    price: 204,
    duration: "6 horas",
    rating: 4.5,
    reviewCount: 8,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/psicina.jpeg",
    category: "Excursiones de un día",
    highlights: [
      "Cancelación gratuita hasta 24 horas antes",
      "Cascada espectacular de Llanos de Cortés",
      "Tiempo para nadar incluido",
      "Opción de degustación de café",
      "Delicias locales como sorpresa",
      "Transporte de ida y vuelta incluido"
    ],
    included: [
      "Entrada al parque nacional",
      "Impuestos municipales",
      "Botella de agua",
      "Conductor y guía",
      "Guía local",
      "Traslado de ida y vuelta al hotel",
      "Transporte en monovolumen con aire acondicionado"
    ],
    notIncluded: [
      "Almuerzo (disponible para comprar)",
      "Fotos profesionales",
      "Propinas"
    ],
    itinerary: [
      "Recogida en hotel",
      "Traslado a Bagaces, Guanacaste",
      "Llegada a Llanos de Cortés",
      "Caminata hacia la cascada",
      "Tiempo libre para nadar y explorar",
      "Fotografías y descanso",
      "Opción: degustación de café o compras",
      "Sorpresa de delicias locales",
      "Regreso al hotel"
    ],
    location: "Llanos de Cortés, Bagaces, Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece.",
    ageRange: "Todas las edades",
    accessibility: "Consultar disponibilidad",
    additionalInfo: [
      "La confirmación se recibirá en el momento en que se realice la reserva",
      "La mayoría de viajeros pueden participar en la experiencia",
      "Esta es una excursión o actividad privada. Solo puede participar su grupo",
      "Se reserva con 25 días de antelación en promedio"
    ]
  }
];

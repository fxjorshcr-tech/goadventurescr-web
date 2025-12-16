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
  itinerary: string[];
  location: string;
  maxParticipants: number;
  cancellationPolicy: string;
}

export const tours: Tour[] = [
  {
    id: "tirolesa-aventura",
    title: "Aventura en Tirolesa Personalizable",
    description: "¡Muchas aventuras y momentos inolvidables le esperan a toda su familia! Algunos de nuestros escaladores más confiados comienzan a entrenar a la edad de 2 años.",
    longDescription: "¿Estás buscando una actividad divertida para toda la familia? Únase a nosotros y a los monos aulladores que se balancean de árbol en árbol. ¡De jóvenes a mayores, la experiencia está diseñada para todos ustedes! Nuestros aventureros más jóvenes tienen 2 años y aspiran a convertirse en escaladores ágiles y seguros. El parkour está diseñado para mejorar la cohesión de tu familia mientras exploras el importante acuífero de Nimboyores, responsable de una gran cantidad de agua que fluye hacia la costa.\n\nA poca distancia en auto de varias ubicaciones de playa, este lugar invita a una entretenida excursión de medio día. Además de las tirolesas descubre: puente colgante, puente tibetano, escalera de caracol que envuelve un árbol gigante de Guanacaste, ¡e incluso un columpio de Tarzán!\n\nPara aquellos que buscan llevar su aventura en tirolesa a un nivel completamente nuevo, pueden seleccionar una experiencia al atardecer o de noche.",
    price: 86,
    duration: "3 horas",
    rating: 5.0,
    reviewCount: 1,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/sloth-costa-rica.jpeg",
    category: "Tirolina",
    highlights: [
      "Cancelación gratuita hasta 24 horas antes",
      "Guía en español e inglés",
      "Apto para toda la familia",
      "Experiencia al atardecer o noche disponible"
    ],
    included: ["Agua embotellada", "Equipo de seguridad", "Guía profesional"],
    itinerary: [
      "Recogida en hotel (opcional)",
      "Briefing de seguridad",
      "Recorrido de tirolesas",
      "Puente colgante y tibetano",
      "Columpio de Tarzán",
      "Regreso al punto de inicio"
    ],
    location: "Province of Guanacaste",
    maxParticipants: 15,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece."
  },
  {
    id: "zona-azul-guanacaste",
    title: "Tour de Medio Día en Zona Azul de Guanacaste",
    description: "Revelan los secretos de la longevidad en Costa Rica. Imagina vivir una vida llena de alegría y vitalidad, donde puedas apreciar cada momento.",
    longDescription: "Descubra los secretos de la longevidad: viaje a través de zonas de vitalidad, donde las enfermedades crónicas son raras y la esperanza de vida aumenta.\n\nSumérgete en un estilo de vida marcado por una vigorizante actividad física, sólidos vínculos comunitarios y una dieta profundamente arraigada en las tradiciones regionales. Descubra los matices culturales de los centenarios y deleite sus sentidos con sus tesoros culinarios locales.\n\nÚnase a nosotros en este viaje de retroceso a mil años de tradición, para experimentar la Costa Rica de otros milenios, antes de los conquistadores, antes de la modernización, antes de que Costa Rica fuera Costa Rica. Guaitil vive, respira historia. Guaitil es un pueblo indígena Chorotega, llamado así por el árbol Guaitil que da tintes, donde encontrará más respuestas sobre cómo surgió la Zona Azul.\n\n¿Sabías que Nicoya es una de las 7 Zonas Azules reconocidas mundialmente?",
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
      "Visita a Guaitil Pottery Studio"
    ],
    included: ["Agua embotellada", "Sodas", "Almuerzo Tradicional Local", "Entrada a Guaitil Pottery Studio"],
    itinerary: [
      "Recogida en hotel",
      "Visita a Guaitil Pottery Studio (1 hora)",
      "Exploración del pueblo de Nicoya (1 hora)",
      "Almuerzo tradicional",
      "Regreso al hotel"
    ],
    location: "Santa Bárbara y Nicoya, Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece."
  },
  {
    id: "inmersion-cafe",
    title: "Inmersión para Amantes del Café",
    description: "¡Nuestro equipo está formado por personas únicas que se propusieron poner su felicidad en primer lugar! Crear momentos inolvidables con el mejor café de Costa Rica.",
    longDescription: "Descubre el proceso completo del café costarricense, desde la semilla hasta tu taza. Costa Rica es reconocida mundialmente por producir algunos de los mejores cafés del mundo, y en esta experiencia inmersiva tendrás la oportunidad de conocer cada paso del proceso.\n\nVisitarás una finca cafetalera tradicional donde aprenderás sobre el cultivo, la cosecha y el procesamiento del café. Participarás en una clase de preparación donde descubrirás los secretos de los baristas profesionales.\n\nAdemás, disfrutarás de una degustación de diferentes variedades de café de la región, aprendiendo a identificar los matices y sabores únicos que hacen del café costarricense un producto de clase mundial.",
    price: 169,
    duration: "6 horas",
    rating: 4.8,
    reviewCount: 4,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/ave-costa-rica.jpeg",
    category: "Clases de cocina",
    highlights: [
      "Cancelación gratuita hasta 24 horas antes",
      "Tour de finca cafetalera",
      "Clase de preparación de café",
      "Degustación incluida"
    ],
    included: ["Transporte", "Guía experto", "Degustación de café", "Snacks", "Certificado de participación"],
    itinerary: [
      "Recogida en punto de encuentro",
      "Llegada a la finca cafetalera",
      "Tour por los cultivos",
      "Demostración del proceso de tostado",
      "Clase de preparación de café",
      "Degustación y cierre"
    ],
    location: "Province of Guanacaste",
    maxParticipants: 12,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece."
  },
  {
    id: "cascadas-spa",
    title: "Cascadas y Spa",
    description: "Déjese sorprender por la belleza de la Madre Tierra. Esta es un recorrido único que le llevará a dos espectaculares cascadas en medio de la naturaleza.",
    longDescription: "Escápate del ruido de la vida cotidiana y sumérgete en la serenidad de la naturaleza costarricense. Este tour te llevará a descubrir dos de las cascadas más impresionantes de Guanacaste, escondidas en medio de bosques tropicales.\n\nEl recorrido incluye una caminata moderada a través de senderos naturales, donde tendrás la oportunidad de observar la rica biodiversidad de la zona. Al llegar a las cascadas, podrás refrescarte en sus aguas cristalinas y dejarte envolver por la energía revitalizante del lugar.\n\nPara completar esta experiencia de bienestar, disfrutarás de una sesión de spa con tratamientos inspirados en ingredientes naturales de Costa Rica, dejándote completamente renovado y conectado con la naturaleza.",
    price: 204,
    duration: "5-7 horas",
    rating: 4.5,
    reviewCount: 8,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/psicina.jpeg",
    category: "Excursiones de un día",
    highlights: [
      "Cancelación gratuita hasta 24 horas antes",
      "Dos cascadas espectaculares",
      "Sesión de spa incluida",
      "Almuerzo saludable"
    ],
    included: ["Transporte", "Guía naturalista", "Entrada al spa", "Almuerzo", "Toallas"],
    itinerary: [
      "Recogida en hotel",
      "Caminata hacia la primera cascada",
      "Tiempo libre para nadar",
      "Segunda cascada",
      "Almuerzo",
      "Sesión de spa",
      "Regreso"
    ],
    location: "Province of Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "Para recibir el reembolso íntegro de la experiencia debes cancelarla al menos 24 horas antes de que empiece."
  }
];

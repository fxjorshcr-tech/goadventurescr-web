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
  images: string[];
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
    title: "Customizable Zipline Adventure",
    description: "Many adventures and unforgettable moments await your whole family! Some of our most confident climbers start training at the age of 2.",
    longDescription: `Are you looking for a fun activity for the whole family? Join us and the howler monkeys swinging from tree to tree. From young to old, the experience is designed for all of you! Our youngest adventurers are 2 years old and aspire to become agile and confident climbers.

The parkour is designed to improve your family's cohesion while exploring the important Nimboyores aquifer, responsible for a large amount of water flowing to the coast.

A short drive from several beach locations, this place invites an entertaining half-day excursion.

In addition to the ziplines discover:
• Hanging bridge
• Tibetan bridge
• Spiral staircase wrapping around a giant Guanacaste tree
• And even a Tarzan swing!

SUNSET
The most beautiful sunsets need a cloudy sky to paint the world artistically in orange and purple! Put on your helmet and turn on your headlamp because things are about to get serious! Swing like Tarzan from tree to tree, fly on ziplines through the sky and cross a hanging bridge as night approaches.

NIGHT
For an extra dose of adrenaline, let's turn off the lights! Train your owl eyes and take the leap. Experience the mysteries of the Costa Rican jungle at night, watch for animals that only come out in the dark, and enjoy this unique adventure of self-discovery.`,
    price: 86,
    duration: "3 hours",
    rating: 5.0,
    reviewCount: 1,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/tirolesa1.png",
    images: [
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/tirolesa1.png",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/tirolesa2.JPG",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/tirolesa4.jpeg"
    ],
    category: "Zipline",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Spanish and English guide",
      "Suitable for the whole family (from 2 years old)",
      "Sunset or night experience available",
      "Includes hanging and Tibetan bridges",
      "Tarzan swing included"
    ],
    included: [
      "Bottled water",
      "Complete safety equipment",
      "Certified professional guide",
      "Helmet and headlamp (night tours)"
    ],
    notIncluded: [
      "Hotel pickup (available at additional cost)",
      "Souvenir photos"
    ],
    itinerary: [
      "Arrival and check-in at the park",
      "Safety briefing and equipment",
      "Main zipline tour",
      "Hanging bridge crossing",
      "Tibetan bridge adventure",
      "Spiral staircase on giant tree",
      "Tarzan swing",
      "Free time and photos",
      "Return to starting point"
    ],
    location: "Province of Guanacaste",
    maxParticipants: 15,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "2 to 99 years",
    accessibility: "Not wheelchair accessible",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "Not recommended for travelers with back problems",
      "Not recommended for pregnant travelers",
      "Most travelers can participate in the experience",
      "This tour requires a minimum number of travelers"
    ]
  },
  {
    id: "zona-azul-guanacaste",
    title: "Half-Day Blue Zone Tour in Guanacaste",
    description: "Discover the secrets of longevity in Costa Rica. Imagine living a life full of joy and vitality, where you can appreciate every moment.",
    longDescription: `Discover the secrets of longevity: travel through zones of vitality, where chronic diseases are rare and life expectancy increases.

Immerse yourself in a lifestyle marked by invigorating physical activity, strong community bonds, and a diet deeply rooted in regional traditions. Discover the cultural nuances of centenarians and delight your senses with their local culinary treasures.

GUAITIL POTTERY STUDIO (1 hour)
Stop at: Guaitil Pottery Studio, La Rotonda next to the restaurant Surf Shack, Tamarindo, Costa Rica

Join us on this journey back through a thousand years of tradition, to experience the Costa Rica of other millennia, before the conquistadors, before modernization, before Costa Rica was Costa Rica. Guaitil lives, breathes history. Guaitil is an indigenous Chorotega village, named after the Guaitil dye tree, where you will find more answers about how the Blue Zone came to be.

NICOYA (1 hour)
Stop at: Nicoya, Nicoya, Province of Guanacaste

Did you know that Nicoya is one of the 7 Blue Zones recognized worldwide?

Let's embark on a journey through time in Nicoya, where echoes of the past resonate in every corner. Immerse yourself in the serene atmosphere of this cultural gem, a testament to Costa Rica's legacy. Marvel at the historic architectural masterpiece representing the oldest churches in the country.`,
    price: 208,
    duration: "5-6 hours",
    rating: 5.0,
    reviewCount: 1,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/artesania1.png",
    images: [
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/artesania1.png",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/artesania2.png",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/artesania3.png"
    ],
    category: "Private & Luxury",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Private and luxury tour",
      "Traditional lunch included",
      "Visit to Guaitil Pottery Studio",
      "Explore one of the 7 Blue Zones in the world",
      "Hotel pickup included"
    ],
    included: [
      "Bottled water",
      "Sodas and refreshments",
      "Traditional Local Lunch",
      "Entrance to Guaitil Pottery Studio",
      "Air-conditioned vehicle transportation",
      "Expert local guide",
      "Hotel pickup and drop-off"
    ],
    itinerary: [
      "Hotel pickup",
      "Transfer to Santa Bárbara, Guanacaste",
      "Visit to Guaitil Pottery Studio (1 hour)",
      "Chorotega pottery demonstration",
      "Transfer to Nicoya",
      "Exploration of Nicoya town (1 hour)",
      "Visit to the historic church",
      "Traditional lunch",
      "Return to hotel"
    ],
    location: "Santa Bárbara and Nicoya, Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "All ages",
    accessibility: "Not wheelchair accessible",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "This is a private tour or activity. Only your group will participate",
      "Booked an average of 78 days in advance",
      "This experience requires a minimum number of travelers"
    ]
  },
  {
    id: "inmersion-cafe",
    title: "Coffee Lovers Immersion",
    description: "A great way to learn about Costa Rican culture is through its coffee, and this private tour does just that.",
    longDescription: `Want to know Costa Rican culture? Then start with coffee!

More than 90% of coffee production is exported worldwide due to Costa Rica's ideal combination of climate, altitude and soil. Try it yourself and let our local farmers guide you through the processes and techniques that transform these red fruits into an aromatic delight! 🍒

Of course, this includes tasting multiple varieties and learning to distinguish quality brews.

*PREMIUM*
For those looking to discover more cultural secrets, upgrade to our Premium Experience which adds a Chorotega culture immersion and a local snack to your trip.

We will take you to a village that preserves the indigenous spirit through a hands-on pottery experience that aims to transmit and treasure the memory of their ancestors.

A great way to learn about Costa Rican culture is through its coffee, and this private tour does just that. You'll start the tour with hotel pickup for convenience and then learn all about Costa Rican coffee.`,
    price: 169,
    duration: "6 hours",
    rating: 5.0,
    reviewCount: 4,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cafe1.png",
    images: [
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cafe1.png",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cafe2.png",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cafe3.png"
    ],
    category: "Cooking Classes",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Personalized private tour",
      "Tasting of multiple coffee varieties",
      "Hotel pickup and drop-off included",
      "Spanish and English guide",
      "Premium option with Chorotega pottery"
    ],
    included: [
      "All activities",
      "Driver / guide",
      "Water bottle",
      "Hotel pickup and drop-off",
      "Air-conditioned minivan transportation",
      "Coffee tasting"
    ],
    notIncluded: [
      "Souvenir photos (available for purchase)",
      "Tips"
    ],
    itinerary: [
      "Hotel pickup",
      "Transfer to coffee farm",
      "Tour of coffee crops",
      "Explanation of harvesting process",
      "Roasting process demonstration",
      "Coffee preparation class",
      "Variety tasting",
      "Shopping time (optional)",
      "Return to hotel"
    ],
    location: "Tamarindo, Province of Guanacaste",
    maxParticipants: 12,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "1 to 99 years",
    accessibility: "Wheelchair accessible",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "Children must be accompanied by an adult",
      "May be operated by a multilingual guide",
      "This is a private tour or activity. Only your group will participate"
    ]
  },
  {
    id: "cascadas-spa",
    title: "Waterfalls & Spa",
    description: "Explore the fascinating nature of Costa Rica and hike to a majestic waterfall that plunges into a natural basin!",
    longDescription: `Explore the fascinating nature of Costa Rica, watch out for wildlife inhabiting the area and hike to a majestic waterfall that plunges into a natural basin! As you admire this gigantic beauty, enjoy the waters and let your spirit marvel as you feel all your burdens fade away.

*PREMIUM*
For those who wish to add a cultural touch to their trip, your private driver will gladly include a coffee tasting experience or souvenir shopping along the way. Plus, several local delicacies will be waiting for our guests as a surprise!

LLANOS DE CORTÉS
Stop at: Llanos de Cortés, Province of Guanacaste, Bagaces, Costa Rica

Discover one of the most impressive waterfalls in Costa Rica. The Llanos de Cortés waterfall is a hidden treasure that will take your breath away. Its crystal-clear waters fall from a considerable height forming a spectacular curtain of water, perfect for cooling off and connecting with nature.

The tour includes enough time to enjoy the natural surroundings, swim in the cool water pools and capture incredible photographs of this natural paradise.`,
    price: 204,
    duration: "6 hours",
    rating: 5.0,
    reviewCount: 8,
    image: "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cascada1.png",
    images: [
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cascada1.png",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cascada2.png",
      "https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/cascada3.png"
    ],
    category: "Day Trips",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Spectacular Llanos de Cortés waterfall",
      "Swimming time included",
      "Coffee tasting option",
      "Local delicacies as a surprise",
      "Round-trip transportation included"
    ],
    included: [
      "National park entrance",
      "Municipal taxes",
      "Water bottle",
      "Driver and guide",
      "Local guide",
      "Round-trip hotel transfer",
      "Air-conditioned minivan transportation"
    ],
    notIncluded: [
      "Lunch (available for purchase)",
      "Professional photos",
      "Tips"
    ],
    itinerary: [
      "Hotel pickup",
      "Transfer to Bagaces, Guanacaste",
      "Arrival at Llanos de Cortés",
      "Hike to the waterfall",
      "Free time for swimming and exploring",
      "Photos and rest",
      "Option: coffee tasting or shopping",
      "Surprise local delicacies",
      "Return to hotel"
    ],
    location: "Llanos de Cortés, Bagaces, Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "All ages",
    accessibility: "Check availability",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "Most travelers can participate in the experience",
      "This is a private tour or activity. Only your group will participate",
      "Booked an average of 25 days in advance"
    ]
  }
];

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
  isCombo?: boolean;
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
    image: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/artesanias-guatil.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL2FydGVzYW5pYXMtZ3VhdGlsLmpwZyIsImlhdCI6MTc2OTQ4NDU2NiwiZXhwIjoyNDAwMjA0NTY2fQ.fWDQTVn9MzkQy8ltdUg0Wf4cwdJnDZKQ7LwAMLWSUhs",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/gua-blue-zone-pic.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL2d1YS1ibHVlLXpvbmUtcGljLmpwZyIsImlhdCI6MTc2OTQ4NTY2OCwiZXhwIjoyNDAwMjA1NjY4fQ.tJh4CcZLxhVQiFZs-c2xOMFxMINg83Ql1gGZjKZ3nKw",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/gua-iglesia-nicoya.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL2d1YS1pZ2xlc2lhLW5pY295YS5qcGciLCJpYXQiOjE3Njk0ODU2ODksImV4cCI6MjQwMDIwNTY4OX0.trfB6ePhvHMHZio-qcwfgMZU_-jQjAqTQ4MQA6OdOxc",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/PRUEBAS/gua-Receta-Rosquillas-guanacaste.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQUlVFQkFTL2d1YS1SZWNldGEtUm9zcXVpbGxhcy1ndWFuYWNhc3RlLmpwZyIsImlhdCI6MTc2OTQ4NTcwMSwiZXhwIjoyNDAwMjA1NzAxfQ.OLPJSky7LvlxeMf5CTYV3K2HC_zI7Wvp6RcTgIvYUpc"
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
    image: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/Aromal/llanos-catarata-cortes.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcm9tYWwvbGxhbm9zLWNhdGFyYXRhLWNvcnRlcy53ZWJwIiwiaWF0IjoxNzY5NTY1MTU5LCJleHAiOjI0MDAyODUxNTl9.TOfxy4hLeiLdVoqJRDXkxAAq9xdmZZkqh4Jm5i1zNek",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/Aromal/llanos-catarata-cortes.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcm9tYWwvbGxhbm9zLWNhdGFyYXRhLWNvcnRlcy53ZWJwIiwiaWF0IjoxNzY5NTY1MTU5LCJleHAiOjI0MDAyODUxNTl9.TOfxy4hLeiLdVoqJRDXkxAAq9xdmZZkqh4Jm5i1zNek",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/Aromal/llanos-cafe-costa-rica-guana.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcm9tYWwvbGxhbm9zLWNhZmUtY29zdGEtcmljYS1ndWFuYS53ZWJwIiwiaWF0IjoxNzY5NTY1MTM5LCJleHAiOjI0MDAyODUxMzl9.Vvo_3ncKpcdbSoRp5wDbrVtFd-PdxMmDzO685rgMe30",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/Aromal/llanos2-cristian.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcm9tYWwvbGxhbm9zMi1jcmlzdGlhbi53ZWJwIiwiaWF0IjoxNzY5NTY1MTcwLCJleHAiOjI0MDAyODUxNzB9.36MUrkYMHHwTV56GumwghOckoXxQqd-3JtQ2MFRy3Rc"
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

export const comboTours: Tour[] = [
  {
    id: "combo-cafe-cultural",
    title: "Coffee Plantation & Indigenous Culture",
    description: "Immerse yourself in the rich history of Costa Rican coffee production and experience the vibrant culture of the indigenous Guaitil community.",
    longDescription: `Discover the heart of Costa Rican culture through its world-renowned coffee and ancient indigenous traditions on this unforgettable combo experience.

COFFEE PLANTATION VISIT
Your journey begins at a traditional coffee plantation nestled in the highlands of Guanacaste. Costa Rica is famous for producing some of the finest Arabica coffee in the world, and here you will learn why. Walk through lush coffee fields as your expert guide explains the meticulous process from seed to cup — from the careful selection of coffee cherries, to the sun-drying and roasting methods that give Costa Rican coffee its distinctive flavor profile.

You will participate in a hands-on coffee tasting session, learning to distinguish between different roast levels and flavor notes. The plantation visit also includes a look at sustainable farming practices that make Costa Rican coffee one of the most eco-friendly in the world.

GUAITIL INDIGENOUS VILLAGE
After your coffee immersion, travel to the fascinating village of Guaitil, home to the Chorotega indigenous community. This village has preserved its ancestral pottery-making traditions for over a thousand years. Watch as skilled artisans craft beautiful ceramics using techniques passed down through generations — no pottery wheel, no modern kiln, just the same methods their ancestors used centuries before the Spanish conquest.

You will have the opportunity to try your hand at pottery-making, learn about the natural pigments used for decoration, and explore the village where every family is connected to this living art form. Browse the local workshops where you can purchase authentic handmade pieces as unique souvenirs.

A traditional Costa Rican lunch is included, featuring local ingredients and recipes that have nourished the people of this region for generations.`,
    price: 220,
    duration: "6 hours",
    rating: 5.0,
    reviewCount: 3,
    image: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/culturaltours.png",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/culturaltours.png",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/cafe.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/cafe2.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/cafe3.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/cafe4.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/cafe5.webp"
    ],
    category: "Combo Experience",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Private combo experience for your group",
      "Visit a working coffee plantation",
      "Hands-on pottery with Chorotega artisans",
      "Traditional Costa Rican lunch included",
      "Bilingual guide (English & Spanish)"
    ],
    included: [
      "Traditional Costa Rican lunch",
      "Round-trip hotel transportation",
      "Bilingual guide (English & Spanish)",
      "Coffee plantation entrance & tasting",
      "Guaitil village entrance",
      "Bottled water"
    ],
    notIncluded: [
      "Souvenirs and pottery purchases",
      "Tips"
    ],
    itinerary: [
      "Hotel pickup in air-conditioned vehicle",
      "Transfer to coffee plantation",
      "Guided tour of coffee fields and processing facilities",
      "Coffee tasting session with multiple varieties",
      "Transfer to Guaitil indigenous village",
      "Pottery demonstration by Chorotega artisans",
      "Hands-on pottery experience",
      "Traditional Costa Rican lunch",
      "Free time to explore village workshops",
      "Return transfer to hotel"
    ],
    location: "Guanacaste Highlands & Guaitil Village",
    maxParticipants: 10,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "All ages",
    accessibility: "Moderate walking required",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "This is a private combo tour — only your group will participate",
      "Comfortable walking shoes recommended",
      "Bring sun protection and a hat"
    ],
    isCombo: true
  },
  {
    id: "combo-rafting-tenorio",
    title: "White Water Rafting on Tenorio River",
    description: "Experience the thrill of Class III and IV rapids on the legendary Tenorio River, one of Costa Rica's premier white water rafting destinations.",
    longDescription: `Get ready for an adrenaline-pumping adventure on the Tenorio River, one of the most exciting white water rafting experiences in all of Costa Rica!

THE TENORIO RIVER EXPERIENCE
The Tenorio River flows through a stunning volcanic landscape, fed by the waters of the Tenorio Volcano and surrounded by lush tropical rainforest. This river is renowned for its consistent Class III and IV rapids that provide the perfect balance of excitement and safety — thrilling enough for adventure seekers, yet manageable for those with basic fitness levels.

Your adventure begins with a comprehensive safety briefing from your experienced river guides, who are certified professionals with years of navigating these waters. You will be fitted with top-quality safety equipment including helmets, life jackets, and paddles.

RAPIDS & WILDLIFE
As you navigate through the rapids, you will paddle through narrow canyons, bounce over exciting drops, and glide through calmer stretches where you can catch your breath and admire the incredible scenery. The Tenorio River corridor is home to an abundance of wildlife — keep your eyes peeled for toucans, herons, iguanas, and if you are lucky, howler monkeys swinging through the canopy above.

The approximately 12-kilometer route takes you through some of the most beautiful and untouched landscapes in Guanacaste, with towering trees, hanging vines, and crystal-clear tributary streams joining the main river along the way.

After your rafting adventure, enjoy a well-deserved traditional Costa Rican lunch at a riverside restaurant, where you can relive the excitement of the day and share stories with your fellow rafters.`,
    price: 235,
    duration: "7 hours",
    rating: 5.0,
    reviewCount: 5,
    image: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rafting.png",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rafting.png",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rafting.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rafting3.webp"
    ],
    category: "Combo Experience",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Exciting Class III and IV rapids",
      "Experienced certified river guides",
      "Stunning tropical rainforest scenery",
      "All safety equipment provided",
      "Traditional lunch included"
    ],
    included: [
      "Traditional Costa Rican lunch",
      "Round-trip hotel transportation",
      "Bilingual guide (English & Spanish)",
      "Professional river guides",
      "All rafting equipment (raft, paddle, helmet, life jacket)",
      "Bottled water and snacks",
      "Entrance fees"
    ],
    notIncluded: [
      "Professional photos (available for purchase)",
      "Tips",
      "Personal waterproof camera"
    ],
    itinerary: [
      "Hotel pickup in air-conditioned vehicle",
      "Transfer to Tenorio River base camp",
      "Safety briefing and equipment fitting",
      "White water rafting adventure (~12 km)",
      "Navigate exciting Class III and IV rapids",
      "Wildlife spotting along the river corridor",
      "Arrive at take-out point",
      "Traditional Costa Rican lunch",
      "Return transfer to hotel"
    ],
    location: "Tenorio River, Guanacaste",
    maxParticipants: 12,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "12 to 65 years",
    accessibility: "Moderate fitness level required",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "Not recommended for pregnant travelers",
      "Not recommended for travelers with back or heart problems",
      "Participants must know how to swim",
      "Wear quick-dry clothing and secure footwear (no flip-flops)",
      "Bring a change of clothes"
    ],
    isCombo: true
  },
  {
    id: "combo-rincon-vieja",
    title: "Rincon de la Vieja Volcano Exploration",
    description: "Discover the volcanic wonders of Rincon de la Vieja National Park, including a majestic waterfall, volcanic trails, and relaxing natural hot springs.",
    longDescription: `Embark on an extraordinary journey through one of Costa Rica's most spectacular volcanic landscapes at Rincon de la Vieja National Park, a UNESCO World Heritage Site candidate.

RINCON DE LA VIEJA NATIONAL PARK
Rincon de la Vieja is an active volcano standing at 1,916 meters (6,286 feet) and is the centerpiece of a national park that protects over 14,000 hectares of diverse ecosystems. The park is a geological wonderland featuring bubbling mud pots (Las Pailas), steaming fumaroles, volcanic hot springs, and stunning waterfalls — all set against a backdrop of pristine tropical dry and cloud forests.

HIKING & WATERFALLS
Your guided hike takes you along well-maintained trails through the volcanic landscape, where your naturalist guide will point out the unique geological features and the incredible biodiversity that thrives in this volcanic environment. The park is home to over 300 species of birds, howler and white-faced monkeys, coatis, and an impressive variety of orchids and bromeliads.

The trail leads to a breathtaking waterfall cascading into a natural pool where you can take a refreshing swim surrounded by the sounds of the jungle. The waterfall, fed by volcanic springs, creates a magical setting that perfectly captures the raw beauty of Costa Rica.

NATURAL HOT SPRINGS
After your hike, reward yourself with a visit to natural volcanic hot springs. These thermal waters, heated by the volcano's geothermal activity, are rich in minerals that are believed to have therapeutic properties. Soak in pools of varying temperatures while surrounded by tropical gardens — the ultimate relaxation after a day of adventure.

A hearty traditional lunch is included to fuel your explorations, featuring local dishes prepared with fresh ingredients from the region.`,
    price: 235,
    duration: "7 hours",
    rating: 5.0,
    reviewCount: 4,
    image: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/RINCONFOTOPEQUENA.png",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rincon1.jpg",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rinco20.jpg",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rincon4.jpg",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/rincon5.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/RINCONFOTOPEQUENA.png"
    ],
    category: "Combo Experience",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Hike through volcanic landscapes",
      "Swim at a majestic waterfall",
      "Relax in natural volcanic hot springs",
      "Abundant wildlife and bird watching",
      "Traditional lunch included"
    ],
    included: [
      "Traditional Costa Rican lunch",
      "Round-trip hotel transportation",
      "Bilingual naturalist guide",
      "National park entrance fees",
      "Hot springs entrance",
      "Bottled water"
    ],
    notIncluded: [
      "Professional photos",
      "Tips",
      "Towel for hot springs"
    ],
    itinerary: [
      "Hotel pickup in air-conditioned vehicle",
      "Transfer to Rincon de la Vieja National Park",
      "Guided hike through volcanic trails and Las Pailas",
      "Explore bubbling mud pots and fumaroles",
      "Hike to the majestic waterfall",
      "Swimming time at the waterfall pool",
      "Traditional Costa Rican lunch",
      "Visit to natural volcanic hot springs",
      "Relaxation time in thermal pools",
      "Return transfer to hotel"
    ],
    location: "Rincon de la Vieja National Park, Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "6 to 70 years",
    accessibility: "Moderate hiking required — trails may be uneven",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "Wear comfortable hiking shoes with good grip",
      "Bring swimwear, towel, and sun protection",
      "Bring insect repellent",
      "Trail difficulty: moderate (approximately 3-4 km round trip)",
      "This is a private tour — only your group will participate"
    ],
    isCombo: true
  },
  {
    id: "combo-rio-celeste-mariposas",
    title: "Rio Celeste & Butterfly Garden",
    description: "Behold the breathtaking beauty of Rio Celeste, a river famous for its unique blue color, explore the Llanos del Cortes waterfall, and discover a vibrant butterfly garden.",
    longDescription: `Experience three of Costa Rica's most magical natural attractions in one extraordinary day — the legendary blue waters of Rio Celeste, the stunning Llanos del Cortes waterfall, and a mesmerizing butterfly garden.

RIO CELESTE WATERFALL HIKE
The highlight of this combo experience is the hike to the famous Rio Celeste waterfall inside Tenorio Volcano National Park. Rio Celeste (Sky Blue River) is one of Costa Rica's most spectacular natural phenomena — a river that appears to be painted an impossibly vivid turquoise blue. This stunning color is created by a natural chemical reaction where two clear rivers meet, causing volcanic minerals to reflect sunlight in a way that produces the river's signature celestial blue hue.

Your guided hike follows a well-maintained trail through primary rainforest, descending to a viewpoint where the Rio Celeste waterfall plunges dramatically into a bright blue pool below. The sight is truly unforgettable and one of the most photographed locations in all of Costa Rica. Along the trail, your naturalist guide will help you spot wildlife including toucans, poison dart frogs, and various monkey species.

LLANOS DEL CORTES WATERFALL
Next, visit the magnificent Llanos del Cortes waterfall — one of the widest waterfalls in Costa Rica. This 12-meter-high, 15-meter-wide curtain of water cascades into a large, swimmable pool with a sandy beach at the base. It is the perfect spot to cool off, swim, and relax surrounded by pristine nature.

BUTTERFLY GARDEN
Complete your nature immersion at a tropical butterfly garden, home to dozens of species of Costa Rican butterflies including the famous Blue Morpho. Walk through enclosed gardens as vibrant butterflies flutter around you, landing on flowers and occasionally on visitors. Learn about the fascinating butterfly life cycle, from caterpillar to chrysalis to the magnificent winged creatures that are vital pollinators of Costa Rica's ecosystems.

A delicious traditional lunch is included to keep you energized throughout this full day of natural wonders.`,
    price: 245,
    duration: "8 hours",
    rating: 5.0,
    reviewCount: 6,
    image: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/waterfalllover.png",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/waterfalllover.png",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/rio-celeste-hike-tenorio-volcano-national-park-waterfalls-in-costa-rica-1.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/rio-celeste-river-tenorio-blueriver-costa-rica.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/llanos1.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/llanos2.webp",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/morpho.jpg",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/morpho2.jpg",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/morpho3.jpg"
    ],
    category: "Combo Experience",
    highlights: [
      "Free cancellation up to 24 hours before",
      "Hike to the legendary blue Rio Celeste waterfall",
      "Swim at Llanos del Cortes waterfall",
      "Explore a tropical butterfly garden with Blue Morphos",
      "Expert naturalist guide included",
      "Traditional lunch included"
    ],
    included: [
      "Traditional Costa Rican lunch",
      "Round-trip hotel transportation",
      "Bilingual naturalist guide",
      "Tenorio Volcano National Park entrance",
      "Llanos del Cortes entrance",
      "Butterfly garden entrance",
      "Bottled water"
    ],
    notIncluded: [
      "Professional photos",
      "Tips",
      "Towel"
    ],
    itinerary: [
      "Hotel pickup in air-conditioned vehicle",
      "Transfer to Tenorio Volcano National Park",
      "Guided rainforest hike to Rio Celeste waterfall",
      "Explore the blue river and viewpoints",
      "Traditional Costa Rican lunch",
      "Visit to Llanos del Cortes waterfall",
      "Swimming and relaxation at the waterfall pool",
      "Visit to tropical butterfly garden",
      "Learn about butterfly life cycles and species",
      "Return transfer to hotel"
    ],
    location: "Tenorio Volcano National Park & Bagaces, Guanacaste",
    maxParticipants: 10,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "6 to 70 years",
    accessibility: "Moderate hiking required — some steep sections on Rio Celeste trail",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "Wear comfortable hiking shoes with good grip",
      "Bring swimwear for Llanos del Cortes",
      "Bring rain jacket — the Tenorio area can be misty",
      "Swimming is NOT permitted in Rio Celeste itself (national park regulation)",
      "Trail is approximately 4 km round trip with some elevation changes",
      "This is a private tour — only your group will participate"
    ],
    isCombo: true
  },
  {
    id: "combo-palo-verde-safari",
    title: "Palo Verde Boat Safari & Indigenous Village",
    description: "Discover the diverse wildlife of Palo Verde National Park on a river boat tour and experience the traditional pottery-making techniques of the Guaitil village.",
    longDescription: `Combine wildlife adventure with cultural immersion on this extraordinary combo that takes you from the wetlands of Palo Verde National Park to the ancestral pottery studios of Guaitil village.

PALO VERDE NATIONAL PARK BOAT SAFARI
Palo Verde National Park is one of the most important wetland ecosystems in Central America and a paradise for birdwatchers and nature enthusiasts. Located at the mouth of the Tempisque River, this park protects over 13,000 hectares of wetlands, mangroves, and tropical dry forest that serve as critical habitat for an incredible diversity of wildlife.

Your river boat safari glides along the Tempisque River, giving you front-row seats to one of the most spectacular wildlife shows in Costa Rica. Palo Verde is home to over 300 species of birds — more than almost any other location in the country. Watch for magnificent jabirus (the largest flying bird in the Americas), roseate spoonbills, great blue herons, wood storks, and dozens of other wading birds and waterfowl.

But the birds are just the beginning! The river is also home to massive American crocodiles basking on the banks, green iguanas perched in riverside trees, howler monkeys calling from the canopy, and if you are lucky, you might spot white-tailed deer, coatis, or even a boa constrictor. Your expert naturalist guide will identify species and share fascinating information about the ecosystem.

GUAITIL INDIGENOUS VILLAGE
After your wildlife adventure, travel to the charming village of Guaitil, home of the Chorotega indigenous people. This remarkable community has maintained its pre-Columbian pottery traditions for over a thousand years. Every family in the village is involved in creating beautiful ceramics using the same techniques their ancestors perfected centuries ago.

Watch master artisans shape clay by hand (no pottery wheels here!), fire their creations in traditional wood-burning kilns, and decorate them with natural pigments derived from local plants and minerals. You will have the opportunity to try pottery-making yourself and browse the workshops where you can purchase authentic handmade pieces.

A traditional lunch with local flavors completes this perfect combination of nature and culture.`,
    price: 190,
    duration: "7 hours",
    rating: 5.0,
    reviewCount: 4,
    image: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/paloverdetours.png",
    images: [
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/paloverdetours.png",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/paloverde.jpg",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/paloverde.png",
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Cristian/paloverde2.webp"
    ],
    category: "Combo Experience",
    highlights: [
      "Free cancellation up to 24 hours before",
      "River boat safari in Palo Verde National Park",
      "Spot crocodiles, monkeys, and 300+ bird species",
      "Visit Chorotega indigenous pottery village",
      "Traditional lunch included",
      "Bilingual naturalist guide"
    ],
    included: [
      "Traditional Costa Rican lunch",
      "Round-trip hotel transportation",
      "Bilingual naturalist guide",
      "Palo Verde National Park entrance",
      "River boat safari",
      "Guaitil village visit",
      "Bottled water"
    ],
    notIncluded: [
      "Souvenirs and pottery purchases",
      "Tips",
      "Binoculars (recommended to bring your own)"
    ],
    itinerary: [
      "Hotel pickup in air-conditioned vehicle",
      "Transfer to Palo Verde National Park",
      "Board river boat for wildlife safari",
      "Navigate the Tempisque River spotting wildlife",
      "Birdwatching and crocodile spotting",
      "Traditional Costa Rican lunch",
      "Transfer to Guaitil indigenous village",
      "Pottery demonstration by Chorotega artisans",
      "Free time to explore workshops and purchase souvenirs",
      "Return transfer to hotel"
    ],
    location: "Palo Verde National Park & Guaitil, Guanacaste",
    maxParticipants: 12,
    cancellationPolicy: "For a full refund, you must cancel the experience at least 24 hours before it starts.",
    ageRange: "All ages",
    accessibility: "Accessible — minimal walking required",
    additionalInfo: [
      "Confirmation will be received at time of booking",
      "Bring binoculars for optimal wildlife viewing",
      "Bring sun protection, hat, and sunglasses",
      "Best birdwatching season: December to March (dry season)",
      "This is a private tour — only your group will participate"
    ],
    isCombo: true
  }
];

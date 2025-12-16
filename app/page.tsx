import Link from 'next/link';
import Image from 'next/image';
import { tours } from './data/tours';
import TourCard from './components/TourCard';

export default function Home() {
  return (
    <main>
      {/* Hero Section with Video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/video-intro.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/70 via-green-950/50 to-green-950/80" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Vive la <span className="text-orange-400">Aventura</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Descubre las mejores experiencias de turismo en Guanacaste, Costa Rica.
            Naturaleza, cultura y aventura te esperan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Explorar Tours
            </Link>
            <Link
              href="#sobre-nosotros"
              className="border-2 border-white hover:bg-white hover:text-green-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Conocer más
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Costa Rica Section */}
      <section id="costa-rica" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Costa Rica, <span className="text-orange-500">Pura Vida</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un país donde la biodiversidad se encuentra con la aventura. Hogar del 5% de la biodiversidad mundial
              en solo el 0.03% de la superficie terrestre.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/rana-ojos-rojos.jpeg"
                alt="Rana de ojos rojos de Costa Rica"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Biodiversidad Única</h3>
                <p className="text-gray-200">Flora y fauna excepcional</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden group">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/serpiente-costa-rica.jpeg"
                alt="Serpiente de Costa Rica"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Vida Silvestre</h3>
                <p className="text-gray-200">Encuentros con la naturaleza</p>
              </div>
            </div>

            <div className="relative h-80 rounded-2xl overflow-hidden group md:col-span-2 lg:col-span-1">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/sloth-costa-rica.jpeg"
                alt="Perezoso de Costa Rica"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Experiencias Únicas</h3>
                <p className="text-gray-200">Momentos inolvidables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guanacaste Section */}
      <section className="py-20 bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-orange-400">Guanacaste</span>, tu destino
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Guanacaste es una de las provincias más hermosas de Costa Rica, conocida por sus playas
                de ensueño, su rica cultura sabanera y su biodiversidad única. Aquí encontrarás desde
                volcanes majestuosos hasta bosques tropicales secos.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                La Península de Nicoya, ubicada en Guanacaste, es reconocida mundialmente como una de
                las 7 Zonas Azules del mundo, donde la longevidad y la calidad de vida son excepcionales.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Playas paradisíacas</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Zona Azul de longevidad</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Cultura y tradiciones</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Aventura y ecoturismo</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/serpiente-guanacaste.jpeg"
                alt="Naturaleza de Guanacaste"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
              Nuestros <span className="text-orange-500">Tours</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiencias cuidadosamente diseñadas para que vivas Costa Rica al máximo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-block bg-green-900 hover:bg-green-800 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              Ver todos los tours
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://nilwbtoyxujsdvojfipa.supabase.co/storage/v1/object/public/fotos/ave-costa-rica.jpeg"
                alt="Sobre GoAdventuresCR"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
                Sobre <span className="text-orange-500">Nosotros</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos una empresa local ubicada en el corazón de Guanacaste, Costa Rica. Nuestro equipo
                está formado por personas apasionadas por compartir la belleza y la riqueza cultural de
                nuestra tierra con visitantes de todo el mundo.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Creemos en el turismo sostenible y responsable. Cada una de nuestras experiencias está
                diseñada para respetar el medio ambiente y contribuir positivamente a las comunidades locales.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-500">100+</div>
                  <div className="text-gray-600">Aventuras realizadas</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-orange-500">4.8</div>
                  <div className="text-gray-600">Calificación promedio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Reserva hoy y vive experiencias únicas en Guanacaste, Costa Rica
          </p>
          <Link
            href="/tours"
            className="inline-block bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            Reservar ahora
          </Link>
        </div>
      </section>
    </main>
  );
}

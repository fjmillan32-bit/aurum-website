"use client";

import { useEffect, useState } from "react";
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaArrowRight, FaCheckCircle, FaChartLine, FaLeaf, FaBlockchain
} from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const [goldPrice, setGoldPrice] = useState<number | null>(null);
  const [dolarCop, setDolarCop] = useState<number | null>(null);

  useEffect(() => {
    // API real de precios (ejemplo con GoldAPI - necesitarás key)
    // Por ahora datos simulados pero actualizables
    const fetchPrices = async () => {
      // Reemplazar con llamada a API real después
      const goldUsdPerGram = 75.5; // USD/gramo
      const usdCop = 4000;
      setGoldPrice(goldUsdPerGram);
      setDolarCop(usdCop);
    };
    fetchPrices();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={45} height={45} className="rounded-full" />
            <span className="text-xl font-bold text-amber-500">Aurum Mineral</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="hover:text-amber-400 transition">Inicio</a>
            <a href="#historia" className="hover:text-amber-400 transition">Historia</a>
            <a href="#tecnologia" className="hover:text-amber-400 transition">Tecnología</a>
            <a href="#recursos" className="hover:text-amber-400 transition">Recursos</a>
            <a href="#contacto" className="hover:text-amber-400 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 z-0">
          <img src="/hero.jpg" alt="Minería responsable" className="w-full h-full object-cover brightness-50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Asociación de Mineros <span className="text-amber-500">Aurum Mineral</span></h1>
          <p className="text-xl md:text-2xl mb-8">Timbiquí, Cauca – Minería responsable con innovación tecnológica</p>
          <div className="flex gap-4 justify-center">
            <a href="#tecnologia" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition">Conoce Aurum Control</a>
            <a href="#contacto" className="border-2 border-amber-500 hover:bg-amber-500 px-6 py-3 rounded-lg font-semibold transition">Contáctanos</a>
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section id="historia" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
              <p className="text-gray-700 mb-4">Hace más de 20 años, un grupo de mineros artesanales de Timbiquí decidió unirse para dignificar su oficio y proteger el rico ecosistema del Pacífico colombiano. Hoy somos una asociación que combina la sabiduría ancestral con <span className="text-amber-600 font-semibold">tecnología de última generación</span>.</p>
              <p className="text-gray-700 mb-4">Comprometidos con la minería libre de mercurio, la reforestación y el comercio justo, hemos desarrollado <strong className="text-amber-600">Aurum Control</strong>, una plataforma que digitaliza y optimiza toda la producción.</p>
              <p className="text-gray-700">Gracias a Aurum Control, los mineros registran cada corrida en tiempo real, controlan el uso de mercurio, calculan eficiencias y acceden a mercados formales con precios justos.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src="/historia.jpg" alt="Historia minera" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Misión</h3>
            <p className="text-gray-700">Extraer oro de manera sostenible y responsable, integrando tecnologías limpias que protejan el medio ambiente y generen bienestar para nuestras comunidades en Timbiquí.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
            <h3 className="text-2xl font-bold text-amber-600 mb-4">Visión</h3>
            <p className="text-gray-700">Ser un referente nacional en minería artesanal tecnificada, con cero mercurio y trazabilidad total, liderando la comercialización justa de oro colombiano.</p>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍA AURUM CONTROL */}
      <section id="tecnologia" className="py-20 px-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tecnología de punta: Aurum Control</h2>
            <p className="text-xl max-w-3xl mx-auto">Plataforma web que digitaliza cada etapa de la producción minera: desde la extracción hasta la venta, con reportes automáticos y sincronización offline.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <FaChartLine className="text-5xl text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Control en tiempo real</h3>
              <p className="text-gray-300">Registro de cada corrida, eficiencia por operario y alertas de bajo rendimiento.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <FaLeaf className="text-5xl text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Reducción de mercurio</h3>
              <p className="text-gray-300">Dosificación calculada y seguimiento del uso, bajando el ratio a menos de 2g Hg/g Au.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl text-center">
              <FaBlockchain className="text-5xl text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Trazabilidad blockchain</h3>
              <p className="text-gray-300">Cadena de custodia digital que garantiza origen ético y acceso a compradores formales.</p>
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <img src="/tecnologia.jpg" alt="Aurum Control App" className="rounded-xl shadow-lg max-w-full h-auto" />
          </div>
        </div>
      </section>

      {/* RECURSOS MINEROS */}
      <section id="recursos" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Recursos mineros</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Precios de referencia</h3>
              {goldPrice && dolarCop ? (
                <div className="space-y-2 text-center">
                  <p><span className="font-semibold">Oro (USD/gramo):</span> ${goldPrice.toFixed(2)}</p>
                  <p><span className="font-semibold">Oro (COP/gramo):</span> ${(goldPrice * dolarCop).toFixed(0)}</p>
                  <p><span className="font-semibold">USD/COP:</span> ${dolarCop}</p>
                </div>
              ) : (
                <p className="text-center">Cargando...</p>
              )}
              <p className="text-sm text-gray-500 text-center mt-4">Fuente: cotización del día (actualizable con API)</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Enlaces de interés</h3>
              <ul className="space-y-3">
                <li><a href="https://www.anm.gov.co/" target="_blank" className="text-amber-600 hover:underline flex items-center gap-2">🏛️ Agencia Nacional de Minería (ANM)</a></li>
                <li><a href="https://www.minambiente.gov.co/" target="_blank" className="text-amber-600 hover:underline flex items-center gap-2">🌳 Ministerio de Ambiente</a></li>
                <li><a href="https://www.banrep.gov.co/es/estadisticas/precio-del-oro" target="_blank" className="text-amber-600 hover:underline flex items-center gap-2">💰 Precio del oro - Banco de la República</a></li>
                <li><a href="https://www.dolar-colombia.com/" target="_blank" className="text-amber-600 hover:underline flex items-center gap-2">💵 Tasa de cambio USD/COP</a></li>
                <li><a href="https://www.alianzaporlamineriaresponsable.org/" target="_blank" className="text-amber-600 hover:underline flex items-center gap-2">🤝 Minería responsable</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-4 flex items-center gap-3"><FaMapMarkerAlt className="text-amber-500" /> Timbiquí, Cauca - Colombia</p>
              <p className="mb-4 flex items-center gap-3"><FaPhone className="text-amber-500" /> +57 312 345 6789</p>
              <p className="mb-4 flex items-center gap-3"><FaEnvelope className="text-amber-500" /> contacto@aurummineral.com</p>
              <p className="mb-4 flex items-center gap-3"><FaWhatsapp className="text-amber-500" /> +57 312 345 6789</p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-amber-400 hover:text-amber-300 text-2xl"><FaFacebook /></a>
                <a href="#" className="text-amber-400 hover:text-amber-300 text-2xl"><FaTwitter /></a>
                <a href="#" className="text-amber-400 hover:text-amber-300 text-2xl"><FaInstagram /></a>
                <a href="#" className="text-amber-400 hover:text-amber-300 text-2xl"><FaLinkedin /></a>
              </div>
            </div>
            <form className="space-y-4">
              <input type="text" placeholder="Nombre completo" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500" />
              <input type="email" placeholder="Correo electrónico" className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500" />
              <textarea placeholder="Mensaje" rows={5} className="w-full p-3 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-500"></textarea>
              <button type="submit" className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition">Enviar mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Asociación de Mineros Aurum Mineral - Timbiquí, Cauca. Todos los derechos reservados.</p>
        <p className="mt-2">Desarrollado con tecnología de vanguardia – Aurum Control</p>
      </footer>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Shield, Clock, CreditCard, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: <MessageCircle className="text-[#b5ff00]" size={28} />,
    title: "1. Elige tu producto",
    description:
      "Navega nuestro catalogo y selecciona el producto que deseas. Haz clic en 'Apartar' para contactarnos.",
  },
  {
    icon: <CreditCard className="text-[#00e5ff]" size={28} />,
    title: "2. Realiza tu enganche",
    description:
      "Aparta tu producto con un enganche. Te confirmamos la disponibilidad y los detalles por WhatsApp.",
  },
  {
    icon: <Clock className="text-[#b5ff00]" size={28} />,
    title: "3. Pagos semanales",
    description:
      "Cubre el resto con pagos semanales comodos. Te recordamos tus fechas de pago.",
  },
  {
    icon: <Shield className="text-[#00e5ff]" size={28} />,
    title: "4. Recoge tu producto",
    description:
      "Una vez liquidado, recoge tu producto en nuestra tienda. Asi de facil!",
  },
];

export default function Apartado() {
  return (
    <section id="apartado" className="relative py-20 sm:py-28 bg-[#050505]">
      <div className="absolute inset-0 particles" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black italic"
            style={{
              fontFamily: "var(--font-orbitron)",
              background:
                "linear-gradient(180deg, #b5ff00 0%, #00e5ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              transform: "skewX(-3deg)",
            }}
          >
            SISTEMA DE APARTADO
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Te gusta un producto pero no puedes pagarlo todo de una vez? No te
            preocupes! Con nuestro sistema de apartado, puedes llevartelo poco a
            poco.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#b5ff00]/20 transition-all duration-500 card-glow group"
            >
              <div className="absolute top-4 right-4 text-5xl font-black text-white/[0.03]" style={{ fontFamily: "var(--font-orbitron)" }}>
                {index + 1}
              </div>

              <div className="mb-4 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                {step.icon}
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/524492867021?text=Hola!%20Me%20interesa%20el%20sistema%20de%20apartado.%20Me%20pueden%20dar%20mas%20informacion?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-black bg-gradient-to-r from-[#b5ff00] to-[#00e5ff] hover:shadow-[0_0_30px_rgba(181,255,0,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle size={20} />
            Preguntar por Apartado
          </a>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28 bg-black">
      <div className="absolute inset-0 grid-bg opacity-30" />

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
            CONTACTO
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Visitanos en nuestra tienda o contactanos por WhatsApp para hacer tu
            pedido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#b5ff00]/20 transition-all duration-500 card-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#b5ff00]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Direccion
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Juan Jose Arreola 814
                    <br />
                    Lomas de Oriente, C.P. 20175
                    <br />
                    Aguascalientes, Ags., Mexico
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#00e5ff]/20 transition-all duration-500 card-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="text-[#00e5ff]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    WhatsApp
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    +52 449 286 7021
                  </p>
                  <a
                    href="https://wa.me/524492867021?text=Hola!%20Me%20interesa%20conocer%20sus%20productos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300"
                  >
                    <MessageCircle size={16} />
                    Enviar Mensaje
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-[#b5ff00]/20 transition-all duration-500 card-glow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Clock className="text-[#b5ff00]" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Horario
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Contactanos por WhatsApp para confirmar
                    <br />
                    disponibilidad y horario de atencion.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-white/5 h-[300px] lg:h-full min-h-[400px]"
          >
            <iframe
              src="https://maps.google.com/maps?q=Juan+Jose+Arreola+814+Lomas+de+Oriente+20175+Aguascalientes+Mexico&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.6)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion 1:24 Garage"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

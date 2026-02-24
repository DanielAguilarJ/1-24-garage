"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Parallax video background */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: videoY, scale: videoScale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark overlay for readability */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Additional blur layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]" />

      {/* Background effects on top of video */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_80%)]" />

      {/* Speed lines animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#b5ff00]/30 to-transparent"
            style={{
              top: `${15 + i * 14}%`,
              width: "200px",
            }}
            animate={{
              x: ["-200px", "calc(100vw + 200px)"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear",
            }}
          />
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={`cyan-${i}`}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent"
            style={{
              top: `${25 + i * 18}%`,
              width: "150px",
            }}
            animate={{
              x: ["calc(100vw + 150px)", "-150px"],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              delay: i * 1.2 + 0.5,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="relative">
            <span
              className="block text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black italic tracking-tighter leading-none"
              style={{
                fontFamily: "var(--font-orbitron)",
                background:
                  "linear-gradient(180deg, #b5ff00 0%, #00e5ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter:
                  "drop-shadow(0 0 30px rgba(181, 255, 0, 0.3)) drop-shadow(0 0 60px rgba(0, 229, 255, 0.2))",
                transform: "skewX(-5deg)",
              }}
            >
              1:24
            </span>
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black italic tracking-wider leading-none mt-[-0.15em]"
              style={{
                fontFamily: "var(--font-orbitron)",
                color: "white",
                textShadow:
                  "0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(0,0,0,0.8)",
                transform: "skewX(-5deg)",
              }}
            >
              GARAGE
            </span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mx-auto my-6 h-[2px] w-48 sm:w-64 bg-gradient-to-r from-transparent via-[#b5ff00] to-transparent"
        />

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold italic tracking-[0.3em] uppercase"
          style={{
            fontFamily: "var(--font-orbitron)",
            background: "linear-gradient(180deg, #b5ff00 0%, #00e5ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transform: "skewX(-3deg)",
          }}
        >
          &mdash; Pasion a Escala &mdash;
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 text-gray-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          style={{
            textShadow: "0 2px 8px rgba(0,0,0,0.8)",
          }}
        >
          Autos a escala, perfumes, peluches, juguetes y mucho mas.
          <br />
          Tu tienda de coleccion en Aguascalientes.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#productos"
            className="px-8 py-3.5 rounded-full font-semibold text-black bg-gradient-to-r from-[#b5ff00] to-[#00e5ff] hover:shadow-[0_0_30px_rgba(181,255,0,0.4)] transition-all duration-300 transform hover:scale-105"
          >
            Ver Productos
          </a>
          <a
            href="https://wa.me/524492867021?text=Hola!%20Me%20interesa%20conocer%20sus%20productos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full font-semibold text-white border border-white/20 hover:border-[#00e5ff]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Contactanos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="text-gray-400" size={28} />
      </motion.div>
    </section>
  );
}

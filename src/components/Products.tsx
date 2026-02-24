"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Bike,
  Heart,
  Gamepad2,
  Droplets,
  Coffee,
  Frame,
  Glasses,
  Speaker,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import { products, categoryLabels, type Category } from "@/data/products";

const categoryIcons: Record<Category, React.ReactNode> = {
  autos: <Car size={18} />,
  motos: <Bike size={18} />,
  peluches: <Heart size={18} />,
  juguetes: <Gamepad2 size={18} />,
  perfumes: <Droplets size={18} />,
  tazas: <Coffee size={18} />,
  decoracion: <Frame size={18} />,
  accesorios: <Glasses size={18} />,
  audio: <Speaker size={18} />,
};

const categoryIconsLarge: Record<Category, React.ReactNode> = {
  autos: <Car size={48} />,
  motos: <Bike size={48} />,
  peluches: <Heart size={48} />,
  juguetes: <Gamepad2 size={48} />,
  perfumes: <Droplets size={48} />,
  tazas: <Coffee size={48} />,
  decoracion: <Frame size={48} />,
  accesorios: <Glasses size={48} />,
  audio: <Speaker size={48} />,
};

const allCategories = Object.keys(categoryLabels) as Category[];

function getWhatsAppLink(productName: string, price: number) {
  const message = encodeURIComponent(
    `Hola! Me interesa el producto: ${productName} - $${price} MXN. Esta disponible?`
  );
  return `https://wa.me/524492867021?text=${message}`;
}

function getApartadoLink(productName: string, price: number) {
  const message = encodeURIComponent(
    `Hola! Quiero apartar el producto: ${productName} - $${price} MXN. Cual es el proceso de apartado?`
  );
  return `https://wa.me/524492867021?text=${message}`;
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    "all"
  );

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="relative py-20 sm:py-28 bg-black">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            PRODUCTOS
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Explora nuestro catalogo completo. Haz clic en cualquier producto
            para comprarlo o apartarlo por WhatsApp.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-[#b5ff00] to-[#00e5ff] text-black shadow-[0_0_15px_rgba(181,255,0,0.3)]"
                : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
            }`}
          >
            <span className="flex items-center gap-2">
              <ShoppingBag size={16} />
              Todos
            </span>
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#b5ff00] to-[#00e5ff] text-black shadow-[0_0_15px_rgba(181,255,0,0.3)]"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              <span className="flex items-center gap-2">
                {categoryIcons[cat]}
                {categoryLabels[cat]}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden card-glow hover:border-[#b5ff00]/20 transition-all duration-500"
              >
                {/* Category icon header */}
                <div className="h-32 sm:h-36 relative overflow-hidden bg-gradient-to-br from-[#0d1117] to-[#0a0a0a] flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#b5ff00]/5 to-[#00e5ff]/5 group-hover:from-[#b5ff00]/10 group-hover:to-[#00e5ff]/10 transition-all duration-500" />
                  <div className="text-[#b5ff00]/20 group-hover:text-[#b5ff00]/40 transition-all duration-500 transform group-hover:scale-110">
                    {categoryIconsLarge[product.category]}
                  </div>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/10 text-gray-400 backdrop-blur-sm">
                    {categoryLabels[product.category]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-white font-semibold text-base sm:text-lg mb-3 group-hover:text-[#00e5ff] transition-colors duration-300">
                    {product.name}
                  </h3>

                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold neon-text">
                        ${product.price}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">MXN</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <a
                      href={getWhatsAppLink(product.name, product.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-black bg-gradient-to-r from-[#b5ff00] to-[#00e5ff] hover:shadow-[0_0_20px_rgba(181,255,0,0.3)] transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <MessageCircle size={16} />
                      Comprar
                    </a>
                    <a
                      href={getApartadoLink(product.name, product.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300 border border-white/10 hover:border-[#00e5ff]/30 hover:text-white transition-all duration-300"
                    >
                      Apartar
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Product count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Mostrando {filteredProducts.length} de {products.length} productos
        </motion.p>
      </div>
    </section>
  );
}

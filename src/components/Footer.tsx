export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span
                className="text-2xl font-black italic"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  background:
                    "linear-gradient(180deg, #b5ff00 0%, #00e5ff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                1:24
              </span>
              <span className="text-2xl font-bold text-white">GARAGE</span>
            </div>
            <p className="text-sm text-gray-500 italic">
              &mdash; Pasion a Escala &mdash;
            </p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a
              href="#inicio"
              className="hover:text-white transition-colors"
            >
              Inicio
            </a>
            <a
              href="#productos"
              className="hover:text-white transition-colors"
            >
              Productos
            </a>
            <a
              href="#apartado"
              className="hover:text-white transition-colors"
            >
              Apartado
            </a>
            <a
              href="#contacto"
              className="hover:text-white transition-colors"
            >
              Contacto
            </a>
          </div>

          <div className="text-center md:text-right text-sm text-gray-500">
            <p>Juan Jose Arreola 814</p>
            <p>Aguascalientes, Ags., Mexico</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} 1:24 Garage. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

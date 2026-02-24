import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "1:24 GARAGE | Pasion a Escala",
  description:
    "Tu tienda local de autos a escala, perfumes, peluches, juguetes, cosmeticos, cuadros, alcancias, gorras y mas. Sistema de apartado disponible. Aguascalientes, Mexico.",
  keywords: [
    "autos a escala",
    "1:24",
    "garage",
    "coleccionismo",
    "Aguascalientes",
    "juguetes",
    "perfumes",
    "peluches",
    "apartado",
  ],
  openGraph: {
    title: "1:24 GARAGE | Pasion a Escala",
    description:
      "Tu tienda local de autos a escala, perfumes, peluches, juguetes y mas. Aguascalientes, Mexico.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}

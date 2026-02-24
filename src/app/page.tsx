import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Apartado from "@/components/Apartado";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Apartado />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

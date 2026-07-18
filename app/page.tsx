import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import Amenities from "@/components/sections/Amenities";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Location from "@/components/sections/Location";
import Residences from "@/components/sections/Residences";
import SpecificInquiry from "@/components/sections/SpecificInquiry";
import TestimonialsAltum from "@/components/sections/TestimonialsAltum";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";
import JsonLd from "@/components/seo/JsonLd";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <JsonLd />
      <ScrollProgress />
      <Navbar />
      <main id="contenido">
        <Hero />
        <About />
        <Residences />
        <Amenities />
        <Location />
        <SpecificInquiry />
        <TestimonialsAltum />
        <Contact />
      </main>
      <Footer />
      <AccessibilityPanel />
    </>
  );
}

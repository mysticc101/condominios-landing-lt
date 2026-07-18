import { Clock3, Mail, Phone } from "lucide-react";
import LeadForm from "@/components/sections/LeadForm";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <Section id="contacto" className="contact-conversion">
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true" className="contact-conversion__video"><source src="/media/contact/sales-gallery.mp4" type="video/mp4" /></video>
      <div className="contact-conversion__veil" aria-hidden="true" />
      <Reveal className="relative z-10"><Container className="contact-conversion__layout"><div className="contact-conversion__copy"><p className="kicker kicker--light">07 · Visite Altum</p><h2>Conozca la escala en persona.</h2><p>La sala de ventas ha sido preparada para recorrer las materialidades, revisar los planos y conversar sobre la residencia que imagina. o recibir una asesoría personalizada.</p><address><span><Clock3 className="size-4" aria-hidden="true" /> {SITE.hours}</span><a href={`mailto:${SITE.email}`}><Mail className="size-4" aria-hidden="true" /> {SITE.email}</a><a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}><Phone className="size-4" aria-hidden="true" /> {SITE.phone}</a></address></div><div className="contact-conversion__form"><LeadForm /></div></Container></Reveal>
    </Section>
  );
}

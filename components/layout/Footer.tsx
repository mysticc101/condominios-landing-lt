import Link from "next/link";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { NAVIGATION, SITE } from "@/lib/constants";

const footerLinks = [...NAVIGATION.left, ...NAVIGATION.right];
const socialLinks = [
  { label: "Instagram", href: SITE.socials.instagram, Icon: InstagramIcon },
  { label: "Facebook", href: SITE.socials.facebook, Icon: FacebookIcon },
  { label: "LinkedIn", href: SITE.socials.linkedin, Icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="altum-footer">
      <Container>
        <div className="altum-footer__compact-brand"><Link href="#hero">Altum<span>San Isidro</span></Link><p>Residencias privadas · San Isidro, Lima</p></div>
        <div className="altum-footer__grid"><div><p className="altum-footer__label">Sala de ventas</p><a href="https://maps.google.com/?q=Calle+Morelli+318+San+Isidro+Lima" target="_blank" rel="noreferrer" className="altum-footer__contact"><MapPin className="size-4" aria-hidden="true" />{SITE.address}</a><a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} className="altum-footer__contact"><Phone className="size-4" aria-hidden="true" />{SITE.phone}</a></div><div><p className="altum-footer__label">Navegación</p><nav>{footerLinks.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</nav></div><div><p className="altum-footer__label">Conozca Altum</p><Link href="#contacto" className="altum-footer__cta">Agendar una visita <ArrowUpRight className="size-4" aria-hidden="true" /></Link><div className="altum-footer__socials">{socialLinks.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>)}</div><a href={`mailto:${SITE.email}`} className="altum-footer__email">{SITE.email}</a></div></div>
        <div className="altum-footer__bottom"><p>© {new Date().getFullYear()} Altum San Isidro. Todos los derechos reservados.</p><div><Link href="#accesibilidad">Accesibilidad</Link><Link href="#consulta">Consulta privada</Link></div></div>
      </Container>
    </footer>
  );
}

function InstagramIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.6" r=".7" fill="currentColor" stroke="none" /></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.8 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H8v3.1h2.7v8h3.1Z" /></svg>;
}

function LinkedInIcon() {
  return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.9 8.5H4V21h2.9V8.5ZM5.5 3a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 5.5 3ZM20 21h-2.9v-6.2c0-1.5-.5-2.5-1.8-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.5-.1.9V21h-2.9s.1-11.4 0-12.5h2.9v1.8c.4-.6 1.1-1.4 2.6-1.4 1.9 0 3.1 1.2 3.1 3.9V21Z" /></svg>;
}

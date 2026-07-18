"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, X } from "lucide-react";
import { NAVIGATION, SITE } from "@/lib/constants";

const navLinks = [...NAVIGATION.left, ...NAVIGATION.right];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 48);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const targets = ["#hero", ...navLinks.map((item) => item.href)]
      .map((href) => document.querySelector(href))
      .filter((element): element is HTMLElement => element instanceof HTMLElement);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-42% 0px -48%", threshold: [0, 0.15, 0.5] }
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        window.requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.requestAnimationFrame(() => menuRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const renderInlineLinks = (items: typeof NAVIGATION.left) => items.map((item) => (
    <Link key={item.href} href={item.href} aria-current={activeHref === item.href ? "page" : undefined} className={activeHref === item.href ? "is-active" : ""}>{item.label}</Link>
  ));

  return (
    <>
      <header className={`minimal-nav ${isScrolled ? "minimal-nav--solid" : ""}`}>
        <nav className="minimal-nav__links minimal-nav__links--left" aria-label="Recorrido principal">{renderInlineLinks(NAVIGATION.left)}</nav>
        <Link href="#hero" aria-label={`Inicio de ${SITE.name}`} className="minimal-nav__brand"><small>Residencias privadas</small><span>Altum</span><em>San Isidro</em></Link>
        <div className="minimal-nav__right"><nav className="minimal-nav__links" aria-label="Información del proyecto">{renderInlineLinks(NAVIGATION.right)}</nav><button ref={triggerRef} type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="site-navigation-panel" aria-label={isMenuOpen ? "Cerrar navegación" : "Abrir navegación"} className="minimal-nav__trigger"><span>{isMenuOpen ? "Cerrar" : "Menú"}</span>{isMenuOpen ? <X className="size-4" aria-hidden="true" /> : <i aria-hidden="true"><b /><b /></i>}</button></div>
      </header>

      {isMenuOpen ? (
        <div id="site-navigation-panel" ref={menuRef} role="dialog" tabIndex={-1} aria-modal="true" aria-label="Navegación del sitio" className="site-index">
          <div className="site-index__head"><p>Altum San Isidro</p><button type="button" onClick={closeMenu} aria-label="Cerrar navegación"><X className="size-5" aria-hidden="true" /></button></div>
          <div className="site-index__layout">
            <nav aria-label="Índice principal"><p className="kicker kicker--light">Índice</p><ol>{navLinks.map((item, index) => <li key={item.href}><Link href={item.href} onClick={closeMenu}><span>{String(index + 1).padStart(2, "0")}</span>{item.label}<ArrowUpRight aria-hidden="true" /></Link></li>)}</ol></nav>
            <aside><p className="kicker kicker--light">Información</p><p>Doce residencias privadas en San Isidro, concebidas para una vida de mayor calma y privacidad.</p><Link href="#contacto" onClick={closeMenu}>Solicitar una visita <ArrowUpRight className="size-4" aria-hidden="true" /></Link></aside>
          </div>
        </div>
      ) : null}
    </>
  );
}

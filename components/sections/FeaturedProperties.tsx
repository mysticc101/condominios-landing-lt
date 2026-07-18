"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const specialties = [
  {
    name: "Rollo de cardamomo",
    detail: "Recién horneado",
    description: "Masa lenta, naranja y un glaseado muy ligero. Sale en tandas cortas cada mañana.",
    price: "S/ 12",
    image: "/images/hero/imagen3.png",
    alt: "Rollo de cardamomo y café servidos en la barra de Brew Haven",
  },
  {
    name: "V60 de Cajamarca",
    detail: "Origen de la semana",
    description: "Una taza limpia y dulce, con mandarina, panela y cacao suave. Molido al momento.",
    price: "S/ 15",
    image: "/images/especialidades/v60.png",
    alt: "Café de especialidad preparado en Brew Haven",
  },
  {
    name: "Tónica de espresso",
    detail: "Para la tarde",
    description: "Espresso, tónica seca y naranja fresca: brillante, fría y pensada para bajar el ritmo.",
    price: "S/ 16",
    image: "/images/especialidades/tonica-expreso.png",
    alt: "Barra luminosa de Brew Haven durante la tarde",
  },
  {
    name: "La mesa Brew Haven",
    detail: "Desayuno de la casa",
    description: "Café filtrado, huevo, tostada, fruta y una pieza del horno para empezar con calma.",
    price: "S/ 34",
    image: "/images/especialidades/mesa-brew.png",
    alt: "Desayuno servido en Brew Haven",
  },
];

export default function FeaturedProperties() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(true);
  const specialty = specialties[activeIndex];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotionPreference = () => {
      setReduceMotion(mediaQuery.matches || document.documentElement.dataset.a11yMotion === "reduce");
    };

    const observer = new MutationObserver(syncMotionPreference);
    syncMotionPreference();
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-a11y-motion"] });
    mediaQuery.addEventListener("change", syncMotionPreference);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", syncMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || isHovering || isAutoplayPaused) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % specialties.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [isAutoplayPaused, isHovering, reduceMotion]);

  const previous = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + specialties.length) % specialties.length);
  };
  const next = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % specialties.length);
  };

  return (
    <Section id="especialidades" className="bg-[#28221d] text-white">
      <Reveal>
        <Container>
          <div className="flex flex-col gap-7 border-b border-white/15 pb-8 sm:flex-row sm:items-end sm:justify-between sm:pb-10">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#d6ad8a]">Especialidades de la casa</p>
              <h2 className="mt-4 max-w-xl text-balance text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl [font-family:var(--font-heading)]">Una buena razón para volver.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-300">La barra elige una especialidad a la vez. Puedes dejar que avance o explorarla con las flechas.</p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-5 sm:mt-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#d6ad8a]">Selección de la barra</p>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setIsAutoplayPaused((paused) => !paused)} className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-stone-200 transition hover:border-[#d6ad8a] hover:text-white focus-visible:outline-[#d6ad8a]" aria-label={isAutoplayPaused ? "Reanudar avance automático" : "Pausar avance automático"}>
                {isAutoplayPaused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
              </button>
              <button type="button" onClick={previous} className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-stone-200 transition hover:border-[#d6ad8a] hover:text-white focus-visible:outline-[#d6ad8a]" aria-label="Ver especialidad anterior"><ArrowLeft className="size-4" aria-hidden="true" /></button>
              <button type="button" onClick={next} className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-stone-200 transition hover:border-[#d6ad8a] hover:text-white focus-visible:outline-[#d6ad8a]" aria-label="Ver siguiente especialidad"><ArrowRight className="size-4" aria-hidden="true" /></button>
            </div>
          </div>

          <div className="mt-6 w-full overflow-hidden" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onFocusCapture={() => setIsHovering(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setIsHovering(false); }}>
            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.article
                key={specialty.name}
                custom={direction}
                initial={reduceMotion ? false : { opacity: 0, x: direction * 64 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: direction * -64 }}
                transition={{ duration: reduceMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}
                className="grid overflow-hidden rounded-[1.75rem] bg-[#3a2d24] sm:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.18fr)]"
              >
                <div className="relative min-h-[14rem] sm:min-h-[21rem]">
                  <Image src={specialty.image} alt={specialty.alt} fill sizes="(min-width: 640px) 40vw, 100vw" className="object-cover" priority={activeIndex === 0} />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(20,16,12,0.35)_0%,transparent_62%)]" />
                </div>
                <div className="flex min-h-[14rem] flex-col justify-between p-6 sm:min-h-[21rem] sm:p-9 lg:p-11">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#e5ba94]">{specialty.detail}</p>
                    <div className="mt-5 flex items-start justify-between gap-5">
                      <h3 className="max-w-md text-balance text-4xl leading-[0.96] tracking-[-0.045em] text-white sm:text-5xl [font-family:var(--font-heading)]">{specialty.name}</h3>
                      <span className="shrink-0 pt-1 text-sm font-medium text-[#f2d4bc]">{specialty.price}</span>
                    </div>
                    <p className="mt-5 max-w-lg text-sm leading-7 text-stone-200 sm:text-base">{specialty.description}</p>
                  </div>
                  <p className="mt-8 text-xs leading-5 text-stone-400">Preparado al pedirlo · sujeto a disponibilidad diaria</p>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}

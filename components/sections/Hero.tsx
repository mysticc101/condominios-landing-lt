"use client";

import { ArrowDown } from "lucide-react";

import HeroMedia from "@/components/ui/HeroMedia";

export default function Hero() {
  const enterProject = () => {
    document
      .querySelector("#proyecto")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-scroll"
    >
      <div className="hero-scroll__stage">
        <div className="hero-scroll__media">
          <HeroMedia
            poster="/media/hero/reserva-exterior-dusk.jpg"
            videoSrc="/media/hero/reserva-exterior-dusk.mp4"
            alt="Fachada de Altum San Isidro al atardecer"
          />
        </div>

        <div
          className="hero-scroll__veil"
          aria-hidden="true"
        />

        <div className="hero-scroll__center">
          <p className="kicker kicker--light">
            Residencias privadas · San Isidro, Lima
          </p>

          <h1 id="hero-title">
            La calma
            <br />
            tiene altura.
          </h1>

          <p>
            Residencias de tres y cuatro dormitorios, con jardines,
            terrazas y vistas abiertas.
          </p>

          <div className="hero-scroll__actions">
            <a href="#residencias">
              Conocer residencias{" "}
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#contacto">
              Agendar una visita{" "}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <button
          type="button"
          className="hero-scroll__bottom"
          onClick={enterProject}
          aria-label="Descubrir Altum San Isidro"
        >
          <span>Descubrir Altum</span>
          <span>La vida no necesita ruido.</span>

          <ArrowDown aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
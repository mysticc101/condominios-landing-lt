"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const testimonials = [
  {
    quote:
      "En la visita entendimos la diferencia de escala. Los espacios se sienten tranquilos, bien proporcionados y naturales para vivir cada día.",
    name: "M. & A.",
    detail: "Visita privada · San Isidro",
  },
  {
    quote:
      "Nos ayudó poder comparar las tipologías con calma. La distribución y la entrada de luz fueron decisivas para nosotros.",
    name: "C. R.",
    detail: "Consulta de residencia de ciudad",
  },
  {
    quote:
      "La materialidad no intenta llamar la atención; se siente sobria y coherente con el proyecto y con el barrio.",
    name: "D. V.",
    detail: "Visita a sala de ventas",
  },
  {
    quote:
      "La información fue clara desde el inicio. Pudimos revisar los planos y resolver las dudas sin presión.",
    name: "F. & L.",
    detail: "Consulta de penthouse",
  },
  {
    quote:
      "Valoramos que la propuesta no dependa de gestos excesivos. Todo se siente más sereno y pensado para durar.",
    name: "P. G.",
    detail: "Primera visita al proyecto",
  },
  {
    quote:
      "El jardín cambia por completo la forma de vivir el primer nivel. Fue importante poder verlo explicado en los planos.",
    name: "R. M.",
    detail: "Consulta de residencia jardín",
  },
  {
    quote:
      "La terraza y la vista abierta hicieron que el penthouse se entendiera de inmediato. La visita fue muy útil.",
    name: "S. & J.",
    detail: "Visita de penthouse",
  },
  {
    quote:
      "Agradecimos una conversación directa sobre distribución, metrajes y disponibilidad. Eso hizo más fácil comparar opciones.",
    name: "L. C.",
    detail: "Consulta de disponibilidad",
  },
];

export default function TestimonialsAltum() {
  const [page, setPage] = useState(0);

  const pages = Math.ceil(testimonials.length / 2);

  const visibleTestimonials = testimonials.slice(
    page * 2,
    page * 2 + 2
  );

  const previous = () => {
    setPage((current) => (current - 1 + pages) % pages);
  };

  const next = () => {
    setPage((current) => (current + 1) % pages);
  };

  return (
    <Section
      id="testimonios"
      className="testimonials-altum"
    >
      <Reveal>
        <header className="testimonials-altum__header">
          <p className="kicker kicker--light">
            06 · Experiencias
          </p>

          <h2>Experiencias de visita.</h2>

          <p>
            Comentarios de quienes conocieron Altum en una visita
            privada.
          </p>
        </header>

        <Container>
          <div className="testimonials-altum__carousel">
            <div
              key={page}
              className="testimonials-altum__grid"
              aria-live="polite"
            >
              {visibleTestimonials.map((testimonial) => (
                <article key={testimonial.name}>
                  <span
                    className="testimonials-altum__mark"
                    aria-hidden="true"
                  >
                    “
                  </span>

                  <blockquote>
                    {testimonial.quote}
                  </blockquote>

                  <footer>
                    <strong>{testimonial.name}</strong>

                    <span>{testimonial.detail}</span>
                  </footer>
                </article>
              ))}
            </div>

            <div className="testimonials-altum__controls">
              <button
                type="button"
                onClick={previous}
                aria-label="Ver testimonios anteriores"
              >
                <ArrowLeft />

                <span>Anterior</span>
              </button>

              <p>
                {String(page + 1).padStart(2, "0")} /{" "}
                {String(pages).padStart(2, "0")}
              </p>

              <button
                type="button"
                onClick={next}
                aria-label="Ver más testimonios"
              >
                <span>Siguiente</span>

                <ArrowRight />
              </button>
            </div>
          </div>

          <div
            className="testimonials-altum__progress"
            aria-label={`Página ${page + 1} de ${pages}`}
          >
            {Array.from(
              { length: pages },
              (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setPage(index)}
                  aria-label={`Ver testimonios ${
                    index * 2 + 1
                  } y ${index * 2 + 2}`}
                  aria-current={
                    index === page ? "true" : undefined
                  }
                />
              )
            )}
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}
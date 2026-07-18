import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const lifestyle = [
  {
    title: "Privacidad como diseño",
    description:
      "Cada residencia ocupa un piso completo. Sin paredes compartidas, sin pasillos comunes, sin concesiones.",
  },
  {
    title: "Luz en cada espacio",
    description:
      "Orientación estudiada, ventanales de piso a techo y una altura libre que transforma la luz en un material más de la arquitectura.",
  },
  {
    title: "Silencio como material",
    description:
      "Aislamiento acústico de alto rendimiento. El silencio no es un lujo, es la condición para vivir bien.",
  },
  {
    title: "Terminaciones que envejecen con dignidad",
    description:
      "Piedra, madera y acero. Materiales nobles que ganan carácter con los años en lugar de perderlo.",
  },
  {
    title: "San Isidro a pie",
    description:
      "Galerías, restaurantes, parques y servicios esenciales a menos de diez minutos caminando, sin depender del auto.",
  },
];

export default function Services() {
  return (
    <Section id="vivir" className="bg-white">
      <Reveal>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-24 xl:gap-32">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.26em] text-[#3b4a52]">
                <span
                  className="h-px w-9 bg-[#b08760]"
                  aria-hidden="true"
                />
                Vivir aquí
              </p>

              <h2 className="mt-7 max-w-[36rem] text-balance text-4xl leading-[0.96] tracking-[-0.04em] text-stone-900 sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
                Pocas cosas,
                <span className="block opacity-90">
                  bien hechas.
                </span>
              </h2>

              <p className="mt-9 max-w-xl text-pretty leading-[1.8] text-stone-600 sm:text-[1.0625rem]">
                Vivir en Altum San Isidro significa elegir una vida más lenta
                sin renunciar a estar en el centro de Lima. Cada residencia fue
                pensada como un refugio privado, donde el diseño trabaja en
                silencio para que usted no tenga que hacerlo.
              </p>

              <ul className="mt-14 space-y-0">
                {lifestyle.map((item) => (
                  <li
                    key={item.title}
                    className="group flex gap-5 py-5"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.46rem] block h-px w-5 shrink-0 bg-[#b08760] transition-all duration-500 group-hover:w-8"
                    />

                    <div>
                      <span className="text-[0.9375rem] font-medium leading-[1.45] text-stone-900">
                        {item.title}
                      </span>

                      <p className="mt-1.5 text-sm leading-[1.65] text-stone-500">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <Button
                href="#visitanos"
                variant="secondary"
                className="mt-12 gap-2"
              >
                Agendar una visita privada

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                />
              </Button>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:order-first lg:mx-0">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_36px_90px_-32px_rgba(28,31,34,0.32)] ring-1 ring-black/[0.04]">
                <Image
                  src="/images/hero/imagen3.png"
                  alt="Interior con luz natural y espacio abierto en Altum San Isidro"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-8 -left-3 max-w-[13rem] rounded-2xl bg-white/80 p-6 backdrop-blur-[10px] shadow-[0_28px_60px_-24px_rgba(28,31,34,0.1)] ring-1 ring-black/[0.04] sm:-left-10 sm:p-7">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#3b4a52]">
                  12 residencias
                </p>

                <p className="mt-2.5 font-[family-name:var(--font-heading)] text-lg leading-[1.18] tracking-[-0.015em] text-stone-800">
                  Una por piso. Sin excepciones.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}
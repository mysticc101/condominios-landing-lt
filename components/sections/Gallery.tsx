import Image from "next/image";
import gallery from "@/data/gallery";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function Gallery() {
  return (
    <Section id="diario" className="bg-[#f0ebe3]">
      <Reveal>
        <Container>
          <div className="grid gap-8 border-b border-stone-300/80 pb-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:pb-12">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#9a7257]">El diario de Brew Haven</p>
              <h2 className="mt-5 max-w-xl text-balance text-4xl leading-[0.98] tracking-[-0.04em] text-stone-900 sm:text-5xl [font-family:var(--font-heading)]">Una jornada, servida sin prisa.</h2>
            </div>
            <p className="max-w-xl text-pretty leading-8 text-stone-600">Desde la primera molienda hasta la última conversación, estos son los momentos que marcan el ritmo de la cafetería.</p>
          </div>

          <div className="mt-9 grid gap-5 lg:mt-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-10">
            <article className="group relative min-h-[31rem] overflow-hidden rounded-[2rem] bg-stone-950 sm:min-h-[38rem]">
              <Image src="/images/hero/imagen4.png" alt="Interior de Brew Haven al caer la tarde" fill sizes="(min-width: 1024px) 54vw, 100vw" className="object-cover object-[40%_center] transition duration-700 group-hover:scale-105 motion-reduce:transition-none" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(19,15,11,0.92)_0%,rgba(19,15,11,0.06)_65%)]" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#e3c3a5]">Todos los días · 7:00 a. m. a 7:00 p. m.</p>
                <h3 className="mt-4 max-w-md text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl [font-family:var(--font-heading)]">Cada hora tiene su propia manera de quedarse.</h3>
              </div>
            </article>

            <div className="self-center">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-[#9a7257]">El día, paso a paso</p>
              <ol className="relative space-y-3 before:absolute before:bottom-8 before:left-[1.45rem] before:top-8 before:w-px before:bg-stone-300 sm:before:left-[1.7rem]">
                {gallery.map((moment, index) => (
                  <li key={moment.hour} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4 rounded-2xl border border-stone-300/90 bg-[#f8f5ef] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-[#b99171] hover:shadow-[0_16px_35px_rgba(79,57,41,0.1)] motion-reduce:transition-none sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:p-6">
                    <time className="relative z-10 flex size-8 items-center justify-center rounded-full bg-[#3a2d24] text-[10px] font-medium tracking-[0.08em] text-[#f5e8d9] sm:size-9">{String(index + 1).padStart(2, "0")}</time>
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9a7257]">{moment.hour} · {moment.detail}</p>
                      <h3 className="mt-3 text-3xl leading-none tracking-[-0.035em] text-stone-900 [font-family:var(--font-heading)]">{moment.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">{moment.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 pl-12 text-xs leading-5 text-stone-500 sm:pl-14">Puedes pasar por una taza rápida o quedarte toda la tarde: la barra sigue el ritmo que tú elijas.</p>
            </div>
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}

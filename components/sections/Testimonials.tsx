import testimonials from "@/data/testimonials";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function Testimonials() {
  return (
    <Section className="bg-white">
      <Reveal>
        <Container>
          <div className="grid gap-10 border-b border-stone-200 pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:pb-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#9a7257]">
                Palabras que agradecemos
              </p>

              <h2 className="mt-5 text-4xl leading-[0.98] tracking-[-0.04em] text-stone-900 sm:text-5xl [font-family:var(--font-heading)]">
                Desde nuestro rincón de San Isidro.
              </h2>
            </div>

            <p className="max-w-lg self-end text-pretty leading-8 text-stone-600">
              Nos alegra formar parte de los días de nuestros vecinos y de quienes nos visitan por primera vez.
            </p>
          </div>

          <div className="grid items-stretch gap-0 divide-y divide-stone-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex min-h-[260px] flex-col justify-between px-0 py-10 lg:px-8 lg:py-12 first:lg:pl-0"
              >
                <blockquote className="text-pretty text-2xl leading-[1.22] tracking-[-0.025em] text-stone-800 [font-family:var(--font-heading)]">
                  “{testimonial.quote}”
                </blockquote>

                <figcaption className="mt-8">
                  <p className="text-sm font-medium text-stone-900">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-stone-500">
                    {testimonial.detail}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}
import Image from "next/image";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="proyecto" className="statement-section">
      <Reveal>
        <Container>
          <div className="statement-section__masthead">
            <p className="kicker">01 · El proyecto</p>
            <p>
              Doce residencias en una escala más privada para San Isidro.
            </p>
          </div>

          <div className="statement-section__headline">
            <h2>Una casa bien pensada se siente desde que llega.</h2>
            <p>
              Altum reúne proporción, materialidad y privacidad para hacer más
              simple la vida diaria.
            </p>
          </div>

          <div className="statement-section__image">
            <Image
              src="/media/architecture/arrival-lobbyy.jpg"
              alt="Acceso y lobby de Altum San Isidro"
              fill
              quality={90}
              sizes="(min-width: 1024px) 84vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="statement-section__principles">
            <p>
              <strong>12</strong>
              <span>residencias privadas</span>
            </p>

            <p>
              <strong>3</strong>
              <span>tipologías para elegir</span>
            </p>

            <p>
              <strong>3–4</strong>
              <span>dormitorios por residencia</span>
            </p>
          </div>
        </Container>
      </Reveal>
    </Section>
  );
}
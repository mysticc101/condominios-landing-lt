import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const spaces = [
  {
    title: "Llegar bien",
    text: "Un lobby residencial donde piedra, madera y vegetación dan la bienvenida.",
    src: "/media/amenities/lobby-arrivall.jpg",
  },
  {
    title: "La terraza",
    text: "Un espacio abierto para ver cambiar la ciudad al final del día.",
    src: "/media/amenities/rooftop-terrace.jpg",
  },
  {
    title: "Lo cotidiano, resuelto",
    text: "Servicio y almacenamiento resueltos con la misma atención que los espacios principales.",
    src: "/media/amenities/private-service.jpg",
  },
];

const principles = [
  {
    number: "01",
    title: "Materias honestas",
    text: "Piedra, madera y vegetación con una presencia cálida y duradera.",
    src: "/media/architecture/materials.png",
    alt: "Detalle de materiales del lobby de Altum",
  },
  {
    number: "02",
    title: "Luz bien medida",
    text: "Iluminación cálida para acompañar los espacios sin invadirlos.",
    src: "/media/architecture/luz.png",
    alt: "Luz cálida en el acceso de Altum",
  },
  {
    number: "03",
    title: "Uso cotidiano",
    text: "Lobby, terraza y áreas de servicio pensados para funcionar bien todos los días.",
    src: "/media/architecture/usoc.png",
    alt: "Espacio de servicio de Altum",
  },
];

export default function Amenities() {
  return (
    <Section id="experiencia" className="architecture-section">
      <Reveal>
        <div className="architecture-section__header">
          <p className="kicker">03 · La experiencia</p>
          <p>
            Los espacios comunes acompañan la residencia y resuelven lo
            cotidiano con discreción.
          </p>
        </div>

        <div className="architecture-section__composition">
          <div className="architecture-section__copy">
            <h2>Materiales elegidos para durar.</h2>
            <p>
              Piedra, madera y luz natural construyen una atmósfera sobria, sin
              recurrir al exceso.
            </p>
          </div>

          <div className="architecture-section__media">
            <Image
              src="/media/architecture/materials-lobby.jpg"
              alt="Materialidad del lobby de Altum San Isidro"
              fill
              quality={90}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="architecture-section__ledger">
          {principles.map((principle) => (
            <article key={principle.number}>
              <Image
                src={principle.src}
                alt={principle.alt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 33.333vw, 100vw"
                className="architecture-section__ledger-image object-cover"
              />

              <div
                className="architecture-section__ledger-veil"
                aria-hidden="true"
              />

              <div className="architecture-section__ledger-copy">
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="experience-strip">
          {spaces.map((space) => (
            <article key={space.title}>
              <div>
                <Image
                  src={space.src}
                  alt={space.title}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 33.333vw, 100vw"
                  className="object-cover"
                />
              </div>

              <h3>{space.title}</h3>
              <p>{space.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
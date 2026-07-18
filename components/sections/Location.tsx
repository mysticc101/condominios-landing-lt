import { MapPin } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

const places = [
  ["El Olivar", "Para caminar sin agenda y respirar otra escala de ciudad."],
  ["La ciudad bien elegida", "Restaurantes, hoteles, galerías y servicios que se vuelven parte de la rutina."],
  ["La distancia justa", "Un lugar donde la ciudad queda en segundo plano."],
];

export default function Location() {
  return (
    <Section id="ubicacion" className="location-scene">
      <Reveal>
        <div className="location-scene__layout">
          <div className="location-scene__media"><Image src="/media/location/san-isidro-aerial.jpg" alt="Vista aérea de San Isidro con Altum en primer plano" fill quality={90} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" /></div>
          <div className="location-scene__content"><p className="kicker">04 · La dirección</p><h2>San<br />Isidro.</h2><p className="location-scene__intro">Un punto de partida residencial, verde y conectado. Aquí la ciudad se vive con la libertad de poder dejarla atrás.</p><ol>{places.map(([name, text], index) => <li key={name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{name}</h3><p>{text}</p></div></li>)}</ol><div className="location-scene__address"><MapPin className="size-4" aria-hidden="true" /><address>{SITE.address}</address></div></div>
        </div>
        <div className="location-map"><div className="location-map__copy"><p className="kicker">Ubicación exacta</p><h3>Una ubicación pensada para cada día.</h3><p>Calle Morelli 318, a pasos de El Olivar.</p></div><iframe title="Ubicación de Altum San Isidro" src="https://www.google.com/maps?q=Calle%20Morelli%20318%2C%20San%20Isidro%2C%20Lima%2C%20Per%C3%BA&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
      </Reveal>
    </Section>
  );
}

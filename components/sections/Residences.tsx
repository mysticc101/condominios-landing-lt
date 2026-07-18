"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

const residences = [
  { number: "I", name: "Residencia jardín", detail: "Nivel 01 · 3 dormitorios · jardín privado", description: "La casa se abre a un jardín propio: una extensión natural para recibir, descansar y vivir a otro ritmo.", src: "/media/residences/residencia-jardin.jpg" },
  { number: "II", name: "Residencia de ciudad", detail: "Niveles 02–10 · 3 dormitorios · una por piso", description: "Espacios amplios y una vista que acompaña la vida diaria, desde la primera luz hasta el final de la tarde.", src: "/media/residences/residencia-tipica.jpg" },
  { number: "III", name: "Penthouse", detail: "Niveles 11–12 · 4 dormitorios · terraza privada", description: "Dos niveles de intimidad y una terraza que convierte el horizonte de Lima en parte de la casa.", src: "/media/residences/penthouse-terrace.jpg" },
];

export default function Residences() {
  const [active, setActive] = useState(0);
  const residence = residences[active];

  return (
    <Section id="residencias" className="residence-index">
      <Reveal>
        <div className="residence-index__intro">
          <p className="kicker kicker--light">02 · Las residencias</p>
          <h2>Tres maneras de habitar la misma idea.</h2>
          <div className="residence-index__intro-aside">
            <p className="residence-index__aside-label">Una colección, tres formas de vivir</p>
            <ol>
              <li><span>01</span><div><strong>Jardín</strong><small>Nivel 01 · 3 dormitorios</small></div></li>
              <li><span>02</span><div><strong>Ciudad</strong><small>Niveles 02–10 · una por piso</small></div></li>
              <li><span>03</span><div><strong>Penthouse</strong><small>Niveles 11–12 · terraza privada</small></div></li>
            </ol>
            <p>Elija una tipología para conocer su distribución, atmósfera y disponibilidad.</p>
          </div>
        </div>
        <div className="residence-index__layout">
          <div className="residence-index__media"><Image key={residence.src} src={residence.src} alt={residence.name} fill quality={90} sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover" priority={active === 0} /><div className="residence-index__caption"><span>{residence.number} · {residence.name}</span><p>{residence.description}</p></div></div>
          <div className="residence-index__list" role="tablist" aria-label="Tipologías de residencia">
            {residences.map((item, index) => <button key={item.number} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)} className={index === active ? "is-active" : ""}><span>{item.number}</span><div><h3>{item.name}</h3><p>{item.detail}</p></div><span className="residence-index__arrow" aria-hidden="true">↗</span></button>)}
          </div>
        </div>
        <p className="residence-index__note">Metrajes y distribuciones referenciales. Solicite planos y disponibilidad actualizada.</p>
      </Reveal>
    </Section>
  );
}

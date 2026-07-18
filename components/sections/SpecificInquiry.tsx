import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import { SITE } from "@/lib/constants";

export default function SpecificInquiry() {
  return (
    <Section id="consulta" className="specific-inquiry">
      <Reveal><Container><div className="specific-inquiry__header"><p className="kicker">05 · Consulta privada</p><h2>Hablemos de la residencia que busca.</h2><p>Comparta lo que necesita y le enviaremos planos, disponibilidad y una propuesta de visita.</p></div><div className="specific-inquiry__layout"><aside><p className="specific-inquiry__aside-label">Podemos orientarlo sobre</p><ul><li>Jardín o terraza</li><li>Tres o cuatro dormitorios</li><li>Planos y metrajes</li><li>Visitas a la sala de ventas</li></ul><p>La información se comparte de forma personalizada.</p></aside><form action={`mailto:${SITE.email}?subject=Consulta%20espec%C3%ADfica%20-%20Altum%20San%20Isidro`} method="post" encType="text/plain" className="specific-inquiry__form"><label><span>Nombre</span><input name="nombre" type="text" autoComplete="name" required /></label><label><span>Correo electrónico</span><input name="correo" type="email" autoComplete="email" required /></label><label className="specific-inquiry__message"><span>¿Qué le interesa conocer?</span><textarea name="consulta" rows={2} placeholder="Ejemplo: residencia con jardín, planos o disponibilidad." /></label><button type="submit">Solicitar información <span aria-hidden="true">↗</span></button></form></div><p className="specific-inquiry__note">Al enviar, se abrirá su aplicación de correo con la consulta preparada.</p></Container></Reveal>
    </Section>
  );
}

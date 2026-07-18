import { SITE } from "@/lib/constants";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    numberOfUnits: 12,
    address: { "@type": "PostalAddress", addressLocality: "San Isidro", addressRegion: "Lima", addressCountry: "PE" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

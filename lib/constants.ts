export const SITE = {
  name: "Altum San Isidro",
  description: "Residencias privadas en San Isidro, Lima.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://reservasanisidro.pe",
  address: "San Isidro, Lima, Perú",
  phone: "+51 961 382 364",
  email: "ventas@altumsanisidro.pe",
  socials: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  hours: "Sala de ventas · Visitas con coordinación previa.",
};

export const NAVIGATION = {
  left: [
    { label: "El proyecto", href: "#proyecto" },
    { label: "Residencias", href: "#residencias" },
    { label: "Experiencia", href: "#experiencia" },
  ],
  right: [
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Experiencias", href: "#testimonios" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "De los pocos cafés donde realmente dan ganas de quedarse un rato más.",
    name: "Micaela R.",
    detail: "Trabaja en San Isidro",
  },
  {
    quote: "El flat white y la pastelería nunca fallan. Siempre que puedo vuelvo.",
    name: "Joaquín A.",
    detail: "Cliente desde 2023",
  },
  {
    quote: "Lo encontré por casualidad y ahora es mi lugar favorito para reunirme o trabajar.",
    name: "Elena V.",
    detail: "Fotógrafa freelance",
  },
];

export default testimonials;

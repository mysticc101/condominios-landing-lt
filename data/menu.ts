export type MenuItem = {
  name: string;
  description: string;
  price: string;
  image?: string;
  note?: string;
  format?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  description: string;
  items: MenuItem[];
};

export type MenuDepartment = {
  id: string;
  label: string;
  intro: string;
  categories: MenuCategory[];
};

const menu: MenuDepartment[] = [
  {
    id: "bebidas",
    label: "Bebidas",
    intro: "Café de origen, recetas de barra y pausas frías hechas a pedido.",
    categories: [
      {
        id: "filtrados",
        title: "Café filtrado",
        description: "Extracciones a mano que cambian con el origen de la semana.",
        items: [
          { name: "V60 de Cajamarca", image: "/images/menu/v60-cajamarcaa.png", description: "Lavado, mandarina, panela y cacao suave.", price: "S/ 15", note: "Origen rotativo", format: "Caliente" },
          { name: "Chemex compartido", image: "/images/menu/chemex-compartido.png", description: "Dos tazas limpias, florales y luminosas.", price: "S/ 28", note: "Para dos", format: "Caliente" },
          { name: "Prensa de la casa", image: "/images/menu/prensa-casa.png", description: "Cuerpo redondo, ciruela madura y chocolate.", price: "S/ 16", format: "Caliente" },
          { name: "AeroPress breve", image: "/images/menu/aeropress-breve.png", description: "Taza dulce, clara y con final de miel.", price: "S/ 16", format: "Caliente" },
        ],
      },
      {
        id: "espresso",
        title: "Espresso y leche",
        description: "Una barra precisa y amable, con opciones vegetales disponibles.",
        items: [
          { name: "Espresso doble", image: "/images/menu/espresso-doblee.png", description: "Caramelo, avellana tostada y acidez delicada.", price: "S/ 10", format: "Caliente" },
          { name: "Cortado", image: "/images/menu/cortado.png", description: "Doble espresso y una breve nube de leche texturizada.", price: "S/ 12", format: "Caliente" },
          { name: "Flat white", image: "/images/menu/flat-white.png", description: "Espresso intenso, leche sedosa y final aterciopelado.", price: "S/ 15", note: "Favorito", format: "Caliente" },
          { name: "Latte de vainilla real", image: "/images/menu/latte-vainilla.png", description: "Vainilla natural, espresso y leche vaporizada.", price: "S/ 17", format: "Caliente" },
          { name: "Mocha oscuro", image: "/images/menu/mocha-oscuro.png", description: "Cacao peruano 70 %, espresso y leche.", price: "S/ 17", format: "Caliente" },
        ],
      },
      {
        id: "frias",
        title: "Café frío",
        description: "Para tardes largas, con hielo cristalino y sabores de temporada.",
        items: [
          { name: "Café frío de azahar", image: "/images/menu/cafe-frio-azahar.png", description: "Extracción en frío, azahar y piel de limón.", price: "S/ 17", note: "Temporada", format: "Frío" },
          { name: "Latte helado", image: "/images/menu/latte-helado.png", description: "Doble espresso, leche fría y hielo cristalino.", price: "S/ 16", format: "Frío" },
          { name: "Tónica de espresso", image: "/images/menu/tonica-espresso.png", description: "Espresso, tónica seca y naranja fresca.", price: "S/ 16", format: "Frío" },
          { name: "Espresso agitado con cacao", image: "/images/menu/espresso-agitado-cacao.png", description: "Espresso agitado, cacao y leche de avena.", price: "S/ 18", format: "Frío" },
        ],
      },
      {
        id: "sin-cafe",
        title: "Sin café",
        description: "Infusiones y bebidas para seguir el ritmo de la mesa.",
        items: [
          { name: "Chocolate de origen", image: "/images/menu/chocolate-origen.png", description: "Cacao peruano, leche al vapor y sal marina.", price: "S/ 15", format: "Caliente" },
          { name: "Té blanco de jazmín", image: "/images/menu/te-blanco-jazmin.png", description: "Ligero, floral y servido en tetera individual.", price: "S/ 12", format: "Caliente" },
          { name: "Tónica de maracuyá", image: "/images/menu/tonica-maracuya.png", description: "Maracuyá fresco, cítricos, soda y romero.", price: "S/ 14", note: "Temporada", format: "Frío" },
          { name: "Matcha ceremonial", image: "/images/menu/matcha-ceremonial.png", description: "Matcha, agua o leche, y un final vegetal limpio.", price: "S/ 16", format: "Caliente o frío" },
        ],
      },
    ],
  },
  {
    id: "comida",
    label: "Para comer",
    intro: "Pequeños platos, buena mantequilla y cocina honesta para sentarse sin prisa.",
    categories: [
      {
        id: "horno",
        title: "Recién horneado",
        description: "Producción limitada cada mañana. Pregunta por lo que acaba de salir.",
        items: [
          { name: "Rollo de cardamomo", image: "/images/menu/roll-cardamomo.png", description: "Masa lenta, naranja y glaseado tenue.", price: "S/ 12", note: "Hasta agotar" },
          { name: "Cruasán de almendras", image: "/images/menu/cruasan-almendras.png", description: "Hojaldre crujiente, crema de almendras y miel.", price: "S/ 14" },
          { name: "Scone de arándanos", image: "/images/menu/scone-arandanos.png", description: "Mantequilla, arándanos y limón.", price: "S/ 11" },
          { name: "Galleta de chocolate", image: "/images/menu/galleta-chocolate.png", description: "Cacao intenso, sal y centro suave.", price: "S/ 9" },
        ],
      },
      {
        id: "desayunos",
        title: "Desayunos tranquilos",
        description: "Platos pensados para mañanas lentas y conversaciones largas.",
        items: [
          { name: "Huevos al jardín", image: "/images/menu/huevos-jardin.png", description: "Huevos suaves, palta, hojas y masa madre.", price: "S/ 26", note: "Hasta 12:30" },
          { name: "Avena nocturna", image: "/images/menu/avena-nocturna.png", description: "Yogur, fruta de estación, semillas y miel.", price: "S/ 22" },
          { name: "Tostada de ricotta", image: "/images/menu/tostada-ricotta.png", description: "Ricotta batida, tomate confitado y aceite de oliva.", price: "S/ 20" },
          { name: "La mesa Brew Haven", image: "/images/menu/mesa-brew-haven.png", description: "Café filtrado, huevo, tostada, fruta y una pieza del horno.", price: "S/ 34", note: "La casa" },
        ],
      },
      {
        id: "salados",
        title: "Para el mediodía",
        description: "Sándwiches y platos ligeros para una pausa bien resuelta.",
        items: [
          { name: "Focaccia de pavo", image: "/images/menu/focaccia-pavo.png", description: "Pavo braseado, provolone, rúcula y mostaza suave.", price: "S/ 27" },
          { name: "Ensalada de estación", image: "/images/menu/ensalada-estacion.png", description: "Hojas, verduras asadas, queso fresco y semillas.", price: "S/ 25" },
          { name: "Tostada de hongos", image: "/images/menu/tostada-hongos.png", description: "Hongos salteados, huevo y crema de pecorino.", price: "S/ 24" },
        ],
      },
    ],
  },
  {
    id: "despensa",
    label: "La despensa",
    intro: "Café y productos de la casa para prolongar Brew Haven fuera del local.",
    categories: [
      {
        id: "grano",
        title: "Café en grano",
        description: "Bolsas para tu método favorito, molidas al momento si lo necesitas.",
        items: [
          { name: "Cajamarca lavado · 250 g", image: "/images/menu/cajamarca-lavado-250g.png", description: "Mandarina, panela y cacao. Tueste medio claro.", price: "S/ 42", note: "Lote actual" },
          { name: "Blend de la casa · 250 g", image: "/images/menu/blend-casa-250g.png", description: "Chocolate, avellana y fruta amarilla. Tueste medio.", price: "S/ 38" },
          { name: "Descafeinado · 250 g", image: "/images/menu/descafeinado-250g.png", description: "Proceso de agua, ciruela y caramelo suave.", price: "S/ 44" },
        ],
      },
      {
        id: "regalos",
        title: "Pequeños regalos",
        description: "Objetos útiles y comestibles para llevar una buena pausa contigo.",
        items: [
          { name: "Taza de cerámica", image: "/images/menu/taza-ceramica.png", description: "Pieza de 300 ml hecha en talleres locales.", price: "S/ 48" },
          { name: "Granola de la casa", image: "/images/menu/granola-casa.png", description: "Avena tostada, nueces, coco y miel.", price: "S/ 24" },
          { name: "Tarjeta de café", image: "/images/menu/tarjeta-cafe.png", description: "Diez cafés de barra para usar a tu ritmo.", price: "S/ 120", note: "Diez visitas" },
        ],
      },
    ],
  },
  {
    id: "compartir",
    label: "Para compartir",
    intro: "Opciones para reuniones pequeñas, una oficina cercana o un encuentro que quieres celebrar.",
    categories: [
      {
        id: "mesas",
        title: "En la mesa",
        description: "Reservas para grupos pequeños con una selección que llega lista para compartir.",
        items: [
          { name: "Mesa de filtro", image: "/images/menu/mesa-filtro.png", description: "Chemex, dos piezas del horno y fruta de estación.", price: "S/ 68", note: "Para 2–3" },
          { name: "Mañana de equipo", image: "/images/menu/manana-equipo.png", description: "Café, mini pastelería y fruta para una reunión breve.", price: "S/ 95", note: "Para 4" },
        ],
      },
      {
        id: "oficina",
        title: "Para la oficina",
        description: "Pide con anticipación y nosotros nos ocupamos de la pausa.",
        items: [
          { name: "Caja de bollería", image: "/images/menu/caja-bolleria.png", description: "Doce piezas variadas recién horneadas.", price: "S/ 126", note: "12 piezas" },
          { name: "Termo de café", image: "/images/menu/termo-cafe.png", description: "Café filtrado de origen con vasos y leche aparte.", price: "S/ 78", note: "10 tazas" },
        ],
      },
    ],
  },
];

export default menu;

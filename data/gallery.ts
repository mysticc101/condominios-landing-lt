export type GalleryMoment = {
  hour: string;
  title: string;
  description: string;
  color: string;
  detail: string;
};

const gallery: GalleryMoment[] = [
  {
    hour: "07:00",
    title: "El primer vertido",
    description: "Todo empieza con una molienda precisa y el primer café preparado sin apuro.",
    color: "#c79870",
    detail: "Origen Perú",
  },
  {
    hour: "11:30",
    title: "Una pausa larga",
    description: "Luz de media mañana, una mesa libre y conversaciones que encuentran su propio ritmo.",
    color: "#857363",
    detail: "San Isidro",
  },
  {
    hour: "16:00",
    title: "La hora dorada",
    description: "Pastelería recién horneada, café de especialidad y la ciudad bajando el volumen afuera.",
    color: "#4e4035",
    detail: "Todos los días",
  },
];

export default gallery;

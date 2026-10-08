export interface Discipline {
  name: string;
  photo: string;
  image?: string;
  alt?: string;
  imageClassName?: string;
  phone?: string;
}

export const CLUB_PHONE = "341 356 0193";

export const DISCIPLINES: Discipline[] = [
  {
    name: "Arquería",
    photo: "Foto · Arquería",
    image: "/club/arqueria.jpg",
    alt: "Mujer practicando arquería al aire libre",
    imageClassName: "photo-cover--archery",
    phone: "341 661 6556",
  },
  {
    name: "Entrenamiento funcional",
    photo: "Foto · Funcional",
    image: "/club/entrenamiento-funcional.png",
    alt: "Elementos de entrenamiento funcional en el salón del club",
    imageClassName: "photo-cover--functional",
    phone: "341 336 4815",
  },
  {
    name: "Wing Chun",
    photo: "Foto · Wing Chun",
    image: "/club/wing-chun-recortado.png",
    alt: "Practicante de Wing Chun en postura de defensa",
    imageClassName: "photo-cover--wing-chun",
    phone: "341 336 4815",
  },
  {
    name: "Pádel",
    photo: "Foto · Pádel",
    image: "/club/padel.jpg",
    alt: "Jugador de pádel preparando el saque en la cancha del club",
    imageClassName: "photo-cover--padel",
    phone: "341 337 7790",
  },
  {
    name: "Patín artístico",
    photo: "Foto · Patín artístico",
    image: "/club/patin-artistico.jpg",
    alt: "Patines artísticos dispuestos en círculo",
    imageClassName: "photo-cover--skating",
    phone: "341 224 4593",
  },
  {
    name: "Patín competitivo",
    photo: "Foto · Patín competitivo",
    image: "/club/patin-competitivo.jpg",
    alt: "Patinadora de patín competitivo durante una presentación",
    imageClassName: "photo-cover--skating",
    phone: "341 224 4593",
  },
  {
    name: "Pelota paleta",
    photo: "Foto · Pelota paleta",
    image: "/club/pelota-paleta.jpg",
    alt: "Jugadores de pelota paleta posando en el frontón del club",
    imageClassName: "photo-cover--pelota-paleta",
    phone: "341 645 0496",
  },
  {
    name: "Taekwondo",
    photo: "Foto · Taekwondo",
    image: "/club/taekwondo-recortado.png",
    alt: "Dos competidores de taekwondo durante un combate",
    phone: "341 623 7696",
  },
  {
    name: "Sóftbol",
    photo: "Foto · Sóftbol",
    image: "/club/softbol.png",
    alt: "Bateador de sóftbol conectando un lanzamiento durante un entrenamiento",
    phone: "341 353 1615",
  },
  {
    name: "Ultimate Frisbee",
    photo: "Foto · Ultimate",
    image: "/club/ultimate.png",
    alt: "Jugadores de ultimate disputando el disco en una cancha de césped",
    phone: "11 2254 5969",
  },
  {
    name: "Grupo Scout",
    photo: "Foto · Grupo Scout",
    image: "/club/scouts-ronda.webp",
    alt: "Grupo Scout Domingo Matheu reunido en ronda en el predio",
    phone: "341 769 0001",
  },
  {
    name: "Vóley",
    photo: "Foto · Vóley",
    image: "/club/voley.png",
    alt: "Jugadoras de vóley entrenando en la cancha al aire libre del club",
    imageClassName: "photo-cover--volleyball",
    phone: "341 600 1397",
  },
  {
    name: "Hockey",
    photo: "Foto · Hockey",
    image: "/club/hockey-entrenamiento.png",
    alt: "Jugadoras de hockey entrenando de noche en el predio",
    imageClassName: "photo-cover--hockey",
    phone: "341 746 1974",
  },
];

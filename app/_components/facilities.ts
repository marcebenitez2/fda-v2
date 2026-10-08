export interface Facility {
  id: string;
  label: string;
  title: string;
  description?: string;
  pill?: string;
  image: string;
  alt: string;
  sizes: string;
  imageClassName?: string;
  revealDelay?: string;
}

export const FACILITIES: Facility[] = [
  {
    id: "pileta",
    label: "Pileta",
    title: "Una pileta amplia para todo el verano.",
    description:
      "Para nadar largos, jugar, aprender o sol y reposera. Apta para chicos, adultos y entrenamientos.",
    pill: "Pileta libre · Verano",
    image: "/club/pileta.jpg",
    alt: "Pileta del club con sector de trampolín",
    sizes: "(max-width: 760px) 100vw, 55vw",
    imageClassName: "photo-cover--pool",
  },
  {
    id: "salon",
    label: "Salón de eventos",
    title: "Un salón grande para cada celebración.",
    image: "/club/salon-eventos.png",
    alt: "Salón de eventos del club preparado para una celebración",
    sizes: "(max-width: 760px) 100vw, 42vw",
    imageClassName: "photo-cover--event-hall",
    revealDelay: ".1s",
  },
  {
    id: "parking",
    label: "Estacionamiento",
    title: "Vení tranquilo.",
    description: "Estacionamiento amplio dentro del predio, sin vueltas.",
    image: "/club/estacionamiento.png",
    alt: "Estacionamiento arbolado e iluminado dentro del predio del club",
    sizes: "(max-width: 760px) 100vw, 33vw",
    revealDelay: ".2s",
  },
  {
    id: "eventos",
    label: "Mesas y rincones",
    title: "Muchas mesas al aire libre.",
    image: "/club/mesas-festejo.jpg",
    alt: "Familias compartiendo una mesa bajo los árboles del club",
    sizes: "(max-width: 760px) 100vw, 30vw",
    revealDelay: ".25s",
  },
];

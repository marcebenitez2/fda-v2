export interface SchoolActivity {
  title: string;
  tag: string;
}

export interface SchoolPhoto {
  id: string;
  src: string;
  alt: string;
  sizes: string;
}

export const SCHOOL_ACTIVITIES: SchoolActivity[] = [
  { title: "Jornadas recreativas y de educación física", tag: "Deporte" },
  { title: "Talleres con la naturaleza del predio", tag: "Ambiente" },
  { title: "Salidas didácticas y de fin de año", tag: "Paseos" },
  { title: "Mesas a la sombra para merendar", tag: "Predio" },
];

export const SCHOOL_PHOTOS: SchoolPhoto[] = [
  {
    id: "plaza",
    src: "/club/escuela-plaza-grupos.jpg",
    alt: "Grupos de alumnos sentados en el playón, frente a la plaza de juegos del club",
    sizes: "(max-width: 980px) 100vw, 50vw",
  },
  {
    id: "arbol",
    src: "/club/escuela-arbol-hojas.jpg",
    alt: "Chicos en ronda armando un árbol con hojas juntadas en el predio",
    sizes: "(max-width: 980px) 50vw, 25vw",
  },
  {
    id: "cesped",
    src: "/club/escuela-juego-cesped.jpg",
    alt: "Alumnos jugando sobre el césped durante una jornada al aire libre",
    sizes: "(max-width: 980px) 50vw, 25vw",
  },
];

export const SCHOOL_WHATSAPP_MESSAGE =
  "¡Hola! Escribo desde una escuela / jardín y queremos coordinar una jornada en el club.";

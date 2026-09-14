import Image from "next/image";
import { Reveal } from "./reveal";

type Discipline = {
  num: string;
  name: string;
  photo: string;
  image?: string;
  alt?: string;
  imageClassName?: string;
  secondaryImage?: string;
  secondaryAlt?: string;
  description?: string;
  featured?: boolean;
  tags: string[];
};

const disciplines: Discipline[] = [
  {
    num: "01",
    name: "Arquería",
    photo: "Foto · Arquería",
    image: "/club/arqueria.jpg",
    alt: "Mujer practicando arquería al aire libre",
    imageClassName: "photo-cover--archery",
    tags: ["Aire libre", "Todas las edades"],
  },
  {
    num: "02",
    name: "Entrenamiento funcional",
    photo: "Foto · Funcional",
    image: "/club/entrenamiento-funcional.png",
    alt: "Elementos de entrenamiento funcional en el salón del club",
    imageClassName: "photo-cover--functional",
    tags: ["Indoor / Outdoor", "Adultos"],
  },
  {
    num: "03",
    name: "Handball",
    photo: "Foto · Handball",
    tags: ["Cancha propia", "Infantil → adultos"],
  },
  {
    num: "04",
    name: "Wing Chun",
    photo: "Foto · Wing Chun",
    image: "/club/wing-chun-recortado.png",
    alt: "Practicante de Wing Chun en postura de defensa",
    imageClassName: "photo-cover--wing-chun",
    tags: ["Indoor", "Adultos"],
  },
  {
    num: "05",
    name: "Pádel",
    photo: "Foto · Pádel",
    tags: ["Canchas propias", "Todos los niveles"],
  },
  {
    num: "06",
    name: "Patín artístico",
    photo: "Foto · Patín artístico",
    image: "/club/patin-recortado.png",
    alt: "Patinadora artística durante una presentación",
    imageClassName: "photo-cover--skating",
    tags: ["Pista propia", "Desde 4 años"],
  },
  {
    num: "07",
    name: "Patín competitivo",
    photo: "Foto · Patín competitivo",
    tags: ["Pista propia", "Federado"],
  },
  {
    num: "08",
    name: "Pelota paleta",
    photo: "Foto · Pelota paleta",
    tags: ["Cancha propia", "Adultos"],
  },
  {
    num: "09",
    name: "Taekwondo",
    photo: "Foto · Taekwondo",
    image: "/club/taekwondo-recortado.png",
    alt: "Dos competidores de taekwondo durante un combate",
    tags: ["Dojo", "Desde 5 años"],
  },
  {
    num: "10",
    name: "Sóftbol",
    photo: "Foto · Sóftbol",
    tags: ["Diamante propio", "Todas las edades"],
  },
  {
    num: "11",
    name: "Ultimate Frisbee",
    photo: "Foto · Ultimate",
    image: "/club/ultimate.png",
    alt: "Jugadores de ultimate disputando el disco en una cancha de césped",
    tags: ["Aire libre", "Adultos jóvenes"],
  },
  {
    num: "12",
    name: "Grupo Scout",
    photo: "Foto · Grupo Scout",
    image: "/club/scouts-ronda.webp",
    alt: "Grupo Scout Domingo Matheu reunido en ronda en el predio",
    tags: ["Aire libre", "Familias"],
  },
  {
    num: "13",
    name: "Hockey",
    photo: "Foto · Hockey",
    image: "/club/hockey-entrenamiento.png",
    alt: "Jugadoras de hockey entrenando de noche en el predio",
    imageClassName: "photo-cover--hockey",
    secondaryImage: "/club/hockey-equipo.png",
    secondaryAlt: "Palos, bochas y conos de hockey sobre el césped",
    description: "Entrenamientos y juego al aire libre, también cuando cae el sol.",
    featured: true,
    tags: ["Aire libre", "Entrenamiento nocturno"],
  },
];

export function Disciplinas() {
  return (
    <section className="disciplinas" id="disciplinas">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">12 disciplinas</div>
            <h2 className="display h-lg">
              Tu próxima <em>disciplina favorita</em>, te estamos esperando.
            </h2>
          </Reveal>
          <Reveal className="right" delay=".15s">
            Desde el arco y el patín hasta el wing chun y el ultimate frisbee —
            doce disciplinas con su cancha, su gente y sus horarios. Todas con
            el espíritu del club.
          </Reveal>
        </div>

        <Reveal className="disc-grid">
          {disciplines.map((d) => (
            <div key={d.num} className={`disc${d.featured ? " disc--featured" : ""}`}>
              <div className="disc-photo">
                {d.image && (
                  <Image
                    src={d.image}
                    alt={d.alt ?? d.name}
                    fill
                    sizes={d.featured ? "(max-width: 760px) 100vw, 55vw" : "(max-width: 760px) 50vw, 25vw"}
                    className={`photo-cover${d.imageClassName ? ` ${d.imageClassName}` : ""}`}
                  />
                )}
                {d.secondaryImage && (
                  <div className="disc-detail-photo">
                    <Image
                      src={d.secondaryImage}
                      alt={d.secondaryAlt ?? ""}
                      fill
                      sizes="(max-width: 760px) 25vw, 12vw"
                      className="photo-cover"
                    />
                  </div>
                )}
                <span className="disc-num-tag">{d.num}</span>
                {!d.image && <span className="ph">{d.photo}</span>}
                <span className="disc-arrow">↗</span>
              </div>
              <div className="disc-info">
                <div className="disc-name">{d.name}</div>
                {d.description && <p className="disc-description">{d.description}</p>}
                <div className="disc-meta">
                  {d.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

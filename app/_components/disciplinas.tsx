import Image from "next/image";
import { Reveal } from "./reveal";

type Discipline = {
  name: string;
  photo: string;
  image?: string;
  alt?: string;
  imageClassName?: string;
};

const disciplines: Discipline[] = [
  {
    name: "Arquería",
    photo: "Foto · Arquería",
    image: "/club/arqueria.jpg",
    alt: "Mujer practicando arquería al aire libre",
    imageClassName: "photo-cover--archery",
  },
  {
    name: "Entrenamiento funcional",
    photo: "Foto · Funcional",
    image: "/club/entrenamiento-funcional.png",
    alt: "Elementos de entrenamiento funcional en el salón del club",
    imageClassName: "photo-cover--functional",
  },
  {
    name: "Wing Chun",
    photo: "Foto · Wing Chun",
    image: "/club/wing-chun-recortado.png",
    alt: "Practicante de Wing Chun en postura de defensa",
    imageClassName: "photo-cover--wing-chun",
  },
  {
    name: "Pádel",
    photo: "Foto · Pádel",
  },
  {
    name: "Patín artístico",
    photo: "Foto · Patín artístico",
    image: "/club/patin-artistico.jpg",
    alt: "Patines artísticos dispuestos en círculo",
    imageClassName: "photo-cover--skating",
  },
  {
    name: "Patín competitivo",
    photo: "Foto · Patín competitivo",
    image: "/club/patin-competitivo.jpg",
    alt: "Patinadora de patín competitivo durante una presentación",
    imageClassName: "photo-cover--skating",
  },
  {
    name: "Pelota paleta",
    photo: "Foto · Pelota paleta",
  },
  {
    name: "Taekwondo",
    photo: "Foto · Taekwondo",
    image: "/club/taekwondo-recortado.png",
    alt: "Dos competidores de taekwondo durante un combate",
  },
  {
    name: "Sóftbol",
    photo: "Foto · Sóftbol",
    image: "/club/softbol.png",
    alt: "Bateador de sóftbol conectando un lanzamiento durante un entrenamiento",
  },
  {
    name: "Ultimate Frisbee",
    photo: "Foto · Ultimate",
    image: "/club/ultimate.png",
    alt: "Jugadores de ultimate disputando el disco en una cancha de césped",
  },
  {
    name: "Grupo Scout",
    photo: "Foto · Grupo Scout",
    image: "/club/scouts-ronda.webp",
    alt: "Grupo Scout Domingo Matheu reunido en ronda en el predio",
  },
  {
    name: "Hockey",
    photo: "Foto · Hockey",
    image: "/club/hockey-entrenamiento.png",
    alt: "Jugadoras de hockey entrenando de noche en el predio",
    imageClassName: "photo-cover--hockey",
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
            <div key={d.name} className="disc">
              <div className="disc-photo">
                {d.image && (
                  <Image
                    src={d.image}
                    alt={d.alt ?? d.name}
                    fill
                    sizes="(max-width: 760px) 50vw, 25vw"
                    className={`photo-cover${d.imageClassName ? ` ${d.imageClassName}` : ""}`}
                  />
                )}
                {!d.image && <span className="ph">{d.photo}</span>}
              </div>
              <div className="disc-info">
                <div className="disc-name">{d.name}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

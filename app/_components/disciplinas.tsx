import Image from "next/image";
import { Reveal } from "./reveal";

type Discipline = {
  num: string;
  name: string;
  photo: string;
  image?: string;
  alt?: string;
  tags: string[];
};

const disciplines: Discipline[] = [
  {
    num: "01",
    name: "Arquería",
    photo: "Foto · Arquería",
    tags: ["Aire libre", "Todas las edades"],
  },
  {
    num: "02",
    name: "Entrenamiento funcional",
    photo: "Foto · Funcional",
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
];

export function Disciplinas() {
  return (
    <section className="disciplinas" id="disciplinas">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">11 disciplinas</div>
            <h2 className="display h-lg">
              Tu próxima <em>disciplina favorita</em>, te estamos esperando.
            </h2>
          </Reveal>
          <Reveal className="right" delay=".15s">
            Desde el arco y el patín hasta el wing chun y el ultimate frisbee —
            once disciplinas con su cancha, su gente y sus horarios. Todas con
            el espíritu del club.
          </Reveal>
        </div>

        <Reveal className="disc-grid">
          {disciplines.map((d) => (
            <div key={d.num} className="disc">
              <div className="disc-photo">
                {d.image && (
                  <Image
                    src={d.image}
                    alt={d.alt ?? d.name}
                    fill
                    sizes="(max-width: 760px) 50vw, 25vw"
                    className="photo-cover"
                  />
                )}
                <span className="disc-num-tag">{d.num}</span>
                {!d.image && <span className="ph">{d.photo}</span>}
                <span className="disc-arrow">↗</span>
              </div>
              <div className="disc-info">
                <div className="disc-name">{d.name}</div>
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

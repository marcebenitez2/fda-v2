import Image from "next/image";
import { Reveal } from "./reveal";

export function Comunidad() {
  return (
    <section className="comu" id="comunidad">
      <div className="wrap">
        <div className="comu-grid">
          <Reveal className="comu-img-stack">
            <div className="img-slot has-photo a">
              <Image
                src="/club/familia-parque.jpg"
                alt="Familia reunida en una mesa del club durante su festejo"
                fill
                sizes="(max-width: 980px) 60vw, 35vw"
                className="photo-cover"
              />
            </div>
            <div className="img-slot has-photo b">
              <Image
                src="/club/scouts-juego.webp"
                alt="Chicos del Grupo Scout Domingo Matheu jugando en el predio"
                fill
                sizes="(max-width: 980px) 50vw, 27vw"
                className="photo-cover"
              />
            </div>
          </Reveal>

          <Reveal delay=".15s">
            <div className="eyebrow">El espíritu del club</div>
            <h2 className="display h-md">
              Un club <em>de familia</em>, de barrio, de toda la vida.
            </h2>
            <p
              style={{
                marginTop: 24,
                color: "var(--ink-soft)",
                fontSize: 17,
                lineHeight: 1.65,
                maxWidth: "52ch",
              }}
            >
              Acá los abuelos vinieron de chicos, los nietos arrancaron
              pateando una pelota y los vecinos se siguen cruzando todos los
              sábados. Eso somos.
            </p>
            <ul className="comu-list">
              <li>
                <span className="n">01</span>
                <span className="t">Cuota familiar accesible</span>
                <span className="d">Socio</span>
              </li>
              <li>
                <span className="n">02</span>
                <span className="t">Actividades para todas las edades</span>
                <span className="d">Disciplinas</span>
              </li>
              <li>
                <span className="n">03</span>
                <span className="t">Eventos abiertos a la comunidad</span>
                <span className="d">Calendario</span>
              </li>
              <li>
                <span className="n">04</span>
                <span className="t">
                  Comisión y subcomisiones siempre activas
                </span>
                <span className="d">Sumate</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

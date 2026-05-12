import { Reveal } from "./reveal";

export function Comunidad() {
  return (
    <section className="comu" id="comunidad">
      <div className="wrap">
        <div className="comu-grid">
          <Reveal className="comu-img-stack">
            <div className="img-slot a">
              <span className="center-label">Foto · Sobremesa familiar</span>
              <span className="tag">1000×1200</span>
            </div>
            <div className="img-slot b">
              <span className="center-label">Foto · Patín / Cancha</span>
              <span className="tag">800×900</span>
            </div>
            <div className="badge">Tres generaciones · una sola cancha</div>
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
                <span className="t">
                  Becas deportivas para chicos del barrio
                </span>
                <span className="d">Comisión</span>
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

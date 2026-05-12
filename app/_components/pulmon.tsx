import { Reveal } from "./reveal";

export function Pulmon() {
  return (
    <section className="pulmon" id="pulmon">
      <div className="leaf l1" />
      <div className="leaf l2" />
      <div className="wrap">
        <div className="pulmon-grid">
          <Reveal>
            <div className="eyebrow">El pulmón de Zona Sur</div>
            <h2 className="display h-lg">
              Hectáreas de <em>árboles</em> y aire para respirar.
            </h2>
            <p>
              Vení a desconectarte sin salir del barrio. Senderos, arboleda
              añosa, mesas y rincones para que cada familia encuentre su lugar.
              Como un camping, pero a cinco minutos de tu casa.
            </p>
          </Reveal>

          <Reveal className="pulmon-img" delay=".2s">
            <span className="corner-badge">Pulmón de Zona Sur</span>
            <div className="img-tag">
              <span>Foto · Senderos / Arboleda</span>
              <span>1200×1500</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

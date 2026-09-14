import Image from "next/image";
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
            <Image
              src="/club/parque-arbolado.jpg"
              alt="Arboleda y sector de juegos del predio del club"
              fill
              sizes="(max-width: 980px) 100vw, 45vw"
              className="photo-cover"
            />
            <span className="corner-badge">Pulmón de Zona Sur</span>
            <div className="img-tag">
              <span>Arboleda del club</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

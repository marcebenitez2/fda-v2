import { Counter } from "./counter";
import { ParallaxStrip } from "./parallax-strip";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
      </div>

      <div className="wrap hero-body">
        <div className="hero-grid">
          <div className="hero-headline">
            <div
              className="hero-logo-circle"
              aria-label="Espacio para el logo del club"
            />
          </div>

          <div className="hero-side">
            <p className="hero-lede">
              Somos un club de familia, abierto, con muchas hectáreas de{" "}
              <em>árboles y deporte</em>. Once disciplinas, pileta, dos quinchos
              y un salón de eventos — todo a la vuelta de tu casa.
            </p>
            <div className="hero-meta">
              <div className="stat">
                <Counter target={11} />
                <div className="l">Disciplinas</div>
              </div>
              <div className="stat">
                <Counter target={14} />
                <div className="l">Hectáreas verdes</div>
              </div>
              <div className="stat">
                <div className="n">+80</div>
                <div className="l">Años de historia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap hero-strip-wrap">
        <ParallaxStrip />
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Arquería</span>
          <span className="dot" />
          <span>Entrenamiento funcional</span>
          <span className="dot" />
          <span>Handball</span>
          <span className="dot" />
          <span>Wing Chun</span>
          <span className="dot" />
          <span>Pádel</span>
          <span className="dot" />
          <span>Patín artístico</span>
          <span className="dot" />
          <span>Patín competitivo</span>
          <span className="dot" />
          <span>Pelota paleta</span>
          <span className="dot" />
          <span>Taekwondo</span>
          <span className="dot" />
          <span>Sóftbol</span>
          <span className="dot" />
          <span>Ultimate Frisbee</span>
          <span className="dot" />
          <span>Grupo Scout</span>
          <span className="dot" />
          <span>Arquería</span>
          <span className="dot" />
          <span>Entrenamiento funcional</span>
          <span className="dot" />
          <span>Handball</span>
          <span className="dot" />
          <span>Wing Chun</span>
          <span className="dot" />
          <span>Pádel</span>
          <span className="dot" />
          <span>Patín artístico</span>
          <span className="dot" />
          <span>Patín competitivo</span>
          <span className="dot" />
          <span>Pelota paleta</span>
          <span className="dot" />
          <span>Taekwondo</span>
          <span className="dot" />
          <span>Sóftbol</span>
          <span className="dot" />
          <span>Ultimate Frisbee</span>
          <span className="dot" />
          <span>Grupo Scout</span>
          <span className="dot" />
        </div>
      </div>
    </section>
  );
}

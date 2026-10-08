import {
  CLUB_EMAIL,
  CLUB_INSTAGRAM_URL,
  CLUB_MAPS_URL,
  CLUB_PHONE,
} from "./club-info";
import { whatsappUrl } from "./whatsapp";

const DEVELOPER_PHONE = "341 569 0470";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <h3 className="foot-big">
              CLUB S&amp;D F.A.
              <br />
              <em>DOMINGO MATHEU.</em>
            </h3>
          </div>
          <div className="foot-col">
            <h4>Club</h4>
            <a href="#pulmon">Quiénes somos</a>
            <a href="#disciplinas">Disciplinas</a>
            <a href="#instalaciones">Instalaciones</a>
            <a href="#comunidad">Comunidad</a>
            <a href="/novedades">Novedades</a>
          </div>
          <div className="foot-col">
            <h4>Contacto</h4>
            <a
              href={whatsappUrl(
                CLUB_PHONE,
                "¡Hola! Quería hacer una consulta.",
              )}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp {CLUB_PHONE}
            </a>
            <a href={`mailto:${CLUB_EMAIL}`}>{CLUB_EMAIL}</a>
            <a href={CLUB_INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={CLUB_MAPS_URL} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© CLUB S&amp;D F.A. DOMINGO MATHEU</div>
          <a
            className="foot-credit"
            href={whatsappUrl(
              DEVELOPER_PHONE,
              "¡Hola Marce! Vi la web del Club Domingo Matheu.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Desarrollado por Marce Benitez{" "}
            <span className="foot-heart" aria-hidden="true">
              ❤️
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

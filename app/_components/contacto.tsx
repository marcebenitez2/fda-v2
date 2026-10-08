import { Reveal } from "./reveal";
import { ContactForm } from "./contact-form";
import {
  CLUB_ADDRESS,
  CLUB_EMAIL,
  CLUB_HOURS,
  CLUB_INSTAGRAM_HANDLE,
  CLUB_INSTAGRAM_URL,
  CLUB_MAP_EMBED_URL,
  CLUB_MAPS_URL,
  CLUB_NAME,
  CLUB_PHONE,
} from "./club-info";
import { InstagramIcon } from "./instagram-icon";
import { whatsappUrl } from "./whatsapp";

export function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">Contacto · Asociate</div>
          <h2 className="display h-lg">
            Vení, conocé el club y <em>quedate</em>.
          </h2>
        </Reveal>

        <div className="contacto-grid">
          <Reveal>
            <div className="info-block">
              <div className="label">Dirección</div>
              <div className="value">
                <a
                  href={CLUB_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  {CLUB_ADDRESS.street}
                  <br />
                  {CLUB_ADDRESS.city} · {CLUB_ADDRESS.region}
                </a>
              </div>
            </div>
            <div className="info-block">
              <div className="label">WhatsApp</div>
              <div className="value">
                <a
                  href={whatsappUrl(
                    CLUB_PHONE,
                    "¡Hola! Quería hacer una consulta.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  {CLUB_PHONE}
                </a>
              </div>
              <div className="note">Solo mensajes. No atendemos llamadas.</div>
            </div>
            <div className="info-block">
              <div className="label">Horarios del club</div>
              <div className="value">
                {CLUB_HOURS.map((hours) => (
                  <div key={hours.label}>
                    {hours.label} · {hours.schedule}
                  </div>
                ))}
              </div>
            </div>
            <div className="info-block">
              <div className="label">Correo</div>
              <div className="value">
                <a href={`mailto:${CLUB_EMAIL}`}>{CLUB_EMAIL}</a>
              </div>
            </div>
            <div className="info-block">
              <div className="label">Instagram</div>
              <div className="value">
                <a
                  className="instagram-link"
                  href={CLUB_INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                  <span>@{CLUB_INSTAGRAM_HANDLE}</span>
                </a>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                title={`Ubicación del ${CLUB_NAME}`}
                src={CLUB_MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href={CLUB_MAPS_URL}
                target="_blank"
                rel="noreferrer"
              >
                Abrir en Google Maps ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay=".15s">
            <p className="contacto-form-intro">
              Dejanos tus datos y te llamamos para coordinar una visita guiada,
              contarte sobre disciplinas, cuotas y reservas de quinchos.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./reveal";
import { ContactForm } from "./contact-form";

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
                  href="https://maps.app.goo.gl/xJNqLx5BMPVVyET7A"
                  target="_blank"
                  rel="noreferrer"
                >
                  Calle 1209 s/n
                  <br />
                  Rosario · Santa Fe
                </a>
              </div>
            </div>
            <div className="info-block">
              <div className="label">Teléfono · WhatsApp</div>
              <div className="value">
                <a href="tel:+5493413560193">+54 9 3413 56-0193</a>
              </div>
            </div>
            <div className="info-block">
              <div className="label">Horarios de atención</div>
              <div className="value">
                Lun a Vie · 9 a 22h
                <br />
                Sáb y Dom · 9 a 20h
              </div>
            </div>
            <div className="info-block">
              <div className="label">Correo</div>
              <div className="value">
                <a href="mailto:clubfabricadearmas@gmail.com">
                  clubfabricadearmas@gmail.com
                </a>
              </div>
            </div>
            <div className="info-block">
              <div className="label">Instagram</div>
              <div className="value">
                <a
                  className="instagram-link"
                  href="https://www.instagram.com/clubdomingomatheurosario?stkn=MWp2dGdxdm51dDYydg=="
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                  <span>@clubdomingomatheurosario</span>
                </a>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                title="Ubicación del Club Social y Deportivo F. A. Domingo Matheu"
                src="https://www.google.com/maps?q=-32.996548,-60.6814769&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://maps.app.goo.gl/xJNqLx5BMPVVyET7A"
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

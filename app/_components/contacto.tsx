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
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(246,241,228,0.78)",
                maxWidth: "38ch",
              }}
            >
              Dejanos tus datos y te llamamos para coordinar una visita guiada,
              contarte sobre disciplinas, cuotas y reservas de quinchos.
            </p>
            <div className="info-block">
              <div className="label">Dirección</div>
              <div className="value">
                Av. Principal s/n
                <br />
                Zona Sur · Rosario
              </div>
            </div>
            <div className="info-block">
              <div className="label">Teléfono · WhatsApp</div>
              <div className="value">
                <a href="tel:+5491100000000">+54 9 11 0000-0000</a>
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
              <div className="label">Redes</div>
              <div className="value">
                <a href="mailto:hola@fabricadearmas.club">
                  hola@fabricadearmas.club
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay=".15s">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

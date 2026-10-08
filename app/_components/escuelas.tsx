import Image from "next/image";
import { CLUB_PHONE } from "./club-info";
import { listNumber } from "./list-number";
import { Reveal } from "./reveal";
import {
  SCHOOL_ACTIVITIES,
  SCHOOL_PHOTOS,
  SCHOOL_WHATSAPP_MESSAGE,
} from "./school-visits";
import { whatsappUrl } from "./whatsapp";

export function Escuelas() {
  return (
    <section className="escuelas" id="escuelas">
      <div className="wrap">
        <div className="escuelas-grid">
          <Reveal>
            <div className="eyebrow">Escuelas y jardines</div>
            <h2 className="display h-md">
              Un aula <em>al aire libre</em> para tu escuela.
            </h2>
            <p className="escuelas-lede">
              Abrimos el predio a escuelas y jardines para que los chicos
              aprendan, jueguen y se muevan entre los árboles. Armamos con cada
              institución una jornada a medida, con espacios seguros para cada
              grupo y mucho verde alrededor.
            </p>
            <ul className="comu-list">
              {SCHOOL_ACTIVITIES.map((activity, index) => (
                <li key={activity.title}>
                  <span className="n">{listNumber(index)}</span>
                  <span className="t">{activity.title}</span>
                  <span className="d">{activity.tag}</span>
                </li>
              ))}
            </ul>
            <div className="escuelas-cta-row">
              <a
                className="escuelas-cta"
                href={whatsappUrl(CLUB_PHONE, SCHOOL_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noreferrer"
              >
                Coordiná una visita
                <span aria-hidden="true">→</span>
              </a>
              <p className="escuelas-note">
                Contanos el nivel, la cantidad de chicos y la fecha que buscan.
              </p>
            </div>
          </Reveal>

          <Reveal className="escuelas-photos" delay=".15s">
            {SCHOOL_PHOTOS.map((photo) => (
              <div key={photo.id} className={`escuelas-photo ${photo.id}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={photo.sizes}
                  className="photo-cover"
                />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

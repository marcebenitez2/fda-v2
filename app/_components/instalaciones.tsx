import Image from "next/image";
import { FACILITIES, type Facility } from "./facilities";
import { Reveal } from "./reveal";

const cardNumber = (index: number): string =>
  String(index + 1).padStart(2, "0");

function FacilityCard({
  facility,
  index,
}: {
  facility: Facility;
  index: number;
}) {
  const imageClassName = `photo-cover${facility.imageClassName ? ` ${facility.imageClassName}` : ""}`;

  return (
    <Reveal className={`card ${facility.id}`} delay={facility.revealDelay}>
      <div className="card-photo has-photo">
        <Image
          src={facility.image}
          alt={facility.alt}
          fill
          sizes={facility.sizes}
          className={imageClassName}
        />
      </div>
      <div className="card-body">
        <div className="num">
          {cardNumber(index)} · {facility.label}
        </div>
        <h3>{facility.title}</h3>
        {facility.description && <p>{facility.description}</p>}
        {facility.pill && <span className="pill">{facility.pill}</span>}
      </div>
    </Reveal>
  );
}

export function Instalaciones() {
  return (
    <section className="instal" id="instalaciones">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Instalaciones</div>
            <h2 className="display h-lg">
              Todo lo necesario para <em>pasarla bien</em>.
            </h2>
          </Reveal>
          <Reveal className="right" delay=".15s">
            Un predio pensado para que cada socio encuentre su lugar — desde una
            tarde de pileta hasta el cumpleaños de los 15.
          </Reveal>
        </div>

        <div className="instal-grid">
          {FACILITIES.map((facility, index) => (
            <FacilityCard key={facility.id} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

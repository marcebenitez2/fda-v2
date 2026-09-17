import Image from "next/image";
import { Reveal } from "./reveal";

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
          <Reveal className="card pileta">
            <div className="card-photo has-photo">
              <Image
                src="/club/pileta.jpg"
                alt="Pileta del club con sector de trampolín"
                fill
                sizes="(max-width: 760px) 100vw, 55vw"
                className="photo-cover photo-cover--pool"
              />
            </div>
            <div className="card-body">
              <div className="num">01 · Pileta</div>
              <h3>Una pileta amplia para todo el verano.</h3>
              <p>
                Para nadar largos, jugar, aprender o sol y reposera. Apta para
                chicos, adultos y entrenamientos.
              </p>
              <span className="pill">Pileta libre · Verano</span>
            </div>
          </Reveal>

          <Reveal className="card salon" delay=".1s">
            <div className="card-photo has-photo">
              <Image
                src="/club/salon-eventos.png"
                alt="Salón de eventos del club preparado para una celebración"
                fill
                sizes="(max-width: 760px) 100vw, 42vw"
                className="photo-cover photo-cover--event-hall"
              />
            </div>
            <div className="card-body">
              <div className="num">02 · Salón de eventos</div>
              <h3>Un salón grande para cada celebración.</h3>
            </div>
          </Reveal>

          <Reveal className="card parking" delay=".2s">
            <div className="card-photo has-photo">
              <Image
                src="/club/estacionamiento.png"
                alt="Estacionamiento arbolado e iluminado dentro del predio del club"
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
                className="photo-cover"
              />
            </div>
            <div className="card-body">
              <div className="num">03 · Estacionamiento</div>
              <h3>Vení tranquilo.</h3>
              <p>
                Estacionamiento amplio dentro del predio, sin vueltas.
              </p>
            </div>
          </Reveal>

          <Reveal className="card eventos" delay=".25s">
            <div className="card-photo has-photo">
              <Image
                src="/club/mesas-festejo.jpg"
                alt="Familias compartiendo una mesa bajo los árboles del club"
                fill
                sizes="(max-width: 760px) 100vw, 30vw"
                className="photo-cover"
              />
            </div>
            <div className="card-body">
              <div className="num">04 · Mesas y rincones</div>
              <h3>Muchas mesas al aire libre.</h3>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

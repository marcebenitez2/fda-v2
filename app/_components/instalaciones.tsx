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
              <span className="photo-tag">Pileta del club</span>
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
            <div className="card-photo">
              <span className="ph">Foto · Salón de eventos</span>
              <span className="photo-tag">1200×800</span>
            </div>
            <div className="card-body">
              <div className="num">02 · Salón de eventos</div>
              <h3>Un salón grande para cada celebración.</h3>
              <p>
                Cumpleaños, casamientos, fiestas de egresados. Cocina y barra
                incluidas.
              </p>
              <span className="pill">Capacidad 200+</span>
            </div>
          </Reveal>

          <Reveal className="card quincho" delay=".15s">
            <div className="card-photo">
              <span className="ph">Foto · Quinchos</span>
              <span className="photo-tag">1200×800</span>
            </div>
            <div className="card-body">
              <div className="num">03 · Dos quinchos</div>
              <h3>Dos quinchos, muchas mesas.</h3>
              <p>
                Para que el asado de los domingos no sea problema. Parrillas y
                mesas grandes.
              </p>
              <span className="pill">Reserva online</span>
            </div>
          </Reveal>

          <Reveal className="card parking" delay=".2s">
            <div className="card-photo">
              <span className="ph">Foto · Estacionamiento</span>
              <span className="photo-tag">1000×700</span>
            </div>
            <div className="card-body">
              <div className="num">04 · Estacionamiento</div>
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
              <span className="photo-tag">Mesas al aire libre</span>
            </div>
            <div className="card-body">
              <div className="num">05 · Mesas y rincones</div>
              <h3>Muchas mesas al aire libre.</h3>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Reveal } from "./reveal";

// On the home page the questions only get a pointer to their own page.
export function PreguntasCta() {
  return (
    <section className="faq-cta" id="preguntas">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <div className="eyebrow">Preguntas frecuentes</div>
            <h2 className="display h-md">
              Lo que <em>más nos preguntan</em>.
            </h2>
          </Reveal>
          <Reveal className="right" delay=".15s">
            <p>
              Visitas, cuotas, quinchos, salón de eventos y actividades:
              juntamos todas las respuestas en una sola página.
            </p>
            <Link href="/preguntas-frecuentes" className="faq-cta-link">
              Ver preguntas frecuentes
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

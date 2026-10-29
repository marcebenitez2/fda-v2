import type { Metadata } from "next";
import { Footer } from "../_components/footer";
import { Preguntas } from "../_components/preguntas";
import { SubpageHeader } from "../_components/subpage-header";

export const metadata: Metadata = {
  title: "Preguntas frecuentes | Club Domingo Matheu",
  description:
    "Visitas, cuotas, quinchos, salón de eventos y actividades: las respuestas a lo que más nos preguntan en el Club Domingo Matheu.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <SubpageHeader />
      <main id="contenido" tabIndex={-1}>
        <Preguntas />
      </main>
      <Footer />
    </>
  );
}

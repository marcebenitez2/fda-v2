import { Hero } from "./_components/hero";
import { Pulmon } from "./_components/pulmon";
import { Disciplinas } from "./_components/disciplinas";
import { Instalaciones } from "./_components/instalaciones";
import { Comunidad } from "./_components/comunidad";
import { Contacto } from "./_components/contacto";
import { Footer } from "./_components/footer";

export default function Page() {
  return (
    <>
      <Hero />
      <Pulmon />
      <Disciplinas />
      <Instalaciones />
      <Comunidad />
      <Contacto />
      <Footer />
    </>
  );
}

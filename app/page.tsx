import { Hero } from "./_components/hero";
import { Recorrido } from "./_components/recorrido";
import { Pulmon } from "./_components/pulmon";
import { Disciplinas } from "./_components/disciplinas";
import { Instalaciones } from "./_components/instalaciones";
import { Comunidad } from "./_components/comunidad";
import { Contacto } from "./_components/contacto";
import { Footer } from "./_components/footer";

export default function Page() {
  const clubStructuredData = {
    "@context": "https://schema.org",
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    name: "Club S&D F.A. Domingo Matheu",
    alternateName: "Club Domingo Matheu",
    description:
      "Club familiar de Zona Sur de Rosario con más de 80 años de historia, deportes, pileta, salón de eventos y un amplio predio arbolado.",
    email: "clubfabricadearmas@gmail.com",
    telephone: "+54 9 3413 56-0193",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle 1209 s/n",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.996548,
      longitude: -60.6814769,
    },
    hasMap: "https://maps.app.goo.gl/xJNqLx5BMPVVyET7A",
    sameAs: [
      "https://www.instagram.com/clubdomingomatheurosario?stkn=MWp2dGdxdm51dDYydg==",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clubStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <Recorrido />
      <Pulmon />
      <Disciplinas />
      <Instalaciones />
      <Comunidad />
      <Contacto />
      <Footer />
    </>
  );
}

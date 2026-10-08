import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { LogoFlightScript } from "./_components/logo-flight-script";
import { Recorrido } from "./_components/recorrido";
import { Pulmon } from "./_components/pulmon";
import { Disciplinas } from "./_components/disciplinas";
import { Instalaciones } from "./_components/instalaciones";
import { Comunidad } from "./_components/comunidad";
import { Escuelas } from "./_components/escuelas";
import { Contacto } from "./_components/contacto";
import { Footer } from "./_components/footer";
import {
  CLUB_ADDRESS,
  CLUB_EMAIL,
  CLUB_GEO,
  CLUB_HOURS,
  CLUB_INSTAGRAM_URL,
  CLUB_MAPS_URL,
  CLUB_NAME,
  CLUB_PHONE,
  CLUB_SHORT_NAME,
} from "./_components/club-info";

const clubStructuredData = {
  "@context": "https://schema.org",
  "@type": ["SportsActivityLocation", "LocalBusiness"],
  name: CLUB_NAME,
  alternateName: CLUB_SHORT_NAME,
  description:
    "Club familiar de Zona Sur de Rosario con más de 80 años de historia, deportes, pileta, salón de eventos y un amplio predio arbolado.",
  email: CLUB_EMAIL,
  telephone: `+54 9 ${CLUB_PHONE}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLUB_ADDRESS.street,
    addressLocality: CLUB_ADDRESS.city,
    addressRegion: CLUB_ADDRESS.region,
    addressCountry: CLUB_ADDRESS.country,
  },
  geo: { "@type": "GeoCoordinates", ...CLUB_GEO },
  openingHoursSpecification: CLUB_HOURS.map((hours) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: hours.days,
    opens: hours.opens,
    closes: hours.closes,
  })),
  hasMap: CLUB_MAPS_URL,
  sameAs: [CLUB_INSTAGRAM_URL],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(clubStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido" tabIndex={-1}>
        <Hero />
        <LogoFlightScript />
        <Recorrido />
        <Pulmon />
        <Disciplinas />
        <Instalaciones />
        <Comunidad />
        <Escuelas />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

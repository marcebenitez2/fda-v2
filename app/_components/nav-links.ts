export interface NavLink {
  href: string;
  label: string;
}

// Home sections, grouped under the "El club" dropdown.
export const NAV_SECTION_LINKS: NavLink[] = [
  { href: "#pulmon", label: "Quiénes somos" },
  { href: "#recorrido", label: "Recorrido" },
  { href: "#disciplinas", label: "Disciplinas" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "#escuelas", label: "Escuelas" },
  { href: "#convenios", label: "Convenios" },
];

// Pages outside the home, always in view.
export const NAV_PAGE_LINKS: NavLink[] = [
  { href: "/novedades", label: "Novedades" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
];

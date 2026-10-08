"use client";

import Image from "next/image";
import { useMenu } from "./use-menu";

const NAV_LINKS = [
  { href: "#pulmon", label: "El club" },
  { href: "#recorrido", label: "Recorrido" },
  { href: "#disciplinas", label: "Disciplinas" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#comunidad", label: "Comunidad" },
  { href: "/novedades", label: "Novedades" },
];

export function Nav() {
  const menu = useMenu();

  return (
    <>
      <nav className={`nav${menu.isOpen ? " is-open" : ""}`}>
        <span className="logo-slot" aria-hidden="true" />

        <div className="nav-links" id="nav-menu">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={menu.close}>
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="nav-cta" onClick={menu.close}>
            <span className="dot" />
            Sumate
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menu.isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menu.isOpen}
          aria-controls="nav-menu"
          onClick={menu.toggle}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Positioned by the inline logo flight script before hydration. */}
      <a
        href="#top"
        className="logo-fly"
        onClick={menu.close}
        suppressHydrationWarning
      >
        <Image
          src="/escudo-limpio.svg"
          alt="Inicio"
          width={320}
          height={347}
          unoptimized
        />
      </a>
    </>
  );
}

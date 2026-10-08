"use client";

import Image from "next/image";
import { useRef } from "react";
import { CLUB_NAME_MAIN, CLUB_NAME_PREFIX } from "./club-info";
import { useFocusTrap } from "./use-focus-trap";
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
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useFocusTrap(navRef, toggleRef, menu.isOpen, ".nav-links a");

  return (
    <>
      <nav ref={navRef} className={`nav${menu.isOpen ? " is-open" : ""}`}>
        <div className="nav-brand">
          <span className="logo-slot" aria-hidden="true" />
          {/* Revealed by CSS once the shield docks (see logo-flight.ts). */}
          <a href="#top" className="nav-brand-name" onClick={menu.close}>
            <span className="nav-brand-line">
              <span className="nav-brand-prefix">{CLUB_NAME_PREFIX}</span>
            </span>
            <span className="nav-brand-line">
              <span className="nav-brand-main">{CLUB_NAME_MAIN}</span>
            </span>
          </a>
        </div>

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
          ref={toggleRef}
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

"use client";

import Image from "next/image";
import { useRef } from "react";
import { useLogoFlight } from "./use-logo-flight";
import { useMenu } from "./use-menu";
import { useScrolled } from "./use-scrolled";

const NAV_LINKS = [
  { href: "#pulmon", label: "El club" },
  { href: "#recorrido", label: "Recorrido" },
  { href: "#disciplinas", label: "Disciplinas" },
  { href: "#instalaciones", label: "Instalaciones" },
  { href: "#comunidad", label: "Comunidad" },
];

export function Nav() {
  const scrolled = useScrolled();
  const menu = useMenu();
  const flyerRef = useRef<HTMLAnchorElement>(null);
  const slotRef = useRef<HTMLSpanElement>(null);
  useLogoFlight(flyerRef, slotRef, ".hero-logo", scrolled || menu.isOpen);

  return (
    <>
      <nav
        className={`nav${scrolled ? " is-scrolled" : ""}${menu.isOpen ? " is-open" : ""}`}
      >
        <span ref={slotRef} className="logo-slot" aria-hidden="true" />

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

      <a ref={flyerRef} href="#top" className="logo-fly" onClick={menu.close}>
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

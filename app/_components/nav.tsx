"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <a href="#top" className="logo">
        <Image src="/escudo-limpio.svg" alt="Escudo del club" width={40} height={44} unoptimized className="logo-mark" />
      </a>
      <div className="nav-links">
        <a href="#pulmon">El club</a>
        <a href="#disciplinas">Disciplinas</a>
        <a href="#instalaciones">Instalaciones</a>
        <a href="#comunidad">Comunidad</a>
      </div>
      <a href="#contacto" className="nav-cta">
        <span className="dot" />
        Sumate
      </a>
    </nav>
  );
}

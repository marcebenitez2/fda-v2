"use client";

import { useId, useRef } from "react";
import type { NavLink } from "./nav-links";
import { useDropdown } from "./use-dropdown";

interface NavDropdownProps {
  label: string;
  links: NavLink[];
  onNavigate: () => void;
}

// On desktop the links sit in a dropdown; in the mobile menu the toggle is
// hidden and they show like the other links.
export function NavDropdown({ label, links, onNavigate }: NavDropdownProps) {
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dropdown = useDropdown(containerRef, toggleRef);
  const navigate = (): void => {
    dropdown.close();
    onNavigate();
  };

  return (
    <div
      ref={containerRef}
      className={`nav-dropdown${dropdown.isOpen ? " is-open" : ""}`}
    >
      <button
        ref={toggleRef}
        type="button"
        className="nav-dropdown-toggle"
        aria-expanded={dropdown.isOpen}
        aria-controls={menuId}
        onClick={dropdown.toggle}
      >
        {label}
        <span className="nav-dropdown-chevron" aria-hidden="true" />
      </button>
      <div className="nav-dropdown-menu" id={menuId}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={navigate}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

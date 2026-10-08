"use client";

import Image from "next/image";
import { useId, type MouseEvent } from "react";
import { ChatIcon } from "./chat-icon";
import { CLUB_PHONE } from "./club-info";
import type { Discipline } from "./disciplines";
import { whatsappUrl } from "./whatsapp";

interface DisciplineCardProps {
  discipline: Discipline;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function DisciplineCard({
  discipline,
  isOpen,
  onToggle,
  onClose,
}: DisciplineCardProps) {
  const panelId = useId();
  const phone = discipline.phone ?? CLUB_PHONE;
  const label = discipline.phone ? "Consultas" : "WhatsApp del club";
  const href = whatsappUrl(
    phone,
    `¡Hola! Quiero consultar por ${discipline.name} en el Club Domingo Matheu.`,
  );
  // Tapping anywhere on the panel except the WhatsApp link flips back to the photo.
  const closeUnlessLink = (event: MouseEvent<HTMLDivElement>): void => {
    if (!(event.target as Element).closest(".disc-contact-link")) onClose();
  };
  const imageClassName = `photo-cover${discipline.imageClassName ? ` ${discipline.imageClassName}` : ""}`;

  return (
    <div className={`disc${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="disc-trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="disc-photo">
          <Image
            src={discipline.image}
            alt={discipline.alt ?? discipline.name}
            fill
            sizes="(max-width: 760px) 50vw, (max-width: 1100px) 33vw, 20vw"
            className={imageClassName}
          />
          <span className="disc-hint">
            <ChatIcon />
          </span>
        </span>
        <span className="disc-info">
          <span className="disc-name">{discipline.name}</span>
        </span>
      </button>

      <div
        id={panelId}
        className="disc-contact"
        inert={!isOpen}
        onClick={closeUnlessLink}
      >
        <button
          type="button"
          className="disc-contact-close"
          aria-label={`Cerrar contacto de ${discipline.name}`}
        >
          ×
        </button>
        <span className="disc-contact-label">{label}</span>
        <a
          className="disc-contact-link"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <span className="disc-contact-phone">{phone}</span>
          <span className="disc-contact-cta">
            <ChatIcon />
            <span>
              <span className="disc-contact-cta-extra">Escribir por </span>
              WhatsApp
            </span>
          </span>
        </a>
      </div>
    </div>
  );
}

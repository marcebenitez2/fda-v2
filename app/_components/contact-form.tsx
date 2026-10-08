"use client";

import { CLUB_PHONE } from "./disciplines";
import { INTEREST_OPTIONS, useContactForm } from "./use-contact-form";
import { whatsappUrl } from "./whatsapp";

export function ContactForm() {
  const { status, errors, handleSubmit } = useContactForm();

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="nombre">Nombre y apellido</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            required
            style={
              errors.nombre
                ? { borderBottomColor: "var(--yellow)" }
                : undefined
            }
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="vos@email.com"
            required
            style={
              errors.email ? { borderBottomColor: "var(--yellow)" } : undefined
            }
          />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="telefono">Teléfono</label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="+54 9 341 000-0000"
          />
        </div>
        <div className="field">
          <label htmlFor="interes">Me interesa</label>
          <select id="interes" name="interes">
            {INTEREST_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          placeholder="Contanos qué necesitás…"
        />
      </div>
      <input
        type="text"
        name="_honey"
        className="form-honeypot"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className="submit-row">
        <button
          type="submit"
          className="submit"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando…" : "Enviar consulta"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
        <div className="submit-meta">Te respondemos en 24h</div>
      </div>
      {status === "sent" && (
        <div className="form-success is-on" role="status">
          ✓ ¡Gracias! Recibimos tu consulta. Te contactamos a la brevedad.
        </div>
      )}
      {status === "error" && (
        <div className="form-error" role="alert">
          No pudimos enviar tu consulta. Probá de nuevo o escribinos por{" "}
          <a
            href={whatsappUrl(CLUB_PHONE, "¡Hola! Quería hacer una consulta.")}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp al {CLUB_PHONE}
          </a>
          .
        </div>
      )}
    </form>
  );
}

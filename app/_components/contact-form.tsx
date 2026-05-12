"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ nombre: false, email: false });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = (data.get("nombre") as string).trim();
    const email = (data.get("email") as string).trim();

    const newErrors = { nombre: !nombre, email: !email };
    setErrors(newErrors);
    if (newErrors.nombre || newErrors.email) return;

    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 6000);
  }

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
            placeholder="+54 9 11 0000-0000"
          />
        </div>
        <div className="field">
          <label htmlFor="interes">Me interesa</label>
          <select id="interes" name="interes">
            <option value="socio">Asociarme al club</option>
            <option value="disciplina">Una disciplina puntual</option>
            <option value="quincho">Reservar un quincho</option>
            <option value="salon">Alquilar el salón de eventos</option>
            <option value="visita">Visitar el predio</option>
            <option value="otro">Otro</option>
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
      <div className="submit-row">
        <button type="submit" className="submit">
          Enviar consulta
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
      {submitted && (
        <div className="form-success is-on">
          ✓ ¡Gracias! Recibimos tu consulta. Te contactamos a la brevedad.
        </div>
      )}
    </form>
  );
}

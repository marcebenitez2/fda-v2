"use client";

import { useState, type FormEvent } from "react";
import { sendContactRequest } from "../_services/contact.service";

export const INTEREST_OPTIONS = [
  "Asociarme al club",
  "Una disciplina puntual",
  "Reservar un quincho",
  "Alquilar el salón de eventos",
  "Visitar el predio",
  "Otro",
];

const SUCCESS_VISIBLE_MS = 6000;

type Status = "idle" | "sending" | "sent" | "error";

interface ContactForm {
  status: Status;
  errors: { nombre: boolean; email: boolean };
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}

const field = (data: FormData, name: string): string =>
  String(data.get(name) ?? "").trim();

export function useContactForm(): ContactForm {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState({ nombre: false, email: false });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const request = {
      nombre: field(data, "nombre"),
      email: field(data, "email"),
      telefono: field(data, "telefono"),
      interes: field(data, "interes"),
      mensaje: field(data, "mensaje"),
      honeypot: field(data, "_honey"),
    };

    const newErrors = { nombre: !request.nombre, email: !request.email };
    setErrors(newErrors);
    if (newErrors.nombre || newErrors.email) return;

    setStatus("sending");
    try {
      await sendContactRequest(request);
      setStatus("sent");
      form.reset();
      setTimeout(() => setStatus("idle"), SUCCESS_VISIBLE_MS);
    } catch {
      setStatus("error");
    }
  };

  return { status, errors, handleSubmit };
}

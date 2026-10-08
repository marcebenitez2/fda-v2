import type { ContactRequest } from "../_types/contact";

// FormSubmit relays the form to this inbox. The first submission sends the
// club an "Activate Form" email; nothing is delivered until they confirm it.
const CONTACT_ENDPOINT =
  "https://formsubmit.co/ajax/clubfabricadearmas@gmail.com";

const isSuccessResponse = (data: unknown): boolean =>
  typeof data === "object" &&
  data !== null &&
  "success" in data &&
  String(data.success) === "true";

export async function sendContactRequest(
  request: ContactRequest,
): Promise<void> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      Nombre: request.nombre,
      Email: request.email,
      Teléfono: request.telefono || "—",
      "Me interesa": request.interes,
      Mensaje: request.mensaje || "—",
      _subject: `Consulta web: ${request.interes} — ${request.nombre}`,
      _replyto: request.email,
      _template: "table",
      _honey: request.honeypot,
    }),
  });

  const data: unknown = await response.json().catch(() => null);
  if (!response.ok || !isSuccessResponse(data)) {
    throw new Error("Contact request was not accepted");
  }
}

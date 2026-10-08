// WhatsApp expects Argentine mobile numbers with the 54 country code plus a 9.
const AR_WHATSAPP_PREFIX = "549";

export function whatsappUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${AR_WHATSAPP_PREFIX}${digits}?text=${encodeURIComponent(message)}`;
}

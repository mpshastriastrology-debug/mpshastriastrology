const WHATSAPP_NUMBER = "918073258799";

export function buildBookingWhatsAppUrl({ name, phone, email, service, message }) {
  const lines = [
    "🙏 New appointment request — MP Shastri Astrology",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
  ];

  if (email?.trim()) {
    lines.push(`Email: ${email.trim()}`);
  }

  lines.push(`Service: ${service}`, "", `Message: ${message}`);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function openWhatsAppBooking(form) {
  const url = buildBookingWhatsAppUrl(form);
  window.open(url, "_blank", "noopener,noreferrer");
}

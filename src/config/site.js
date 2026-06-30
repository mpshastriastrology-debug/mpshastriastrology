/** Route stays available; set false to hide from nav, sitemap, and search engines. */
export const CONTACT_PAGE_PUBLIC = false;

/** Paths that should not be indexed (still reachable for users/ads). */
export const NOINDEX_ROUTES = [
  ...(CONTACT_PAGE_PUBLIC ? [] : ["/contact"]),
  "/quora-consultation",
];

export const COMPANY_LOGO_SRC = "/images/opt/MPShastriLogo-192w.webp";
export const COMPANY_NAME = "MP Shastri Astrology";

export const WHATSAPP_BOOKING_URL = "https://wa.me/918073258799";
export const PHONE_HREF = "tel:+918073258799";
export const QUORA_WHATSAPP_URL =
  "https://wa.me/918073258799?text=Hi%2C%20I%20saw%20your%20consultation%20on%20Quora.%20I%20would%20like%20to%20book%20a%20Vedic%20astrology%20session.%20Please%20share%20available%20slots.";

/** Quora conversion value (USD) for GenerateLead — qp('track', 'GenerateLead', { value }) */
export const QUORA_LEAD_VALUE =
  Number(import.meta.env?.VITE_QUORA_LEAD_VALUE) || 4.95;

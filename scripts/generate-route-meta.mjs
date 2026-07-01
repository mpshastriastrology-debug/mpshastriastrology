import fs from "fs";
import { CONSULTATION_SERVICES } from "../src/consultation/servicesData.js";
import { CONTACT_PAGE_PUBLIC } from "../src/config/site.js";
import { CONTACT_PRERENDER_INTRO } from "../src/seo/contactSeo.js";
import { HOME_PRERENDER_INTRO } from "../src/seo/homeSeo.js";

const NOINDEX_PATHS = new Set([
  ...(CONTACT_PAGE_PUBLIC ? [] : ["/contact"]),
  "/quora-consultation",
]);

const STATIC_ROUTE_META = {
  "/": {
    title: "Best Astrologer in Bangalore | Vedic Astrology & Vastu | MP Shastri",
    description:
      "Consult MP Shastri, a trusted best astrologer in Bangalore, for Vedic astrology, Kundali matching, and Vastu solutions. Book online or in-person today.",
    h1: "Best Astrologer in Bangalore.",
    intro: HOME_PRERENDER_INTRO,
  },
  "/about": {
    title: "About Shri MP Shastri | Vedic Astrologer in Bangalore",
    description:
      "Learn about Shri MP Shastri — experienced Vedic astrologer and Vastu consultant in Bengaluru offering horoscope reading, remedies, and spiritual guidance.",
    h1: "About MP Shastri Astrology",
  },
  "/services": {
    title: "Astrology & Vastu Services | MP Shastri Astrology Bangalore",
    description:
      "Explore astrology and Vastu services including horoscope reading, marriage consultation, career guidance, financial astrology, and personalized remedies in Bangalore.",
    h1: "Our Services",
  },
  "/contact": {
    title: "Contact MP Shastri — Astrology & Vastu Office in Bengaluru",
    description:
      "Visit Shri MP Shastri at the Vedic consultation center in Mahalakshmi Layout, Bengaluru (Bangalore). Call +91 80732 58799, WhatsApp, email, and Google Maps directions.",
    h1: "Vedic Consultation Center in Bengaluru",
    intro: CONTACT_PRERENDER_INTRO,
  },
  "/astrology": {
    title: "Vedic Astrology Consultation & Horoscope Reading | MP Shastri",
    description:
      "Book Vedic astrology consultation with Shri MP Shastri in Bangalore for birth chart analysis, dasha timing, marriage guidance, and personalized remedies.",
    h1: "Professional Vedic Astrology Consultation",
  },
  "/vastu": {
    title: "Vastu Shastra Services in Bangalore | Home & Office | MP Shastri",
    description:
      "Explore Vedic Vastu Shastra services in Bangalore for homes, offices, and factories. Shri MP Shastri offers practical layout audits and remedies without major demolition.",
    h1: "Vastu Shastra Services in Bangalore",
  },
  "/face-reading": {
    title: "Physiognomy & Face Reading Consultation | MP Shastri",
    description:
      "Professional face reading and physiognomy consultation with Shri MP Shastri in Bangalore for personality insights, timing markers, and life direction.",
    h1: "Professional Face Reading Consultation",
  },
  "/tantra": {
    title: "Spiritual Healing & Esoteric Protection Services | MP Shastri",
    description:
      "Ethical spiritual healing, aura cleansing, and protective Vedic guidance with Shri MP Shastri in Bangalore for energy balance and long-term peace.",
    h1: "Authentic Esoteric Energy Alignment",
  },
  "/astrologer-in-bangalore": {
    title: "Best Astrologer in Bangalore | Shri MP Shastri Astrology",
    description:
      "Consult Shri MP Shastri, a trusted astrologer in Bangalore for Vedic horoscope reading, Kundali matching, career guidance, and Vastu remedies. Book in-person or online.",
    h1: "Expert Vedic Astrologer in Bangalore",
  },
  "/online-astrologer": {
    title: "Online Astrology Consultation | Vedic Astrologer MP Shastri",
    description:
      "Book online Vedic astrology consultations with Shri MP Shastri via phone or video. Kundali matching, career guidance, and remedies available across India and abroad.",
    h1: "Digital Vedic Astrology Consultation",
  },
  "/astrologer-in-india": {
    title: "Top Trusted Astrologer in India | Shri MP Shastri Astrology",
    description:
      "Pan-India Vedic astrology and Vastu consultations from Bangalore by Shri MP Shastri. Horoscope reading, marriage matching, and remote sessions available.",
    h1: "Trusted Vedic Astrologer in India",
  },
  "/vastu-expert": {
    title: "Vastu Consultant in Bangalore | Expert Vastu Shastra | MP Shastri",
    description:
      "Consult Shri MP Shastri, a Vastu consultant in Bangalore for home, office, and factory audits. Practical Vastu remedies without demolition in Mahalakshmi Layout.",
    h1: "Vastu Expert in Bangalore — Mahalakshmi Layout",
  },
  "/astrologyservices": {
    title: "Vedic Astrology Services in Bangalore | MP Shastri",
    description:
      "Browse Vedic astrology services including horoscope reading, career astrology, marriage matching, financial solutions, and Vastu consultation with Shri MP Shastri.",
    h1: "Comprehensive Vedic Astrology & Vastu Consultations in Bangalore",
    intro:
      "Shri MP Shastri offers specialized Vedic astrology and Vastu consultations from Mahalakshmi Layout, Bengaluru. Each service below links to a dedicated page with detailed guidance on horoscope reading, career timing, Kundali matching, financial remedies, relationship support, family harmony, business planning, residential and commercial Vastu, numerology, foreign settlement, and health patterns. Sessions are available in person at the Bengaluru office or online via phone and video for clients across Karnataka, India, and abroad.",
  },
  "/consultation": {
    title: "Vedic Astrology Consultations in Bangalore | MP Shastri",
    description:
      "Browse all specialized astrology and Vastu consultations with Shri MP Shastri in Bangalore — horoscope, career, marriage, Vastu, numerology, and more.",
    h1: "Vedic Astrology & Vastu Consultations",
  },
  "/quora-consultation": {
    title: "Book Vedic Astrology Consultation | MP Shastri — Quora Offer",
    description:
      "Personal Vedic astrology consultation with Shri MP Shastri in Bangalore. Marriage, career, love, finance, Vastu and remedies. Call or WhatsApp +91 80732 58799.",
    h1: "Get Clear Answers to Your Life Questions",
    intro:
      "Marriage stuck? Career confused? Relationship pain? Speak with Shri MP Shastri, an experienced Vedic astrologer and Vastu consultant in Mahalakshmi Layout, Bengaluru. Book online or in-person via WhatsApp or phone at +91 80732 58799.",
  },
};

function finalizeMeta(path, meta) {
  const entry = {
    title: meta.title,
    description: meta.description,
    h1: meta.h1,
    intro: meta.intro || meta.description,
  };

  if (NOINDEX_PATHS.has(path)) {
    entry.noindex = true;
  }

  return entry;
}

const routeMeta = {};

for (const [path, meta] of Object.entries(STATIC_ROUTE_META)) {
  routeMeta[path] = finalizeMeta(path, meta);
}

for (const service of CONSULTATION_SERVICES) {
  routeMeta[service.path] = finalizeMeta(service.path, {
    title: service.seoTitle,
    description: service.seoDescription,
    h1: service.heroTitle,
    intro: service.intro,
  });
}

fs.writeFileSync("public/route-meta.json", JSON.stringify(routeMeta, null, 2));
console.log(`Generated route-meta.json with ${Object.keys(routeMeta).length} routes`);

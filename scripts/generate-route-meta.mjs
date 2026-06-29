import fs from "fs";
import { CONSULTATION_SERVICES } from "../src/consultation/servicesData.js";

const SITE_URL = "https://www.mpshastriastrology.com";

const STATIC_ROUTE_META = {
  "/": {
    title: "Vedic Astrologer & Vastu Consultant in Bangalore | MP Shastri",
    description:
      "Consult MP Shastri for authentic Vedic astrology, accurate Kundali matching, and Vastu solutions in Bangalore. Book your online or in-person session today.",
  },
  "/about": {
    title: "About Shri MP Shastri | Vedic Astrologer in Bangalore",
    description:
      "Learn about Shri MP Shastri — experienced Vedic astrologer and Vastu consultant in Bengaluru offering horoscope reading, remedies, and spiritual guidance.",
  },
  "/services": {
    title: "Astrology & Vastu Services | MP Shastri Astrology Bangalore",
    description:
      "Explore astrology and Vastu services including horoscope reading, marriage consultation, career guidance, financial astrology, and personalized remedies in Bangalore.",
  },
  "/contact": {
    title: "Contact MP Shastri — Astrology & Vastu Office in Bengaluru",
    description:
      "Visit Shri MP Shastri at the Vedic consultation center in Mahalakshmi Layout, Bengaluru (Bangalore). Call +91 80732 58799, WhatsApp, email, and Google Maps directions.",
  },
  "/astrology": {
    title: "Vedic Astrology Consultation & Horoscope Reading | MP Shastri",
    description:
      "Book Vedic astrology consultation with Shri MP Shastri in Bangalore for birth chart analysis, dasha timing, marriage guidance, and personalized remedies.",
  },
  "/vastu": {
    title: "Vastu Shastra Services in Bangalore | Home & Office | MP Shastri",
    description:
      "Explore Vedic Vastu Shastra services in Bangalore for homes, offices, and factories. Shri MP Shastri offers practical layout audits and remedies without major demolition.",
  },
  "/face-reading": {
    title: "Physiognomy & Face Reading Consultation | MP Shastri",
    description:
      "Professional face reading and physiognomy consultation with Shri MP Shastri in Bangalore for personality insights, timing markers, and life direction.",
  },
  "/tantra": {
    title: "Spiritual Healing & Esoteric Protection Services | MP Shastri",
    description:
      "Ethical spiritual healing, aura cleansing, and protective Vedic guidance with Shri MP Shastri in Bangalore for energy balance and long-term peace.",
  },
  "/astrologer-in-bangalore": {
    title: "Best Astrologer in Bangalore | Shri MP Shastri Astrology",
    description:
      "Consult Shri MP Shastri, a trusted astrologer in Bangalore for Vedic horoscope reading, Kundali matching, career guidance, and Vastu remedies. Book in-person or online.",
  },
  "/online-astrologer": {
    title: "Online Astrology Consultation | Vedic Astrologer MP Shastri",
    description:
      "Book online Vedic astrology consultations with Shri MP Shastri via phone or video. Kundali matching, career guidance, and remedies available across India and abroad.",
  },
  "/astrologer-in-india": {
    title: "Top Trusted Astrologer in India | Shri MP Shastri Astrology",
    description:
      "Pan-India Vedic astrology and Vastu consultations from Bangalore by Shri MP Shastri. Horoscope reading, marriage matching, and remote sessions available.",
  },
  "/vastu-expert": {
    title: "Vastu Consultant in Bangalore | Expert Vastu Shastra | MP Shastri",
    description:
      "Consult Shri MP Shastri, a Vastu consultant in Bangalore for home, office, and factory audits. Practical Vastu remedies without demolition in Mahalakshmi Layout.",
  },
  "/astrologyservices": {
    title: "Vedic Astrology Services in Bangalore | MP Shastri",
    description:
      "Browse Vedic astrology services including horoscope reading, career astrology, marriage matching, financial solutions, and Vastu consultation with Shri MP Shastri.",
  },
  "/consultation": {
    title: "Vedic Astrology Consultations in Bangalore | MP Shastri",
    description:
      "Browse all specialized astrology and Vastu consultations with Shri MP Shastri in Bangalore — horoscope, career, marriage, Vastu, numerology, and more.",
  },
};

const routeMeta = { ...STATIC_ROUTE_META };

for (const service of CONSULTATION_SERVICES) {
  routeMeta[service.path] = {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

fs.writeFileSync("public/route-meta.json", JSON.stringify(routeMeta, null, 2));
console.log(`Generated route-meta.json with ${Object.keys(routeMeta).length} routes`);

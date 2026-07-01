import { BENGALURU_SERVICE_AREAS, LOCALITY_SEO_PARAGRAPH } from "./localAreas.js";

export const HOME_H1 = "Best Astrologer in Bangalore | MP Shastri Astrology";

export const HOME_INTRO_PARAGRAPHS = [
  "Shri MP Shastri is a trusted Vedic astrologer in Bangalore, with a consultation office in Mahalakshmi Layout. For more than seventeen years, families, professionals, and business owners across Karnataka and India have turned to him for clear answers on marriage timing, career direction, financial stability, health patterns, and residential energy balance. Every session begins with accurate birth chart calculation or an on-site Vastu assessment, followed by practical remedies you can apply without unnecessary fear or superstition.",
  "Whether you visit the consultation center in North Bangalore or book a phone or video session from another city, you receive the same methodical analysis rooted in classical Jyotish and Vastu Shastra texts. Sessions are private, unhurried, and focused on actionable guidance—not vague predictions.",
];

export const HOME_CONSULTATION_AVAILABILITY = {
  title: "Online & In-Person Consultations",
  intro:
    "Book the format that suits you. In-person and online sessions follow the same process—private, unhurried, and focused on clear answers.",
  modes: [
    {
      label: "In-person",
      title: "Visit our Bangalore office",
      text:
        "Meet Shri MP Shastri at the consultation center in Mahalakshmi Layout for horoscope readings, Kundali matching, and Vastu discussions. On-site Vastu walkthroughs can be arranged when needed.",
      link: { to: "/contact", label: "Office address & directions" },
    },
    {
      label: "Online",
      title: "Phone, WhatsApp, or video",
      text:
        "Connect from anywhere in India or abroad. Share birth details or floor plans digitally at the start of the session—chart work and guidance match what you receive in the office.",
      link: { to: "/online-astrologer", label: "How online sessions work" },
    },
  ],
};

export const HOME_SERVICES_SECTION = {
  title: "Vedic Astrology, Vastu Shastra, and Spiritual Guidance",
  intro:
    "Horoscope reading, Kundali matching, career timing, and Vastu audits sit under one roof at MP Shastri Astrology. Each service below is tailored to your chart, your property layout, or your current life phase.",
  items: [
    {
      title: "Horoscope Reading and Dasha Analysis",
      text: "Horoscope reading in Bangalore starts with verifying your birth time and place, then mapping dasha periods and house influences that shape career moves, relationships, and health cycles. Shri MP Shastri interprets these patterns in plain language and suggests timed remedies such as gemstone guidance, mantra practice, or charitable acts aligned with your chart.",
    },
    {
      title: "Marriage Matching and Relationship Guidance",
      text: "Kundali matching in Bangalore helps families assess compatibility before engagement or marriage—through Guna Milan and a full review of both charts. For couples facing friction, astrological timing and relationship remedies clarify when to communicate, when to wait, and how to reduce recurring conflict without blaming either partner.",
    },
    {
      title: "Career, Business, and Financial Astrology",
      text: "Job changes, promotions, partnerships, and business launches benefit from favorable transit windows. Financial astrology addresses debt pressure, property disputes, and wealth preservation by identifying planetary periods that support steady growth rather than risky speculation.",
    },
    {
      title: "Vastu Consultation for Homes and Offices",
      text: "As a Vastu consultant in Bangalore, Shri MP Shastri audits homes, offices, and factories for directional energy flow. Reviews cover plot shape, main entrance, kitchen and bedroom placement, and seating layout. Most corrections use non-destructive remedies—element balancing, room function changes, and symbolic adjustments—rather than costly demolition.",
    },
  ],
};

export const HOME_LOCAL_SECTION = {
  title: "Serving Bengaluru and Clients Across India",
  paragraphs: [
    `The consultation office at Mahalakshmi Layout welcomes clients from ${BENGALURU_SERVICE_AREAS.join(", ")}, and surrounding North Bangalore neighborhoods. Many visitors combine an in-person session with a short Vastu walkthrough of their nearby home or shop.`,
    LOCALITY_SEO_PARAGRAPH,
    "Online consultations via WhatsApp, phone, or video call serve clients in Mysuru, Mangalore, Hubballi, Hyderabad, Chennai, Mumbai, Delhi, and Indian communities abroad. Birth time and place are verified at the start of every remote session so chart accuracy matches an office visit.",
  ],
};

export const HOME_WHY_SECTION = {
  title: "Why Families Choose Shri MP Shastri",
  paragraphs: [
    "Authentic Vedic methods, transparent communication, and remedies you can realistically follow set this practice apart from generic online predictions. Shri MP Shastri explains why a planetary period matters, what it influences in daily life, and which steps may help—without pressure to purchase expensive rituals or products.",
    "Confidentiality is strict: birth details, relationship concerns, and business plans discussed in session are never shared. Follow-up support is available when you need clarity after implementing suggested remedies or before a major decision such as marriage, relocation, or property purchase.",
  ],
  highlights: [
    ["17+ Years of Practice", "Deep experience in Jyotish chart work, Kundali matching, and Vastu audits across residential and commercial properties."],
    ["25,000+ Consultations", "A long track record guiding students, employees, entrepreneurs, and retirees through career, family, and health transitions."],
    ["Online and In-Person", "Book at the Bengaluru office or connect remotely from anywhere in India or overseas with the same analytical rigor."],
    ["Practical Remedies", "Suggestions emphasize timing, discipline, Vastu balance, and traditional upayas suited to your situation and budget."],
  ],
};

export const HOME_PROCESS_SECTION = {
  title: "How to Book Your Consultation",
  steps: [
    ["Share Birth Details or Property Information", "For astrology, provide date, time, and place of birth. For Vastu, share floor plan, photos, or schedule an on-site visit in Bangalore."],
    ["Attend Your Private Session", "Discuss your questions openly—career blocks, marriage plans, family disputes, business timing, or home energy concerns—in a calm, one-to-one setting."],
    ["Receive a Clear Action Plan", "Leave with prioritized remedies, favorable dates where relevant, and optional follow-up timing so you know when to revisit your chart or layout."],
  ],
  closing:
    "Ready to begin? Call +91 80732 58799, message on WhatsApp, or use our contact page to request an appointment at the Mahalakshmi Layout office or online.",
};

export const HOME_PRERENDER_INTRO = HOME_INTRO_PARAGRAPHS.join(" ");

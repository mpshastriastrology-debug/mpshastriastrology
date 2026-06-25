import {
  HOME_FAQS,
  ABOUT_FAQS,
  ASTROLOGY_FAQS,
  VASTU_FAQS,
  FACE_READING_FAQS,
  TANTRA_FAQS,
} from "../seo/faqData";

const CONTACT = {
  phone: "+91 80732 58799",
  phoneLink: "tel:+918073258799",
  whatsapp: "https://wa.me/918073258799",
  email: "mpshastriastrology@gmail.com",
  address:
    "607, 2nd Cross Rd, opp. Swimming Pool, Mahalakshmi Layout, Bengaluru, Karnataka 560086",
  hours: "9:00 AM – 9:00 PM, all days",
};

export const QUICK_PROMPTS = [
  "Book a consultation",
  "Astrology services",
  "Vastu consultation",
  "Online session available?",
  "Office location & timings",
];

const TOPIC_REPLIES = [
  {
    keywords: ["book", "appointment", "schedule", "slot", "timeslot", "booking", "consult"],
    answer:
      "You can book an in-person or online consultation by calling us, using WhatsApp, or submitting the appointment form on our Contact page. Share your preferred date, service type, and birth details (for astrology) so we can confirm your slot quickly.",
    action: { label: "Book on Contact Page", href: "/contact" },
  },
  {
    keywords: ["price", "cost", "fee", "charge", "how much", "rates", "payment"],
    answer:
      "Consultation fees depend on the service type (astrology, Vastu, face reading, or spiritual healing) and session format (in-person or online). Please contact us for the exact fee and available packages for your case.",
    action: { label: "WhatsApp for Pricing", href: CONTACT.whatsapp, external: true },
  },
  {
    keywords: ["hello", "hi", "hey", "namaste", "good morning", "good evening"],
    answer:
      "Namaste! Welcome to MP Shastri Astrology. I can help with astrology, Vastu, face reading, spiritual healing, bookings, and office details. Choose a quick option below or type your question.",
  },
  {
    keywords: ["thank", "thanks", "helpful"],
    answer:
      "You are welcome! If you need a personal reading or Vastu audit, Shri MP Shastri is available for in-person sessions in Bangalore and online consultations across India.",
    action: { label: "Book Consultation", href: "/contact" },
  },
  {
    keywords: ["location", "address", "where", "office", "bangalore", "visit", "map"],
    answer: `Our consultation center is in Bangalore:\n${CONTACT.address}\n\nTimings: ${CONTACT.hours}\nPhone: ${CONTACT.phone}`,
    action: { label: "View Contact Page", href: "/contact" },
  },
  {
    keywords: ["time", "timing", "hours", "open", "available", "when"],
    answer: `We are available ${CONTACT.hours}. You can call ${CONTACT.phone} or message us on WhatsApp to check the next available consultation slot.`,
    action: { label: "Call Now", href: CONTACT.phoneLink },
  },
  {
    keywords: ["phone", "call", "number", "contact", "email", "reach"],
    answer: `Reach us anytime during working hours:\nPhone: ${CONTACT.phone}\nEmail: ${CONTACT.email}\nWhatsApp consultations are also available for quick booking.`,
    action: { label: "Chat on WhatsApp", href: CONTACT.whatsapp, external: true },
  },
  {
    keywords: ["astrology", "horoscope", "kundali", "birth chart", "marriage", "career", "guna", "dasha"],
    answer:
      "We offer Vedic astrology consultations including horoscope reading, Kundali matching, career timing, marriage compatibility, financial guidance, and personalized remedies. Online and in-person sessions are both available.",
    action: { label: "Astrology Services", href: "/astrology" },
  },
  {
    keywords: ["vastu", "home", "office", "property", "flat", "commercial", "factory", "direction"],
    answer:
      "Vastu consultations cover residential homes, apartments, offices, shops, and commercial spaces. Most corrections do not require demolition — we focus on practical layout and directional remedies.",
    action: { label: "Vastu Services", href: "/vastu" },
  },
  {
    keywords: ["face reading", "physiognomy", "face", "personality"],
    answer:
      "Face reading sessions analyze facial structure and expression patterns to guide career direction, relationship insight, and personal strengths. Online video sessions are available.",
    action: { label: "Face Reading", href: "/face-reading" },
  },
  {
    keywords: ["tantra", "healing", "spiritual", "energy", "protection", "remedy", "remedies", "pooja"],
    answer:
      "Spiritual healing sessions address energy imbalance, negativity, stress, and environmental disturbances through traditional protective and balancing guidance. Remote sessions are available.",
    action: { label: "Spiritual Healing", href: "/tantra" },
  },
  {
    keywords: ["online", "video", "remote", "phone", "digital", "india", "abroad"],
    answer:
      "Yes, online astrology and Vastu consultations are available via phone or video call with the same calculation accuracy as in-person sessions. This is ideal for clients anywhere in India or abroad.",
    action: { label: "Online Astrologer", href: "/online-astrologer" },
  },
];

const ALL_FAQS = [
  ...HOME_FAQS,
  ...ABOUT_FAQS,
  ...ASTROLOGY_FAQS,
  ...VASTU_FAQS,
  ...FACE_READING_FAQS,
  ...TANTRA_FAQS,
];

function normalize(text) {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function scoreFaqMatch(input, faq) {
  const inputWords = new Set(normalize(input).split(" ").filter((w) => w.length > 2));
  const questionWords = normalize(faq.question).split(" ").filter((w) => w.length > 2);
  let score = 0;

  questionWords.forEach((word) => {
    if (inputWords.has(word)) score += 1;
  });

  if (normalize(faq.question).includes(normalize(input)) && normalize(input).length > 4) {
    score += 3;
  }

  return score;
}

function findTopicReply(input) {
  const normalized = normalize(input);

  return TOPIC_REPLIES.find((topic) =>
    topic.keywords.some(
      (keyword) =>
        normalized.includes(keyword) ||
        keyword.split(" ").every((part) => normalized.includes(part))
    )
  );
}

function findFaqReply(input) {
  let bestMatch = null;
  let bestScore = 0;

  ALL_FAQS.forEach((faq) => {
    const score = scoreFaqMatch(input, faq);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = faq;
    }
  });

  return bestScore >= 2 ? bestMatch : null;
}

export function getAutoReply(input) {
  const trimmed = input.trim();

  if (!trimmed) {
    return {
      text: "Please type a question or choose one of the quick options below.",
    };
  }

  const topic = findTopicReply(trimmed);
  if (topic) {
    return {
      text: topic.answer,
      action: topic.action,
    };
  }

  const faq = findFaqReply(trimmed);
  if (faq) {
    return {
      text: faq.answer,
    };
  }

  return {
    text:
      "Thank you for your question. For a detailed personal consultation, please speak directly with Shri MP Shastri. You can book via our contact form, call us, or start a WhatsApp chat.",
    action: { label: "WhatsApp Shri MP Shastri", href: CONTACT.whatsapp, external: true },
    secondaryAction: { label: "Contact Page", href: "/contact" },
  };
}

export const WELCOME_MESSAGE = {
  id: "welcome",
  sender: "assistant",
  text:
    "Namaste! I am the MP Shastri Astrology assistant. Ask about astrology, Vastu, bookings, online sessions, or office timings — I will reply instantly.",
};

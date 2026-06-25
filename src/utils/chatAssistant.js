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

const GURUJI_PHONE = "8073258799";
const GURUJI_CONTACT = `\n\nFor a personalized analysis and remedial plan, please contact Guruji Shri MP Shastri:\n📞 ${GURUJI_PHONE}\n(Call or WhatsApp)`;

export const QUICK_PROMPTS = [
  "Marriage problem solution",
  "Love relationship issue",
  "Career guidance",
  "Financial problem help",
  "Health astrological remedies",
  "Book a consultation",
];

const PROBLEM_REPLIES = [
  {
    keywords: [
      "marriage problem",
      "marriage delay",
      "marriage issue",
      "not getting married",
      "late marriage",
      "marry",
      "marriage",
      "husband wife",
      "wife problem",
      "husband problem",
      "divorce",
      "marital",
      "kundali matching",
      "guna milan",
      "compatibility",
      "wedding delay",
    ],
    answer: `Marriage-related concerns are often linked to planetary periods, 7th house influences, and Kundali compatibility.

Helpful tips:
• Check Kundali matching (Guna Milan) before finalizing a alliance
• Identify favorable marriage timing through dasha and transit analysis
• Simple Vedic remedies — mantras, fasting days, or charity on specific weekdays — can support harmony
• Avoid major marriage decisions during heavily afflicted planetary periods without guidance

Every chart is unique. General tips cannot replace a full horoscope reading.${GURUJI_CONTACT}`,
    action: { label: "Call Guruji", href: CONTACT.phoneLink },
    secondaryAction: { label: "WhatsApp Guruji", href: CONTACT.whatsapp, external: true },
  },
  {
    keywords: [
      "love problem",
      "love issue",
      "love life",
      "relationship problem",
      "breakup",
      "break up",
      "boyfriend",
      "girlfriend",
      "partner",
      "romance",
      "relationship",
      "affair",
      "separation",
      "patch up",
    ],
    answer: `Love and relationship challenges are commonly studied through the 5th and 7th houses, Venus placement, and current dasha periods.

Helpful tips:
• Understand whether the difficulty is timing-related or compatibility-related
• Venus and Moon balancing remedies can support emotional stability
• Avoid impulsive decisions during Rahu-Ketu or afflicted Venus transits
• Open communication combined with astrological timing often improves outcomes

For relationship clarity based on both partners' charts, personal consultation is essential.${GURUJI_CONTACT}`,
    action: { label: "Call Guruji", href: CONTACT.phoneLink },
    secondaryAction: { label: "WhatsApp Guruji", href: CONTACT.whatsapp, external: true },
  },
  {
    keywords: [
      "financial problem",
      "money problem",
      "finance issue",
      "debt",
      "loan",
      "wealth",
      "financial",
      "money",
      "poverty",
      "income",
      "business loss",
      "loss in business",
      "property dispute",
      "financial trouble",
      "no savings",
    ],
    answer: `Financial difficulties in Vedic astrology are often connected to the 2nd, 11th, and 10th houses, Jupiter-Venus strength, and active dasha cycles.

Helpful tips:
• Review whether the current dasha supports investment or calls for caution
• Strengthen wealth houses through recommended gemstones, mantras, or charity (only after chart analysis)
• Check Vastu of cash locker, main entrance, and north/east zones at home or office
• Avoid major financial commitments during unfavorable planetary periods

Accurate timing for investments and debt relief requires your birth chart analysis.${GURUJI_CONTACT}`,
    action: { label: "Call Guruji", href: CONTACT.phoneLink },
    secondaryAction: { label: "WhatsApp Guruji", href: CONTACT.whatsapp, external: true },
  },
  {
    keywords: [
      "career problem",
      "job problem",
      "career issue",
      "unemployed",
      "unemployment",
      "no job",
      "promotion",
      "career growth",
      "career",
      "job change",
      "switch job",
      "business problem",
      "profession",
      "work problem",
      "office problem",
      "interview",
      "jobless",
    ],
    answer: `Career obstacles are typically analyzed through the 10th house, Saturn, Sun, Mercury, and the running dasha-antardasha period.

Helpful tips:
• Identify whether delay is due to Saturn, Rahu, or a weak 10th lord in your chart
• Choose favorable periods for job changes, promotions, or new business ventures
• Simple discipline-based remedies for Saturn often support steady career progress
• Align your workspace Vastu — especially north and east zones — for clarity and growth

A detailed career chart reading reveals the best path and timing for your situation.${GURUJI_CONTACT}`,
    action: { label: "Call Guruji", href: CONTACT.phoneLink },
    secondaryAction: { label: "WhatsApp Guruji", href: CONTACT.whatsapp, external: true },
  },
  {
    keywords: [
      "health problem",
      "health issue",
      "illness",
      "disease",
      "sick",
      "medical",
      "health",
      "mental stress",
      "stress",
      "anxiety",
      "depression",
      "chronic",
      "hospital",
      "recovery",
      "wellness",
    ],
    answer: `Health concerns in Vedic astrology are studied through the 6th, 8th, and 12th houses, ascendant strength, and planetary afflictions in the birth chart.

Helpful tips:
• Identify whether the issue is acute, chronic, or linked to a specific dasha period
• Follow medical advice first — astrology supports timing and remedial balance alongside treatment
• Moon and Sun strengthening practices can aid emotional and physical resilience
• Check bedroom direction and kitchen placement in home Vastu for energy balance

Health remedies must be personalized to your chart — never use generic stones or rituals without guidance.${GURUJI_CONTACT}`,
    action: { label: "Call Guruji", href: CONTACT.phoneLink },
    secondaryAction: { label: "WhatsApp Guruji", href: CONTACT.whatsapp, external: true },
  },
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
    keywords: ["astrology", "horoscope", "kundali", "birth chart", "guna", "dasha"],
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

  const problemMatch = PROBLEM_REPLIES.find((topic) =>
    topic.keywords.some(
      (keyword) =>
        normalized.includes(keyword) ||
        keyword.split(" ").every((part) => normalized.includes(part))
    )
  );

  if (problemMatch) {
    return problemMatch;
  }

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
      `Thank you for your question. For detailed personal guidance, please contact Guruji Shri MP Shastri directly at ${GURUJI_PHONE} (call or WhatsApp).`,
    action: { label: "Call Guruji", href: CONTACT.phoneLink },
    secondaryAction: { label: "WhatsApp Guruji", href: CONTACT.whatsapp, external: true },
  };
}

export const WELCOME_MESSAGE = {
  id: "welcome",
  sender: "assistant",
  text:
    "Namaste! I am the MP Shastri Astrology assistant. Ask about marriage, love, career, finance, health, Vastu, or bookings — I will share helpful tips and connect you with Guruji Shri MP Shastri at 8073258799.",
};

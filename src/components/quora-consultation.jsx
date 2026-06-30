import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  Globe,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Video,
  Wallet,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "./Seo";
import FaqSection from "./FaqSection";
import Reveal from "./Reveal";
import { QUORA_CONSULTATION_FAQS } from "../seo/faqData";
import { PHONE_HREF, QUORA_WHATSAPP_URL } from "../config/site";
import { quoraGenerateLeadClickProps } from "../utils/quoraPixel";
import "./QuoraConsultation.css";

const PROBLEM_TOPICS = [
  {
    title: "Marriage & Kundali Matching",
    text: "Delayed marriage, compatibility doubts, or family pressure about the right partner and timing.",
    path: "/marriage-matching",
    Icon: Heart,
  },
  {
    title: "Career & Job Change",
    text: "Stuck in the wrong role, failed interviews, promotion delays, or confusion about business vs job.",
    path: "/career-astrology",
    Icon: Briefcase,
  },
  {
    title: "Love & Relationship Issues",
    text: "Breakups, misunderstandings, commitment fears, or uncertainty about a partner's intentions.",
    path: "/love-relationships",
    Icon: Sparkles,
  },
  {
    title: "Financial Stress",
    text: "Debt, income instability, property disputes, or repeated losses despite hard work.",
    path: "/financial-solutions",
    Icon: Wallet,
  },
  {
    title: "Vastu at Home or Office",
    text: "Restlessness at home, business slowdown, sleep issues, or energy imbalance in your space.",
    path: "/vastu-consultation",
    Icon: Home,
  },
  {
    title: "Health & Mental Peace",
    text: "Recurring health worries, anxiety patterns, or feeling blocked despite medical care.",
    path: "/health-astrology",
    Icon: Activity,
  },
];

const SESSION_INCLUDES = [
  [
    "Accurate birth chart review",
    "Your Lagna, Moon sign, active dasha periods, and key house influences explained in plain language.",
  ],
  [
    "Direct answers to your questions",
    "Marriage timing, career moves, relationship clarity, finance, Vastu, or health—focused on what you came for.",
  ],
  [
    "Practical remedial guidance",
    "Mantras, charity days, fasting, gemstones (only when suitable), and simple Vastu corrections—no fear tactics.",
  ],
  [
    "Online or in-person options",
    "Phone, video, or visit the Mahalakshmi Layout office in Bengaluru. Same chart accuracy either way.",
  ],
];

const WHY_TRUST = [
  [
    "Authentic Vedic approach",
    "Classical chart calculation and interpretation—not generic daily-horoscope advice.",
  ],
  [
    "Confidential consultations",
    "Birth details and personal questions stay private between you and Shri MP Shastri.",
  ],
  [
    "Bangalore office + India-wide online",
    "Trusted by families and professionals across Karnataka and remote clients across India.",
  ],
  [
    "Clear next steps",
    "You leave with understanding and actionable guidance—not vague predictions.",
  ],
];

const CLIENT_VOICES = [
  [
    "The career session helped me time my job switch correctly. The remedies were simple and practical.",
    "IT professional, Bengaluru",
  ],
  [
    "We booked Kundali matching before marriage. The compatibility explanation was detailed and honest.",
    "Couple, Karnataka",
  ],
  [
    "Vastu suggestions for our flat did not need demolition. We felt a clear difference in peace at home.",
    "Homeowner, Bangalore",
  ],
];

const QUICK_SERVICES = [
  ["/horoscope-reading", "Horoscope Reading"],
  ["/marriage-matching", "Marriage Matching"],
  ["/career-astrology", "Career Astrology"],
  ["/vastu-consultation", "Vastu Consultation"],
  ["/consultation", "All Consultations"],
  ["/contact", "Office & Map"],
];

const BOOKING_STEPS = [
  [MessageCircle, "Message or call us", "WhatsApp or call +91 80732 58799. Mention you saw us on Quora and the topic you need help with."],
  [CalendarClock, "Share birth details", "Date, time, and place of birth (and partner details for matching). We confirm your session slot."],
  [Video, "Join your session", "Phone, video, or visit the Bengaluru office. Receive analysis, answers, and remedial guidance."],
];

function QuoraConsultation() {
  return (
    <>
      <Seo
        title="Book Vedic Astrology Consultation | MP Shastri — Quora Offer"
        description="Personal Vedic astrology consultation with Shri MP Shastri in Bangalore. Marriage, career, love, finance, Vastu & remedies. Call or WhatsApp +91 80732 58799 to book online or in-person."
        path="/quora-consultation"
        faqs={QUORA_CONSULTATION_FAQS}
        breadcrumbLabel="Quora Consultation"
      />

      <div className="quoraPage">
        <section className="quoraHero">
          <Reveal className="quoraHeroContent" animation="fade-up">
            <span className="quoraBadge">
              <Star size={14} strokeWidth={2} aria-hidden="true" />
              Trusted Vedic Astrologer · Bangalore
            </span>
            <h1>Get Clear Answers to Your Life Questions</h1>
            <p className="quoraHeroLead">
              Marriage stuck? Career confused? Relationship pain? Home feels wrong? Speak directly
              with Shri MP Shastri — experienced Vedic astrologer and Vastu consultant in Bengaluru.
            </p>
            <p className="quoraHeroSub">
              One private session. Your birth chart analysed. Your questions answered. Practical
              remedies you can actually follow.
            </p>
            <div className="quoraHeroBtns">
              <a
                href={QUORA_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="quoraBtnPrimary"
                {...quoraGenerateLeadClickProps}
              >
                <FaWhatsapp size={20} aria-hidden="true" />
                WhatsApp to Book
              </a>
              <a href={PHONE_HREF} className="quoraBtnSecondary" {...quoraGenerateLeadClickProps}>
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                Call +91 80732 58799
              </a>
              <Link to="/contact" className="quoraBtnOutline">
                <MapPin size={18} strokeWidth={2} aria-hidden="true" />
                Visit Office
              </Link>
            </div>
          </Reveal>
        </section>

        <div className="quoraTrustStrip" aria-label="Trust highlights">
          <span><MapPin size={16} strokeWidth={2} aria-hidden="true" /> Mahalakshmi Layout, Bengaluru</span>
          <span><Phone size={16} strokeWidth={2} aria-hidden="true" /> +91 80732 58799</span>
          <span><Globe size={16} strokeWidth={2} aria-hidden="true" /> Online &amp; in-person sessions</span>
          <span><ShieldCheck size={16} strokeWidth={2} aria-hidden="true" /> Private &amp; confidential</span>
        </div>

        <Reveal as="section" className="quoraSection" animation="fade-up">
          <h2>What Problem Are You Facing?</h2>
          <p className="quoraSectionIntro">
            Most people who find us on Quora are dealing with one of these situations. If it sounds
            like you, book a consultation and get chart-based clarity—not guesswork.
          </p>
          <div className="quoraGrid">
            {PROBLEM_TOPICS.map((topic, index) => (
              <Reveal className="quoraCard" key={topic.title} animation="fade-up" delay={index * 50}>
                <span className="quoraCardIcon" aria-hidden="true">
                  <topic.Icon size={22} strokeWidth={1.75} />
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
                <Link to={topic.path} className="quoraCardLink">
                  Learn about this consultation
                  <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="quoraSection" animation="fade-up">
          <h2>What You Get in Your Consultation</h2>
          <p className="quoraSectionIntro">
            Every session is structured so you understand your chart, your timing, and what to do
            next.
          </p>
          <div className="quoraGrid">
            {SESSION_INCLUDES.map(([title, text], index) => (
              <Reveal className="quoraCard" key={title} animation="fade-up" delay={index * 60}>
                <span className="quoraCardIcon quoraCardIconCheck" aria-hidden="true">
                  <CheckCircle2 size={22} strokeWidth={1.75} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="quoraSection" animation="fade-up">
          <h2>Why People Choose Shri MP Shastri</h2>
          <div className="quoraGrid">
            {WHY_TRUST.map(([title, text], index) => (
              <Reveal className="quoraCard" key={title} animation="fade-up" delay={index * 60}>
                <span className="quoraCardIcon quoraCardIconCheck" aria-hidden="true">
                  <BadgeCheck size={22} strokeWidth={1.75} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="quoraSection" animation="fade-up">
          <h2>What Clients Say</h2>
          <div className="quoraQuoteGrid">
            {CLIENT_VOICES.map(([quote, name], index) => (
              <Reveal className="quoraQuote" key={name} animation="fade-up" delay={index * 80}>
                <Star className="quoraQuoteStar" size={18} strokeWidth={2} aria-hidden="true" />
                <p>&ldquo;{quote}&rdquo;</p>
                <cite>— {name}</cite>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="quoraSection" animation="fade-up">
          <h2>Book in 3 Simple Steps</h2>
          <div className="quoraSteps">
            {BOOKING_STEPS.map(([Icon, title, text], index) => (
              <Reveal className="quoraStep" key={title} animation="fade-up" delay={index * 80}>
                <span className="quoraStepNum">
                  <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="quoraSection" animation="fade-up">
          <h2>Popular Consultation Services</h2>
          <p className="quoraSectionIntro">
            Not sure where to start? Horoscope reading gives a full overview. Otherwise pick the
            topic closest to your question.
          </p>
          <div className="quoraServiceLinks">
            {QUICK_SERVICES.map(([path, label]) => (
              <Link key={path} to={path}>
                {label}
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="quoraSection" animation="zoom-in">
          <div className="quoraOfferBox">
            <h2>Ready to Talk? Book Your Session Today</h2>
            <p>
              Stop scrolling for answers. Get a personal Vedic consultation with Shri MP Shastri —
              marriage, career, love, finance, Vastu, or general horoscope guidance. Limited daily
              slots; WhatsApp is the fastest way to confirm yours.
            </p>
            <div className="quoraHeroBtns">
              <a
                href={QUORA_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="quoraBtnPrimary"
                {...quoraGenerateLeadClickProps}
              >
                <FaWhatsapp size={20} aria-hidden="true" />
                WhatsApp Now
              </a>
              <a href={PHONE_HREF} className="quoraBtnSecondary" {...quoraGenerateLeadClickProps}>
                <Phone size={18} strokeWidth={2} aria-hidden="true" />
                Call +91 80732 58799
              </a>
            </div>
          </div>
        </Reveal>

        <FaqSection
          title="Consultation Booking — Common Questions"
          faqs={QUORA_CONSULTATION_FAQS}
          idPrefix="quora-consultation-faq"
        />
      </div>

      <div className="quoraStickyBar" aria-label="Quick booking">
        <a href={PHONE_HREF} className="quoraStickyCall" {...quoraGenerateLeadClickProps}>
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          Call Now
        </a>
        <a
          href={QUORA_WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="quoraStickyWhatsapp"
          {...quoraGenerateLeadClickProps}
        >
          <FaWhatsapp size={18} aria-hidden="true" />
          WhatsApp Book
        </a>
      </div>
    </>
  );
}

export default QuoraConsultation;

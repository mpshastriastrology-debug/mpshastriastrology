import Seo from "./Seo";
import FaqSection from "./FaqSection";
import "./OnlineAstrology.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { ONLINE_ASTROLOGER_FAQS } from "../seo/faqData";

function OnlineAstrology() {
  return (
    <>
      <Seo
        title="Online Astrology Consultation | Vedic Astrologer MP Shastri"
        description="Book online astrology consultation with Shri MP Shastri. Accurate horoscope reading, Kundali matching, and remedies via phone or video from Bangalore."
        path="/online-astrologer"
        faqs={ONLINE_ASTROLOGER_FAQS}
      />

      <div className="onlineAstrologyPage">
        <section className="onlineAstrologyHero">
          <Reveal className="onlineAstrologyHeroContent" animation="fade-up">
            <p className="onlineAstrologyHeroTag">
              ✦ REMOTE METAPHYSICAL EVALUATIONS GLOBAL
            </p>
            <h1 className="onlineAstrologyHeroTitle">
              Digital Vedic Astrology Consultation
            </h1>
            <p className="onlineAstrologyHeroDesc">
              Consult with Shri MP Shastri from any location globally. Receive meticulous natal chart tracking, relationship transition audits, corporate scheduling plans, and Vastu advice through encrypted voice, text, or high-definition streaming channels.
            </p>

            <div className="onlineAstrologyButtons">
              <a href="tel:+918073258799" className="onlineAstrologyCallBtn">
                Call Office
              </a>
              <a
                href="https://wa.me/918073258799"
                target="_blank"
                rel="noreferrer"
                className="onlineAstrologyWhatsappBtn"
              >
                WhatsApp Session
              </a>
            </div>
          </Reveal>
        </section>

        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>

        <Reveal as="section" className="onlineAstrologySection" animation="fade-up">
          <h2>Accessible Wisdom: Virtual Chart Interrogations</h2>
          <p>
            Shri MP Shastri offers comprehensive virtual astrology services tailored for modern profiles. By shifting configurations into structured digital session rooms, you receive comprehensive analytical reporting and practical, actionable counter-measures without requiring an in-person office visit.
          </p>
        </Reveal>

        <Reveal as="section" className="onlineAstrologySection" animation="fade-up">
          <h2>Remote Assessment Frameworks</h2>
          <div className="onlineAstrologyGrid">
            {[
              ["Horoscope Auditing", "Complete natal chart mathematical analysis tracking current planetary transits and dynamic house placements."],
              ["Marital Coordination", "Compatibility metrics evaluation engineered to spot relational friction areas and define smooth marriage paths."],
              ["Corporate Guidance", "Strategic commercial forecasting pointing out optimal timeline windows for career changes or resource expansions."],
              ["Virtual Vastu Audits", "Remote blueprint and structural element evaluations for residential properties or offices without requiring demolition."],
              ["Physiognomy Profiling", "Video-assisted facial landmark tracking to outline fundamental behavioral trends and intrinsic leadership styles."],
              ["Environmental Cleansing", "Traditional, highly personalized balancing recommendations designed to clear stubborn mental blocks and stagnation."],
            ].map(([title, text], index) => (
              <Reveal className="onlineAstrologyCard" key={title} animation="fade-up" delay={index * 60}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="onlineAstrologySection" animation="fade-up">
          <h2>Why Select Virtual Sessions?</h2>
          <div className="onlineAstrologyGrid">
            {[
              ["Global Connectivity", "Accessible scheduling setups regardless of your timezone or domestic territory boundaries."],
              ["Strict Data Discretion", "All private birth criteria records and conversation points remain deeply encrypted and secure."],
              ["Streamlined Scheduling", "Direct communication channels ensure rapid processing and minimized setup delays."],
              ["Calculated Accuracy", "Remote sessions maintain the identical mathematical precision and depth as physical office visits."],
            ].map(([title, text], index) => (
              <Reveal className="onlineAstrologyCard" key={title} animation="fade-up" delay={index * 80}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="onlineAstrologySection" animation="fade-up">
          <h2>The Booking Process</h2>
          <div className="onlineAstrologyGrid">
            {[
              ["1. Secure a Window", "Contact our desk via phone or WhatsApp link to choose your preferred consultation method."],
              ["2. Provide Criteria", "Submit your precise date, time, and city of origin alongside your core topics of focus."],
              ["3. Live Analysis", "Join your private, secure audio or video session for a clear, diagnostic exploration of your chart."],
            ].map(([title, text], index) => (
              <Reveal className="onlineAstrologyCard" key={title} animation="fade-up" delay={index * 100}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="onlineAstrologyCTA" animation="zoom-in">
          <h2>Initiate Your Virtual Session</h2>
          <p>
            Clear your path from any location. Connect directly with our helpdesk today to schedule your private call.
          </p>
          <a href="tel:+918073258799" className="onlineAstrologyCtaBtn">
            Call +91 80732 58799
          </a>
        </Reveal>

        <FaqSection
          title="Online Astrology Consultation — FAQs"
          faqs={ONLINE_ASTROLOGER_FAQS}
          idPrefix="online-astrologer-faq"
        />
      </div>
    </>
  );
}

export default OnlineAstrology;

import Seo from "./Seo";
import FaqSection from "./FaqSection";
import "./AstrologerInIndia.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { INDIA_ASTROLOGER_FAQS } from "../seo/faqData";

function AstrologerInIndia() {
  return (
    <>
      <Seo
        title="Top Trusted Astrologer in India | Shri MP Shastri Astrology"
        description="Consult Shri MP Shastri, a highly trusted astrologer in India. Get accurate online Vedic horoscope readings, career timelines, and remote Vastu corrections."
        path="/astrologer-in-india"
        faqs={INDIA_ASTROLOGER_FAQS}
      />

      <div className="indiaPage">
        <section className="indiaHero">
          <Reveal className="indiaHeroContent" animation="fade-up">
            <span className="indiaBadge">
              ✦ TRADITIONAL VEDIC CONSULTATIONS NATIONWIDE
            </span>
            <h1>Trusted Vedic Astrologer in India</h1>
            <p>
              Shri MP Shastri offers comprehensive natal chart investigations, definitive marital compatibility profiling, business timeline forecasting, and remote structural energy analyses for clients throughout India and worldwide.
            </p>

            <div className="indiaButtons">
              <a href="tel:+918073258799" className="indiaCallBtn">
                Call Office
              </a>
              <a
                href="https://wa.me/918073258799"
                target="_blank"
                rel="noreferrer"
                className="indiaWhatsappBtn"
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

        <Reveal as="section" className="indiaSection" animation="fade-up">
          <h2>Clear Practical Insights via Online Consultations</h2>
          <p>
            Distance is no longer a barrier to accessing authentic Vedic wisdom. Through comprehensive phone and digital sessions, Shri MP Shastri helps individuals across India decode complex planetary alignments, clear persistent career bottlenecks, and restore environmental balance in their homes and businesses.
          </p>
        </Reveal>

        <Reveal as="section" className="indiaSection" animation="fade-up">
          <h2>Core Assessment Capabilities</h2>
          <div className="indiaGrid">
            {[
              ["Horoscope Auditing", "Meticulous birth chart calculations tracking active planetary periods and their real-world influences."],
              ["Marital Coordination", "Detailed relationship compatibility evaluations designed to minimize conflict and clarify timing."],
              ["Corporate Guidance", "Strategic timeline insights focusing on venture expansions, market investments, and professional changes."],
              ["Vastu Corrections", "Elemental layouts and spatial balancing rules for commercial buildings and residences without physical demolition."],
              ["Physiognomy Profiling", "Remote facial structure assessments to clarify personal behavioral patterns and core strengths."],
              ["Environmental Cleansing", "Traditional protective methods to dissolve stubborn spiritual or emotional stagnations from your environment."],
            ].map(([title, text], index) => (
              <Reveal className="indiaCard" key={title} animation="fade-up" delay={index * 60}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="indiaSection" animation="fade-up">
          <h2>Why Consult Shri MP Shastri?</h2>
          <div className="indiaGrid">
            {[
              ["Verified Lineage Experience", "Years of calculated astrological and architectural consulting practice."],
              ["Comprehensive Case Studies", "A proven history of guiding diverse individual, family, and enterprise clients."],
              ["Seamless Remote Sessions", "Highly accurate, dedicated telephone and video consultations for all states."],
              ["Absolute Privacy Standards", "Every chart, conversation detail, and personal profile is kept strictly confidential."],
            ].map(([title, text], index) => (
              <Reveal className="indiaCard" key={title} animation="fade-up" delay={index * 80}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="indiaCTA" animation="zoom-in">
          <h2>Schedule Your Remote Consultation</h2>
          <p>
            Connect directly with our central desk to book a comprehensive digital video review or a secure telephone session from any location.
          </p>
          <a href="tel:+918073258799">
            Call +91 80732 58799
          </a>
        </Reveal>

        <FaqSection
          title="Astrologer in India — Common Questions"
          faqs={INDIA_ASTROLOGER_FAQS}
          idPrefix="india-astrologer"
        />
      </div>
    </>
  );
}

export default AstrologerInIndia;

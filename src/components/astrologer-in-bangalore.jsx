import Seo from "./Seo";
import FaqSection from "./FaqSection";
import "./AstrologerInBangalore.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { BANGALORE_ASTROLOGER_FAQS } from "../seo/faqData";
import { BENGALURU_SERVICE_AREAS } from "../seo/localAreas";

function AstrologerInBangalore() {
  return (
    <>
      <Seo
        title="Best Astrologer in Bangalore | Shri MP Shastri Astrology"
        description="Consult Shri MP Shastri, a trusted astrologer in Bangalore for Vedic horoscope reading, Kundali matching, career guidance, and Vastu remedies. Book in-person or online."
        path="/astrologer-in-bangalore"
        faqs={BANGALORE_ASTROLOGER_FAQS}
      />

      <div className="bangalorePage">
        {/* HERO SECTION */}
        <section className="bangaloreHero">
          <Reveal className="bangaloreHeroContent" animation="fade-up">
            <span className="bangaloreBadge">
              ✦ TRADITIONAL VEDIC CONSULTANT IN BENGALURU
            </span>
            <h1>Expert Vedic Astrologer in Bangalore</h1>
            <p>
              Shri MP Shastri provides meticulous birth chart investigations, definitive relationship timelines, career trajectory forecasts, and structural energy analyses for corporate professionals and families across Karnataka.
            </p>
            <p className="bangaloreLocality">
              Serving clients from {BENGALURU_SERVICE_AREAS.slice(0, 6).join(", ")}, and all of Bengaluru (Bangalore) with in-person sessions at Mahalakshmi Layout or secure online consultations.
            </p>

            <div className="bangaloreButtons">
              <a href="tel:+918073258799" className="bangaloreCallBtn">
                Call Office
              </a>
              <a
                href="https://wa.me/918073258799"
                target="_blank"
                rel="noreferrer"
                className="bangaloreWhatsappBtn"
              >
                WhatsApp Session
              </a>
            </div>
          </Reveal>
        </section>

        {/* UNIFORM INTERNAL ROUTE HUBS */}
        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>

        <Reveal as="section" className="bangaloreSection" animation="fade-up">
          <h2>Clear Practical Insights via Ancient Analytics</h2>
          <p>
            With years of dedicated practice, Shri MP Shastri has guided numerous individuals through complex life paths. By combining traditional mathematical calculation techniques with practical counsel, his sessions focus on clearing persistent professional barriers, reducing planetary configuration vulnerabilities, and restoring home tranquility.
          </p>
        </Reveal>

        {/* SERVICE SPECIALIZATION GRID */}
        <Reveal as="section" className="bangaloreSection" animation="fade-up">
          <h2>Core Assessment Capabilities</h2>
          <div className="bangaloreGrid">
            {[
              ["Horoscope Auditing", "Meticulous natal chart analysis focusing on active planetary transitions and structural house influences."],
              ["Marital Coordination", "Comprehensive compatibility evaluations designed to minimize interpersonal friction and clarify timing."],
              ["Corporate Guidance", "Strategic scheduling insights targeting business expansion windows and professional career pivots."],
              ["Vastu Corrections", "Structural elemental optimizations for commercial locations and private residences without demolition."],
              ["Physiognomy Profiling", "Detailed face assessments to understand personal behavioral patterns and underlying leadership styles."],
              ["Environmental Cleansing", "Traditional protective adjustments to eliminate stubborn energetic stagnation from your living spaces."],
            ].map(([title, text], index) => (
              <Reveal className="bangaloreCard" key={title} animation="fade-up" delay={index * 60}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* VALUE PROPOSITION AREA */}
        <Reveal as="section" className="bangaloreSection" animation="fade-up">
          <h2>Why Consult Shri MP Shastri?</h2>
          <div className="bangaloreGrid">
            {[
              ["Verified Lineage Experience", "Years of authentic, calculated astrological and architectural practice."],
              ["Comprehensive Case Studies", "A proven track record of guiding diverse retail and corporate clients."],
              ["Remote Tele-Consultations", "Secure, detailed phone and digital sessions for long-distance clients."],
              ["Absolute Privacy Standards", "Every chart detail, discussion point, and identity remains strictly confidential."],
            ].map(([title, text], index) => (
              <Reveal className="bangaloreCard" key={title} animation="fade-up" delay={index * 80}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* CALL TO ACTION ROW */}
        <Reveal as="section" className="bangaloreCTA" animation="zoom-in">
          <h2>Schedule Your Personal Consultation</h2>
          <p>
            Connect directly with our Bangalore center to set up an in-person office meeting or a secure phone call.
          </p>
          <a href="tel:+918073258799">
            Call +91 80732 58799
          </a>
        </Reveal>

        <FaqSection
          title="Astrologer in Bangalore — Common Questions"
          faqs={BANGALORE_ASTROLOGER_FAQS}
          idPrefix="bangalore-astrologer-faq"
        />
      </div>
    </>
  );
}

export default AstrologerInBangalore;
import { Helmet } from "react-helmet-async";
import "./AstrologerInIndia.css";
import { Link } from "react-router-dom";

function AstrologerInIndia() {
  return (
    <>
      {/* Search Engine Optimization Meta Configuration */}
      <Helmet>
        <title>Top Trusted Astrologer in India | Shri MP Shastri Astrology</title>
        <meta
          name="description"
          content="Consult Shri MP Shastri, a highly trusted astrologer in India. Get accurate online Vedic horoscope readings, career timelines, and remote Vastu corrections."
        />
        <link
          rel="canonical"
          href="https://www.mpshastriastrology.com/astrologer-in-india"
        />
        <meta property="og:title" content="Top Trusted Astrologer in India | Shri MP Shastri Astrology" />
        <meta
          property="og:description"
          content="Access clear insights for professional growth, marital compatibility, and ancestral energy balancing from anywhere in India."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/astrologer-in-india" />
      </Helmet>

      <div className="indiaPage">
        {/* HERO SECTION */}
        <section className="indiaHero">
          <div className="indiaHeroContent">
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
          </div>
        </section>

        {/* UNIFORM INTERNAL ROUTE HUBS */}
        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>

        {/* CORE ABOUT INTRO */}
        <section className="indiaSection">
          <h2>Clear Practical Insights via Online Consultations</h2>
          <p>
            Distance is no longer a barrier to accessing authentic Vedic wisdom. Through comprehensive phone and digital sessions, Shri MP Shastri helps individuals across India decode complex planetary alignments, clear persistent career bottlenecks, and restore environmental balance in their homes and businesses.
          </p>
        </section>

        {/* SERVICE SPECIALIZATION GRID */}
        <section className="indiaSection">
          <h2>Core Assessment Capabilities</h2>
          <div className="indiaGrid">
            <div className="indiaCard">
              <h3>Horoscope Auditing</h3>
              <p>
                Meticulous birth chart calculations tracking active planetary periods and their real-world influences.
              </p>
            </div>

            <div className="indiaCard">
              <h3>Marital Coordination</h3>
              <p>
                Detailed relationship compatibility evaluations designed to minimize conflict and clarify timing.
              </p>
            </div>

            <div className="indiaCard">
              <h3>Corporate Guidance</h3>
              <p>
                Strategic timeline insights focusing on venture expansions, market investments, and professional changes.
              </p>
            </div>

            <div className="indiaCard">
              <h3>Vastu Corrections</h3>
              <p>
                Elemental layouts and spatial balancing rules for commercial buildings and residences without physical demolition.
              </p>
            </div>

            <div className="indiaCard">
              <h3>Physiognomy Profiling</h3>
              <p>
                Remote facial structure assessments to clarify personal behavioral patterns and core strengths.
              </p>
            </div>

            <div className="indiaCard">
              <h3>Environmental Cleansing</h3>
              <p>
                Traditional protective methods to dissolve stubborn spiritual or emotional stagnations from your environment.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION AREA */}
        <section className="indiaSection">
          <h2>Why Consult Shri MP Shastri?</h2>
          <div className="indiaGrid">
            <div className="indiaCard">
              <h3>Verified Lineage Experience</h3>
              <p>Years of calculated astrological and architectural consulting practice.</p>
            </div>

            <div className="indiaCard">
              <h3>Comprehensive Case Studies</h3>
              <p>A proven history of guiding diverse individual, family, and enterprise clients.</p>
            </div>

            <div className="indiaCard">
              <h3>Seamless Remote Sessions</h3>
              <p>Highly accurate, dedicated telephone and video consultations for all states.</p>
            </div>

            <div className="indiaCard">
              <h3>Absolute Privacy Standards</h3>
              <p>Every chart, conversation detail, and personal profile is kept strictly confidential.</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION ROW */}
        <section className="indiaCTA">
          <h2>Schedule Your Remote Consultation</h2>
          <p>
            Connect directly with our central desk to book a comprehensive digital video review or a secure telephone session from any location.
          </p>
          <a href="tel:+918073258799">
            Call +91 80732 58799
          </a>
        </section>
      </div>
    </>
  );
}

export default AstrologerInIndia;
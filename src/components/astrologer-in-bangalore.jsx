import { Helmet } from "react-helmet";
import "./AstrologerInBangalore.css";
import { Link } from "react-router-dom";

function AstrologerInBangalore() {
  return (
    <>
      {/* Search Engine Optimization Meta Configuration */}
      <Helmet>
        <title>Best Astrologer in Bangalore | Shri MP Shastri Astrology</title>
        <meta
          name="description"
          content="Consult Shri MP Shastri, the top trusted astrologer in Bangalore. Get accurate Vedic horoscope readings, career timelines, and non-destructive Vastu remedies."
        />
        <link
          rel="canonical"
          href="https://www.mpshastriastrology.com/astrologer-in-bangalore"
        />
        <meta property="og:title" content="Best Astrologer in Bangalore | Shri MP Shastri Astrology" />
        <meta
          property="og:description"
          content="Get authentic solutions for career development, marital harmony, and architectural alignment from an expert practitioner."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/astrologer-in-bangalore" />
      </Helmet>

      <div className="bangalorePage">
        {/* HERO SECTION */}
        <section className="bangaloreHero">
          <div className="bangaloreHeroContent">
            <span className="bangaloreBadge">
              ✦ TRADITIONAL VEDIC CONSULTANT IN BENGALURU
            </span>
            <h1>Expert Vedic Astrologer in Bangalore</h1>
            <p>
              Shri MP Shastri provides meticulous birth chart investigations, definitive relationship timelines, career trajectory forecasts, and structural energy analyses for corporate professionals and families across Karnataka.
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
        <section className="bangaloreSection">
          <h2>Clear Practical Insights via Ancient Analytics</h2>
          <p>
            With years of dedicated practice, Shri MP Shastri has guided numerous individuals through complex life paths. By combining traditional mathematical calculation techniques with practical counsel, his sessions focus on clearing persistent professional barriers, reducing planetary configuration vulnerabilities, and restoring home tranquility.
          </p>
        </section>

        {/* SERVICE SPECIALIZATION GRID */}
        <section className="bangaloreSection">
          <h2>Core Assessment Capabilities</h2>
          <div className="bangaloreGrid">
            <div className="bangaloreCard">
              <h3>Horoscope Auditing</h3>
              <p>
                Meticulous natal chart analysis focusing on active planetary transitions and structural house influences.
              </p>
            </div>

            <div className="bangaloreCard">
              <h3>Marital Coordination</h3>
              <p>
                Comprehensive compatibility evaluations designed to minimize interpersonal friction and clarify timing.
              </p>
            </div>

            <div className="bangaloreCard">
              <h3>Corporate Guidance</h3>
              <p>
                Strategic scheduling insights targeting business expansion windows and professional career pivots.
              </p>
            </div>

            <div className="bangaloreCard">
              <h3>Vastu Corrections</h3>
              <p>
                Structural elemental optimizations for commercial locations and private residences without demolition.
              </p>
            </div>

            <div className="bangaloreCard">
              <h3>Physiognomy Profiling</h3>
              <p>
                Detailed face assessments to understand personal behavioral patterns and underlying leadership styles.
              </p>
            </div>

            <div className="bangaloreCard">
              <h3>Environmental Cleansing</h3>
              <p>
                Traditional protective adjustments to eliminate stubborn energetic stagnation from your living spaces.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION AREA */}
        <section className="bangaloreSection">
          <h2>Why Consult Shri MP Shastri?</h2>
          <div className="bangaloreGrid">
            <div className="bangaloreCard">
              <h3>Verified Lineage Experience</h3>
              <p>Years of authentic, calculated astrological and architectural practice.</p>
            </div>

            <div className="bangaloreCard">
              <h3>Comprehensive Case Studies</h3>
              <p>A proven track record of guiding diverse retail and corporate clients.</p>
            </div>

            <div className="bangaloreCard">
              <h3>Remote Tele-Consultations</h3>
              <p>Secure, detailed phone and digital sessions for long-distance clients.</p>
            </div>

            <div className="bangaloreCard">
              <h3>Absolute Privacy Standards</h3>
              <p>Every chart detail, discussion point, and identity remains strictly confidential.</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION ROW */}
        <section className="bangaloreCTA">
          <h2>Schedule Your Personal Consultation</h2>
          <p>
            Connect directly with our Bangalore center to set up an in-person office meeting or a secure phone call.
          </p>
          <a href="tel:+918073258799">
            Call +91 80732 58799
          </a>
        </section>
      </div>
    </>
  );
}

export default AstrologerInBangalore;
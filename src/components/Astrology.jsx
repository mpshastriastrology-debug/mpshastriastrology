import "./Astrology.css";
import "./Services1.css";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Astrologyservices from './Astrologyservices';

function Astrology() {
  return (
    <>
      {/* Dynamic Header Controls for the Astrology Sub-page */}
      <Helmet>
        <title>Vedic Astrology Consultation &amp; Horoscope Reading | MP Shastri</title>
        <meta
          name="description"
          content="Get authentic Vedic astrology chart analysis, accurate marriage compatibility profiling, and career breakthrough timing with Bangalore's trusted expert, Shri MP Shastri."
        />
        <link rel="canonical" href="https://www.mpshastriastrology.com/astrology" />
        <meta property="og:title" content="Vedic Astrology Consultation &amp; Horoscope Reading | MP Shastri" />
        <meta
          property="og:description"
          content="Gain clarity on life paths, planetary dasha adjustments, and relationship forecasting via precise horoscope audits."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/astrology" />
      </Helmet>

      <section className="astrologyPage">
        {/* HERO SECTION */}
        <div className="astroHero">
          <div className="astroOverlay"></div>
          <div className="astroHeroContent">
            <p>✦ ANCIENT VEDIC WISDOM</p>
            <h1>Professional Vedic Astrology Consultation</h1>
            <span>
              Accurate birth chart analysis, strategic career mapping, marital alignment profiles, and traditional remedies from an expert practitioner.
            </span>
            {/* Kept your external WhatsApp link as a raw tag, but gave it standard text */}
            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="astroBtn"
            >
              Book Astrology Session
            </a>
          </div>
        </div>

        {/* CORE DETAILS SECTION */}
        <div className="astroAbout">
          <div className="astroImage">
            <img
              src="/Astrology.webp"
              alt="Vedic astrology chart parsing representing planetary house transitions"
            />
          </div>

          <div className="astroContent">
            <p className="smallTitle">✦ ANALYZING THE COSMIC MAP</p>
            <h2>Align with Your Strategic Destiny Paths</h2>
            <p>
              Vedic astrology is an exact mathematical science tracking real planetary alignments at your moment of birth. By looking closely at house transits and active dasha cycles, chart reading cuts through uncertainty to reveal precise windows of opportunity for investments, career growth, marriage timing, and physical vitality.
            </p>

            <div className="astroPoints">
              <div className="astroPoint">✔ Precision Natal Chart &amp; Kundali Audits</div>
              <div className="astroPoint">✔ Corporate Executive &amp; Venture Timing</div>
              <div className="astroPoint">✔ Direct Marital Compatibility Analysis</div>
              <div className="astroPoint">✔ Authentic Remedial Lineage Corrections</div>
            </div>
          </div>
        </div>

        {/* REPAIRED INTERNAL ROUTE HUBS */}
        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>
        <br /><br />

        {/* Sub-component injection */}
        <Astrologyservices />
      </section>
    </>
  );
}

export default Astrology;
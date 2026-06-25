import { Helmet } from "react-helmet-async";
import "./OnlineAstrology.css";
import { Link } from "react-router-dom";

function OnlineAstrology() {
  return (
    <>
      {/* Search Engine Optimization Meta Configuration */}
      <Helmet>
        <title>Online Astrology Consultation | Shri MP Shastri Astrology</title>
        <meta
          name="description"
          content="Connect with Shri MP Shastri for professional online astrology consultations via secure telephone or video sessions. Get accurate natal readings and ancestral guidance."
        />
        <link
          rel="canonical"
          href="https://www.mpshastriastrology.com/online-astrologer"
        />
        <meta property="og:title" content="Online Astrology Consultation | Shri MP Shastri Astrology" />
        <meta
          property="og:description"
          content="Access clear insights for career transitions, relationship timelines, and home architectural configurations remotely from anywhere globally."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/online-astrologer" />
      </Helmet>

      <div className="onlineAstrologyPage">
        {/* HERO SECTION */}
        <section className="onlineAstrologyHero">
          <div className="onlineAstrologyHeroContent">
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
        <section className="onlineAstrologySection">
          <h2>Accessible Wisdom: Virtual Chart Interrogations</h2>
          <p>
            Shri MP Shastri offers comprehensive virtual astrology services tailored for modern profiles. By shifting configurations into structured digital session rooms, you receive comprehensive analytical reporting and practical, actionable counter-measures without requiring an in-person office visit.
          </p>
        </section>

        {/* CONSULTATION CAPABILITIES GRID */}
        <section className="onlineAstrologySection">
          <h2>Remote Assessment Frameworks</h2>
          <div className="onlineAstrologyGrid">
            <div className="onlineAstrologyCard">
              <h3>Horoscope Auditing</h3>
              <p>
                Complete natal chart mathematical analysis tracking current planetary transits and dynamic house placements.
              </p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Marital Coordination</h3>
              <p>
                Compatibility metrics evaluation engineered to spot relational friction areas and define smooth marriage paths.
              </p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Corporate Guidance</h3>
              <p>
                Strategic commercial forecasting pointing out optimal timeline windows for career changes or resource expansions.
              </p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Virtual Vastu Audits</h3>
              <p>
                Remote blueprint and structural element evaluations for residential properties or offices without requiring demolition.
              </p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Physiognomy Profiling</h3>
              <p>
                Video-assisted facial landmark tracking to outline fundamental behavioral trends and intrinsic leadership styles.
              </p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Environmental Cleansing</h3>
              <p>
                Traditional, highly personalized balancing recommendations designed to clear stubborn mental blocks and stagnation.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION AREA */}
        <section className="onlineAstrologySection">
          <h2>Why Select Virtual Sessions?</h2>
          <div className="onlineAstrologyGrid">
            <div className="onlineAstrologyCard">
              <h3>Global Connectivity</h3>
              <p>Accessible scheduling setups regardless of your timezone or domestic territory boundaries.</p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Strict Data Discretion</h3>
              <p>All private birth criteria records and conversation points remain deeply encrypted and secure.</p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Streamlined Scheduling</h3>
              <p>Direct communication channels ensure rapid processing and minimized setup delays.</p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>Calculated Accuracy</h3>
              <p>Remote sessions maintain the identical mathematical precision and depth as physical office visits.</p>
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP WORKFLOW EXPLAINER */}
        <section className="onlineAstrologySection">
          <h2>The Booking Process</h2>
          <div className="onlineAstrologyGrid">
            <div className="onlineAstrologyCard">
              <h3>1. Secure a Window</h3>
              <p>Contact our desk via phone or WhatsApp link to choose your preferred consultation method.</p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>2. Provide Criteria</h3>
              <p>Submit your precise date, time, and city of origin alongside your core topics of focus.</p>
            </div>

            <div className="onlineAstrologyCard">
              <h3>3. Live Analysis</h3>
              <p>Join your private, secure audio or video session for a clear, diagnostic exploration of your chart.</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION ROW */}
        <section className="onlineAstrologyCTA">
          <h2>Initiate Your Virtual Session</h2>
          <p>
            Clear your path from any location. Connect directly with our helpdesk today to schedule your private call.
          </p>
          <a href="tel:+918073258799" className="onlineAstrologyCtaBtn">
            Call +91 80732 58799
          </a>
        </section>
      </div>
    </>
  );
}

export default OnlineAstrology;
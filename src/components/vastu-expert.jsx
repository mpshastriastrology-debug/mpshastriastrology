import Seo from "./Seo";
import "./VastuExpert.css";
import { Link } from "react-router-dom";

function VastuExpert() {
  return (
    <>
      <Seo
        title="Professional Vastu Shastra Consultant | Shri MP Shastri"
        description="Consult Shri MP Shastri for professional Vastu Shastra audits. Elevate harmony, operational flow, and prosperity across residential and commercial spaces without structural demolition."
        path="/vastu-expert"
      />

      <div className="vastuPage">
        {/* HERO SECTION */}
        <section className="vastuHero">
          <div className="vastuHeroContent">
            <span className="vastuBadge">
              ✦ SCIENTIFIC &amp; TRADITIONAL ELEMENTAL ALIGNMENT
            </span>
            <h1>Expert Vastu Shastra Consultant</h1>
            <p>
              Shri MP Shastri offers calculation-driven Vastu assessments for private layouts, commercial offices, industrial plants, and raw plots. Restore directional symmetry and create environmental harmony using non-destructive architectural remedies.
            </p>

            <div className="vastuButtons">
              <a href="tel:+918073258799" className="vastuCallBtn">
                Call Office
              </a>
              <a
                href="https://wa.me/918073258799"
                target="_blank"
                rel="noreferrer"
                className="vastuWhatsappBtn"
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

        {/* CORE SECTION DESCRIPTIVE INTRO */}
        <section className="vastuSection">
          <h2>Precision Balancing for Modern Architectural Realities</h2>
          <p>
            Vastu Shastra is the traditional science of balancing natural elemental frequencies—Earth, Water, Fire, Air, and Space—within a defined property. By strategically mapping energy lines and structural points, our evaluations target the root causes of financial stagnation, domestic friction, and persistent professional hurdles.
          </p>
        </section>

        {/* SERVICES OFFERED CATEGORIES GRID */}
        <section className="vastuSection">
          <h2>Core Architectural Assessment Layouts</h2>
          <div className="vastuGrid">
            <div className="vastuCard">
              <h3>Residential Alignment</h3>
              <p>
                Meticulous energy mapping for homes and apartments to optimize main entrance fields, bedroom zones, and kitchen placements.
              </p>
            </div>

            <div className="vastuCard">
              <h3>Corporate Workspaces</h3>
              <p>
                Strategic structural planning for executive suites and seating grids designed to boost operational focus and team synergy.
              </p>
            </div>

            <div className="vastuCard">
              <h3>Commercial Hubs</h3>
              <p>
                Directional balancing layouts for retail stores, showrooms, and business centers to improve customer footfall and transactional flow.
              </p>
            </div>

            <div className="vastuCard">
              <h3>Industrial Complexes</h3>
              <p>
                Heavy machinery positioning, raw material staging, and layout balancing to ensure smooth production pipelines and minimize operational friction.
              </p>
            </div>

            <div className="vastuCard">
              <h3>Geopathic Plot Audits</h3>
              <p>
                In-depth soil energy assessments and shape validations conducted prior to laying foundations or purchasing commercial land.
              </p>
            </div>

            <div className="vastuCard">
              <h3>Virtual Vastu Mapping</h3>
              <p>
                Comprehensive blueprint analyses and architectural configuration reviews available for clients across India and globally.
              </p>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE VALUE BENCHMARKS */}
        <section className="vastuSection">
          <h2>Expected Outcomes of Structural Synchronization</h2>
          <div className="vastuGrid">
            <div className="vastuCard">
              <h3>Balanced Energy Fields</h3>
              <p>Neutralize persistent environmental stressors to build a calm, grounded interior baseline.</p>
            </div>

            <div className="vastuCard">
              <h3>Financial Stability</h3>
              <p>Clear structural blocks to stabilize resource retention and protect your commercial investments.</p>
            </div>

            <div className="vastuCard">
              <h3>Domestic Harmony</h3>
              <p>Resolve structural frictions to reduce communication stress and support lasting family peace.</p>
            </div>

            <div className="vastuCard">
              <h3>Professional Trajectory</h3>
              <p>Position workspace desks to leverage natural directional parameters that sharpen executive focus.</p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION LAYOUT */}
        <section className="vastuCTA">
          <h2>Schedule Your Comprehensive Property Audit</h2>
          <p>
            Incorporate classic balancing principles into your existing space or upcoming building plan. Contact our central booking office to reserve your session.
          </p>
          <a href="tel:+918073258799">
            Call +91 80732 58799
          </a>
        </section>
      </div>
    </>
  );
}

export default VastuExpert;
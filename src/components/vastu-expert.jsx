import Seo from "./Seo";
import FaqSection from "./FaqSection";
import "./VastuExpert.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { VASTU_EXPERT_FAQS } from "../seo/faqData";

function VastuExpert() {
  return (
    <>
      <Seo
        title="Vastu Consultant in Bangalore | Expert Vastu Shastra | MP Shastri"
        description="Consult Shri MP Shastri, a Vastu consultant in Bangalore for home, office, and factory audits. Practical Vastu remedies without demolition in Mahalakshmi Layout."
        path="/vastu-expert"
        faqs={VASTU_EXPERT_FAQS}
      />

      <div className="vastuPage">
        <section className="vastuHero">
          <Reveal className="vastuHeroContent" animation="fade-up">
            <span className="vastuBadge">
              ✦ SCIENTIFIC &amp; TRADITIONAL ELEMENTAL ALIGNMENT
            </span>
            <h1>Vastu Expert in Bangalore — Mahalakshmi Layout</h1>
            <p>
              Shri MP Shastri is a Vastu Shastra expert based in Mahalakshmi Layout, Bengaluru, offering calculation-driven assessments for homes, commercial offices, industrial plants, and raw plots across Bangalore and Karnataka.
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
          </Reveal>
        </section>

        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>

        <Reveal as="section" className="vastuSection" animation="fade-up">
          <h2>Precision Balancing for Modern Architectural Realities</h2>
          <p>
            Vastu Shastra is the traditional science of balancing natural elemental frequencies—Earth, Water, Fire, Air, and Space—within a defined property. By strategically mapping energy lines and structural points, our evaluations target the root causes of financial stagnation, domestic friction, and persistent professional hurdles.
          </p>
        </Reveal>

        <Reveal as="section" className="vastuSection" animation="fade-up">
          <h2>Core Architectural Assessment Layouts</h2>
          <div className="vastuGrid">
            {[
              ["Residential Alignment", "Meticulous energy mapping for homes and apartments to optimize main entrance fields, bedroom zones, and kitchen placements."],
              ["Corporate Workspaces", "Strategic structural planning for executive suites and seating grids designed to boost operational focus and team synergy."],
              ["Commercial Hubs", "Directional balancing layouts for retail stores, showrooms, and business centers to improve customer footfall and transactional flow."],
              ["Industrial Complexes", "Heavy machinery positioning, raw material staging, and layout balancing to ensure smooth production pipelines and minimize operational friction."],
              ["Geopathic Plot Audits", "In-depth soil energy assessments and shape validations conducted prior to laying foundations or purchasing commercial land."],
              ["Virtual Vastu Mapping", "Comprehensive blueprint analyses and architectural configuration reviews available for clients across India and globally."],
            ].map(([title, text], index) => (
              <Reveal className="vastuCard" key={title} animation="fade-up" delay={index * 60}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="vastuSection" animation="fade-up">
          <h2>Expected Outcomes of Structural Synchronization</h2>
          <div className="vastuGrid">
            {[
              ["Balanced Energy Fields", "Neutralize persistent environmental stressors to build a calm, grounded interior baseline."],
              ["Financial Stability", "Clear structural blocks to stabilize resource retention and protect your commercial investments."],
              ["Domestic Harmony", "Resolve structural frictions to reduce communication stress and support lasting family peace."],
              ["Professional Trajectory", "Position workspace desks to leverage natural directional parameters that sharpen executive focus."],
            ].map(([title, text], index) => (
              <Reveal className="vastuCard" key={title} animation="fade-up" delay={index * 80}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="vastuCTA" animation="zoom-in">
          <h2>Schedule Your Comprehensive Property Audit</h2>
          <p>
            Incorporate classic balancing principles into your existing space or upcoming building plan. Contact our central booking office to reserve your session.
          </p>
          <a href="tel:+918073258799">
            Call +91 80732 58799
          </a>
        </Reveal>

        <FaqSection
          title="Vastu Consultant in Bangalore — FAQs"
          faqs={VASTU_EXPERT_FAQS}
          idPrefix="vastu-expert-faq"
        />
      </div>
    </>
  );
}

export default VastuExpert;

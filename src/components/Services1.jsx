import "./Services1.css";
import { FaOm, FaHome, FaEye, FaWhatsapp } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HOME_FAQS } from "../seo/faqData";
import Reveal from "./Reveal";

function Services() {
  return (
    <>
      <section className="servicesPage">
        {/* HERO CALL TO ACTION SEGMENT */}
        <section className="ctaSection">
          <Reveal className="ctaOverlay" animation="fade-up">
            <p>✦ PERSONALIZED SPIRITUAL CONSULTATION</p>
            <h2>Get Accurate Astrology Guidance From Shri MP Shastri</h2>
            <span>
              Empowering your life path with timeless Vedic wisdom. Connect today for professional answers regarding career progression, marital harmony, and structural Vastu alignment.
            </span>

            <div className="ctaButtons">
              <a href="tel:+918073258799" className="callNowBtn">
                Call Now
              </a>
              <a
                href="https://wa.me/918073258799"
                target="_blank"
                rel="noreferrer"
                className="whatsappNowBtn"
              >
                WhatsApp Chat
              </a>
            </div>
          </Reveal>
        </section>

        {/* BENEFIT MATRICES ANALYSIS */}
        <section className="benefitsSection">
          <Reveal className="sectionHeading" animation="fade-up">
            <p>✦ WHY CHOOSE MP SHASTRI</p>
            <h2>Benefits Of Our Spiritual &amp; Remedial Guidance</h2>
          </Reveal>

          <div className="benefitsGrid">
            {[
              ["Positive Energy Alignment", "Identify latent planetary blocks to remove negative influences, paving the way for peace, stability, and household prosperity."],
              ["Accurate Chart Analysis", "Benefit from methodical, text-backed Vedic birth chart readings paired with highly realistic, actionable spiritual remedies."],
              ["Strategic Career Growth", "Align your professional investments, business launches, and job changes with favorable planetary transits."],
              ["Compassionate Relationship Fixes", "Navigate compatibility hurdles, family expectations, and relationship turbulence using logical relationship remedies."]
            ].map(([title, desc], index) => (
              <Reveal className="benefitCard" key={title} animation="fade-up" delay={index * 80}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VERIFIED BRAND PERFORMANCE STATS */}
        <section className="statsSection">
          {[
            ["25K+", "Satisfied Clients"],
            ["17+", "Years Vedic Experience"],
            ["100%", "Confidential Sessions"],
            ["24/7", "Global Digital Access"]
          ].map(([num, label], index) => (
            <Reveal className="statsCard" key={label} animation="zoom-in" delay={index * 80}>
              <h2>{num}</h2>
              <p>{label}</p>
            </Reveal>
          ))}
        </section>

        {/* MAIN SERVICES ROUTING HUBS */}
        <section className="services">
          <Reveal className="servicesTitle" animation="fade-up">
            <h2>Core Pillars of Vedic Counseling</h2>
          </Reveal>

          <div className="servicesGrid">
            {/* Service Module 1 */}
            <Reveal className="serviceCard" animation="fade-up" delay={0}>
              <div className="serviceImage astrology"><FaOm aria-hidden="true" /></div>
              <h3>Vedic Astrology</h3>
              <p>In-depth natal chart tracking, planetary transit mapping, and native dashas forecasting.</p>
              <Link to="/astrology" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </Reveal>

            {/* Service Module 2 */}
            <Reveal className="serviceCard" animation="fade-up" delay={100}>
              <div className="serviceImage vastu"><FaHome aria-hidden="true" /></div>
              <h3>Vastu Shastra</h3>
              <p>Harmonize residential structural architecture and workplace spaces to balance natural elements.</p>
              <Link to="/vastu" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </Reveal>

            {/* Service Module 3 */}
            <Reveal className="serviceCard" animation="fade-up" delay={200}>
              <div className="serviceImage face"><FaEye aria-hidden="true" /></div>
              <h3>Physiognomy (Face Reading)</h3>
              <p>Decode natural personality patterns, behavioral archetypes, and prospective timing markers.</p>
              <Link to="/face-reading" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </Reveal>

            {/* Service Module 4 */}
            <Reveal className="serviceCard" animation="fade-up" delay={300}>
              <div className="serviceImage tantra"><GiMeditation aria-hidden="true" /></div>
              <h3>Spiritual Healing &amp; Tantra</h3>
              <p>Ethical aura cleansing and protective Vedic measures to dispel continuous external blockages.</p>
              <Link to="/tantra" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </Reveal>
          </div>
        </section>

        {/* PROCESS FLOW DIAGRAM */}
        <section className="processSection">
          <Reveal className="sectionHeading" animation="fade-up">
            <p>✦ SIMPLE CONSULTATION PROCESS</p>
            <h2>How Your Session Works</h2>
          </Reveal>

          <div className="processGrid">
            {[
              ["01", "Book Appointment", "Secure your online or in-person slot quickly using our WhatsApp line or direct call options."],
              ["02", "Consult Shri MP Shastri", "Discuss your core problems transparently in an unhurried, private, individual session."],
              ["03", "Implement Practical Solutions", "Receive distinct, customized corrective measures to restore clarity and stability."]
            ].map(([num, title, desc], index) => (
              <Reveal className="processCard" key={num} animation="fade-up" delay={index * 100}>
                <div className="processNumber">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS DROPDOWN SIMULATION */}
        <section className="faqSection">
          <Reveal className="sectionHeading" animation="fade-up">
            <p>✦ FREQUENTLY ASKED QUESTIONS</p>
            <h2>Common Queries Addressed</h2>
          </Reveal>

          <div className="faqContainer">
            {HOME_FAQS.map((faq, index) => (
              <Reveal className="faqItem" key={faq.question} animation="fade-up" delay={index * 60}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* INDEPENDENT MAP REVIEWS SECTION */}
        <section className="googleReviewSection">
          <Reveal className="sectionHeading" animation="fade-up">
            <p>✦ GOOGLE MAP TESTIMONIALS</p>
            <h2>Client Verified Experiences</h2>
          </Reveal>

          <div className="googleReviewGrid">
            {[
              ["Ramesh Kumar", "Remarkably systematic and accurate natal tracking. The suggested remedial actions were exceptionally straightforward and restored my professional focus during a difficult career shift."],
              ["Priya Sharma", "Exceptional Vastu correction recommendations for our flat layout. We observed a tangible increase in residential harmony without requiring major demolition work."],
              ["Naveen Raj", "A deeply philosophical and genuine guide. Shri MP Shastri handles delicate personal challenges with tremendous sensitivity and profound ancient knowledge."]
            ].map(([name, text], index) => (
              <Reveal className="googleReviewCard" key={name} animation="fade-up" delay={index * 100}>
                <h3>{name}</h3>
                <div aria-label="5 star rating" style={{ color: '#ffb400', margin: '4px 0' }}>★★★★★</div>
                <p>"{text}"</p>
              </Reveal>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Services;
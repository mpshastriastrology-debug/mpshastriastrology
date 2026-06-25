import "./Services1.css";
import { PhoneCall, MessageCircle } from "lucide-react";
import { FaOm, FaHome, FaEye } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section className="servicesPage">
        {/* HERO CALL TO ACTION SEGMENT */}
        <section className="ctaSection">
          <div className="ctaOverlay">
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
          </div>
        </section>

        {/* BENEFIT MATRICES ANALYSIS */}
        <section className="benefitsSection">
          <div className="sectionHeading">
            <p>✦ WHY CHOOSE MP SHASTRI</p>
            <h2>Benefits Of Our Spiritual &amp; Remedial Guidance</h2>
          </div>

          <div className="benefitsGrid">
            {[
              ["Positive Energy Alignment", "Identify latent planetary blocks to remove negative influences, paving the way for peace, stability, and household prosperity."],
              ["Accurate Chart Analysis", "Benefit from methodical, text-backed Vedic birth chart readings paired with highly realistic, actionable spiritual remedies."],
              ["Strategic Career Growth", "Align your professional investments, business launches, and job changes with favorable planetary transits."],
              ["Compassionate Relationship Fixes", "Navigate compatibility hurdles, family expectations, and relationship turbulence using logical relationship remedies."]
            ].map(([title, desc]) => (
              <div className="benefitCard" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
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
          ].map(([num, label]) => (
            <div className="statsCard" key={label}>
              <h2>{num}</h2>
              <p>{label}</p>
            </div>
          ))}
        </section>

        {/* MAIN SERVICES ROUTING HUBS */}
        <section className="services">
          <div className="servicesTitle">
            <h2>Core Pillars of Vedic Counseling</h2>
          </div>

          <div className="servicesGrid">
            {/* Service Module 1 */}
            <div className="serviceCard">
              <div className="serviceImage astrology"><FaOm aria-hidden="true" /></div>
              <h3>Vedic Astrology</h3>
              <p>In-depth natal chart tracking, planetary transit mapping, and native dashas forecasting.</p>
              <Link to="/astrology" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </div>

            {/* Service Module 2 */}
            <div className="serviceCard">
              <div className="serviceImage vastu"><FaHome aria-hidden="true" /></div>
              <h3>Vastu Shastra</h3>
              <p>Harmonize residential structural architecture and workplace spaces to balance natural elements.</p>
              <Link to="/vastu" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </div>

            {/* Service Module 3 */}
            <div className="serviceCard">
              <div className="serviceImage face"><FaEye aria-hidden="true" /></div>
              <h3>Physiognomy (Face Reading)</h3>
              <p>Decode natural personality patterns, behavioral archetypes, and prospective timing markers.</p>
              <Link to="/face-reading" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </div>

            {/* Service Module 4 */}
            <div className="serviceCard">
              <div className="serviceImage tantra"><GiMeditation aria-hidden="true" /></div>
              <h3>Spiritual Healing &amp; Tantra</h3>
              <p>Ethical aura cleansing and protective Vedic measures to dispel continuous external blockages.</p>
              <Link to="/tantra" className="serviceLearnMoreBtn">
                ✦ LEARN MORE
              </Link>
            </div>
          </div>
        </section>

        {/* PROCESS FLOW DIAGRAM */}
        <section className="processSection">
          <div className="sectionHeading">
            <p>✦ SIMPLE CONSULTATION PROCESS</p>
            <h2>How Your Session Works</h2>
          </div>

          <div className="processGrid">
            {[
              ["01", "Book Appointment", "Secure your online or in-person slot quickly using our WhatsApp line or direct call options."],
              ["02", "Consult Shri MP Shastri", "Discuss your core problems transparently in an unhurried, private, individual session."],
              ["03", "Implement Practical Solutions", "Receive distinct, customized corrective measures to restore clarity and stability."]
            ].map(([num, title, desc]) => (
              <div className="processCard" key={num}>
                <div className="processNumber">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PERSISTENT VIEWPORT TOUCHPOINT OVERLAYS */}
        <div className="floatingContact">
          <a href="tel:+918073258799" className="floatingCall" aria-label="Call Office Immediately">
            <PhoneCall size={26} />
          </a>
          <a
            href="https://wa.me/918073258799"
            target="_blank"
            rel="noreferrer"
            className="floatingWhatsapp"
            aria-label="Open Secure WhatsApp Consultation Chat Thread"
          >
            <MessageCircle size={26} />
          </a>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS DROPDOWN SIMULATION */}
        <section className="faqSection">
          <div className="sectionHeading">
            <p>✦ FREQUENTLY ASKED QUESTIONS</p>
            <h2>Common Queries Addressed</h2>
          </div>

          <div className="faqContainer">
            <div className="faqItem">
              <h3>How can Vedic astrology assist me in practical life planning?</h3>
              <p>Vedic readings isolate the underlying systemic shifts in your lifecycle, revealing timeline periods of high opportunity for investments alongside windows requiring cautionary tracking.</p>
            </div>

            <div className="faqItem">
              <h3>Are your remote/online consultation readings as accurate as physical visits?</h3>
              <p>Yes. Because cosmic tracking functions on precise calculations of your birth date, location, and minute parameters, telephone and digital video calls yield identical accuracy.</p>
            </div>

            <div className="faqItem">
              <h3>What fields are evaluated during a routine Vastu consultation?</h3>
              <p>Consultations cover directional flow patterns, room assignments, entrance configurations, and structural elements for both residential layouts and commercial office spaces.</p>
            </div>
          </div>
        </section>

        {/* INDEPENDENT MAP REVIEWS SECTION */}
        <section className="googleReviewSection">
          <div className="sectionHeading">
            <p>✦ GOOGLE MAP TESTIMONIALS</p>
            <h2>Client Verified Experiences</h2>
          </div>

          <div className="googleReviewGrid">
            {[
              ["Ramesh Kumar", "Remarkably systematic and accurate natal tracking. The suggested remedial actions were exceptionally straightforward and restored my professional focus during a difficult career shift."],
              ["Priya Sharma", "Exceptional Vastu correction recommendations for our flat layout. We observed a tangible increase in residential harmony without requiring major demolition work."],
              ["Naveen Raj", "A deeply philosophical and genuine guide. Shri MP Shastri handles delicate personal challenges with tremendous sensitivity and profound ancient knowledge."]
            ].map(([name, text]) => (
              <div className="googleReviewCard" key={name}>
                <h3>{name}</h3>
                <div aria-label="5 star rating" style={{ color: '#ffb400', margin: '4px 0' }}>★★★★★</div>
                <p>"{text}"</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default Services;
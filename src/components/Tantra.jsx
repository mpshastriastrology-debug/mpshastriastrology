import "./Tantra.css";
import "./Services1.css";
import { Link } from 'react-router-dom';
import Seo from './Seo';
import FaqSection from './FaqSection';
import { TANTRA_FAQS } from '../seo/faqData';
import Reveal from './Reveal';

function Tantra() {
  return (
    <>
      <Seo
        title="Spiritual Healing & Esoteric Protection Services | MP Shastri"
        description="Restore dynamic energy equilibrium and resolve stubborn environmental or personal negativity. Discover classical esoteric balancing rituals guided by Shri MP Shastri."
        path="/tantra"
        faqs={TANTRA_FAQS}
      />

      <section className="tantraPage">
        {/* HERO SECTION */}
        <div className="tantraHero">
          <div className="tantraOverlay"></div>
          <Reveal className="tantraHeroContent" animation="fade-up">
            <p>✦ ANCIENT METAPHYSICAL LINEAGE</p>
            <h1>Authentic Esoteric Energy Alignment</h1>
            <span>
              Clear deep emotional blocks, construct reliable protective energetic thresholds, and ground your path using classical meditative ritual formats.
            </span>
            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="tantraBtn"
            >
              Book Energy Session
            </a>
          </Reveal>
        </div>

        {/* CORE INTRODUCTION BLOCK */}
        <div className="tantraAbout">
          <Reveal className="tantraImage" animation="fade-right">
            <img
              src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop"
              alt="Peaceful meditation space arranged for inner awareness balancing"
            />
          </Reveal>

          <Reveal className="tantraContent" animation="fade-left">
            <p className="smallTitle">✦ BALANCING INNER RADIANCES</p>
            <h2>Transform Complex Stagnations Into Raw Focus</h2>
            <p>
              Tantra is a systematic methodology designed to channel and refine internal energetic vibrations. Far from superficial solutions, authentic spiritual guidance targets root emotional blocks, helping you dismantle longstanding subconscious patterns and build an environment of continuous clarity and mental strength.
            </p>

            <div className="tantraPoints">
              <div className="tantraPoint">✔ Foundational Energy Balancing &amp; Alignment</div>
              <div className="tantraPoint">✔ Psychological Protection Frameworks</div>
              <div className="tantraPoint">✔ Grounded Mindfulness &amp; Clarity Guidance</div>
              <div className="tantraPoint">✔ Vedic Elemental Balancing Audits</div>
            </div>
          </Reveal>
        </div>

        {/* UNIFORM INTERNAL ROUTE HUBS */}
        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>
        <br /><br />

        {/* DETAILED SERVICES SELECTION GRID */}
        <div className="tantraServices">
          <div className="sectionHeading">
            <p>✦ METHODOLOGY MODULES</p>
            <h2>Strategic Energetic Restorations</h2>
          </div>

          <div className="tantraServiceGrid">
            {/* CARD 1 */}
            <div className="tantraCard">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
                alt="Individual sitting in calm reflection focusing on mental stabilization"
                loading="lazy"
              />
              <div className="tantraCardContent">
                <h3>Mental Stabilization</h3>
                <p>
                  Develop clear concentration strategies, quiet overactive thought processes, and settle nervous fatigue through deliberate focus.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="tantraCard">
              <img
                src="/healing.webp"
                alt="Reflective ambient lights representing the harmonization of subtle energy layers"
                loading="lazy"
              />
              <div className="tantraCardContent">
                <h3>Vibrational Cleansing</h3>
                <p>
                  Clear persistent spatial or emotional heaviness to restore clean motivation and proactive drive within your life path.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="tantraCard">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
                alt="Traditional setups focused on creating protective personal limits"
                loading="lazy"
              />
              <div className="tantraCardContent">
                <h3>Protective Alignment</h3>
                <p>
                  Establish clear personal and structural boundaries to guard your focus against negative external influences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ADDITIONAL METAFRAME SECTION */}
        <div className="tantraExtraSection">
          <div className="tantraExtraLeft">
            <p className="smallTitle">✦ COMPREHENSIVE REBALANCING</p>
            <h2>Cultivate Emotional Resilience</h2>
            <p>
              Classical energy mapping deals directly with real life transitions. By learning to consciously align your intentions, you build stable self-awareness and an enduring sense of confidence.
            </p>
            <p>
              This rigorous consultation process provides a clear path for individuals struggling with persistent burnout, directionless planning, or environmental anxiety, helping them restore an organized, peaceful, and purposeful direction.
            </p>
          </div>

          <div className="tantraExtraRight">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
              alt="Clear natural sunrise horizons reflecting balanced internal awareness"
              loading="lazy"
            />
          </div>
        </div>

        {/* VALUE PROPOSITION AREA */}
        <div className="tantraBenefits">
          <div className="sectionHeading">
            <p>✦ REALIZED ADVANTAGES</p>
            <h2>Expected Outcomes of Proper Integration</h2>
          </div>

          <div className="benefitGrid">
            <div className="benefitCard">
              <h3>Internal Calm</h3>
              <p>
                Decongest heavy mental processing cycles, reduce stress, and maintain a quiet, clear perspective during daily tasks.
              </p>
            </div>

            <div className="benefitCard">
              <h3>Renewed Vitality</h3>
              <p>
                Dismantle ongoing blockages to replace feelings of fatigue with clean motivation and balanced energy.
              </p>
            </div>

            <div className="benefitCard">
              <h3>Spiritual Discipline</h3>
              <p>
                Strengthen your self-awareness habits and deepen your personal grounding through practical, ancestral methodologies.
              </p>
            </div>

            <div className="benefitCard">
              <h3>Environmental Security</h3>
              <p>
                Apply clear protective frameworks to keep your living and working spaces focused, constructive, and free of friction.
              </p>
            </div>
          </div>
        </div>

        <FaqSection
          title="Spiritual Healing Questions"
          faqs={TANTRA_FAQS}
          idPrefix="tantra-faq"
        />
      </section>
    </>
  );
}

export default Tantra;
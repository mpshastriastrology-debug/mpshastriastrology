import "./Vastu.css";
import "./Services1.css";
import { Link } from 'react-router-dom';
import Seo from './Seo';
import FaqSection from './FaqSection';
import { VASTU_FAQS } from '../seo/faqData';
import { VASTU_PAGE_ALTS } from '../seo/imageAlt';
import Reveal from './Reveal';
import OptimizedImage from './OptimizedImage';

function Vastu() {
  return (
    <>
      <Seo
        title="Vastu Shastra Services in Bangalore | Home & Office | MP Shastri"
        description="Explore Vedic Vastu Shastra services in Bangalore for homes, offices, and factories. Shri MP Shastri offers practical layout audits and remedies without major demolition."
        path="/vastu"
        faqs={VASTU_FAQS}
      />

      <section className="vastuPage">
        {/* HERO SECTION */}
        <div className="vastuHero">
          <div className="vastuOverlay"></div>
          <Reveal className="vastuHeroContent" animation="fade-up">
            <p>✦ ANCIENT ENVIRONMENTAL SCIENCE</p>
            <h1>Vastu Shastra Services in Bangalore</h1>
            <span>
              Establish precise spatial elemental balance, consistent financial growth, and domestic harmony inside your property using time-tested architectural principles.
            </span>
            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="vastuBtn"
            >
              Book Vastu Audit
            </a>
          </Reveal>
        </div>

        {/* DETAILS INTRO SECTION */}
        <div className="vastuAbout">
          <Reveal className="vastuImage" animation="fade-right">
            <OptimizedImage
              src="/vasthu.webp"
              alt={VASTU_PAGE_ALTS.intro}
              widths={[400, 800]}
              sizes="(max-width: 768px) 100vw, 480px"
              width={480}
              height={320}
            />
          </Reveal>

          <Reveal className="vastuContent" animation="fade-left">
            <p className="smallTitle">✦ ALIGNING SPATIAL ENERGY</p>
            <h2>Harmonize Natural Forces within Your Property</h2>
            <p>
              Vastu Shastra is the traditional Indian science of building alignment and structural element placement. By matching architectural blueprints with the cosmic flow of the five core elements, Vastu balances spatial energy to relieve recurring family stress, professional stagnation, and commercial revenue bottlenecks.
            </p>

            <div className="vastuPoints">
              <div className="vastuPoint">✔ Residential Laying &amp; Home Audits</div>
              <div className="vastuPoint">✔ Corporate Workplace Flow Optimization</div>
              <div className="vastuPoint">✔ Industrial Plant Layout Configurations</div>
              <div className="vastuPoint">✔ Non-Destructive Remedial Tools</div>
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

        {/* SERVICE CARDS SECTION */}
        <div className="vastuServices">
          <Reveal className="sectionHeading" animation="fade-up">
            <p>✦ OUR VASTU SERVICES</p>
            <h2>Complete Architectural Solutions</h2>
          </Reveal>

          <div className="vastuServiceGrid">
            {/* CARD 1 */}
            <Reveal className="vastuCard" animation="fade-up" delay={0}>
              <OptimizedImage
                src="/vasthu.webp"
                alt={VASTU_PAGE_ALTS.residential}
                widths={[400, 800]}
                sizes="(max-width: 640px) 100vw, 360px"
                width={360}
                height={220}
              />
              <div className="vastuCardContent">
                <h3>Residential Vastu</h3>
                <p>
                  Enhance peace of mind, marital understanding, and children's focus through optimal bedroom, kitchen, and entrance balancing.
                </p>
              </div>
            </Reveal>

            {/* CARD 2 */}
            <Reveal className="vastuCard" animation="fade-up" delay={100}>
              <OptimizedImage
                src="/businessproblem.webp"
                alt={VASTU_PAGE_ALTS.workplace}
                widths={[400, 800]}
                sizes="(max-width: 640px) 100vw, 360px"
                width={360}
                height={220}
              />
              <div className="vastuCardContent">
                <h3>Workplace Vastu</h3>
                <p>
                  Optimize employee performance, clear administrative bottlenecks, and support revenue metrics by placing executives strategically.
                </p>
              </div>
            </Reveal>

            {/* CARD 3 */}
            <Reveal className="vastuCard" animation="fade-up" delay={200}>
              <OptimizedImage
                src="/vastuproblem.webp"
                alt={VASTU_PAGE_ALTS.industrial}
                widths={[400, 800]}
                sizes="(max-width: 640px) 100vw, 360px"
                width={360}
                height={220}
              />
              <div className="vastuCardContent">
                <h3>Industrial Vastu</h3>
                <p>
                  Streamline manufacturing lines, avoid machinery breakdown delays, and scale commercial production with correct heavy machine placement.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* IMPORTANCE EXPLAINER SECTION */}
        <section className="vastuImportance">
          <div className="vastuImportanceContainer">
            <div className="vastuImportanceHeader">
              <p>✦ IMPORTANCE OF SPATIAL SYMMETRY</p>
              <h2>Why Balance Your Structural Layout Environment?</h2>
              <p>
                Every closed space carries an underlying current that can either support or hinder your goals. Aligning your property creates an environment where your hard work leads to real financial stability, focus, and long-term peace of mind.
              </p>
            </div>

            <div className="vastuBenefitsGrid">
              <div className="vastuBox">
                <h3>Financial Growth</h3>
                <p>
                  Removing blocks in your cash flow direction helps secure your savings, smooth out transaction cycles, and reveal new investment avenues.
                </p>
              </div>

              <div className="vastuBox">
                <h3>Career Success</h3>
                <p>
                  An aligned desk or workspace can sharpen focus, lower stress during key negotiations, and accelerate professional growth.
                </p>
              </div>

              <div className="vastuBox">
                <h3>Family Harmony</h3>
                <p>
                  Balancing domestic rooms can reduce daily friction, clear communication bottlenecks, and foster mutual respect at home.
                </p>
              </div>

              <div className="vastuBox">
                <h3>Health &amp; Vitality</h3>
                <p>
                  Aligning your sleeping quarters with natural magnetic fields supports restful sleep, emotional balance, and physical energy.
                </p>
              </div>
            </div>

            {/* DEFECT ANALYSIS BLOCK */}
            <div className="vastuDoshaSection">
              <h2>Common Signs of a Directional Energy Defect</h2>
              <p>
                When a property's layout works against natural directions, it often creates recurring challenges across different areas of your life.
              </p>

              <div className="vastuProblems">
                <div className="problemCard">
                  <span>💰</span>
                  <h4>Unexpected Financial Loss</h4>
                  <p>Sudden, heavy expenses, delayed client clearances, or stalled business returns.</p>
                </div>

                <div className="problemCard">
                  <span>💼</span>
                  <h4>Professional Delays</h4>
                  <p>Missed promotions, ongoing workplace friction, or a feeling of being stuck in your career.</p>
                </div>

                <div className="problemCard">
                  <span>❤️</span>
                  <h4>Domestic Friction</h4>
                  <p>Frequent, unprovoked arguments and an underlying lack of peace among family members.</p>
                </div>

                <div className="problemCard">
                  <span>🏠</span>
                  <h4>Property Stall Issues</h4>
                  <p>Unexplained building delays, recurring tenant friction, or legal land holds.</p>
                </div>

                <div className="problemCard">
                  <span>📚</span>
                  <h4>Disrupted Academic Focus</h4>
                  <p>Children struggling to retain focus, mental fatigue, or persistent learning hurdles.</p>
                </div>

                <div className="problemCard">
                  <span>⚖️</span>
                  <h4>Operational Conflicts</h4>
                  <p>Sudden partnership misunderstandings, inventory damage, or unexpected regulatory holds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE SPECIALTIES TAG HIGHLIGHT BOX */}
        <section className="vastuServicesSection">
          <div className="sectionHeading">
            <p>✦ METRIC ANALYSIS COVERAGE</p>
            <h2>Comprehensive Spatial Audit Fields</h2>
            <p className="vastuDescription">
              Shri MP Shastri performs meticulous, metric-driven audits for a wide range of real estate assets, offering practical advice to maximize your space's potential.
            </p>
          </div>

          <div className="vastuServiceTags">
            <span>Home Vastu Consultation</span>
            <span>Apartment Vastu</span>
            <span>Villa Vastu</span>
            <span>New House Vastu</span>
            <span>Plot Vastu Analysis</span>
            <span>Office Vastu Consultation</span>
            <span>Commercial Vastu</span>
            <span>Shop Vastu</span>
            <span>Factory Vastu</span>
            <span>Warehouse Vastu</span>
            <span>Business Vastu</span>
            <span>Vastu Remedies</span>
            <span>Vastu Defect Analysis</span>
            <span>Vastu for Financial Growth</span>
            <span>Vastu for Career Success</span>
            <span>Vastu for Marriage Harmony</span>
            <span>Vastu for Health</span>
            <span>Vastu for Family Peace</span>
            <span>Industrial Vastu</span>
            <span>Residential Vastu</span>
          </div>
        </section>

        <FaqSection
          title="Vastu Shastra Questions"
          faqs={VASTU_FAQS}
          idPrefix="vastu-faq"
        />
      </section>
    </>
  );
}

export default Vastu;
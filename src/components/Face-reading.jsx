import "./FaceReading.css";
import "./Services1.css";
import { Link } from 'react-router-dom';
import Seo from './Seo';
import FaqSection from './FaqSection';
import { FACE_READING_FAQS } from '../seo/faqData';

function FaceReading() {
  return (
    <>
      <Seo
        title="Physiognomy & Face Reading Consultation | MP Shastri"
        description="Uncover deep personality patterns, psychological strengths, and ancestral timing parameters through specialized Vedic physiognomy and facial structure audits by Shri MP Shastri."
        path="/face-reading"
        faqs={FACE_READING_FAQS}
      />

      <section className="facePage">
        {/* HERO SECTION */}
        <div className="faceHero">
          <div className="faceOverlay"></div>
          <div className="faceHeroContent">
            <p>✦ ANCIENT PHYSIOGNOMY ENGINE</p>
            <h1>Professional Face Reading Consultation</h1>
            <span>
              Understand character frameworks, behavioral tendencies, leadership potential, and chronological alignment charts using time-tested facial assessment guidelines.
            </span>
            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="faceBtn"
            >
              Book Face Analysis
            </a>
          </div>
        </div>

        {/* CORE INTRODUCTION BLOCK */}
        <div className="faceAbout">
          <div className="faceImage">
            <img
              src="/facereading.webp"
              alt="Physiognomy structural reference tracing facial grid coordinates"
            />
          </div>

          <div className="faceContent">
            <p className="smallTitle">✦ THE SCIENCE OF EXPRESSION</p>
            <h2>Decode Inner Character via Bone Structure</h2>
            <p>
              Face reading, or Samudrika Shastra, is an authentic methodology that studies precise facial ratios, micro-muscular expressions, and tissue configurations. By examining how structural areas align, face analysis provides a practical framework to identify personal blockages, instinctive leadership habits, and timing transitions across your career path.
            </p>

            <div className="facePoints">
              <div className="facePoint">✔ Structural Character Framework Audits</div>
              <div className="facePoint">✔ Innate Strengths &amp; Professional Talents</div>
              <div className="facePoint">✔ Emotional Tendency &amp; Communication Analysis</div>
              <div className="facePoint">✔ Behavioral Timing Transition Windows</div>
            </div>
          </div>
        </div>

        {/* UNIFORM REPAIRED ROUTE HUB */}
        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>
        <br /><br />

        {/* TARGET SERVICES ROW CONTAINER */}
        <div className="faceServices">
          <div className="sectionHeading">
            <p>✦ ANALYSIS ARCHITECTURES</p>
            <h2>Spiritual Face Assessment Options</h2>
          </div>

          <div className="faceServiceGrid">
            {/* CARD 1 */}
            <div className="faceCard">
              <img
                src="/personality-reading.webp"
                alt="Detailed portrait focusing on bone structure tracking landmarks"
                loading="lazy"
              />
              <div className="faceCardContent">
                <h3>Character Mapping</h3>
                <p>
                  Identify sub-conscious behavioral motivators, core emotional responses, and mental processing setups by auditing facial quadrants.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="faceCard">
              <img
                src="./career.webp"
                alt="Business professional highlighting structural leadership markers"
                loading="lazy"
              />
              <div className="faceCardContent">
                <h3>Executive Alignment</h3>
                <p>
                  Assess inherent determination metrics, communication styles, and natural executive capabilities to map out clear professional growth.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="faceCard">
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
                alt="Cohesive interactive expression displaying emotional understanding"
                loading="lazy"
              />
              <div className="faceCardContent">
                <h3>Relational Tracking</h3>
                <p>
                  Understand natural boundary settings, interactive compatibility frameworks, and empathy variations to balance interpersonal connections.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BENEFIT EXPLAINER LAYOUT SECTION */}
        <div className="faceBenefits">
          <div className="sectionHeading">
            <p>✦ PERFORMANCE METRICS</p>
            <h2>Value of Specialized Physiognomy Audits</h2>
          </div>

          <div className="benefitGrid">
            <div className="benefitCard">
              <h3>Strategic Career Clarity</h3>
              <p>
                Map out professional talents and executive habits to identify the business environments most suited to your natural style.
              </p>
            </div>

            <div className="benefitCard">
              <h3>Self-Awareness Habits</h3>
              <p>
                Spot deep-seated emotional reactions to help build conscious responses, personal stability, and long-term confidence.
              </p>
            </div>

            <div className="benefitCard">
              <h3>Interpersonal Harmony</h3>
              <p>
                Gain clear insight into personal dynamics and compatibility factors to develop reliable, balanced, and communicative relationships.
              </p>
            </div>

            <div className="benefitCard">
              <h3>Core Profile Tracking</h3>
              <p>
                Examine specific line formations and bone configurations to better understand your baseline behavior models and potential pathways.
              </p>
            </div>
          </div>
        </div>

        <FaqSection
          title="Face Reading Questions"
          faqs={FACE_READING_FAQS}
          idPrefix="face-faq"
        />
      </section>
    </>
  );
}

export default FaceReading;
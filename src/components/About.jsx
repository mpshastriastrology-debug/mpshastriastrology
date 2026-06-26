import { Link } from 'react-router-dom';
import Seo from './Seo';
import FaqSection from './FaqSection';
import { ABOUT_FAQS } from '../seo/faqData';
import './About.css';
import Reveal from './Reveal';
import OptimizedImage from './OptimizedImage';

function AboutSection() {
  return (
    <section>
      <Seo
        title="About Shri MP Shastri | Vedic Astrologer in Bangalore"
        description="Learn about Shri MP Shastri, a trusted Vedic astrologer and Vastu consultant in Bangalore offering horoscope readings, Kundali matching, and spiritual guidance."
        path="/about"
        faqs={ABOUT_FAQS}
      />
      {/* ABOUT INTRO SECTION */}
      <section className="aboutSection">
        {/* LEFT IMAGE */}
        <Reveal className="aboutImage" animation="fade-right">
          <div className="aboutGlow"></div>
          <OptimizedImage
            src="/mp-shastri-astrology.webp"
            alt="Shri MP Shastri providing spiritual counseling and horoscope analysis"
            widths={[480, 960]}
            sizes="(max-width: 768px) 100vw, 480px"
            width={480}
            height={320}
          />
        </Reveal>

        {/* RIGHT CONTENT */}
        <Reveal className="aboutContent" animation="fade-left">
          <span className="aboutTag">
            <h1>About MP Shastri Astrology</h1>
          </span>

          <h2>
            Ancient Vedic Wisdom providing Clarity for Modern Life Challenges
          </h2>

          <p>
            Shri MP Shastri offers trusted cosmic mapping and foundational guidance to clients seeking path corrections. By combining rigorous natal calculation rules with deep family lineage tracking, he delivers direct answers regarding career stagnation, marriage compatibility, business investments, and domestic harmony.
          </p>

          <p>
            Operating from Bangalore with accessible global outreach channels, our practice integrates authentic horoscope readings, root Vastu layout corrections, and behavioral numerology tracking designed to help you unlock personal clarity and generational peace.
          </p>
        </Reveal>
      </section>

      {/* FLOATING INTERNAL CONTEXT LINK HUB */}
      <section className="blogSection">
        <div className="service-links">
          <Link to="/astrology">Vedic Astrology Solutions</Link>
          <Link to="/vastu">Vastu Shastra Consultant</Link>
          <Link to="/face-reading">Physiognomy &amp; Face Reading</Link>
          <Link to="/tantra">Spiritual Healing &amp; Protection</Link>
        </div>
        <br/>

        <Reveal className="sectionHeading" animation="fade-up">
          <p>✦ LATEST ARTICLES</p>
          <h2>Astrology &amp; Vastu Insights</h2>
        </Reveal>

        <div className="blogGrid">
          {[
            ["/Astrology.webp", "Planetary transit configurations indicating career success", "Astrology", "How Astrology Helps In Navigating Strategic Career Growth", "Discover how planetary dasha cycles and specific houses influence individual corporate placement, entrepreneurial timing, and professional abundance patterns."],
            ["/vasthu.webp", "Traditional home orientation layout aligned with Vastu rules", "Vastu", "Essential Vastu Principles for Attracting Residential Harmony", "Simple, non-destructive structural adjustments designed to rebalance environmental elemental forces, removing blocks to peace and health."],
            ["/facereading.webp", "Detailed facial lines representing behavioral characteristics", "Face Reading", "Understanding Subtle Personality Profiles Through Face Reading", "Learn timeless analytical observation points to identify inherent mental strengths, emotional blockages, and behavioral tendencies."],
          ].map(([src, alt, tag, title, text], index) => (
            <Reveal className="blogCard" key={title} animation="fade-up" delay={index * 100}>
              <OptimizedImage
                src={src}
                alt={alt}
                widths={[400, 800]}
                sizes="(max-width: 640px) 100vw, 360px"
                width={360}
                height={220}
              />
              <div className="blogContent">
                <span>{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="whyChoose">
        <Reveal className="whyLeft" animation="fade-right">
          <p className="sectionTag">✦ TRUSTED SPIRITUAL REMEDIAL COUNSELING</p>
          <h2>Transform Your Core Environment Through Practical Guidance</h2>
          <p className="whyText">
            Our practice bridges time-tested ancient calculations with realistic solutions tailored for modern workflows. We reject superstition in favor of clear cosmic analysis, allowing individuals to navigate high-risk decisions with absolute confidence and strategic timing.
          </p>

          <div className="whyFeatures">
            <div className="featureCard">
              <h3>17+</h3>
              <span>Years Experience</span>
            </div>
            <div className="featureCard">
              <h3>25K+</h3>
              <span>Happy Clients</span>
            </div>
            <div className="featureCard">
              <h3>100%</h3>
              <span>Private Consultation</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="whyRight" animation="fade-left">
          <OptimizedImage
            src="/bestastrology.webp"
            alt="Shri MP Shastri analyzing natal chart details in private office layout"
            widths={[400, 800]}
            sizes="(max-width: 768px) 100vw, 480px"
            width={480}
            height={320}
          />
        </Reveal>
      </section>

      {/* EXPERIENCE TRACK RECORD SECTION */}
      <section className="experienceSection">
        <Reveal className="experienceLeft" animation="fade-right">
          <p>✦ PROFESSIONAL SERVICES ENGINE</p>
          <h2>Methodical Analysis You Can Rely On</h2>
          <span>
            Every reading provides actionable clarity, utilizing precise tools to analyze your life's path with strict privacy and care.
          </span>

          <div className="experienceList">
            <div className="experienceItem">✔ Detailed Natal Chart Audits</div>
            <div className="experienceItem">✔ Global Digital Sessions Available</div>
            <div className="experienceItem">✔ Comprehensive Compatibility Matching</div>
            <div className="experienceItem">✔ Corporate Vastu &amp; Investment Timing</div>
          </div>
        </Reveal>

        <Reveal className="experienceRight" animation="fade-left">
          <OptimizedImage
            src="/topastrology.webp"
            alt="Astrology chart layout items representing professional reading structures"
            widths={[400, 800]}
            sizes="(max-width: 768px) 100vw, 480px"
            width={480}
            height={320}
          />
        </Reveal>
      </section>

      {/* EXPERT AUTHORITY EXPLANATION */}
      <Reveal as="section" className="about-section" animation="fade-up">
        <div className="about-content">
          <h2>Trusted Spiritual Consultation System</h2>
          <p>
            Shri MP Shastri offers a highly personalized approach to Vedic consultation. Leveraging a deep understanding of natural lifecycles and planetary shifts, his work ensures you are equipped with practical remedies to overcome stubborn blockages.
          </p>

          <h3>Convenient Digital Sessions</h3>
          <p>
            Access accurate guidance from any location globally. Complete, undisturbed sessions are conducted seamlessly via high-definition video channels, direct voice calls, or encrypted messaging lines.
          </p>

          <h3>Commercial &amp; Residential Vastu Audits</h3>
          <p>
            Align your physical environments with natural flows. Our architectural consultations provide custom balance charts for your home or corporate workplace layout, helping foster consistent abundance and health.
          </p>
        </div>
      </Reveal>

      <FaqSection
        title="Common Queries Clarified"
        faqs={ABOUT_FAQS}
        idPrefix="about-faq"
      />

      {/* PREMIUM CALL TO ACTION BLOCK */}
      <section className="premiumHero">
        <div className="premiumOverlay"></div>
        <Reveal className="premiumContent" animation="fade-up">
          <p className="heroTag">✦ INDIA'S INDEPENDENT VEDIC ADVISOR</p>
          <h2>Map Out Your Future with Absolute Precision</h2>
          <p className="heroDescription">
            Gain clear visibility into your relationship timelines, financial trajectory, and workspace alignments through verified calculation parameters.
          </p>

          <div className="heroButtons">
            {/* Standard Link component replaces state-destroying regular anchor tags */}
            <Link to="/contact" className="heroPrimaryBtn">
              Book Consultation
            </Link>
            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="heroSecondaryBtn"
            >
              WhatsApp Chat
            </a>
          </div>

          <div className="heroTrust">
            <div className="trustBox">
              <h3>25K+</h3>
              <span>Happy Clients</span>
            </div>
            <div className="trustBox">
              <h3>17+</h3>
              <span>Years Experience</span>
            </div>
            <div className="trustBox">
              <h3>4.9★</h3>
              <span>Client Rating</span>
            </div>
          </div>
        </Reveal>
      </section>
    </section>
  );
}

export default AboutSection;
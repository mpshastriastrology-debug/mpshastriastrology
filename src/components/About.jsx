import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import './About.css';

function AboutSection() {
  return (
    <section>
      <Helmet>
        <title>About Shri MP Shastri | Vedic Astrologer in Bangalore</title>
        <meta
          name="description"
          content="Learn about Shri MP Shastri, a trusted Vedic astrologer and Vastu consultant in Bangalore offering horoscope readings, Kundali matching, and spiritual guidance."
        />
        <link rel="canonical" href="https://www.mpshastriastrology.com/about" />
        <meta property="og:title" content="About Shri MP Shastri | Vedic Astrologer in Bangalore" />
        <meta
          property="og:description"
          content="Discover the experience and approach behind MP Shastri Astrology — authentic Vedic wisdom for career, marriage, business, and home harmony."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/about" />
        <meta property="og:image" content="https://www.mpshastriastrology.com/mp-shastri-astrology.webp" />
      </Helmet>
      {/* ABOUT INTRO SECTION */}
      <section className="aboutSection">
        {/* LEFT IMAGE */}
        <div className="aboutImage">
          <div className="aboutGlow"></div>
          <img
            src="/mp-shastri-astrology.webp"
            alt="Shri MP Shastri providing spiritual counseling and horoscope analysis"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutContent">
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
        </div>
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

        <div className="sectionHeading">
          <p>✦ LATEST ARTICLES</p>
          <h2>Astrology &amp; Vastu Insights</h2>
        </div>

        <div className="blogGrid">
          {/* BLOG 1 */}
          <div className="blogCard">
            <img
              src="/Astrology.webp"
              alt="Planetary transit configurations indicating career success"
              loading="lazy"
            />
            <div className="blogContent">
              <span>Astrology</span>
              <h3>How Astrology Helps In Navigating Strategic Career Growth</h3>
              <p>
                Discover how planetary dasha cycles and specific houses influence individual corporate placement, entrepreneurial timing, and professional abundance patterns.
              </p>
            </div>
          </div>

          {/* BLOG 2 */}
          <div className="blogCard">
            <img
              src="/vasthu.webp"
              alt="Traditional home orientation layout aligned with Vastu rules"
              loading="lazy"
            />
            <div className="blogContent">
              <span>Vastu</span>
              <h3>Essential Vastu Principles for Attracting Residential Harmony</h3>
              <p>
                Simple, non-destructive structural adjustments designed to rebalance environmental elemental forces, removing blocks to peace and health.
              </p>
            </div>
          </div>

          {/* BLOG 3 */}
          <div className="blogCard">
            <img
              src="/facereading.webp"
              alt="Detailed facial lines representing behavioral characteristics"
              loading="lazy"
            />
            <div className="blogContent">
              <span>Face Reading</span>
              <h3>Understanding Subtle Personality Profiles Through Face Reading</h3>
              <p>
                Learn timeless analytical observation points to identify inherent mental strengths, emotional blockages, and behavioral tendencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="whyChoose">
        <div className="whyLeft">
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
        </div>

        <div className="whyRight">
          <img
            src="./bestastrology.webp"
            alt="Shri MP Shastri analyzing natal chart details in private office layout"
            loading="lazy"
          />
        </div>
      </section>

      {/* EXPERIENCE TRACK RECORD SECTION */}
      <section className="experienceSection">
        <div className="experienceLeft">
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
        </div>

        <div className="experienceRight">
          <img
            src="/topastrology.webp"
            alt="Astrology chart layout items representing professional reading structures"
            loading="lazy"
          />
        </div>
      </section>

      {/* EXPERT AUTHORITY EXPLANATION */}
      <section className="about-section">
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
      </section>

      {/* FAQ INTERACTIVE COMPONENT SECTION */}
      <section className="faqSection">
        <div className="sectionHeading">
          <p>✦ FREQUENTLY ASKED QUESTIONS</p>
          <h2>Common Queries Clarified</h2>
        </div>

        <div className="faqContainer">
          <div className="faqItem">
            <input type="checkbox" id="faq1" />
            <label htmlFor="faq1">
              How does a primary consultation session function?
              <span>+</span>
            </label>
            <div className="faqContent">
              A primary session evaluates your time and place parameters against active dasha houses to pinpoint active timeline bottlenecks affecting your daily career and marriage pathways.
            </div>
          </div>

          <div className="faqItem">
            <input type="checkbox" id="faq2" />
            <label htmlFor="faq2">
              Is the precision level maintained during digital sessions?
              <span>+</span>
            </label>
            <div className="faqContent">
              Yes, mathematical calculations require only precise birth time inputs. Because the tracking variables remain exactly the same, your remote video or phone sessions yield complete accuracy.
            </div>
          </div>

          <div className="faqItem">
            <input type="checkbox" id="faq3" />
            <label htmlFor="faq3">
              Do Vastu changes require complex physical remodeling?
              <span>+</span>
            </label>
            <div className="faqContent">
              Most structural adjustments utilize smart balancing tools, optimal elemental shifts, and room function relocations rather than costly or invasive construction alterations.
            </div>
          </div>

          <div className="faqItem">
            <input type="checkbox" id="faq4" />
            <label htmlFor="faq4">
              What is the procedure to lock in an active timeslot?
              <span>+</span>
            </label>
            <div className="faqContent">
              You can coordinate your time options instantly using our direct dashboard communication channels, instant WhatsApp connection links, or secure email options.
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CALL TO ACTION BLOCK */}
      <section className="premiumHero">
        <div className="premiumOverlay"></div>
        <div className="premiumContent">
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
        </div>
      </section>
    </section>
  );
}

export default AboutSection;
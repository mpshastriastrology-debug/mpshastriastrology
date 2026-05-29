import { Link } from 'react-router-dom'
import './About.css'
import './Services1'
function AboutSection() {

  return (
<section>
      <section className="aboutSection">

      {/* LEFT IMAGE */}

      <div className="aboutImage">

        <div className="aboutGlow"></div>

        <img
          src="/v2.jpeg"
          alt="MP Shastri Astrology"
        />

      </div>

      {/* RIGHT CONTENT */}

      <div className="aboutContent">

        <span className="aboutTag">
          About MP Shastri Astrology
        </span>

        <h2>
          Ancient Vedic Wisdom
          for Modern Life
        </h2>

        <p>
          MP Shastri Astrology provides trusted astrology,
          vastu and spiritual guidance using ancient Vedic
          knowledge and modern consultation methods.
        </p>

        <p>
          We help people solve life problems related to
          marriage, career, business, finance and family
          through accurate horoscope analysis and remedies.
        </p>

        {/* FEATURES */}

</div>

    </section>
          
{/* BLOG SECTION */}

<section className="blogSection">

  <div className="sectionHeading">

    <p>✦ LATEST ARTICLES</p>

    <h2>Astrology & Vastu Insights</h2>

  </div>

  <div className="blogGrid">

    {/* BLOG 1 */}

    <div className="blogCard">

      <img
        src="/v5.png"
        alt="Astrology"
      />

      <div className="blogContent">

        <span>
          Astrology
        </span>

        <h3>
          How Astrology Helps In Career Growth
        </h3>

        <p>
          Discover how planetary positions influence
          career success, opportunities and financial growth.
        </p>


      </div>

    </div>

    {/* BLOG 2 */}

    <div className="blogCard">

      <img
        src="/v4.png"
        alt="Vastu"
      />

      <div className="blogContent">

        <span>
          Vastu
        </span>

        <h3>
          Best Vastu Tips For Positive Energy
        </h3>

        <p>
          Simple vastu changes for home and office
          to attract happiness, peace and prosperity.
        </p>

      </div>

    </div>

    {/* BLOG 3 */}

    <div className="blogCard">

      <img
        src="/v6.png"
        alt="Face Reading"
      />

      <div className="blogContent">

        <span>
          Face Reading
        </span>

        <h3>
          Understanding Personality Through Face Reading
        </h3>

        <p>
          Learn ancient techniques to identify emotions,
          personality and future possibilities through face reading.
        </p>

      </div>

    </div>

  </div>

</section>

 {/* WHY CHOOSE US SECTION */}

<section className="whyChoose">

  <div className="whyLeft">

    <p className="sectionTag">
      ✦ TRUSTED SPIRITUAL GUIDANCE
    </p>

    <h2>
      Transform Your Life Through
      Ancient Vedic Wisdom
    </h2>

    <p className="whyText">
      MP Shastri Astrology provides trusted astrology,
      vastu and spiritual consultation services to help
      individuals achieve peace, prosperity, success and
      positivity in life. Our personalized guidance combines
      traditional Vedic knowledge with modern solutions.
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
      src="./v1.png"
       alt="Astrology"
    />

  </div>

</section>


{/* EXPERIENCE SECTION */}

<section className="experienceSection">

  <div className="experienceLeft">

    <p>
      ✦ PROFESSIONAL ASTROLOGY SERVICES
    </p>

    <h2>
      Trusted Spiritual Guidance
      For Modern Life Problems
    </h2>

    <span>
      We provide accurate astrology consultation,
      vastu corrections, face reading and spiritual
      remedies with complete privacy and trust.
    </span>

    <div className="experienceList">

      <div className="experienceItem">
        ✔ Accurate Horoscope Reading
      </div>

      <div className="experienceItem">
        ✔ Online & Offline Consultation
      </div>

      <div className="experienceItem">
        ✔ Love & Marriage Solutions
      </div>

      <div className="experienceItem">
        ✔ Business & Career Guidance
      </div>

    </div>

  </div>

  <div className="experienceRight">

    <img
      src="/v8.png"
      alt=""
    />

  </div>

</section>

{/* FAQ SECTION */}

<section className="faqSection">

  <div className="sectionHeading">

    <p>✦ FREQUENTLY ASKED QUESTIONS</p>

    <h2>Common Questions About Astrology</h2>

  </div>

  <div className="faqContainer">

    {/* FAQ 1 */}

    <div className="faqItem">

      <input
        type="checkbox"
        id="faq1"
      />

      <label htmlFor="faq1">

        How does astrology consultation work?

        <span>+</span>

      </label>

      <div className="faqContent">

        Astrology consultation helps analyze
        your horoscope and planetary positions
        to provide guidance for career, marriage,
        business, health and relationships.

      </div>

    </div>

    {/* FAQ 2 */}

    <div className="faqItem">

      <input
        type="checkbox"
        id="faq2"
      />

      <label htmlFor="faq2">

        Is online consultation available?

        <span>+</span>

      </label>

      <div className="faqContent">

        Yes. We provide online astrology
        consultation through WhatsApp,
        phone call and video consultation.

      </div>

    </div>

    {/* FAQ 3 */}

    <div className="faqItem">

      <input
        type="checkbox"
        id="faq3"
      />

      <label htmlFor="faq3">

        Do vastu remedies really help?

        <span>+</span>

      </label>

      <div className="faqContent">

        Vastu remedies help improve positive
        energy, peace and prosperity by balancing
        the energy flow in your home or office.

      </div>

    </div>

    {/* FAQ 4 */}

    <div className="faqItem">

      <input
        type="checkbox"
        id="faq4"
      />

      <label htmlFor="faq4">

        How can I book consultation?

        <span>+</span>

      </label>

      <div className="faqContent">

        You can book consultation through
        WhatsApp, direct phone call or
        contact form available on website.

      </div>

    </div>

  </div>

</section>

{/* PREMIUM HERO SECTION */}

<section className="premiumHero">

  <div className="premiumOverlay"></div>

  <div className="premiumContent">

    <p className="heroTag">
      ✦ INDIA’S TRUSTED ASTROLOGY EXPERT
    </p>

    <h1>
      Discover Your Destiny With
      <span> MP Shastri Astrology</span>
    </h1>

    <p className="heroDescription">
      Experience accurate astrology consultation,
      vastu guidance, face reading and spiritual
      healing solutions for success, positivity
      and peaceful life.
    </p>

    <div className="heroButtons">

      <a
        href="/contact"
        className="heroPrimaryBtn"
      >
        Book Consultation
      </a>

      <a
        href="https://wa.me/918073258799"
        target="_blank"
        rel="noreferrer"
        className="heroSecondaryBtn"
      >
        WhatsApp Chat
      </a>

    </div>

    {/* TRUST */}

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

  )
}

export default AboutSection
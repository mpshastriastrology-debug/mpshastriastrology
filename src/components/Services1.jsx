import "./Services1.css";
import {
  PhoneCall,
  MessageCircle
} from "lucide-react";
import {
  FaOm,
  FaHome,
  FaEye,
} from "react-icons/fa";

import { GiMeditation } from "react-icons/gi";

function Services() {
  return (
    <section>
      {/* CTA SECTION */}

<section className="ctaSection">

  <div className="ctaOverlay">

    <p>
      ✦ PERSONALIZED SPIRITUAL CONSULTATION
    </p>

    <h2>
      Get Accurate Astrology Guidance
      From MP Shastri
    </h2>

    <span>
      Expert solutions for love, marriage,
      business, career, vastu and spiritual healing.
    </span>

    <div className="ctaButtons">

      <a
        href="tel:+918073258799"
        className="callNowBtn"
      >
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

{/* BENEFITS SECTION */}

<section className="benefitsSection">

  <div className="sectionHeading">

    <p>✦ WHY CHOOSE MP SHASTRI</p>

    <h2>Benefits Of Our Guidance</h2>

  </div>

  <div className="benefitsGrid">

    <div className="benefitCard">

      <h3>
        Positive Energy
      </h3>

      <p>
        Remove negativity and attract
        peace, happiness and prosperity.
      </p>

    </div>

    <div className="benefitCard">

      <h3>
        Accurate Predictions
      </h3>

      <p>
        Detailed horoscope analysis with
        trusted spiritual solutions.
      </p>

    </div>

    <div className="benefitCard">

      <h3>
        Career Growth
      </h3>

      <p>
        Guidance for business success,
        career stability and finances.
      </p>

    </div>

    <div className="benefitCard">

      <h3>
        Relationship Solutions
      </h3>

      <p>
        Love marriage and relationship
        problem guidance and remedies.
      </p>

    </div>

  </div>

</section>



{/* STATS SECTION */}

<section className="statsSection">

  <div className="statsCard">

    <h2>25K+</h2>

    <p>
      Happy Clients
    </p>

  </div>

  <div className="statsCard">

    <h2>17+</h2>

    <p>
      Years Experience
    </p>

  </div>

  <div className="statsCard">

    <h2>100%</h2>

    <p>
      Private Consultation
    </p>

  </div>

  <div className="statsCard">

    <h2>24/7</h2>

    <p>
      Online Support
    </p>

  </div>

</section>
    <section className="services">

      <div className="servicesTitle">
        <h2>Our Best Astrology Services</h2>
      </div>

      <div className="servicesGrid">

        {/* ASTROLOGY */}

        <div className="serviceCard">

          <div className="serviceImage astrology">
            <FaOm />
          </div>

          <h3>Astrology</h3>

          <div className="divider">
            ─ ✦ ─
          </div>

          <p>
            Accurate horoscope predictions, kundli analysis
            and spiritual guidance for success and positivity.
          </p>

          <button>
            ✦ LEARN MORE
          </button>

        </div>

        {/* VASTU */}

        <div className="serviceCard">

          <div className="serviceImage vastu">
            <FaHome />
          </div>

          <h3>Vastu</h3>

          <div className="divider">
            ─ ✦ ─
          </div>

          <p>
            Bring harmony and positive vibrations into
            your home and office with vastu consultation.
          </p>

          <button>
            ✦ LEARN MORE
          </button>

        </div>

        {/* FACE READING */}

        <div className="serviceCard">

          <div className="serviceImage face">
            <FaEye />
          </div>

          <h3>Face Reading</h3>

          <div className="divider">
            ─ ✦ ─
          </div>

          <p>
            Discover personality traits, future opportunities
            and emotional patterns through face reading.
          </p>

          <button>
            ✦ LEARN MORE
          </button>

        </div>

        {/* TANTRA */}

        <div className="serviceCard">

          <div className="serviceImage tantra">
            <GiMeditation />
          </div>

          <h3>Tantra</h3>

          <div className="divider">
            ─ ✦ ─
          </div>

          <p>
            Powerful tantra rituals and spiritual healing
            solutions for positivity and protection.
          </p>

          <button>
            ✦ LEARN MORE
          </button>

        </div>

      </div>

    </section>
   

{/* PROCESS SECTION */}

<section className="processSection">

  <div className="sectionHeading">

    <p>✦ SIMPLE CONSULTATION PROCESS</p>

    <h2>How Consultation Works</h2>

  </div>

  <div className="processGrid">

    <div className="processCard">

      <div className="processNumber">01</div>

      <h3>Book Appointment</h3>

      <p>
        Schedule your astrology or vastu consultation
        online through WhatsApp or direct call.
      </p>

    </div>

    <div className="processCard">

      <div className="processNumber">02</div>

      <h3>Consult Expert</h3>

      <p>
        Speak directly with our experienced astrologer
        for accurate spiritual guidance and remedies.
      </p>

    </div>

    <div className="processCard">

      <div className="processNumber">03</div>

      <h3>Get Solutions</h3>

      <p>
        Receive personalized remedies, vastu tips and
        positive spiritual solutions for life problems.
      </p>

    </div>

  </div>

</section>


{/* FLOATING CONTACT */}

<div className="floatingContact">

  {/* CALL */}

  <a
    href="tel:+918073258799"
    className="floatingCall"
  >

    <PhoneCall size={26} />

  </a>

  {/* WHATSAPP */}

  <a
    href="https://wa.me/918073258799"
    target="_blank"
    rel="noreferrer"
    className="floatingWhatsapp"
  >

    <MessageCircle size={26} />

  </a>

</div>
{/* FAQ SECTION */}

<section className="faqSection">

  <div className="sectionHeading">

    <p>✦ FREQUENTLY ASKED QUESTIONS</p>

    <h2>Common Questions</h2>

  </div>

  <div className="faqContainer">

    <div className="faqItem">

      <h3>
        How can astrology help in life?
      </h3>

      <p>
        Astrology provides guidance for career,
        relationships, marriage, business and
        personal growth through spiritual insights.
      </p>

    </div>

    <div className="faqItem">

      <h3>
        Do you provide online consultation?
      </h3>

      <p>
        Yes, online consultation is available
        through WhatsApp chat, voice call and
        video consultation worldwide.
      </p>

    </div>

    <div className="faqItem">

      <h3>
        Which services do you provide?
      </h3>

      <p>
        We provide astrology, vastu consultation,
        face reading, numerology, tantra and
        spiritual healing services.
      </p>

    </div>

  </div>

</section>


{/* GOOGLE REVIEWS SECTION */}

<section className="googleReviewSection">

  <div className="sectionHeading">

    <p>✦ GOOGLE REVIEWS</p>

    <h2>What Clients Say About Us</h2>

  </div>

  <div className="googleReviewGrid">

    {/* REVIEW 1 */}

    <div className="googleReviewCard">

      <div className="googleTop">

        <div className="googleProfile">

          

          <div>
            <h3>Ramesh Kumar</h3>

            <span>
              Local Guide • 18 Reviews
            </span>
          </div>

        </div>

        <img
          className="googleIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
        />

      </div>

      <div className="reviewStars">
        ★★★★★
      </div>

      <p>
        Very accurate astrology consultation.
        MP Shastri provided excellent guidance
        for my business and family problems.
        Highly recommended astrologer in Bangalore.
      </p>

      <small>
        2 weeks ago
      </small>

    </div>

    {/* REVIEW 2 */}

    <div className="googleReviewCard">

      <div className="googleTop">

        <div className="googleProfile">

          

          <div>
            <h3>Priya Sharma</h3>

            <span>
              12 Reviews
            </span>
          </div>

        </div>

        <img
          className="googleIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
        />

      </div>

      <div className="reviewStars">
        ★★★★★
      </div>

      <p>
        Best vastu consultation experience.
        Positive changes started happening
        after following the remedies suggested.
      </p>

      <small>
        1 month ago
      </small>

    </div>

    {/* REVIEW 3 */}

    <div className="googleReviewCard">

      <div className="googleTop">

        <div className="googleProfile">

                   <div>
            <h3>Naveen Raj</h3>

            <span>
              28 Reviews
            </span>
          </div>

        </div>

        <img
          className="googleIcon"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google"
        />

      </div>

      <div className="reviewStars">
        ★★★★★
      </div>

      <p>
        Genuine astrologer with deep knowledge.
        Professional consultation and very supportive.
        Highly satisfied with the predictions.
      </p>

      <small>
        3 weeks ago
      </small>

    </div>

  </div>

</section>

    </section>
  );
}

export default Services;
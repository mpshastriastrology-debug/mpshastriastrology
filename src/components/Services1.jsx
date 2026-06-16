import "./Services1.css";
import { PhoneCall, MessageCircle } from "lucide-react";
import { FaOm, FaHome, FaEye } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Services() {

  const navigate = useNavigate();
  return (
    <section className="servicesPage">

      {/* CTA SECTION */}
      <section className="ctaSection">
        <div className="ctaOverlay">
          <p>✦ PERSONALIZED SPIRITUAL CONSULTATION</p>

          <h2>Get Accurate Astrology Guidance From MP Shastri</h2>

          <span>
            Expert solutions for love, marriage, business, career, vastu and spiritual healing.
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

      {/* BENEFITS */}
      <section className="benefitsSection">
        <div className="sectionHeading">
          <p>✦ WHY CHOOSE MP SHASTRI</p>
          <h2>Benefits Of Our Guidance</h2>
        </div>

        <div className="benefitsGrid">
          {[
            ["Positive Energy", "Remove negativity and attract peace, happiness and prosperity."],
            ["Accurate Predictions", "Detailed horoscope analysis with trusted spiritual solutions."],
            ["Career Growth", "Guidance for business success, career stability and finances."],
            ["Relationship Solutions", "Love marriage and relationship problem guidance and remedies."]
          ].map(([title, desc]) => (
            <div className="benefitCard" key={title}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="statsSection">
        {[
          ["25K+", "Happy Clients"],
          ["17+", "Years Experience"],
          ["100%", "Private Consultation"],
          ["24/7", "Online Support"]
        ].map(([num, label]) => (
          <div className="statsCard" key={label}>
            <h2>{num}</h2>
            <p>{label}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="servicesTitle">
          <h2>Our Best Astrology Services</h2>
        </div>

        <div className="servicesGrid">

          <div className="serviceCard">
            <div className="serviceImage astrology"><FaOm /></div>
            <h3>Astrology</h3>
            <p>Accurate horoscope predictions, kundli analysis and spiritual guidance.</p>
                  <button
        type="button"
        onClick={() => navigate("/astrology")}
      >
        ✦ LEARN MORE
      </button>
            
          </div>

          <div className="serviceCard">
            <div className="serviceImage vastu"><FaHome /></div>
            <h3>Vastu</h3>
            <p>Bring harmony and positive vibrations into your home and office.</p>
            <button onClick={() => navigate("/Vastu")}>✦ LEARN MORE</button>
          </div>

          <div className="serviceCard">
            <div className="serviceImage face"><FaEye /></div>
            <h3>Face Reading</h3>
            <p>Discover personality traits and future opportunities.</p>
            <button onClick={() => navigate("/Face-reading")}>✦ LEARN MORE</button>
          </div>

          <div className="serviceCard">
            <div className="serviceImage tantra"><GiMeditation /></div>
            <h3>Tantra</h3>
            <p>Spiritual healing solutions for positivity and protection.</p>
            <button onClick={() => navigate("/Tantra")}>✦ LEARN MORE</button>
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="processSection">
        <div className="sectionHeading">
          <p>✦ SIMPLE CONSULTATION PROCESS</p>
          <h2>How Consultation Works</h2>
        </div>

        <div className="processGrid">
          {[
            ["01", "Book Appointment", "Schedule consultation via WhatsApp or call."],
            ["02", "Consult Expert", "Speak directly with experienced astrologer."],
            ["03", "Get Solutions", "Receive personalized remedies and guidance."]
          ].map(([num, title, desc]) => (
            <div className="processCard" key={num}>
              <div className="processNumber">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FLOATING CONTACT */}
      <div className="floatingContact">
        <a href="tel:+918073258799" className="floatingCall" aria-label="Call Now">
          <PhoneCall size={26} />
        </a>

        <a
          href="https://wa.me/918073258799"
          target="_blank"
          rel="noreferrer"
          className="floatingWhatsapp"
          aria-label="WhatsApp Chat"
        >
          <MessageCircle size={26} />
        </a>
      </div>

      {/* FAQ */}
      <section className="faqSection">
        <div className="sectionHeading">
          <p>✦ FREQUENTLY ASKED QUESTIONS</p>
          <h2>Common Questions</h2>
        </div>

        <div className="faqContainer">
          <div className="faqItem">
            <h3>How can astrology help in life?</h3>
            <p>Provides guidance for career, relationships and growth.</p>
          </div>

          <div className="faqItem">
            <h3>Do you provide online consultation?</h3>
            <p>Yes, via WhatsApp, call and video worldwide.</p>
          </div>

          <div className="faqItem">
            <h3>Which services do you provide?</h3>
            <p>Astrology, vastu, face reading, numerology and tantra.</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="googleReviewSection">
        <div className="sectionHeading">
          <p>✦ GOOGLE REVIEWS</p>
          <h2>What Clients Say About Us</h2>
        </div>

        <div className="googleReviewGrid">
          {[
            ["Ramesh Kumar", "Very accurate astrology consultation..."],
            ["Priya Sharma", "Best vastu consultation experience..."],
            ["Naveen Raj", "Genuine astrologer with deep knowledge..."]
          ].map(([name, text]) => (
            <div className="googleReviewCard" key={name}>
              <h3>{name}</h3>
              <div aria-label="5 star rating">★★★★★</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

    </section>
  );
}

export default Services;
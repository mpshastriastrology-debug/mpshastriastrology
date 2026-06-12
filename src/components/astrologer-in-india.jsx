import { Helmet } from "react-helmet";
import "./AstrologerInIndia.css";
import { Link } from "react-router-dom";

function AstrologerInIndia() {
  return (
    <>
    <Helmet>
  <title>Trusted Astrologer in India | MP Shastri Astrology</title>

  <meta
    name="description"
    content="Trusted astrologer in India providing online astrology consultation, kundli analysis, marriage guidance, career predictions and vastu solutions."
  />

  <link
    rel="canonical"
    href="https://www.mpshastriastrology.com/astrologer-in-india"
  />
</Helmet>
    <div className="indiaPage">

      <section className="indiaHero">

        <div className="indiaHeroContent">

          <span className="indiaBadge">
            ✦ TRUSTED ASTROLOGY CONSULTATION ACROSS INDIA
          </span>

          <h1>
            Best Astrologer in India
          </h1>

          <p>
            MP Shastri provides accurate astrology consultation,
            marriage guidance, career predictions, business solutions,
            vastu consultation and spiritual remedies for clients
            across India and worldwide.
          </p>

          <div className="indiaButtons">

            <a
              href="tel:+918073258799"
              className="indiaCallBtn"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="indiaWhatsappBtn"
            >
              WhatsApp Consultation
            </a>

          </div>

        </div>

      </section>
<div className="service-links">
  <Link to="/online-astrologer">
    Online Astrology Consultation
  </Link>

  <Link to="/vastu-expert">
    Vastu Expert Services
  </Link>

  <Link to="/astrologer-in-bangalore">
    Astrology Services Across Bangalore
  </Link>
</div>
      <section className="indiaSection">

        <h2>
          Trusted Astrology Services Across India
        </h2>

        <p>
          Thousands of people across India trust MP Shastri for
          horoscope reading, marriage consultation, career guidance,
          vastu advice and spiritual solutions.
        </p>

      </section>

      <section className="indiaSection">

        <h2>
          Our Astrology Services
        </h2>

        <div className="indiaGrid">

          <div className="indiaCard">
            <h3>Horoscope Reading</h3>
            <p>Detailed birth chart analysis and predictions.</p>
          </div>

          <div className="indiaCard">
            <h3>Marriage Consultation</h3>
            <p>Solutions for marriage and relationship issues.</p>
          </div>

          <div className="indiaCard">
            <h3>Career Guidance</h3>
            <p>Career growth, jobs and business consultation.</p>
          </div>

          <div className="indiaCard">
            <h3>Vastu Consultation</h3>
            <p>Home and office vastu recommendations.</p>
          </div>

          <div className="indiaCard">
            <h3>Face Reading</h3>
            <p>Personality and future opportunity analysis.</p>
          </div>

          <div className="indiaCard">
            <h3>Spiritual Remedies</h3>
            <p>Personalized remedies for positivity and success.</p>
          </div>

        </div>

      </section>

      <section className="indiaSection">

        <h2>
          Why Choose MP Shastri?
        </h2>

        <div className="indiaGrid">

          <div className="indiaCard">
            <h3>17+ Years Experience</h3>
          </div>

          <div className="indiaCard">
            <h3>25,000+ Happy Clients</h3>
          </div>

          <div className="indiaCard">
            <h3>Online Consultation</h3>
          </div>

          <div className="indiaCard">
            <h3>100% Confidential</h3>
          </div>

        </div>

      </section>

      <section className="indiaCTA">

        <h2>
          Book Your Astrology Consultation Today
        </h2>

        <p>
          Connect with MP Shastri for accurate astrology guidance
          from anywhere in India.
        </p>

        <a href="tel:+918073258799">
          Call +91 80732 58799
        </a>

      </section>

    </div>
    </>
  );
}

export default AstrologerInIndia;
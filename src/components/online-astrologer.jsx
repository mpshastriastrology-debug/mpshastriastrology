import { Helmet } from "react-helmet";
import "./OnlineAstrology.css";

function OnlineAstrology() {
  return (
    <>
    <Helmet>
  <title>Online Astrologer Consultation | MP Shastri Astrology</title>

  <meta
    name="description"
    content="Get online astrology consultation through phone, WhatsApp and video call. Trusted astrology guidance from MP Shastri."
  />

  <link
    rel="canonical"
    href="https://www.mpshastriastrology.com/online-astrologer"
  />
</Helmet>
    <div className="onlineAstrologyPage">

      {/* HERO */}

      <section className="onlineAstrologyHero">

        <div className="onlineAstrologyHeroContent">

          <p className="onlineAstrologyHeroTag">
            ✦ ONLINE ASTROLOGY CONSULTATION
          </p>

          <h1 className="onlineAstrologyHeroTitle">
            Online Astrology Consultation
          </h1>

          <p className="onlineAstrologyHeroDesc">
            Connect with MP Shastri from anywhere in the world.
            Get accurate astrology guidance, marriage solutions,
            career predictions, business consultation, vastu advice
            and spiritual remedies through phone, WhatsApp and
            video consultation.
          </p>

          <div className="onlineAstrologyButtons">

            <a
              href="tel:+918073258799"
              className="onlineAstrologyCallBtn"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="onlineAstrologyWhatsappBtn"
            >
              WhatsApp Consultation
            </a>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="onlineAstrologySection">

        <h2>
          Trusted Online Astrology Services
        </h2>

        <p>
          MP Shastri provides professional online astrology
          consultation for clients across India and worldwide.
          Receive personalized guidance without visiting the office.
        </p>

      </section>

      {/* SERVICES */}

      <section className="onlineAstrologySection">

        <h2>
          Online Consultation Services
        </h2>

        <div className="onlineAstrologyGrid">

          <div className="onlineAstrologyCard">
            <h3>Horoscope Reading</h3>
            <p>
              Detailed birth chart analysis and future predictions.
            </p>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Marriage Guidance</h3>
            <p>
              Solutions for marriage delays and relationship issues.
            </p>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Career & Business</h3>
            <p>
              Guidance for jobs, promotions and business growth.
            </p>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Vastu Consultation</h3>
            <p>
              Online Vastu guidance for homes and offices.
            </p>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Face Reading</h3>
            <p>
              Personality analysis and future opportunities.
            </p>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Spiritual Remedies</h3>
            <p>
              Personalized remedies for peace and prosperity.
            </p>
          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="onlineAstrologySection">

        <h2>
          Why Choose Online Consultation?
        </h2>

        <div className="onlineAstrologyGrid">

          <div className="onlineAstrologyCard">
            <h3>Available Worldwide</h3>
          </div>

          <div className="onlineAstrologyCard">
            <h3>100% Confidential</h3>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Quick Appointments</h3>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Expert Guidance</h3>
          </div>

        </div>

      </section>

      {/* PROCESS */}

      <section className="onlineAstrologySection">

        <h2>
          How It Works
        </h2>

        <div className="onlineAstrologyGrid">

          <div className="onlineAstrologyCard">
            <h3>Step 1</h3>
            <p>Call or WhatsApp us to schedule a consultation.</p>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Step 2</h3>
            <p>Share your birth details and questions.</p>
          </div>

          <div className="onlineAstrologyCard">
            <h3>Step 3</h3>
            <p>Receive personalized astrology guidance.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="onlineAstrologyCTA">

        <h2>
          Book Your Online Consultation Today
        </h2>

        <p>
          Get accurate astrology guidance from MP Shastri
          through phone, WhatsApp or video consultation.
        </p>

        <a
          href="tel:+918073258799"
          className="onlineAstrologyCtaBtn"
        >
          Call +91 80732 58799
        </a>

      </section>

    </div>
    </>
  );
}

export default OnlineAstrology;
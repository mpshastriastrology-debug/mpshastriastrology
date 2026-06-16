import "./Astrology.css";
import "./Services1.css";
import { Link } from 'react-router-dom'
import Astrologyservices from './Astrologyservices';

function Astrology() {

  return (

    <section className="astrologyPage">

      {/* HERO */}
      <div className="astroHero">

        <div className="astroOverlay"></div>

        <div className="astroHeroContent">

          <p>✦ Ancient Vedic Wisdom</p>

          <h1>
            Professional Astrology Consultation in Bangalore
          </h1>

          <span>
            Accurate horoscope analysis, career guidance, marriage solutions and spiritual remedies from experienced astrologers in Bangalore.
          </span>

          <a
            href="https://wa.me/918073258799"
            target="_blank"
            rel="noreferrer"
            className="astroBtn"
          >
            Book Consultation
          </a>

        </div>

      </div>

      {/* ABOUT */}
      <div className="astroAbout">

        <div className="astroImage">

          <img
            src="/Astrology.webp"
            alt="Best Astrology Consultation in Bangalore MP Shastri"
          />

        </div>

        <div className="astroContent">

          <p className="smallTitle">
            ✦ ABOUT ASTROLOGY IN BANGALORE
          </p>

          <h2>
            Discover Your Destiny Through Astrology
          </h2>

          <p>
            Astrology is an ancient spiritual science that studies planetary positions and their influence on human life. Through horoscope analysis and birth chart reading, astrology helps understand career, marriage, finance, relationships and life challenges. We provide astrology consultation in Bangalore for accurate guidance.
          </p>

          <div className="astroPoints">

            <div className="astroPoint">✔ Accurate Horoscope Reading</div>
            <div className="astroPoint">✔ Career & Business Guidance</div>
            <div className="astroPoint">✔ Marriage Compatibility</div>
            <div className="astroPoint">✔ Spiritual Remedies & Solutions</div>

          </div>

        </div>

      </div>
<div className="service-links">
    <Link to="/astrologer-in-bangalore">
    Astrology Services in Bangalore
  </Link>
  <Link to="/online-astrologer">
    Online Astrology Consultation
  </Link>

  <Link to="/vastu-expert">
    Vastu Expert Services
  </Link>

  <Link to="/astrologer-in-india">
    Best Astrologer in India
  </Link>
</div>
<br/><br/>

  <Astrologyservices/>


    </section>
  );
}

export default Astrology;
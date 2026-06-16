import "./Astrology.css";
import "./Services1.css";
import { Link } from 'react-router-dom'

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

{/* SERVICES */}
<div className="astroServices">
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
  <div className="sectionHeading">
    <p>✦ OUR SPECIALITIES</p>
    <h2>Astrology Services in Bangalore</h2>
  </div>

  <div className="astroServiceGrid">

    <div className="astroCard">
      <img src="/topastronuts.avif" alt="Horoscope Reading Astrology Service Bangalore" />
      <div className="astroCardContent">
        <h3>Horoscope Reading</h3>
        <p>Accurate horoscope analysis with personalized future predictions and remedies.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/careerproblem.webp" alt="Career Astrology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Career Astrology</h3>
        <p>Career guidance for jobs, promotions, business growth and success.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/marriage-astrology.webp" alt="Marriage Matching Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Marriage Matching</h3>
        <p>Kundali matching and compatibility analysis for successful marriages.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/financialproblem.webp" alt="Financial Problem Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Financial Problem Solution</h3>
        <p>Astrological guidance for debt relief, wealth growth and financial stability.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/loveproblem.webp" alt="Love Problem Astrology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Love Problem Solution</h3>
        <p>Guidance for love life, relationships and emotional challenges.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/relationship.webp" alt="Relationship Problem Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Relationship Problems</h3>
        <p>Resolve misunderstandings and strengthen personal relationships.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/familyconflict.webp" alt="Family Conflict Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Family Conflict Resolution</h3>
        <p>Astrological guidance for family harmony and peaceful relationships.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/businessproblem.webp" alt="Business Astrology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Business Astrology</h3>
        <p>Business growth, investment and partnership guidance through astrology.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/vastuproblem.webp" alt="Vastu Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Vastu Consultation</h3>
        <p>Residential and commercial Vastu solutions for prosperity and success.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/numerology.webp" alt="Numerology Consultation Bangalore" />
      <div className="astroCardContent">
        <h3>Numerology Consultation</h3>
        <p>Name, mobile number and date-of-birth numerology analysis.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/foreign.webp" alt="Foreign Settlement Astrology Bangalore" />
      <div className="astroCardContent">
        <h3>Foreign Settlement</h3>
        <p>Guidance for overseas education, jobs, travel and immigration.</p>
      </div>
    </div>

    <div className="astroCard">
      <img src="/healthproblem.webp" alt="Health Astrology Guidance Bangalore" />
      <div className="astroCardContent">
        <h3>Health Astrology</h3>
        <p>Health-related astrological analysis and preventive guidance.</p>
      </div>
    </div>

  </div>

</div>

    </section>
  );
}

export default Astrology;
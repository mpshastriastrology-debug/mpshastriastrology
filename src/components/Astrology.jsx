import "./Astrology.css";
import "./Services1.css";

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

        <div className="sectionHeading">

          <p>✦ OUR SPECIALITIES</p>

          <h2>Astrology Services in Bangalore</h2>

        </div>

        <div className="astroServiceGrid">

          <div className="astroCard">

            <img
              src="/topastronuts.avif"
              alt="Horoscope reading astrologer in Bangalore"
            />

            <div className="astroCardContent">

              <h3>Horoscope Reading</h3>

              <p>
                Detailed horoscope analysis with personalized predictions and guidance.
              </p>

            </div>

          </div>

          <div className="astroCard">

            <img
              src="/career.webp"
              alt="Career astrology consultation Bangalore"
            />

            <div className="astroCardContent">

              <h3>Career Astrology</h3>

              <p>
                Get guidance for job, business, success and financial growth.
              </p>

            </div>

          </div>

          <div className="astroCard">

            <img
              src="/marriage-astrology.webp"
              alt="Marriage astrology and kundali matching Bangalore"
            />

            <div className="astroCardContent">

              <h3>Marriage Matching</h3>

              <p>
                Kundali matching and relationship compatibility consultation services.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Astrology;
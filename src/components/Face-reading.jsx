import "./FaceReading.css";
import { Link } from 'react-router-dom'

function FaceReading() {

  return (

    <section className="facePage">

      {/* HERO */}

      <div className="faceHero">

        <div className="faceOverlay"></div>

        <div className="faceHeroContent">

          <p>
            ✦ Ancient Face Reading Science
          </p>

          <h1>
            Professional Face Reading Consultation
          </h1>

          <span>
            Understand personality, destiny,
            emotions, career and future possibilities
            through ancient face reading techniques
            and spiritual observation.
          </span>

          <a
            href="https://wa.me/918073258799"
            target="_blank"
            rel="noreferrer"
            className="faceBtn"
          >
            Book Face Reading
          </a>

        </div>

      </div>

      {/* ABOUT */}

      <div className="faceAbout">

        <div className="faceImage">

          <img
            src="/facereading.webp"
            alt="Face Reading"
          />

        </div>

        <div className="faceContent">

          <p className="smallTitle">
            ✦ ABOUT FACE READING
          </p>

          <h2>
            Reveal Personality Through Facial Features
          </h2>

          <p>

            Face Reading is an ancient spiritual
            practice that studies facial structure,
            expressions and energy patterns to
            understand a person’s emotions,
            strengths, future possibilities,
            relationships and life path.

          </p>

          <div className="facePoints">

            <div className="facePoint">

              ✔ Personality Analysis

            </div>

            <div className="facePoint">

              ✔ Career & Success Guidance

            </div>

            <div className="facePoint">

              ✔ Relationship Understanding

            </div>

            <div className="facePoint">

              ✔ Emotional Energy Reading

            </div>

          </div>

        </div>

      </div>

      {/* SERVICES */}

      <div className="faceServices">
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

          <p>✦ FACE READING SERVICES</p>

          <h2>Spiritual Face Analysis Solutions</h2>

        </div>

        <div className="faceServiceGrid">

          {/* CARD 1 */}

          <div className="faceCard">

            <img
              src="/personality-reading.webp"
              alt="Personality Reading"
            />

            <div className="faceCardContent">

              <h3>Personality Reading</h3>

              <p>
                Discover hidden personality
                traits, strengths and emotional
                characteristics through face analysis.
              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="faceCard">

            <img
              src="./career.webp"
              alt="Career Reading"
            />

            <div className="faceCardContent">

              <h3>Career Guidance</h3>

              <p>
                Understand leadership qualities,
                career opportunities and future
                success possibilities.
              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="faceCard">

            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
              alt="Relationship Reading"
            />

            <div className="faceCardContent">

              <h3>Relationship Analysis</h3>

              <p>
                Gain insights into relationships,
                compatibility and emotional balance
                through spiritual face reading.
              </p>

            </div>

          </div>

        </div>

      </div>

{/* BENEFITS SECTION */}

<div className="faceBenefits">

  <div className="sectionHeading">

    <p>
      ✦ BENEFITS
    </p>

    <h2>
      Benefits Of Face Reading Consultation
    </h2>

  </div>

  <div className="benefitGrid">

    <div className="benefitCard">

      <h3>
        Career Success
      </h3>

      <p>
        Understand your professional strengths,
        leadership qualities and growth opportunities.
      </p>

    </div>

    <div className="benefitCard">

      <h3>
        Emotional Balance
      </h3>

      <p>
        Discover emotional patterns and improve
        confidence, positivity and relationships.
      </p>

    </div>

    <div className="benefitCard">

      <h3>
        Relationship Guidance
      </h3>

      <p>
        Gain spiritual insights about compatibility,
        trust and future relationship stability.
      </p>

    </div>

    <div className="benefitCard">

      <h3>
        Personality Understanding
      </h3>

      <p>
        Reveal hidden personality traits,
        behavior patterns and life potential.
      </p>

    </div>

  </div>

</div>



    </section>
  );
}

export default FaceReading;
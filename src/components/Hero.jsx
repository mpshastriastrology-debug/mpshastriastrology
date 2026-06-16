import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {

  return (

    <section className="heroSection">

      {/* SPINNING CIRCLE */}

      <div className="heroCircle">

        <img
          src="/MPShastriAstrology.webp"
          alt="Best Astrologer in Bangalore MP Shastri"
        />

      </div>

      {/* LEFT CONTENT */}

      <div className="heroContent">

        <span className="heroTag">
          ✦ Vedic Astrology & Spiritual Guidance
        </span>
<div className="mobileVideo">
  <video
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/hanumanastrology.mp4" type="video/mp4" />
  </video>
</div><br/><br/>
        <h1>
  Best Astrologer in Bangalore | Online Astrology & Vastu Expert
</h1>

        <p>
  Consult MP Shastri, a trusted astrologer in Bangalore offering
  online astrology consultation, vastu guidance, numerology,
  marriage prediction, career astrology and spiritual solutions
  across India.
</p>

        <div className="heroButtons">

          <Link to="/contact">
            <button className="primaryHeroBtn">
              Book Consultation
            </button>
          </Link>

          <Link to="/services">
            <button className="secondaryHeroBtn">
              Explore Services
            </button>
          </Link>

        </div>

        {/* STATS */}

        <div className="heroStats">

          <div className="statCard">
            <h3>17+</h3>
            <p>Years Experience</p>
          </div>

          <div className="statCard">
            <h3>25K+</h3>
            <p>Consultations</p>
          </div>

          <div className="statCard">
            <h3>98%</h3>
            <p>Positive Feedback</p>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE 

      <div className="heroImage">

        <div className="imageGlow"></div>

        <img
          src="/logo1.png"
          alt="MP Shastri"
        />

      </div>*/}

    </section>

  )
}

export default Hero
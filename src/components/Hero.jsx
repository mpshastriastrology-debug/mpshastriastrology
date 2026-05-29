import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {

  return (

    <section className="heroSection">

      {/* SPINNING CIRCLE */}

      <div className="heroCircle">

        <img
          src="/spin.png"
          alt="MP Shastri Astrology"
        />

      </div>

      {/* LEFT CONTENT */}

      <div className="heroContent">

        <span className="heroTag">
          ✦ Vedic Astrology & Spiritual Guidance
        </span>

        <h1>
          A Deeper Understanding
          of Your Life Begins Here
        </h1>

        <p>
          Accurate astrology consultation, vastu guidance,
          numerology and spiritual solutions to bring
          positivity, success and peace into your life.
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
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <section className="heroSection">
      {/* SPINNING CIRCLE */}
      <div className="heroCircle">
        <img
          src="/MPShastriAstrology.webp"
          alt="Shri MP Shastri - Vedic Astrologer and Vastu Expert" // Natural alt text over stuffed keyword string
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
<a href="tel:+918073258799" className="astroCallBox">
  <span> Call Now</span>
  <strong>+91 80732 58799</strong>
</a>        </div>
        <br/><br/>

        {/* Clean, high-authority header targeting your top local intent phrase */}
        <h1>
                   Vedic Astrologer & Vastu Expert in Bangalore
        </h1>

        {/* Persuasive copy that hits multiple keyword intents naturally while maintaining professional E-E-A-T */}
        <p>
          Find clarity and alignment in your life. Shri MP Shastri provides trusted, 
          insightful solutions across India for career growth, marriage compatibility, 
          and home Vastu corrections through both online and in-person consultations.
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
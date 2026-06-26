import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Hero.css'
import Reveal from './Reveal'
import JyotishyaChakra from './JyotishyaChakra'

function Hero() {
  const [showHeroCircle, setShowHeroCircle] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 993px)')
    const update = () => setShowHeroCircle(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <section className="heroSection">
      {/* Hero text — left side */}
      <Reveal className="heroContent" animation="fade-up" delay={100}>
        <a href="tel:+918073258799" className="astroCallBox heroCallMobile">
          <span>Call Now</span>
          <strong>+91 80732 58799</strong>
        </a>

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
        </div>

        <h1>Best Astrologer in Bangalore</h1>

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
          {[
            ["17+", "Years Experience"],
            ["25K+", "Consultations"],
            ["98%", "Positive Feedback"],
          ].map(([value, label], index) => (
            <Reveal className="statCard" key={label} animation="fade-up" delay={200 + index * 100}>
              <h3>{value}</h3>
              <p>{label}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      {/* Chakra — right side (desktop) */}
      {showHeroCircle && (
        <div className="heroChakraColumn" aria-hidden="true">
          <JyotishyaChakra className="heroChakraWheel" />
        </div>
      )}
    </section>
  )
}

export default Hero
import { Link } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import './Hero.css'
import Reveal from './Reveal'

const JyotishyaChakra = lazy(() => import('./JyotishyaChakra'))
const HERO_VIDEO = '/videos/hanuman-hero.mp4'
const HERO_POSTER = '/images/opt/mp-shastri-astrology-480w.webp'

function Hero() {
  const [showHeroCircle, setShowHeroCircle] = useState(false)

  useEffect(() => {
    document.body.classList.add('app-ready')

    const media = window.matchMedia('(min-width: 993px)')
    const update = () => setShowHeroCircle(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <section className="heroSection">
      <div className="heroContent">
        <a href="tel:+918073258799" className="astroCallBox heroCallMobile">
          <span>Call Now</span>
          <strong>+91 80732 58799</strong>
        </a>

        <span className="heroTag">
          ✦ Vedic Astrology & Spiritual Guidance
        </span>

        <div className="mobileVideo">
          <video
            className="mobileHeroVideo"
            autoPlay
            muted
            loop
            playsInline
            poster={HERO_POSTER}
            preload="metadata"
            aria-label="Vedic astrology guidance video"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>

        <h1>Best Astrologer in Bangalore.</h1>

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
      </div>

      {showHeroCircle && (
        <div className="heroChakraColumn" aria-hidden="true">
          <Suspense fallback={null}>
            <JyotishyaChakra className="heroChakraWheel" />
          </Suspense>
        </div>
      )}
    </section>
  )
}

export default Hero

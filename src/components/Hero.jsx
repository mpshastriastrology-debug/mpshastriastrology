import { Link } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import './Hero.css'
import Reveal from './Reveal'

const JyotishyaChakra = lazy(() => import('./JyotishyaChakra'))

function Hero() {
  const [showHeroCircle, setShowHeroCircle] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const desktopMedia = window.matchMedia('(min-width: 993px)')
    const mobileMedia = window.matchMedia('(max-width: 992px)')

    const update = () => {
      setShowHeroCircle(desktopMedia.matches)
      setIsMobile(mobileMedia.matches)
    }

    update()
    desktopMedia.addEventListener('change', update)
    mobileMedia.addEventListener('change', update)
    return () => {
      desktopMedia.removeEventListener('change', update)
      mobileMedia.removeEventListener('change', update)
    }
  }, [])

  return (
    <section className="heroSection">
      <Reveal className="heroContent" animation="fade-up" delay={100}>
        <a href="tel:+918073258799" className="astroCallBox heroCallMobile">
          <span>Call Now</span>
          <strong>+91 80732 58799</strong>
        </a>

        <span className="heroTag">
          ✦ Vedic Astrology & Spiritual Guidance
        </span>

        {isMobile && (
          <div className="mobileVideo">
            <img
              src="/mp-shastri-astrology.webp"
              alt="Shri MP Shastri — Vedic astrologer and Vastu consultant in Bangalore"
              className="mobileHeroPoster"
              width={640}
              height={360}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        )}

        <h1>Vedic Astrologer &amp; Vastu Consultant in Bangalore</h1>

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
      </Reveal>

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

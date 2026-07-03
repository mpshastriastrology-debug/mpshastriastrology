import { Link } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import './Hero.css'
import Reveal from './Reveal'
import { HOME_H1 } from '../seo/homeSeo'

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
            fetchPriority="high"
            aria-label="Vedic astrology guidance video"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>

        <h1>{HOME_H1}</h1>

        <p>
          Find clarity on marriage, career, and home Vastu. Book an astrology consultation in Bangalore
          at our Mahalakshmi Layout office, or connect online from anywhere in India—same careful chart
          work and practical remedies either way.
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

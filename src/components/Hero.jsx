import { Link } from 'react-router-dom'
import { lazy, Suspense, useEffect, useState } from 'react'
import './Hero.css'
import Reveal from './Reveal'
import OptimizedImage from './OptimizedImage'

const JyotishyaChakra = lazy(() => import('./JyotishyaChakra'))
const HERO_VIDEO = '/videos/hanuman-hero.mp4'
const HERO_POSTER = '/images/opt/mp-shastri-astrology-480w.webp'

function Hero() {
  const [showHeroCircle, setShowHeroCircle] = useState(false)
  const [showHeroVideo, setShowHeroVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    document.body.classList.add('app-ready')

    const media = window.matchMedia('(min-width: 993px)')
    const update = () => setShowHeroCircle(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const mobile = window.matchMedia('(max-width: 768px)')
    const startVideo = () => {
      if (mobile.matches) {
        setShowHeroVideo(true)
      }
    }

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(startVideo, { timeout: 3500 })
      return () => window.cancelIdleCallback(id)
    }

    const timer = window.setTimeout(startVideo, 3500)
    return () => window.clearTimeout(timer)
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
          {showHeroVideo ? (
            <video
              className={`mobileHeroVideo${videoReady ? ' is-playing' : ''}`}
              src={HERO_VIDEO}
              poster={HERO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              aria-label="Vedic astrology guidance video"
              onCanPlay={() => setVideoReady(true)}
              onError={() => setShowHeroVideo(false)}
            />
          ) : null}
          {!videoReady && (
            <OptimizedImage
              src="/mp-shastri-astrology.webp"
              alt="Shri MP Shastri — Vedic astrologer and Vastu consultant in Bangalore"
              className="mobileHeroPoster"
              widths={[480, 960]}
              sizes="100vw"
              width={640}
              height={360}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          )}
        </div>

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

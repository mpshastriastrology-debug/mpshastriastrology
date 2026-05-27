import { Phone, MessageCircle, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import './Home.css'
import { Link } from 'react-router-dom'
function App() {
  return (
    <main className="website">
      
      {/* HERO SECTION */}
      <section className="hero">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Trusted Online
          <span> Astrology </span>
          Consultation
        </motion.h1>

        <p>
          Talk to expert astrologers for love, marriage,
          career, vastu and life guidance.
        </p>

<div className="heroButtons">

  <Link to="/contact">
    <button className="primaryBtn">
      Book Consultation
    </button>
  </Link>

  <Link to="/services">
    <button className="secondaryBtn">
      Explore Services
    </button>
  </Link>

</div>
      </section>

      {/* ASTRO INFO SECTION */}

<section className="astroInfo">

  <div className="astroLeft">

    <span className="astroTag">
      Ancient Vedic Wisdom
    </span>

    <h2>
      Transform Your Life Through
      Astrology & Vastu
    </h2>

    <p>
      Vedic astrology helps understand your life path,
      career, marriage, finance and relationships through
      planetary movements and birth chart analysis.
    </p>

    <p>
      Vastu Shastra balances positive energy in homes,
      offices and commercial spaces to attract peace,
      prosperity and success.
    </p>

    <div className="astroPoints">

      <div className="astroPoint">
        ✔ Positive Energy Alignment
      </div>

      <div className="astroPoint">
        ✔ Career & Business Growth
      </div>

      <div className="astroPoint">
        ✔ Marriage Compatibility
      </div>

      <div className="astroPoint">
        ✔ Financial Prosperity
      </div>

    </div>

    <Link to="/services">
      <button className="astroBtn">
        Explore Spiritual Services
      </button>
    </Link>

  </div>

  {/* RIGHT SIDE */}

  <div className="astroRight">

    <div className="astroCard">

      <div className="astroEmoji">
        🔮
      </div>

      <h3>
        Astrology Reading
      </h3>

      <p>
        Accurate horoscope analysis and future predictions
        based on Vedic astrology principles.
      </p>

    </div>

    <div className="astroCard">

      <div className="astroEmoji">
        🏠
      </div>

      <h3>
        Vastu Consultation
      </h3>

      <p>
        Improve harmony and remove negative energy
        through vastu corrections and guidance.
      </p>

    </div>

  </div>

</section>


<section className="quickServices">

  {/* CHAT */}

  <a
    href="https://wa.me/918073258799"
    target="_blank"
    rel="noreferrer"
    className="quickCard"
  >

    <div className="iconGlow"></div>

    <div className="quickIcon chatIcon">
      💬
    </div>

    <h3>
      Chat with Astrologer
    </h3>

    <p>
      Instant WhatsApp guidance
    </p>

  </a>

  {/* CALL */}

  <a
    href="tel:+918073258799"
    className="quickCard"
  >

    <div className="iconGlow"></div>

    <div className="quickIcon callIcon">
      📞
    </div>

    <h3>
      Talk to Astrologer
    </h3>

    <p>
      Direct call consultation
    </p>

  </a>

  {/* POOJA */}

  <Link
    to="/contact"
    className="quickCard"
  >

    <div className="iconGlow"></div>

    <div className="quickIcon poojaIcon">
      🪔
    </div>

    <h3>
      Book Pooja
    </h3>

    <p>
      Personalized spiritual rituals
    </p>

  </Link>

  {/* VIDEO CALL */}

  <a
    href="https://wa.me/918073258799"
    target="_blank"
    rel="noreferrer"
    className="quickCard"
  >

    <div className="iconGlow"></div>

    <div className="quickIcon videoIcon">
      🎥
    </div>

    <h3>
      Video Call with Astrologer
    </h3>

    <p>
      Online video consultation
    </p>

  </a>

</section>
      {/* SERVICES */}
      <section className="services">
        <h2>Our Services</h2>

        <div className="serviceGrid">
          {[
            'Vedic Astrology',
            'Family Problem Solution',
            'Career Guidance',
            'Vastu Consultation',
            'Numerology',
            'Online Pooja'
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <h3>{service}</h3>

              <p>
                Professional spiritual guidance with
                accurate predictions and remedies.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Client Testimonials</h2>

        <div className="testimonialGrid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card">
              <div className="stars">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>

              <p>
                Amazing consultation and accurate prediction.
                Highly recommended.
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* FLOATING BUTTONS */}
      <div className="floatingButtons">

        <a href="tel:+919999999999" className="callBtn">
          <Phone />
        </a>

        <a
          href="https://wa.me/918073258799"
          className="whatsappBtn"
        >
          <MessageCircle />
        </a>

      </div>
    </main>
  )
}

export default App
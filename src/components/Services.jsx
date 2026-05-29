import { Link } from 'react-router-dom'
import './Services.css'

const services = [

  {
    icon:'🔮',
    title:'Astrology Reading',
    desc:'Accurate horoscope analysis and future predictions based on Vedic astrology.'
  },

  {
    icon:'🏠',
    title:'Vastu Consultation',
    desc:'Balance positive energy and remove vastu dosha from home and office.'
  },

  {
    icon:'❤️',
    title:'Love Problem Solution',
    desc:'Spiritual guidance and remedies for relationship and marriage issues.'
  },

  {
    icon:'💼',
    title:'Career Guidance',
    desc:'Career and business astrology consultation for growth and success.'
  },

  {
    icon:'🔢',
    title:'Numerology',
    desc:'Discover lucky numbers and personalized numerology insights.'
  },

  {
    icon:'🪔',
    title:'Online Pooja',
    desc:'Book personalized pooja and spiritual rituals for positivity.'
  }

]

function Services() {

  return (
<section>
    <section className="servicesSection">

      {/* TOP */}

      <div className="servicesTop">

        <span className="servicesTag">
          Our Services
        </span>

        <h2>
          Spiritual & Astrology Services
        </h2>

        <p>
          Trusted astrology consultation and vastu guidance
          for personal, professional and spiritual growth.
        </p>

      </div>

      {/* GRID */}

      <div className="servicesGrid">

        {services.map((item,index)=>(

          <div
            className="serviceCard"
            key={index}
          >

            <div className="serviceIcon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.desc}
            </p>

            <Link to="/contact">

              <button>
                Book Consultation
              </button>

            </Link>

          </div>

        ))}

      </div>

    </section>
    
{/* CONTACT STRIP */}

<section className="contactStrip">

  <div className="contactStripBox">

    <h2>
      Need Instant Consultation?
    </h2>

    <p>
      Talk directly with MP Shastri for
      astrology, vastu and spiritual guidance.
    </p>

  </div>

  <div className="contactStripButtons">

    <a href="tel:+918073258799">
      Call Now
    </a>

    <a
      href="https://wa.me/918073258799"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>

  </div>

</section>



</section>
  )
}

export default Services
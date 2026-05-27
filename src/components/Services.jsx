import './Services.css'
const services = [
  {
    icon: "🏠",
    title: "Vastu Consultation",
    desc: "Improve positive energy and harmony in your home and workplace through expert vastu guidance."
  },

  {
    icon: "🔮",
    title: "Astrology Reading",
    desc: "Accurate horoscope reading and life predictions based on ancient Vedic astrology."
  },

  {
    icon: "🔢",
    title: "Numerology",
    desc: "Discover your lucky numbers and life path with personalized numerology analysis."
  },

  {
    icon: "🌙",
    title: "Horoscope Analysis",
    desc: "Detailed kundli analysis for marriage, career, finance and spiritual growth."
  },

  {
    icon: "💼",
    title: "Business Vastu",
    desc: "Enhance success, growth and positive vibrations in business spaces and offices."
  },

  {
    icon: "🪔",
    title: "Online Spiritual Guidance",
    desc: "Get online consultation and spiritual remedies for peace and positivity."
  },
]

function Services() {
  return (

    <section className="servicesSection">

      {/* HEADING */}

      <div className="servicesHeading">

        <p className="serviceTag">
          Spiritual Services
        </p>

        <h2>
          Ancient Wisdom Services
        </h2>

        <p className="serviceSubtitle">
          Discover powerful astrology and spiritual
          solutions designed to bring positivity,
          peace and success into your life.
        </p>

      </div>

      {/* SERVICES GRID */}

      <div className="servicesGrid">

        {services.map((item, index) => (

          <div
            key={index}
            className="serviceCard"
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

            <button>
              Book Consultation
            </button>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Services
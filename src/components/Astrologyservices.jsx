import "./Astrology.css";
import "./Services1.css";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet-async";

function Astrology() {
  // Centralized data array makes handling clean alt tags and structured URLs infinitely easier
const servicesData = [
  {
    title: "Horoscope Reading",
    desc: "Accurate Vedic birth chart analysis with personalized future predictions and practical remedies.",
    img: "/topastronuts.avif",
    alt: "Vedic birth chart and horoscope reading consultation",
    path: "/astrology"
  },
  {
    title: "Career Astrology",
    desc: "Strategic guidance for employment choices, promotion timing, corporate growth, and business expansion.",
    img: "/careerproblem.webp",
    alt: "Professional career growth and business astrology consultation",
    path: "/astrology"
  },
    {
      title: "Marriage Matching",
      desc: "Comprehensive Kundali matching and Guna Milan compatibility analysis for a blissful marital life.",
      img: "/marriage-astrology.webp",
      alt: "Vedic Kundali matching for marriage compatibility",
      path: "/astrology"
    },
    {
      title: "Financial Solutions",
      desc: "Astrological path corrections for debt relief, wealth preservation, and ancestral property stability.",
      img: "/financialproblem.webp",
      alt: "Astrological guidance for wealth management and financial stability",
      path: "/astrology"
    },
    {
      title: "Love & Relationships",
      desc: "Empathetic guidance to navigate personal relationships, emotional blocks, and partnership issues.",
      img: "/loveproblem.webp",
      alt: "Relationship counseling and planetary alignment solutions",
      path: "/astrology"
    },
    {
      title: "Family Conflict Resolution",
      desc: "Resolve underlying domestic friction and restore long-term peace and harmony within your household.",
      img: "/familyconflict.webp",
      alt: "Spiritual healing solutions for family peace and harmony",
      path: "/astrology"
    },
    {
      title: "Business Astrology",
      desc: "Analyze business charts to determine optimal times for partnerships, investments, and market launches.",
      img: "/businessproblem.webp",
      alt: "Commercial growth predictions and corporate business astrology",
      path: "/astrology"
    },
    {
      title: "Vastu Consultation",
      desc: "Residential and commercial structural layout analysis to channel positive energy, peace, and abundance.",
      img: "/vastuproblem.webp",
      alt: "Traditional Indian Vastu Shastra consultation for homes and offices",
      path: "/astrology"
    },
    {
      title: "Numerology Analysis",
      desc: "Align your identity through deep validation of life paths, name balancing, and signature adjustments.",
      img: "/numerology.webp",
      alt: "Name and birth-date numerology analysis",
      path: "/astrology"
    },
    {
      title: "Foreign Settlement",
      desc: "Planetary combination assessment for overseas education, visa pathways, and international migration.",
      img: "/foreign.webp",
      alt: "Astrology tracking for immigration and international travel success",
      path: "/astrology"
    },
    {
      title: "Health Astrology",
      desc: "Proactive, preventative tracking of physical energy pathways aligned with traditional planetary transits.",
      img: "/healthproblem.webp",
      alt: "Astrological analysis for health and physical well-being",
      path: "/astrology"
    }
  ];

  return (
    <section>
      <Helmet>
        <title>Vedic Astrology Services in Bangalore | MP Shastri</title>
        <meta
          name="description"
          content="Browse Vedic astrology services including horoscope reading, career astrology, marriage matching, financial solutions, and Vastu consultation with Shri MP Shastri."
        />
        <link rel="canonical" href="https://www.mpshastriastrology.com/Astrologyservices" />
        <meta property="og:title" content="Vedic Astrology Services in Bangalore | MP Shastri" />
        <meta
          property="og:description"
          content="Horoscope reading, Kundali matching, career guidance, and Vastu services from a trusted Bangalore astrologer."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/Astrologyservices" />
      </Helmet>
      <div className="astroServices">
        <div className="sectionHeading">
          <p>✦ OUR SPECIALITIES</p>
          <h2>Comprehensive Astrology &amp; Vastu Consultations</h2>
        </div>

        <div className="astroServiceGrid">
          {servicesData.map((service, index) => (
            <Link to={service.path} key={index} className="astroCardLink">
              <div className="astroCard">
                <img src={service.img} alt={service.alt} loading="lazy" />
                <div className="astroCardContent">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="readMoreLabel">Learn More &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Astrology;
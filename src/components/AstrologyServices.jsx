import "./Astrology.css";
import "./Services1.css";
import { Link } from 'react-router-dom';
import Seo from './Seo';
import Reveal from './Reveal';
import FaqSection from './FaqSection';
import OptimizedImage from './OptimizedImage';
import { ASTROLOGY_SERVICES_FAQS } from '../seo/faqData';
import { CONSULTATION_SERVICES } from '../consultation/servicesData';

const CONSULTATION_PATHS = Object.fromEntries(
  CONSULTATION_SERVICES.map((s) => [s.title, s.path])
);

function Astrologyservices({ seo = true }) {
const servicesData = [
  {
    title: "Horoscope Reading",
    desc: "Accurate Vedic birth chart analysis with personalized future predictions and practical remedies.",
    img: "/topastronuts.avif",
    alt: "Vedic birth chart and horoscope reading consultation",
    path: CONSULTATION_PATHS["Horoscope Reading"]
  },
  {
    title: "Career Astrology",
    desc: "Strategic guidance for employment choices, promotion timing, corporate growth, and business expansion.",
    img: "/careerproblem.webp",
    alt: "Professional career growth and business astrology consultation",
    path: CONSULTATION_PATHS["Career Astrology"]
  },
    {
      title: "Marriage Matching",
      desc: "Comprehensive Kundali matching and Guna Milan compatibility analysis for a blissful marital life.",
      img: "/marriage-astrology.webp",
      alt: "Vedic Kundali matching for marriage compatibility",
      path: CONSULTATION_PATHS["Marriage Matching"]
    },
    {
      title: "Financial Solutions",
      desc: "Astrological path corrections for debt relief, wealth preservation, and ancestral property stability.",
      img: "/financialproblem.webp",
      alt: "Astrological guidance for wealth management and financial stability",
      path: CONSULTATION_PATHS["Financial Solutions"]
    },
    {
      title: "Love & Relationships",
      desc: "Empathetic guidance to navigate personal relationships, emotional blocks, and partnership issues.",
      img: "/loveproblem.webp",
      alt: "Relationship counseling and planetary alignment solutions",
      path: CONSULTATION_PATHS["Love & Relationships"]
    },
    {
      title: "Family Conflict Resolution",
      desc: "Resolve underlying domestic friction and restore long-term peace and harmony within your household.",
      img: "/familyconflict.webp",
      alt: "Spiritual healing solutions for family peace and harmony",
      path: CONSULTATION_PATHS["Family Conflict Resolution"]
    },
    {
      title: "Business Astrology",
      desc: "Analyze business charts to determine optimal times for partnerships, investments, and market launches.",
      img: "/businessproblem.webp",
      alt: "Commercial growth predictions and corporate business astrology",
      path: CONSULTATION_PATHS["Business Astrology"]
    },
    {
      title: "Vastu Consultation",
      desc: "Residential and commercial structural layout analysis to channel positive energy, peace, and abundance.",
      img: "/vastuproblem.webp",
      alt: "Traditional Indian Vastu Shastra consultation for homes and offices",
      path: CONSULTATION_PATHS["Vastu Consultation"]
    },
    {
      title: "Numerology Analysis",
      desc: "Align your identity through deep validation of life paths, name balancing, and signature adjustments.",
      img: "/numerology.webp",
      alt: "Name and birth-date numerology analysis",
      path: CONSULTATION_PATHS["Numerology Analysis"]
    },
    {
      title: "Foreign Settlement",
      desc: "Planetary combination assessment for overseas education, visa pathways, and international migration.",
      img: "/foreign.webp",
      alt: "Astrology tracking for immigration and international travel success",
      path: CONSULTATION_PATHS["Foreign Settlement"]
    },
    {
      title: "Health Astrology",
      desc: "Proactive, preventative tracking of physical energy pathways aligned with traditional planetary transits.",
      img: "/healthproblem.webp",
      alt: "Astrological analysis for health and physical well-being",
      path: CONSULTATION_PATHS["Health Astrology"]
    }
  ];

  return (
    <section>
      {seo && (
        <Seo
          title="Vedic Astrology Services in Bangalore | MP Shastri"
          description="Browse Vedic astrology services including horoscope reading, career astrology, marriage matching, financial solutions, and Vastu consultation with Shri MP Shastri."
          path="/astrologyservices"
          breadcrumbLabel="Astrology Services"
          faqs={ASTROLOGY_SERVICES_FAQS}
        />
      )}
      <div className="astroServices">
        <Reveal className="sectionHeading" animation="fade-up">
          <p>✦ OUR SPECIALITIES</p>
          {seo ? (
            <h1>Comprehensive Vedic Astrology &amp; Vastu Consultations in Bangalore</h1>
          ) : (
            <h2>Comprehensive Astrology &amp; Vastu Consultations</h2>
          )}
        </Reveal>

        {seo && (
          <Reveal className="astroServicesIntro" animation="fade-up">
            <p>
              Shri MP Shastri offers specialized Vedic astrology and Vastu consultations from
              Mahalakshmi Layout, Bengaluru. Explore horoscope reading, career timing, Kundali
              matching, financial remedies, relationship guidance, family harmony, business
              planning, residential and commercial Vastu, numerology, foreign settlement, and
              health patterns. Each card below links to a detailed consultation page. Sessions are
              available in person at the Bengaluru office or online via phone and video for clients
              across Karnataka, India, and abroad.
            </p>
            <p>
              Prefer a full menu view? See{" "}
              <Link to="/consultation">all consultations</Link> or{" "}
              <Link to="/contact">contact the office</Link> to book your session.
            </p>
          </Reveal>
        )}

        <div className="astroServiceGrid">
          {servicesData.map((service, index) => (
            <Reveal key={index} animation="fade-up" delay={(index % 4) * 80}>
              <Link to={service.path} className="astroCardLink">
              <div className="astroCard">
                <OptimizedImage
                  src={service.img}
                  alt={service.alt}
                  widths={[400, 800]}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  width={400}
                  height={240}
                />
                <div className="astroCardContent">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="readMoreLabel">Learn More &rarr;</span>
                </div>
              </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      {seo && (
        <FaqSection
          title="Astrology Services — Common Questions"
          faqs={ASTROLOGY_SERVICES_FAQS}
          idPrefix="astrologyservices-faq"
        />
      )}
    </section>
  );
}

export default Astrologyservices;
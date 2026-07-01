import "./Astrology.css";
import "./Services1.css";
import { Link } from 'react-router-dom';
import Seo from './Seo';
import Reveal from './Reveal';
import FaqSection from './FaqSection';
import OptimizedImage from './OptimizedImage';
import { ASTROLOGY_SERVICES_FAQS } from '../seo/faqData';
import { CONSULTATION_SERVICES } from '../consultation/servicesData';

function Astrologyservices({ seo = true, showIntro = false }) {
  const servicesData = CONSULTATION_SERVICES.map((service) => ({
    title: service.title,
    desc: service.cardDesc,
    img: service.image,
    alt: service.cardAlt,
    path: service.path,
  }));

  const servicesContent = (
    <>
      <Reveal className="sectionHeading" animation="fade-up">
        <p>✦ OUR SPECIALITIES</p>
        {seo ? (
          <h1>Comprehensive Vedic Astrology &amp; Vastu Consultations in Bangalore</h1>
        ) : (
          <h2>Comprehensive Astrology &amp; Vastu Consultations</h2>
        )}
      </Reveal>

      {(seo || showIntro) && (
        <Reveal className="astroServicesIntro" animation="fade-up">
          <p>
            Shri MP Shastri offers specialized consultations from Mahalakshmi Layout,
            Bengaluru. Each card below links to a dedicated page with full details on scope,
            process, and booking—in person at the office or online for clients across Karnataka,
            India, and abroad.
          </p>
          {seo && (
            <p>
              Prefer a full menu view? See{" "}
              <Link to="/consultation">all consultations</Link> or{" "}
              <Link to="/contact">contact the office</Link> to book your session.
            </p>
          )}
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
    </>
  );

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
      <div className={`astroServices${seo ? "" : " astroServicesHome"}`}>
        {seo ? servicesContent : <div className="astroServicesInner">{servicesContent}</div>}
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
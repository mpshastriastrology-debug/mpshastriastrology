import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { CONSULTATION_SERVICES } from "../consultation/servicesData";
import "../components/ConsultationPage.css";

export default function ConsultationHub() {
  return (
    <div className="consultationPage">
      <Seo
        title="Vedic Astrology Consultations in Bangalore | MP Shastri"
        description="Browse all consultation services: horoscope reading, career astrology, marriage matching, financial solutions, Vastu, foreign settlement, health astrology, and more."
        path="/consultation"
        breadcrumbLabel="Consultations"
      />

      <section
        className="consultationHero"
        style={{ backgroundImage: "url(/Astrology.webp)" }}
      >
        <div className="consultationHeroOverlay" />
        <Reveal className="consultationHeroContent" animation="fade-up">
          <p>✦ PERSONALIZED CONSULTATIONS</p>
          <h1>Vedic Astrology &amp; Vastu Consultations</h1>
          <span>
            Choose the consultation that matches your life challenge. Each session includes chart analysis,
            clear guidance, and practical remedies from Shri MP Shastri.
          </span>
          <div className="consultationHeroBtns">
            <Link to="/contact" className="consultationBtnPrimary">
              Book Consultation
            </Link>
            <a href="tel:+918073258799" className="consultationBtnSecondary">
              Call +91 80732 58799
            </a>
          </div>
        </Reveal>
      </section>

      <section className="consultationBlock">
        <Reveal className="consultationBlockHeading" animation="fade-up">
          <p>✦ OUR CONSULTATION MENU</p>
          <h2>Select Your Consultation Type</h2>
        </Reveal>
        <div className="consultationRelatedGrid" style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {CONSULTATION_SERVICES.map((service, index) => (
            <Reveal key={service.path} animation="fade-up" delay={(index % 4) * 60}>
              <Link to={service.path} className="consultationRelatedLink">
                <strong style={{ display: "block", marginBottom: "6px", color: "#8f5a16" }}>
                  {service.title}
                </strong>
                {service.heroSubtitle.slice(0, 90)}…
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

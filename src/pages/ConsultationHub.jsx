import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import FaqSection from "../components/FaqSection";
import { CONSULTATION_SERVICES } from "../consultation/servicesData";
import { CONSULTATION_HUB_FAQS } from "../seo/faqData";
import { optimizedSrc } from "../components/OptimizedImage";
import "../components/ConsultationPage.css";

export default function ConsultationHub() {
  return (
    <div className="consultationPage">
      <Seo
        title="Vedic Astrology Consultations in Bangalore | MP Shastri"
        description="Browse all consultation services: horoscope reading, career astrology, marriage matching, financial solutions, Vastu, foreign settlement, health astrology, and more."
        path="/consultation"
        breadcrumbLabel="Consultations"
        faqs={CONSULTATION_HUB_FAQS}
      />

      <section
        className="consultationHero"
        style={{ backgroundImage: `url(${optimizedSrc("/Astrology.webp", 800)})` }}
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
          <p style={{ maxWidth: "640px", margin: "0.75rem auto 0", lineHeight: 1.65 }}>
            You can also browse the{" "}
            <Link to="/astrologyservices">astrology services directory</Link> for the same
            specialties in a visual grid layout.
          </p>
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

      <FaqSection
        title="Consultation Services — Common Questions"
        faqs={CONSULTATION_HUB_FAQS}
        idPrefix="consultation-hub"
      />
    </div>
  );
}

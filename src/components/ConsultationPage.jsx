import { Link, Navigate, useLocation } from "react-router-dom";
import Seo from "./Seo";
import Reveal from "./Reveal";
import FaqSection from "./FaqSection";
import OptimizedImage, { optimizedSrc } from "./OptimizedImage";
import {
  CONSULTATION_SERVICES,
  getConsultationByPath,
} from "../consultation/servicesData";
import "./ConsultationPage.css";

export default function ConsultationPage() {
  const { pathname } = useLocation();
  const service = getConsultationByPath(pathname);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const related = CONSULTATION_SERVICES.filter((s) => s.path !== service.path).slice(
    0,
    6
  );

  return (
    <div className="consultationPage">
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={service.path}
        breadcrumbLabel={service.title}
        faqs={service.faqs}
      />

      <section
        className="consultationHero"
        style={{ backgroundImage: `url(${optimizedSrc(service.image, 800)})` }}
      >
        <div className="consultationHeroOverlay" />
        <Reveal className="consultationHeroContent" animation="fade-up">
          <p>{service.heroBadge}</p>
          <h1>{service.heroTitle}</h1>
          <span>{service.heroSubtitle}</span>
          <div className="consultationHeroBtns">
            <Link to="/contact" className="consultationBtnPrimary">
              Book Consultation
            </Link>
            <a
              href="https://wa.me/918073258799"
              target="_blank"
              rel="noreferrer"
              className="consultationBtnSecondary"
            >
              WhatsApp Now
            </a>
          </div>
        </Reveal>
      </section>

      <div className="consultationIntro">
        <Reveal className="consultationIntroImage" animation="fade-right">
          <OptimizedImage
            src={service.image}
            alt={service.imageAlt}
            widths={[400, 800]}
            sizes="(max-width: 768px) 100vw, 480px"
            width={480}
            height={320}
          />
        </Reveal>
        <Reveal className="consultationIntroText" animation="fade-left">
          <p className="smallTitle">✦ UNDERSTANDING YOUR NEED</p>
          <h2>How {service.title} Helps You</h2>
          <p>{service.intro}</p>
        </Reveal>
      </div>

      <section className="consultationBlock consultationBlockAlt">
        <Reveal className="consultationBlockHeading" animation="fade-up">
          <p>✦ COMMON CONCERNS</p>
          <h2>Problems We Address</h2>
        </Reveal>
        <div className="consultationListGrid">
          {service.problems.map((item) => (
            <Reveal className="consultationListItem" key={item} animation="fade-up">
              {item}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="consultationBlock">
        <Reveal className="consultationBlockHeading" animation="fade-up">
          <p>✦ CONSULTATION PROCESS</p>
          <h2>What Shri MP Shastri Provides</h2>
        </Reveal>
        <div className="consultationListGrid">
          {service.solutions.map((item) => (
            <Reveal className="consultationListItem" key={item} animation="fade-up">
              {item}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="consultationBlock consultationBlockAlt">
        <Reveal className="consultationBlockHeading" animation="fade-up">
          <p>✦ PRACTICAL REMEDIES</p>
          <h2>Helpful Vedic Remedies &amp; Guidance</h2>
        </Reveal>
        <div className="consultationRemedyGrid">
          {service.remedies.map((remedy) => (
            <Reveal className="consultationRemedyCard" key={remedy.title} animation="fade-up">
              <h3>{remedy.title}</h3>
              <p>{remedy.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="consultationBlock">
        <Reveal className="consultationBlockHeading" animation="fade-up">
          <p>✦ KEY BENEFITS</p>
          <h2>Why Consult for {service.title}</h2>
        </Reveal>
        <div className="consultationBenefits">
          {service.benefits.map((benefit) => (
            <Reveal className="consultationBenefitTag" key={benefit} animation="zoom-in">
              {benefit}
            </Reveal>
          ))}
        </div>
      </section>

      <FaqSection
        title={`${service.title} — Common Questions`}
        faqs={service.faqs}
        idPrefix={service.path.replace(/\//, "")}
      />

      <Reveal as="section" className="consultationCta" animation="fade-up">
        <h2>Ready for Your {service.title} Session?</h2>
        <p>
          Book an in-person consultation in Bangalore or a private online session from anywhere in India. Call{" "}
          <a href="tel:+918073258799" style={{ color: "#ffd369" }}>
            +91 80732 58799
          </a>
          .
        </p>
        <Link to="/contact" className="consultationBtnPrimary">
          Schedule Appointment
        </Link>
      </Reveal>

      <section className="consultationRelated">
        <Reveal className="consultationBlockHeading" animation="fade-up">
          <p>✦ MORE CONSULTATIONS</p>
          <h2>Explore Other Services</h2>
        </Reveal>
        <div className="consultationRelatedGrid">
          {related.map((item) => (
            <Link key={item.path} to={item.path} className="consultationRelatedLink">
              {item.title} &rarr;
            </Link>
          ))}
          <Link to="/consultation" className="consultationRelatedLink">
            View All Consultations &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

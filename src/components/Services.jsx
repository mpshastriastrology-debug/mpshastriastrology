import "./Services.css";
import Seo from "./Seo";
import FaqSection from "./FaqSection";
import Reveal from "./Reveal";
import { SERVICES_FAQS } from "../seo/faqData";

export default function Services() {
  const services = [
    {
      title: "Vastu Consultation",
      desc: "Complete residential and commercial vastu guidance.",
    },
    {
      title: "Horoscope Reading",
      desc: "Personalized birth chart analysis and predictions.",
    },
    {
      title: "Marriage Consultation",
      desc: "Solutions for marriage delay and compatibility issues.",
    },
    {
      title: "Career Guidance",
      desc: "Career growth, job change and business consultation.",
    },
    {
      title: "Financial Astrology",
      desc: "Guidance for wealth, investment and prosperity.",
    },
    {
      title: "Pooja & Remedies",
      desc: "Personalized poojas and spiritual remedies.",
    },
  ];

  return (
    <>
      <Seo
        title="Astrology & Vastu Services | MP Shastri Astrology Bangalore"
        description="Explore astrology and Vastu services including horoscope reading, marriage consultation, career guidance, financial astrology, and personalized remedies in Bangalore."
        path="/services"
        faqs={SERVICES_FAQS}
      />

      <div className="services-page">
        <Reveal className="services-header" animation="fade-up">
          <h1>Our Services</h1>
          <p>Professional Astrology &amp; Vastu Consultation Services</p>
        </Reveal>

        <div className="services-grid">
          {services.map((item, index) => (
            <Reveal className="service-card" key={item.title} animation="fade-up" delay={index * 80}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Reveal>
          ))}
        </div>

        <FaqSection
          title="Astrology & Vastu Services — Common Questions"
          faqs={SERVICES_FAQS}
          idPrefix="services"
        />
      </div>
    </>
  );
}

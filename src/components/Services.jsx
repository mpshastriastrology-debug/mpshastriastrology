import "./Services.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Vastu Consultation",
      desc: "Complete residential and commercial vastu guidance."
    },
    {
      title: "Horoscope Reading",
      desc: "Personalized birth chart analysis and predictions."
    },
    {
      title: "Marriage Consultation",
      desc: "Solutions for marriage delay and compatibility issues."
    },
    {
      title: "Career Guidance",
      desc: "Career growth, job change and business consultation."
    },
    {
      title: "Financial Astrology",
      desc: "Guidance for wealth, investment and prosperity."
    },
    {
      title: "Pooja & Remedies",
      desc: "Personalized poojas and spiritual remedies."
    }
  ];

  return (
    <>
      <Navbar />

      <div className="services-page">

        <div className="services-header">
          <h1>Our Services</h1>
          <p>
            Professional Astrology & Vastu Consultation Services
          </p>
        </div>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
}
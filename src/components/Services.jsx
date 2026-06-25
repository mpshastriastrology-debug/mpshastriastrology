import "./Services.css";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";


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
      <Helmet>
        <title>Astrology &amp; Vastu Services | MP Shastri Astrology Bangalore</title>
        <meta
          name="description"
          content="Explore astrology and Vastu services including horoscope reading, marriage consultation, career guidance, financial astrology, and personalized remedies in Bangalore."
        />
        <link rel="canonical" href="https://www.mpshastriastrology.com/services" />
        <meta property="og:title" content="Astrology &amp; Vastu Services | MP Shastri Astrology Bangalore" />
        <meta
          property="og:description"
          content="Professional Vedic astrology and Vastu consultation services for career, marriage, wealth, and spiritual remedies."
        />
        <meta property="og:url" content="https://www.mpshastriastrology.com/services" />
        <meta property="og:image" content="https://www.mpshastriastrology.com/mp-shastri-astrology.webp" />
      </Helmet>
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

      
    </>
  );
}
import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';
import '../components/HomeContent.css';
import Seo from '../components/Seo';
import Services1 from '../components/Services1';
import Astrologyservices from '../components/AstrologyServices.jsx';
import { HOME_FAQS } from '../seo/faqData';

function Home() {
  return (
    <div className="homePage">
      <Seo
        title="Best Astrologer in Bangalore | Vedic Astrology & Vastu | MP Shastri"
        description="Consult MP Shastri, a trusted best astrologer in Bangalore, for Vedic astrology, Kundali matching, and Vastu solutions. Book online or in-person today."
        path="/"
        faqs={HOME_FAQS}
      />

      <Hero />
      <Astrologyservices seo={false} showIntro />
      <HomeContent />
      <Services1 />
    </div>
  );
}

export default Home;

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
        title="Best Astrologer in Bangalore - MP Shastri | Vedic Astrology Expert"
        description="Shri MP Shastri offers private Vedic astrology and Vastu consultations in Mahalakshmi Layout, Bangalore. Clear chart analysis and practical remedies—in person or online."
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

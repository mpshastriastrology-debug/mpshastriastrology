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
        title="Vedic Astrologer & Vastu Consultant in Bangalore | MP Shastri"
        description="Consult MP Shastri for authentic Vedic astrology, accurate Kundali matching, and Vastu solutions in Bangalore. Book your online or in-person session today."
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

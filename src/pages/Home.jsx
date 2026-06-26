import Hero from '../components/Hero';
import Seo from '../components/Seo';
import Services1 from '../components/Services1';
import Astrologyservices from '../components/AstrologyServices.jsx';

function Home() {
  return (
    <>
      <Seo
        title="Vedic Astrologer & Vastu Consultant in Bangalore | MP Shastri"
        description="Consult MP Shastri for authentic Vedic astrology, accurate Kundali matching, and Vastu solutions in Bangalore. Book your online or in-person session today."
        path="/"
      />

      <Hero />
      <Astrologyservices seo={false} />
      <Services1 />
    </>
  );
}

export default Home;

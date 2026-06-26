import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './components/About';
import ServicesPage from './components/Services';
import Contact from './components/Contact';
import Astrology from './components/Astrology';
import Vastu from './components/Vastu';
import Face from './components/Face-reading'; 
import Tantra from './components/Tantra'; 
import Scrol from "./Scrol";
import AstrologerInBangalore from './components/astrologer-in-bangalore'; 
import OnlineAstrologer from './components/online-astrologer'; 
import AstrologerInIndia from './components/astrologer-in-india'; 
import VastuExpert from './components/vastu-expert'; 
import Astrologyservices from './components/AstrologyServices.jsx';
import ChatAssistant from './components/ChatAssistant';
import ConsultationPage from './components/ConsultationPage';
import ConsultationHub from './pages/ConsultationHub';
import { CONSULTATION_PATHS } from './consultation/servicesData';
import VedicBackdrop from './components/VedicBackdrop';
import PoojaStrip from './components/PoojaStrip';
import AstrologyBgPattern from './components/AstrologyBgPattern';
import { useScrollAnimations } from "./hooks/useScrollAnimations";

function App() {
  const location = useLocation();
  useScrollAnimations();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: `${location.pathname}${location.search}`,
    });
  }, [location]);

  return (
    <div className="vedicSite">
      <VedicBackdrop />
      <Scrol />
      <Navbar />
      <PoojaStrip />
      <div className="vedicMain">
        <AstrologyBgPattern />
        <Breadcrumbs />

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
                
        {/* Core Pillar Modules */}
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/vastu" element={<Vastu />} />
        <Route path="/face-reading" element={<Face />} />
        <Route path="/tantra" element={<Tantra />} />
        
        {/* Targeted SEO Landing Hubs */}
        <Route path="/astrologer-in-bangalore" element={<AstrologerInBangalore />} />
        <Route path="/online-astrologer" element={<OnlineAstrologer />} />
        <Route path="/astrologer-in-india" element={<AstrologerInIndia />} />
        <Route path="/vastu-expert" element={<VastuExpert />} />
        
        {/* Additional Custom Services */}
        <Route path="/astrologyservices" element={<Astrologyservices />} />
        <Route path="/consultation" element={<ConsultationHub />} />
        {CONSULTATION_PATHS.map((path) => (
          <Route key={path} path={path} element={<ConsultationPage />} />
        ))}
        </Routes>

        <Footer />
      </div>
      <ChatAssistant />
    </div>
  );
}

export default App;

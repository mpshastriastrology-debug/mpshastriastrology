import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import Navbar from './components/Navbar';
import Breadcrumbs from './components/Breadcrumbs';
import Footer from './components/Footer';
import VedicBackdrop from './components/VedicBackdrop';
import PoojaStrip from './components/PoojaStrip';
import AstrologyBgPattern from './components/AstrologyBgPattern';
import Scrol from "./Scrol";
import { CONSULTATION_PATHS } from './consultation/servicesData';
import { useScrollAnimations } from "./hooks/useScrollAnimations";

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./components/About'));
const ServicesPage = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));
const Astrology = lazy(() => import('./components/Astrology'));
const Vastu = lazy(() => import('./components/Vastu'));
const Face = lazy(() => import('./components/Face-reading'));
const Tantra = lazy(() => import('./components/Tantra'));
const AstrologerInBangalore = lazy(() => import('./components/astrologer-in-bangalore'));
const OnlineAstrologer = lazy(() => import('./components/online-astrologer'));
const AstrologerInIndia = lazy(() => import('./components/astrologer-in-india'));
const VastuExpert = lazy(() => import('./components/vastu-expert'));
const Astrologyservices = lazy(() => import('./components/AstrologyServices.jsx'));
const ChatAssistant = lazy(() => import('./components/ChatAssistant'));
const ConsultationPage = lazy(() => import('./components/ConsultationPage'));
const ConsultationHub = lazy(() => import('./pages/ConsultationHub'));

function App() {
  const location = useLocation();
  useScrollAnimations();

  useEffect(() => {
    const path = `${location.pathname}${location.search}`;
    const trackPage = () => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-PV4PLVNGQG", { page_path: path });
      }
    };

    trackPage();
    window.addEventListener("load", trackPage, { once: true });
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

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/astrology" element={<Astrology />} />
            <Route path="/vastu" element={<Vastu />} />
            <Route path="/face-reading" element={<Face />} />
            <Route path="/tantra" element={<Tantra />} />
            <Route path="/astrologer-in-bangalore" element={<AstrologerInBangalore />} />
            <Route path="/online-astrologer" element={<OnlineAstrologer />} />
            <Route path="/astrologer-in-india" element={<AstrologerInIndia />} />
            <Route path="/vastu-expert" element={<VastuExpert />} />
            <Route path="/astrologyservices" element={<Astrologyservices />} />
            <Route path="/consultation" element={<ConsultationHub />} />
            {CONSULTATION_PATHS.map((path) => (
              <Route key={path} path={path} element={<ConsultationPage />} />
            ))}
          </Routes>
        </Suspense>

        <Footer />
      </div>
      <Suspense fallback={null}>
        <ChatAssistant />
      </Suspense>
    </div>
  );
}

export default App;

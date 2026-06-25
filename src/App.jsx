import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import ChatAssistant from "./components/ChatAssistant";
import Scrol from "./Scrol";
import AOS from "aos";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./components/About"));
const ServicesPage = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Astrology = lazy(() => import("./components/Astrology"));
const Vastu = lazy(() => import("./components/Vastu"));
const Face = lazy(() => import("./components/Face-reading"));
const Tantra = lazy(() => import("./components/Tantra"));
const AstrologerInBangalore = lazy(() => import("./components/astrologer-in-bangalore"));
const OnlineAstrologer = lazy(() => import("./components/online-astrologer"));
const AstrologerInIndia = lazy(() => import("./components/astrologer-in-india"));
const VastuExpert = lazy(() => import("./components/vastu-expert"));
const Astrologyservices = lazy(() => import("./components/Astrologyservices"));

function PageLoader() {
  return <div className="min-h-[40vh] bg-cream" aria-hidden="true" />;
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <Scrol />
      <Navbar />
      <Breadcrumbs />

      <Suspense fallback={<PageLoader />}>
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
        </Routes>
      </Suspense>

      <Footer />
      <ChatAssistant />
    </>
  );
}

export default App;

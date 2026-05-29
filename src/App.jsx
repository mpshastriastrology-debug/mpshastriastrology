import { Routes, Route } from 'react-router-dom'
import { useEffect } from "react";
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './components/About'
import ServicesPage from './components/Services'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Astrology from './components/Astrology'
import Vastu from './components/Vastu'
import Face from './components/Face-reading' 
import Tantra from './components/Tantra' 
import AOS from "aos";
import Scrol from "./Scrol";
function App() {

  useEffect(() => {

    AOS.init({

      duration:1200,

      once:true,

      offset:100,

    });

  }, []);
  return (

    <>
 <Scrol />
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<ServicesPage />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

                <Route
          path="/blog"
          element={<Blog />}
        />
                <Route
          path="/astrology"
          element={<Astrology />}
        />

                <Route
          path="/vastu"
          element={<Vastu />}
        />
     

                      <Route
          path="/face-reading"
          element={<Face />}
        />
     
                   <Route
          path="/tantra"
          element={<Tantra />}
        />
 </Routes>
      <Footer />

    </>

  )
}

export default App
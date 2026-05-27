import {
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'

import './Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footerGlow"></div>

      <div className="footerTop">

        {/* ABOUT */}
        <div className="footerBox fadeUp">
          <h2>Mpshastri Atsrology</h2>

          <p>
            Trusted online astrology consultation for
            love, marriage, career and spiritual guidance.
          </p>
        </div>

        {/* LINKS */}
        <div className="footerBox fadeUp delay1">
          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="./Services">Services</a>
          <a href="./About">About</a>
          <a href="./Contact">Contact</a>
        </div>

        {/* SERVICES */}
        <div className="footerBox fadeUp delay2">
          <h3>Services</h3>

          <a href="#">Vedic Astrology</a>
          <a href="#">Family Problem</a>
          <a href="#">Numerology</a>
          <a href="#">Career Guidance</a>
        </div>

        {/* CONTACT */}
        <div className="footerBox fadeUp delay3">
          <h3>Contact</h3>

          <div className="contactItem">
            <Phone size={18} />
            <span>+91 80732 58799</span>
          </div>

          <div className="contactItem">
            <Mail size={18} />
            <span>mpshastriastrology@gmail.com</span>
          </div>

          <div className="contactItem">
            <MapPin size={18} />
            <span>Bangalore, India</span>
          </div>
        </div>

      </div>

      <div className="footerBottom">
        © 2026 Astrology Website. All Rights Reserved.
      </div>

    </footer>
  )
}

export default Footer
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      {/* TOP */}

      <div className="footerTop">

        {/* CONTACT */}

        <div className="footerBox">

          <h3>CONTACT INFO</h3>

          <a href="tel:+918073258799" className="footerItem">
            <FaPhoneAlt />
            <span>CALL +91 80732 58799</span>
          </a>

          <a href="mailto:mpshastri@gmail.com" className="footerItem">
            <FaEnvelope />
            <span>mpshastriastrology@gmail.com</span>
          </a>

          <div className="footerItem">
            <FaMapMarkerAlt />
            <span>
              Mahalakshmi, Bangalore, Karnataka, India
            </span>
          </div>

        </div>

        {/* LINKS */}

        <div className="footerBox">

          <h3>USEFUL LINKS</h3>

          <Link to="/">HOME</Link>

          <Link to="/about">ABOUT</Link>

          <Link to="/astrology">SERVICES</Link>

          <Link to="/contact">CONTACT</Link>

        </div>

        {/* SERVICES */}

        <div className="footerBox">

          <h3>SPECIALITIES</h3>

          <Link to="/astrology">ASTROLOGY</Link>

          <Link to="/vastu">VASTU CONSULTATION</Link>

          <Link to="/Face-reading">FACE READING</Link>

          <Link to="/tantra">TANTRA</Link>

        </div>

        {/* IMPORTANT */}

        <div className="footerBox">

          <h3>IMPORTANT</h3>

          <Link to="/astrologer-in-bangalore">BEST ASTROLOGER IN BANGALORE</Link>

          <Link to="/astrologer-in-india">BEST ASTROLOGER IN INDIA</Link>

          <Link to="/online-astrologer">ONLINE ASTROLOGY</Link>

          <Link to="/vastu-expert">VASTHU EXPERT</Link>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footerBottom">

        {/* LOGO */}

        <div className="footerLogo">

          <h2>MP Shastri Astrology</h2>

        </div>

        {/* COPYRIGHT */}

       <p>
  Copyright © {new Date().getFullYear()} MP Shastri Astrology.
  All rights reserved.
</p>

        {/* SOCIAL */}

        <div className="socialIcons">

          <a
            href="https://www.facebook.com/share/1Zr42k8BYn/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/manjunatha_bhat_astrologer?igsh=MW95eDR3NnJwc21oaw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@bestastrol?si=ZoeE6TycEIcDMw5w"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/918073258799"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
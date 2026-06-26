import "./Footer.css";
import Reveal from "./Reveal";
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
      <p className="footerBlessing">
        <span>ॐ</span>
        || शान्तिः शान्तिः शान्तिः ||
        <span>ॐ</span>
      </p>
      {/* TOP CONFIGURATION ROW */}
      <div className="footerTop">
        {/* CONTACT DATA MODULE */}
        <Reveal className="footerBox" animation="fade-up" delay={0}>
          <h3>CONTACT INFO</h3>
          <a href="tel:+918073258799" className="footerItem">
            <FaPhoneAlt aria-hidden="true" />
            <span>CALL +91 80732 58799</span>
          </a>

          <a href="mailto:mpshastriastrology@gmail.com" className="footerItem">
            <FaEnvelope aria-hidden="true" />
            <span>mpshastriastrology@gmail.com</span>
          </a>

          <div className="footerItem">
            <FaMapMarkerAlt aria-hidden="true" />
            <span>
              Mahalakshmi, Bangalore, Karnataka, India
            </span>
          </div>
        </Reveal>

        {/* GENERAL PLATFORM LINKS */}
        <Reveal className="footerBox" animation="fade-up" delay={80}>
          <h3>USEFUL LINKS</h3>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/services">SERVICES</Link> {/* Updated from /astrology to point directly to your master hub page */}
          <Link to="/contact">CONTACT</Link>
        </Reveal>

        {/* SPECIALTIES INNER CONTENT CATEGORIES */}
        <Reveal className="footerBox" animation="fade-up" delay={160}>
          <h3>SPECIALITIES</h3>
          <Link to="/astrology">ASTROLOGY</Link>
          <Link to="/vastu">VASTU CONSULTATION</Link>
          <Link to="/face-reading">FACE READING</Link> {/* Fixed casing error from "/Face-reading" to lower case */}
          <Link to="/tantra">TANTRA</Link>
        </Reveal>

        {/* TARGETED SEARCH ENGINES HIGHLIGHT HUBS */}
        <Reveal className="footerBox" animation="fade-up" delay={240}>
          <h3>IMPORTANT</h3>
          <Link to="/astrologer-in-bangalore">BEST ASTROLOGER IN BANGALORE</Link>
          <Link to="/astrologer-in-india">BEST ASTROLOGER IN INDIA</Link>
          <Link to="/online-astrologer">ONLINE ASTROLOGY</Link>
          <Link to="/vastu-expert">VASTU EXPERT</Link>
        </Reveal>
      </div>

      {/* BOTTOM LEGAL AND SOCIAL BAR */}
      <div className="footerBottom">
        {/* LOGO SUBSECTION */}
        <div className="footerLogo">
          <h2>MP Shastri Astrology</h2>
          <p>Vedic Astrology · Vastu · Spiritual Healing</p>
        </div>

        {/* AUTOMATED TIME ZONE STAMP */}
        <p>
          Copyright © {new Date().getFullYear()} MP Shastri Astrology. All rights reserved.
        </p>

        {/* VERIFIED BRAND SOCIAL OUTLETS */}
        <div className="socialIcons">
          <a
            href="https://www.facebook.com/share/1Zr42k8BYn/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit our verified Facebook profile page"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://www.instagram.com/manjunatha_bhat_astrologer?igsh=MW95eDR3NnJwc21oaw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit our official Instagram feed portfolio"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com/@bestastrol?si=ZoeE6TycEIcDMw5w"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit our video counseling collection on YouTube"
          >
            <FaYoutube />
          </a>

          <a
            href="https://wa.me/918073258799"
            target="_blank"
            rel="noreferrer"
            aria-label="Open secure chat panel on WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
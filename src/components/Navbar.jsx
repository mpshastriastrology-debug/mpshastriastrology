import "./Navbar.css";
import { Link } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { CONSULTATION_NAV } from "../consultation/consultationNav";
import OptimizedImage from "./OptimizedImage";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  // Helper function to auto-collapse the drawer when a link is clicked
  const closeMenu = () => setMobileMenu(false);

  return (
    <header className="header">
      {/* LOGO */}
      <Link to="/" className="headerLogo" onClick={closeMenu}>
        <div className="logoCircle">
          <OptimizedImage
            src="/MPShastriLogo.webp"
            alt="MP Shastri Logo"
            widths={[96, 192]}
            sizes="96px"
            width={84}
            height={84}
            loading="eager"
          />
        </div>
        <div className="logoText">
          <h2>MP Shastri</h2>
          <span>Astrology &amp; Vastu</span>
        </div>
      </Link>

      {/* DESKTOP MENU */}
      <nav className="headerMenu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {/* CORE SERVICES DROPDOWN */}
        <div className="dropdown">
          <div className="dropdownTitle">
            Services
            <ChevronDown size={16} />
          </div>
          <div className="dropdownMenu">
            <Link to="/astrology">Astrology</Link>
            <Link to="/vastu">Vastu</Link>
            <Link to="/face-reading">Face Reading</Link>
            <Link to="/tantra">Tantra</Link>
          </div>
        </div>

        {/* CONSULTATION DROPDOWN */}
        <div className="dropdown">
          <div className="dropdownTitle">
            Consultation
            <ChevronDown size={16} />
          </div>
          <div className="dropdownMenu consultationMenu">
            <Link to="/consultation">All Consultations</Link>
            <Link to="/astrologyservices">Astrology Services Directory</Link>
            {CONSULTATION_NAV.map((service) => (
              <Link key={service.path} to={service.path}>
                {service.navLabel}
              </Link>
            ))}
          </div>
        </div>

        {/* SEO TOP TARGETED SERVICES DROPDOWN */}
        <div className="dropdown">
          <div className="dropdownTitle">
            Top Services
            <ChevronDown size={16} />
          </div>
          <div className="dropdownMenu">
            <Link to="/astrologer-in-bangalore">Astrologer in Bangalore</Link>
            <Link to="/astrologer-in-india">Astrologer in India</Link>
            <Link to="/online-astrologer">Online Astrologer</Link>
            <Link to="/vastu-expert">Vastu Expert</Link>
          </div>
        </div>

        <Link to="/contact">Contact</Link>
      </nav>

      {/* CALL BUTTON */}
      <a href="tel:+918073258799" className="headerCall">
        <Phone size={18} />
        +91 80732 58799
      </a>

      {/* MOBILE HAMBURGER BUTTON */}
      <button
        className="mobileMenuBtn"
        onClick={() => setMobileMenu(!mobileMenu)}
        aria-label="Toggle navigation menu"
      >
        {mobileMenu ? <X /> : <Menu />}
      </button>

      {/* MOBILE DRAWER OVERLAY */}
      <div className={mobileMenu ? "mobileMenu showMenu" : "mobileMenu"}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>

        {/* MOBILE SERVICES STACK */}
        <div className="dropdown">
          <div className="dropdownTitle">
            Services
            <ChevronDown size={16} />
          </div>
          <div className="dropdownMenu">
            <Link to="/astrology" onClick={closeMenu}>Astrology</Link>
            <Link to="/vastu" onClick={closeMenu}>Vastu</Link>
            <Link to="/face-reading" onClick={closeMenu}>Face Reading</Link>
            <Link to="/tantra" onClick={closeMenu}>Tantra</Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdownTitle">
            Consultation
            <ChevronDown size={16} />
          </div>
          <div className="dropdownMenu consultationMenu">
            <Link to="/consultation" onClick={closeMenu}>All Consultations</Link>
            <Link to="/astrologyservices" onClick={closeMenu}>Astrology Services Directory</Link>
            {CONSULTATION_NAV.map((service) => (
              <Link key={service.path} to={service.path} onClick={closeMenu}>
                {service.navLabel}
              </Link>
            ))}
          </div>
        </div>

        {/* MOBILE SEO TARGETS STACK */}
        <div className="dropdown">
          <div className="dropdownTitle">
            Top Services
            <ChevronDown size={16} />
          </div>
          <div className="dropdownMenu">
            <Link to="/astrologer-in-bangalore" onClick={closeMenu}>Astrologer in Bangalore</Link>
            <Link to="/astrologer-in-india" onClick={closeMenu}>Astrologer in India</Link>
            <Link to="/online-astrologer" onClick={closeMenu}>Online Astrologer</Link>
            <Link to="/vastu-expert" onClick={closeMenu}>Vastu Expert</Link>
          </div>
        </div>

        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div> {/* <-- Fixed to matching closing div tag here */}
    </header>
  );
}

export default Header;
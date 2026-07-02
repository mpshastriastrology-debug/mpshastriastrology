import "./Navbar.css";
import { Link } from "react-router-dom";
import { Phone, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { CONSULTATION_NAV } from "../consultation/consultationNav";
import { COMPANY_LOGO_SRC, COMPANY_NAME, CONTACT_PAGE_PUBLIC, PHONE_HREF } from "../config/site";
import { NAV_ALTS } from "../seo/imageAlt";
import { mergeQuoraGenerateLeadClick, quoraGenerateLeadClickProps } from "../utils/quoraPixel";
import HeaderSearch from "./HeaderSearch";

const MOBILE_SECTIONS = [
  {
    id: "services",
    label: "Services",
    links: [
      { to: "/astrology", label: "Astrology" },
      { to: "/vastu", label: "Vastu" },
      { to: "/face-reading", label: "Face Reading" },
      { to: "/tantra", label: "Tantra" },
    ],
  },
  {
    id: "consultation",
    label: "Consultation",
    links: [
      { to: "/consultation", label: "All Consultations" },
      { to: "/astrologyservices", label: "Astrology Services Directory" },
      { to: "/quora-consultation", label: "Quora Consultation" },
      ...CONSULTATION_NAV.map((item) => ({ to: item.path, label: item.navLabel })),
    ],
  },
  {
    id: "top",
    label: "Top Services",
    links: [
      { to: "/astrologer-in-bangalore", label: "Astrologer in Bangalore" },
      { to: "/astrologer-in-india", label: "Astrologer in India" },
      { to: "/online-astrologer", label: "Online Astrologer" },
      { to: "/vastu-expert", label: "Vastu Expert" },
    ],
  },
];

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState(null);

  const closeMenu = () => {
    setMobileMenu(false);
    setOpenMobileSection(null);
  };

  const toggleMobileSection = (id) => {
    setOpenMobileSection((current) => (current === id ? null : id));
  };

  return (
    <header className="header">
      <Link to="/" className="headerLogo" onClick={closeMenu}>
        <div className="logoCircle">
          <img
            src={COMPANY_LOGO_SRC}
            alt={NAV_ALTS.logo(COMPANY_NAME)}
            width={62}
            height={62}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="logoText">
          <h2>MP Shastri</h2>
          <span>Astrology &amp; Vastu</span>
        </div>
      </Link>

      <nav className="headerMenu" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <div className="dropdown">
          <div className="dropdownTitle">
            Services
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <div className="dropdownMenu">
            <Link to="/astrology">Astrology</Link>
            <Link to="/vastu">Vastu</Link>
            <Link to="/face-reading">Face Reading</Link>
            <Link to="/tantra">Tantra</Link>
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdownTitle">
            Consultation
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <div className="dropdownMenu consultationMenu">
            <Link to="/consultation">All Consultations</Link>
            <Link to="/astrologyservices">Astrology Services Directory</Link>
            <Link to="/quora-consultation">Quora Consultation</Link>
            {CONSULTATION_NAV.map((service) => (
              <Link key={service.path} to={service.path}>
                {service.navLabel}
              </Link>
            ))}
          </div>
        </div>

        <div className="dropdown">
          <div className="dropdownTitle">
            Top Services
            <ChevronDown size={16} strokeWidth={2} aria-hidden="true" />
          </div>
          <div className="dropdownMenu">
            <Link to="/astrologer-in-bangalore">Astrologer in Bangalore</Link>
            <Link to="/astrologer-in-india">Astrologer in India</Link>
            <Link to="/online-astrologer">Online Astrologer</Link>
            <Link to="/vastu-expert">Vastu Expert</Link>
          </div>
        </div>

        {CONTACT_PAGE_PUBLIC && <Link to="/contact">Contact</Link>}
      </nav>

      <div className="headerToolbar">
        <div className="headerActions">
          <HeaderSearch />
          <a href={PHONE_HREF} className="headerCall" {...quoraGenerateLeadClickProps}>
            <Phone size={18} strokeWidth={2} aria-hidden="true" />
            <span className="headerCallText">+91 80732 58799</span>
          </a>
        </div>

        <div className="headerMobileTools">
          <HeaderSearch className="headerSearchCompact" />
          <a
            href={PHONE_HREF}
            className="headerMobileCall"
            aria-label="Call +91 80732 58799"
            {...quoraGenerateLeadClickProps}
          >
            <Phone size={20} strokeWidth={2} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="mobileMenuBtn"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label={mobileMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenu}
          >
            {mobileMenu ? <X size={26} strokeWidth={2} /> : <Menu size={26} strokeWidth={2} />}
          </button>
        </div>
      </div>

      <div className={mobileMenu ? "mobileMenu showMenu" : "mobileMenu"}>
        <div className="mobileMenuSearch">
          <HeaderSearch className="headerSearchMobile" onNavigate={closeMenu} />
        </div>

        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>

        {MOBILE_SECTIONS.map((section) => (
          <div
            key={section.id}
            className={`mobileDropdown ${openMobileSection === section.id ? "mobileDropdownOpen" : ""}`}
          >
            <button
              type="button"
              className="mobileDropdownTitle"
              onClick={() => toggleMobileSection(section.id)}
              aria-expanded={openMobileSection === section.id}
            >
              {section.label}
              <ChevronDown size={18} strokeWidth={2} aria-hidden="true" />
            </button>
            <div className="mobileDropdownMenu">
              {section.links.map((link) => (
                <Link key={link.to} to={link.to} onClick={closeMenu}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {CONTACT_PAGE_PUBLIC && (
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        )}

        <a
          href={PHONE_HREF}
          className="mobileMenuCall"
          data-quora-lead
          onClick={mergeQuoraGenerateLeadClick(closeMenu)}
        >
          <Phone size={18} strokeWidth={2} aria-hidden="true" />
          Call +91 80732 58799
        </a>
      </div>
    </header>
  );
}

export default Header;

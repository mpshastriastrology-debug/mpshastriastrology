import "./Navbar.css";

import { Link } from "react-router-dom";

import {
  Phone,
  ChevronDown,
  Menu,
  X
} from "lucide-react";

import { useState } from "react";

function Header() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <header className="header">

      {/* LOGO */}

      <Link
        to="/"
        className="headerLogo"
      >

        <div className="logoCircle">

          <img
            src="/MPShastriLogo.webp"
            alt="MP Shastri Logo"
          />

        </div>

        <div className="logoText">

          <h2>MP Shastri</h2>

          <span>Astrology & Vastu</span>

        </div>

      </Link>

      {/* DESKTOP MENU */}

      <nav className="headerMenu">

        <Link to="/">Home</Link>

        <Link to="/about">
          About
        </Link>

        {/* DROPDOWN */}

        <div className="dropdown">

          <div className="dropdownTitle">

            Services

            <ChevronDown size={16} />

          </div>

          <div className="dropdownMenu">

            <Link to="/astrology">
              Astrology
            </Link>

            <Link to="/vastu">
              Vastu
            </Link>

            <Link to="/face-reading">
              Face Reading
            </Link>

            <Link to="/tantra">
              Tantra
            </Link>

          </div>

        </div>

 {/* DROPDOWN */}

        <div className="dropdown">

          <div className="dropdownTitle">

           Top Services

            <ChevronDown size={16} />

          </div>

          <div className="dropdownMenu">

            <Link to="/astrologer-in-bangalore">
              Astrologer in Bangalore
            </Link>

            <Link to="/astrologer-in-india">
              Astrologer in india
            </Link>

            <Link to="/online-astrologer">
              Online Astrologer
            </Link>

            <Link to="/vastu-expert">
              Vastu Expert
            </Link>

          </div>

        </div>

  

        <Link to="/blog">
          Gallery
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </nav>

      {/* CALL BUTTON */}

      <a
        href="tel:+918073258799"
        className="headerCall"
      >

        <Phone size={18} />

        +91 80732 58799

      </a>

      {/* MOBILE BUTTON */}

      <button
        className="mobileMenuBtn"
        onClick={() =>
          setMobileMenu(!mobileMenu)
        }
      >

        {mobileMenu ? <X /> : <Menu />}

      </button>

      {/* MOBILE MENU */}

      <div
        className={
          mobileMenu
            ? "mobileMenu showMenu"
            : "mobileMenu"
        }
      >

        <Link to="/">
          Home
        </Link>

        <Link to="/about">
          About
        </Link>

        {/* DROPDOWN */}

        <div className="dropdown">

          <div className="dropdownTitle">

            Services

            <ChevronDown size={16} />

          </div>

          <div className="dropdownMenu">

            <Link to="/astrology">
              Astrology
            </Link>

            <Link to="/vastu">
              Vastu
            </Link>

            <Link to="/face-reading">
              Face Reading
            </Link>

            <Link to="/tantra">
              Tantra
            </Link>

          </div>

        </div>

 <div className="dropdown">

          <div className="dropdownTitle">

            Top Services

            <ChevronDown size={16} />

          </div>

          <div className="dropdownMenu">

            <Link to="/astrologer-in-bangalore">
              Astrologer in Bangalore
            </Link>

            <Link to="/astrologer-in-india">
              Astrologer in india
            </Link>

            <Link to="/online-astrologer">
              Online Astrologer
            </Link>

            <Link to="/vastu-expert">
              Vastu Expert
            </Link>

          </div>

        </div>
        <Link to="/blog">
          Gallery
        </Link>


        <Link to="/contact">
          Contact
        </Link>

      </div>

    </header>
  );
}

export default Header;
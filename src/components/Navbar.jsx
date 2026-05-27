import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/" className="logo">
        Mpshastri Astrology
      </Link>

      {/* DESKTOP MENU */}
      <ul className="navLinks">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>


        <li>
          <Link to="/Contact">Contact</Link>
        </li>

      </ul>

      {/* BOOK BUTTON */}
      <Link to="/contact">
        <button className="bookBtn">
          Book Now
        </button>
      </Link>

      {/* MOBILE MENU ICON */}
      <div
        className="menuIcon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Menu />
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="mobileMenu">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>


          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            <button className="mobileBookBtn">
              Book Now
            </button>
          </Link>

        </div>

      )}

    </nav>
  )
}

export default Navbar
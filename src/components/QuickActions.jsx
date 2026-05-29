import { Link } from 'react-router-dom'

import './QuickServices.css'

import {
  MessageCircle,
  PhoneCall,
  Video,
  Flame
} from 'lucide-react'

function QuickServices() {

  return (

    <section className="quickServices">

      {/* CHAT */}

      <a
        href="https://wa.me/918073258799"
        target="_blank"
        rel="noreferrer"
        className="quickCard"
      >

        <div className="quickIcon chatBg">

          <MessageCircle size={34} />

        </div>

        <h3>
          Chat with Astrologer
        </h3>

        <p>
          Instant WhatsApp consultation
        </p>

      </a>

      {/* CALL */}

      <a
        href="tel:+918073258799"
        className="quickCard"
      >

        <div className="quickIcon callBg">

          <PhoneCall size={34} />

        </div>

        <h3>
          Talk to Astrologer
        </h3>

        <p>
          Direct phone consultation
        </p>

      </a>

      {/* POOJA */}

      <Link
        to="/contact"
        className="quickCard"
      >

        <div className="quickIcon poojaBg">

          <Flame size={34} />

        </div>

        <h3>
          Book Pooja
        </h3>

        <p>
          Personalized spiritual rituals
        </p>

      </Link>

      {/* VIDEO */}

      <a
        href="https://wa.me/918073258799"
        target="_blank"
        rel="noreferrer"
        className="quickCard"
      >

        <div className="quickIcon videoBg">

          <Video size={34} />

        </div>

        <h3>
          Video Consultation
        </h3>

        <p>
          Online video astrology guidance
        </p>

      </a>

    </section>

  )
}

export default QuickServices
import './Contact.css'

function Contact() {
  return (

    <section className="contactSection">

      {/* TOP */}

      <div className="contactHeading">

        <span className="contactTag">
          Contact Us
        </span>

        <h1>
          Connect With
          Mpshastri Astrology
        </h1>

        <p>
          Get expert astrology consultation and spiritual
          guidance for love, marriage, career and life problems.
        </p>

      </div>

      {/* CONTAINER */}

      <div className="contactContainer">

        {/* LEFT INFO */}

        <div className="contactInfo">

          <div className="infoCard">

            <div className="infoIcon">
              📞
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+91 80732 58799</p>
            </div>

          </div>

          <div className="infoCard">

            <div className="infoIcon">
              ✉️
            </div>

            <div>
              <h3>Email</h3>
              <p>mpshastriastrology@gmail.com</p>
            </div>

          </div>

          <div className="infoCard">

            <div className="infoIcon">
              📍
            </div>

            <div>
              <h3>Location</h3>
              <p>Bangalore, India</p>
            </div>

          </div>

          <div className="infoCard">

            <div className="infoIcon">
              🕒
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>9:00 AM - 9:00 PM</p>
            </div>

          </div>

        </div>

        {/* FORM */}

        <form className="contactForm">

          <h2>
            Book Consultation
          </h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="tel"
            placeholder="Phone Number"
          />

          <select>

            <option>
              Select Service
            </option>

            <option>
              Astrology Reading
            </option>

            <option>
              Vastu Consultation
            </option>

            <option>
              Numerology
            </option>

            <option>
              Horoscope Analysis
            </option>

          </select>

          <textarea
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>

  )
}

export default Contact
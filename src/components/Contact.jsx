import './Contact.css'
import {

  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope

} from "react-icons/fa";
function Contact() {
  return (

    <section className="contactSection">

      {/* TOP */}


      {/* CONTAINER */}


      {/* APPOINTMENT SECTION */}

<section className="appointmentSection">

  <div className="appointmentLeft">

    <p>
      ✦ BOOK YOUR APPOINTMENT
    </p>

    <h2>
      Start Your Spiritual
      Journey Today
    </h2>

    <span>
      Connect with MP Shastri Astrology for
      accurate astrology predictions, vastu
      consultation and spiritual healing solutions.
    </span>

    <div className="appointmentFeatures">

      <div className="appointmentItem">
        ✔ Personal Consultation
      </div>

      <div className="appointmentItem">
        ✔ 100% Confidential
      </div>

      <div className="appointmentItem">
        ✔ Online Video Call Available
      </div>

      <div className="appointmentItem">
        ✔ Instant WhatsApp Support
      </div>

    </div>

  </div>

  <div className="appointmentRight">

    <form className="appointmentForm">

      <input
        type="text"
        placeholder="Your Name"
      />

      <input
        type="tel"
        placeholder="Phone Number"
      />

      <input
        type="email"
        placeholder="Email Address"
      />

      <select>

        <option>
          Select Service
        </option>

        <option>
          Astrology
        </option>

        <option>
          Vastu Consultation
        </option>

        <option>
          Face Reading
        </option>

        <option>
          Tantra
        </option>

      </select>

      <textarea
        placeholder="Describe Your Problem"
      ></textarea>

      <button type="submit">
        Book Consultation
      </button>

    </form>

  </div>

</section>

{/* CONTACT INFO + MAP */}

<section className="contactLocation">

  <div className="contactContainer">

    {/* LEFT */}

    <div className="contactInfo">

      <p className="contactTag">
        ✦ CONTACT DETAILS
      </p>

      <h2>
        Visit MP Shastri Astrology Center
      </h2>

      <p className="contactText">
        Get personalized astrology consultation,
        vastu guidance, face reading and tantra
        solutions from experienced spiritual experts.
      </p>

      <div className="contactDetails">

        <div className="contactItem">

          <span>
  <FaMapMarkerAlt />
</span>

          <div>

            <h4>Office Address</h4>

            <p>
              Mahalakshmi Layout, Bangalore, Karnataka, India
            </p>

          </div>

        </div>

        <div className="contactItem">

          <span>
  <FaPhoneAlt />
</span>

          <div>

            <h4>Call Us</h4>

            <a href="tel:+918073258799">
              +91 80732 58799
            </a>

          </div>

        </div>

        <div className="contactItem">

         <span>
  <FaEnvelope />
</span>

          <div>

            <h4>Email</h4>

            <a href="mailto:mpshastriastrology@gmail.com">
              mpshastriastrology@gmail.com
            </a>

          </div>

        </div>

      </div>

    </div>

    {/* RIGHT MAP */}

    <div className="mapArea">

      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.3704405499357!2d77.54223207507717!3d13.012065987306977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAwJzQzLjQiTiA3N8KwMzInNDEuMyJF!5e0!3m2!1sen!2sin!4v1780058308354!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width="100%"
        height="100%"
        style={{ border:0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>

    </div>

  </div>

</section>
    </section>

  )
}

export default Contact
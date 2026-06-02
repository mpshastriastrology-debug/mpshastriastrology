import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://your-backend-url.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        alert("Appointment booked successfully!");
        setForm({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: ""
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
    }
  };

  return (
    <section className="contactSection">

      {/* APPOINTMENT SECTION */}
      <section className="appointmentSection">

        <div className="appointmentLeft">
          <p>✦ BOOK YOUR APPOINTMENT</p>

          <h2>
            Start Your Spiritual Journey Today
          </h2>

          <span>
            Connect with MP Shastri Astrology for accurate predictions, vastu consultation and spiritual healing solutions.
          </span>

          <div className="appointmentFeatures">
            <div className="appointmentItem">✔ Personal Consultation</div>
            <div className="appointmentItem">✔ 100% Confidential</div>
            <div className="appointmentItem">✔ Online Video Call</div>
            <div className="appointmentItem">✔ Instant WhatsApp Support</div>
          </div>
        </div>

        <div className="appointmentRight">

          <form className="appointmentForm" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              <option value="Astrology">Astrology</option>
              <option value="Vastu">Vastu Consultation</option>
              <option value="Face Reading">Face Reading</option>
              <option value="Tantra">Tantra</option>
            </select>

            <textarea
              name="message"
              placeholder="Describe Your Problem"
              value={form.message}
              onChange={handleChange}
              required
            />

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

            <p className="contactTag">✦ CONTACT DETAILS</p>

            <h2>Visit Our Astrology Center</h2>

            <p className="contactText">
              Get astrology, vastu, face reading and tantra guidance from experienced experts.
            </p>

            <div className="contactDetails">

              <div className="contactItem">
                <FaMapMarkerAlt />
                <div>
                  <h4>Office Address</h4>
                  <p>Mahalakshmi Layout, Bangalore</p>
                </div>
              </div>

              <div className="contactItem">
                <FaPhoneAlt />
                <div>
                  <h4>Call Us</h4>
                  <a href="tel:+918073258799">+91 80732 58799</a>
                </div>
              </div>

              <div className="contactItem">
                <FaEnvelope />
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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.3704405499357!2d77.54223207507717!3d13.012065987306977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

        </div>

      </section>

    </section>
  );
}

export default Contact;
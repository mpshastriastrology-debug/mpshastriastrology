import "./Contact.css";
import "./Services1.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";
import Seo from "./Seo";
import FaqSection from "./FaqSection";
import Reveal from "./Reveal";
import { CONTACT_FAQS } from "../seo/faqData";
import { initGoogleAds } from "../utils/analytics";
import { buildBookingWhatsAppUrl } from "../utils/whatsapp";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    initGoogleAds();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappUrl = buildBookingWhatsAppUrl(form);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setForm({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  return (
    <section className="contactPage">
      <Seo
        title="Book Astrology & Vastu Consultation in Bangalore | MP Shastri"
        description="Book an in-person or online astrology and Vastu consultation with Shri MP Shastri in Bangalore. Call +91 80732 58799 or send your request on WhatsApp."
        path="/contact"
        faqs={CONTACT_FAQS}
      />
      <section className="appointmentSection">
        <Reveal className="appointmentLeft" animation="fade-right">
          <p>✦ BOOK YOUR APPOINTMENT</p>
          <h1>Book Astrology &amp; Vastu Consultation in Bangalore</h1>
          <span className="appointmentSubtitle">
            Start your spiritual journey today — connect with Shri MP Shastri for horoscope assessments, Vastu audits, and personalized remedies.
          </span>

          <div className="appointmentFeatures">
            <div className="appointmentItem">✔ Private In-Person Sessions</div>
            <div className="appointmentItem">✔ 100% Confidential Consultations</div>
            <div className="appointmentItem">✔ High-Definition Remote Video Calls</div>
            <div className="appointmentItem">✔ Instant WhatsApp Booking Requests</div>
          </div>
        </Reveal>

        <Reveal className="appointmentRight" animation="fade-left">
          <form className="appointmentForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              aria-label="Your Name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              aria-label="Phone Number"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              aria-label="Email Address"
              placeholder="Email Address (optional)"
              value={form.email}
              onChange={handleChange}
            />

            <select
              name="service"
              aria-label="Select Consultation Service"
              value={form.service}
              onChange={handleChange}
              required
            >
              <option value="">Select Service Specialty</option>
              <option value="Astrology">Vedic Astrology &amp; Horoscope Reading</option>
              <option value="Vastu">Residential &amp; Commercial Vastu Shastra</option>
              <option value="Face Reading">Physiognomy &amp; Face Reading Analysis</option>
              <option value="Tantra">Spiritual Healing &amp; Aura Cleansing</option>
            </select>

            <textarea
              name="message"
              aria-label="Describe Your Current Problem"
              placeholder="Briefly describe your current issue (e.g., career timing, home layout concerns, compatibility)..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="whatsappSubmitBtn">
              <FaWhatsapp aria-hidden="true" />
              Send Booking Request on WhatsApp
            </button>
          </form>
        </Reveal>
      </section>

      <section className="contactLocation">
        <div className="contactContainer">
          <Reveal className="contactInfo" animation="fade-right">
            <p className="contactTag">✦ OFFICE HEADQUARTERS</p>
            <h2>Vedic Consultation Center in Bangalore</h2>
            <h3>Visit Shri MP Shastri</h3>
            <p className="contactText">
              Get clear, calculative resolutions for life transitions directly from an expert advisor.
            </p>

            <div className="contactDetails">
              <div className="contactItem">
                <FaMapMarkerAlt aria-hidden="true" />
                <div>
                  <h3>Office Address</h3>
                  <p>
                    607, 2nd Cross Rd, opp. Swimming Pool, Mahalakshmipuram Layout, Mahalakshmi Layout, Bengaluru, Karnataka 560086
                  </p>
                </div>
              </div>

              <div className="contactItem">
                <FaPhoneAlt aria-hidden="true" />
                <div>
                  <h3>Direct Phone Line</h3>
                  <a href="tel:+918073258799" className="contactLink">+91 80732 58799</a>
                </div>
              </div>

              <div className="contactItem">
                <FaEnvelope aria-hidden="true" />
                <div>
                  <h3>WhatsApp &amp; Email</h3>
                  <a href="https://wa.me/918073258799" className="contactLink" target="_blank" rel="noreferrer">
                    WhatsApp +91 80732 58799
                  </a>
                  <br />
                  <a href="mailto:mpshastriastrology@gmail.com" className="contactLink">
                    mpshastriastrology@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mapArea" animation="fade-left">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3732985874217!2d77.5447832!3d13.011883699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16aa14d0ea09c97%3A0xa9986dcd989e9ba4!2sMP%20Shastri%20Astrology!5e0!3m2!1sen!2sin!4v1781862611848!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location of MP Shastri Astrology Office"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection
        title="Booking & Office — Common Questions"
        faqs={CONTACT_FAQS}
        idPrefix="contact-faq"
      />
    </section>
  );
}

export default Contact;

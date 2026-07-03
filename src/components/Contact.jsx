import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import Seo from "./Seo";
import FaqSection from "./FaqSection";
import Reveal from "./Reveal";
import { CONTACT_FAQS } from "../seo/faqData";
import { LOCALITY_SEO_PARAGRAPH } from "../seo/localAreas";
import {
  CONTACT_LEAD_PARAGRAPH,
  CONTACT_SEO_DESCRIPTION,
  CONTACT_SEO_TITLE,
} from "../seo/contactSeo";
import { CONTACT_PAGE_PUBLIC, PHONE_HREF, WHATSAPP_BOOKING_URL } from "../config/site";
import { quoraGenerateLeadClickProps } from "../utils/quoraPixel";

function Contact() {
  return (
    <section className="contactPage">
      <Seo
        title={CONTACT_SEO_TITLE}
        description={CONTACT_SEO_DESCRIPTION}
        path="/contact"
        breadcrumbLabel="Contact"
        faqs={CONTACT_FAQS}
        noindex={!CONTACT_PAGE_PUBLIC}
      />

      <section className="contactLocation">
        <div className="contactContainer">
          <Reveal className="contactInfo" animation="fade-right">
            <p className="contactTag">✦ OFFICE HEADQUARTERS</p>
            <h1>Vedic Consultation Center in Bengaluru</h1>
            <h2>Visit Shri MP Shastri — Mahalakshmi Layout, Bangalore</h2>
            <p className="contactText">
              {CONTACT_LEAD_PARAGRAPH}
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
                  <a href={PHONE_HREF} className="contactLink" {...quoraGenerateLeadClickProps}>
                    +91 80732 58799
                  </a>
                </div>
              </div>

              <div className="contactItem">
                <FaEnvelope aria-hidden="true" />
                <div>
                  <h3>WhatsApp &amp; Email</h3>
                  <a
                    href={WHATSAPP_BOOKING_URL}
                    className="contactLink"
                    target="_blank"
                    rel="noreferrer"
                    {...quoraGenerateLeadClickProps}
                  >
                    WhatsApp +91 80732 58799
                  </a>
                  <br />
                  <a
                    href="mailto:mpshastriastrology@gmail.com"
                    className="contactLink"
                    {...quoraGenerateLeadClickProps}
                  >
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
                title="Google Map Location of MP Shastri Astrology Office in Bengaluru"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="contactLocalityBlock" animation="fade-up">
          <p className="contactText contactLocality">{LOCALITY_SEO_PARAGRAPH}</p>
        </Reveal>

        <Reveal className="contactCtaSection" animation="fade-up">
          <div className="contactQuickActions">
            <a
              href={WHATSAPP_BOOKING_URL}
              className="contactWhatsappBtn"
              target="_blank"
              rel="noreferrer"
              {...quoraGenerateLeadClickProps}
            >
              <FaWhatsapp aria-hidden="true" />
              WhatsApp Book Consultation
            </a>
            <a href={PHONE_HREF} className="contactCallBtn" {...quoraGenerateLeadClickProps}>
              <Phone size={20} strokeWidth={2} aria-hidden="true" />
              Call +91 80732 58799
            </a>
          </div>
        </Reveal>
      </section>

      <FaqSection
        title="Office Location & Booking — Common Questions"
        faqs={CONTACT_FAQS}
        idPrefix="contact-faq"
      />
    </section>
  );
}

export default Contact;

import { useLocation } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { PHONE_HREF, WHATSAPP_BOOKING_URL } from "../config/site";
import { quoraGenerateLeadClickProps } from "../utils/quoraPixel";
import "./FloatingContactActions.css";

export default function FloatingContactActions() {
  const { pathname } = useLocation();
  const aboveQuoraSticky = pathname === "/quora-consultation";

  return (
    <div
      className={`floatingContactActions${aboveQuoraSticky ? " floatingContactActions--aboveSticky" : ""}`}
      aria-label="Quick contact actions"
    >
      <a
        href={PHONE_HREF}
        className="floatingContactAction floatingContactActionCall"
        aria-label="Call +91 80732 58799"
        {...quoraGenerateLeadClickProps}
      >
        <FaPhoneAlt aria-hidden="true" />
      </a>

      <a
        href={WHATSAPP_BOOKING_URL}
        className="floatingContactAction floatingContactActionWhatsApp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        {...quoraGenerateLeadClickProps}
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </div>
  );
}

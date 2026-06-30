/**
 * Quora Ads Pixel — https://www.quora.com/business/troubleshooting/pixel
 * Set VITE_QUORA_PIXEL_ID in .env (from Quora Events Manager).
 */
const QUORA_PIXEL_ID = import.meta.env.VITE_QUORA_PIXEL_ID || "";

let quoraLoaded = false;
let quoraQueue = [];

function isEnabled() {
  return Boolean(QUORA_PIXEL_ID);
}

function flushQueue() {
  if (typeof window.qp !== "function") return;
  quoraQueue.forEach((args) => window.qp(...args));
  quoraQueue = [];
}

function qpCall(...args) {
  if (typeof window.qp === "function") {
    window.qp(...args);
  } else {
    quoraQueue.push(args);
  }
}

export function initQuoraPixel() {
  if (!isEnabled() || quoraLoaded) return;
  quoraLoaded = true;

  window.qp =
    window.qp ||
    function (...args) {
      (window.qp.q = window.qp.q || []).push(args);
    };

  const script = document.createElement("script");
  script.src = "https://a.quora.com/qevents.js";
  script.async = true;
  script.onload = () => {
    qpCall("init", QUORA_PIXEL_ID);
    flushQueue();
  };
  document.head.appendChild(script);
}

/** SPA page view — Quora standard ViewContent event */
export function trackQuoraPageView(path) {
  if (!isEnabled()) return;
  qpCall("track", "ViewContent", {
    custom_properties: {
      page_path: path,
    },
  });
}

/** Lead / contact form submission */
export function trackQuoraLead(details = {}) {
  if (!isEnabled()) return;
  qpCall("track", "GenerateLead", {
    custom_properties: {
      event_type: "FormSubmit",
      ...details,
    },
  });
}

/** WhatsApp link click */
export function trackQuoraWhatsAppClick(href = "") {
  if (!isEnabled()) return;
  qpCall("track", "Generic", {
    custom_properties: {
      event_type: "WhatsAppClick",
      href,
    },
  });
}

/** CTA / button click */
export function trackQuoraButtonClick(label = "", details = {}) {
  if (!isEnabled()) return;
  qpCall("track", "Generic", {
    custom_properties: {
      event_type: "ButtonClick",
      label,
      ...details,
    },
  });
}

const CTA_SELECTOR = [
  "a.headerCall",
  "a.quoraBtnPrimary",
  "a.quoraBtnSecondary",
  "a.quoraBtnOutline",
  "a.quoraStickyCall",
  "a.quoraStickyWhatsapp",
  "a.callNowBtn",
  "a.whatsappNowBtn",
  "a.consultationBtnPrimary",
  "a.consultationBtnSecondary",
  "a.astroBtn",
  "a.heroPrimaryBtn",
  "a.onlineAstrologyCallBtn",
  "a.onlineAstrologyWhatsappBtn",
  "a.bangaloreCallBtn",
  "a.bangaloreWhatsappBtn",
  "button[type='submit']:not(.headerSearchPanel button)",
].join(", ");

function getClickLabel(element) {
  if (!element) return "";
  return (
    element.getAttribute("aria-label") ||
    element.textContent?.trim().slice(0, 80) ||
    element.className ||
    "click"
  );
}

export function setupQuoraClickTracking() {
  if (!isEnabled()) return;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const whatsappLink = target.closest('a[href*="wa.me"]');
      if (whatsappLink instanceof HTMLAnchorElement) {
        trackQuoraWhatsAppClick(whatsappLink.href);
        return;
      }

      const mailLink = target.closest('a[href^="mailto:"]');
      if (mailLink instanceof HTMLAnchorElement) {
        trackQuoraLead({ source: "email_click", href: mailLink.href });
        return;
      }

      const phoneLink = target.closest('a[href^="tel:"]');
      if (phoneLink instanceof HTMLAnchorElement) {
        trackQuoraButtonClick(getClickLabel(phoneLink), {
          action: "phone_click",
          href: phoneLink.href,
        });
        return;
      }

      const cta = target.closest(CTA_SELECTOR);
      if (cta) {
        trackQuoraButtonClick(getClickLabel(cta), {
          tag: cta.tagName.toLowerCase(),
          href: cta instanceof HTMLAnchorElement ? cta.href : undefined,
        });
      }
    },
    { capture: true }
  );

  document.addEventListener(
    "submit",
    (event) => {
      const form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      if (form.classList.contains("headerSearchPanel")) return;

      trackQuoraLead({
        source: "form_submit",
        form_id: form.id || form.getAttribute("name") || "contact",
      });
    },
    { capture: true }
  );
}

export function isQuoraPixelEnabled() {
  return isEnabled();
}

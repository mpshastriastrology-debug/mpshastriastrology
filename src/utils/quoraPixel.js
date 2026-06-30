/**
 * Quora Ads Pixel — official helper from Quora Events Manager.
 * Override with VITE_QUORA_PIXEL_ID in .env if needed.
 */
import { QUORA_LEAD_VALUE } from "../config/site.js";

export const QUORA_PIXEL_ID =
  import.meta.env.VITE_QUORA_PIXEL_ID || "8abc6a1e8c53473880236b30426f9798";

let quoraLoaded = false;
let quoraQueue = [];
let lastTrackedPath = null;

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

/** Quora official loader stub (DO NOT MODIFY structure) */
function installQuoraStub() {
  if (window.qp) return;

  const qp = function (...args) {
    qp.qp ? qp.qp.apply(qp, args) : qp.queue.push(args);
  };
  qp.queue = [];
  window.qp = qp;
}

function extractEmailFromForm(form) {
  const input = form.querySelector(
    'input[type="email"], input[name="email"], input[name*="email" i]'
  );
  return input instanceof HTMLInputElement ? input.value.trim() : "";
}

function extractEmailFromMailto(href) {
  if (!href.startsWith("mailto:")) return "";
  return href.replace(/^mailto:/i, "").split("?")[0].trim();
}

/** Re-init with hashed email when Quora advanced matching is available */
export function identifyQuoraEmail(email) {
  if (!isEnabled() || !email) return;
  qpCall("init", QUORA_PIXEL_ID, { email });
}

export function initQuoraPixel() {
  if (!isEnabled() || quoraLoaded) return;
  quoraLoaded = true;

  installQuoraStub();

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://a.quora.com/qevents.js";
  script.onload = () => {
    qpCall("init", QUORA_PIXEL_ID);
    qpCall("track", "ViewContent");
    lastTrackedPath = `${window.location.pathname}${window.location.search}`;
    flushQueue();
  };
  document.head.appendChild(script);
}

/** SPA page view — Quora ViewContent */
export function trackQuoraPageView(path) {
  if (!isEnabled()) return;
  if (path === lastTrackedPath) return;
  lastTrackedPath = path;

  qpCall("track", "ViewContent", {
    custom_properties: { page_path: path },
  });
}

/** Official Quora lead event — qp('track', 'GenerateLead', { value: 4.95 }) */
export function trackGenerateLead(email = "") {
  if (!isEnabled()) return;
  if (email) identifyQuoraEmail(email);

  if (QUORA_LEAD_VALUE > 0) {
    qpCall("track", "GenerateLead", { value: QUORA_LEAD_VALUE });
  } else {
    qpCall("track", "GenerateLead");
  }
}

/** Lead / contact form submission */
export function trackQuoraLead(_details = {}, email = "") {
  trackGenerateLead(email);
}

/** WhatsApp link click — counts as GenerateLead for Quora ad optimization */
export function trackQuoraWhatsAppClick(_href = "") {
  trackGenerateLead();
}

/** Quora Events Manager — qp('track', 'GenerateLead') on inline button/link click */
export function onQuoraGenerateLeadClick() {
  trackGenerateLead();
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

const LEAD_CTA_SELECTOR = [
  "a.headerCall",
  "a.quoraBtnPrimary",
  "a.quoraBtnSecondary",
  "a.quoraStickyCall",
  "a.quoraStickyWhatsapp",
  "a.callNowBtn",
  "a.whatsappNowBtn",
  "a.consultationBtnPrimary",
  "a.astroBtn",
  "a.heroPrimaryBtn",
  "a.onlineAstrologyCallBtn",
  "a.onlineAstrologyWhatsappBtn",
  "a.bangaloreCallBtn",
  "a.bangaloreWhatsappBtn",
  "a.contactWhatsappBtn",
  "a.contactCallBtn",
].join(", ");

const BUTTON_CTA_SELECTOR = [
  "a.quoraBtnOutline",
  "a.consultationBtnSecondary",
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

      if (target.closest("[data-quora-lead]")) return;

      const whatsappLink = target.closest('a[href*="wa.me"]');
      if (whatsappLink instanceof HTMLAnchorElement) {
        trackQuoraWhatsAppClick(whatsappLink.href);
        return;
      }

      const mailLink = target.closest('a[href^="mailto:"]');
      if (mailLink instanceof HTMLAnchorElement) {
        const email = extractEmailFromMailto(mailLink.href);
        trackQuoraLead({ source: "email_click", href: mailLink.href }, email);
        return;
      }

      const phoneLink = target.closest('a[href^="tel:"]');
      if (phoneLink instanceof HTMLAnchorElement) {
        if (phoneLink.closest(LEAD_CTA_SELECTOR) || phoneLink.classList.contains("contactLink")) {
          trackGenerateLead();
        } else {
          trackQuoraButtonClick(getClickLabel(phoneLink), {
            action: "phone_click",
            href: phoneLink.href,
          });
        }
        return;
      }

      const leadCta = target.closest(LEAD_CTA_SELECTOR);
      if (leadCta) {
        trackGenerateLead();
        return;
      }

      const cta = target.closest(BUTTON_CTA_SELECTOR);
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

      const email = extractEmailFromForm(form);
      trackQuoraLead(
        {
          source: "form_submit",
          form_id: form.id || form.getAttribute("name") || "contact",
        },
        email
      );
    },
    { capture: true }
  );
}

export function isQuoraPixelEnabled() {
  return isEnabled();
}

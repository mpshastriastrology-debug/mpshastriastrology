import { initQuoraPixel, setupQuoraClickTracking } from "./quoraPixel.js";

const GA4_ID = "G-PV4PLVNGQG";
const GOOGLE_ADS_ID = "AW-18222440720";

let analyticsLoaded = false;
let analyticsQueue = [];

function flushQueue() {
  if (typeof window.gtag !== "function") return;
  analyticsQueue.forEach((args) => window.gtag(...args));
  analyticsQueue = [];
}

/** Google tag (gtag.js) — GA4 + Google Ads conversion tracking */
export function initAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
  script.onload = () => {
    gtag("js", new Date());
    gtag("config", GOOGLE_ADS_ID);
    gtag("config", GA4_ID);
    flushQueue();
  };
  document.head.appendChild(script);
}

export function trackPageView(path) {
  const args = ["config", GA4_ID, { page_path: path }];
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    analyticsQueue.push(args);
  }
}

/** Google Ads — gtag('config', 'AW-18222440720') */
export function initGoogleAds() {
  const args = ["config", GOOGLE_ADS_ID];
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    analyticsQueue.push(args);
  }
}

export function setupDeferredAnalytics() {
  if (analyticsLoaded) return;

  const load = () => {
    initAnalytics();
    initQuoraPixel();
    setupQuoraClickTracking();
  };
  const events = ["pointerdown", "keydown", "scroll", "touchstart"];
  const onInteraction = () => {
    load();
    events.forEach((event) =>
      window.removeEventListener(event, onInteraction, { capture: true })
    );
  };

  events.forEach((event) =>
    window.addEventListener(event, onInteraction, { capture: true, passive: true })
  );

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(load, { timeout: 5000 });
  } else {
    window.setTimeout(load, 5000);
  }
}

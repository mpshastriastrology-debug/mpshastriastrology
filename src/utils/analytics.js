let analyticsLoaded = false;
let analyticsQueue = [];

function flushQueue() {
  if (typeof window.gtag !== "function") return;
  analyticsQueue.forEach((args) => window.gtag(...args));
  analyticsQueue = [];
}

export function initAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  const script = document.createElement("script");
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-PV4PLVNGQG";
  script.async = true;
  script.onload = () => {
    gtag("js", new Date());
    gtag("config", "G-PV4PLVNGQG");
    flushQueue();
  };
  document.head.appendChild(script);
}

export function trackPageView(path) {
  const args = ["config", "G-PV4PLVNGQG", { page_path: path }];
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    analyticsQueue.push(args);
  }
}

export function initGoogleAds() {
  const args = ["config", "AW-18222440720"];
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    analyticsQueue.push(args);
  }
}

export function setupDeferredAnalytics() {
  if (analyticsLoaded) return;

  const load = () => initAnalytics();
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

export const SITE_URL = "https://www.mpshastriastrology.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const FAQ_ID = `${SITE_URL}/#faq`;

export const ROUTE_LABELS = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/contact": "Contact",
  "/astrology": "Vedic Astrology",
  "/vastu": "Vastu Shastra",
  "/face-reading": "Face Reading",
  "/tantra": "Spiritual Healing",
  "/astrologer-in-bangalore": "Astrologer in Bangalore",
  "/online-astrologer": "Online Astrologer",
  "/astrologer-in-india": "Astrologer in India",
  "/vastu-expert": "Vastu Expert",
  "/Astrologyservices": "Astrology Services",
};

const organizationSchema = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "MP Shastri Astrology",
  url: SITE_URL,
  logo: `${SITE_URL}/MPShastriLogo.webp`,
  image: `${SITE_URL}/mp-shastri-astrology.webp`,
  telephone: "+918073258799",
  email: "mpshastriastrology@gmail.com",
  sameAs: [
    "https://www.facebook.com/share/1Zr42k8BYn/?mibextid=wwXIfr",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+918073258799",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["English", "Kannada", "Hindi"],
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "MP Shastri Astrology",
  description:
    "Vedic astrology, Vastu Shastra, and spiritual consultation in Bangalore by Shri MP Shastri.",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-IN",
};

const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": LOCAL_BUSINESS_ID,
  name: "MP Shastri Astrology",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/mp-shastri-astrology.webp`,
  logo: `${SITE_URL}/MPShastriLogo.webp`,
  telephone: "+918073258799",
  email: "mpshastriastrology@gmail.com",
  priceRange: "$$",
  parentOrganization: { "@id": ORG_ID },
  address: {
    "@type": "PostalAddress",
    streetAddress: "607, 2nd Cross Rd, opp. Swimming Pool, Mahalakshmi Layout",
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560086",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0118,
    longitude: 77.5458,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "21:00",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Bangalore" },
    { "@type": "Country", name: "India" },
  ],
  knowsAbout: [
    "Vedic Astrology",
    "Vastu Shastra Consultation",
    "Face Reading",
    "Kundali Matching",
    "Spiritual Counseling",
  ],
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": FAQ_ID,
  mainEntity: [
    {
      "@type": "Question",
      name: "How can Vedic astrology assist me in practical life planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vedic readings isolate the underlying systemic shifts in your lifecycle, revealing timeline periods of high opportunity for investments alongside windows requiring cautionary tracking.",
      },
    },
    {
      "@type": "Question",
      name: "Are your remote/online consultation readings as accurate as physical visits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because cosmic tracking functions on precise calculations of your birth date, location, and minute parameters, telephone and digital video calls yield identical accuracy.",
      },
    },
    {
      "@type": "Question",
      name: "What fields are evaluated during a routine Vastu consultation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consultations cover directional flow patterns, room assignments, entrance configurations, and structural elements for both residential layouts and commercial office spaces.",
      },
    },
  ],
};

export function buildBreadcrumbSchema(breadcrumbs) {
  const lastPath = breadcrumbs[breadcrumbs.length - 1].path;

  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}${lastPath === "/" ? "/" : lastPath}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === "/" ? "/" : crumb.path}`,
    })),
  };
}

export function buildBreadcrumbs(path, label) {
  if (path === "/") {
    return [{ name: "Home", path: "/" }];
  }

  return [
    { name: "Home", path: "/" },
    { name: label || ROUTE_LABELS[path] || "Page", path },
  ];
}

export function buildHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      localBusinessSchema,
      faqSchema,
      buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
    ],
  };
}

export function buildPageSchema(path, label) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      localBusinessSchema,
      buildBreadcrumbSchema(buildBreadcrumbs(path, label)),
    ],
  };
}

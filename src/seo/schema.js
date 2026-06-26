import { HOME_FAQS } from "./faqData";
import { CLIENT_REVIEWS } from "./reviewsData";

export const SITE_URL = "https://www.mpshastriastrology.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;
export const PERSON_ID = `${SITE_URL}/#person`;

export const GOOGLE_BUSINESS_URL =
  "https://www.google.com/maps/place/MP+Shastri+Astrology/@13.0118837,77.5447832,17z/data=!3m1!4b1!4m6!3m5!1s0x16aa14d0ea09c97:0xa9986dcd989e9ba4!8m2!3d13.0118837!4d77.5447832";

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
  "/astrologyservices": "Astrology Services",
  "/consultation": "Consultations",
  "/horoscope-reading": "Horoscope Reading",
  "/career-astrology": "Career Astrology",
  "/marriage-matching": "Marriage Matching",
  "/financial-solutions": "Financial Solutions",
  "/love-relationships": "Love & Relationships",
  "/family-conflict-resolution": "Family Conflict Resolution",
  "/business-astrology": "Business Astrology",
  "/vastu-consultation": "Vastu Consultation",
  "/foreign-settlement": "Foreign Settlement",
  "/health-astrology": "Health Astrology",
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
    GOOGLE_BUSINESS_URL,
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
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": LOCAL_BUSINESS_ID,
  name: "MP Shastri Astrology",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/mp-shastri-astrology.webp`,
  logo: `${SITE_URL}/MPShastriLogo.webp`,
  telephone: "+918073258799",
  email: "mpshastriastrology@gmail.com",
  priceRange: "$$",
  parentOrganization: { "@id": ORG_ID },
  founder: { "@id": PERSON_ID },
  employee: { "@id": PERSON_ID },
  hasMap: GOOGLE_BUSINESS_URL,
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

const personSchema = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Shri MP Shastri",
  jobTitle: "Vedic Astrologer & Vastu Consultant",
  url: `${SITE_URL}/about`,
  image: `${SITE_URL}/mp-shastri-astrology.webp`,
  worksFor: { "@id": ORG_ID },
  address: localBusinessSchema.address,
  knowsAbout: localBusinessSchema.knowsAbout,
  sameAs: [GOOGLE_BUSINESS_URL],
};

function buildReviewSchema(review, index) {
  return {
    "@type": "Review",
    "@id": `${SITE_URL}/#review-${index + 1}`,
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.ratingValue,
      bestRating: 5,
    },
    reviewBody: review.reviewBody,
    itemReviewed: { "@id": LOCAL_BUSINESS_ID },
  };
}

function buildAggregateRatingSchema() {
  return {
    "@type": "AggregateRating",
    "@id": `${SITE_URL}/#aggregateRating`,
    ratingValue: "5",
    reviewCount: String(CLIENT_REVIEWS.length),
    bestRating: "5",
    itemReviewed: { "@id": LOCAL_BUSINESS_ID },
  };
}

export function buildFaqSchema(faqs, path) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}${path}#faq`,
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

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
      personSchema,
      {
        ...localBusinessSchema,
        aggregateRating: { "@id": `${SITE_URL}/#aggregateRating` },
      },
      buildAggregateRatingSchema(),
      ...CLIENT_REVIEWS.map(buildReviewSchema),
      buildFaqSchema(HOME_FAQS, "/"),
      buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
    ],
  };
}

export function buildPageSchema(path, label, { faqs } = {}) {
  const graph = [
    organizationSchema,
    websiteSchema,
    personSchema,
    localBusinessSchema,
    buildBreadcrumbSchema(buildBreadcrumbs(path, label)),
  ];

  if (faqs?.length) {
    graph.push(buildFaqSchema(faqs, path));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

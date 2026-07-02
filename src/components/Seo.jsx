import { Helmet } from "react-helmet-async";
import { buildHomeSchema, buildPageSchema, GEO_LAT, GEO_LNG } from "../seo/schema";
import { COMPANY_FAVICON_SMALL_SRC, COMPANY_FAVICON_SRC } from "../config/site";

const SITE_URL = "https://www.mpshastriastrology.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/opt/mp-shastri-astrology-960w.webp`;
const SITE_NAME = "MP Shastri Astrology";
const DEFAULT_TITLE = "MP Shastri Astrology | Vedic Astrology & Vastu Expert";
const DEFAULT_DESCRIPTION =
  "Book Vedic astrology, horoscope, and Vastu consultations with MP Shastri in Bengaluru and online.";
const DEFAULT_KEYWORDS =
  "vedic astrology, vastu consultation, astrology in Bangalore, horoscope reading, online astrologer";

export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  breadcrumbLabel,
  faqs,
  schema = true,
  noindex = false,
  keywords = DEFAULT_KEYWORDS,
  children,
}) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;
  const titleContent = title || DEFAULT_TITLE;
  const descriptionContent = description || DEFAULT_DESCRIPTION;
  const metaRobots = noindex
    ? "noindex, follow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  const schemaData =
    schema && normalizedPath === "/"
      ? buildHomeSchema()
      : schema
        ? buildPageSchema(normalizedPath, breadcrumbLabel, { faqs, title: titleContent, description: descriptionContent })
        : null;

  return (
    <Helmet>
      <title>{titleContent}</title>
      <meta name="description" content={descriptionContent} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={metaRobots} />
      <meta name="googlebot" content={metaRobots} />
      <link rel="icon" href={COMPANY_FAVICON_SRC} type="image/webp" sizes="192x192" />
      <link rel="icon" href={COMPANY_FAVICON_SMALL_SRC} type="image/webp" sizes="96x96" />
      <link rel="apple-touch-icon" href={COMPANY_FAVICON_SRC} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-in" href={canonicalUrl} />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru, Karnataka, India" />
      <meta name="geo.position" content={`${GEO_LAT};${GEO_LNG}`} />
      <meta name="ICBM" content={`${GEO_LAT}, ${GEO_LNG}`} />

      <meta property="og:title" content={titleContent} />
      <meta property="og:description" content={descriptionContent} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={titleContent} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleContent} />
      <meta name="twitter:description" content={descriptionContent} />
      <meta name="twitter:image" content={image} />

      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}
      {children}
    </Helmet>
  );
}

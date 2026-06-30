import { Helmet } from "react-helmet-async";
import { buildHomeSchema, buildPageSchema, GEO_LAT, GEO_LNG } from "../seo/schema";

const SITE_URL = "https://www.mpshastriastrology.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/opt/mp-shastri-astrology-960w.webp`;
const SITE_NAME = "MP Shastri Astrology";

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  breadcrumbLabel,
  faqs,
  schema = true,
  noindex = false,
  children,
}) {
  const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const schemaData =
    schema && path === "/"
      ? buildHomeSchema()
      : schema
        ? buildPageSchema(path, breadcrumbLabel, { faqs, title, description })
        : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={canonicalUrl} />
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru, Karnataka, India" />
      <meta name="geo.position" content={`${GEO_LAT};${GEO_LNG}`} />
      <meta name="ICBM" content={`${GEO_LAT}, ${GEO_LNG}`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemaData && (
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      )}
      {children}
    </Helmet>
  );
}

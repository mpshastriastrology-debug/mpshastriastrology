import { Helmet } from "react-helmet-async";
import { buildHomeSchema, buildPageSchema } from "../seo/schema";

const SITE_URL = "https://www.mpshastriastrology.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/mp-shastri-astrology.webp`;

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  breadcrumbLabel,
  faqs,
  schema = true,
  children,
}) {
  const canonicalUrl = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const schemaData =
    schema && path === "/"
      ? buildHomeSchema()
      : schema
        ? buildPageSchema(path, breadcrumbLabel, { faqs })
        : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />

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

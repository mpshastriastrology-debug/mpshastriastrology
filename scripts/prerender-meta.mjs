import fs from "fs";
import path from "path";
import { buildHomeSchema, buildPageSchema, ROUTE_LABELS } from "../src/seo/schema.js";
import { CONSULTATION_SERVICES } from "../src/consultation/servicesData.js";
import {
  ABOUT_FAQS,
  ASTROLOGY_FAQS,
  ASTROLOGY_SERVICES_FAQS,
  BANGALORE_ASTROLOGER_FAQS,
  CONTACT_FAQS,
  CONSULTATION_HUB_FAQS,
  FACE_READING_FAQS,
  INDIA_ASTROLOGER_FAQS,
  ONLINE_ASTROLOGER_FAQS,
  QUORA_CONSULTATION_FAQS,
  SERVICES_FAQS,
  TANTRA_FAQS,
  VASTU_EXPERT_FAQS,
  VASTU_FAQS,
} from "../src/seo/faqData.js";

const SITE_URL = "https://www.mpshastriastrology.com";
const SITE_NAME = "MP Shastri Astrology";
const DIST_DIR = "dist";
const META_PATH = "public/route-meta.json";

const PAGE_FAQS = {
  "/about": ABOUT_FAQS,
  "/services": SERVICES_FAQS,
  "/contact": CONTACT_FAQS,
  "/astrology": ASTROLOGY_FAQS,
  "/vastu": VASTU_FAQS,
  "/face-reading": FACE_READING_FAQS,
  "/tantra": TANTRA_FAQS,
  "/astrologer-in-bangalore": BANGALORE_ASTROLOGER_FAQS,
  "/online-astrologer": ONLINE_ASTROLOGER_FAQS,
  "/astrologer-in-india": INDIA_ASTROLOGER_FAQS,
  "/vastu-expert": VASTU_EXPERT_FAQS,
  "/astrologyservices": ASTROLOGY_SERVICES_FAQS,
  "/consultation": CONSULTATION_HUB_FAQS,
  "/quora-consultation": QUORA_CONSULTATION_FAQS,
};

for (const service of CONSULTATION_SERVICES) {
  PAGE_FAQS[service.path] = service.faqs;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function buildPrerenderBody(meta) {
  const h1 = escapeHtml(meta.h1 || meta.title.split("|")[0].trim());
  const intro = escapeHtml(meta.intro || meta.description);

  return `<main id="seo-prerender" class="seo-prerender"><h1>${h1}</h1><p>${intro}</p></main>`;
}

function buildRouteSchema(routePath, meta) {
  if (routePath === "/") {
    return buildHomeSchema();
  }

  return buildPageSchema(routePath, ROUTE_LABELS[routePath], {
    faqs: PAGE_FAQS[routePath],
    title: meta.title,
    description: meta.description,
  });
}

function upsertMetaTag(html, { name, property, content }) {
  const safe = escapeHtml(content);

  if (name) {
    const pattern = new RegExp(`<meta name="${name}" content="[^"]*"\\s*/?>`, "i");
    const tag = `<meta name="${name}" content="${safe}" />`;
    return pattern.test(html)
      ? html.replace(pattern, tag)
      : html.replace("</head>", `  ${tag}\n</head>`);
  }

  const pattern = new RegExp(`<meta property="${property}" content="[^"]*"\\s*/?>`, "i");
  const tag = `<meta property="${property}" content="${safe}" />`;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n</head>`);
}

function applyRouteMeta(html, routePath, meta) {
  const canonical =
    routePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
  const safeTitle = escapeHtml(meta.title);
  const safeDescription = escapeHtml(meta.description);
  const prerenderBody = buildPrerenderBody(meta);
  const schemaJson = JSON.stringify(buildRouteSchema(routePath, meta)).replace(
    /</g,
    "\\u003c"
  );

  let output = html
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(
      /name="description"\s+content="[^"]*"/,
      `name="description" content="${safeDescription}"`
    )
    .replace(
      /property="og:title"\s+content="[^"]*"/,
      `property="og:title" content="${safeTitle}"`
    )
    .replace(
      /property="og:description"\s+content="[^"]*"/,
      `property="og:description" content="${safeDescription}"`
    )
    .replace(
      /property="og:url"\s+content="[^"]*"/,
      `property="og:url" content="${canonical}"`
    )
    .replace(
      /name="twitter:title"\s+content="[^"]*"/,
      `name="twitter:title" content="${safeTitle}"`
    )
    .replace(
      /name="twitter:description"\s+content="[^"]*"/,
      `name="twitter:description" content="${safeDescription}"`
    )
    .replace(
      /rel="canonical"\s+href="[^"]*"/,
      `rel="canonical" href="${canonical}"`
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">${schemaJson}</script>`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root">${prerenderBody}</div>`
    );

  output = upsertMetaTag(output, {
    property: "og:site_name",
    content: SITE_NAME,
  });
  output = upsertMetaTag(output, { property: "og:locale", content: "en_IN" });

  if (meta.noindex) {
    output = upsertMetaTag(output, {
      name: "robots",
      content: "noindex, follow",
    });
  }

  return output;
}

const templatePath = path.join(DIST_DIR, "index.html");
if (!fs.existsSync(templatePath) || !fs.existsSync(META_PATH)) {
  console.warn("Skip prerender-meta: dist/index.html or route-meta.json missing.");
  process.exit(0);
}

const template = fs.readFileSync(templatePath, "utf8");
const routeMeta = JSON.parse(fs.readFileSync(META_PATH, "utf8"));
let count = 0;

for (const [routePath, meta] of Object.entries(routeMeta)) {
  const html = applyRouteMeta(template, routePath, meta);

  if (routePath === "/") {
    fs.writeFileSync(templatePath, html);
    count += 1;
    continue;
  }

  const outDir = path.join(DIST_DIR, routePath.slice(1));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
  count += 1;
}

console.log(`Prerendered route meta into ${count} HTML entry points.`);

import fs from "fs";
import path from "path";

const SITE_URL = "https://www.mpshastriastrology.com";
const DIST_DIR = "dist";
const META_PATH = "public/route-meta.json";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function applyRouteMeta(html, routePath, { title, description }) {
  const canonical =
    routePath === "/" ? `${SITE_URL}/` : `${SITE_URL}${routePath}`;
  const safeTitle = escapeHtml(title);
  const safeDescription = escapeHtml(description);

  return html
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
    );
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

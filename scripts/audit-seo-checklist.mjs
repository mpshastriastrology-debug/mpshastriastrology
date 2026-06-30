import fs from "fs";
import path from "path";

const routeMeta = JSON.parse(fs.readFileSync("public/route-meta.json", "utf8"));
const sitemap = fs.readFileSync("public/sitemap.xml", "utf8");
const routes = Object.keys(routeMeta);

const titles = routes.map((r) => routeMeta[r].title);
const descs = routes.map((r) => routeMeta[r].description);
const dupTitles = titles.filter((t, i) => titles.indexOf(t) !== i);
const dupDescs = descs.filter((d, i) => descs.indexOf(d) !== i);
const missingDesc = routes.filter((r) => !routeMeta[r].description?.trim());
const missingTitle = routes.filter((r) => !routeMeta[r].title?.trim());
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace("https://www.mpshastriastrology.com", ""));

console.log("=== route-meta.json ===");
console.log("Routes:", routes.length);
console.log("Unique titles:", new Set(titles).size, dupTitles.length ? `DUPES: ${dupTitles}` : "✓");
console.log("Unique descriptions:", new Set(descs).size, dupDescs.length ? `DUPES: ${dupDescs.length}` : "✓");
console.log("Missing titles:", missingTitle.length || "none");
console.log("Missing descriptions:", missingDesc.length || "none");
console.log("Noindex routes:", routes.filter((r) => routeMeta[r].noindex).join(", ") || "none");

console.log("\n=== sitemap.xml ===");
console.log("URLs:", sitemapLocs.length);
const notInSitemap = routes.filter((r) => !routeMeta[r].noindex && !sitemapLocs.includes(r === "/" ? "/" : r));
const inSitemapNotMeta = sitemapLocs.filter((loc) => !routes.includes(loc));
console.log("Indexable routes missing from sitemap:", notInSitemap.join(", ") || "none");
console.log("Sitemap URLs without route-meta:", inSitemapNotMeta.join(", ") || "none");

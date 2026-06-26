import fs from "fs";

const urls = [
  ["/", "weekly", "1.0"],
  ["/about", "monthly", "0.8"],
  ["/services", "monthly", "0.9"],
  ["/contact", "monthly", "0.8"],
  ["/astrology", "monthly", "0.9"],
  ["/vastu", "monthly", "0.9"],
  ["/face-reading", "monthly", "0.8"],
  ["/tantra", "monthly", "0.8"],
  ["/astrologer-in-bangalore", "monthly", "0.9"],
  ["/online-astrologer", "monthly", "0.9"],
  ["/astrologer-in-india", "monthly", "0.9"],
  ["/vastu-expert", "monthly", "0.9"],
  ["/astrologyservices", "monthly", "0.7"],
  ["/consultation", "monthly", "0.9"],
  ["/horoscope-reading", "monthly", "0.85"],
  ["/career-astrology", "monthly", "0.85"],
  ["/marriage-matching", "monthly", "0.85"],
  ["/financial-solutions", "monthly", "0.85"],
  ["/love-relationships", "monthly", "0.85"],
  ["/family-conflict-resolution", "monthly", "0.85"],
  ["/business-astrology", "monthly", "0.85"],
  ["/vastu-consultation", "monthly", "0.85"],
  ["/foreign-settlement", "monthly", "0.85"],
  ["/health-astrology", "monthly", "0.85"],
];

const site = "https://www.mpshastriastrology.com";
const lastmod = "2026-06-26";

const body = urls
  .map(
    ([path, changefreq, priority]) => `  <url>
    <loc>${site}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml);

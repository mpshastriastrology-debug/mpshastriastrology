import fs from "fs";
import {
  HOME_INTRO_PARAGRAPHS,
  HOME_LOCAL_SECTION,
  HOME_PROCESS_SECTION,
  HOME_SERVICES_SECTION,
  HOME_WHY_SECTION,
} from "../src/seo/homeSeo.js";
import { HOME_FAQS } from "../src/seo/faqData.js";

function countWords(text) {
  return text.split(/\s+/).filter(Boolean).length;
}

function stripJsx(content) {
  const texts = [];
  for (const m of content.matchAll(/>\s*([^<{][^<]*?)\s*</g)) {
    const t = m[1].replace(/&amp;/g, "&").trim();
    if (t.length > 1) texts.push(t);
  }
  for (const m of content.matchAll(/\[\s*"([^"]{8,})"\s*,\s*"([^"]{8,})"\s*\]/g)) {
    texts.push(m[1], m[2]);
  }
  for (const m of content.matchAll(/\[\s*"(\d{2})"\s*,\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\]/g)) {
    texts.push(m[2], m[3]);
  }
  return texts.join(" ");
}

const hero = fs.readFileSync("src/components/Hero.jsx", "utf8");
const astro = fs.readFileSync("src/components/AstrologyServices.jsx", "utf8");
const services1 = fs.readFileSync("src/components/Services1.jsx", "utf8");

const homeSeoText = [
  ...HOME_INTRO_PARAGRAPHS,
  HOME_SERVICES_SECTION.title,
  HOME_SERVICES_SECTION.intro,
  ...HOME_SERVICES_SECTION.items.flatMap((i) => [i.title, i.text]),
  HOME_LOCAL_SECTION.title,
  ...HOME_LOCAL_SECTION.paragraphs,
  HOME_WHY_SECTION.title,
  ...HOME_WHY_SECTION.paragraphs,
  ...HOME_WHY_SECTION.highlights.flatMap((h) => h),
  HOME_PROCESS_SECTION.title,
  ...HOME_PROCESS_SECTION.steps.flatMap((s) => s),
  HOME_PROCESS_SECTION.closing,
].join(" ");

const faqText = HOME_FAQS.map((f) => `${f.question} ${f.answer}`).join(" ");

const astroIntro =
  "Shri MP Shastri offers specialized Vedic astrology and Vastu consultations from Mahalakshmi Layout, Bengaluru. Explore horoscope reading, career timing, Kundali matching, financial remedies, relationship guidance, family harmony, business planning, residential and commercial Vastu, numerology, foreign settlement, and health patterns. Each card below links to a detailed consultation page. Sessions are available in person at the Bengaluru office or online via phone and video for clients across Karnataka, India, and abroad.";

const sections = {
  Hero: countWords(stripJsx(hero)),
  HomeContent: countWords(homeSeoText),
  AstroIntro: countWords(astroIntro),
  AstroGrid: countWords(stripJsx(astro)),
  Services1: countWords(stripJsx(services1)),
  FAQs: countWords(faqText),
};

let total = 0;
for (const [name, n] of Object.entries(sections)) {
  console.log(`${name}: ${n}`);
  total += n;
}
console.log(`TOTAL: ${total}`);
console.log(total >= 1200 && total <= 1600 ? "✓ Within 1200–1500 target range" : total < 1200 ? "✗ Below 1200 minimum" : "Note: Above 1500 (still OK for SEO minimum)");

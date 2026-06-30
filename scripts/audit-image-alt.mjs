import fs from "fs";
import path from "path";
import {
  ABOUT_ALTS,
  ASTROLOGY_PAGE_ALTS,
  CONSULTATION_CARD_ALTS,
  CONSULTATION_HERO_ALTS,
  FACE_READING_PAGE_ALTS,
  TANTRA_PAGE_ALTS,
  VASTU_PAGE_ALTS,
} from "../src/seo/imageAlt.js";
import { CONSULTATION_SERVICES } from "../src/consultation/servicesData.js";

function collect(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) =>
    typeof value === "function" ? [] : [`${prefix}${key}: ${value}`]
  );
}

const all = [
  ...collect(CONSULTATION_CARD_ALTS, "card/"),
  ...collect(CONSULTATION_HERO_ALTS, "hero/"),
  ...collect(ABOUT_ALTS),
  ...collect(ASTROLOGY_PAGE_ALTS),
  ...collect(VASTU_PAGE_ALTS),
  ...collect(TANTRA_PAGE_ALTS),
  ...collect(FACE_READING_PAGE_ALTS),
];

const texts = all.map((line) => line.split(": ").slice(1).join(": "));
const dupes = texts.filter((t, i) => texts.indexOf(t) !== i);
const missing = CONSULTATION_SERVICES.filter(
  (s) => !s.imageAlt || !s.cardAlt || !s.cardDesc
);

console.log(`Centralized alt strings: ${texts.length}`);
console.log(`Duplicate alts: ${dupes.length ? dupes.join("\n") : "none"}`);
console.log(`Services missing alt fields: ${missing.length}`);

const srcDir = "src";
const jsxFiles = fs.readdirSync(srcDir, { recursive: true }).filter((f) => String(f).endsWith(".jsx"));
let emptyAlt = 0;
for (const file of jsxFiles) {
  const content = fs.readFileSync(path.join(srcDir, file), "utf8");
  if (/alt=\{?\s*["']\s*["']\s*\}?/.test(content) && !content.includes("aria-hidden")) {
    emptyAlt += 1;
  }
}
console.log(`Files with intentional empty alt (decorative): check PoojaStrip only`);

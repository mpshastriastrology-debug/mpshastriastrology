import fs from "fs";
import path from "path";

const PUBLIC_DIR = "public";

const KEEP_ROOT = new Set([
  "bestastrology.png",
  "favicon.svg",
  "icons.svg",
  "manifest.json",
  "robots.txt",
  "sitemap.xml",
  "humans.txt",
  "llms.txt",
]);

const REMOVE_ALWAYS = [
  "hanumanastrology.mp4",
];

for (const file of REMOVE_ALWAYS) {
  const filePath = path.join(PUBLIC_DIR, file);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`Removed ${file}`);
  }
}

for (const entry of fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })) {
  if (!entry.isFile()) continue;

  const name = entry.name;
  if (KEEP_ROOT.has(name)) continue;

  if (/\.(webp|avif|jpg|jpeg|png|mp4|gif)$/i.test(name)) {
    fs.unlinkSync(path.join(PUBLIC_DIR, name));
    console.log(`Removed ${name}`);
  }
}

console.log("Public root pruned — only optimized assets in /images/opt remain.");

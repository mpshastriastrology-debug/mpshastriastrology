import fs from "fs";
import path from "path";

const PUBLIC_DIR = "public";

const KEEP_ROOT = new Set([
  "favicon.svg",
  "icons.svg",
  "manifest.json",
  "robots.txt",
  "sitemap.xml",
  "humans.txt",
  "llms.txt",
]);

for (const entry of fs.readdirSync(PUBLIC_DIR, { withFileTypes: true })) {
  if (!entry.isFile()) continue;

  const name = entry.name;
  if (KEEP_ROOT.has(name)) continue;

  if (/\.(webp|avif|jpg|jpeg|png|gif)$/i.test(name)) {
    fs.unlinkSync(path.join(PUBLIC_DIR, name));
    console.log(`Removed ${name}`);
  }
}

const videosDir = path.join(PUBLIC_DIR, "videos");
if (fs.existsSync(videosDir)) {
  console.log("Kept public/videos/ (hero video)");
}

console.log("Public root pruned — only optimized assets in /images/opt remain.");

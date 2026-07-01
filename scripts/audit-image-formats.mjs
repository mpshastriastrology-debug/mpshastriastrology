import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const SCAN_DIRS = ["src", "public", "index.html"];
const RASTER_EXT = /\.(png|jpe?g)(\?|['")\s]|\/[^'")\s]+\.(png|jpe?g))/gi;
const ALLOWED_PUBLIC_ROOT = new Set([
  "favicon.svg",
  "icons.svg",
  "manifest.json",
  "robots.txt",
  "sitemap.xml",
  "humans.txt",
  "llms.txt",
  "route-meta.json",
]);

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === "dist" || entry.name === ".git") continue;
      walk(full, files);
    } else {
      files.push(full);
    }
  }
  return files;
}

const issues = [];

for (const file of walk(path.join(ROOT, "src"))) {
  if (!/\.(jsx?|css|html)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  const matches = [...text.matchAll(/\.(png|jpe?g)/gi)].map((m) => m[0].toLowerCase());
  if (matches.length) {
    issues.push({ file: path.relative(ROOT, file), matches: [...new Set(matches)] });
  }
}

for (const file of walk(path.join(ROOT, "public"))) {
  if (/\.(png|jpe?g)$/i.test(file)) {
    const rel = path.relative(path.join(ROOT, "public"), file);
    if (rel.includes(path.sep)) continue;
    if (ALLOWED_PUBLIC_ROOT.has(path.basename(file))) continue;
    issues.push({ file: path.relative(ROOT, file), matches: ["raster in public root"] });
  }
}

console.log("=== Image format audit ===");
if (!issues.length) {
  console.log("No PNG/JPG references in src/ or stray rasters in public/ root.");
  console.log("Content images should use OptimizedImage + /images/opt/*.webp");
} else {
  console.log("Issues found:");
  for (const issue of issues) {
    console.log(`- ${issue.file}: ${issue.matches.join(", ")}`);
  }
  process.exitCode = 1;
}

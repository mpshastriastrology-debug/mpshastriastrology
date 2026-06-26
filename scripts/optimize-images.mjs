import fs from "fs";
import path from "path";
import sharp from "sharp";

const PUBLIC_DIR = "public";
const CACHE_DIR = ".cache/image-sources";
const OUT_DIR = path.join(PUBLIC_DIR, "images", "opt");
const SITE = "https://www.mpshastriastrology.com";

const JOBS = [
  { file: "MPShastriLogo.webp", widths: [96, 192], quality: 82 },
  { file: "topastronuts.avif", widths: [400, 800], quality: 75, format: "webp" },
  { file: "marriage-astrology.webp", widths: [400, 800], quality: 78 },
  { file: "loveproblem.webp", widths: [400, 800], quality: 78 },
  { file: "financialproblem.webp", widths: [400, 800], quality: 78 },
  { file: "careerproblem.webp", widths: [400, 800], quality: 78 },
  { file: "familyconflict.webp", widths: [400, 800], quality: 78 },
  { file: "businessproblem.webp", widths: [400, 800], quality: 78 },
  { file: "vastuproblem.webp", widths: [400, 800], quality: 78 },
  { file: "numerology.webp", widths: [400, 800], quality: 78 },
  { file: "foreign.webp", widths: [400, 800], quality: 78 },
  { file: "healthproblem.webp", widths: [400, 800], quality: 78 },
  { file: "MPShastriAstrology.webp", widths: [400], quality: 70 },
  { file: "mp-shastri-astrology.webp", widths: [480, 960], quality: 80 },
  { file: "Astrology.webp", widths: [400, 800], quality: 78 },
  { file: "bestastrology.webp", widths: [400, 800], quality: 72 },
  { file: "vasthu.webp", widths: [400, 800], quality: 78 },
  { file: "facereading.webp", widths: [400, 800], quality: 78 },
  { file: "face-read.webp", widths: [400, 800], quality: 78 },
  { file: "topastrology.webp", widths: [400, 800], quality: 78 },
  { file: "healing.webp", widths: [400, 800], quality: 78 },
  { file: "personality-reading.webp", widths: [400, 800], quality: 78 },
  { file: "career.webp", widths: [400, 800], quality: 78 },
];

async function ensureSource(file) {
  const cachePath = path.join(CACHE_DIR, file);
  if (fs.existsSync(cachePath)) {
    return cachePath;
  }

  const legacyPublicPath = path.join(PUBLIC_DIR, file);
  if (fs.existsSync(legacyPublicPath)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    fs.copyFileSync(legacyPublicPath, cachePath);
    return cachePath;
  }

  const url = `${SITE}/${file}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(cachePath, buffer);
    console.log(`Downloaded ${file}`);
    return cachePath;
  } catch {
    return null;
  }
}

async function optimizeOne(job) {
  const sourcePath = await ensureSource(job.file);
  if (!sourcePath) {
    console.warn(`Skip (missing): ${job.file}`);
    return;
  }

  const base = path.parse(job.file).name;
  const ext = job.format === "webp" ? "webp" : path.extname(job.file).slice(1) || "webp";

  for (const width of job.widths) {
    const outName = `${base}-${width}w.${ext === "avif" ? "webp" : ext}`;
    const outPath = path.join(OUT_DIR, outName);

    let pipeline = sharp(sourcePath).rotate().resize({
      width,
      withoutEnlargement: true,
    });

    if (ext === "webp" || job.format === "webp") {
      pipeline = pipeline.webp({ quality: job.quality, effort: 4 });
    } else if (ext === "avif") {
      pipeline = pipeline.avif({ quality: job.quality });
    } else {
      pipeline = pipeline.webp({ quality: job.quality, effort: 4 });
    }

    await pipeline.toFile(outPath);
    const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`  ${outName} (${kb} KiB)`);
  }
}

async function optimizeFavicon() {
  const sourcePath = await ensureSource("bestastrology.png");
  if (!sourcePath) {
    console.warn("Skip favicon (missing bestastrology.png)");
    return;
  }

  const outPath = path.join(PUBLIC_DIR, "bestastrology.png");
  await sharp(sourcePath)
    .rotate()
    .resize({ width: 192, height: 192, fit: "cover" })
    .png({ quality: 80, compressionLevel: 9 })
    .toFile(outPath);

  const kb = (fs.statSync(outPath).size / 1024).toFixed(1);
  console.log(`  bestastrology.png favicon (${kb} KiB)`);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

console.log("Optimizing images...\n");
for (const job of JOBS) {
  console.log(job.file);
  await optimizeOne(job);
}

console.log("\nbestastrology.png");
await optimizeFavicon();
console.log("\nDone.");

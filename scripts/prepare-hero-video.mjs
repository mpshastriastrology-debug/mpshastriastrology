import fs from "fs";
import path from "path";
import { execSync, spawnSync } from "child_process";

const VIDEO_DIR = path.join("public", "videos");
const SOURCE_NAME = "hanumanastrology.mp4";
const OUTPUT_NAME = "hanuman-hero.mp4";
const OUTPUT_PATH = path.join(VIDEO_DIR, OUTPUT_NAME);
const COMPRESSED_PATH = path.join(VIDEO_DIR, "hanuman-hero-compressed.mp4");

const GIT_SOURCES = [
  `HEAD:public/${SOURCE_NAME}`,
  "3c0c63b:public/hanumanastrology.mp4",
  "e3a6cb6:public/hanumanastrology.mp4",
];

function restoreFromGit() {
  const rawPath = path.join(VIDEO_DIR, SOURCE_NAME);

  for (const ref of GIT_SOURCES) {
    try {
      const buffer = execSync(`git show ${ref}`, {
        encoding: "buffer",
        maxBuffer: 50 * 1024 * 1024,
        stdio: ["pipe", "pipe", "pipe"],
      });

      if (buffer.length < 1000) continue;

      fs.mkdirSync(VIDEO_DIR, { recursive: true });
      fs.writeFileSync(rawPath, buffer);
      console.log(`Restored hero video from git (${ref})`);
      return rawPath;
    } catch {
      // try next ref
    }
  }

  return null;
}

function tryCompress(inputPath) {
  const ffmpeg = spawnSync("ffmpeg", ["-version"], { stdio: "ignore" });
  if (ffmpeg.status !== 0) {
    fs.copyFileSync(inputPath, OUTPUT_PATH);
    const kb = (fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1);
    console.log(`  Using original video (${kb} KiB). Install ffmpeg to compress automatically.`);
    return;
  }

  const result = spawnSync(
    "ffmpeg",
    [
      "-y",
      "-i",
      inputPath,
      "-an",
      "-vf",
      "scale=854:-2",
      "-c:v",
      "libx264",
      "-crf",
      "28",
      "-preset",
      "slow",
      "-movflags",
      "+faststart",
      COMPRESSED_PATH,
    ],
    { stdio: "inherit" }
  );

  if (result.status === 0 && fs.existsSync(COMPRESSED_PATH)) {
    fs.copyFileSync(COMPRESSED_PATH, OUTPUT_PATH);
    fs.unlinkSync(COMPRESSED_PATH);
    const kb = (fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1);
    console.log(`  Compressed hero video (${kb} KiB)`);
  } else {
    fs.copyFileSync(inputPath, OUTPUT_PATH);
    console.warn("  ffmpeg compression failed — using original video.");
  }
}

if (fs.existsSync(OUTPUT_PATH)) {
  const kb = (fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1);
  console.log(`Hero video ready: ${OUTPUT_PATH} (${kb} KiB)`);
  process.exit(0);
}

console.log("Preparing hero video...");
fs.mkdirSync(VIDEO_DIR, { recursive: true });

const restored = restoreFromGit();
if (!restored) {
  console.warn(
    "Skip hero video: source not found. Add public/videos/hanuman-hero.mp4 manually."
  );
  process.exit(0);
}

tryCompress(restored);

if (restored !== OUTPUT_PATH && fs.existsSync(restored)) {
  fs.unlinkSync(restored);
}

if (fs.existsSync(OUTPUT_PATH)) {
  const kb = (fs.statSync(OUTPUT_PATH).size / 1024).toFixed(1);
  console.log(`Hero video ready: ${OUTPUT_PATH} (${kb} KiB)`);
}

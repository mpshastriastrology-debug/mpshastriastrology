import fs from "fs";
import path from "path";

const OUT = path.join("public", "fonts");
const FONTS = [
  [
    "node_modules/@fontsource/poppins/files/poppins-latin-400-normal.woff2",
    "poppins-latin-400-normal.woff2",
  ],
  [
    "node_modules/@fontsource/poppins/files/poppins-latin-600-normal.woff2",
    "poppins-latin-600-normal.woff2",
  ],
  [
    "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-400-normal.woff2",
    "cormorant-garamond-latin-400-normal.woff2",
  ],
  [
    "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-600-normal.woff2",
    "cormorant-garamond-latin-600-normal.woff2",
  ],
  [
    "node_modules/@fontsource/cormorant-garamond/files/cormorant-garamond-latin-700-normal.woff2",
    "cormorant-garamond-latin-700-normal.woff2",
  ],
];

fs.mkdirSync(OUT, { recursive: true });

for (const [src, dest] of FONTS) {
  if (!fs.existsSync(src)) {
    console.warn(`Skip missing font: ${src}`);
    continue;
  }
  fs.copyFileSync(src, path.join(OUT, dest));
  console.log(`Copied ${dest}`);
}

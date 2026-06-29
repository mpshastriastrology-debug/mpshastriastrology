import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

const SITE_URL = 'https://www.mpshastriastrology.com'

function routeMetaBootstrapPlugin() {
  return {
    name: "route-meta-bootstrap",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const metaPath = "public/route-meta.json";
        if (!fs.existsSync(metaPath)) {
          return html;
        }

        const routeMeta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
        const script = `(function(){var m=${JSON.stringify(routeMeta)};var s=${JSON.stringify(SITE_URL)};var p=location.pathname.replace(/\\/$/,"")||"/";var r=m[p];if(!r)return;document.title=r.title;function u(n,c,g){var q=g?'meta[property="'+n+'"]':'meta[name="'+n+'"]';var e=document.querySelector(q);if(e)e.setAttribute("content",c);else{e=document.createElement("meta");if(g)e.setAttribute("property",n);else e.setAttribute("name",n);e.content=c;document.head.appendChild(e)}}u("description",r.description,false);u("og:title",r.title,true);u("og:description",r.description,true);u("og:url",s+(p==="/"?"/":p),true);u("twitter:title",r.title,false);u("twitter:description",r.description,false);var k=document.querySelector('link[rel="canonical"]');if(k)k.setAttribute("href",s+(p==="/"?"/":p));})();`;

        return html.replace(
          "<meta charset=\"UTF-8\" />",
          `<meta charset="UTF-8" />\n  <script>${script}</script>`
        );
      },
    },
  };
}

function asyncCssPlugin() {
  return {
    name: "async-css",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /<link rel="stylesheet"([^>]*?)href="(\/assets\/index-[^"]+\.css)"([^>]*?)>/g,
          (_match, before, href, after) =>
            `<link rel="preload"${before}href="${href}"${after} as="style" onload="this.onload=null;this.rel='stylesheet'">` +
            `<noscript><link rel="stylesheet"${before}href="${href}"${after}></noscript>`
        );
      },
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    routeMetaBootstrapPlugin(),
    asyncCssPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-dom") || id.includes("node_modules/react/")) {
            return "vendor";
          }
          if (id.includes("node_modules/react-router")) {
            return "router";
          }
          if (id.includes("node_modules/react-helmet-async")) {
            return "helmet";
          }
          if (id.includes("node_modules/aos")) {
            return "aos";
          }
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
})

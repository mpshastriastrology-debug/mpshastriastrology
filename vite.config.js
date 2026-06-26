import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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

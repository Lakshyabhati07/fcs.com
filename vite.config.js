import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  base: '/fcs.com',
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 }, // Quality for JPEG images
      pngquant: { quality: [0.7, 0.9], speed: 4 },
      svgo: { plugins: [{ removeViewBox: false }] },
      webp: { quality: 75 }, // Convert to WebP
    }),
  ],
});

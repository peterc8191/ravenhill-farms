import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// Served from the root of https://ravenhilllivestock.com (custom domain on GitHub Pages)
export default defineConfig({
  plugins: [react(), imagetools()],
  base: "/",
});

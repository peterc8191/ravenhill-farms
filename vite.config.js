import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

// Served from https://<user>.github.io/ravenhill-farms/ on GitHub Pages
export default defineConfig({
  plugins: [react(), imagetools()],
  base: "/ravenhill-farms/",
});

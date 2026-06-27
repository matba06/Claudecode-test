import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the built app works under any sub-path on GitHub Pages
// (e.g. https://<user>.github.io/<repo>/blog/).
export default defineConfig({
  base: "./",
  plugins: [react()],
});

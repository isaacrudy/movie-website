import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/cinema-wave/",
  build: {
    outDir: "cinema-wave",
  },
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
});

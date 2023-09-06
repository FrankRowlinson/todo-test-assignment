/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import lightningcss from "vite-plugin-lightningcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    lightningcss({
      browserslist: ">= 0.25%",
    }),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./src/setup-vitest.ts"],
  },
});

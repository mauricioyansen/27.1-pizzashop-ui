import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, UserConfig } from "vite";
import { InlineConfig } from "vitest";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    setupFiles: ["test/setup.ts"],
    environment: "happy-dom"
  },
} as UserConfig & { test: InlineConfig });

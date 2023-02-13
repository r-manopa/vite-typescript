import * as path from "node:path";
import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  build: {
    target: ["node18"],
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies)],
    },
    lib: {
      entry: path.join(__dirname, "src", "main.ts"),
      fileName: "index",
      formats: ["cjs"],
    },
    outDir: path.join(__dirname, "bin"),
  },
});

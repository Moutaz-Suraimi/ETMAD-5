import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import vercel from "vite-plugin-vercel";

export default defineConfig({
  plugins: [
    tanstackStart(),
    react(),
    tailwindcss(),
    tsConfigPaths(),
    vercel(),
  ],
  resolve: {
    alias: {
      "@": `${process.cwd()}/src`
    }
  },
  server: {
    port: 5173,
    host: true,
  },
});

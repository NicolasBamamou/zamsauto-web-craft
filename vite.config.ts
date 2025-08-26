import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // GitHub Pages deployment configuration
  base: mode === 'production' ? '/zamsauto-web-craft/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
}));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Use "/" for custom domains, or "/${REPO_NAME}/" for GitHub Pages subdirectory
  // Set USE_CUSTOM_DOMAIN=true when building for custom domain
  base: process.env.USE_CUSTOM_DOMAIN ? "/" : (process.env.REPO_NAME ? `/${process.env.REPO_NAME}/` : "/"),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

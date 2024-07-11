import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  base: "/",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  css: {
    modules: {
      scopeBehaviour: "local",
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@assets/scss/_variables.scss";',
      },
    },
  },
});

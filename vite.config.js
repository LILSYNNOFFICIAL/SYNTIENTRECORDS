import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about.html",
      },
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/@chakra-ui/")) return "chakra";
          if (id.includes("/node_modules/@ark-ui/") || id.includes("/node_modules/@zag-js/")) return "interactions";
          if (id.includes("/node_modules/@emotion/")) return "emotion";
          if (id.includes("/node_modules/react/") || id.includes("/node_modules/react-dom/") || id.includes("/node_modules/scheduler/")) return "react";
          if (id.includes("/node_modules/react-router") || id.includes("/node_modules/@remix-run/")) return "router";
          if (id.includes("/node_modules/lucide-react/")) return "icons";
        },
      },
    },
  },
});
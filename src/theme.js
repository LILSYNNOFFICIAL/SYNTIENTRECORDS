import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        ink: { value: "#050505" },
        panel: { value: "#101010" },
        silver: { value: "#e8e8e8" },
        muted: { value: "#999999" },
      },
      fonts: {
        heading: { value: "Manrope, sans-serif" },
        body: { value: "DM Sans, sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
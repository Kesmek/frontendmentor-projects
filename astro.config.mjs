// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    layout: "full-width",
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Figtree",
        cssVariable: "--figtree",
      },
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--inter",
      },
    ],
  },
});

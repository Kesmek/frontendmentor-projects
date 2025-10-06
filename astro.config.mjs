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
      {
        provider: fontProviders.google(),
        name: "Young Serif",
        cssVariable: "--young-serif",
      },
      {
        provider: fontProviders.google(),
        name: "Outfit",
        cssVariable: "--outfit",
        weights: [400, 600, 700],
      },
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--montserrat",
        weights: [500, 700],
      },
      {
        provider: fontProviders.google(),
        name: "Fraunces",
        cssVariable: "--fraunces",
        weights: [700],
      },
      {
        provider: fontProviders.google(),
        name: "Poppins",
        cssVariable: "--poppins",
        weights: [200, 400, 600],
      },
      {
        provider: fontProviders.google(),
        name: "Barlow Semi Condensed",
        cssVariable: "--barlow-semi-condensed",
        weights: [500, 600],
      },
    ],
  },
});

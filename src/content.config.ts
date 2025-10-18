import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const challenges = defineCollection({
  loader: glob({ pattern: "./**/*.md", base: "./src/content/components" }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      title: z.string(),
    }),
});

export const collections = { challenges };

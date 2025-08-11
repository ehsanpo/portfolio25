import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      title2: z.string().optional(),
      description: z.string().optional(),
      tagline: z.string(),
      date: z.string().optional(),
      permalink: z.string(),
      client: z.string(),
      agency: z.string(),
      category: z.array(z.string()).optional(),
      tag: z.array(z.string()).optional(),
      case_link_url: z.string().optional(),
      background_image: image().optional(),
      cover: image().optional(),
      logo: image().optional(),
      logo2: image().optional(),
      images: z.array(image()).optional(),
      onHome: z.boolean().optional(),
    }),
});

export const collections = {
  portfolio,
};

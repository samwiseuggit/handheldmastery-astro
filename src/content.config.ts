import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.string(),
    readTime: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
  }),
});

const products = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    category: z.string(),
    rating: z.number(),
    price: z.number(),
    description: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
    specs: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional(),
  }),
});

export const collections = { articles, products };

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    author: z.string().default('ConnectingTheDots'),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['de', 'en']),
    category: z.enum(['project', 'news', 'insights']).default('news'),
  }),
});

export const collections = { blog };


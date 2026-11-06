import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string().transform((val) => new Date(val)),
    tags: z.array(z.enum(['technology', 'general', 'ai', 'business', 'privacy', 'case-study'])),
    lang: z.enum(['en', 'fr']).default('en'),
    heroImage: z.string().optional()
  })
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const baseSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  tags: z.array(z.string()).optional(),
  heroImage: z.string().optional(),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/archive' }),
  schema: baseSchema,
});

const weekly = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/weekly' }),
  schema: baseSchema,
});

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: baseSchema.extend({
    description: z.string(),
  }),
});

export const collections = {
  archive,
  weekly,
  blog,
};

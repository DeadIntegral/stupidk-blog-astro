import { defineCollection, z } from "astro:content";

const archive = defineCollection({
  // Define the schema and other options for the archive collection
});

const weekly = defineCollection({
  // Define the schema and other options for the weekly collection
});

const blog = defineCollection({
  // Define the schema and other options for the blog collection
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  archive,
  weekly,
  blog,
};

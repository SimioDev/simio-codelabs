import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Nestor Cabrera'),
    image: z.string().optional(),
    tags: z.array(z.string()),
    lang: z.enum(['es', 'en']),
    draft: z.boolean().default(false),
  }),
});

const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    industry: z.string(),
    technologies: z.array(z.string()),
    year: z.number(),
    image: z.string(),
    gallery: z.array(z.string()).optional(),
    metrics: z.object({
      before: z.string(),
      after: z.string(),
      improvement: z.string(),
    }).optional(),
    url: z.string().optional(),
    lang: z.enum(['es', 'en']),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    focus: z.string(), // Enfoque del proyecto
    technologies: z.array(z.string()),
    image: z.string(),
    url: z.string().optional(),
    featured: z.boolean().default(true),
    order: z.number().default(0), // Para ordenar los proyectos
    lang: z.enum(['es', 'en']),
  }),
});

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
  projects: projectsCollection,
};

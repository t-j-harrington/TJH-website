import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Comma-separated roles that scroll beneath the homepage hero title (see src/components/Hero.astro).
				heroRoles: z.string().optional(),
			}),
		}),
	}),
};

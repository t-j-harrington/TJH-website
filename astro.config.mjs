import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { RenderTemplateResult } from 'astro/runtime/server/render/astro/render-template.js';

// https://astro.build/config
export default defineConfig({
	site: 'https://tjharrington.co.uk',
	integrations: [
		starlight({
			title: 'Thomas James Harrington',
			customCss: [
				// Fontsource files for different font weights
				'./node_modules/@fontsource/sora/400.css',
				'./node_modules/@fontsource/sora/600.css',
				'./node_modules/@fontsource/sora/800.css',
				'./src/styles/custom.css'
			],
			logo: {
				light: './src/assets/THLogoLight.svg',
				dark: './src/assets/THLogoDark.svg',
				replacesTitle: true,
			},
			social: {
				github: 'https://github.com/t-j-harrington',
				linkedin: 'https://www.linkedin.com/in/thethomasharrington/'
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
					collapsed: true,
				},
				{
					label: 'About me',
					autogenerate: {directory: 'about-me'},
					collapsed: true,
				},
				{
					label: 'Portfolio',
					autogenerate: {directory: 'portfolio'},
					collapsed: true,
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
					collapsed: true,
				},
			],
		}),
	],
});

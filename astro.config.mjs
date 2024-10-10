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
			favicon: './Favicon.svg',
			social: {
				github: 'https://github.com/t-j-harrington',
				linkedin: 'https://www.linkedin.com/in/thethomasharrington/'
			},
			components: {
				// Gets rid of the Previous and Next tiles at the bottom of the page by replacing them with blank content.
				Pagination: './src/components/RemovePreviousNext.astro'
				
			},
			sidebar: [
				{
					label: 'About me',
					autogenerate: {directory: 'About me'},
					collapsed: true,
				},
				{
					label: 'Portfolio',
					autogenerate: {directory: 'Portfolio'},
					collapsed: true,
				},
				{
					label: 'JA > EN Translation',
					autogenerate: {directory: 'JA > EN Translation'},
					collapsed: true,
				},
			],
		}),
	],
});

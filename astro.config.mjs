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
					items: [
						{slug: 'about-me/work-history'},
						{slug: 'about-me/education'},
						{slug: 'about-me/training'},
					],
					collapsed: true,
				},
				{
					label: 'Portfolio',
					items: [
						{
							label: 'TrueLayer',
							items: [
								{slug: 'portfolio/truelayer/information-architecture-review'},
								{slug: 'portfolio/truelayer/insomnia-collection'},
								{slug: 'portfolio/truelayer/integration-checklists'}
							],
							collapsed: true,
						},
						{
							label: 'Anaplan',
							items: [
								{slug: 'portfolio/anaplan/calculation-functions-project'},
								{slug: 'portfolio/anaplan/custom-views-documentation'}
							],
							collapsed: true,
						},
					]
				},				
				{
					label: 'JA > EN Translation',
					items: [
						{slug: 'ja-en-translation/translation-services'},
						{slug: 'ja-en-translation/translation-contact-form'}
					],
					collapsed: true,
				},
			],
		}),
	],
});

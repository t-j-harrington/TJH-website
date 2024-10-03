import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
				linkedin: ''
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'About me',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'CV', slug: 'about-me/cv' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

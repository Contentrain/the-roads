import preprocess from "svelte-preprocess";
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svelte.md'],
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		},
	},
	preprocess: [
		preprocess({
		postcss: true,
		}),
		mdsvex({ extensions: ['.svelte.md', '.md', '.svx'] }),
	],
};

export default config;

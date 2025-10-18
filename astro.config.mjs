// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		server: {
			// Améliore le HMR
			hmr: {
				overlay: true,
			},
			watch: {
				usePolling: true,
			},
		},
	},
});

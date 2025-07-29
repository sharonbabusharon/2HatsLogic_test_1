import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		allowedHosts: ['https://sharonbabusharon.github.io/2HatsLogic_test_1/'],
	}
});

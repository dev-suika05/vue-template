import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
	root,
	build: {
		outDir,
		rollupOptions: {
			// input: {
			// 	sample1: resolve(root, 'sample1', 'index.html'),
			// 	// ディレクトリ名: resolve(root, 'ディレクトリ名', 'index.html'),
			// },
			output: {
				entryFileNames: `assets/js/script.js`,
				assetFileNames: `assets/css/style.[ext]`,
			}
		},
	},
	server: {
		port: 8080
	}
})

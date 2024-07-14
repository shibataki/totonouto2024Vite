import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	root: resolve(__dirname, './'),
	build: {
		outDir: resolve(__dirname, 'dist'),
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				blog: resolve(__dirname, 'blog/index.html'),
				saunaWords: resolve(__dirname, 'blog/saunaWords/index.html'),
				article1: resolve(__dirname, 'blog/article1/index.html'),
			},
		},
	},
})

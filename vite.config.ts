import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	assetsInclude: ['robots.txt'],
	root: resolve(__dirname, './'),
	build: {
		outDir: resolve(__dirname, 'dist'),
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),

				saunaWords: resolve(__dirname, 'saunaWords/index.html'),
				article1: resolve(__dirname, 'article1/index.html'),
				article2: resolve(__dirname, 'article2/index.html'),
				article3: resolve(__dirname, 'article3/index.html'),
				article4: resolve(__dirname, 'article4/index.html'),
				article5: resolve(__dirname, 'article5/index.html'),
				article6: resolve(__dirname, 'article6/index.html'),
				article7: resolve(__dirname, 'article7/index.html'),
				article8: resolve(__dirname, 'article8/index.html'),
				article9: resolve(__dirname, 'article9/index.html'),
				article10: resolve(__dirname, 'article10/index.html'),
				article11: resolve(__dirname, 'article11/index.html'),
				article12: resolve(__dirname, 'article12/index.html'),
				article13: resolve(__dirname, 'article13/index.html'),
			},
		},
	},
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    port: 5177,
    strictPort: true
  },
  build: {
    outDir: 'dist'
  },
  base: './'
})

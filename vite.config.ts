import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'spa-404',
      closeBundle() {
        const index = resolve(__dirname, 'dist/index.html')
        if (existsSync(index)) copyFileSync(index, resolve(__dirname, 'dist/404.html'))
      },
    },
  ],
  build: { outDir: 'dist', sourcemap: false },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Netlify: /. GitHub Pages: set VITE_BASE_PATH=/mportfolio/ in CI.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react()],
})

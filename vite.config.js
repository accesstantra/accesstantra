import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://accesstantra.github.io/accesstantra/
  base: '/accesstantra/',
  plugins: [react()],
})

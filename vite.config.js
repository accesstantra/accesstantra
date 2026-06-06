import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from the custom domain root: https://accesstantra.com/
  base: '/',
  plugins: [react()],
})

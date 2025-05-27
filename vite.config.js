import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: false, // Hot Module Replacement kapalı
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**']
    }
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  optimizeDeps: {
    exclude: ['opencascade.js', 'opencascade.js/dist/opencascade.full.wasm']
  },
})

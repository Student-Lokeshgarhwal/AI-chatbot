import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AI-chatbot/',   // ← matches your repo name
  plugins: [react()]
})

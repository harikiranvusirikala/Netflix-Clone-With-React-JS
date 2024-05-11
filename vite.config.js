import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Netflix-Clone-With-React-JS/",
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import elsint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), elsint()],
  base: "/digireact/"
})

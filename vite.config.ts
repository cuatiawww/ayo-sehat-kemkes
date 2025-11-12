// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        client: './index.html',
        server: './src/entry-server.tsx',
      },
    },
    outDir: 'dist/client',
    emptyOutDir: true,
  },
  ssr: {
    noExternal: [/^react-helmet-async$/],
  },
})
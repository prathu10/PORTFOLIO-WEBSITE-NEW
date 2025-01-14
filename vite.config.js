import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // This is important for Netlify
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    port: 5001,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  plugins: [react()],
  build: {
    assetsDir: 'public',
  },
});

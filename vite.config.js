import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('./localhost.pem'),
    },
    proxy: {
      '/api': {
        target: 'https://pcbackend-7g1k.onrender.com', // Your backend API URL
        changeOrigin: true,
        secure: false, // Use true if the backend API supports HTTPS, otherwise use false
      },
    },
  },
});
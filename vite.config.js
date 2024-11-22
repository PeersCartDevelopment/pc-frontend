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
        target: 'https://13.210.211.232', // Your backend API URL
        changeOrigin: true,
        secure: false, // Use true if the backend API supports HTTPS, otherwise use false
      },
    },
  },
});
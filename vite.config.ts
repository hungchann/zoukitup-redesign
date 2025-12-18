import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    // Base path: '/' for Vercel, '/zoukitup-redesign/' for GitHub Pages
    // Use VITE_BASE env var to override (e.g., for GitHub Pages)
    const base = process.env.VITE_BASE || '/';
    
    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        }
      },
      build: {
        outDir: process.env.VITE_OUT_DIR || 'dist', // 'dist' for Vercel, 'docs' for GitHub Pages
        assetsDir: 'assets',
      }
    };
});

// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@types': path.resolve(__dirname, './src/types'),
      '@components': path.resolve(__dirname, './src/components')
    },
  },
})

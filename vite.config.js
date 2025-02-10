/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // تأكد من أن المسارات صحيحة
    },
  },
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: true,
    outDir: 'dist', // تأكد من أن مجلد الإخراج هو `dist`
  },
});

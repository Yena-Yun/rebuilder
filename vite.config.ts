import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { createHtmlPlugin } from 'vite-plugin-html';
import { injectFontsToHead } from './src/utils/fontPreload';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tsconfigPaths(),
    svgrPlugin(),
    createHtmlPlugin({
      inject: {
        tags: injectFontsToHead,
      },
    }),
  ],
});

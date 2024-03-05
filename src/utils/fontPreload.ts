import { readdirSync } from 'fs';
import { resolve } from 'path';
import { HtmlTagDescriptor } from 'vite';

const fontsDirectory = resolve(__dirname, '../styles/fonts/woff2');

const fontFiles = readdirSync(fontsDirectory).filter((file) =>
  file.endsWith('.woff2')
);

export const injectFontsToHead: HtmlTagDescriptor[] = fontFiles.map(
  (fontFile) => ({
    injectTo: 'head',
    tag: 'link',
    attrs: {
      rel: 'preload',
      href: `./styles/fonts/woff2/${fontFile}`,
      as: 'font',
      type: 'font/woff2',
      crossOrigin: 'anonymous',
    },
  })
);

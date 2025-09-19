import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://xavierjodoin.com',
  scopedStyleStrategy: 'where',
  markdown: {
    syntaxHighlight: 'prism'
  }
});

import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE ?? 'https://xavierjodoin.com';
const base = process.env.PUBLIC_BASE ?? '/';

export default defineConfig({
  site,
  base,
  scopedStyleStrategy: 'where',
  markdown: {
    syntaxHighlight: 'prism'
  }
});

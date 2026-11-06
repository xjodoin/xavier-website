import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absolute, htmlLang, privacyPath, type Locale } from '../i18n/config';
import { services, servicePath } from '../i18n/content';

type Entry = { loc: string; alternates?: Partial<Record<Locale, string>>; lastmod?: Date; priority: number };

export const GET: APIRoute = async () => {
  const build = new Date();
  const pairs: Partial<Record<Locale, string>>[] = [
    { en: '/', fr: '/fr/' },
    ...services.map((s) => ({ en: servicePath(s, 'en'), fr: servicePath(s, 'fr') })),
    { en: privacyPath.en, fr: privacyPath.fr },
    { en: '/blog/', fr: '/fr/blogue/' }
  ];

  const entries: Entry[] = [];
  for (const alt of pairs) {
    for (const path of Object.values(alt)) {
      entries.push({ loc: path!, alternates: alt, lastmod: build, priority: path === '/' || path === '/fr/' ? 1 : Object.values(privacyPath).includes(path!) ? 0.2 : path === '/blog/' || path === '/fr/blogue/' ? 0.6 : 0.9 });
    }
  }

  const posts = await getCollection('blog');
  for (const p of posts) {
    const base = p.data.lang === 'fr' ? '/fr/blogue/' : '/blog/';
    entries.push({ loc: `${base}${p.slug}/`, lastmod: p.data.publishDate, priority: p.data.lang === 'fr' ? 0.7 : 0.4 });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries
  .map(
    (e) => `  <url>
    <loc>${absolute(e.loc)}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod.toISOString().slice(0, 10)}</lastmod>` : ''}
    <priority>${e.priority.toFixed(1)}</priority>${
      e.alternates
        ? Object.entries(e.alternates)
            .map(([l, p]) => `\n    <xhtml:link rel="alternate" hreflang="${htmlLang[l as Locale]}" href="${absolute(p!)}"/>`)
            .join('') + `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absolute(e.alternates.en!)}"/>`
        : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

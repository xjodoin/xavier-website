import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { absolute } from '../i18n/config';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', (p) => p.data.lang === 'en')).sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${absolute(`/blog/${p.slug}/`)}</link>
      <guid isPermaLink="true">${absolute(`/blog/${p.slug}/`)}</guid>
      <description>${esc(p.data.description)}</description>
      <pubDate>${p.data.publishDate.toUTCString()}</pubDate>
    </item>`
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Xavier Jodoin — Writing</title>
    <link>${absolute('/blog/')}</link>
    <atom:link href="${absolute('/rss.xml')}" rel="self" type="application/rss+xml"/>
    <description>Notes on AI agents, custom models and product engineering from a Montréal AI consultant.</description>
    <language>en-ca</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};

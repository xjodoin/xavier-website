import { getCollection } from 'astro:content';
import { absolute, CONTACT_EMAIL, homePath, privacyPath } from './config';
import { home, openSource, products, servicePath, services } from './content';

/**
 * Builds /llms.txt (a short Markdown index, https://llmstxt.org) and
 * /llms-full.txt (the same index plus full service details, FAQs and posts),
 * both from the same content the HTML pages use, so they never drift.
 */

const blogPath = (lang: 'en' | 'fr', slug: string) => (lang === 'fr' ? `/fr/blogue/${slug}/` : `/blog/${slug}/`);

async function sortedPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.publishDate.getTime() - a.data.publishDate.getTime());
}

function header() {
  const en = home.en;
  return `# Xavier Jodoin — AI consultant in Montréal, Québec

> Independent AI consultant and AI agent developer based in Montréal. Helps small and mid-sized businesses in Montréal, Laval, Longueuil, Québec City and across Québec and Canada put AI to work: custom AI agents that plug into existing tools, AI workflow consulting, and custom AI model development. Bilingual service in English and French (services en français). Free 30-minute discovery call.

${en.about.body.join('\n\n')}

Key facts:

- Location: Montréal, Québec, Canada. On site in Greater Montréal (including Laval and Longueuil); remote across Québec and Canada.
- Languages: English and French.
- Contact: ${CONTACT_EMAIL} (free 30-minute call to review one workflow).
- Approach: ${en.services.principles.join('; ')}.
- Privacy: projects follow Québec's Law 25 (Loi 25); Canadian hosting, the client's own cloud account or local models when needed.
- Website: ${absolute('/')} (English) and ${absolute(homePath.fr)} (French).
`;
}

function serviceList() {
  return services
    .map(
      (s) =>
        `- [${s.name.en}](${absolute(servicePath(s, 'en'))}): ${s.summary.en} French: [${s.name.fr}](${absolute(servicePath(s, 'fr'))}).`
    )
    .join('\n');
}

function productList() {
  return products.map((p) => `- [${p.name}](${p.href}): ${p.body.en} Stack: ${p.stack.join(', ')}.`).join('\n');
}

function ossList() {
  return openSource.map((o) => `- [${o.name}](${o.href}) (${o.lang}): ${o.body.en}`).join('\n');
}

export async function buildLlmsTxt() {
  const posts = await sortedPosts();
  const postList = (lang: 'en' | 'fr') =>
    posts
      .filter((p) => p.data.lang === lang)
      .map((p) => `- [${p.data.title}](${absolute(blogPath(lang, p.slug))}): ${p.data.description}`)
      .join('\n');

  return `${header()}
## Services

${serviceList()}

## Articles en français (guides for Québec businesses)

${postList('fr')}

## English posts

${postList('en')}

## AI products built and run in production

${productList()}

## Optional

- [Full text for LLMs](${absolute('/llms-full.txt')}): every service page, FAQ and article in one Markdown file
- [Open source on GitHub](https://github.com/xjodoin)
${ossList()}
- [Privacy policy](${absolute(privacyPath.en)}) / [Politique de confidentialité](${absolute(privacyPath.fr)})
- [Sitemap](${absolute('/sitemap.xml')})
`;
}

export async function buildLlmsFullTxt() {
  const posts = await sortedPosts();
  const out: string[] = [header()];

  out.push('## Frequently asked questions\n');
  for (const { q, a } of home.en.faq.items) out.push(`### ${q}\n\n${a}\n`);

  for (const s of services) {
    out.push(`## Service: ${s.name.en} (${s.name.fr})\n\nURL: ${absolute(servicePath(s, 'en'))}\nFrench: ${absolute(servicePath(s, 'fr'))}\n`);
    out.push(`${s.intro.en}\n`);
    out.push(`### ${s.problemTitle.en}\n\n${s.problems.en.map((x) => `- ${x}`).join('\n')}\n`);
    out.push(`### ${s.useCasesTitle.en}\n\n${s.useCases.en.map((u) => `- **${u.title}:** ${u.body}`).join('\n')}\n`);
    out.push(`### ${s.deliverablesTitle.en}\n\n${s.deliverables.en.map((x) => `- ${x}`).join('\n')}\n`);
    out.push(
      `### ${s.proofTitle.en}\n\n${s.proof.en.map((p) => `- **${p.title}:** ${p.body}${p.href ? ` (${p.href})` : ''}`).join('\n')}\n`
    );
    out.push(`### FAQ\n\n${s.faq.en.map((f) => `**${f.q}** ${f.a}`).join('\n\n')}\n`);
  }

  out.push(`## AI products built and run in production\n\n${productList()}\n`);

  for (const p of posts) {
    const date = p.data.publishDate.toISOString().slice(0, 10);
    out.push(
      `## Article: ${p.data.title}\n\nURL: ${absolute(blogPath(p.data.lang, p.slug))}\nLanguage: ${p.data.lang === 'fr' ? 'French' : 'English'}\nPublished: ${date}\n\n${p.body.trim().replace(/^(#{2,5}) /gm, '#$1 ')}\n`
    );
  }

  return out.join('\n');
}

export const textResponse = (body: string) =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });

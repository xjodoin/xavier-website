import { SITE_URL, absolute, htmlLang, type Locale } from './config';

export const faqPage = (items: readonly { q: string; a: string }[], url: string) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.q,
    acceptedAnswer: { '@type': 'Answer', text: i.a }
  }))
});

export const webPage = (opts: { path: string; title: string; description: string; locale: Locale; crumbs?: { name: string; path: string }[] }) => {
  const url = absolute(opts.path);
  const nodes: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: opts.title,
      description: opts.description,
      inLanguage: htmlLang[opts.locale],
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      ...(opts.crumbs ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {})
    }
  ];
  if (opts.crumbs) {
    nodes.push({
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: opts.crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: absolute(c.path)
      }))
    });
  }
  return nodes;
};

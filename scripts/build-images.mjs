// Regenerates derived web images from sources in docs/design and public/images.
// Run with: npm run images
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT = 'public/images';
await mkdir(OUT, { recursive: true });

// 1. Montréal blue-hour art (AI-generated with Codex; see docs/design/README.md)
const mtl = 'docs/design/montreal-blue-hour.jpg';
for (const w of [960, 1600]) {
  await sharp(mtl).resize({ width: w }).avif({ quality: 50 }).toFile(`${OUT}/montreal-${w}w.avif`);
  await sharp(mtl).resize({ width: w }).webp({ quality: 72 }).toFile(`${OUT}/montreal-${w}w.webp`);
}

// 2. AI Plant Doctor logo: source is 1024px / 1.5 MB, displayed at 56px.
await sharp(`docs/design/ai-plant-doctor-logo.png`).resize(112, 112).webp({ quality: 85 }).toFile(`${OUT}/ai-plant-doctor-logo-112.webp`);

// 3. Open Graph cards (1200x630), one per language.
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const cards = {
  en: {
    kicker: 'AI CONSULTANT · MONTRÉAL, QUÉBEC',
    line1: 'AI agents, workflow',
    line2: 'automation & custom models',
    foot: 'Xavier Jodoin · xavierjodoin.com'
  },
  fr: {
    kicker: 'CONSULTANT EN IA · MONTRÉAL, QUÉBEC',
    line1: 'Agents IA, automatisation',
    line2: 'et modèles sur mesure',
    foot: 'Xavier Jodoin · xavierjodoin.com/fr'
  }
};

const base = await sharp(mtl)
  .resize(1200, 630, { fit: 'cover', position: 'bottom' })
  .modulate({ brightness: 0.82 })
  .toBuffer();

for (const [lang, c] of Object.entries(cards)) {
  const svg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#0e0f12" stop-opacity="0.78"/>
        <stop offset="0.6" stop-color="#0e0f12" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#0e0f12" stop-opacity="0.15"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#fade)"/>
    <g transform="translate(72 72)">
      <defs><clipPath id="xc"><rect y="19" width="64" height="27"/></clipPath></defs>
      <rect width="64" height="64" rx="15" fill="#f2f0e9"/>
      <path clip-path="url(#xc)" d="M10.5 14.5 35.5 50.5M35.5 14.5 10.5 50.5" stroke="#15140f" stroke-width="6.5" fill="none"/>
      <path d="M47 27v11.5a7.5 7.5 0 0 1-7.5 7.5" stroke="#15140f" stroke-width="6.5" fill="none"/>
      <circle cx="47" cy="18.5" r="4.6" fill="#2b45e0"/>
    </g>
    <text x="72" y="206" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="24" font-weight="600" letter-spacing="3" fill="#c7cfff">${esc(c.kicker)}</text>
    <text x="72" y="290" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" letter-spacing="-1.5" fill="#ffffff">${esc(c.line1)}</text>
    <text x="72" y="366" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="64" font-weight="700" letter-spacing="-1.5" fill="#ffffff">${esc(c.line2)}</text>
    <text x="72" y="560" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" font-size="26" font-weight="500" fill="#f2f0e9">${esc(c.foot)}</text>
  </svg>`;
  await sharp(base)
    .composite([{ input: Buffer.from(svg) }])
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(`public/og-${lang}.jpg`);
}

// 4. App icons from the vector logo (apple-touch-icon needs an opaque square, no rounded corners).
const mark = await import('node:fs/promises').then((fs) => fs.readFile('public/favicon.svg'));
const square = Buffer.from(mark.toString().replace('rx="15"', 'rx="0"'));
await sharp(square, { density: 1200 }).resize(180, 180).png().toFile('public/apple-touch-icon.png');
for (const s of [192, 512]) {
  await sharp(mark, { density: 1200 }).resize(s, s).png().toFile(`public/icon-${s}.png`);
}

// 5. Portrait (AI-retouched with Codex from Xavier's own photo; see docs/design/README.md)
const portrait = 'docs/design/xavier-portrait.jpg';
for (const w of [480, 800, 1080]) {
  await sharp(portrait).resize({ width: w }).avif({ quality: 55 }).toFile(`${OUT}/xavier-portrait-${w}w.avif`);
  await sharp(portrait).resize({ width: w }).webp({ quality: 80 }).toFile(`${OUT}/xavier-portrait-${w}w.webp`);
}

console.log('images built');

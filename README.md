# Xavier Jodoin — Personal Site

Static Astro site showcasing professional experience, open source work, the AI Plant Doctor app, and a blog. The project ships preconfigured design tokens, responsive hero imagery, content collections for posts, and CI/CD-ready build tooling.

## Tech Stack
- [Astro](https://astro.build/) 4.x (static generation)
- TypeScript for content schemas and utilities
- GitHub Actions for CI/CD

## Structure
```
public/               # Static assets (favicon, hero images, theme script)
src/
  components/         # UI sections (Hero, About, ProjectsGrid, FeaturedApp, BlogTeaser, Footer)
  content/            # Markdown posts + Astro content collection config
  data/               # Structured data (e.g., open source projects list)
  layouts/            # Base document layout with metadata and theme wiring
  pages/              # Astro pages (home, blog index, blog posts)
  styles/             # Design tokens and global styles
```

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
   Astro serves on `http://localhost:4321` by default with hot reload.
3. Generate a production build
   ```bash
   npm run build
   ```
4. Preview the built output
   ```bash
   npm run preview
   ```

## Content & Customization
- Add or edit blog posts under `src/content/blog/`. Frontmatter is validated by `src/content/config.ts`.
- Update hero copy and CTAs in `src/components/Hero.astro`.
- Manage featured projects through `src/data/projects.ts`.
- Global colors, typography scale, and spacing live in `src/styles/tokens.css`.
- Shared button, layout, and accessibility styles are defined in `src/styles/globals.css`.

## Analytics
- Provide a Google Analytics 4 Measurement ID via environment variable `PUBLIC_GOOGLE_ANALYTICS_ID`. Astro automatically injects the `gtag.js` snippet when the variable is present at build time.
- Locally you can add it in an `.env` file (ignored by Git):
  ```bash
  echo "PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX" >> .env
  ```
- Avoid committing real analytics IDs to version control; rely on environment variables in hosting/CD pipelines.

## Responsive Hero Assets
The hero portrait and its responsive variants live in `public/images/`. Use the `<picture>` element in `Hero.astro` as a reference if you need to swap imagery or add additional sizes.

## License
No explicit license provided. Contact Xavier Jodoin for usage terms.

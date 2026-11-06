# Design references

Not deployed. Kept as the source of truth for the 2026 redesign.

| File | What it is |
|---|---|
| `ux-concept-a.jpg`, `ux-concept-b.jpg` | UX concepts generated with Codex (image model). The people shown are fictional. Used for direction only: split hero, bento service grid, agent flow with a highlighted human-approval step, mono section labels. |
| `montreal-blue-hour.jpg` | AI-generated (Codex) atmospheric art of Montréal from Mount Royal. Source for `public/images/montreal-*` and the OG cards. It carries C2PA "AI-generated" credentials; the site's alt text calls it an illustration, not a photograph. |
| `ai-plant-doctor-logo.png` | 1024px source logo; the site ships a 112px WebP made by `npm run images`. |

Design direction, from 2026 UI/UX research: calm, editorial layouts over visual effects; one accent colour; large type paired with an italic serif; motion only where it helps (CSS scroll-driven reveals and cross-document view transitions, both progressive enhancements that respect `prefers-reduced-motion`); light and dark themes that pass WCAG AA; AI shown transparently as a sequence of steps with a human checkpoint.

## Brand and portrait (added)

| File | What it is |
|---|---|
| `public/favicon.svg`, `src/components/Logo.astro` | The logo: an X and a j whose dot is a cobalt "node". Redrawn by hand in SVG from a Codex concept, so it stays crisp at 16px and follows the light/dark theme. `npm run images` renders the PNG icons and the mark on the OG cards. |
| `xavier-portrait.jpg` | Hero portrait. Codex edit of Xavier's own photo (`xavierjodoinphoto.jpg`): colour restored, navy blazer added, Montréal at blue hour in the background. Carries C2PA "AI-edited" credentials. |
| `xavier-portrait-bw.jpg` | Alternate edit: neutral black-and-white studio portrait, closest to the original likeness. |

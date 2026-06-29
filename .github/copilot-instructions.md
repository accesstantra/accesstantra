# Copilot instructions — Accessible Tantra website

**Read [`/agent.md`](../agent.md) first — it is the complete, authoritative guide for this
repo. Follow it over your own assumptions.**

This is the website of **Accessible Tantra** (a disability-access non‑profit): React 18 + Vite,
React Router **HashRouter**, plain CSS with design tokens, deployed to GitHub Pages at
`accesstantra.com` on every push to `main`.

Critical rules (full details and step-by-step recipes are in `agent.md`):

1. **Accessibility is required** (semantic HTML, labels, focus, WCAG-AA contrast) — it's the org's mission.
2. **No inline styles.** Use the CSS variables/tokens and utility classes in `src/index.css` and the per-component `.css` files.
3. **One `<h1>` per page** (the header title is the `<h1>` on Home only).
4. **Never use `href="#..."`** — HashRouter treats it as a route and breaks the page. Use a `<button>` + `element.focus()`.
5. **Keep `vite.config.js` `base: '/'` and `public/CNAME` (`accesstantra.com`).**
6. **Most content lives in `src/data/`** (`initiatives.js`, `courses.js`, `pastEvents.js`, `site.js`). Adding/removing an item there auto-updates the nav, routes, and listings. Prefer data edits over new code.
7. **Prefer embedded Google Forms** (`form: { type: 'embed', src: '…viewform?embedded=true' }`); native forms break if the form collects a *verified* email.
8. **Hindi text needs `lang="hi"`.**
9. Run `npm run build` (must pass) before committing. Commit/push to `main` as the `accesstantra` git identity; that triggers the deploy.

When unsure how to make a change, find the matching recipe in `agent.md` §8.

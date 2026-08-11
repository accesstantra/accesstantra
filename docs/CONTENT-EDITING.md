# Editing the website content (no coding needed)

Accessible Tantra's website has a built-in **content editor** so non-technical
people can update the site safely. You edit content in a friendly form; the page
layout and design are locked and can't be broken.

- **Editor address:** https://accesstantra.com/admin
- **What you can edit today:** Announcements (home page), Courses, and Programs.
- **What happens when you save:** your change is saved to the website's code
  repository, which automatically rebuilds and republishes the site. Updates
  usually appear in **2–5 minutes**.

The design, menus, and page structure are fixed in code and are **not** editable
from here, so editors can't accidentally break the site's look or accessibility.

---

## Part A — One-time setup (a developer/admin does this once)

Editors need a way to sign in. Pick **one** of the two options below.

### Option 1 (simplest): Personal access token — no server needed

Good for one or two trusted editors. Each editor:

1. Go to https://github.com/settings/tokens → **Generate new token**
   → **Fine-grained token**.
2. **Resource owner:** `accesstantra`. **Repository access:** Only select
   repositories → `accesstantra/accesstantra`.
3. **Permissions → Repository permissions → Contents: Read and write.**
4. Generate the token and copy it.
5. Open https://accesstantra.com/admin → **Sign In Using Access Token** →
   paste the token.

Nothing else to configure. (Downside: editors manage their own tokens.)

### Option 2 (nicest for non-tech editors): "Sign in with GitHub" button

This gives a normal "Sign in with GitHub" button. It needs a tiny, free
Cloudflare Worker (one-time, ~10 minutes).

1. **Deploy the authenticator.** Open
   https://github.com/sveltia/sveltia-cms-auth and click **Deploy to Cloudflare
   Workers**. Sign up for a free Cloudflare account if asked. When done, copy the
   Worker URL, e.g. `https://sveltia-cms-auth.YOURNAME.workers.dev`.
2. **Register a GitHub OAuth app** at
   https://github.com/settings/applications/new:
   - Application name: `Accessible Tantra CMS`
   - Homepage URL: `https://accesstantra.com`
   - Authorization callback URL: `<YOUR_WORKER_URL>/callback`
   - Click **Register**, then **Generate a new client secret**. Copy the
     **Client ID** and **Client Secret**.
3. **Add the secrets to the Worker.** In the Cloudflare dashboard, open the
   `sveltia-cms-auth` Worker → **Settings → Variables** and add:
   - `GITHUB_CLIENT_ID` = the Client ID
   - `GITHUB_CLIENT_SECRET` = the Client Secret (click **Encrypt**)
   - `ALLOWED_DOMAINS` = `accesstantra.com`
   Save and deploy.
4. **Point the editor at the Worker.** In this repo, edit
   `public/admin/config.yml` and, under `backend:`, uncomment and set:
   ```yaml
   base_url: https://sveltia-cms-auth.YOURNAME.workers.dev
   ```
   Commit the change. After the site redeploys, https://accesstantra.com/admin
   will show a working **Sign In with GitHub** button.

> Note: GitHub is expected to add a simpler, no-server sign-in method soon; when
> it does, the Worker in Option 2 can be removed.

### Who can edit

Only people with **write access** to the `accesstantra/accesstantra` GitHub repo
can save changes. Add editors as repository collaborators in GitHub
(**Settings → Collaborators**). Removing them there removes their access.

---

## Part B — How editors use it

1. Go to https://accesstantra.com/admin and sign in.
2. Choose a section on the left: **Announcements**, **Courses**, or
   **Programs**.
3. Edit the fields, or use **＋** to add an item / the trash icon to remove one.
   You can drag items to reorder them.
4. Click **Save** (top right). Your change is published automatically in a few
   minutes. Refresh the live page to see it.

### Tips

- **Announcements:** each has a bold **Title**, a **Message**, and an optional
  button (text + link). A link starting with `/` (like `/courses/excel`) points
  to a page on this site; a link starting with `https://` opens an external
  site.
- **Courses / Programs:** the **ID** is used in the page's web address (e.g.
  `excel` → `/courses/excel`). Avoid changing an existing ID, or old links will
  break. **Quick facts** are the small chips under the title. **Bullet points**
  and **Paragraphs** are separate lists inside each section.
- **Hindi:** fill in the optional **Hindi translation** section to make the
  English/हिन्दी toggle appear on that page. Leave it empty for English-only.
- **Removing a course/program** removes it from the menus and listings
  automatically; existing links to it show a friendly "Not available" page.

---

## For developers

- Content lives in `src/data/*.json`
  (`announcements.json`, `courses.json`, `initiatives.json`). The React app
  imports these; `src/data/courses.js` and `src/data/initiatives.js` are thin
  loaders that convert the CMS shape (e.g. `meta` as a `[{key,value}]` list)
  back to what `ContentPage` expects.
- The editor is Sveltia CMS: `public/admin/index.html` + `public/admin/config.yml`.
- `scripts/gen-cms-json.mjs` normalises the JSON (paragraph fields → arrays,
  `meta` → key/value list). It's a one-off/maintenance helper, not part of the
  build.
- The page skeleton, routing, styling, and accessibility all remain in code and
  are intentionally not exposed to the CMS.

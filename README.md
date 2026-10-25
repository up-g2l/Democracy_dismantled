# Democracy Dismantled

A static website collecting reporting on India's election machinery. No build step:
open `index.html`, or upload the whole folder to any static host (GitHub Pages, Netlify).

- Live site (Cloudflare): https://janmat.net/ (the old address
  democracy-dismantled.demsaver.workers.dev redirects there; see `worker.js`)
- Mirror (GitHub Pages): https://up-g2l.github.io/Democracy_dismantled/
- Source: https://github.com/up-g2l/Democracy_dismantled (GitHub Pages serves the `main`
  branch from the root folder; every push to `main` updates both live addresses)
- Working copy on Upendra's computer: `Claud Cowork/DemocracyDismantled`

## Pages
- `index.html` – home page: topic cards on a saffron, white and green background
- `reports.html` – Indian Express archive, with YouTube and X (Twitter) sections
- Topic pages, each with its content file:
  - `bogus-voters.html` → `js/bogus-data.js`
  - `form-6.html` → `js/form6-data.js`
  - `form-7.html` → `js/form7-data.js`
  - `centralisation.html` → `js/centralisation-data.js`
  - `opacity.html` → `js/opacity-data.js`
  - `double-standards.html` → `js/double-standards-data.js`
  - `accountability.html` → `js/accountability-data.js`
  - `selection.html` → `js/selection-data.js`
  - `supreme-court.html` → `js/court-data.js`

## Add a new topic
1. Copy a topic page (e.g. `accountability.html`) and its data file, rename both,
   and point the page's `<script src="js/...-data.js">` at the new data file.
2. Fill in the data file (cases and links; see the comments at its top).
3. Add one entry to `js/topics-data.js` with the page link, an image and the
   title and description in each language. The home-page card and the Topics menu
   on every page update automatically.
4. Card images live in `images/topics/`. Any landscape-ish .svg, .jpg, .png or
   .webp works; the top part of the picture shows above the text.
5. In the new page's `<head>`, update the canonical link, the `og:` and `twitter:`
   tags (title, description, page address, image), and add a 1200×630 PNG to
   `images/og/` for the link preview. Add the page's address to `sitemap.xml`.

## Languages
- The language picker in the header offers English, Hindi, Bangla, Marathi, Tamil,
  Telugu, Gujarati, Kannada, Malayalam, Punjabi, Odia and Urdu. The choice is
  remembered, and a link can set it directly: `index.html?lang=bn`.
- Translated: the home page, all card titles and descriptions, the header and menus.
- Topic pages and reports are in English. When another language is chosen they show
  a note with a Google Translate link for the page. The link only works once the site
  is online; on your own computer the note says so.
- Interface text is in `js/i18n-strings.js`; card text is in `js/topics-data.js`.
  To add a language, add it to `SITE_LANGS` and add a block of strings.
- The Hindi and Bangla text should be read by a fluent speaker before launch. The
  other languages most need a native speaker's review.

## Other files
- `css/styles.css` – all styles
- `js/i18n.js` – language picker and switching
- `js/menu.js` – builds the Topics menu from `js/topics-data.js`
- `js/home.js` – builds the home-page cards
- `js/cases.js` – renders the topic pages
- `js/app.js`, `js/data.js` – the Indian Express archive page
- `js/videos-data.js` – the videos behind the Watch button; tag each with the pages it belongs on
- `js/watch.js` – the Watch overlay
- `wrangler.jsonc`, `worker.js` – Cloudflare settings and the redirect from the old
  workers.dev address to janmat.net; `.assetsignore` keeps repository files off the site
- `images/og/` – 1200×630 pictures shown when a page is shared on WhatsApp, X etc.
- `sitemap.xml`, `robots.txt` – tell search engines which pages exist

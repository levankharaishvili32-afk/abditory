# ABDITORY — website

Static site. No build step, no backend, no dependencies. Open `index.html`
and it works.

Built without the real content, so every photograph is currently a styled
placeholder slot and the nine products are sample entries. Everything that
needs replacing is listed under **What to replace** below.

---

## Files

```
index.html            the page itself
assets/styles.css     all styling — design tokens are at the top
assets/fonts.css      @font-face declarations
assets/fonts/         13 self-hosted woff2 files (~276 KB total)
assets/app.js         catalogue rendering, filters, quick view, menu
data/products.js      YOUR PRODUCTS — the file you will edit most
data/site.js          Instagram handle, turnaround, currency, translations
images/               your photographs go here
```

## Running it

Double-clicking `index.html` works for a quick look. For an accurate
preview, serve it over HTTP instead — some browsers restrict font loading
over `file://`:

```
cd abditory
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publishing it (Vercel — the live site)

The site is hosted on Vercel, connected to the GitHub repo. You do not
touch Vercel again after the first setup:

**run `push-to-github.bat` → Vercel notices → site updates in ~30 seconds.**

First-time setup (once only):

1. Sign in at https://vercel.com with **Continue with GitHub**
2. **Add New… → Project**, pick the `abditory` repo, click **Import**
3. Framework Preset: **Other**. Leave Build Command and Output Directory
   empty — there is nothing to build
4. **Deploy**

`vercel.json` is already in the repo. It sets cache rules — fonts cached
for a year (their names never change), photos and code for an hour, so
when you swap a product photo it appears quickly instead of being stuck
in someone's browser cache.

### Adding your own domain later

Vercel → your project → **Settings → Domains → Add**. Vercel then tells
you exactly which DNS records to create at whoever sold you the domain.
The HTTPS certificate is issued automatically.

---

## Alternative: GitHub Pages

Double-click **`push-to-github.bat`** and follow what it says. In short:

1. Create an **empty** public repo at https://github.com/new named
   `abditory` — no README, no .gitignore, no licence.
2. Run `push-to-github.bat`, paste the repo URL when it asks.
3. On GitHub: **Settings → Pages**, Branch `main`, folder `/ (root)`, Save.

After a minute the site is live at
`https://YOUR-USERNAME.github.io/abditory` — that is the link for the
Instagram bio.

To publish changes later, just run `push-to-github.bat` again.

`.nojekyll` is in the repo on purpose: it tells GitHub Pages to serve the
files exactly as they are instead of running them through Jekyll.

Any other static host works too — Netlify Drop, Cloudflare Pages, plain
FTP. There is nothing to compile.

---

## What to replace

Things that are currently placeholder and are meant to change:

| Where | What |
|---|---|
| `data/products.js` | All nine products. Names, descriptions and specs are invented samples. |
| `images/` | Every photograph. Nothing here is a real product shot. |
| `data/site.js` → `turnaround` | Currently `"3–5 weeks"`. Set your real range. |
| `data/site.js` → `email` | Empty, so the email line is hidden. Add one to show it. |
| `index.html` → About section | The brand story is a draft. It avoids inventing any facts about you, but it is not written in your voice — rewrite it. |
| `index.html` → `og:image` | Needs `images/og.jpg` for link previews. |

Nothing else is placeholder. The section copy, process steps, shipping,
payment and sizing text are all real copy written for the brand and can
stay as they are unless you want to change them.

---

## The order forms

Two forms, one component (`assets/form.js`):

- **Landing page**, in the "Place an order" section before Contact. The
  customer picks the request type; the shoe-size field only appears if
  they choose *Custom shoes order*.
- **Every product**, inside the quick-view panel. Request type is locked
  to *Product order*, the product name and code are filled in for them,
  and shoe size shows only for footwear.

Both send to the Google Apps Script Web App set in `data/site.js` as
`formEndpoint` — **the only place that URL appears**. Set it to `""` to
switch every form off and fall back to Instagram.

Submissions arrive with these keys: `sourcePage`, `product`, `name`,
`email`, `instagram`, `country`, `shoeSize`, `requestType`, `message`.

**One thing to check on the Google side:** the body is sent as
`text/plain`, not `application/json` — it has to be, or the browser
blocks the request. Your script must read it with
`JSON.parse(e.postData.contents)`, not `e.parameter`. See
`apps-script-reference.gs.txt` for a working example. If your sheet ever
stays empty while the site says "success", this is almost always why.

A hidden honeypot field filters bots. If it gets filled the submission is
dropped silently and the bot still sees a success message.

### Shareable product links

Opening a product updates the address to `#product/STM-01`. Paste that
link in an Instagram story and it opens straight onto that piece with its
order form ready.

---

## Adding a product

Open `data/products.js`, copy one block between `{ }`, change the values.
Every field is documented in the comment at the top of that file. The
short version:

```js
{
  id: "VSP-01",              // shown to the customer as the DM code
  category: "shoes",         // shoes | accessories | custom
  name: "Vesper Platform Boot",
  blurb: "Knee-high, laced to the top, 7cm platform.",
  details: "Longer description for the quick-view panel.",
  specs: ["7cm platform", "Made to calf measurement"],
  price: null,               // null = "Price on request", or a number
  images: ["vesper-1.jpg"],  // [] = placeholder slot
  featured: false,           // true on ONE product — fills the hero
  sold_out: false
}
```

Save, refresh. That is the whole workflow.

---

## The Georgian version

The structure is already there — you just have to turn it on.

1. Open `data/site.js` and read through the `ka:` block. Every string is
   translated as a **first pass** and needs your eye on it before it goes
   live. Fix anything that reads awkwardly.
2. Add `name_ka`, `blurb_ka` and `details_ka` to your products in
   `data/products.js`. Any field you leave empty falls back to English, so
   you can translate gradually rather than all at once.
3. Set `georgianEnabled: true` in `data/site.js`. The EN / ქარ switch
   appears in the header.

The fonts are already handled. Bodoni Moda has no Georgian characters, so
`assets/fonts.css` declares Noto Serif Georgian under the *same family
name* for the Georgian unicode ranges. The browser then picks per
character — Latin from Bodoni, Georgian from Noto — inside the same
heading, with no markup changes. Georgian font files are only downloaded
once Georgian text is actually on the page, so the English site pays
nothing for this.

---

## Design notes

**Palette.** Near-black base with a cold blue cast (`#08080b`) so that
warm-toned product photography reads warmer than the page around it. Two
accents, as agreed: **starlight** silver `#d8dce6` carries the celestial
side of the brand, **oxblood** `#8e1a2b` carries the gothic side and marks
every call to action. All of it is CSS variables at the top of
`styles.css` — changing `--blood-200` changes every button on the site.

Once your photographs arrive these should be re-derived from them. The
current values are a considered starting point, not an extraction.

**Type.** Bodoni Moda for display — high thick/thin contrast, fashion
masthead rather than horror. Cormorant Garamond for lede paragraphs,
Inter for body. No blackletter, no drips.

**Celestial details** are kept to texture rather than decoration: a
sparse animated starfield behind everything at 22% opacity, a four-point
star used as bullet, divider and brand mark, and film grain at 3.5%. All
of it disappears under `prefers-reduced-motion`.

**Mobile-first, genuinely.** The phone layout is the design, not a
squeezed-down desktop. On a phone the hero photograph fills the entire
first screen with the copy sitting on top of it — visitors arrive from an
Instagram link and the first thing they should see is a product. Above
900px this unwinds into a two-column editorial split. The catalogue is
two columns on a phone and four on a large screen.

**Ordering flow.** No cart, no checkout, matching how you actually sell.
Every product carries a short code, the quick-view panel tells the
customer to mention that code, and the button opens your Instagram. When
you get a DM saying "VSP-01, size 39" you know exactly what they mean.

---

## Accessibility

Keyboard navigable throughout, Escape closes the menu and the quick-view
panel, focus returns to the card that opened it, visible focus rings, a
skip link, and honoured `prefers-reduced-motion`. Product cards are real
`<button>` elements rather than clickable divs.

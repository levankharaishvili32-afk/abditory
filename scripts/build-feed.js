#!/usr/bin/env node
/* =====================================================================
   ABDITORY — PRODUCT FEED BUILDER
   ---------------------------------------------------------------------
   Reads data/products.js + data/site.js and writes feed.xml at the repo
   root: an RSS 2.0 feed with Google's g: namespace, which is the format
   both Meta Commerce Manager and Google Merchant Center accept.

   Run it:   node scripts/build-feed.js
   Or just push — .github/workflows/build-feed.yml runs it for you and
   commits the result.

   WHY THE FEED FIELDS ARE NOT STORED IN products.js
   -------------------------------------------------
   title, description, price, link and image_link are all DERIVED here
   from the fields you already maintain. If they were stored twice, you
   would rename a product on the site and keep shipping the old name to
   Meta without noticing. One source of truth, derived at build time.

   WHAT GETS EXCLUDED, AND WHY
   ---------------------------
   A product is left out of the feed if it has no photograph or no
   price. Both are required by Meta and Google, and a feed that fails
   validation is worse than a smaller feed that passes. Every exclusion
   is printed when the script runs, so nothing disappears quietly.
   ===================================================================== */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// products.js and site.js assign onto `window`, so give them one.
global.window = {};
require(path.join(ROOT, 'data', 'site.js'));
require(path.join(ROOT, 'data', 'products.js'));

const SITE = global.window.ABDITORY_SITE || {};
const PRODUCTS = global.window.ABDITORY_PRODUCTS || [];

const BASE = (SITE.siteUrl || '').replace(/\/+$/, '');
if (!BASE) {
  console.error('ERROR: siteUrl is not set in data/site.js. The feed needs absolute URLs.');
  process.exit(1);
}

const CURRENCY = 'EUR';
const BRAND = 'ABDITORY';

/* Everything here is made to order, so nothing is ever literally "in
   stock". Meta accepts "available for order" for exactly this case.
   Google's newer spec prefers "preorder" — if you ever submit to
   Merchant Center and it complains, that is the value to switch to. */
const AVAILABILITY = 'available for order';

function xml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const included = [];
const skipped = [];

for (const p of PRODUCTS) {
  const reasons = [];
  if (!p.images || !p.images.length) reasons.push('no photograph');
  if (p.price === null || p.price === undefined || p.price === '') reasons.push('no price');
  if (!p.sku) reasons.push('no sku');
  if (reasons.length) {
    skipped.push({ id: p.id, name: p.name, why: reasons.join(' + ') });
    continue;
  }
  included.push(p);
}

const items = included.map((p) => {
  const link = `${BASE}/#product/${encodeURIComponent(p.id)}`;
  const image = `${BASE}/images/${p.images[0].split('/').map(encodeURIComponent).join('/')}`;
  const extras = (p.images || []).slice(1, 11).map(
    (f) => `      <g:additional_image_link>${xml(`${BASE}/images/${f.split('/').map(encodeURIComponent).join('/')}`)}</g:additional_image_link>`
  ).join('\n');

  return `    <item>
      <g:id>${xml(p.id)}</g:id>
      <g:mpn>${xml(p.sku)}</g:mpn>
      <g:title>${xml(p.name)}</g:title>
      <g:description>${xml(p.details)}</g:description>
      <g:link>${xml(link)}</g:link>
      <g:image_link>${xml(image)}</g:image_link>
${extras ? extras + '\n' : ''}      <g:availability>${xml(AVAILABILITY)}</g:availability>
      <g:condition>new</g:condition>
      <g:price>${p.price.toFixed(2)} ${CURRENCY}</g:price>
      <g:brand>${xml(BRAND)}</g:brand>
      <g:google_product_category>${xml(p.googleCategory || 'Apparel &amp; Accessories > Shoes')}</g:google_product_category>
      <g:product_type>${xml(p.productType || 'Shoes')}</g:product_type>
      <g:identifier_exists>no</g:identifier_exists>
      <g:shipping>
        <g:country>GE</g:country>
        <g:service>Worldwide tracked</g:service>
      </g:shipping>
    </item>`;
}).join('\n');

const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>ABDITORY</title>
    <link>${xml(BASE)}</link>
    <description>Custom-made gothic footwear and accessories, handmade in Tbilisi and shipped worldwide.</description>
${items}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(ROOT, 'feed.xml'), feed, 'utf8');

console.log(`feed.xml written — ${included.length} product(s)`);
for (const p of included) {
  console.log(`  in   ${p.id}  ${p.sku}  ${p.price.toFixed(2)} ${CURRENCY}  ${p.name}`);
}
if (skipped.length) {
  console.log(`\n${skipped.length} product(s) left out:`);
  for (const s of skipped) console.log(`  out  ${s.id}  ${s.name}  —  ${s.why}`);
}

/* Fail loudly rather than shipping an empty feed. */
if (!included.length) {
  console.error('\nERROR: the feed has no products in it. Not publishing that.');
  process.exit(1);
}

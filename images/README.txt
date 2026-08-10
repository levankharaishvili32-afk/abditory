Put your product photographs in this folder.

Then open data/products.js and add the file names to the product's
"images" list, for example:

    images: ["vesper-1.jpg", "vesper-2.jpg"]

The first image is the one shown on the card in the catalogue.
The second is shown when someone hovers over the card.
Any further images appear as thumbnails in the quick-view panel.

Until a product has images, the site draws a styled placeholder slot in
its place, so the layout stays intact.

Recommended: portrait 4:5 crops, the same shape as an Instagram post.
1200 x 1500 px is plenty. JPG, quality 80-85.

Two other images the site looks for:
  about.jpg  — the workshop photo in the About section.
               Uncomment the <img> line in index.html to switch it on.
  og.jpg     — the preview image shown when the link is shared or put
               in the Instagram bio. 1200 x 630 px works best.

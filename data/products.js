/* =====================================================================
   ABDITORY — PRODUCT DATA
   ---------------------------------------------------------------------
   This is the only file you need to edit to add, remove or change
   products. No build step. Save the file, refresh the page.

   HOW TO ADD A PRODUCT
   --------------------
   Copy one block between { } and change the values.

   id          PERMANENT public code: ABD-001, ABD-002, ...
               Used in the page URL (#product/ABD-001), in the product
               feed as g:id, and as the content_id for ad pixels later.
               Once assigned it is never changed and never reused, even
               if the product is deleted. New products carry on from the
               highest number.
   sku         PERMANENT internal code: ABD-SH-001 (SH = shoes).
               Accessories will use ABD-AC-, custom work ABD-CU-.
               Shown to the customer next to the photo so they can quote
               the exact item in a DM.
   category    "shoes" | "accessories" | "custom"   (lowercase)
   name        Product name, English. Title Case.
   name_ka     Product name, Georgian. Optional — leave "" if not ready.
   blurb       One short line shown on the card.
   blurb_ka    Georgian version. Optional.
   details     Longer description shown in the quick-view panel.
               This is also the feed description — keep it accurate.
   details_ka  Georgian version. Optional.
   specs       List of short spec lines shown in the quick-view panel.
   price       Number, or null.
                 null  → shows "Price on request"
                 125   → shows "125 €"   (currency is set in site.js)
   images      List of image file names, relative to the /images folder.
               Product photos live in images/products/ so the filename
               includes that: "products/abd-001.jpg".
               EMPTY LIST → a styled placeholder slot is drawn instead,
               and the product is left OUT of the product feed.
               First image is the card image, second is the hover image.
   featured    true on ONE product — it fills the large hero image slot.
   sold_out    true hides the order button and shows a SOLD OUT mark.

   googleCategory / productType
               Only used by the product feed (feed.xml), not by the site.
               googleCategory must be a real value from Google's taxonomy.
               productType is your own free-form grouping.

   NOT STORED HERE, ON PURPOSE
   ---------------------------
   The feed's title, description, price, link and image_link are DERIVED
   from the fields above by scripts/build-feed.js. Storing them twice
   would mean editing a product name here and silently shipping the old
   one to Meta. One source of truth.

   IMAGE ADVICE
   ------------
   Portrait 4:5 crops (same shape as an Instagram post) look best.
   1200x1500px is plenty. Put the files in images/products/.
   ===================================================================== */

window.ABDITORY_PRODUCTS = [

  /* ===================================================================
     CATALOGUE — imported from ABDITORY_SHOES.xlsx, in sheet row order.

     Descriptions are exactly as you wrote them. Titles were tidied to
     Title Case. The blurb and specs lines are mine, pulled out of your
     descriptions — no new facts invented, but read them over.
     =================================================================== */

  {
    id: "ABD-001",
    sku: "ABD-SH-001",
    category: "shoes",
    name: "Gothic Armor-Plate Knee-High Platform Boots",
    name_ka: "",
    blurb: "Knee-high, ladder of buckle straps, 10cm platform.",
    blurb_ka: "",
    details:
      "Command attention with these industrial gothic knee-high boots featuring a dramatic 10cm platform heel. Designed for maximum visual impact, they showcase a ladder of multi-buckle straps accented with sleek rectangular metal plates along the shaft and vamp. Elevated on a towering 10cm solid platform base, these boots fuse heavy cyber-armor aesthetics with effortless alternative style.",
    details_ka: "",
    specs: ["10cm platform", "Multi-buckle straps", "Rectangular metal plates", "Knee-high shaft"],
    price: 125,
    images: ["products/abd-001.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-002",
    sku: "ABD-SH-002",
    category: "shoes",
    name: "Darkwave Heavy Spiked Multi-Buckle Platform Boots",
    name_ka: "",
    blurb: "Lace-up front, skull buckles, cone spikes, metal toe plates.",
    blurb_ka: "",
    details:
      "Unleash pure gothic attitude with these knee-high industrial platform boots. Designed for maximum visual punch, they feature a full front lace-up panel overlaid with multiple studded buckle straps detailed with metallic skull accents and aggressive cone spikes. Built on a chunky platform sole capped with silver metal toe plates and side harness buckles, these boots combine extreme alternative aesthetic with full inner zippers for easy wear.",
    details_ka: "",
    specs: ["Chunky platform sole", "Metallic skull accents", "Cone spikes", "Full inner zip"],
    price: 135,
    images: ["products/abd-002.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-003",
    sku: "ABD-SH-003",
    category: "shoes",
    name: "Heavy Metal Spiked Multi-Buckle Knee-High Boots",
    name_ka: "",
    blurb: "Multi-buckle shaft, skull hardware, 11cm platform.",
    blurb_ka: "",
    details:
      "Elevate your alternative style with these heavy-duty gothic knee-high boots featuring a bold 11cm platform heel. Designed with a multi-buckle strap layout, metallic skull hardware, and sharp cone spikes along the shaft and vamp, these boots deliver uncompromising attitude. Set atop an 11cm chunky platform sole accented with metallic grommets and side skull buckles, they come complete with lace-up fronts, top O-ring pull tabs, and full inner zippers for easy wearing.",
    details_ka: "",
    specs: ["11cm platform", "Metallic skull hardware", "O-ring pull tabs", "Full inner zip"],
    price: 145,
    images: ["products/abd-003.jpg"],
    featured: true,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-004",
    sku: "ABD-SH-004",
    category: "shoes",
    name: "Gothic Skull & Crossbones Ankle Platform Boots",
    name_ka: "",
    blurb: "Ankle height, skull-and-crossbones plates, spider charms.",
    blurb_ka: "",
    details:
      "Command maximum alternative presence in these heavy-duty gothic ankle boots elevated on a 10cm platform heel. Detailed with metallic skull-and-crossbones hardware, silver studs, and sharp cone spikes around the ankle, vamp, and heel counter, these boots bring intense industrial energy. Set on a 10cm chunky platform sole wrapped with studded leather bands, skull plates, and metal spider charms, they feature lace-up fronts and full inner zippers for effortless wear.",
    details_ka: "",
    specs: ["10cm platform", "Skull-and-crossbones hardware", "Metal spider charms", "Full inner zip"],
    price: 125,
    images: ["products/abd-004.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-005",
    sku: "ABD-SH-005",
    category: "shoes",
    name: "Shadow-Realm Skull & Chain Mid-Top Platforms",
    name_ka: "",
    blurb: "Mid-top sneaker on an 11cm block sole, chains across the toe.",
    blurb_ka: "",
    details:
      "Channel pure underground energy with these low-profile, high-impact sneakers set on a commanding 11cm platform heel. Blending sneaker-boot comfort with heavy metal aggression, they showcase a metallic skull-and-crossbones emblem emblazoned across the padded tongue, sharp lethal spikes framing the eyelets, and interlocking silver chains strung across the toe cap. The ultra-thick 11cm sculpted block sole is enveloped in a studded harness band decorated with metallic spider plaques and gunmetal side buckles—offering an untouchable darkwave aesthetic with every step.",
    details_ka: "",
    specs: ["11cm sculpted block sole", "Skull emblem on the tongue", "Silver toe chains", "Gunmetal side buckles"],
    price: 120,
    images: ["products/abd-005.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-006",
    sku: "ABD-SH-006",
    category: "shoes",
    name: "Platforms with Chains & Spikes",
    name_ka: "",
    blurb: "Spiked straps wrapped in oversized silver chains.",
    blurb_ka: "",
    details:
      "Dominate the room in these industrial gothic platform boots. Built for heavy alternative style, they feature layers of spike-studded buckle straps wrapped in oversized silver chains. A thick, chunk platform base is detailed with metallic spider and scorpion emblems and wrapped buckle hardware, finished with an inner side zip for easy wear.",
    details_ka: "",
    specs: ["Chunky platform base", "Oversized silver chains", "Spider and scorpion emblems", "Inner side zip"],
    price: 140,
    images: ["products/abd-006.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-007",
    sku: "ABD-SH-007",
    category: "shoes",
    name: "Fluffy Custom-Made Platforms",
    name_ka: "",
    blurb: "Faux fur, studded harness straps, cone spikes.",
    blurb_ka: "",
    details:
      "Bring maximalist edge to your look with these plush faux-fur platform boots. Built for bold alternative style, they wrap ultra-fluffy black faux fur in dramatic studded harness straps and fierce metallic cone spikes. Complete with heavy-duty buckles and an exaggerated platform base, they deliver instant attitude to any cyber-goth or rave ensemble.",
    details_ka: "",
    specs: ["Faux fur upper", "Studded harness straps", "Metallic cone spikes", "Exaggerated platform base"],
    price: 135,
    images: ["products/abd-007.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-008",
    sku: "ABD-SH-008",
    category: "shoes",
    name: "Knee-High Gothic Platform Boots",
    name_ka: "",
    blurb: "Knee-high, hanging skull-and-spike charms, studded sole.",
    blurb_ka: "",
    details:
      "Make an unforgettable statement with these knee-high gothic platform boots. Engineered for high-impact alternative style, they feature multi-buckle straps, metallic skull hardware, and sharp spike detailing. A thick studded platform sole is trimmed with hanging skull-and-spike charms, complete with front laces and an inner zipper for easy wearing.",
    details_ka: "",
    specs: ["Studded platform sole", "Skull-and-spike charms", "Multi-buckle straps", "Inner zip"],
    price: 145,
    images: ["products/abd-008.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-009",
    sku: "ABD-SH-009",
    category: "shoes",
    name: "Cybergoth Triple-Strap Wedge Platform Boots",
    name_ka: "",
    blurb: "Three Velcro straps on a sculpted wedge sole.",
    blurb_ka: "",
    details:
      "Level up your streetwear game with these sleek cybergoth wedge platform boots. Combining a futuristic techwear silhouette with maximum height, they feature a multi-texture matte and padded upper secured by three heavy-duty hook-and-loop (Velcro) straps. Built on a massive sculpted wedge platform sole, they deliver pure darkwave attitude with effortless pull-on convenience.",
    details_ka: "",
    specs: ["Sculpted wedge sole", "Three hook-and-loop straps", "Matte and padded upper", "Pull-on"],
    price: 130,
    images: ["products/abd-009.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  /* ===================================================================
     SECOND BATCH - from ABDITORY SHOES 1.xlsx, rows 10-19.
     Numbering carries on from ABD-009; nothing above was renumbered.
     =================================================================== */

  {
    id: "ABD-010",
    sku: "ABD-SH-010",
    category: "shoes",
    name: "High-Rise Matte Leather Platform Boots",
    name_ka: "",
    blurb: "Mid-calf, 15cm dual-tier sole, side zips.",
    blurb_ka: "",
    details:
      "Engineered for a commanding silhouette, these mid-calf boots blend bold architectural structure with clean, functional detailing. Crafted in a smooth matte black finish, the standout feature is a towering dual-tiered 15 cm continuous platform sole designed for maximum height and impact, finished with subtle base tread for added stability. The front lace-up closure is secured with polished silver-tone metal eyelets, perfectly complemented by fully functional exposed side zippers that allow for smooth, effortless wear. Featuring precise panel stitching and a defined mid-calf upper, this pair delivers an assertive, high-impact look without sacrificing structured support.",
    details_ka: "",
    specs: ["15cm dual-tier platform", "Silver-tone eyelets", "Working side zips", "Mid-calf shaft"],
    price: 155,
    images: ["products/abd-010.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-011",
    sku: "ABD-SH-011",
    category: "shoes",
    name: "Contrast Panel Buckled Platform Slides",
    name_ka: "",
    blurb: "Slip-on, two wide straps, 13cm wedge.",
    blurb_ka: "",
    details:
      "Designed with a heavy-duty aesthetic, these slip-on platform slides merge utility hardware with a dynamic two-tone construction. The upper features dual wide faux-leather straps secured by substantial, polished metallic buckles with engraved detail work and heavy eyelet accents. Built on a sculpted 13 cm wedge-style platform, the sole showcases a striking interplay of dark grey canvas texturing set against structured black overlays, finished with a deeply grooved rubber outsole for reliable grip and an assertive profile.",
    details_ka: "",
    specs: ["13cm wedge platform", "Engraved metal buckles", "Two-tone canvas and black", "Grooved rubber outsole"],
    price: 115,
    images: ["products/abd-011.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-012",
    sku: "ABD-SH-012",
    category: "shoes",
    name: "Patent Grommet Buckled Platform Boots",
    name_ka: "",
    blurb: "Patent ankle boot, grommet straps, 11cm platform.",
    blurb_ka: "",
    details:
      "Crafted with a high-shine vinyl sheen, these ankle-length boots make an uncompromising statement through high-contrast materials and bold hardware elements. The glossy patent upper is enveloped by thick dual straps lined with silver-tone metal grommets and anchored by substantial double-prong roller buckles. Anchoring the design is a stacked, two-tone continuous 11 cm platform that transitions from a textured matte mid-band to a sleek, polished patent base, delivering an ultra-modern edge alongside substantial lift.",
    details_ka: "",
    specs: ["11cm two-tone platform", "High-shine patent", "Metal grommet straps", "Double-prong roller buckles"],
    price: 135,
    images: ["products/abd-012.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-013",
    sku: "ABD-SH-013",
    category: "shoes",
    name: "Spiked Harness Star Platform Boots",
    name_ka: "",
    blurb: "Knee-high, star appliques, removable spiked harness.",
    blurb_ka: "",
    details:
      "Combining extreme hardware with graphic detailing, these knee-high platform boots showcase a multi-textured construction with distinct alternative accents. The tall lace-up shaft is layered with skull-patterned side paneling and highlighted by silver contrast star appliqués extending across the upper and sole casing. Removable, trailing harness straps heavily studded with conical spikes wrap the calf and ankle, anchored by skull-embossed buckles. Resting on a massive, sculpted 13 cm wedge platform, this design offers maximum presence and high-impact structural detail.",
    details_ka: "",
    specs: ["13cm sculpted wedge", "Star appliques", "Removable spiked harness", "Skull-embossed buckles"],
    price: 165,
    images: ["products/abd-013.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-014",
    sku: "ABD-SH-014",
    category: "shoes",
    name: "Full-Spike Platform Mule Clogs",
    name_ka: "",
    blurb: "Backless clog, spikes over the whole upper and sole.",
    blurb_ka: "",
    details:
      "Engineered for extreme visual impact, these backless platform clogs deliver an uncompromising, aggressive design. Crafted from smooth black synthetic leather, the entire upper and continuous 10 cm platform base are densely studded with metallic cone spikes for a 360-degree tactical look. Featuring an easy slip-on silhouette, a padded footbed, and a deep wedge elevation, this pair merges bold industrial hardware with effortless wearable design.",
    details_ka: "",
    specs: ["10cm continuous platform", "Spikes all round", "Padded footbed", "Slip-on"],
    price: 120,
    images: ["products/abd-014.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-015",
    sku: "ABD-SH-015",
    category: "shoes",
    name: "Spiked Faux-Fur Harness Platform Boots",
    name_ka: "",
    blurb: "Faux fur, spiked shaft straps, 10cm platform.",
    blurb_ka: "",
    details:
      "Striking a balance between tactile texture and heavy metal accents, these mid-calf boots are fully enveloped in a plush, grey-and-white mottled faux fur. The soft exterior is dramatically contrasted by dual leather shaft straps heavily loaded with sharp metallic cone spikes and trailing studded belts secured with ornamental buckles. A matching studded leather harness wraps around the foot and elevated 10 cm platform base, which is also trimmed in faux fur for a cohesive, polar-industrial statement piece.",
    details_ka: "",
    specs: ["10cm platform", "Plush faux fur", "Spiked shaft straps", "Studded foot harness"],
    price: 140,
    images: ["products/abd-015.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-016",
    sku: "ABD-SH-016",
    category: "shoes",
    name: "Tactical Two-Tone Strapped Platform Sandals",
    name_ka: "",
    blurb: "Open toe, hook-and-loop straps, 13cm wedge.",
    blurb_ka: "",
    details:
      "Blending utility-inspired design with a clean, high-contrast palette, these open-toe platform sandals feature a durable, multi-strap upper crafted with adjustable hook-and-loop fasteners for a customized fit. The upper is anchored by a high-rise, sculpted 13 cm wedge platform that showcases a distinct paneling of muted purple canvas texture set against solid black suede-like overlays. Finished with a comfortable slingback heel strap and a serrated rubber tread, this pair delivers an effortless, streetwear-ready profile with maximum structural height.",
    details_ka: "",
    specs: ["13cm wedge platform", "Hook-and-loop straps", "Slingback heel strap", "Serrated rubber tread"],
    price: 130,
    images: ["products/abd-016.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-017",
    sku: "ABD-SH-017",
    category: "shoes",
    name: "Hardware-Laden Embellished Platform Slides",
    name_ka: "",
    blurb: "Spikes, chain links, spade and spider charms.",
    blurb_ka: "",
    details:
      "Defined by heavy metal hardware and gothic motifs, these open-toe platform slides deliver an intensely detailed, maximalist profile. The multi-strap upper combines conical spikes, metal track zips, curb-chain links, and polished silver studs alongside spade and spider charms. Wrapping around the continuous 10 cm wedge platform base is a harness-style leather band loaded with matching studs, skull buckles, and metallic appliqués, offering a bold 360-degree industrial look with high-impact elevation.",
    details_ka: "",
    specs: ["10cm wedge platform", "Spikes, chains and studs", "Spade and spider charms", "Skull buckles"],
    price: 120,
    images: ["products/abd-017.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-018",
    sku: "ABD-SH-018",
    category: "shoes",
    name: "Multi-Buckle Heavy Hardware Knee-High Boots",
    name_ka: "",
    blurb: "Four buckle straps, hex-nut studs, 10cm wedge.",
    blurb_ka: "",
    details:
      "Constructed with an intense industrial aesthetic, these tall knee-high boots present a heavily structured silhouette wrapped in functional hardware. A full front lace-up closure is layered with four wide, eyelet-punched leather straps featuring rectangular metallic buckles, complimented by hex-nut stud embellishments along the upper collar and vamp. The continuous 10 cm platform wedge sole is encased in a removable buckle-harness trim adorned with oversized metallic grommets and rounded studs, delivering a formidable presence with complete structural impact.",
    details_ka: "",
    specs: ["10cm platform wedge", "Four eyelet-punched straps", "Hex-nut studs", "Removable buckle harness"],
    price: 145,
    images: ["products/abd-018.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  {
    id: "ABD-019",
    sku: "ABD-SH-019",
    category: "shoes",
    name: "Spiked Belt-Accented Platform Mules",
    name_ka: "",
    blurb: "Minimal strap, spikes and O-rings, 10cm wedge.",
    blurb_ka: "",
    details:
      "Defined by a minimal upper paired with sharp metallic hardware, these open-toe slide mules feature a padded black synthetic strap topped with a belted harness overlay. The decorative strap is studded with sharp conical spikes, metallic O-rings, and a polished silver buckle, creating an aggressive focal point against a clean silhouette. Set atop a smooth, seamless 10 cm wedge platform, this design combines easy slip-on convenience with a bold, dark aesthetic.",
    details_ka: "",
    specs: ["10cm wedge platform", "Conical spikes and O-rings", "Padded strap", "Slip-on"],
    price: 110,
    images: ["products/abd-019.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-020",
    sku: "ABD-SH-020",
    category: "shoes",
    name: "Shadow Fur Ring-Chained Platform Boots",
    name_ka: "",
    blurb: "Plush faux fur, chained O-rings, 10cm platform.",
    blurb_ka: "",
    details:
      "Unleash high-impact industrial chaos with the Nightmare Hydra Platforms. Wrapped in hyper-dense, plush black faux fur, these extreme platform boots fuse raw texture with uncompromising metal accents. Featuring a 10 cm stacked platform elevation, the silhouette is heavily detailed with chained O-rings, spiked faux-leather strap harnesses, and a cascading triple-ring metal hardware layout across the toe. Engineered for the bold, these statement boots deliver maximum volume and dark alternative edge with every step.",
    details_ka: "",
    specs: ["10cm platform", "Chained O-rings", "Plush faux fur", "Spiked harness straps"],
    price: 135,
    images: ["products/abd-020.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-021",
    sku: "ABD-SH-021",
    category: "shoes",
    name: "Cryptic Skull Harness Platform Boots",
    name_ka: "",
    blurb: "Faux fur shaft, four skull-buckled straps, 10cm platform.",
    blurb_ka: "",
    details:
      "Command any room with the Cryptic Skull Harness Platforms. Built with a commanding 10 cm platform sole, these boots are enveloped in ultra-plush black faux fur for an oversized, tactile silhouette. Four adjustable black faux-leather straps wrap across the front, secured with heavy-duty silver buckles, metal eyelets, and detailed skull emblems. Perfect for high-impact gothic and alternative styling, they deliver the ultimate blend of aggressive metal accents and volume.",
    details_ka: "",
    specs: ["10cm platform", "Skull emblems", "Four buckled straps", "Plush faux fur"],
    price: 135,
    images: ["products/abd-021.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-022",
    sku: "ABD-SH-022",
    category: "shoes",
    name: "Vanguard Contrast Harness Boots",
    name_ka: "",
    blurb: "White contrast stitch, crossed straps, 12cm block platform.",
    blurb_ka: "",
    details:
      "Dominate the pavement with the Vanguard Contrast Harness Boots. Constructed from sleek matte black faux leather, these high-impact platform boots feature striking white contrast stitching that highlights every sharp edge and panel. Standing tall on a massive 12 cm block platform heel, the shaft is wrapped in multiple crisscrossing buckled straps, silver eyelets, and metallic studs across the front toe box. Finished with hardware-embellished cutouts on the massive platform sole and a crimson inner lining accent, these boots deliver an unyielding industrial silhouette built to turn heads",
    details_ka: "",
    specs: ["12cm block platform", "White contrast stitching", "Crisscross buckled straps", "Crimson inner lining"],
    price: 125,
    images: ["products/abd-022.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-023",
    sku: "ABD-SH-023",
    category: "shoes",
    name: "Subversion High-Top Canvas Platform Boots",
    name_ka: "",
    blurb: "Canvas knee-high, five grommet straps, 11cm striped sole.",
    blurb_ka: "",
    details:
      "Transform classic streetwear aesthetics into high-voltage alternative style with the Subversion High-Top Platforms. Built from durable black canvas with contrast white stitching, these knee-high sneaker boots feature a full front-lace design paired with crisp white laces and metal eyelets. The shaft is wrapped in five adjustable, grommeted buckle straps for an intense cyber-punk edge, while side zippers ensure effortless wear. Elevated on a striking 11 cm striped platform sole with a treaded bottom, these boots fuse skater heritage with raw industrial volume.",
    details_ka: "",
    specs: ["11cm striped platform", "Five buckle straps", "Black canvas", "Side zip"],
    price: 130,
    images: ["products/abd-023.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sneakers"
  },
  {
    id: "ABD-024",
    sku: "ABD-SH-024",
    category: "shoes",
    name: "Obsidian Web Laced Patent Platforms",
    name_ka: "",
    blurb: "Patent web lacing, D-ring hooks, 16cm block heel.",
    blurb_ka: "",
    details:
      "Make an unforgettable entrance with the Obsidian Web Laced Platforms. Crafted in high-gloss black patent leather, these extreme statement boots feature an extraordinary web-like cord configuration that wraps continuously across the entire upper, rounded toe box, block platform, and heel. Metallic D-ring lace hooks cover the entire silhouette from top to bottom, anchoring intricate speed-lacing detailing. Standing on a massive 16 cm elevated block heel with an inner side zipper for easy wear, these platform boots deliver ultra-sleek shine and complex structural drama.",
    details_ka: "",
    specs: ["16cm block platform", "Web cord lacing", "Patent leather", "Inner side zip"],
    price: 155,
    images: ["products/abd-024.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-025",
    sku: "ABD-SH-025",
    category: "shoes",
    name: "Venom Skull Patent Platform High-Tops",
    name_ka: "",
    blurb: "Patent high-top, 3D skull tongue, 8cm striped sole.",
    blurb_ka: "",
    details:
      "Inject high-gloss rebellion into your rotation with the Venom Skull Patent Platforms. Styled in sleek, reflective black patent leather, these high-top sneaker platforms feature an oversized tongue emblazoned with a metallic 3D skull and crossbones emblem. An adjustable ankle strap studded with pyramid rivets locks in the fit, while classic lace-up detailing and crisp white toe caps add high-contrast definition. Set on a solid 8 cm multi-striped platform sole with a treaded base, these shoes blend streetwear energy with an unapologetic metal edge.",
    details_ka: "",
    specs: ["8cm striped platform", "3D skull emblem", "Pyramid-stud ankle strap", "White toe cap"],
    price: 115,
    images: ["products/abd-025.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sneakers"
  },
  {
    id: "ABD-026",
    sku: "ABD-SH-026",
    category: "shoes",
    name: "Widow's Web Arachnid Platform Sneakers",
    name_ka: "",
    blurb: "Spiders, spades and spiderweb chains on an 11cm sole.",
    blurb_ka: "",
    details:
      "Infuse dark fantasy with high-impact hardware in the Widow's Web Platforms. Crafted from smooth black leatherette, these low-top platform sneakers sit atop an aggressive 11 cm sculpted platform sole heavily embellished with metallic skulls, ace spades, spiders, and side buckles. The upper is packed with intricate detailing—featuring sharp metallic spikes, skull-embossed straps, hanging silver spiderweb chains, and coffin charms. Topped with vibrant, glittering orange and hot pink spider accents perched on each tongue, these platforms blend macabre symbolism with bold, multi-textured alternative design.",
    details_ka: "",
    specs: ["11cm sculpted platform", "Spiderweb chains", "Skull and spade hardware", "Coffin charms"],
    price: 125,
    images: ["products/abd-026.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sneakers"
  },
  {
    id: "ABD-027",
    sku: "ABD-SH-027",
    category: "shoes",
    name: "Anarchy Spike Knee-High Platform Boots",
    name_ka: "",
    blurb: "Five spiked harness straps, skull buckles, 12cm platform.",
    blurb_ka: "",
    details:
      "Rule the underworld in the Anarchy Spike Knee-High Platforms. Crafted from premium smooth black leatherette, these towering boots are engineered with a commanding 12 cm studded block platform heel. The entire front lace-up closure is reinforced with heavy-duty metal lace hooks, topped with O-ring pulls at the collar. Five horizontal harness straps wrap the shaft, each armed with aggressive outward-facing metal spikes and detailed skull buckles. Finished with studded toe boxes, cross-adorned platform toe caps, and full-coverage spikes along the rear heel, this pair delivers maximum dystopian armor for your footwear collection.",
    details_ka: "",
    specs: ["12cm studded platform", "Five spiked harness straps", "Skull buckles", "O-ring collar pulls"],
    price: 150,
    images: ["products/abd-027.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-028",
    sku: "ABD-SH-028",
    category: "shoes",
    name: "Malice Skull Shield Platform Sneakers",
    name_ka: "",
    blurb: "Fold-over skull shield tongue, cone spikes, 10cm base.",
    blurb_ka: "",
    details:
      "Dominate the underground scene with the Malice Skull Shield Platforms. Crafted from smooth matte black faux leather, these chunky ankle-high sneaker platforms feature a dramatic fold-over tongue shield loaded with 3D metallic skull hardware and surroundingcone spikes. The 10 cm elevated platform base is completely wrapped in gothic hardware—boasting prominent skull emblems, sharp side studs, spiked front toe bumpers, and heavy metal buckles along the side harness. Designed for ultimate volume and dark industrial flair, these platform boots bring heavy metal attitude to every stride.",
    details_ka: "",
    specs: ["10cm platform", "3D skull shield tongue", "Cone spikes", "Side harness buckles"],
    price: 120,
    images: ["products/abd-028.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sneakers"
  },
  {
    id: "ABD-029",
    sku: "ABD-SH-029",
    category: "shoes",
    name: "Phantom Web Corset Platform Boots",
    name_ka: "",
    blurb: "Web lacing around a 13cm base, studded corset straps.",
    blurb_ka: "",
    details:
      "Command absolute authority with the Phantom Web Corset Platforms. Crafted in smooth matte black faux leather, these mid-calf statement boots feature an intricate web-lacing design that wraps completely around the 13 cm chunky platform base and heel block. Silver D-ring lace hooks cover the entire silhouette, securing crisscrossing cord details from toe to collar. Two heavy-duty, studded leatherette harness straps with oversized metallic buckles cinch the shaft, complemented by a spiked vamp harness and full-length inner side zippers for effortless wear.",
    details_ka: "",
    specs: ["13cm chunky platform", "Web cord lacing", "Studded harness straps", "Full inner zip"],
    price: 160,
    images: ["products/abd-029.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-030",
    sku: "ABD-SH-030",
    category: "shoes",
    name: "Skullette Ribbon Canvas Platform Boots",
    name_ka: "",
    blurb: "Studded bow, skull buckles, 10cm layered sole.",
    blurb_ka: "",
    details:
      "Merge sweet rebellion with heavy metal contrast in the Skullette Ribbon Canvas Platforms. Crafted from durable black canvas with sharp white stitching, these knee-high sneaker boots feature high-contrast white front laces paired with a studded faux-leather bow accent clipped to the tongue. Multiple studded harness straps wrap the shaft, fitted with intricate skull-shaped metallic buckles and side skull studs. Standing on a 10 cm multi-layered platform sole, the base is wrapped in high-contrast skull and crossbones graphics for a playful yet dark ska-punk edge.",
    details_ka: "",
    specs: ["10cm layered platform", "Skull-shaped buckles", "Studded bow accent", "Skull and crossbones sole graphic"],
    price: 130,
    images: ["products/abd-030.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sneakers"
  },
  {
    id: "ABD-031",
    sku: "ABD-SH-031",
    category: "shoes",
    name: "Vandal Spike Belted Canvas Platform Boots",
    name_ka: "",
    blurb: "Trailing studded belts, spike fan, 8cm striped sole.",
    blurb_ka: "",
    details:
      "Channel raw punk chaos with the Vandal Spike Belted Platforms. Constructed from deep black canvas with crisp white contrast stitching, these knee-high sneaker boots feature stark white front lacing and an 8 cm multi-striped platform sole. The design is heavily armored with long, trailing faux-leather belts densely studded with silver pyramid rivets, featuring an explosive fan of elongated metal spikes draped across the upper shaft. Finished with skull-engraved buckle straps over the vamp and an inner side zipper, these boots deliver maximum alternative aggression and visual volume.",
    details_ka: "",
    specs: ["8cm striped platform", "Pyramid-studded belts", "Elongated spike fan", "Skull-engraved buckles"],
    price: 135,
    images: ["products/abd-031.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sneakers"
  },
  {
    id: "ABD-032",
    sku: "ABD-SH-032",
    category: "shoes",
    name: "Venomous Thorn Spiked Platform Sandals",
    name_ka: "",
    blurb: "Open toe, elongated thorns, 10cm hardware-wrapped sole.",
    blurb_ka: "",
    details:
      "Redefine dark warm-weather fashion with the Venomous Thorn Spiked Platform Sandals. Crafted from smooth black leatherette, these open-toe platform sandals feature an aggressive 10 cm sculpted platform sole completely wrapped in heavy-duty gothic hardware—including 3D skulls, metallic spider emblems, side buckles, and surrounding cone studs. The front toe strap is loaded with miniature skull studs and outward-facing spikes, while the wide midfoot arch strap is armed with dramatic, elongated metal thorns. An adjustable ankle buckle strap ensures a secure fit, making these sandals the ultimate combination of brutal hardware and breathable alternative style.",
    details_ka: "",
    specs: ["10cm sculpted platform", "Elongated metal thorns", "3D skulls and spiders", "Adjustable ankle buckle"],
    price: 125,
    images: ["products/abd-032.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sandals"
  },
  {
    id: "ABD-033",
    sku: "ABD-SH-033",
    category: "shoes",
    name: "Grim Crossbearer Spiked Ankle Boots",
    name_ka: "",
    blurb: "Cross emblems and spikes on a 10cm ankle platform.",
    blurb_ka: "",
    details:
      "Gear up for the end times with the Grim Crossbearer Spiked Boots. Cut from matte black leatherette, these heavy-duty ankle platform boots sit atop a chunky 10 cm platform base loaded with gothic hardware—including metallic cross emblems, spiders, side harness buckles, and studded accents. The shaft and vamp feature triple-tiered buckled straps fitted with detailed skull buckles, metallic cross rivets, and outward-projecting spikes. Complete with a heavily spiked toe cap and heel counter, these boots deliver unyielding dystopian armor for any alternative look.",
    details_ka: "",
    specs: ["10cm platform", "Metallic cross emblems", "Triple buckled straps", "Spiked toe cap"],
    price: 125,
    images: ["products/abd-033.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-034",
    sku: "ABD-SH-034",
    category: "shoes",
    name: "Necro-Spike Cutout Platform Mules",
    name_ka: "",
    blurb: "Cone-spiked double straps, toe cutouts, 13cm wedge.",
    blurb_ka: "",
    details:
      "Exude dramatic industrial flair with the Necro-Spike Cutout Platforms. Crafted from smooth matte black faux leather, these open-vamp platform mules feature double buckled top straps adorned with row upon row of fierce silver cone spikes. Metallic O-rings highlight the front toe cutouts, while an adjustable slingback ankle strap keeps the fit secure. Grounded by a massive 13 cm wedge platform sole with aggressive deep-lug treads, these shoes fuse sleek cutouts with brutal alternative hardware.",
    details_ka: "",
    specs: ["13cm wedge platform", "Rows of cone spikes", "Toe cutouts with O-rings", "Slingback strap"],
    price: 120,
    images: ["products/abd-034.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Mules"
  },
  {
    id: "ABD-035",
    sku: "ABD-SH-035",
    category: "shoes",
    name: "Cyber Armor Open-Toe Platform Boots",
    name_ka: "",
    blurb: "Caged open toe, spiked plates, 10cm sculpted sole.",
    blurb_ka: "",
    details:
      "Command the room with the Cyber Armor Open-Toe Platforms. Crafted from smooth matte black faux leather, these open-toe, cage-style ankle boots combine cutout ventilation with heavy-duty metal hardware. The shaft and vamp are wrapped in four adjustable buckle straps featuring metallic plates armed with sharp cone spikes and O-ring pull tabs at the collar. Standing on a massive 10 cm sculpted platform sole adorned with metallic front toe plates, side buckles, and spider hardware, these platform boots deliver futuristic industrial aggression for your dark aesthetic.",
    details_ka: "",
    specs: ["10cm sculpted platform", "Four spiked strap plates", "Open-toe cage cutouts", "Spider hardware"],
    price: 130,
    images: ["products/abd-035.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-036",
    sku: "ABD-SH-036",
    category: "shoes",
    name: "Void Runner Techwear Platform Sandals",
    name_ka: "",
    blurb: "Nylon triple strap, utility buckles, 13cm wedge.",
    blurb_ka: "",
    details:
      "Fuse brutalist volume with tactical utility in the Void Runner Techwear Platforms. Crafted from deep black canvas and high-grade nylon, these open-toe platform sandals feature a triple-strap upper secured with matte black adjustable hook-and-loop utility buckles. A padded ankle harness delivers structural support, while the massive 13 cm sculpted wedge platform base provides extreme height with a clean, monochrome profile. Finished with a heavy-duty lugged tread, these platforms offer the ultimate futuristic street-tech silhouette.",
    details_ka: "",
    specs: ["13cm wedge platform", "Hook-and-loop utility straps", "Padded ankle harness", "Lugged tread"],
    price: 130,
    images: ["products/abd-036.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Sandals"
  },
  {
    id: "ABD-037",
    sku: "ABD-SH-037",
    category: "shoes",
    name: "Gargoyle Sculpted Open-Toe Platform Boots",
    name_ka: "",
    blurb: "Gargoyle dragon buckles, side cutouts, 12cm wedge.",
    blurb_ka: "",
    details:
      "Elevate dark gothic glamour with the Gargoyle Sculpted Open-Toe Platforms. Constructed from smooth black leatherette, these open-toe ankle boots feature bold geometric side cutouts paired with an intricate quadrupled strap closure. Each strap is anchored by ornate, metallic gargoyle-motif dragon buckles that add an exquisite metalwork focus across the front. Elevated on a towering 12 cm sculpted wedge platform base, these statement boots include a convenient inner side zipper and double pull tabs for high-impact alternative styling.",
    details_ka: "",
    specs: ["12cm wedge platform", "Gargoyle dragon buckles", "Geometric side cutouts", "Inner side zip"],
    price: 130,
    images: ["products/abd-037.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },
  {
    id: "ABD-038",
    sku: "ABD-SH-038",
    category: "shoes",
    name: "Frostbite Faux-Fur Spiked Platform Mules",
    name_ka: "",
    blurb: "Faux fur throughout, cross studs, 12cm platform.",
    blurb_ka: "",
    details:
      "Fuse tactile luxury with aggressive industrial hardware in the Frostbite Faux-Fur Spiked Platforms. Wrapped in plush, pitch-black faux fur across the entire upper and massive 12 cm platform base, these slip-on mules feature a wide, spiked faux-leather strap across the vamp loaded with silver cone studs and central cross emblems. An ornate metallic Western-style buckle embellishes the upper ankle, while a studded leather harness wraps around the plush sole—detailed with metallic spiders, ace spades, and side buckles. These mules offer a dramatic balance of soft texture and heavy metal edge.",
    details_ka: "",
    specs: ["12cm platform", "Plush faux fur", "Cone studs and cross emblems", "Western-style buckle"],
    price: 125,
    images: ["products/abd-038.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Mules"
  },
  {
    id: "ABD-039",
    sku: "ABD-SH-039",
    category: "shoes",
    name: "Sacred Heart Spiked Chime Platform Mary Janes",
    name_ka: "",
    blurb: "Mary Jane with draped chains on a 13cm block heel.",
    blurb_ka: "",
    details:
      "Blend gothic romance with heavy metal subversion in the Sacred Heart Spiked Chime Platforms. Crafted from smooth matte black faux leather, these exaggerated Mary Jane platform heels feature an ankle harness strap with silver buckles, metal eyelets, and draped side chains that hang down to the sole. The massive front platform is detailed with a studded heart cutout motif on the side, a vertical row of sharp cone spikes along the front seam, and a buckled rear heel strap. Grounded on a dramatic 13 cm block heel, these shoes deliver a dark, romantic silhouette with sharp industrial edge.",
    details_ka: "",
    specs: ["13cm block platform", "Draped side chains", "Studded heart cutout", "Ankle harness strap"],
    price: 120,
    images: ["products/abd-039.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Heels"
  },
  {
    id: "ABD-040",
    sku: "ABD-SH-040",
    category: "shoes",
    name: "FUCK OFF Spiked Platform Slides",
    name_ka: "",
    blurb: "Cone studs spell it out along a 10cm wedge.",
    blurb_ka: "",
    details:
      "Make an uncompromising statement with the FUCK OFF Spiked Platform Slides. Crafted from smooth matte black faux leather, these slip-on platform slides feature a wide vamp strap anchored by a studded harness band and an aggressive cluster of outward-facing silver spikes. The massive 10 cm wedge platform base takes rebellious design to the extreme, with metallic cone studs meticulously arranged along the lateral sides to spell out \"FUCK OFF.\" Combining easy slide-on convenience with raw punk hostility, these platforms are built for maximum attitude.",
    details_ka: "",
    specs: ["10cm wedge platform", "Studded lettering", "Outward-facing spikes", "Slip-on"],
    price: 130,
    images: ["products/abd-040.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Slides"
  },
  {
    id: "ABD-041",
    sku: "ABD-SH-041",
    category: "shoes",
    name: "FUCK OFF Spiked Platform Combat Boots",
    name_ka: "",
    blurb: "Twenty centimetres of wedge, studded lettering, laced.",
    blurb_ka: "",
    details:
      "Unleash pure hostility and extreme height with the FUCK OFF Spiked Platform Combat Boots. Crafted from smooth matte black faux leather with high-contrast white topstitching, these mid-calf lace-up boots feature silver metallic eyelets and a back pull tab. The monolithic, towering 20 cm wedge platform base commands immediate attention, heavily studded on the lateral sides with sharp metallic cone studs that spell out \"FUCK OFF.\" Engineered for maximum visual impact and unyielding punk attitude, these boots deliver an undeniable subcultural statement.",
    details_ka: "",
    specs: ["20cm wedge platform", "Studded lettering", "White topstitching", "Back pull tab"],
    price: 165,
    images: ["products/abd-041.jpg"],
    featured: false,
    sold_out: false,
    googleCategory: "Apparel & Accessories > Shoes",
    productType: "Shoes > Platform Boots"
  },

  /* ===================================================================
     EARLIER PRODUCTS — the six photographs you sent before the
     spreadsheet. The PHOTOS are real; the names and descriptions are
     ones I wrote from looking at the pictures.

     These still use the old ID format. Before you advertise, check
     whether any of them is the same shoe as one of ABD-001..009 above
     and delete the duplicate — do not let the same boot appear twice
     under two different codes.
     =================================================================== */

  {
    id: "STM-01",
    category: "shoes",
    name: "Studded Platform Mule",
    name_ka: "",
    blurb: "Open toe, dome studs across the whole platform.",
    blurb_ka: "",
    details:
      "A backless mule on a heavy block platform, with silver dome studs set in rows across the entire sole wall. Wide single strap over the foot, squared open toe. The studs are the whole point — they catch every light source in the room.",
    details_ka: "",
    specs: ["~9cm platform", "Silver dome studs", "Open squared toe", "Backless mule"],
    price: null,
    images: ["studded-mule-1.jpg"],
    featured: false,
    sold_out: false
  },

  {
    id: "TNK-02",
    category: "shoes",
    name: "Tank Sole Platform Boot",
    name_ka: "",
    blurb: "Matte leather, metal clip lacing, tank tread sole.",
    blurb_ka: "",
    details:
      "Matte black leather over a moulded tank sole with bolt detailing and a deep lug tread. Laced through metal clip hardware rather than plain eyelets, so it tightens fast and holds. The heaviest silhouette in the range.",
    details_ka: "",
    specs: ["~10cm tank sole", "Metal clip lacing", "Lug tread", "Reinforced toe"],
    price: null,
    images: ["tank-boot-1.jpg"],
    featured: false,
    sold_out: false
  },

  {
    id: "FLM-03",
    category: "shoes",
    name: "Flame Patent Platform",
    name_ka: "",
    blurb: "High-shine patent, flame overlay, spiked platform rim.",
    blurb_ka: "",
    details:
      "The same tank construction in high-shine patent, with a flame overlay stitched across the toe and a row of studs running the rim of the platform. Reads wet under any light. The loud one.",
    details_ka: "",
    specs: ["~10cm tank sole", "Patent finish", "Flame overlay", "Studded platform rim"],
    price: null,
    images: ["flame-platform-1.jpg"],
    featured: false,
    sold_out: false
  },

  {
    id: "SKL-04",
    category: "shoes",
    name: "Spiked Skull Boot",
    name_ka: "",
    blurb: "Mid-calf, spikes, skull buckles, spider charm.",
    blurb_ka: "",
    details:
      "Mid-calf boot loaded with cone spikes and dome studs, closed with three skull-cast buckle straps and a side zip. A small spider charm hangs off the lower strap. The most decorated piece we make — and the one that takes longest.",
    details_ka: "",
    specs: ["Mid-calf shaft", "Cone spikes and dome studs", "Skull-cast buckles", "Side zip entry"],
    price: null,
    images: ["spiked-boot-1.jpg"],
    featured: false,
    sold_out: false
  },

  {
    id: "DRB-05",
    category: "shoes",
    name: "Skull Buckle Derby",
    name_ka: "",
    blurb: "Squared toe, skull buckle strap, wedge platform.",
    blurb_ka: "",
    details:
      "A derby on a solid wedge platform. Squared toe, standard lacing, and a wide strap across the instep closed with an oversized skull buckle. The quietest thing in the range — wearable daily, still obviously ours.",
    details_ka: "",
    specs: ["~8cm wedge platform", "Skull-cast buckle", "Squared toe", "Eyelet strap"],
    price: null,
    images: ["derby-1.jpg", "derby-2.jpg"],
    featured: false,
    sold_out: false
  }
];

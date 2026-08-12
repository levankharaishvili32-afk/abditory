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
    featured: true,
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

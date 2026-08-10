/* =====================================================================
   ABDITORY — PRODUCT DATA
   ---------------------------------------------------------------------
   This is the only file you need to edit to add, remove or change
   products. No build step. Save the file, refresh the page.

   HOW TO ADD A PRODUCT
   --------------------
   Copy one block between { } and change the values.

   id          Unique short code. Shown to the customer as the code they
               mention in the DM. Keep it short and typeable.
   category    "shoes" | "accessories" | "custom"   (lowercase)
   name        Product name, English.
   name_ka     Product name, Georgian. Optional — leave "" if not ready.
   blurb       One short line shown on the card.
   blurb_ka    Georgian version. Optional.
   details     Longer description shown in the quick-view panel.
   details_ka  Georgian version. Optional.
   specs       List of short spec lines shown in the quick-view panel.
   price       Number, or null.
                 null  → shows "Price on request"
                 260   → shows "260 ₾"   (currency is set in site.js)
   images      List of image file names inside the /images folder.
               EMPTY LIST → a styled placeholder slot is drawn instead,
               so the layout still looks finished. Add the file names and
               the real photos appear automatically. First image is the
               card image, second is the hover image.
   featured    true on ONE product — it fills the large hero image slot.
   sold_out    true hides the order button and shows a SOLD OUT mark.

   IMAGE ADVICE
   ------------
   Portrait 4:5 crops (same shape as an Instagram post) look best.
   1200x1500px is plenty. Put the files in the /images folder.
   ===================================================================== */

window.ABDITORY_PRODUCTS = [

  /* ===================================================================
     REAL PRODUCTS — from the six photos you sent.

     The photographs are real. The NAMES, DESCRIPTIONS and SPECS below
     are mine, written from what I can see in the pictures. Read them and
     correct anything wrong — especially platform heights, which I have
     estimated by eye and marked with a "~".
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
  },

  /* ===================================================================
     PLACEHOLDER ENTRIES — no photos yet.

     These are here so the Accessories and Custom filters are not empty
     while you are reviewing. Replace them with your real pieces, or
     delete the blocks entirely if you do not sell these.
     =================================================================== */

  {
    id: "CHN-06",
    category: "accessories",
    name: "Chain Harness",
    name_ka: "",
    blurb: "Layered chain, adjustable fit.",
    blurb_ka: "",
    details:
      "Layered chain harness with an adjustable back closure. Worn over or under. Weight and length adjusted to you.",
    details_ka: "",
    specs: ["Adjustable closure", "Choice of chain weight", "Silver or blackened finish", "Made to order"],
    price: null,
    images: [],
    featured: false,
    sold_out: false
  },

  {
    id: "STR-07",
    category: "accessories",
    name: "Star Garter",
    name_ka: "",
    blurb: "Elastic garter, cast star hardware.",
    blurb_ka: "",
    details:
      "Elastic garter with cast star hardware. Sold as a pair. Sized to thigh measurement so it stays where you put it.",
    details_ka: "",
    specs: ["Sold as a pair", "Cast star hardware", "Made to measurement", "Silver or blackened finish"],
    price: null,
    images: [],
    featured: false,
    sold_out: false
  },

  {
    id: "CST-08",
    category: "custom",
    name: "Full Custom Pair",
    name_ka: "",
    blurb: "Your design, from sketch to shipped.",
    blurb_ka: "",
    details:
      "Start from a reference, a sketch, or a description. We work out the last, the height, the materials and the hardware together, confirm the price, then make it. This is the core of what we do.",
    details_ka: "",
    specs: ["Built from your reference", "Full measurement fitting", "Material and hardware choice", "One pair, one person"],
    price: null,
    images: [],
    featured: false,
    sold_out: false
  },

  {
    id: "RWK-09",
    category: "custom",
    name: "Rework & Repair",
    name_ka: "",
    blurb: "Bring a pair back, or make it yours.",
    blurb_ka: "",
    details:
      "Resoling, re-heeling, added hardware, added platform, colour change. Send photos of what you have and what you want it to become.",
    details_ka: "",
    specs: ["Resole and re-heel", "Hardware added", "Platform added", "Priced per piece"],
    price: null,
    images: [],
    featured: false,
    sold_out: false
  }
];

/* =====================================================================
   ABDITORY — SITE SETTINGS
   ---------------------------------------------------------------------
   Everything here appears somewhere on the page. Change it and refresh.
   ===================================================================== */

window.ABDITORY_SITE = {
  instagram: "abditorystars",
  instagramUrl: "https://instagram.com/abditorystars",
  email: "", // e.g. "hello@abditory.com" — leave "" to hide the email line

  // Currency shown next to any price you set in products.js.
  // "₾" for lari, "€", "$", or write it out as "GEL" if you prefer.
  currency: "₾",

  // Shown in the Custom Orders section. PLACEHOLDER — set your real range.
  turnaround: "3–5 weeks",
  turnaround_ka: "3–5 კვირა",

  // Shown in the footer.
  shipsFrom: "Tbilisi, Georgia",

  // Set to true once you have translated everything in i18n.js,
  // and the EN / ქარ language switch appears in the header.
  georgianEnabled: false
};

/* =====================================================================
   TRANSLATIONS
   ---------------------------------------------------------------------
   Every piece of text on the page has a key. English is live.
   The Georgian column is a FIRST PASS — please read it through and
   correct the wording before switching georgianEnabled to true above.

   Product names and descriptions are NOT here — those live in
   products.js in the name_ka / blurb_ka / details_ka fields.
   ===================================================================== */

window.ABDITORY_I18N = {
  en: {
    "nav.catalogue": "Catalogue",
    "nav.custom": "Custom orders",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.close": "Close",

    "hero.eyebrow": "Custom-made in Tbilisi · Worldwide shipping",
    "hero.line1": "Made to your",
    "hero.line2": "measure",
    "hero.sub": "Gothic footwear and accessories, made by hand — one pair, one person, no two the same.",
    "hero.cta1": "See the catalogue",
    "hero.cta2": "Order on Instagram",
    "hero.scroll": "Scroll",

    "marquee.1": "Custom-made",
    "marquee.2": "Handmade in Tbilisi",
    "marquee.3": "Worldwide shipping",
    "marquee.4": "Made to order",
    "marquee.5": "DM to commission",

    "cat.eyebrow": "The range",
    "cat.title": "Catalogue",
    "cat.intro": "Everything is made to order. Sizes, heights, hardware and finishes are chosen with you before anything is cut.",
    "cat.all": "All",
    "cat.shoes": "Shoes",
    "cat.accessories": "Accessories",
    "cat.custom": "Custom",
    "cat.empty": "Nothing in this category yet.",
    "cat.count": "pieces",

    "product.price_request": "Price on request",
    "product.soldout": "Sold out",
    "product.view": "View",
    "product.order": "Order on Instagram",
    "product.code": "Mention code",
    "product.specs": "Details",
    "product.dmnote": "Orders are taken by direct message. Send us the code above and your size.",

    "custom.eyebrow": "Commissions",
    "custom.title": "Custom orders",
    "custom.intro": "Custom is not an add-on here — it is the whole point. Most of what leaves the workshop was drawn for one person.",
    "custom.step1.n": "01",
    "custom.step1.t": "Message",
    "custom.step1.d": "Send us a DM with a reference, a sketch, or just a description. Rough ideas are fine — that is where most pairs start.",
    "custom.step2.n": "02",
    "custom.step2.t": "Design",
    "custom.step2.d": "We settle the shape, height, materials and hardware together, take your measurements, and confirm the price before anything begins.",
    "custom.step3.n": "03",
    "custom.step3.t": "Made",
    "custom.step3.d": "Your pair is cut, lasted and finished by hand in the Tbilisi workshop. You get progress photos along the way.",
    "custom.step4.n": "04",
    "custom.step4.t": "Shipped",
    "custom.step4.d": "Packed and sent with tracking, anywhere in the world. Delivery time depends on where you are.",
    "custom.turnaround.label": "Typical turnaround",
    "custom.turnaround.note": "From confirmed design to shipped. Complex pieces take longer — we will tell you before you commit.",
    "custom.cta": "Start a commission",

    "about.eyebrow": "The workshop",
    "about.title": "About",
    "about.p1": "ABDITORY is a small workshop in Tbilisi making gothic footwear and accessories to order. Nothing here is mass-produced. Every piece is built for one person — chosen height, chosen hardware, chosen finish — and made by hand, one at a time.",
    "about.p2": "An abditory is a place where things are hidden. What we make is for people who would rather not blend in.",
    "about.stat1.n": "Tbilisi",
    "about.stat1.l": "Where it is made",
    "about.stat2.n": "Worldwide",
    "about.stat2.l": "Where it goes",
    "about.stat3.n": "One by one",
    "about.stat3.l": "How it is made",

    "contact.eyebrow": "Get in touch",
    "contact.title": "Orders happen in the DMs",
    "contact.sub": "No checkout, no cart. Message us, tell us what you want, and we will take it from there.",
    "contact.cta": "Message @abditorystars",
    "contact.ship.t": "Shipping",
    "contact.ship.d": "We ship worldwide with tracking. Cost and delivery time depend on the destination — ask when you message and we will quote you.",
    "contact.pay.t": "Payment",
    "contact.pay.d": "Payment is arranged directly by message once the design and price are confirmed.",
    "contact.size.t": "Sizing",
    "contact.size.d": "Made-to-order means made to your measurements. We will walk you through how to measure — it takes two minutes and a piece of string.",

    "footer.rights": "All rights reserved.",
    "footer.made": "Custom-made in Tbilisi · Shipped worldwide",
    "footer.nav": "Navigate",
    "footer.follow": "Follow"
  },

  ka: {
    "nav.catalogue": "კატალოგი",
    "nav.custom": "ინდივიდუალური შეკვეთა",
    "nav.about": "ჩვენ შესახებ",
    "nav.contact": "კონტაქტი",
    "nav.menu": "მენიუ",
    "nav.close": "დახურვა",

    "hero.eyebrow": "ხელით დამზადებული თბილისში · მიწოდება მთელ მსოფლიოში",
    "hero.line1": "შენს ზომაზე",
    "hero.line2": "შექმნილი",
    "hero.sub": "გოთური ფეხსაცმელი და აქსესუარები, ხელით დამზადებული — თითო წყვილი თითო ადამიანისთვის.",
    "hero.cta1": "კატალოგის ნახვა",
    "hero.cta2": "შეკვეთა Instagram-ით",
    "hero.scroll": "ქვემოთ",

    "marquee.1": "ინდივიდუალური დამზადება",
    "marquee.2": "ხელნაკეთი თბილისში",
    "marquee.3": "მიწოდება მსოფლიოს ნებისმიერ წერტილში",
    "marquee.4": "შეკვეთით დამზადება",
    "marquee.5": "მოგვწერეთ შეკვეთისთვის",

    "cat.eyebrow": "ასორტიმენტი",
    "cat.title": "კატალოგი",
    "cat.intro": "ყველაფერი მზადდება შეკვეთით. ზომა, სიმაღლე, ფურნიტურა და დამუშავება შენთან ერთად შეირჩევა.",
    "cat.all": "ყველა",
    "cat.shoes": "ფეხსაცმელი",
    "cat.accessories": "აქსესუარები",
    "cat.custom": "ინდივიდუალური",
    "cat.empty": "ამ კატეგორიაში ჯერ არაფერია.",
    "cat.count": "ნივთი",

    "product.price_request": "ფასი შეთანხმებით",
    "product.soldout": "გაყიდულია",
    "product.view": "ნახვა",
    "product.order": "შეკვეთა Instagram-ით",
    "product.code": "მიუთითეთ კოდი",
    "product.specs": "დეტალები",
    "product.dmnote": "შეკვეთა მიიღება პირად შეტყობინებაში. მოგვწერეთ ზემოთ მითითებული კოდი და თქვენი ზომა.",

    "custom.eyebrow": "შეკვეთები",
    "custom.title": "ინდივიდუალური შეკვეთა",
    "custom.intro": "ინდივიდუალური შეკვეთა ჩვენთვის დამატებითი სერვისი არაა — ეს არის მთავარი. თითქმის ყველაფერი კონკრეტული ადამიანისთვის იქმნება.",
    "custom.step1.n": "01",
    "custom.step1.t": "შეტყობინება",
    "custom.step1.d": "მოგვწერეთ Instagram-ზე — გამოგვიგზავნეთ სურათი, ესკიზი ან უბრალოდ აღწერეთ იდეა. ზოგადი იდეაც საკმარისია.",
    "custom.step2.n": "02",
    "custom.step2.t": "დიზაინი",
    "custom.step2.d": "ერთად ვათანხმებთ ფორმას, სიმაღლეს, მასალას და ფურნიტურას, ვიღებთ ზომებს და ვადასტურებთ ფასს დაწყებამდე.",
    "custom.step3.n": "03",
    "custom.step3.t": "დამზადება",
    "custom.step3.d": "თქვენი წყვილი ხელით მზადდება თბილისის სახელოსნოში. პროცესის ფოტოებს გზადაგზა გიგზავნით.",
    "custom.step4.n": "04",
    "custom.step4.t": "გაგზავნა",
    "custom.step4.d": "იგზავნება თრექინგით მსოფლიოს ნებისმიერ ქვეყანაში. მიწოდების ვადა დამოკიდებულია მისამართზე.",
    "custom.turnaround.label": "დამზადების ვადა",
    "custom.turnaround.note": "დიზაინის დადასტურებიდან გაგზავნამდე. რთული ნივთები მეტ დროს საჭიროებს — ამას წინასწარ შეგატყობინებთ.",
    "custom.cta": "შეკვეთის დაწყება",

    "about.eyebrow": "სახელოსნო",
    "about.title": "ჩვენ შესახებ",
    "about.p1": "ABDITORY არის პატარა სახელოსნო თბილისში, სადაც გოთური ფეხსაცმელი და აქსესუარები შეკვეთით მზადდება. აქ არაფერია მასობრივი წარმოების. ყოველი ნივთი ერთი ადამიანისთვის იქმნება — შერჩეული სიმაღლით, ფურნიტურითა და დამუშავებით.",
    "about.p2": "Abditory ნიშნავს სამალავს. ის, რასაც ვქმნით, მათთვისაა, ვისაც სხვებში გარევა არ სურს.",
    "about.stat1.n": "თბილისი",
    "about.stat1.l": "სად მზადდება",
    "about.stat2.n": "მსოფლიო",
    "about.stat2.l": "სად იგზავნება",
    "about.stat3.n": "სათითაოდ",
    "about.stat3.l": "როგორ მზადდება",

    "contact.eyebrow": "დაგვიკავშირდით",
    "contact.title": "შეკვეთა პირად შეტყობინებაში",
    "contact.sub": "არც კალათა, არც გადახდის გვერდი. უბრალოდ მოგვწერეთ, რა გინდათ — დანარჩენს ჩვენ მოვაგვარებთ.",
    "contact.cta": "მოგვწერეთ @abditorystars",
    "contact.ship.t": "მიწოდება",
    "contact.ship.d": "ვაგზავნით მთელ მსოფლიოში თრექინგით. ღირებულება და ვადა დამოკიდებულია ქვეყანაზე — მოგვწერეთ და გეტყვით.",
    "contact.pay.t": "გადახდა",
    "contact.pay.d": "გადახდა თანხმდება შეტყობინებით, დიზაინისა და ფასის დადასტურების შემდეგ.",
    "contact.size.t": "ზომები",
    "contact.size.d": "შეკვეთით დამზადება ნიშნავს თქვენს ზომაზე დამზადებას. აგიხსნით, როგორ გაზომოთ — ორი წუთი და ერთი ძაფი სჭირდება.",

    "footer.rights": "ყველა უფლება დაცულია.",
    "footer.made": "ხელით დამზადებული თბილისში · იგზავნება მსოფლიოში",
    "footer.nav": "ნავიგაცია",
    "footer.follow": "გამოგვყევით"
  }
};

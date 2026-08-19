/* =====================================================================
   ABDITORY — SITE SETTINGS
   ---------------------------------------------------------------------
   Everything here appears somewhere on the page. Change it and refresh.
   ===================================================================== */

window.ABDITORY_SITE = {
  instagram: "abditorystars",
  instagramUrl: "https://instagram.com/abditorystars",
  email: "", // e.g. "hello@abditory.com" — leave "" to hide the email line

  /* ===================================================================
     ORDER FORM ENDPOINT
     -------------------------------------------------------------------
     Where the order/enquiry forms send their submissions. This is the
     Google Apps Script Web App URL — THE ONLY PLACE it appears in the
     whole site. If you ever redeploy the script, change it here and
     nowhere else.

     If you redeploy: Apps Script gives you a NEW /exec URL each time you
     create a new deployment version. Use "Manage deployments → edit →
     New version" instead, and the URL stays the same.

     Set this to "" to switch every form off and fall back to Instagram.
     =================================================================== */
  formEndpoint: "https://script.google.com/macros/s/AKfycbyPHfQIb0vdYu4sdUegj5O22fJnuPhySw0Z2gJ8sshVb6yLWhx7ocNTKcNQS4S0n1XFYQ/exec",

  // Currency shown next to any price you set in products.js.
  // The catalogue is priced in EUR, so this is "€".
  currency: "€",

  /* Where the site lives. Used to build absolute URLs in the product
     feed (image_link and link must be absolute, not relative).
     Change this if you move to a custom domain. */
  siteUrl: "https://levankharaishvili32-afk.github.io/abditory",

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
    "nav.order": "Order",
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
    "product.sku": "SKU",
    "filter.height": "Platform height",
    "filter.hardware": "Hardware",
    "filter.clear": "Clear filters",
    "zoom.close": "Close",
    "zoom.hint": "Move to magnify \u2014 click to enlarge",
    "zoom.hint.touch": "Double-tap to zoom \u00b7 swipe down to close",
    "zoom.open": "Enlarge photo",
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
    "contact.title": "Or just message us",
    "contact.sub": "The form above reaches us the same way. If you would rather talk it through, our DMs are always open.",
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
    "footer.follow": "Follow",

    "form.eyebrow": "Place an order",
    "form.title": "Tell us what you want made",
    "form.intro": "Fill this in and it lands with us straight away. We reply on Instagram, so leave your handle if you would rather talk there.",
    "form.name": "Name",
    "form.email": "Email",
    "form.instagram": "Instagram username",
    "form.country": "Country",
    "form.size": "Shoe size (EU)",
    "form.size_ph": "Choose your size",
    "form.type": "Request type",
    "form.type_ph": "What is this about?",
    "form.type.custom": "Custom shoes order",
    "form.type.accessory": "Accessory order",
    "form.type.question": "Question",
    "form.type.other": "Other",
    "form.type.product": "Product order",
    "form.message": "Message / details",
    "form.message_ph": "Colours, materials, heel height, hardware, references — anything you have in mind. Links to photos help.",
    "form.optional": "optional",
    "form.product_label": "Ordering",
    "form.submit": "Send request",
    "form.submit_product": "Order this item",
    "form.sending": "Sending",
    "form.or": "or",
    "form.err.name": "Please tell us your name.",
    "form.err.email": "Please leave an email.",
    "form.err.email_bad": "That email does not look right.",
    "form.err.country": "We need your country to quote shipping.",
    "form.err.size": "Please choose a size.",
    "form.err.type": "Please choose what this is about.",
    "form.err.message": "Please describe what you would like made.",
    "form.ok.title": "Your request is with us ✧",
    "form.ok.body": "We'll reach out within 24h — check your Instagram DMs.",
    "form.ok.cta": "Open @abditorystars",
    "form.fail.title": "That did not go through",
    "form.fail.body": "Something blocked the message on the way. Send it to us on Instagram instead — nothing gets lost there.",
    "form.fail.cta": "Message us on Instagram"
  },

  ka: {
    "nav.catalogue": "კატალოგი",
    "nav.custom": "ინდივიდუალური შეკვეთა",
    "nav.about": "ჩვენ შესახებ",
    "nav.order": "შეკვეთა",
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
    "product.sku": "SKU",
    "filter.height": "პლატფორმის სიმაღლე",
    "filter.hardware": "ფურნიტურა",
    "filter.clear": "ფილტრების გასუფთავება",
    "zoom.close": "დახურვა",
    "zoom.hint": "გაატარეთ გასადიდებლად \u2014 დააწკაპუნეთ გასაშლელად",
    "zoom.hint.touch": "ორჯერ შეეხეთ გასადიდებლად \u00b7 ჩამოსწიეთ დასახურად",
    "zoom.open": "ფოტოს გადიდება",
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
    "contact.title": "ან უბრალოდ მოგვწერეთ",
    "contact.sub": "ზემოთ არსებული ფორმაც ჩვენთან მოდის. თუ საუბარი გირჩევნიათ, პირადი შეტყობინებები ყოველთვის ღიაა.",
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
    "footer.follow": "გამოგვყევით",

    "form.eyebrow": "შეკვეთის გაფორმება",
    "form.title": "მოგვწერეთ, რის დამზადება გსურთ",
    "form.intro": "შეავსეთ და მაშინვე მოგვივა. პასუხს Instagram-ზე გწერთ, ამიტომ დატოვეთ თქვენი მომხმარებლის სახელი, თუ იქ გირჩევნიათ საუბარი.",
    "form.name": "სახელი",
    "form.email": "ელფოსტა",
    "form.instagram": "Instagram-ის მომხმარებელი",
    "form.country": "ქვეყანა",
    "form.size": "ფეხსაცმლის ზომა (EU)",
    "form.size_ph": "აირჩიეთ ზომა",
    "form.type": "მოთხოვნის ტიპი",
    "form.type_ph": "რაზეა საუბარი?",
    "form.type.custom": "ინდივიდუალური ფეხსაცმლის შეკვეთა",
    "form.type.accessory": "აქსესუარის შეკვეთა",
    "form.type.question": "კითხვა",
    "form.type.other": "სხვა",
    "form.type.product": "პროდუქტის შეკვეთა",
    "form.message": "შეტყობინება / დეტალები",
    "form.message_ph": "ფერები, მასალა, ქუსლის სიმაღლე, ფურნიტურა, მაგალითები — ყველაფერი, რაც წარმოგიდგენიათ. ფოტოების ბმულებიც დაგვეხმარება.",
    "form.optional": "სურვილისამებრ",
    "form.product_label": "შეკვეთა",
    "form.submit": "მოთხოვნის გაგზავნა",
    "form.submit_product": "ამ ნივთის შეკვეთა",
    "form.sending": "იგზავნება",
    "form.or": "ან",
    "form.err.name": "მიუთითეთ თქვენი სახელი.",
    "form.err.email": "დატოვეთ ელფოსტა.",
    "form.err.email_bad": "ეს ელფოსტა არასწორად გამოიყურება.",
    "form.err.country": "ქვეყანა გვჭირდება მიწოდების ფასის დასათვლელად.",
    "form.err.size": "აირჩიეთ ზომა.",
    "form.err.type": "აირჩიეთ, რაზეა საუბარი.",
    "form.err.message": "აღწერეთ, რის დამზადება გსურთ.",
    "form.ok.title": "თქვენი მოთხოვნა მიღებულია ✧",
    "form.ok.body": "24 საათში დაგიკავშირდებით — შეამოწმეთ Instagram-ის შეტყობინებები.",
    "form.ok.cta": "გახსენით @abditorystars",
    "form.fail.title": "გაგზავნა ვერ მოხერხდა",
    "form.fail.body": "რაღაცამ შეაფერხა შეტყობინება. მოგვწერეთ Instagram-ზე — იქ არაფერი იკარგება.",
    "form.fail.cta": "მოგვწერეთ Instagram-ზე"
  }
};

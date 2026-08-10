/* =====================================================================
   ABDITORY — APP
   ---------------------------------------------------------------------
   No framework, no build step. Reads data/site.js and data/products.js.
   ===================================================================== */
(function () {
  "use strict";

  var SITE = window.ABDITORY_SITE || {};
  var PRODUCTS = window.ABDITORY_PRODUCTS || [];
  var I18N = window.ABDITORY_I18N || { en: {} };

  var lang = "en";
  var activeFilter = "all";

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function t(key) {
    var dict = I18N[lang] || I18N.en;
    return (dict && dict[key]) || (I18N.en && I18N.en[key]) || "";
  }

  /* Pick the right language field off a product, falling back to English
     when the Georgian version has not been filled in yet. */
  function field(product, key) {
    if (lang === "ka" && product[key + "_ka"]) return product[key + "_ka"];
    return product[key] || "";
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ===================================================================
     STARFIELD
     Sparse and deterministic-ish: a fixed count spread over the viewport,
     a few brighter. Skipped entirely when reduced motion is requested.
     =================================================================== */
  function buildStarfield() {
    var host = $("#starfield");
    if (!host || reduced) return;
    var count = window.innerWidth < 700 ? 26 : 48;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.top = (Math.random() * 100).toFixed(2) + "%";
      s.style.animationDelay = (Math.random() * 6).toFixed(2) + "s";
      s.style.animationDuration = (4 + Math.random() * 5).toFixed(2) + "s";
      if (Math.random() > 0.86) s.className = "is-bright";
      frag.appendChild(s);
    }
    host.appendChild(frag);
  }

  /* ===================================================================
     MARQUEE
     Two identical groups so the -50% translate loops seamlessly.
     =================================================================== */
  function buildMarquee() {
    var host = $("#marquee");
    if (!host) return;
    var keys = ["marquee.1", "marquee.2", "marquee.3", "marquee.4", "marquee.5"];
    var group =
      '<div class="marquee__group">' +
      keys.map(function (k) {
        return '<span class="marquee__item">' + esc(t(k)) + '<i class="star"></i></span>';
      }).join("") +
      "</div>";
    host.innerHTML = group + group;
  }

  /* ===================================================================
     PLACEHOLDER SLOT
     Drawn whenever a product has no photographs yet. Once images are
     added to products.js this is never rendered again.
     =================================================================== */
  function slotMarkup(code) {
    return (
      '<div class="slot">' +
        '<i class="star slot__star"></i>' +
        '<span class="slot__label">Photo<span class="slot__code">' + esc(code) + "</span></span>" +
      "</div>"
    );
  }

  function priceLabel(p) {
    if (p.price === null || p.price === undefined || p.price === "") return t("product.price_request");
    return p.price + " " + (SITE.currency || "₾");
  }

  /* ===================================================================
     CATALOGUE
     =================================================================== */
  function cardMarkup(p) {
    var imgs = p.images || [];
    var media;

    if (imgs.length) {
      media =
        '<img src="images/' + esc(imgs[0]) + '" alt="' + esc(field(p, "name")) + '" loading="lazy" decoding="async">' +
        (imgs[1]
          ? '<img class="card__img--alt" src="images/' + esc(imgs[1]) + '" alt="" loading="lazy" decoding="async" aria-hidden="true">'
          : "");
    } else {
      media = slotMarkup(p.id);
    }

    var tag = p.sold_out
      ? '<span class="card__tag card__tag--soldout">' + esc(t("product.soldout")) + "</span>"
      : '<span class="card__tag">' + esc(t("cat." + p.category)) + "</span>";

    return (
      '<button class="card" type="button" data-id="' + esc(p.id) + '" data-cat="' + esc(p.category) + '">' +
        '<span class="card__media">' + tag + media +
          '<span class="card__view">' + esc(t("product.view")) + "</span>" +
        "</span>" +
        '<span class="card__body">' +
          '<span class="card__name">' + esc(field(p, "name")) + "</span>" +
          '<span class="card__blurb">' + esc(field(p, "blurb")) + "</span>" +
          '<span class="card__price">' + esc(priceLabel(p)) + "</span>" +
        "</span>" +
      "</button>"
    );
  }

  function renderGrid() {
    var grid = $("#grid");
    if (!grid) return;

    var list = PRODUCTS.filter(function (p) {
      return activeFilter === "all" || p.category === activeFilter;
    });

    if (!list.length) {
      grid.innerHTML = '<p style="color:var(--text-400)">' + esc(t("cat.empty")) + "</p>";
    } else {
      grid.innerHTML = list.map(cardMarkup).join("");
    }

    var count = $("#count");
    if (count) count.textContent = list.length + " " + t("cat.count");

    $$(".card", grid).forEach(function (card) {
      card.addEventListener("click", function () { openQuickView(card.dataset.id); });
    });
  }

  function bindFilters() {
    $$(".filter").forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeFilter = btn.dataset.filter;
        $$(".filter").forEach(function (b) {
          var on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        renderGrid();
      });
    });
  }

  /* ===================================================================
     HERO IMAGE — uses the product flagged featured:true
     =================================================================== */
  function renderHero() {
    var fig = $("#heroFigure");
    var cap = $("#heroCap");
    if (!fig) return;

    var feat = PRODUCTS.filter(function (p) { return p.featured; })[0] || PRODUCTS[0];
    if (!feat) return;

    if (cap) cap.textContent = field(feat, "name");

    var existing = fig.querySelector("img, .slot");
    if (existing) existing.remove();

    var html = (feat.images && feat.images.length)
      ? '<img src="images/' + esc(feat.images[0]) + '" alt="' + esc(field(feat, "name")) + '" fetchpriority="high" decoding="async">'
      : slotMarkup(feat.id);

    fig.insertAdjacentHTML("afterbegin", html);
  }

  function renderAboutFigure() {
    var fig = $("#aboutFigure");
    if (!fig) return;
    if (!fig.querySelector("img")) {
      fig.insertAdjacentHTML("afterbegin", slotMarkup("WORKSHOP"));
    }
  }

  /* ===================================================================
     QUICK VIEW
     =================================================================== */
  var qv = $("#qv");
  var lastFocus = null;

  function openQuickView(id) {
    var p = PRODUCTS.filter(function (x) { return x.id === id; })[0];
    if (!p || !qv) return;

    lastFocus = document.activeElement;

    $("#qvCat").textContent = t("cat." + p.category);
    $("#qvName").textContent = field(p, "name");
    $("#qvPrice").textContent = p.sold_out ? t("product.soldout") : priceLabel(p);
    $("#qvDetails").textContent = field(p, "details");
    $("#qvCode").textContent = p.id;

    $("#qvSpecs").innerHTML = (p.specs || []).map(function (s) {
      return "<li><i class='star'></i><span>" + esc(s) + "</span></li>";
    }).join("");

    var stage = $("#qvStage");
    var thumbs = $("#qvThumbs");
    var imgs = p.images || [];

    if (imgs.length) {
      stage.innerHTML = '<img src="images/' + esc(imgs[0]) + '" alt="' + esc(field(p, "name")) + '">';
      thumbs.innerHTML = imgs.map(function (src, i) {
        return '<button class="qv__thumb' + (i === 0 ? " is-active" : "") + '" type="button" data-src="' + esc(src) + '">' +
               '<img src="images/' + esc(src) + '" alt=""></button>';
      }).join("");
      $$(".qv__thumb", thumbs).forEach(function (b) {
        b.addEventListener("click", function () {
          stage.innerHTML = '<img src="images/' + esc(b.dataset.src) + '" alt="">';
          $$(".qv__thumb", thumbs).forEach(function (x) { x.classList.remove("is-active"); });
          b.classList.add("is-active");
        });
      });
    } else {
      stage.innerHTML = slotMarkup(p.id);
      thumbs.innerHTML = "";
    }

    var order = $("#qvOrder");
    order.hidden = !!p.sold_out;

    /* Order form for this product. Sold-out pieces get no form — there is
       nothing to order — but the Instagram link stays so they can ask. */
    var qvForm = $("#qvForm");
    if (qvForm) {
      if (p.sold_out || !window.ABDITORY_FORM) {
        qvForm.innerHTML = "";
        qvForm.hidden = true;
        var div = $(".qv__divider");
        if (div) div.hidden = true;
      } else {
        qvForm.hidden = false;
        var div2 = $(".qv__divider");
        if (div2) div2.hidden = false;
        window.ABDITORY_FORM.mount(qvForm, { context: "product", product: p });
      }
    }

    /* Give the product a shareable address, so a single piece can be
       linked from an Instagram story: index.html#product/STM-01 */
    if (history.replaceState) {
      history.replaceState(null, "", "#product/" + p.id);
    }

    qv.classList.add("is-open");
    qv.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    $(".qv__close").focus();
  }

  function closeQuickView() {
    if (!qv) return;
    qv.classList.remove("is-open");
    qv.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
    if (history.replaceState && location.hash.indexOf("#product/") === 0) {
      history.replaceState(null, "", location.pathname + location.search);
    }
    if (lastFocus) lastFocus.focus();
  }

  /* Open straight onto a product when the page is loaded with
     #product/<id> — the link you would put in an Instagram story. */
  function openFromHash() {
    var m = /^#product\/(.+)$/.exec(location.hash);
    if (!m) return;
    var id = decodeURIComponent(m[1]);
    if (!PRODUCTS.some(function (p) { return p.id === id; })) return;
    var cat = $("#catalogue");
    if (cat) cat.scrollIntoView();
    openQuickView(id);
  }

  if (qv) {
    $$("[data-close]", qv).forEach(function (el) {
      el.addEventListener("click", closeQuickView);
    });
  }

  /* ===================================================================
     HEADER + MOBILE MENU
     =================================================================== */
  function bindHeader() {
    var header = $("#header");
    var burger = $("#burger");
    var menu = $("#menu");
    var lastY = 0;

    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      header.classList.toggle("is-stuck", y > 40);
      // hide on scroll down, reveal on scroll up — but never while the menu is open
      if (!menu.classList.contains("is-open")) {
        header.classList.toggle("is-hidden", y > lastY && y > 400);
      }
      lastY = y;
    }, { passive: true });

    function setMenu(open) {
      menu.classList.toggle("is-open", open);
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("is-locked", open);
      if (open) header.classList.remove("is-hidden");
    }

    burger.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });

    $$(".menu__link, .menu__foot a", menu).forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (menu.classList.contains("is-open")) setMenu(false);
      if (qv && qv.classList.contains("is-open")) closeQuickView();
    });
  }

  /* ===================================================================
     REVEAL ON SCROLL
     =================================================================== */
  function bindReveals() {
    var els = $$("[data-reveal]");
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ===================================================================
     SITE SETTINGS → PAGE
     =================================================================== */
  function applySite() {
    var handle = SITE.instagram ? "@" + SITE.instagram : "@abditorystars";
    var url = SITE.instagramUrl || "https://instagram.com/abditorystars";

    $$(".js-ig, #igHeader").forEach(function (a) { a.href = url; });
    var ig = $("#igHandle");
    if (ig) ig.textContent = handle;

    var ta = $("#turnaround");
    if (ta) ta.textContent = (lang === "ka" && SITE.turnaround_ka) ? SITE.turnaround_ka : (SITE.turnaround || "");

    var from = $("#footerFrom");
    if (from && SITE.shipsFrom) from.textContent = SITE.shipsFrom;

    var year = $("#year");
    if (year) year.textContent = new Date().getFullYear();

    if (SITE.email) {
      var row = $("#emailRow");
      var link = $("#emailLink");
      row.hidden = false;
      link.href = "mailto:" + SITE.email;
      link.textContent = SITE.email;
    }
  }

  /* ===================================================================
     LANGUAGE
     Every translatable node carries data-i18n="key". Switching language
     rewrites those nodes and re-renders anything built from data.
     =================================================================== */
  function applyLang() {
    document.documentElement.lang = lang;
    window.ABDITORY_LANG = lang;          // form.js reads this
    $$("[data-i18n]").forEach(function (el) {
      var val = t(el.dataset.i18n);
      if (val) el.textContent = val;
    });
    buildMarquee();
    renderHero();
    renderGrid();
    mountOrderForm();
    applySite();
  }

  /* ===================================================================
     ORDER FORM (landing page)
     =================================================================== */
  function mountOrderForm() {
    var host = $("#orderForm");
    if (!host || !window.ABDITORY_FORM) return;
    window.ABDITORY_FORM.mount(host, { context: "landing" });
    /* the form is rebuilt on language change, so re-arm its reveals */
    bindReveals();
  }

  function bindLang() {
    var box = $("#lang");
    if (!box) return;
    if (SITE.georgianEnabled) box.classList.add("is-on");

    $$("button", box).forEach(function (btn) {
      btn.addEventListener("click", function () {
        lang = btn.dataset.lang;
        $$("button", box).forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
        });
        applyLang();
      });
    });
  }

  /* ===================================================================
     INIT
     =================================================================== */
  function init() {
    window.ABDITORY_LANG = lang;
    buildStarfield();
    buildMarquee();
    renderHero();
    renderAboutFigure();
    renderGrid();
    mountOrderForm();
    bindFilters();
    bindHeader();
    bindReveals();
    bindLang();
    applySite();
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

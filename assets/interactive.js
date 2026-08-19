/* =====================================================================
   ABDITORY — INTERACTIVE LAYER
   ---------------------------------------------------------------------
   Three additions, all optional. If this file fails to load the site
   behaves exactly as it did before: the grid still renders, the filters
   still work, the quick view still opens.

     A1  Facet filters   — narrow the catalogue by platform height and
                           by hardware. Facets are DERIVED from the
                           product data at runtime, so adding a product
                           in products.js updates the filters with no
                           extra work here.

     A3  Photo zoom      — open a product photo full screen. Pinch on
                           touch, click to toggle 2x on a mouse.

     B1  Card reveal     — cards fade up in sequence as the grid comes
                           into view, plus a real press response on tap
                           (there is no hover on a phone to confirm one).

   Everything here honours prefers-reduced-motion and adds no
   dependencies.
   ===================================================================== */
(function () {
  "use strict";

  var PRODUCTS = window.ABDITORY_PRODUCTS || [];
  var I18N = window.ABDITORY_I18N || { en: {} };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function t(key) {
    var d = I18N[window.ABDITORY_LANG || "en"] || I18N.en;
    return (d && d[key]) || (I18N.en && I18N.en[key]) || key;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ===================================================================
     A1 — FACET FILTERS
     -------------------------------------------------------------------
     Height comes from the "NNcm" pattern in the specs, which every
     imported product already has. Hardware comes from keyword matching
     over the name, blurb, specs and description.

     A facet chip is only rendered if at least MIN_MATCHES products match
     it — a filter that returns one result, or none, is worse than no
     filter at all.
     =================================================================== */
  var MIN_MATCHES = 2;

  var HEIGHT_BANDS = [
    { key: "h-low",  label: "10 cm & under", test: function (cm) { return cm > 0 && cm <= 10; } },
    { key: "h-mid",  label: "11–13 cm",      test: function (cm) { return cm >= 11 && cm <= 13; } },
    { key: "h-high", label: "14 cm & over",  test: function (cm) { return cm >= 14; } }
  ];

  var HARDWARE = [
    { key: "spikes",  label: "Spikes",   re: /spike/i },
    { key: "studs",   label: "Studs",    re: /stud/i },
    { key: "skulls",  label: "Skulls",   re: /skull/i },
    { key: "buckles", label: "Buckles",  re: /buckle/i },
    { key: "chains",  label: "Chains",   re: /chain/i },
    { key: "fur",     label: "Faux fur", re: /faux[- ]?fur/i },
    { key: "patent",  label: "Patent",   re: /patent|high-shine|glossy/i }
  ];

  /* Tallest number found in the specs. Specs are the reliable place —
     descriptions sometimes mention a height twice. */
  function heightOf(p) {
    var best = 0;
    (p.specs || []).forEach(function (s) {
      var m = /(\d+)\s*cm/i.exec(s);
      if (m) best = Math.max(best, parseInt(m[1], 10));
    });
    return best;
  }

  function haystack(p) {
    return [p.name, p.blurb, p.details].concat(p.specs || []).join(" ");
  }

  var state = { heights: [], hardware: [] };

  function matches(p) {
    if (state.heights.length) {
      var cm = heightOf(p);
      var ok = state.heights.some(function (k) {
        var band = HEIGHT_BANDS.filter(function (b) { return b.key === k; })[0];
        return band && band.test(cm);
      });
      if (!ok) return false;
    }
    if (state.hardware.length) {
      var hay = haystack(p);
      var hit = state.hardware.some(function (k) {
        var h = HARDWARE.filter(function (x) { return x.key === k; })[0];
        return h && h.re.test(hay);
      });
      if (!hit) return false;
    }
    return true;
  }

  function countFor(kind, key) {
    return PRODUCTS.filter(function (p) {
      if (kind === "height") {
        var band = HEIGHT_BANDS.filter(function (b) { return b.key === key; })[0];
        return band && band.test(heightOf(p));
      }
      var h = HARDWARE.filter(function (x) { return x.key === key; })[0];
      return h && h.re.test(haystack(p));
    }).length;
  }

  function chip(kind, key, label, n) {
    return '<button class="facet" type="button" role="switch" aria-checked="false" ' +
           'data-kind="' + kind + '" data-key="' + esc(key) + '">' +
           '<span class="facet__label">' + esc(label) + "</span>" +
           '<span class="facet__n">' + n + "</span>" +
           "</button>";
  }

  function buildFacets() {
    var host = $("#facets");
    if (!host || !window.ABDITORY_FILTER) return;

    var heights = HEIGHT_BANDS
      .map(function (b) { return { b: b, n: countFor("height", b.key) }; })
      .filter(function (x) { return x.n >= MIN_MATCHES; });

    var hardware = HARDWARE
      .map(function (h) { return { h: h, n: countFor("hardware", h.key) }; })
      .filter(function (x) { return x.n >= MIN_MATCHES; });

    if (!heights.length && !hardware.length) { host.hidden = true; return; }

    host.innerHTML =
      (heights.length
        ? '<div class="facets__row"><span class="facets__legend">' + esc(t("filter.height")) + "</span>" +
          '<div class="facets__chips">' +
          heights.map(function (x) { return chip("height", x.b.key, x.b.label, x.n); }).join("") +
          "</div></div>"
        : "") +
      (hardware.length
        ? '<div class="facets__row"><span class="facets__legend">' + esc(t("filter.hardware")) + "</span>" +
          '<div class="facets__chips">' +
          hardware.map(function (x) { return chip("hardware", x.h.key, x.h.label, x.n); }).join("") +
          "</div></div>"
        : "") +
      '<button class="facets__clear" type="button" hidden>' + esc(t("filter.clear")) + "</button>";

    $$(".facet", host).forEach(function (btn) {
      btn.addEventListener("click", function () { toggle(btn); });
    });
    var clear = $(".facets__clear", host);
    clear.addEventListener("click", function () {
      state.heights = []; state.hardware = [];
      $$(".facet", host).forEach(function (b) {
        b.classList.remove("is-on"); b.setAttribute("aria-checked", "false");
      });
      apply();
    });
  }

  function toggle(btn) {
    var kind = btn.dataset.kind === "height" ? "heights" : "hardware";
    var key = btn.dataset.key;
    var i = state[kind].indexOf(key);
    if (i === -1) state[kind].push(key); else state[kind].splice(i, 1);
    var on = i === -1;
    btn.classList.toggle("is-on", on);
    btn.setAttribute("aria-checked", on ? "true" : "false");
    apply();
  }

  function apply() {
    var any = state.heights.length || state.hardware.length;
    var clear = $(".facets__clear");
    if (clear) clear.hidden = !any;
    window.ABDITORY_FILTER.set(any ? matches : null);
  }

  /* ===================================================================
     B1 — STAGGERED REVEAL + PRESS FEEDBACK
     -------------------------------------------------------------------
     The grid is rebuilt whenever a filter changes, so this re-arms
     itself through a MutationObserver rather than running on a timer.
     =================================================================== */
  var cardIO = null;

  function armCards() {
    var grid = $("#grid");
    if (!grid) return;
    var cards = $$(".card", grid);

    if (reduced) {                       // no motion: just make them visible
      cards.forEach(function (c) { c.classList.add("is-in"); });
      return;
    }

    if (!cardIO) {
      cardIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          cardIO.unobserve(e.target);     // one-shot; nothing runs after
        });
      }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    }

    cards.forEach(function (c, i) {
      c.classList.remove("is-in");
      /* Cap the stagger: with 24 products a linear delay would make the
         last card wait 2.4s. Ten steps, then it repeats. */
      c.style.setProperty("--i", i % 10);
      cardIO.observe(c);
    });
  }

  /* ===================================================================
     DETAIL ZOOM — "inspect the hardware"

     Two different jobs for two different devices:

       fine pointer  a magnifier lens that follows the cursor over the
                     quick-view photo at 2.5x, so you can read a buckle
                     without leaving the page
       touch         a full-screen viewer with native pinch, double-tap
                     to 2x, and swipe down to dismiss

     Both read from whichever image the thumbnail strip has loaded into
     the stage, so switching to the spikes shot and then magnifying
     works with no extra wiring.
     =================================================================== */
  var zoom = null, zoomImg = null, lastFocus = null;

  var LENS_POWER = 2.5;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

  /* --- the desktop lens ---------------------------------------------- */
  function armLens(stage) {
    var lens = null, img = null, size = 0;

    /* The stage's innerHTML is replaced whenever a different product or a
       different thumbnail is loaded, which detaches the lens with it. So
       check that it is still in the document, not merely that we once
       made one. */
    function ensure() {
      if (lens && lens.isConnected) return lens;
      lens = document.createElement("div");
      lens.className = "lens";
      lens.setAttribute("aria-hidden", "true");
      stage.appendChild(lens);
      size = lens.offsetWidth || 190;
      return lens;
    }

    function place(e) {
      if (!lens || !lens.isConnected || !img || !img.isConnected) return;
      var r = stage.getBoundingClientRect();
      var x = e.clientX - r.left;
      var y = e.clientY - r.top;
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /* .qv__stage img is object-fit: cover and fills the box exactly, so
         scaling the stage's own dimensions gives a true 2.5x with no
         separate measurement of the intrinsic image size. */
      lens.style.backgroundSize =
        (r.width * LENS_POWER) + "px " + (r.height * LENS_POWER) + "px";
      lens.style.backgroundPosition =
        (size / 2 - x * LENS_POWER) + "px " + (size / 2 - y * LENS_POWER) + "px";
    }

    stage.addEventListener("mouseenter", function (e) {
      if (!finePointer.matches) return;
      img = $("img", stage);
      var src = img && (img.currentSrc || img.src);
      if (!src) return;
      var l = ensure();
      l.style.backgroundImage = 'url("' + src + '")';
      l.classList.add("is-on");
      place(e);
    });

    stage.addEventListener("mousemove", place);

    stage.addEventListener("mouseleave", function () {
      if (lens) lens.classList.remove("is-on");
    });
  }

  /* --- the full-screen viewer ----------------------------------------- */
  function toggle2x(originX, originY) {
    var on = zoomImg.classList.toggle("is-2x");
    if (on && originX != null) {
      var r = zoomImg.getBoundingClientRect();
      zoomImg.style.transformOrigin =
        (((originX - r.left) / r.width) * 100).toFixed(1) + "% " +
        (((originY - r.top) / r.height) * 100).toFixed(1) + "%";
    } else if (!on) {
      zoomImg.style.transformOrigin = "";
    }
    return on;
  }

  /* Swipe down to dismiss, double-tap to magnify. Both are skipped while
     the photo is enlarged, where the same gestures mean "pan" instead. */
  function armGestures(stage) {
    var sy = 0, sx = 0, drag = 0, tracking = false, lastTap = 0;

    stage.addEventListener("touchstart", function (e) {
      tracking = e.touches.length === 1;
      if (!tracking) return;
      sy = e.touches[0].clientY;
      sx = e.touches[0].clientX;
      drag = 0;
    }, { passive: true });

    stage.addEventListener("touchmove", function (e) {
      if (!tracking || e.touches.length !== 1) { tracking = false; return; }
      if (zoomImg.classList.contains("is-2x")) return;
      var dy = e.touches[0].clientY - sy;
      var dx = e.touches[0].clientX - sx;
      if (dy <= 0 || Math.abs(dx) > Math.abs(dy)) return;
      drag = Math.min(dy, 300);
      zoom.style.setProperty("--drag", drag + "px");
      zoom.classList.add("is-dragging");
    }, { passive: true });

    stage.addEventListener("touchend", function (e) {
      zoom.classList.remove("is-dragging");
      zoom.style.removeProperty("--drag");

      if (tracking && drag > 90) { closeZoom(); tracking = false; drag = 0; return; }

      if (tracking && drag < 10) {
        var gap = e.timeStamp - lastTap;
        if (gap > 0 && gap < 320) {
          var tp = e.changedTouches[0];
          toggle2x(tp.clientX, tp.clientY);
          lastTap = 0;
        } else {
          lastTap = e.timeStamp;
        }
      }
      tracking = false;
      drag = 0;
    });
  }

  function buildZoom() {
    if (zoom) return;
    zoom = document.createElement("div");
    zoom.className = "zoom";
    zoom.setAttribute("role", "dialog");
    zoom.setAttribute("aria-modal", "true");
    zoom.setAttribute("aria-hidden", "true");
    zoom.innerHTML =
      '<button class="zoom__close" type="button" aria-label="' + esc(t("zoom.close")) + '">' +
        '<svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" stroke-width="1.4" aria-hidden="true">' +
        '<path d="M2 2l12 12M14 2L2 14"/></svg>' +
      "</button>" +
      '<div class="zoom__stage"><img alt=""></div>' +
      '<p class="zoom__hint">' +
        esc(finePointer.matches ? t("zoom.hint") : t("zoom.hint.touch")) +
      "</p>";
    document.body.appendChild(zoom);
    zoomImg = $("img", zoom);
    var stage = $(".zoom__stage", zoom);

    $(".zoom__close", zoom).addEventListener("click", closeZoom);
    zoom.addEventListener("click", function (e) {
      if (e.target === zoom || e.target === stage) closeZoom();
    });
    zoomImg.addEventListener("click", function (e) {
      e.stopPropagation();
      /* A tap on a touch screen also fires click; the double-tap handler
         owns that case, so only act on a real mouse. */
      if (!finePointer.matches) return;
      toggle2x(e.clientX, e.clientY);
    });
    armGestures(stage);

    document.addEventListener("keydown", function (e) {
      if (!zoom.classList.contains("is-open")) return;
      if (e.key === "Escape") closeZoom();
      /* Keep Tab inside the dialog — the close button is the only stop. */
      if (e.key === "Tab") { e.preventDefault(); $(".zoom__close", zoom).focus(); }
    });
  }

  function openZoom(src, alt) {
    buildZoom();
    lastFocus = document.activeElement;
    zoomImg.classList.remove("is-2x");
    zoomImg.style.transformOrigin = "";
    zoomImg.src = src;
    zoomImg.alt = alt || "";
    zoom.classList.add("is-open");
    zoom.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    $(".zoom__close", zoom).focus();
  }

  function closeZoom() {
    if (!zoom) return;
    zoom.classList.remove("is-open");
    zoom.setAttribute("aria-hidden", "true");
    /* The quick-view panel is still open underneath and also locks
       scroll — only release it if that panel has closed. */
    var qv = $("#qv");
    if (!qv || !qv.classList.contains("is-open")) document.body.classList.remove("is-locked");
    if (lastFocus) lastFocus.focus();
  }

  /* The quick-view stage is re-rendered per product, so listen on the
     container instead of binding to each new image. */
  function armZoom() {
    var stage = $("#qvStage");
    if (!stage) return;
    stage.classList.add("is-zoomable");
    stage.addEventListener("click", function (e) {
      var img = e.target.closest ? e.target.closest("img") : null;
      if (img) openZoom(img.currentSrc || img.src, img.alt);
    });
    /* Keyboard: the stage itself is focusable and opens on Enter/Space. */
    stage.setAttribute("tabindex", "0");
    stage.setAttribute("role", "button");
    stage.setAttribute("aria-label", t("zoom.open"));
    stage.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var img = $("img", stage);
      if (!img) return;
      e.preventDefault();
      openZoom(img.currentSrc || img.src, img.alt);
    });
    armLens(stage);
  }

  /* ===================================================================
     INIT
     =================================================================== */
  function init() {
    buildFacets();
    armCards();
    armZoom();

    var grid = $("#grid");
    if (grid && "MutationObserver" in window) {
      new MutationObserver(armCards).observe(grid, { childList: true });
    }
    /* Language switch rebuilds the grid and the facet labels. */
    $$("#lang button").forEach(function (b) {
      b.addEventListener("click", function () { setTimeout(buildFacets, 0); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* =====================================================================
   ABDITORY — ORDER / ENQUIRY FORM
   ---------------------------------------------------------------------
   One component, mounted in two places:

     context: "landing"  → the "Place an order" section before the footer.
                           Customer picks the request type themselves, and
                           the shoe-size field only appears if they choose
                           a shoes order.

     context: "product"  → inside the quick-view panel. Request type is
                           locked to "Product order", the product name is
                           filled in for them, and shoe size shows only
                           for footwear.

   The endpoint lives in data/site.js as ABDITORY_SITE.formEndpoint —
   that is the single place to change it.

   ---------------------------------------------------------------------
   WHY THE REQUEST LOOKS ODD (read before "fixing" it)
   ---------------------------------------------------------------------
   Google Apps Script Web Apps do not return CORS headers, so the browser
   would block a normal cross-origin POST. We send it with mode:"no-cors",
   which lets the request through but makes the response unreadable — we
   never learn whether the script actually succeeded, only whether the
   network call itself failed.

   In no-cors mode the browser only permits three Content-Type values:
   text/plain, application/x-www-form-urlencoded and multipart/form-data.
   Sending "application/json" would trigger a preflight and the whole
   thing would fail. So the BODY is JSON but the HEADER says text/plain.

   On the Apps Script side that is fine — read it with:
       const data = JSON.parse(e.postData.contents);

   Because we cannot read the response, a submission that reaches Google
   but fails inside the script still shows the customer a success message.
   That is the trade-off of this setup. The Instagram fallback in the
   error state exists so no order is silently lost.
   ===================================================================== */
(function () {
  "use strict";

  var SITE = window.ABDITORY_SITE || {};
  var I18N = window.ABDITORY_I18N || { en: {} };

  var SIZE_MIN = 34;
  var SIZE_MAX = 47;

  /* Types that mean "this involves footwear", so the size field shows. */
  var SHOE_TYPES = ["custom"];

  function lang() { return window.ABDITORY_LANG || "en"; }

  function t(key) {
    var d = I18N[lang()] || I18N.en;
    return (d && d[key]) || (I18N.en && I18N.en[key]) || "";
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* Deliberately loose. The point is to catch typos like a missing @ or a
     trailing comma, not to police what is a valid address — over-strict
     email regexes reject real addresses and lose real orders. */
  function emailLooksValid(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
  }

  function sizeOptions() {
    var out = "";
    for (var s = SIZE_MIN; s <= SIZE_MAX; s++) out += '<option value="' + s + '">' + s + "</option>";
    return out;
  }

  /* ===================================================================
     MARKUP
     =================================================================== */
  function template(opts) {
    var isProduct = opts.context === "product";
    /* Show the shopper the name in their own language — name_de, name_es,
       name_ka — and fall back to the English when a locale has not been
       translated. NOTE: what gets SUBMITTED further down stays the English
       name plus the id, so every order that lands in the inbox reads the
       same way whichever language it was placed in. */
    var productName = "";
    if (opts.product) {
      productName = opts.product["name_" + lang()] || opts.product.name;
    }
    var isShoes = opts.product && opts.product.category === "shoes";

    var typeField = isProduct
      ? ""
      : '<div class="field" data-field="requestType">' +
          '<label class="field__label" for="' + opts.uid + '-type">' + esc(t("form.type")) + "</label>" +
          '<div class="field__control">' +
            '<select id="' + opts.uid + '-type" name="requestType" class="field__input">' +
              '<option value="">' + esc(t("form.type_ph")) + "</option>" +
              '<option value="custom">' + esc(t("form.type.custom")) + "</option>" +
              '<option value="accessory">' + esc(t("form.type.accessory")) + "</option>" +
              '<option value="question">' + esc(t("form.type.question")) + "</option>" +
              '<option value="other">' + esc(t("form.type.other")) + "</option>" +
            "</select>" +
          "</div>" +
          '<p class="field__error" role="alert"></p>' +
        "</div>";

    /* On a shoes product the size is always relevant, so it starts open.
       On the landing page it stays hidden until the customer says they
       want shoes. */
    var sizeOpen = isProduct ? isShoes : false;
    var sizeField =
      (isProduct && !isShoes)
        ? ""
        : '<div class="field field--size' + (sizeOpen ? " is-open" : "") + '" data-field="shoeSize"' + (sizeOpen ? "" : " hidden") + ">" +
            '<label class="field__label" for="' + opts.uid + '-size">' + esc(t("form.size")) + "</label>" +
            '<div class="field__control">' +
              '<select id="' + opts.uid + '-size" name="shoeSize" class="field__input">' +
                '<option value="">' + esc(t("form.size_ph")) + "</option>" +
                sizeOptions() +
              "</select>" +
            "</div>" +
            '<p class="field__error" role="alert"></p>' +
          "</div>";

    var productLine = isProduct
      ? '<div class="form__product">' +
          '<span class="form__product-label">' + esc(t("form.product_label")) + "</span>" +
          '<strong class="form__product-name">' + esc(productName) + "</strong>" +
          '<span class="form__product-code">' + esc(opts.product.id) + "</span>" +
        "</div>"
      : "";

    var head = isProduct
      ? ""
      : '<div class="section-head form__head" data-reveal>' +
          '<span class="eyebrow"><i class="star" aria-hidden="true"></i><span>' + esc(t("form.eyebrow")) + "</span></span>" +
          "<h2>" + esc(t("form.title")) + "</h2>" +
          "<p>" + esc(t("form.intro")) + "</p>" +
        "</div>";

    /* The form lives in its own slot so the success / failure state can
       replace the form alone and leave the section heading standing. */
    return (
      head +
      '<div class="form__slot">' +
      '<form class="form' + (isProduct ? " form--compact" : "") + '" novalidate autocomplete="on">' +
        productLine +

        '<div class="form__grid">' +

          '<div class="field" data-field="name">' +
            '<label class="field__label" for="' + opts.uid + '-name">' + esc(t("form.name")) + "</label>" +
            '<div class="field__control">' +
              '<input id="' + opts.uid + '-name" name="name" type="text" class="field__input" autocomplete="name" maxlength="80">' +
            "</div>" +
            '<p class="field__error" role="alert"></p>' +
          "</div>" +

          '<div class="field" data-field="email">' +
            '<label class="field__label" for="' + opts.uid + '-email">' + esc(t("form.email")) + "</label>" +
            '<div class="field__control">' +
              '<input id="' + opts.uid + '-email" name="email" type="email" class="field__input" autocomplete="email" maxlength="120">' +
            "</div>" +
            '<p class="field__error" role="alert"></p>' +
          "</div>" +

          '<div class="field" data-field="instagram">' +
            '<label class="field__label" for="' + opts.uid + '-ig">' + esc(t("form.instagram")) +
              ' <span class="field__opt">' + esc(t("form.optional")) + "</span></label>" +
            '<div class="field__control field__control--prefix">' +
              '<span class="field__prefix" aria-hidden="true">@</span>' +
              '<input id="' + opts.uid + '-ig" name="instagram" type="text" class="field__input" autocapitalize="none" spellcheck="false" maxlength="60">' +
            "</div>" +
            '<p class="field__error" role="alert"></p>' +
          "</div>" +

          '<div class="field" data-field="country">' +
            '<label class="field__label" for="' + opts.uid + '-country">' + esc(t("form.country")) + "</label>" +
            '<div class="field__control">' +
              '<input id="' + opts.uid + '-country" name="country" type="text" class="field__input" autocomplete="country-name" maxlength="60">' +
            "</div>" +
            '<p class="field__error" role="alert"></p>' +
          "</div>" +

          typeField +
          sizeField +

          '<div class="field field--wide" data-field="message">' +
            '<label class="field__label" for="' + opts.uid + '-msg">' + esc(t("form.message")) +
              ' <span class="field__opt" data-msg-optional>' + esc(t("form.optional")) + "</span></label>" +
            '<div class="field__control">' +
              '<textarea id="' + opts.uid + '-msg" name="message" class="field__input field__input--area" rows="5" maxlength="2000" placeholder="' + esc(t("form.message_ph")) + '"></textarea>' +
            "</div>" +
            '<p class="field__error" role="alert"></p>' +
          "</div>" +

        "</div>" +

        /* Honeypot. Real people never see it; bots fill everything in. */
        '<div class="form__trap" aria-hidden="true">' +
          '<label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label>' +
        "</div>" +

        '<div class="form__actions">' +
          '<button type="submit" class="btn btn--blood' + (isProduct ? " btn--full" : "") + '">' +
            "<span>" + esc(t(isProduct ? "form.submit_product" : "form.submit")) + "</span>" +
          "</button>" +
        "</div>" +

      "</form>" +
      "</div>"
    );
  }

  /* ===================================================================
     RESULT STATES
     =================================================================== */
  function successMarkup() {
    return (
      '<div class="form-result form-result--ok" role="status">' +
        '<i class="star form-result__star" aria-hidden="true"></i>' +
        '<h3 class="form-result__title">' + esc(t("form.ok.title")) + "</h3>" +
        '<p class="form-result__body">' + esc(t("form.ok.body")) + "</p>" +
        '<a class="btn" href="' + esc(SITE.instagramUrl || "#") + '" target="_blank" rel="noopener"><span>' + esc(t("form.ok.cta")) + "</span></a>" +
      "</div>"
    );
  }

  function failureMarkup() {
    return (
      '<div class="form-result form-result--fail" role="alert">' +
        '<h3 class="form-result__title">' + esc(t("form.fail.title")) + "</h3>" +
        '<p class="form-result__body">' + esc(t("form.fail.body")) + "</p>" +
        '<a class="btn btn--blood" href="' + esc(SITE.instagramUrl || "#") + '" target="_blank" rel="noopener"><span>' + esc(t("form.fail.cta")) + "</span></a>" +
      "</div>"
    );
  }

  /* ===================================================================
     VALIDATION
     =================================================================== */
  function fieldEl(form, name) {
    return form.querySelector('[data-field="' + name + '"]');
  }

  function setError(form, name, msg) {
    var f = fieldEl(form, name);
    if (!f) return;
    var input = f.querySelector(".field__input");
    f.classList.toggle("is-invalid", !!msg);
    if (input) input.setAttribute("aria-invalid", msg ? "true" : "false");
    var p = f.querySelector(".field__error");
    if (p) p.textContent = msg || "";
  }

  function clearErrors(form) {
    ["name", "email", "instagram", "country", "requestType", "shoeSize", "message"].forEach(function (n) {
      setError(form, n, "");
    });
  }

  function readValues(form, opts) {
    var g = function (n) {
      var el = form.elements[n];
      return el ? String(el.value || "").trim() : "";
    };
    var isProduct = opts.context === "product";
    return {
      name: g("name"),
      email: g("email"),
      instagram: g("instagram").replace(/^@+/, ""),   // store it clean, the @ is decoration
      country: g("country"),
      shoeSize: g("shoeSize"),
      requestType: isProduct ? "product" : g("requestType"),
      message: g("message"),
      trap: g("website")
    };
  }

  function sizeIsRequired(v, opts) {
    if (opts.context === "product") return !!(opts.product && opts.product.category === "shoes");
    return SHOE_TYPES.indexOf(v.requestType) !== -1;
  }

  function messageIsRequired(v, opts) {
    /* Custom work is the only case where we genuinely cannot proceed
       without a description. Everything else is nice to have. */
    if (opts.context === "product") return false;
    return v.requestType === "custom";
  }

  function validate(form, v, opts) {
    var firstBad = null;
    function fail(field, msg) {
      setError(form, field, msg);
      if (!firstBad) firstBad = field;
    }

    if (v.name.length < 2) fail("name", t("form.err.name"));
    if (!v.email) fail("email", t("form.err.email"));
    else if (!emailLooksValid(v.email)) fail("email", t("form.err.email_bad"));
    if (!v.country) fail("country", t("form.err.country"));
    if (opts.context !== "product" && !v.requestType) fail("requestType", t("form.err.type"));
    if (sizeIsRequired(v, opts) && !v.shoeSize) fail("shoeSize", t("form.err.size"));
    if (messageIsRequired(v, opts) && !v.message) fail("message", t("form.err.message"));

    return firstBad;
  }

  /* ===================================================================
     SUBMIT
     =================================================================== */
  function payloadFor(v, opts) {
    var typeLabels = {
      custom: t("form.type.custom"),
      accessory: t("form.type.accessory"),
      question: t("form.type.question"),
      other: t("form.type.other"),
      product: t("form.type.product")
    };
    return {
      sourcePage: location.pathname + location.search + location.hash,
      product: opts.product ? opts.product.name + " (" + opts.product.id + ")" : "",
      name: v.name,
      email: v.email,
      instagram: v.instagram ? "@" + v.instagram : "",
      country: v.country,
      shoeSize: v.shoeSize,
      requestType: typeLabels[v.requestType] || v.requestType,
      message: v.message
    };
  }

  function send(payload) {
    var url = SITE.formEndpoint;
    if (!url) return Promise.reject(new Error("No formEndpoint set in data/site.js"));
    return fetch(url, {
      method: "POST",
      mode: "no-cors",
      /* text/plain, NOT application/json — see the note at the top */
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
  }

  /* ===================================================================
     MOUNT
     =================================================================== */
  var uidCounter = 0;

  function mount(host, options) {
    if (!host) return;
    var opts = {
      context: (options && options.context) || "landing",
      product: (options && options.product) || null,
      uid: "af" + (++uidCounter)
    };

    host.innerHTML = template(opts);
    var slot = host.querySelector(".form__slot");
    var form = host.querySelector("form");
    if (!form || !slot) return;

    var typeSel = form.elements["requestType"];
    var sizeField = fieldEl(form, "shoeSize");
    var msgOptional = form.querySelector("[data-msg-optional]");

    /* Landing page: reveal the size field only for a shoes order, and
       flip the message label between optional and required. */
    function syncConditional() {
      var type = typeSel ? typeSel.value : (opts.context === "product" ? "product" : "");
      if (sizeField && opts.context !== "product") {
        var show = SHOE_TYPES.indexOf(type) !== -1;
        sizeField.hidden = !show;
        sizeField.classList.toggle("is-open", show);
        if (!show) {
          var sizeInput = form.elements["shoeSize"];
          if (sizeInput) sizeInput.value = "";
          setError(form, "shoeSize", "");
        }
      }
      if (msgOptional) {
        msgOptional.hidden = messageIsRequired({ requestType: type }, opts);
      }
    }
    if (typeSel) typeSel.addEventListener("change", syncConditional);
    syncConditional();

    /* Clear a field's error as soon as the customer starts fixing it —
       leaving red text sitting there while they type feels punitive. */
    form.addEventListener("input", function (e) {
      var f = e.target.closest ? e.target.closest("[data-field]") : null;
      if (f && f.classList.contains("is-invalid")) {
        setError(form, f.getAttribute("data-field"), "");
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var v = readValues(form, opts);

      /* Honeypot tripped: behave exactly as if it worked, send nothing. */
      if (v.trap) {
        slot.innerHTML = successMarkup();
        return;
      }

      clearErrors(form);
      var firstBad = validate(form, v, opts);
      if (firstBad) {
        var bad = fieldEl(form, firstBad);
        var input = bad && bad.querySelector(".field__input");
        if (input) input.focus({ preventScroll: false });
        return;
      }

      var btn = form.querySelector('button[type="submit"]');
      var label = btn ? btn.querySelector("span") : null;
      var original = label ? label.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.classList.add("is-loading");
      }
      if (label) label.textContent = t("form.sending");

      send(payloadFor(v, opts))
        .then(function () {
          slot.innerHTML = successMarkup();
        })
        .catch(function (err) {
          if (window.console) console.warn("[abditory] form submit failed:", err);
          slot.innerHTML = failureMarkup();
        });
    });
  }

  window.ABDITORY_FORM = { mount: mount };
})();

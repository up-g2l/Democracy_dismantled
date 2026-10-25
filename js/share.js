/*
  Share buttons on every page: WhatsApp, X, Facebook, Telegram, Instagram and Copy link.
  Shares the page's canonical address (janmat.net/...) and its title.
  Instagram has no web share link, so that button opens the phone's own share
  sheet where available (Instagram is listed there) and otherwise copies the link.
*/
(function () {
  "use strict";
  function t(k) {
    var fb = { "share.label": "Share", "share.copy": "Copy link", "share.copied": "Link copied",
      "share.insta": "Link copied. Paste it into your Instagram story, post or bio." };
    return window.SiteI18n ? window.SiteI18n.t(k) : fb[k] || k;
  }
  function meta(sel, attr) { var el = document.querySelector(sel); return el ? el.getAttribute(attr) : ""; }

  var url = meta('link[rel="canonical"]', "href") || location.href.split("#")[0];
  var title = meta('meta[property="og:title"]', "content") || document.title;
  var u = encodeURIComponent(url), tt = encodeURIComponent(title);

  var NETS = [
    { id: "whatsapp", name: "WhatsApp", href: "https://wa.me/?text=" + encodeURIComponent(title + " " + url) },
    { id: "x", name: "X", href: "https://x.com/intent/post?text=" + tt + "&url=" + u },
    { id: "facebook", name: "Facebook", href: "https://www.facebook.com/sharer/sharer.php?u=" + u },
    { id: "telegram", name: "Telegram", href: "https://t.me/share/url?url=" + u + "&text=" + tt },
    { id: "instagram", name: "Instagram" },
    { id: "copy" }
  ];

  var toastEl, toastTimer;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "share-toast"; toastEl.setAttribute("role", "status");
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg; toastEl.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 3200);
  }
  function copy(msg) {
    var done = function () { toast(msg); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(done, function () { fallback(); done(); });
    } else { fallback(); done(); }
  }
  function fallback() {
    var ta = document.createElement("textarea"); ta.value = url; ta.setAttribute("readonly", "");
    ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
  }
  var touch = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;

  function bar() {
    var wrap = document.createElement("div");
    wrap.className = "share";
    wrap.innerHTML = '<span class="share-label"></span><ul></ul>';
    var ul = wrap.querySelector("ul");
    NETS.forEach(function (n) {
      var li = document.createElement("li"), el;
      if (n.href) {
        el = document.createElement("a"); el.href = n.href; el.target = "_blank"; el.rel = "noopener";
        el.textContent = n.name;
      } else {
        el = document.createElement("button"); el.type = "button";
        if (n.id === "instagram") {
          el.textContent = n.name;
          el.addEventListener("click", function () {
            if (navigator.share && touch) {
              navigator.share({ title: title, url: url }).catch(function () {});
            } else { copy(t("share.insta")); }
          });
        } else {
          el.addEventListener("click", function () { copy(t("share.copied")); });
        }
      }
      el.className = "share-btn share-" + n.id;
      li.appendChild(el); ul.appendChild(li);
    });
    return wrap;
  }
  function labels() {
    Array.prototype.forEach.call(document.querySelectorAll(".share"), function (w) {
      w.querySelector(".share-label").textContent = t("share.label");
      var c = w.querySelector(".share-copy"); if (c) c.textContent = t("share.copy");
      Array.prototype.forEach.call(w.querySelectorAll("a.share-btn, .share-instagram"), function (a) {
        a.setAttribute("aria-label", t("share.label") + ": " + a.textContent);
      });
    });
  }

  // Where the bars go: under the intro on every page, and again at the end of topic pages.
  var spots = [];
  var hero = document.querySelector(".hero-text");
  if (hero) spots.push([hero, "append"]);
  var tag = document.querySelector(".home-tagline");
  if (tag) spots.push([tag, "after"]);
  var about = document.querySelector(".about");
  if (about) spots.push([about, "append"]);
  spots.forEach(function (s) {
    var b = bar();
    if (s[1] === "after") s[0].parentNode.insertBefore(b, s[0].nextSibling); else s[0].appendChild(b);
  });
  labels();
  document.addEventListener("langchange", labels);
})();

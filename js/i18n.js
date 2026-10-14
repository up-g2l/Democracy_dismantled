/*
  Language switching for every page.
  - Adds a language picker to the page header.
  - Remembers the choice (and accepts ?lang=hi in the address).
  - Translates any element with data-i18n="key" using js/i18n-strings.js.
  - Loads a font for the chosen script.
  - On pages whose content is English only (body data-content-lang="en"),
    shows a note with a Google Translate link when another language is chosen.
  Other scripts can listen for the "langchange" event on document.
*/
(function () {
  "use strict";
  var LANGS = window.SITE_LANGS || [{ code: "en", name: "English" }];
  var STR = window.I18N || {};
  var KEY = "dd-lang";
  var loadedFonts = {};

  function find(code) { for (var i = 0; i < LANGS.length; i++) if (LANGS[i].code === code) return LANGS[i]; return null; }

  function initial() {
    var q = (location.search.match(/[?&]lang=([a-z]{2})/) || [])[1];
    if (q && find(q)) return q;
    try { var s = localStorage.getItem(KEY); if (s && find(s)) return s; } catch (e) {}
    return "en";
  }

  var current = initial();

  function t(key, lang) {
    lang = lang || current;
    return (STR[lang] && STR[lang][key]) || (STR.en && STR.en[key]) || key;
  }
  // Pick a language from a {en:..., hi:...} object, falling back to English.
  function pick(obj, lang) {
    if (!obj) return "";
    if (typeof obj === "string") return obj;
    return obj[lang || current] || obj.en || "";
  }

  function loadFont(lang) {
    var L = find(lang);
    if (!L || !L.font || loadedFonts[L.font]) return;
    loadedFonts[L.font] = true;
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=" + L.font.replace(/ /g, "+") + ":wght@400;500;600;700&display=swap";
    document.head.appendChild(link);
  }

  function applyStrings() {
    var els = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < els.length; i++) els[i].textContent = t(els[i].getAttribute("data-i18n"));
  }

  function notice() {
    var body = document.body;
    if (!body || body.getAttribute("data-content-lang") !== "en") return;
    var bar = document.getElementById("lang-notice");
    if (current === "en") { if (bar) bar.hidden = true; return; }
    if (!bar) {
      bar = document.createElement("div");
      bar.id = "lang-notice";
      bar.className = "lang-notice";
      bar.setAttribute("role", "note");
      var head = document.querySelector(".masthead");
      if (head && head.parentNode) head.parentNode.insertBefore(bar, head.nextSibling); else body.insertBefore(bar, body.firstChild);
    }
    bar.hidden = false;
    var online = /^https?:$/.test(location.protocol) && !/^(localhost|127\.|0\.0\.0\.0|\[::1\])/.test(location.hostname);
    var html = "<span>" + esc(t("notice.en")) + "</span> ";
    if (online) {
      var url = "https://translate.google.com/translate?sl=en&tl=" + current + "&u=" + encodeURIComponent(location.href.split("?")[0]);
      html += '<a href="' + url + '" rel="noopener">' + esc(t("notice.link")) + "</a>";
    } else {
      html += "<span class=\"muted\">" + esc(t("notice.offline")) + "</span>";
    }
    bar.innerHTML = html;
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function picker() {
    var head = document.querySelector(".masthead");
    if (!head || head.querySelector(".lang-picker")) return;
    var wrap = document.createElement("label");
    wrap.className = "lang-picker";
    var span = document.createElement("span");
    span.className = "visually-hidden";
    span.setAttribute("data-i18n", "lang.label");
    span.textContent = t("lang.label");
    var sel = document.createElement("select");
    sel.id = "lang-select";
    LANGS.forEach(function (L) {
      var o = document.createElement("option");
      o.value = L.code; o.textContent = L.name; o.lang = L.code;
      sel.appendChild(o);
    });
    sel.value = current;
    sel.addEventListener("change", function () { set(this.value); });
    wrap.appendChild(span); wrap.appendChild(sel);
    head.appendChild(wrap);
  }

  function set(lang) {
    if (!find(lang)) lang = "en";
    current = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    var L = find(lang);
    var root = document.documentElement;
    // Content pages keep English text, so only the header changes direction there.
    var englishContent = document.body && document.body.getAttribute("data-content-lang") === "en";
    root.setAttribute("data-ui-lang", lang);
    if (!englishContent) { root.lang = lang; root.dir = L.dir || "ltr"; }
    loadFont(lang);
    applyStrings();
    var sel = document.getElementById("lang-select"); if (sel) sel.value = lang;
    notice();
    var ev;
    try { ev = new CustomEvent("langchange", { detail: { lang: lang } }); }
    catch (e) { ev = document.createEvent("CustomEvent"); ev.initCustomEvent("langchange", false, false, { lang: lang }); }
    document.dispatchEvent(ev);
  }

  window.SiteI18n = { t: t, pick: pick, set: set, get lang() { return current; } };

  function init() { picker(); set(current); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

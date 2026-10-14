(function () {
  "use strict";

  var CASES = window.CASES || [];
  var TYPES = window.TYPES || {};
  var state = { type: "all", q: "" };
  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtDate(d) {
    var p = d.split("-");
    if (p.length === 1) return p[0];
    var m = MONTHS[parseInt(p[1], 10) - 1];
    return p[2] ? parseInt(p[2], 10) + " " + m + " " + p[0] : m + " " + p[0];
  }
  function sortKey(d) { return d.length === 4 ? d + "-06-15" : d.length === 7 ? d + "-28" : d; }

  function rng(seed) {
    var h = 2166136261;
    for (var i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () {
      h += 0x6D2B79F5; var t = h;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  // One small house, crowded with registered names; a few are marked.
  function art(link) {
    var r = rng(link.url), s = "";
    s += '<path d="M130 70 L200 22 L270 70 L270 148 L130 148 Z" class="a-card"/>';
    var cols = 6, rows = 4 + Math.floor(r() * 2), marked = 0;
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var cx = 150 + x * 20, cy = 82 + y * 15;
        if (cy > 140) continue;
        var hit = r() < 0.22;
        if (hit) marked++;
        s += '<circle cx="' + cx + '" cy="' + cy + '" r="4.5" class="' + (hit ? "a-ink" : "a-line") + '"/>';
      }
    }
    s += '<line x1="60" y1="148" x2="340" y2="148" class="a-rule"/>';
    return '<svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' + s + "</svg>";
  }

  function card(link) {
    var media = link.image
      ? '<img src="' + esc(link.image) + '" alt="" loading="lazy">'
      : art(link);
    return '<li class="card" data-type="' + esc(link.type) + '">' +
      '<a href="' + esc(link.url) + '" target="_blank" rel="noopener">' +
        '<div class="card-art">' + media + "</div>" +
        '<div class="card-body">' +
          '<p class="card-meta"><span class="type type-' + esc(link.type) + '">' + esc(TYPES[link.type] || link.type) + "</span></p>" +
          "<h3>" + esc(link.title) + "</h3>" +
          '<p class="card-foot"><time datetime="' + esc(link.date) + '">' + fmtDate(link.date) + '</time><span class="src">' + esc(link.outlet) + "</span></p>" +
        "</div>" +
      "</a></li>";
  }

  function allLinks() {
    var out = [];
    CASES.forEach(function (c) { out = out.concat(c.links); });
    return out;
  }

  function renderIndex() {
    document.getElementById("case-index").innerHTML = CASES.map(function (c) {
      return '<li><a href="#' + esc(c.id) + '"><span class="ci-place">' + esc(c.place) + '</span><span class="ci-n">' + c.links.length + "</span></a></li>";
    }).join("");
  }

  function renderFilters() {
    var counts = { all: 0 };
    allLinks().forEach(function (l) { counts.all++; counts[l.type] = (counts[l.type] || 0) + 1; });
    var keys = ["all"].concat(Object.keys(TYPES).filter(function (k) { return counts[k]; }));
    document.getElementById("filters").innerHTML = keys.map(function (k) {
      return '<button type="button" data-type="' + k + '" aria-pressed="' + (state.type === k) + '">' +
        esc(k === "all" ? "All reports" : TYPES[k]) + ' <span class="n">' + counts[k] + "</span></button>";
    }).join("");
  }

  function renderFeed() {
    var q = state.q.trim().toLowerCase(), shown = 0;
    var html = CASES.map(function (c) {
      var links = c.links.filter(function (l) {
        return (state.type === "all" || l.type === state.type) &&
          (!q || (l.title + " " + l.outlet + " " + c.place).toLowerCase().indexOf(q) > -1);
      }).sort(function (a, b) { return sortKey(a.date).localeCompare(sortKey(b.date)); });
      if (!links.length) return "";
      shown += links.length;
      return '<section class="case" id="' + esc(c.id) + '" aria-labelledby="h-' + esc(c.id) + '">' +
        '<header class="case-head">' +
          '<h3 class="case-place" id="h-' + esc(c.id) + '">' + esc(c.place) + "</h3>" +
          '<p class="case-election">' + esc(c.election) + "</p>" +
          '<p class="case-sum">' + esc(c.summary) + "</p>" +
        "</header>" +
        '<ul class="grid">' + links.map(card).join("") + "</ul></section>";
    }).join("");
    document.getElementById("feed").innerHTML = html;
    document.getElementById("empty").hidden = shown > 0;
  }

  function init() {
    document.getElementById("count-links").textContent = allLinks().length;
    document.getElementById("count-cases").textContent = CASES.length;
    renderIndex(); renderFilters(); renderFeed();

    document.getElementById("filters").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      state.type = b.getAttribute("data-type");
      Array.prototype.forEach.call(this.querySelectorAll("button"), function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      renderFeed();
    });
    document.getElementById("q").addEventListener("input", function () { state.q = this.value; renderFeed(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

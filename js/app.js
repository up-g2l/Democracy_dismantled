(function () {
  "use strict";

  var REPORTS = (window.REPORTS || []).slice();
  var CATS = window.CATEGORIES || {};
  var state = { cat: "all", q: "", sort: "new" };

  var MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtDate(d) {
    var p = d.split("-");
    var m = MONTHS[parseInt(p[1], 10) - 1];
    return p[2] ? parseInt(p[2], 10) + " " + m + " " + p[0] : m + " " + p[0];
  }
  function sortKey(d) { return d.length === 7 ? d + "-15" : d; }

  // ---------- generated card illustrations ----------
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

  var ART = {
    // electoral roll: rows of names, some struck out
    rolls: function (r) {
      var s = "", y = 22;
      for (var i = 0; i < 7; i++) {
        var w = 120 + r() * 150, struck = r() < 0.38;
        s += '<rect x="64" y="' + (y - 5) + '" width="22" height="10" rx="2" class="a-faint"/>';
        s += '<rect x="96" y="' + (y - 3) + '" width="' + w.toFixed(0) + '" height="6" rx="3" class="' + (struck ? "a-faint" : "a-line") + '"/>';
        if (struck) s += '<line x1="90" y1="' + y + '" x2="' + (102 + w).toFixed(0) + '" y2="' + y + '" class="a-strike"/>';
        y += 20;
      }
      return s;
    },
    // selection panel: three seats, the balance tipped
    independence: function (r) {
      var lit = Math.floor(r() * 3), s = "";
      [100, 200, 300].forEach(function (x, i) {
        var hgt = 40 + (i === lit ? 30 : 0);
        s += '<circle cx="' + x + '" cy="' + (118 - hgt) + '" r="16" class="' + (i === lit ? "a-ink" : "a-line") + '"/>';
        s += '<rect x="' + (x - 26) + '" y="' + (138 - hgt) + '" width="52" height="' + hgt + '" rx="6" class="' + (i === lit ? "a-ink" : "a-faint") + '"/>';
      });
      s += '<line x1="50" y1="140" x2="350" y2="140" class="a-rule"/>';
      return s;
    },
    // bonds: stacked certificates
    bonds: function (r) {
      var s = "";
      for (var i = 0; i < 4; i++) {
        var x = 90 + i * 22 + r() * 6, y = 28 + i * 14;
        s += '<rect x="' + x.toFixed(0) + '" y="' + y + '" width="170" height="80" rx="4" class="' + (i === 3 ? "a-card-ink" : "a-card") + '"/>';
      }
      s += '<rect x="174" y="92" width="80" height="6" rx="3" class="a-paper"/><rect x="174" y="104" width="50" height="6" rx="3" class="a-paper"/>';
      s += '<circle cx="330" cy="98" r="11" class="a-paper-o"/>';
      return s;
    },
    // EVM ballot unit: rows with buttons, one lamp lit
    evm: function (r) {
      var s = '<rect x="110" y="12" width="180" height="138" rx="10" class="a-card"/>', lit = Math.floor(r() * 5);
      for (var i = 0; i < 5; i++) {
        var y = 30 + i * 24;
        s += '<rect x="126" y="' + (y - 4) + '" width="' + (60 + r() * 40).toFixed(0) + '" height="8" rx="4" class="a-faint"/>';
        s += '<circle cx="236" cy="' + y + '" r="4" class="' + (i === lit ? "a-ink" : "a-faint") + '"/>';
        s += '<rect x="250" y="' + (y - 7) + '" width="26" height="14" rx="7" class="a-line"/>';
      }
      return s;
    },
    // code of conduct: a seal
    conduct: function (r) {
      var cx = 200, cy = 80, s = "";
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="58" class="a-ring"/>';
      s += '<circle cx="' + cx + '" cy="' + cy + '" r="44" class="a-ring-thin"/>';
      for (var i = 0; i < 24; i++) {
        var a = (i / 24) * Math.PI * 2, x1 = cx + Math.cos(a) * 49, y1 = cy + Math.sin(a) * 49, x2 = cx + Math.cos(a) * 54, y2 = cy + Math.sin(a) * 54;
        s += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) + '" class="a-tick"/>';
      }
      s += '<rect x="176" y="70" width="48" height="6" rx="3" class="a-ink"/><rect x="184" y="84" width="32" height="6" rx="3" class="a-line"/>';
      return s;
    }
  };

  function artSVG(rep) {
    var fn = ART[rep.category] || ART.rolls;
    return '<svg viewBox="0 0 400 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">' + fn(rng(rep.url)) + "</svg>";
  }

  function media(rep) {
    if (rep.image) {
      return '<img src="' + esc(rep.image) + '" alt="" loading="lazy" onerror="this.parentNode.classList.add(\'no-img\');this.remove()">';
    }
    return artSVG(rep);
  }

  function card(rep) {
    var cat = CATS[rep.category] ? CATS[rep.category].name : rep.category;
    return '<li class="card" data-cat="' + esc(rep.category) + '">' +
      '<a href="' + esc(rep.url) + '" target="_blank" rel="noopener">' +
        '<div class="card-art">' + media(rep) + "</div>" +
        '<div class="card-body">' +
          '<p class="card-meta"><span class="tag">' + esc(cat) + "</span>" +
            (rep.kind ? '<span class="kind">' + esc(rep.kind) + "</span>" : "") + "</p>" +
          "<h3>" + esc(rep.title) + "</h3>" +
          '<p class="card-foot"><time datetime="' + esc(rep.date) + '">' + fmtDate(rep.date) + '</time><span class="src">The Indian Express</span></p>' +
        "</div>" +
      "</a></li>";
  }

  // ---------- lead ----------
  function renderLead() {
    var lead = REPORTS.filter(function (r) { return r.lead; })[0] ||
      REPORTS.slice().sort(function (a, b) { return sortKey(b.date).localeCompare(sortKey(a.date)); })[0];
    if (!lead) return;
    var el = document.getElementById("lead");
    el.innerHTML =
      '<a href="' + esc(lead.url) + '" target="_blank" rel="noopener">' +
        '<div class="lead-art">' + media(lead) + "</div>" +
        '<p class="lead-label">Lead investigation, <time datetime="' + esc(lead.date) + '">' + fmtDate(lead.date) + "</time></p>" +
        "<h2>" + esc(lead.title) + "</h2>" +
        (lead.summary ? '<p class="lead-sum">' + esc(lead.summary) + "</p>" : "") +
        '<span class="lead-cta">Read the report on indianexpress.com</span>' +
      "</a>";
  }

  // ---------- filters ----------
  function renderFilters() {
    var counts = { all: REPORTS.length };
    REPORTS.forEach(function (r) { counts[r.category] = (counts[r.category] || 0) + 1; });
    var keys = ["all"].concat(Object.keys(CATS).filter(function (k) { return counts[k]; }));
    document.getElementById("filters").innerHTML = keys.map(function (k) {
      var name = k === "all" ? "All topics" : CATS[k].name;
      return '<button type="button" data-cat="' + k + '" aria-pressed="' + (state.cat === k) + '">' +
        esc(name) + ' <span class="n">' + counts[k] + "</span></button>";
    }).join("");
  }

  // ---------- feed grouped by year ----------
  function renderFeed() {
    var q = state.q.trim().toLowerCase();
    var list = REPORTS.filter(function (r) {
      return (state.cat === "all" || r.category === state.cat) && (!q || r.title.toLowerCase().indexOf(q) > -1);
    }).sort(function (a, b) {
      var c = sortKey(b.date).localeCompare(sortKey(a.date));
      return state.sort === "new" ? c : -c;
    });

    var groups = [], cur = null;
    list.forEach(function (r) {
      var y = r.date.slice(0, 4);
      if (!cur || cur.year !== y) { cur = { year: y, items: [] }; groups.push(cur); }
      cur.items.push(r);
    });

    document.getElementById("feed").innerHTML = groups.map(function (g) {
      return '<section class="year" aria-label="' + g.year + '">' +
        '<h3 class="year-mark">' + g.year + '<span class="year-n">' + g.items.length + (g.items.length === 1 ? " report" : " reports") + "</span></h3>" +
        '<ul class="grid">' + g.items.map(card).join("") + "</ul></section>";
    }).join("");
    document.getElementById("empty").hidden = list.length > 0;
  }

  // ---------- videos ----------
  function renderVideos() {
    var vids = window.VIDEOS || [];
    var host = document.getElementById("videos");
    if (!vids.length) {
      host.innerHTML = '<p class="empty">No videos yet.</p>';
      return;
    }
    host.innerHTML = vids.map(function (v) {
      var src;
      if (v.youtubeId) src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(v.youtubeId);
      else if (v.playlist) src = "https://www.youtube-nocookie.com/embed/videoseries?list=" + encodeURIComponent(v.playlist);
      else if (v.liveChannel) src = "https://www.youtube.com/embed/live_stream?channel=" + encodeURIComponent(v.liveChannel);
      if (!src) return "";
      return '<figure class="video"><div class="frame"><iframe src="' + src + '" title="' + esc(v.title || "YouTube video") +
        '" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>' +
        (v.title ? "<figcaption>" + esc(v.title) + "</figcaption>" : "") + "</figure>";
    }).join("");
  }

  // ---------- posts (X) ----------
  function renderPosts() {
    var P = window.POSTS || { timelines: [], tweets: [] };
    var host = document.getElementById("post-list");
    var html = "";
    (P.timelines || []).forEach(function (h) {
      html += '<div class="post timeline"><a class="twitter-timeline" data-height="640" data-dnt="true" href="https://twitter.com/' +
        encodeURIComponent(h) + '">Posts by @' + esc(h) + "</a></div>";
    });
    (P.tweets || []).forEach(function (u) {
      html += '<div class="post"><blockquote class="twitter-tweet" data-dnt="true"><a href="' + esc(u) + '">View post on X</a></blockquote></div>';
    });
    host.innerHTML = html || '<p class="empty">No posts yet.</p>';
    if (!html) return;

    var loaded = false;
    function load() {
      if (loaded) return; loaded = true;
      var s = document.createElement("script");
      s.src = "https://platform.twitter.com/widgets.js"; s.async = true; s.charset = "utf-8";
      document.body.appendChild(s);
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (e) { if (e[0].isIntersecting) { load(); io.disconnect(); } }, { rootMargin: "400px" });
      io.observe(host);
    } else { load(); }
  }

  // ---------- wire up ----------
  function init() {
    var years = REPORTS.map(function (r) { return +r.date.slice(0, 4); });
    if (years.length) document.getElementById("span-years").textContent = Math.min.apply(null, years);
    document.getElementById("count-reports").textContent = REPORTS.length;

    renderLead(); renderFilters(); renderFeed(); renderVideos(); renderPosts();

    document.getElementById("filters").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      state.cat = b.getAttribute("data-cat");
      Array.prototype.forEach.call(this.querySelectorAll("button"), function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      renderFeed();
    });
    document.getElementById("q").addEventListener("input", function () { state.q = this.value; renderFeed(); });
    document.getElementById("sort").addEventListener("change", function () { state.sort = this.value; renderFeed(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();

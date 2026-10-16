/*
  The "Watch" button in the header of every page.
  Opens an overlay with YouTube videos from js/videos-data.js: the ones tagged
  for the current page first, with a tab to see all of them.
  Nothing loads from YouTube until a video is played, apart from thumbnails.
*/
(function () {
  "use strict";
  var VIDEOS = window.VIDEOS || [];
  var CHANNELS = window.VIDEO_CHANNELS || [];
  var btns = document.querySelectorAll(".nav-watch");
  if (!btns.length || !VIDEOS.length) return;

  function t(k) { return window.SiteI18n ? window.SiteI18n.t(k) : ({ "watch.title": "Watch", "watch.topic": "On this topic", "watch.all": "All videos", "watch.close": "Close", "watch.more": "More on YouTube:", "watch.open": "Open on YouTube", "watch.play": "Play" })[k] || k; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function bare(p) { return (p.split("/").pop() || "index").toLowerCase().replace(/\.html$/, "") || "index"; }

  var page = bare(location.pathname);
  var mine = VIDEOS.filter(function (v) { return (v.topics || []).indexOf(page) !== -1; });
  var hasTopic = mine.length > 0 && mine.length < VIDEOS.length;
  var state = { tab: hasTopic ? "topic" : "all", current: null };
  var dlg, built = false;

  function list() { return state.tab === "topic" ? mine : VIDEOS; }
  function thumb(id, size) { return "https://i.ytimg.com/vi/" + id + "/" + (size || "hqdefault") + ".jpg"; }

  function build() {
    dlg = document.createElement("dialog");
    dlg.className = "watch";
    dlg.setAttribute("aria-labelledby", "watch-dlg-title");
    dlg.innerHTML =
      '<div class="watch-panel">' +
        '<header class="watch-head">' +
          '<h2 id="watch-dlg-title"></h2>' +
          '<div class="watch-tabs" role="tablist"' + (hasTopic ? "" : " hidden") + '>' +
            '<button type="button" role="tab" data-tab="topic"></button>' +
            '<button type="button" role="tab" data-tab="all"></button>' +
          "</div>" +
          '<button type="button" class="watch-close"><span aria-hidden="true">&times;</span><span class="visually-hidden"></span></button>' +
        "</header>" +
        '<div class="watch-body">' +
          '<div class="watch-main">' +
            '<div class="watch-player"></div>' +
            '<p class="watch-now"><strong></strong><span></span></p>' +
          "</div>" +
          '<ol class="watch-list"></ol>' +
        "</div>" +
        '<footer class="watch-foot"></footer>' +
      "</div>";
    document.body.appendChild(dlg);

    dlg.addEventListener("click", function (e) {
      if (e.target === dlg) return dlg.close();               // backdrop
      var tab = e.target.closest("[data-tab]");
      if (tab) { state.tab = tab.getAttribute("data-tab"); state.current = null; render(); return; }
      if (e.target.closest(".watch-close")) return dlg.close();
      var item = e.target.closest("[data-id]");
      if (item) { select(item.getAttribute("data-id"), true); }
    });
    dlg.addEventListener("close", function () {
      dlg.querySelector(".watch-player").innerHTML = "";    // stop playback
      state.current = null;
      if (location.hash === "#videos") history.replaceState(null, "", location.pathname + location.search);
    });
    built = true;
  }

  function labels() {
    dlg.querySelector("#watch-dlg-title").textContent = t("watch.title");
    var tabs = dlg.querySelectorAll("[data-tab]");
    tabs[0].textContent = t("watch.topic") + " (" + mine.length + ")";
    tabs[1].textContent = t("watch.all") + " (" + VIDEOS.length + ")";
    Array.prototype.forEach.call(tabs, function (b) { b.setAttribute("aria-selected", String(b.getAttribute("data-tab") === state.tab)); });
    dlg.querySelector(".watch-close .visually-hidden").textContent = t("watch.close");
    dlg.querySelector(".watch-foot").innerHTML = esc(t("watch.more")) + " " + CHANNELS.map(function (c) {
      return '<a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(c.name) + "</a>";
    }).join(" · ");
  }

  function render() {
    labels();
    var vs = list();
    dlg.querySelector(".watch-list").innerHTML = vs.map(function (v) {
      return '<li><button type="button" data-id="' + esc(v.id) + '">' +
        '<img src="' + thumb(v.id, "mqdefault") + '" alt="" loading="lazy" width="320" height="180">' +
        '<span class="watch-item-text"><span class="watch-item-title">' + esc(v.title) + "</span>" +
        '<span class="watch-item-channel">' + esc(v.channel) + "</span></span></button></li>";
    }).join("");
    select(state.current || vs[0].id, false);
  }

  function select(id, play) {
    var v = VIDEOS.filter(function (x) { return x.id === id; })[0];
    if (!v) return;
    state.current = id;
    var box = dlg.querySelector(".watch-player");
    if (play) {
      box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
        '?autoplay=1&rel=0" title="' + esc(v.title) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    } else {
      box.innerHTML = '<button type="button" class="watch-poster" data-id="' + esc(id) + '">' +
        '<img src="' + thumb(id, "hqdefault") + '" alt="">' +
        '<span class="watch-play" aria-hidden="true"></span><span class="visually-hidden">' + esc(t("watch.play") + ": " + v.title) + "</span></button>";
    }
    var now = dlg.querySelector(".watch-now");
    now.querySelector("strong").textContent = v.title;
    now.querySelector("span").innerHTML = esc(v.channel) + ' · <a href="https://www.youtube.com/watch?v=' + encodeURIComponent(id) +
      '" target="_blank" rel="noopener">' + esc(t("watch.open")) + "</a>";
    Array.prototype.forEach.call(dlg.querySelectorAll(".watch-list [data-id]"), function (b) {
      if (b.getAttribute("data-id") === id) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
    });
  }

  function open() {
    if (!built) build();
    render();
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    dlg.querySelector(".watch-close").focus();
  }

  Array.prototype.forEach.call(btns, function (b) { b.addEventListener("click", open); });
  document.addEventListener("langchange", function () { if (built && dlg.open) labels(); });
  if (location.hash === "#videos") open();
})();

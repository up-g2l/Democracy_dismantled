/*
  Builds the Topics menu from js/topics-data.js, so a new topic added there
  appears in the menu on every page. Also closes the menu on outside click / Escape.
*/
(function () {
  "use strict";
  var d = document.querySelector("details.topics");
  if (!d) return;
  var ul = d.querySelector("ul");
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  function label(topic) {
    return window.SiteI18n ? window.SiteI18n.pick(topic.title) : topic.title.en;
  }

  function build() {
    var topics = (window.TOPICS || []).filter(function (x) { return x.menu !== false; });
    var html = '<li><a href="index.html"' + (here === "index.html" ? ' aria-current="page"' : "") +
      ' data-i18n="nav.all">' + (window.SiteI18n ? window.SiteI18n.t("nav.all") : "All topics") + "</a></li>";
    var onTopic = false;
    topics.forEach(function (x) {
      var cur = x.href.toLowerCase() === here;
      if (cur) onTopic = true;
      html += '<li><a href="' + x.href + '"' + (cur ? ' aria-current="page"' : "") + ">" + label(x).replace(/</g, "&lt;") + "</a></li>";
    });
    ul.innerHTML = html;
    d.querySelector("summary").classList.toggle("is-current", onTopic);
  }

  build();
  document.addEventListener("langchange", build);
  document.addEventListener("click", function (e) { if (d.open && !d.contains(e.target)) d.removeAttribute("open"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && d.open) { d.removeAttribute("open"); d.querySelector("summary").focus(); }
  });
})();

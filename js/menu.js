/*
  Builds the Topics menu from js/topics-data.js, so a new topic added there
  appears in the menu on every page. Also closes the menu on outside click / Escape.
*/
(function () {
  "use strict";
  var d = document.querySelector("details.topics");
  if (!d) return;
  var ul = d.querySelector("ul");
  // Hosts like Cloudflare serve "/form-7" for "form-7.html", so compare without ".html".
  function bare(p) { return (p.split("/").pop() || "index").toLowerCase().replace(/\.html$/, "") || "index"; }
  var here = bare(location.pathname);

  function label(topic) {
    return window.SiteI18n ? window.SiteI18n.pick(topic.title) : topic.title.en;
  }

  function build() {
    var topics = (window.TOPICS || []).filter(function (x) { return x.menu !== false; });
    var html = '<li><a href="index.html"' + (here === "index" ? ' aria-current="page"' : "") +
      ' data-i18n="nav.all">' + (window.SiteI18n ? window.SiteI18n.t("nav.all") : "All topics") + "</a></li>";
    var onTopic = false;
    topics.forEach(function (x) {
      var cur = bare(x.href) === here;
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

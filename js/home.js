/* Renders the topic cards on the home page from js/topics-data.js. */
(function () {
  "use strict";
  var grid = document.getElementById("topic-grid");
  if (!grid) return;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function render() {
    var I = window.SiteI18n;
    var lang = I ? I.lang : "en";
    var read = I ? I.t("home.open") : "Read";
    grid.innerHTML = (window.TOPICS || []).map(function (x) {
      var title = I ? I.pick(x.title) : x.title.en;
      var text = I ? I.pick(x.text) : x.text.en;
      // Mark text that fell back to English so it is read with English pronunciation.
      var tl = x.title[lang] ? lang : "en", dl = x.text[lang] ? lang : "en";
      return '<li class="topic-card" style="--tint:' + esc(x.tint || "#1b2a5c") + '">' +
        '<a href="' + esc(x.href) + '">' +
          '<span class="topic-img" style="background-image:url(\'' + esc(x.image) + '\')" aria-hidden="true"></span>' +
          '<span class="topic-body">' +
            '<span class="topic-title" lang="' + tl + '">' + esc(title) + "</span>" +
            '<span class="topic-text" lang="' + dl + '">' + esc(text) + "</span>" +
            '<span class="topic-go">' + esc(read) + "</span>" +
          "</span>" +
        "</a></li>";
    }).join("");
  }

  render();
  document.addEventListener("langchange", render);
})();

/*
  "How a vote disappears" — scroll-driven animation.
  Each .ex-step has data-scene; when a step reaches the middle of the screen
  the stage (an SVG of 100 voters, or a 20-seat state) moves to that scene.
  The constituency and the state are illustrations with made-up numbers.
*/
(function () {
  "use strict";
  var svgNS = "http://www.w3.org/2000/svg";
  var votersG = document.getElementById("ex-voters");
  var stateG = document.getElementById("ex-state");
  var tally = document.getElementById("ex-tally");
  var kicker = document.getElementById("ex-kicker");
  var svgTitle = document.getElementById("ex-svg-title");
  if (!votersG) return;

  /* ---------- one constituency: 100 voters, 51 for A, 49 for B ---------- */
  // A fixed, mixed pattern so the two sides look interleaved.
  var pattern = [];
  for (var i = 0; i < 100; i++) pattern.push(((i * 37 + 11) % 100) < 51 ? "a" : "b");
  var aIdx = [], bIdx = [];
  pattern.forEach(function (p, k) { (p === "a" ? aIdx : bIdx).push(k); });
  var flagged = [aIdx[3], aIdx[11], aIdx[19], aIdx[28], aIdx[36], aIdx[44]]; // six objections
  var removed = flagged.slice(0, 4);                                          // four struck off

  var voters = [];
  function addVoter(x, y, k) {
    var g = document.createElementNS(svgNS, "g");
    g.setAttribute("class", "ex-v");
    g.setAttribute("transform", "translate(" + x + " " + y + ")");
    var inner = document.createElementNS(svgNS, "g");
    inner.setAttribute("class", "ex-vi");
    var use = document.createElementNS(svgNS, "use");
    use.setAttribute("href", "#voter"); use.setAttribute("x", -15); use.setAttribute("y", -16);
    use.setAttribute("width", 30); use.setAttribute("height", 33);
    var ring = document.createElementNS(svgNS, "circle");
    ring.setAttribute("class", "ex-ring"); ring.setAttribute("r", 19);
    var cross = document.createElementNS(svgNS, "path");
    cross.setAttribute("class", "ex-cross"); cross.setAttribute("d", "M-14 -14 L14 14");
    var clock = document.createElementNS(svgNS, "g");
    clock.setAttribute("class", "ex-clock");
    clock.innerHTML = '<circle cx="12" cy="-13" r="8"/><path d="M12 -18 v5 h4"/>';
    inner.appendChild(ring); inner.appendChild(use); inner.appendChild(cross); inner.appendChild(clock);
    g.appendChild(inner); votersG.appendChild(g);
    voters[k] = g;
  }
  for (var r = 0; r < 10; r++) for (var c = 0; c < 10; c++) addVoter(40 + c * 40, 30 + r * 40, r * 10 + c);
  // three later additions sit on an extra row
  for (var n = 0; n < 3; n++) addVoter(180 + n * 40, 440, 100 + n);

  function setV(k, cls) { voters[k].setAttribute("class", "ex-v " + cls); }

  function bar(a, b, note) {
    var total = a + b, win = a === b ? "Tie" : (a > b ? "A wins by " + (a - b) : "B wins by " + (b - a));
    tally.innerHTML =
      '<div class="ex-bars"><span class="ex-bar ex-a" style="flex:' + a + '">A&nbsp;' + a + '</span>' +
      '<span class="ex-bar ex-b" style="flex:' + b + '">B&nbsp;' + b + '</span></div>' +
      '<p class="ex-win ' + (a > b ? "is-a" : "is-b") + '">' + win + (note ? '<span>' + note + '</span>' : "") + "</p>";
  }

  var CONST_SCENES = {
    roll: function () {
      voters.forEach(function (v, k) { setV(k, k < 100 ? "neutral" : "hidden"); });
      tally.innerHTML = '<p class="ex-win is-n">100 voters on the roll</p>';
    },
    fptp: function () {
      voters.forEach(function (v, k) { setV(k, k < 100 ? pattern[k] : "hidden"); });
      bar(51, 49);
    },
    form7: function () {
      voters.forEach(function (v, k) { setV(k, k < 100 ? pattern[k] : "hidden"); });
      flagged.forEach(function (k) { setV(k, "a flagged"); });
      bar(51, 49, "6 objections filed against A's voters");
    },
    "delete": function () {
      voters.forEach(function (v, k) { setV(k, k < 100 ? pattern[k] : "hidden"); });
      flagged.forEach(function (k) { setV(k, "a flagged"); });
      removed.forEach(function (k) { setV(k, "gone"); });
      bar(47, 49, "4 names struck off before polling day");
    },
    add: function () {
      CONST_SCENES["delete"]();
      for (var n = 0; n < 3; n++) setV(100 + n, "b added");
      bar(47, 52, "3 names added, no details published");
    },
    referee: function () {
      CONST_SCENES.add();
      removed.forEach(function (k) { setV(k, "gone waiting"); });
      bar(47, 52, "4 appeals pending · they cannot vote");
    }
  };

  /* ---------- a state of 20 seats ---------- */
  // Margins (out of 100 voters per seat). A wins 11, B wins 9.
  var seats = [2, 2, 4, 6, 10, 14, 18, 22, 26, 30, 40].map(function (m) { return { w: "a", m: m }; })
    .concat([2, 4, 8, 12, 16, 20, 24, 28, 36].map(function (m) { return { w: "b", m: m }; }));
  // shuffle into a fixed "map" order
  var order = [5, 12, 0, 17, 9, 3, 14, 19, 7, 1, 11, 16, 2, 8, 18, 6, 13, 4, 10, 15];
  var targeted = [0, 1, 2];            // the three closest A seats
  var cut = { 0: 3, 1: 3, 2: 5 };      // voters removed in each
  var tiles = [];
  order.forEach(function (si, pos) {
    var g = document.createElementNS(svgNS, "g");
    var x = 30 + (pos % 5) * 78, y = 40 + Math.floor(pos / 5) * 92;
    g.setAttribute("transform", "translate(" + x + " " + y + ")");
    g.innerHTML = '<rect width="70" height="80" rx="10"/><text x="35" y="36" class="ex-tw"></text><text x="35" y="60" class="ex-tm"></text>';
    stateG.appendChild(g);
    tiles[si] = g;
  });
  function stateTotals(after) {
    var a = 0, b = 0, sa = 0, sb = 0;
    seats.forEach(function (s, i) {
      var va = s.w === "a" ? (100 + s.m) / 2 : (100 - s.m) / 2, vb = 100 - va;
      if (after && cut[i]) va -= cut[i];
      a += va; b += vb;
      if (va > vb) sa++; else sb++;
    });
    return { a: a, b: b, sa: sa, sb: sb };
  }
  function drawState(after) {
    seats.forEach(function (s, i) {
      var va = s.w === "a" ? (100 + s.m) / 2 : (100 - s.m) / 2, vb = 100 - va;
      var hit = after && cut[i];
      if (hit) va -= cut[i];
      var w = va > vb ? "a" : "b";
      var g = tiles[i];
      g.setAttribute("class", "ex-tile " + w + (hit ? " hit" : "") + (targeted.indexOf(i) > -1 && !after ? " close" : ""));
      g.querySelector(".ex-tw").textContent = w.toUpperCase();
      g.querySelector(".ex-tm").textContent = "by " + Math.abs(va - vb);
    });
    var t = stateTotals(after);
    var pa = (100 * t.a / (t.a + t.b)).toFixed(1), pb = (100 * t.b / (t.a + t.b)).toFixed(1);
    tally.innerHTML =
      '<div class="ex-row"><span class="ex-lab">Vote share</span><div class="ex-bars"><span class="ex-bar ex-a" style="flex:' + t.a + '">A&nbsp;' + pa + '%</span>' +
      '<span class="ex-bar ex-b" style="flex:' + t.b + '">B&nbsp;' + pb + '%</span></div></div>' +
      '<div class="ex-row"><span class="ex-lab">Seats</span><div class="ex-bars"><span class="ex-bar ex-a" style="flex:' + t.sa + '">A&nbsp;' + t.sa + '</span>' +
      '<span class="ex-bar ex-b" style="flex:' + t.sb + '">B&nbsp;' + t.sb + '</span></div></div>' +
      '<p class="ex-win ' + (t.sa > t.sb ? "is-a" : "is-b") + '">' + (t.sa > t.sb ? "A" : "B") + " forms the government" +
      (after ? '<span>11 voters removed in 3 seats out of 2,000</span>' : '<span>The three closest seats are outlined</span>') + "</p>";
  }

  var stateTimer;
  var SCENES = {
    state: function () {
      clearTimeout(stateTimer);
      drawState(false);
      stateTimer = setTimeout(function () { drawState(true); }, reduce ? 0 : 1600);
    },
    real: function () { clearTimeout(stateTimer); drawState(true); },
    close: function () { clearTimeout(stateTimer); CONST_SCENES.referee(); }
  };
  var KICK = {
    roll: "Illustration · one constituency", fptp: "Illustration · one constituency",
    form7: "Illustration · one constituency", "delete": "Illustration · one constituency",
    add: "Illustration · one constituency", referee: "Illustration · one constituency",
    state: "Illustration · a state of 20 seats", real: "Illustration · a state of 20 seats",
    close: "Illustration · one constituency"
  };
  var TITLES = {
    roll: "A constituency of 100 voters", fptp: "Candidate A leads Candidate B by 51 to 49",
    form7: "Six of A's voters are objected to", "delete": "Four are struck off; B now leads 49 to 47",
    add: "Three unexplained names are added; B leads 52 to 47", referee: "The four removed voters wait on appeals and cannot vote",
    state: "A state of 20 seats flips from A to B after small changes in three close seats",
    real: "The state after the changes", close: "The constituency after all the changes"
  };

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var current = "";
  function go(scene) {
    if (scene === current) return;
    current = scene;
    var isState = scene === "state" || scene === "real";
    votersG.setAttribute("class", isState ? "ex-hidden" : "");
    stateG.setAttribute("class", isState ? "" : "ex-hidden");
    (CONST_SCENES[scene] || SCENES[scene])();
    kicker.textContent = KICK[scene] || "";
    svgTitle.textContent = TITLES[scene] || "";
    Array.prototype.forEach.call(document.querySelectorAll(".ex-step"), function (s) {
      s.classList.toggle("is-active", s.getAttribute("data-scene") === scene);
    });
  }

  var steps = document.querySelectorAll(".ex-step");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) go(e.target.getAttribute("data-scene")); });
    }, { rootMargin: "-45% 0px -45% 0px" });
    Array.prototype.forEach.call(steps, function (s) { io.observe(s); });
  }
  go("roll");
  document.documentElement.classList.add("ex-js");
})();

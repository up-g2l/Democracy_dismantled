/*
  Democracy Dismantled — content file
  ------------------------------------------------------------
  Edit this file to add reports, videos and social posts.
  Nothing else needs to change.

  REPORT fields
    title    – headline exactly as published
    url      – link to the original article
    date     – "YYYY-MM-DD" (use "YYYY-MM" if only the month is known)
    category – one of the keys in CATEGORIES below
    image    – optional. URL or local path (e.g. "images/sir.jpg").
               Leave it out and the card draws its own illustration.
    lead     – optional. true puts the report in the top spot.
*/

window.CATEGORIES = {
  rolls:        { name: "Voter rolls and SIR" },
  independence: { name: "Appointments and independence" },
  bonds:        { name: "Electoral bonds" },
  evm:          { name: "EVMs and VVPAT" },
  conduct:      { name: "Model code of conduct" }
};

window.REPORTS = [
  // ---- 2026 ----
  {
    title: "14 times in 10 months, two Election Commissioners objected on record to poll panel steps",
    url: "https://indianexpress.com/article/express-exclusive/election-commission-sir-14-objections-gyanesh-kumar-sukhbir-singh-sandhu-vivek-joshi-10889737/",
    date: "2026-09-23", category: "independence", lead: true,
    summary: "Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi put at least 14 written objections on record about SIR decisions they say were taken without their knowledge. The ECI called the notes part of normal deliberation and said its decisions were unanimous."
  },
  {
    title: "Election Commissioners knocked on Cabinet Secretary's door over voter software integrity",
    url: "https://indianexpress.com/article/express-exclusive/election-commission-special-intensive-revision-sir-electoral-roll-centralisation-eci-ecinet-10889738/",
    date: "2026-09-23", category: "rolls"
  },
  {
    title: "'Illegal, unauthorised': Election Commissioners objected to Form 6 change",
    url: "https://indianexpress.com/article/express-exclusive/election-commission-illegal-changes-form-6-gyanesh-kumar-10889714/",
    date: "2026-09-23", category: "rolls"
  },
  {
    title: "8 emails in 7 days, but valid Goa voters still left out: EC's flawed system",
    url: "https://indianexpress.com/article/express-exclusive/election-commission-goa-sir-voter-deletion-ecinet-10891422/",
    date: "2026-09-24", category: "rolls"
  },
  {
    title: "Why is the 2023 Election Commissioner appointment law controversial, and why did SC refer it to CJI?",
    url: "https://indianexpress.com/article/explained/explained-law/cec-appointment-law-supreme-court-constitution-bench-explained-10891151/",
    date: "2026-09-24", category: "independence"
  },
  {
    title: "T N Seshan, N Gopalaswami, Ashok Lavasa: When Election Commission members differed",
    url: "https://indianexpress.com/article/explained/election-commission-india-cec-election-commissioners-dissent-10894190/",
    date: "2026-09-26", category: "independence"
  },
  {
    title: "CJP targets Election Commission, says ready for 3-month stir; AAP, Left lead charge in Delhi",
    url: "https://indianexpress.com/article/india/cec-gyanesh-kumar-resignation-protest-mumbai-delhi-cjp-sir-electoral-rolls-10904343/",
    date: "2026-10-02", category: "independence"
  },
  {
    title: "Of 27 lakh deleted West Bengal voters, 22 lakh have filed appeals: Election Commission to Supreme Court",
    url: "https://indianexpress.com/article/india/west-bengal-electoral-rolls-ec-supreme-court-appeals-deleted-voters-10885130/",
    date: "2026-09-19", category: "rolls"
  },
  {
    title: "How West Bengal SIR played out differently from other states, what it means for rest of country",
    url: "https://indianexpress.com/article/explained/how-west-bengal-sir-different-from-other-states-10564447/",
    date: "2026-03-07", category: "rolls"
  },
  {
    title: "West Bengal SIR: Fate of over 50 lakh voters in lurch as judicial officers start vetting documents",
    url: "https://indianexpress.com/article/cities/kolkata/west-bengal-sir-judicial-scrutiny-of-voter-list-begins-10547347/",
    date: "2026-02-24", category: "rolls"
  },
  {
    title: "Rajasthan: 31.36 lakh names removed in final rolls under SIR 2026",
    url: "https://indianexpress.com/article/india/rajasthan-31-36-lakh-names-removed-in-final-rolls-under-sir-2026-10544966/",
    date: "2026-02-21", category: "rolls"
  },
  {
    title: "SIR: 8.57 lakh deletions in Kerala as EC releases final voters list",
    url: "https://indianexpress.com/article/india/kerala-final-electoral-roll-2026-sir-process-explained-10544998/",
    date: "2026-02-21", category: "rolls"
  },
  {
    title: "SC issues notice on plea against law to provide immunity to CEC, ECs",
    url: "https://indianexpress.com/article/legal-news/sc-notice-plea-law-provide-immunity-cec-ecs-10469521/",
    date: "2026-01-12", category: "independence"
  },

  // ---- 2025 ----
  {
    title: "Special Intensive Revision (SIR): Why is it important? Why ECI is doing it now and what you need to do",
    url: "https://indianexpress.com/article/india/special-intensive-revision-sir-why-it-matters-and-what-to-do-10390743/",
    date: "2025-11-28", category: "rolls"
  },
  {
    title: "Use Aadhaar, any of 11 listed papers for inclusion claim: Supreme Court on Bihar rolls",
    url: "https://indianexpress.com/article/india/bihar-sir-sc-election-commission-deleted-voter-names-aadhaar-card-10204580/",
    date: "2025-08-23", category: "rolls"
  },
  {
    title: "'Minta Devi, 124 not out': error in Bihar woman's age on voter list gives ammo to Opposition; she says gave correct details",
    url: "https://indianexpress.com/article/india/minta-devi-124-not-out-error-in-bihar-womans-age-on-voters-list-gives-ammo-to-opposition-she-says-gave-correct-details-10185576/",
    date: "2025-08-13", category: "rolls"
  },
  {
    title: "Why is the Election Commission revising electoral rolls in Bihar, and when have revisions happened previously?",
    url: "https://indianexpress.com/article/explained/the-revision-of-electoral-rolls-10119162/",
    date: "2025-07-11", category: "rolls"
  },
  {
    title: "IIT Kanpur, Roorkee, Harvard University: Educational qualifications of Gyanesh Kumar & Vivek Joshi",
    url: "https://indianexpress.com/article/education/iit-kanpur-roorkee-harvard-university-educational-qualifications-ec-vivek-joshi-cec-gyanesh-kumar-jee-main-advanced-9842296/",
    date: "2025-02-18", category: "independence"
  },
  {
    title: "How Rajiv Kumar fared as Chief Election Commissioner: The hits and the misses",
    url: "https://indianexpress.com/article/political-pulse/rajiv-kumar-chief-election-commissioner-hits-misses-9839210/",
    date: "2025-02", category: "independence"
  },
  {
    title: "As CEC Rajiv Kumar retires, his legacy casts a dark cloud",
    url: "https://indianexpress.com/article/opinion/columns/yogendra-yadav-writes-as-cec-rajiv-kumar-retires-his-legacy-casts-a-dark-cloud-9815748/",
    date: "2025-02", category: "independence", kind: "Opinion"
  },

  // ---- 2024 ----
  {
    title: "Why VVPAT was brought in, why Opposition wants all slips verified",
    url: "https://indianexpress.com/article/explained/why-vvpat-was-brought-in-why-oppn-wants-all-slips-verified-9258995/",
    date: "2024-04-09", category: "evm"
  },
  {
    title: "3 of top 5 donors bought electoral bonds with ED and I-T knocking on their door",
    url: "https://indianexpress.com/article/india/3-of-top-5-donors-bought-electoral-bonds-with-ed-and-i-t-knocking-on-their-door-9214783/",
    date: "2024-03-15", category: "bonds"
  },
  {
    title: "Gyanesh Kumar, Sukhbir Singh Sandhu take charge as Election Commissioners",
    url: "https://indianexpress.com/article/india/gyanesh-kumar-sukhbir-singh-sandhu-take-charge-as-election-commissioners-9215260/",
    date: "2024-03-15", category: "independence"
  },
  {
    title: "'Gave dissent notes on EC appointments… govt in majority in panel': Adhir Ranjan Chowdhury",
    url: "https://indianexpress.com/article/india/adhir-ranjan-chowdhury-ec-appointments-modi-panel-9213815/",
    date: "2024-03-14", category: "independence"
  },
  {
    title: "Supreme Court agrees to hear plea against law dropping CJI from committee to select CEC, ECs",
    url: "https://indianexpress.com/article/cities/delhi/supreme-court-agrees-to-hear-plea-against-law-dropping-cji-from-committee-to-select-cec-ecs-9213094/",
    date: "2024-03-14", category: "independence"
  },
  {
    title: "Who is Gyanesh Kumar, the Election Commissioner picked by PM Modi-led panel",
    url: "https://indianexpress.com/article/who-is/gyanesh-kumar-election-commissioner-pm-modi-led-panel-9214010/",
    date: "2024-03-14", category: "independence"
  },
  {
    title: "Who is Sukhbir Singh Sandhu, new Election Commissioner appointed ahead of LS polls",
    url: "https://indianexpress.com/article/who-is/sukhbir-singh-sandhu-new-election-commissioner-9214016/",
    date: "2024-03-14", category: "independence"
  },
  {
    title: "Electoral bonds: How the SC verdict counters former FM Arun Jaitley's arguments",
    url: "https://indianexpress.com/article/india/supreme-court-verdict-on-poll-bonds-how-the-verdict-counters-former-fm-arun-jaitleys-arguments-9164201/",
    date: "2024-02-16", category: "bonds"
  },

  // ---- 2023 and earlier ----
  {
    title: "Bill downgrades Election Commissioner to status of Cabinet Secy from that of SC Judge",
    url: "https://indianexpress.com/article/india/bill-downgrades-election-commission-to-status-of-cabinet-secy-from-that-of-sc-judge-8940629/",
    date: "2023-09", category: "independence"
  },
  {
    title: "Appointing Election Commissioners: The government must not control the watchdog",
    url: "https://indianexpress.com/article/opinion/columns/appointing-election-commissioners-the-government-must-not-control-the-watchdog-8917864/",
    date: "2023-08-31", category: "independence", kind: "Opinion"
  },
  {
    title: "Arun Goel appointment as EC challenged in SC: Who is the retired bureaucrat?",
    url: "https://indianexpress.com/article/political-pulse/arun-goel-appointment-as-ec-challenged-in-sc-8565232/",
    date: "2023-04-19", category: "independence"
  },
  {
    title: "Retired IAS officer Arun Goel takes charge as Election Commissioner",
    url: "https://indianexpress.com/article/india/retired-ias-officer-arun-goel-assumes-charge-new-election-commissioner-8280116/",
    date: "2022-11-21", category: "independence"
  },
  {
    title: "Rajeev Kumar replaces Ashok Lavasa as Election Commissioner",
    url: "https://indianexpress.com/article/india/rajeev-kumar-replaces-ashok-lavasa-as-election-commissioner-6578628/",
    date: "2020-08", category: "independence"
  },
  {
    title: "A society that creates hurdles to exhaust the honest, paves the path for its own perdition",
    url: "https://indianexpress.com/article/opinion/columns/the-difficulty-of-being-honest-prevention-of-corruption-act-ashok-lavasa-election-commission-of-india-6188078/",
    date: "2019-12-28", category: "independence", kind: "Opinion"
  },
  {
    title: "Model Code is only moral code, but carries weight",
    url: "https://indianexpress.com/article/explained/model-code-is-only-moral-code-but-carries-weight/",
    date: "2015-11-05", category: "conduct"
  },
  {
    title: "Shelf-life of 50% EVMs ending, have to buy 14 lakh for 2019: EC",
    url: "https://indianexpress.com/article/india/india-news-india/shelf-life-of-50-evms-ending-have-to-buy-14-lakh-for-2019-ec/",
    date: "2015-10-25", category: "evm"
  }
];

/*
  VIDEOS — YouTube
    { title: "...", youtubeId: "VIDEO_ID" }            a single video
    { title: "...", playlist: "PLAYLIST_ID" }          a playlist
    { title: "...", liveChannel: "CHANNEL_ID" }        a channel's live stream
  The first entry shows The Indian Express channel's latest uploads
  (uploads playlist = channel ID with "UC" swapped for "UU").
*/
window.VIDEOS = [
  { title: "Latest from The Indian Express on YouTube", playlist: "UUJEDFSxHHOW1PpBccdSxOTA" }
];

/*
  POSTS — X (Twitter)
    timelines: account handles whose feed is shown
    tweets:    full URLs of individual posts, e.g.
               "https://twitter.com/IndianExpress/status/1234567890"
*/
window.POSTS = {
  timelines: ["IndianExpress"],
  tweets: []
};

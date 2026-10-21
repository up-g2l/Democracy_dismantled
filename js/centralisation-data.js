/*
  Centralisation page — content file
  ------------------------------------------------------------
  Reports on control of the election machinery being concentrated in the
  Chief Election Commissioner, the ECI's IT division, or the Union government.
  Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  investigation: "Investigation",
  allegation:    "Allegation",
  official:      "Official response",
  court:         "Court",
  explainer:     "Explainer",
  opinion:       "Opinion"
};

window.CASES = [
  {
    id: "full-commission",
    place: "Decisions without the full Commission",
    election: "Special Intensive Revision, 2025–2026",
    summary: "The Indian Express reported that Election Commissioners Sukhbir Singh Sandhu and Vivek Joshi objected in writing at least 14 times in 10 months. They said decisions on voter registration, deletions, appeals and roll security were taken without their knowledge. They cited the 2023 Act and Article 324, under which the Commission acts as a body of three. The ECI called the notes part of normal deliberation and said its decisions were unanimous. On 26 September 2026 it promised agendas in advance and minutes afterwards. On 5 October the Supreme Court refused to suspend CEC Gyanesh Kumar, but asked for a response on whether he acted unilaterally.",
    links: [
      { title: "14 times in 10 months, two Election Commissioners objected on record to poll panel steps", url: "https://indianexpress.com/article/express-exclusive/election-commission-sir-14-objections-gyanesh-kumar-sukhbir-singh-sandhu-vivek-joshi-10889737/", outlet: "The Indian Express", date: "2026-09-23", type: "investigation" },
      { title: "2 Election Commissioners raise 14 objections over voter rolls, Form 6 and IT controls; ECI says decisions were unanimous", url: "https://www.moneylife.in/article/2-election-commissioners-raise-14-objections-over-voter-rolls-form-6-and-it-controls-eci-says-decisions-were-unanimous/81733.html", outlet: "Moneylife", date: "2026-09", type: "official" },
      { title: "T N Seshan, N Gopalaswami, Ashok Lavasa: When Election Commission members differed", url: "https://indianexpress.com/article/explained/election-commission-india-cec-election-commissioners-dissent-10894190/", outlet: "The Indian Express", date: "2026-09-26", type: "explainer" },
      { title: "Election Commission on SIR row: Agendas to be shared before meetings, minutes to follow", url: "https://www.businesstoday.in/india/story/election-commission-on-sir-row-agendas-to-be-shared-before-meetings-minutes-to-follow-558049-2026-09-26", outlet: "Business Today", date: "2026-09-26", type: "official" },
      { title: "What the Election Commission's four-page note does – and does not – say", url: "https://thewire.in/government/what-the-election-commissions-four-page-note-does-and-does-not-say", outlet: "The Wire", date: "2026-09-28", type: "explainer" },
      { title: "Who controls your right to vote? Four questions the ECI must answer", url: "https://www.newslaundry.com/2026/09/30/who-controls-your-right-to-vote-four-questions-the-eci-must-answer", outlet: "Newslaundry (Ashok Lavasa)", date: "2026-09-30", type: "opinion" },
      { title: "SC refuses to suspend CEC Gyanesh Kumar, seeks response on 'unilateral' decisions", url: "https://www.thenewsminute.com/news/sc-refuses-to-suspend-cec-gyanesh-kumar-seeks-response-on-unilateral-decisions", outlet: "The News Minute", date: "2026-10-05", type: "court" },
      { title: "Supreme Court issues notice on pleas to suspend CEC Gyanesh Kumar over alleged unilateral SIR decisions", url: "https://theleaflet.in/leaflet-reports/supreme-court-issues-notice-on-pleas-to-suspend-cec-gyanesh-kumar-over-alleged-unilateral-sir-decisions", outlet: "The Leaflet", date: "2026-10-05", type: "court" }
    ]
  },
  {
    id: "ecinet",
    place: "The voter roll moves to ECINet",
    election: "Special Intensive Revision, 2026",
    summary: "Under the law, each constituency's Electoral Registration Officer (ERO) decides who goes on the roll. Sandhu and Joshi warned of a 'gradual centralisation' of the roll database in the ECI's IT division in Delhi. They also wrote to the Cabinet Secretary after supervision of the digital systems was reassigned. In Goa, eligible voters stayed off the roll because the ECINet software would not let officials reverse decisions. Maharashtra's chief electoral officer asked for the software to be changed so EROs could use the discretion the law gives them. The ECI called ECINet 'decentralised' and said no one, including its own staff, can override field officers, and later ordered a review of the platform. In October 2026 an audit of ECINet's publicly served code by the civic-tech group Charchagram, reported by The Hindu, found switches that let select officials turn each State's access to enumeration-form details on or off, and disable State nodal officers' accounts. A rule specific to West Bengal hid enumeration forms and the notices-and-hearings dashboard from its EROs and AEROs. Some voters carry a 'VIP' tag whose criteria are unknown. The audit could not show whether these controls were used, and the ECI did not answer questions.",
    links: [
      { title: "How ECI tailored the voter registration in West Bengal 'as it deemed fit'", url: "https://www.reporters-collective.in/trc/voter-registration-in-wb-as-it-deemed-fit?", outlet: "The Reporters' Collective", date: "2026-02-08", type: "investigation" },
      { title: "Election Commissioners knocked on Cabinet Secretary's door over voter software integrity", url: "https://indianexpress.com/article/express-exclusive/election-commission-special-intensive-revision-sir-electoral-roll-centralisation-eci-ecinet-10889738/", outlet: "The Indian Express", date: "2026-09-23", type: "investigation" },
      { title: "8 emails in 7 days, but valid Goa voters still left out: EC's flawed system", url: "https://indianexpress.com/article/express-exclusive/election-commission-goa-sir-voter-deletion-ecinet-10891422/", outlet: "The Indian Express", date: "2026-09-24", type: "investigation" },
      { title: "ECI refutes report, calls ECINet secure & decentralised platform", url: "https://newsable.asianetnews.com/india/eci-refutes-report-calls-ecinet-secure-decentralised-platform-articleshow-7v10kbb", outlet: "Asianet Newsable (ANI)", date: "2026-09-24", type: "official" },
      { title: "Analysis and explainer on the software of the SIR that runs without transparency", url: "https://internetfreedom.in/analysis-and-explainer-on-the-software-of-the-sir-that-runs-without-transparency/", outlet: "Internet Freedom Foundation", date: "2026-09-25", type: "explainer" },
      { title: "Software of the SIR that runs without transparency explained", url: "https://thewire.in/tech/software-of-the-sir-that-runs-without-transparency-explained", outlet: "The Wire", date: "2026-09-28", type: "explainer" },
      { title: "Maharashtra poll chief seeks ECINet changes to give EROs more discretion", url: "https://madhyamamonline.com/india/maharashtra-poll-chief-seeks-ecinet-changes-to-give-eros-more-discretion-1558941", outlet: "Madhyamam", date: "2026-09-29", type: "official" },
      { title: "Modi was aware of ECI restricting EROs' access to ECINet: Congress", url: "https://www.nationalheraldindia.com/politics/gyanesh-kumar-pm-modi-ecinet-election-commission-it-division", outlet: "National Herald", date: "2026-10-03", type: "allegation" },
      { title: "On ECINet platform, access for States can be switched off and on centrally: report", url: "https://www.thehindu.com/news/national/on-ecinet-platform-access-for-states-can-be-switched-off-and-on-centrally-report/article71605004.ece", outlet: "The Hindu", date: "2026-10-21", type: "investigation" },
      { title: "ECINET audit finds state-level access could be restricted by Election Commission, VIP tags for voters", url: "https://m.thewire.in/article/rights/ecinet-audit-finds-state-level-access-could-be-restricted-by-election-commission-vip-tags-for-voters", outlet: "The Wire", date: "2026-10-21", type: "investigation" }
    ]
  },
  {
    id: "data",
    place: "Data held back, checks switched off",
    election: "2025",
    summary: "The Karnataka police probe into forged deletion requests in Aland stalled because the ECI did not share the data investigators asked for. In a November 2025 affidavit, the ECI told the Supreme Court its duplicate-detection software was unreliable and had not been used since 2023. The Reporters' Collective notes that the ECI's own 2023 manual had endorsed the software.",
    links: [
      { title: "Probe into forged voter deletion applications in K'taka stalls as EC does not share data: Report", url: "https://thewire.in/government/aland-karnataka-form-7-probe-stalls-no-ec-data-report", outlet: "The Wire", date: "2025-09-07", type: "investigation" },
      { title: "ECI skipped its fraud-busting software, flooding Bihar voter roll with lakhs of suspect duplicates", url: "https://www.reporters-collective.in/trc/eci-skipped-its-fraud-busting-software-lakhs-of-duplicates", outlet: "The Reporters' Collective", date: "2025-10-12", type: "investigation" },
      { title: "ECI to Supreme Court: Deduplication software was ineffective, we scrapped it", url: "https://www.reporters-collective.in/trc/eci-to-sc-deduplication-software-ineffective-scraped-it", outlet: "The Reporters' Collective", date: "2025-12-08", type: "court" }
    ]
  },
  {
    id: "appointments",
    place: "Who picks the commissioners",
    election: "The 2023 appointment law",
    summary: "In 2023 the Supreme Court said a panel including the Chief Justice should pick the commissioners. The 2023 Act instead gave the job to a panel of the Prime Minister, a Union minister and the Leader of the Opposition, so the government holds a two-to-one majority. The Act also gave commissioners immunity from legal proceedings for official acts. In September 2026 two Supreme Court judges split on sending the challenge to a Constitution Bench, and the question went to the Chief Justice.",
    links: [
      { title: "Appointing Election Commissioners: The government must not control the watchdog", url: "https://indianexpress.com/article/opinion/columns/appointing-election-commissioners-the-government-must-not-control-the-watchdog-8917864/", outlet: "The Indian Express", date: "2023-08-31", type: "opinion" },
      { title: "Bill downgrades Election Commissioner to status of Cabinet Secy from that of SC Judge", url: "https://indianexpress.com/article/india/bill-downgrades-election-commission-to-status-of-cabinet-secy-from-that-of-sc-judge-8940629/", outlet: "The Indian Express", date: "2023-09", type: "investigation" },
      { title: "'Gave dissent notes on EC appointments… govt in majority in panel': Adhir Ranjan Chowdhury", url: "https://indianexpress.com/article/india/adhir-ranjan-chowdhury-ec-appointments-modi-panel-9213815/", outlet: "The Indian Express", date: "2024-03-14", type: "allegation" },
      { title: "Supreme Court agrees to hear plea against law dropping CJI from committee to select CEC, ECs", url: "https://indianexpress.com/article/cities/delhi/supreme-court-agrees-to-hear-plea-against-law-dropping-cji-from-committee-to-select-cec-ecs-9213094/", outlet: "The Indian Express", date: "2024-03-14", type: "court" },
      { title: "SC issues notice on plea against law to provide immunity to CEC, ECs", url: "https://indianexpress.com/article/legal-news/sc-notice-plea-law-provide-immunity-cec-ecs-10469521/", outlet: "The Indian Express", date: "2026-01-12", type: "court" },
      { title: "Supreme Court split over referring Chief Election Commissioner appointment law challenge to Constitution Bench", url: "https://swarajyamag.com/news-brief/supreme-court-split-over-referring-chief-election-commissioner-appointment-law-challenge-to-constitution-bench", outlet: "Swarajya", date: "2026-09-23", type: "court" },
      { title: "Why is the 2023 Election Commissioner appointment law controversial, and why did SC refer it to CJI?", url: "https://indianexpress.com/article/explained/explained-law/cec-appointment-law-supreme-court-constitution-bench-explained-10891151/", outlet: "The Indian Express", date: "2026-09-24", type: "explainer" }
    ]
  },
  {
    id: "records",
    place: "Election records taken out of public view",
    election: "Rule 93 amendment and footage retention, 2024–2025",
    summary: "In December 2024, on the ECI's recommendation, the Law Ministry amended Rule 93 of the Conduct of Election Rules. Only papers named in the rules stay open to inspection, so CCTV footage, webcasting recordings and candidate videos are no longer included. The ministry said the change followed a court case, and the ECI cited voter secrecy. Petitions against it are in the Supreme Court. In May 2025 the ECI also told states they could destroy polling footage after 45 days if no election petition was filed.",
    links: [
      { title: "Election rule tweaked to restrict public inspection of electronic records; Congress cries foul", url: "https://www.tribuneindia.com/news/india/election-rules-tweaked-to-restrict-public-inspection-of-electronic-records", outlet: "The Tribune", date: "2024-12-21", type: "official" },
      { title: "Congress files plea in Supreme Court against amendments to election rules", url: "https://www.tribuneindia.com/news/india/congress-files-plea-in-supreme-court-against-amendments-to-election-rules", outlet: "The Tribune", date: "2024-12", type: "court" },
      { title: "SC issues notice to Union govt, ECI over plea against change in polling rules", url: "https://m.thewire.in/article/law/sc-issues-notice-to-union-govt-eci-over-plea-against-change-in-polling-rules", outlet: "The Wire", date: "2025-02-03", type: "court" },
      { title: "Citing 'misuse', EC cuts storage time of polling videos, photos to 45 days", url: "https://scroll.in/latest/1083683/citing-misuse-ec-cuts-storage-time-of-polling-videos-photos-to-45-days", outlet: "Scroll", date: "2025-06-20", type: "official" },
      { title: "Rahul Gandhi accuses EC of 'destroying evidence' as storage time of polling videos, photos reduced", url: "https://scroll.in/latest/1083727/rahul-gandhi-alleges-ec-is-destroying-evidence-as-storage-time-of-polling-videos-photos-reduced", outlet: "Scroll", date: "2025-06", type: "allegation" }
    ]
  }
];

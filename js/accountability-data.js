/*
  Accountability page — content file
  ------------------------------------------------------------
  Reports on the Election Commission not answering investigators, parties,
  journalists and voters, and on the limits of holding it to account.
  Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  investigation: "Investigation",
  ground:        "Ground report",
  allegation:    "Allegation",
  official:      "Official response",
  court:         "Court",
  parliament:    "Parliament"
};

window.CASES = [
  {
    id: "investigators",
    place: "Investigators left waiting",
    election: "Aland, Tuljapur, Haridwar",
    summary: "Karnataka's CID wrote to the Election Commission 18 times for the IP addresses and OTP trails behind the forged Aland deletion requests, according to Congress. The state's chief electoral officer said data had been shared in 2023, which Congress called a half-truth. In Maharashtra, police asked in November 2025 for IP data on fake applications filed through the EC's own app. Their request was passed to the ECI with no clear reply, and no chargesheet followed. In Haridwar, a registration officer told voters whose names were misused that the Commission would not order an investigation.",
    links: [
      { title: "Probe into forged voter deletion applications in K'taka stalls as EC does not share data: Report", url: "https://thewire.in/government/aland-karnataka-form-7-probe-stalls-no-ec-data-report", outlet: "The Wire", date: "2025-09-07", type: "investigation" },
      { title: "Stop giving excuses, release evidence to Karnataka CID: Rahul to CEC Gyanesh Kumar", url: "https://www.theweek.in/wire-updates/national/2025/09/18/del79-cong-ld-ec.html", outlet: "The Week (PTI)", date: "2025-09-18", type: "allegation" },
      { title: "'Half-truth': Congress on Karnataka CEO's claim of giving voter deletion data to CID in 2023", url: "https://thesouthfirst.com/karnataka/half-truth-congress-on-karnataka-ceos-claim-of-giving-voter-deletion-data-to-cid-in-2023", outlet: "South First", date: "2025-09-19", type: "official" },
      { title: "EC's app was used to file fake voter forms before 2024 Maharashtra polls. The probe hasn't moved", url: "https://www.newslaundry.com/2026/03/10/ecs-app-was-used-to-file-fake-voter-forms-before-2024-maharashtra-polls-the-probe-hasnt-moved", outlet: "Newslaundry", date: "2026-03-10", type: "investigation" },
      { title: "Uttarakhand SIR: The unsolved mystery of BJP agents' 'forged' objections against Muslim voters", url: "https://www.newslaundry.com/2026/08/28/exclusive-bjp-agents-identities-misused-to-file-mass-objections-against-haridwars-muslim-voters", outlet: "Newslaundry", date: "2026-08-28", type: "investigation" }
    ]
  },
  {
    id: "questions",
    place: "Questions from parties and the press",
    election: "2024–2026",
    summary: "In January 2024 the Commission declined an INDIA bloc request to meet about EVMs and VVPATs. It said it had full faith in the machines and that its FAQs answered the concerns. In October 2025 the CEC repeatedly declined to say how many 'infiltrators' the Bihar revision had found. In October 2026 opposition MPs were detained while protesting outside the Commission, which said no party had asked for a meeting. By 11 October 2026, the CEC had not been seen in public for about 20 days.",
    links: [
      { title: "EC's refusal to meet Oppn parties about EVM, VVPAT is 'matter of grave concern': Jairam Ramesh", url: "https://www.deccanherald.com/amp/story/elections%2Findia%2Fecs-refusal-to-meet-oppn-parties-about-evm-vvpat-is-matter-of-grave-concern-jairam-ramesh-2839630", outlet: "Deccan Herald", date: "2024-01-08", type: "allegation" },
      { title: "Bihar Assembly Elections 2025 | CEC Gyanesh Kumar dodges question on claims of 'infiltrators' in voter list", url: "https://www.deccanherald.com/amp/story/elections%2Fbihar%2Fbihar-assembly-elections-2025-cec-gyanesh-kumar-dodges-question-on-claims-of-infiltrators-in-voter-list-3754094", outlet: "Deccan Herald", date: "2025-10-06", type: "official" },
      { title: "INDIA bloc MPs detained amid SIR protest; EC says it received no meeting request", url: "https://www.freepressjournal.in/india/india-bloc-mps-detained-amid-sir-protest-ec-says-it-received-no-meeting-request", outlet: "Free Press Journal", date: "2026-10-06", type: "official" },
      { title: "But where is Chief Election Commissioner Gyanesh Kumar?", url: "https://thewire.in/politics/but-where-is-chief-election-commissioner-gyanesh-kumar", outlet: "The Wire", date: "2026-10-11", type: "investigation" }
    ]
  },
  {
    id: "voters",
    place: "Voters waiting for a remedy",
    election: "Special Intensive Revision, 2026",
    summary: "In Goa, eligible voters stayed off the roll even after eight emails in seven days, because the ECINet software would not let officials reverse decisions. In West Bengal, by 7 August 2026 tribunals had decided only about 2% of the 38 lakh appeals by people dropped from the roll. Of the appeals decided, about 91% of the names were restored. The Supreme Court had earlier said people whose appeals were still pending could not vote in the 2026 election.",
    links: [
      { title: "West Bengal SIR | Can't allow deleted persons to vote in 2026 elections when their appeals are pending: Supreme Court", url: "https://www.livelaw.in/amp/top-stories/west-bengal-sir-cant-allow-deleted-persons-to-vote-in-2026-elections-when-their-appeals-are-pending-supreme-court-530126", outlet: "LiveLaw", date: "2026-04", type: "court" },
      { title: "West Bengal SIR: Only 2% of 38 lakh appeals against exclusion decided so far; 91% of those names restored to voter rolls", url: "https://www.barandbench.com/news/litigation/west-bengal-sir-only-2-of-38-lakh-appeals-against-exclusion-decided-so-far-91-of-those-names-restored-to-voter-rolls", outlet: "Bar & Bench", date: "2026-08-27", type: "court" },
      { title: "8 emails in 7 days, but valid Goa voters still left out: EC's flawed system", url: "https://indianexpress.com/article/express-exclusive/election-commission-goa-sir-voter-deletion-ecinet-10891422/", outlet: "The Indian Express", date: "2026-09-24", type: "investigation" }
    ]
  },
  {
    id: "blos",
    place: "Booth officers under pressure",
    election: "Special Intensive Revision, 2025",
    summary: "During the second phase of the revision, families and colleagues linked the deaths of several booth-level officers to the workload. In West Bengal alone, four deaths had been reported by late November 2025. Poll officials denied any link with the revision. The Commission issued no statement on the suicides and said next steps would depend on reports.",
    links: [
      { title: "BLO dies by suicide in Kerala; family blames election duty stress", url: "https://www.etvbharat.com/en/state/blo-dies-by-suicide-in-kerala-family-blames-election-duty-stress-enn25111602584", outlet: "ETV Bharat", date: "2025-11-16", type: "ground" },
      { title: "'Inhuman work pressure': Inside the SIR crisis pushing poll workers to the edge", url: "https://www.newslaundry.com/2025/11/24/inhuman-work-pressure-inside-the-sir-crisis-pushing-poll-workers-to-the-edge", outlet: "Newslaundry", date: "2025-11-24", type: "ground" },
      { title: "Another BLO dies, marking fourth fatality in West Bengal; kin allege intense SIR workload", url: "https://www.etvbharat.com/en/state/another-blo-dies-in-west-bengal-sir-workload-alleged-enn25112801461", outlet: "ETV Bharat", date: "2025-11-28", type: "ground" }
    ]
  },
  {
    id: "oversight",
    place: "Who can hold the CEC to account",
    election: "2023–2026",
    summary: "The 2023 Act protects the commissioners from court cases over official acts. The Supreme Court is hearing a challenge to that protection. In 2026 opposition MPs gave notice of a motion to remove CEC Gyanesh Kumar. The Lok Sabha Speaker and Rajya Sabha Chairman rejected it on 6 April without giving reasons, and 73 MPs then filed a fresh notice. In October the Supreme Court refused to suspend the CEC, but asked him to answer the allegations.",
    links: [
      { title: "SC issues notice on plea against law to provide immunity to CEC, ECs", url: "https://indianexpress.com/article/legal-news/sc-notice-plea-law-provide-immunity-cec-ecs-10469521/", outlet: "The Indian Express", date: "2026-01-12", type: "court" },
      { title: "Opposition submits notice seeking impeachment motion against CEC Gyanesh Kumar", url: "https://thewire.in/government/opposition-submits-notice-seeking-impeachment-motion-against-cec-gyanesh-kumar", outlet: "The Wire", date: "2026-03-13", type: "parliament" },
      { title: "Removal notice against CEC Gyanesh Kumar: Opposition says rejecting motion at this stage undermined Constitutional process", url: "https://www.deccanherald.com/amp/story/india/delhi/removal-notice-against-cec-gyanesh-kumar-opposition-says-rejecting-motion-at-this-stage-undermined-constitutional-process-3960917", outlet: "Deccan Herald", date: "2026-04-08", type: "parliament" },
      { title: "Opposition submits fresh notice in Rajya Sabha to impeach chief election commissioner", url: "https://scroll.in/latest/1092361/opposition-submits-fresh-notice-in-rajya-sabha-to-impeach-chief-election-commissioner", outlet: "Scroll", date: "2026-04-24", type: "parliament" },
      { title: "SC refuses to suspend CEC Gyanesh Kumar, seeks response on 'unilateral' decisions", url: "https://www.thenewsminute.com/news/sc-refuses-to-suspend-cec-gyanesh-kumar-seeks-response-on-unilateral-decisions", outlet: "The News Minute", date: "2026-10-05", type: "court" }
    ]
  }
];

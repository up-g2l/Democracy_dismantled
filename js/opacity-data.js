/*
  Opacity page — content file
  ------------------------------------------------------------
  Reports on the Election Commission withholding data, records and reasons.
  Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  investigation: "Investigation",
  allegation:    "Allegation",
  official:      "Official response",
  court:         "Court",
  explainer:     "Explainer",
  rti:           "RTI"
};

window.CASES = [
  {
    id: "turnout",
    place: "Turnout figures and Form 17C",
    election: "Lok Sabha election, 2024",
    summary: "Form 17C records how many votes were cast at each polling booth. In 2024, final turnout for the first phase came out 11 days after polling, and the Opposition questioned the delay. The ECI told the Supreme Court that putting Form 17C online would lead to 'mischief, discomfort and mistrust'. The Court declined to order publication in the middle of the election. In March 2025 the ECI told the Court that its new chief was willing to hear concerns about booth-wise data.",
    links: [
      { title: "Lok Sabha Elections 2024: EC releases voter turnout data; 66.14% in Phase 1, 66.71% in Phase 2", url: "https://www.deccanherald.com/amp/story/elections%2Findia%2Flok-sabha-elections-2024-ec-releases-final-voter-turnout-data-6614-in-phase-1-6671-in-phase-2-3002026", outlet: "Deccan Herald", date: "2024-04-30", type: "official" },
      { title: "Uploading of Form 17C on website to lead to mischief, discomfort and mistrust, EC tells SC", url: "https://www.deccanherald.com/elections/uploading-of-form-17c-on-website-to-lead-to-mischief-discomfort-and-mistrust-ec-tells-sc-3034551", outlet: "Deccan Herald", date: "2024-05-22", type: "court" },
      { title: "Lok Sabha Elections 2024: Supreme Court declines to consider plea for uploading voters turnout data", url: "https://www.deccanherald.com/amp/story/elections%2Findia%2Fsc-declines-interim-relief-on-plea-seeking-uploading-of-booth-wise-voter-turnout-data-on-ec-website-3036925", outlet: "Deccan Herald", date: "2024-05-24", type: "court" },
      { title: "Lok Sabha Elections 2024 | Seat-wise voter turnout released, Assam's Dhubri sees maximum votes cast", url: "https://www.deccanherald.com/elections/india/lok-sabha-elections-2024-seat-wise-voter-turnout-released-finally-assams-dhubri-sees-maximum-votes-cast-3038770", outlet: "Deccan Herald", date: "2024-05-25", type: "official" },
      { title: "New CEC willing to address concerns over booth-wise voter turnout data: EC tells SC", url: "https://www.tribuneindia.com/news/delhi/new-cec-willing-to-address-concerns-over-booth-wise-voter-turnout-data-ec-tells-sc", outlet: "The Tribune", date: "2025-03-18", type: "court" }
    ]
  },
  {
    id: "rolls",
    place: "Voter rolls that can't be searched",
    election: "2025",
    summary: "The Opposition asked for voter rolls in a digital, machine-readable form so that duplicates and fake entries could be found. On 9 August 2025 the ECI replaced Bihar's digital draft rolls on its websites with low-resolution scanned images, which are much harder to check. CEC Gyanesh Kumar said a 2019 Supreme Court ruling bars sharing machine-readable rolls because they could be edited and misused. The ECI called reports that rolls had been taken down 'fake news'.",
    links: [
      { title: "Rahul Gandhi alleges 'vote theft' in Maharashtra polls, demands machine-readable digital voter rolls amid EC reply", url: "https://www.deccanherald.com/amp/story/india%2Frahul-gandhi-alleges-vote-theft-in-maharashtra-polls-demands-machine-readable-digital-voter-rolls-amid-ec-reply-3600271", outlet: "Deccan Herald", date: "2025-06-24", type: "allegation" },
      { title: "Election Commission dismisses fake news on removal of e-voter rolls", url: "https://www.newsonair.gov.in/election-commission-dismisses-fake-news-on-removal-of-e-voter-rolls", outlet: "All India Radio", date: "2025-08-08", type: "official" },
      { title: "EC replaces digital draft voter lists in Bihar with scanned images that make finding errors harder", url: "https://scroll.in/latest/1085399/scroll_in", outlet: "Scroll", date: "2025-08-09", type: "investigation" },
      { title: "Voter list in machine-readable form can't be shared: CEC cites SC order", url: "https://www.business-standard.com/india-news/voter-list-in-machine-readable-form-can-t-be-shared-cec-cites-sc-order-125081700647_1.html", outlet: "Business Standard", date: "2025-08-17", type: "official" }
    ]
  },
  {
    id: "lists",
    place: "Deleted and flagged voters, named only on court orders",
    election: "Special Intensive Revision, 2025–2026",
    summary: "The names of about 65 lakh voters dropped from Bihar's draft roll, and the reasons, were published only after the Supreme Court ordered it in August 2025. In January 2026 the Court ordered the ECI to put up the names of about 1.25 crore West Bengal voters flagged for 'logical discrepancies'. In Uttar Pradesh, the Reporters' Collective says details of 16.18 lakh additions were never published. The state's election chief says the law did not require it.",
    links: [
      { title: "SC directs ECI to publish deleted Bihar voters list before Aug 19", url: "https://www.business-standard.com/india-news/sc-directs-eci-to-publish-deleted-bihar-voters-list-before-aug-19-125081401837_1.html", outlet: "Business Standard", date: "2025-08-14", type: "court" },
      { title: "SC orders Election Commission to publish list of 65 lakh deleted Bihar voters with reasons by 19th August", url: "https://moneylife.in/article/sc-orders-election-commission-to-publish-list-of-65-lakh-deleted-bihar-voters-with-reasons-by-19th-august/77985.html", outlet: "Moneylife", date: "2025-08", type: "court" },
      { title: "SC directs ECI to display names of voters under logical discrepancies in West Bengal voter list", url: "https://www.newsonair.gov.in/sc-directs-eci-to-display-names-of-voters-under-logical-discrepancies-in-west-bengal-voter-list", outlet: "All India Radio", date: "2026-01-19", type: "court" },
      { title: "The mysterious 16.18 lakh voters added to Uttar Pradesh's roll", url: "https://www.reporters-collective.in/trc/16-18-lakh-voters-added-to-up-roll", outlet: "The Reporters' Collective", date: "2026-10-06", type: "investigation" },
      { title: "'Misconception being spread on social media': UP CEO rejects report of 16.18 lakh 'mysterious' additions to voter lists", url: "https://www.devdiscourse.com/article/headlines/3989306-misconception-being-spread-on-social-media-up-ceo-rejects-report-of-1618-lakh-mysterious-additions-to-voter-lists", outlet: "Devdiscourse (ANI)", date: "2026-10-08", type: "official" }
    ]
  },
  {
    id: "rti",
    place: "RTI refusals and undisclosed workings",
    election: "2025–2026",
    summary: "The ECI cited the 2003 revision to justify the Bihar SIR, but declined to release the 2003 order under RTI. In a later RTI reply it said it had no information on the 2003 exercise and had not taken a decision on the 2025 SIR, which its own June circular contradicts. The Aland police probe stalled because the ECI did not share its data. The software that flags voters during the SIR, and its rules, have not been made public.",
    links: [
      { title: "Election Commission refuses to provide 2003 Bihar SIR order in RTI query", url: "https://thewire.in/rights/election-commission-refuses-to-provide-2003-bihar-sir-order-in-rti-query", outlet: "The Wire", date: "2025-08-27", type: "rti" },
      { title: "Probe into forged voter deletion applications in K'taka stalls as EC does not share data: Report", url: "https://thewire.in/government/aland-karnataka-form-7-probe-stalls-no-ec-data-report", outlet: "The Wire", date: "2025-09-07", type: "investigation" },
      { title: "'EC has not taken a decision on the 2025 SIR, no info available on 2003 exercise': EC's confounding RTI response", url: "https://thewire.in/government/ec-has-not-taken-a-decision-on-the-2025-sir-no-info-available-on-2003-exercise-ecs-confounding-rti-response", outlet: "The Wire", date: "2025-11-14", type: "rti" },
      { title: "Analysis and explainer on the software of the SIR that runs without transparency", url: "https://internetfreedom.in/analysis-and-explainer-on-the-software-of-the-sir-that-runs-without-transparency/", outlet: "Internet Freedom Foundation", date: "2026-09-25", type: "explainer" },
      { title: "IFF filed RTI applications seeking what the Election Commission has not disclosed about the SIR", url: "https://internetfreedom.in/iff-filed-rti-applications-seeking-what-the-election-commission-has-not-disclosed-about-the-sir/", outlet: "Internet Freedom Foundation", date: "2026-10-06", type: "rti" }
    ]
  },
  {
    id: "footage",
    place: "Polling footage and records",
    election: "2024–2025",
    summary: "In December 2024 the rules were changed on the ECI's advice so that CCTV footage, webcasting recordings and candidate videos are no longer open to public inspection. The ECI cited voter secrecy. In May 2025 it told states that polling footage could be destroyed after 45 days if no election petition was filed. Petitions against the rule change are pending in the Supreme Court.",
    links: [
      { title: "Election rule tweaked to restrict public inspection of electronic records; Congress cries foul", url: "https://www.tribuneindia.com/news/india/election-rules-tweaked-to-restrict-public-inspection-of-electronic-records", outlet: "The Tribune", date: "2024-12-21", type: "official" },
      { title: "SC issues notice to Union govt, ECI over plea against change in polling rules", url: "https://m.thewire.in/article/law/sc-issues-notice-to-union-govt-eci-over-plea-against-change-in-polling-rules", outlet: "The Wire", date: "2025-02-03", type: "court" },
      { title: "Citing 'misuse', EC cuts storage time of polling videos, photos to 45 days", url: "https://scroll.in/latest/1083683/citing-misuse-ec-cuts-storage-time-of-polling-videos-photos-to-45-days", outlet: "Scroll", date: "2025-06-20", type: "official" }
    ]
  },
  {
    id: "dissent",
    place: "Dissent kept off the record",
    election: "2019 and 2026",
    summary: "In 2019 Election Commissioner Ashok Lavasa asked for his minority views to be recorded in the orders on code-violation complaints against Narendra Modi and Amit Shah. The Commission refused, and the CEC urged that differences not be made public. In 2026, 14 written objections by two sitting commissioners came to light only through an Indian Express investigation.",
    links: [
      { title: "Don't go public, tells CEC after colleague protests", url: "https://www.deccanherald.com/amp/story/elections%2Fdont-go-public-tells-cec-after-colleague-protests-734512.html", outlet: "Deccan Herald", date: "2019-05-18", type: "official" },
      { title: "Lavasa's demand for recording dissenting views rejected", url: "https://www.deccanherald.com/lok-sabha-election-2019/model-code-violation-cases-would-not-be-made-public-ec-735096.html", outlet: "Deccan Herald", date: "2019-05-21", type: "official" },
      { title: "14 times in 10 months, two Election Commissioners objected on record to poll panel steps", url: "https://indianexpress.com/article/express-exclusive/election-commission-sir-14-objections-gyanesh-kumar-sukhbir-singh-sandhu-vivek-joshi-10889737/", outlet: "The Indian Express", date: "2026-09-23", type: "investigation" }
    ]
  }
];

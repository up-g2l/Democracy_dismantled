/*
  Form 7 misuse page — content file
  ------------------------------------------------------------
  Form 7 is the application to object to a name on the electoral roll,
  or to have a name deleted. Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  allegation:    "Allegation",
  investigation: "Investigation",
  ground:        "Ground report",
  police:        "Police probe",
  official:      "Official response",
  court:         "Court",
  explainer:     "Explainer"
};

window.CASES = [
  {
    id: "aland",
    place: "Aland, Karnataka",
    election: "Assembly election, 2023",
    summary: "About 6,000 Form 7 applications were filed online before the 2023 poll to delete Aland voters, by impersonating other voters. A police SIT says they were filed through login IDs made with bought mobile numbers and OTPs, at about Rs 80 per application. In December 2025 its chargesheet named former BJP MLA Subhash Guttedar and his son as the main accused; they deny it. The Election Commission called Rahul Gandhi's charges 'incorrect and baseless'. It said the deletion attempts had failed, that it had itself filed an FIR, and that no member of the public can delete a vote online.",
    links: [
      { title: "Probe into forged voter deletion applications in K'taka stalls as EC does not share data: Report", url: "https://thewire.in/government/aland-karnataka-form-7-probe-stalls-no-ec-data-report", outlet: "The Wire", date: "2025-09-07", type: "investigation" },
      { title: "Centralised software used to delete voters in Karnataka, CEC protecting those involved: Rahul Gandhi", url: "https://scroll.in/latest/1086708/software-used-to-delete-voters-in-karnatakas-aland-cec-protecting-those-involved-rahul-gandhi", outlet: "Scroll", date: "2025-09-18", type: "allegation" },
      { title: "Election Commission rejects Rahul Gandhi's allegations on vote deletion as baseless", url: "https://www.newsonair.gov.in/election-commission-rejects-rahul-gandhis-allegations-on-vote-deletion-as-baseless", outlet: "All India Radio", date: "2025-09-18", type: "official" },
      { title: "Karnataka Govt forms SIT to probe 'vote deletion' allegations in Aland Assembly constituency", url: "https://www.tribuneindia.com/news/india/karnataka-govt-forms-sit-to-probe-vote-deletion-allegations-in-aland-assembly-constituency", outlet: "The Tribune", date: "2025-09-20", type: "police" },
      { title: "SIT finds 'attempts' made to delete votes during Karnataka assembly polls", url: "https://www.onmanorama.com/news/india/2025/10/23/karnataka-vote-theft-investigation.html", outlet: "Onmanorama", date: "2025-10-23", type: "police" },
      { title: "Aland case: EC in a test of trust", url: "https://www.deccanherald.com/opinion/editorial/aland-case-ec-in-a-test-of-trust-3774396", outlet: "Deccan Herald", date: "2025-10-24", type: "explainer" },
      { title: "Aland 'Vote Chori': SIT cites CCTV footage, says associates of ex-BJP MLA tried to destroy voter lists", url: "https://m.thewire.in/article/government/aland-vote-chori-sit-cites-cctv-footage-says-associates-of-ex-bjp-mla-tried-to-destroy-voter-lists", outlet: "The Wire", date: "2025-10-31", type: "court" },
      { title: "Karnataka SIT arrests West Bengal man in Aland voter deletion case", url: "https://www.thenewsminute.com/karnataka/karnataka-sit-arrests-west-bengal-man-in-aland-voter-deletion-case", outlet: "The News Minute", date: "2025-11-15", type: "police" },
      { title: "Aland vote fraud: Ex BJP MLA and son prime accused in chargesheet", url: "https://www.thenewsminute.com/karnataka/aland-vote-fraud-ex-bjp-mla-and-son-prime-accused-in-chargesheet", outlet: "The News Minute", date: "2025-12-13", type: "police" }
    ]
  },
  {
    id: "assam",
    place: "Assam",
    election: "Special Revision, January 2026",
    summary: "BJP workers and booth agents told Scroll that their names, phone numbers and voter ID details were used without their knowledge. They said these were used to file bulk objections against hundreds of voters, mostly Muslims. Police complaints were filed and some hearings in Nagaon were suspended. The state election department says a Form 7 does not delete a name by itself. Chief Minister Himanta Biswa Sarma dismissed the Opposition's concerns.",
    links: [
      { title: "BJP workers in Assam say their names used to seek mass voter deletion – without their knowledge", url: "https://scroll.in/article/1090212/bjp-workers-in-assam-say-their-names-used-to-seek-mass-voter-deletion-without-their-knowledge", outlet: "Scroll", date: "2026-01-24", type: "ground" },
      { title: "Genuine citizens being harassed in Assam Special Revision through Form-7, alleges Opposition: Report", url: "https://m.thewire.in/article/communalism/genuine-citizens-being-harassed-in-assam-special-revision-through-form-7-alleges-opposition-report", outlet: "The Wire", date: "2026-01-25", type: "allegation" },
      { title: "Special revision in Assam leaves citizens fighting for identity", url: "https://www.etvbharat.com/en/state/special-revision-in-assam-leaves-citizens-fighting-for-identity-enn26012902557", outlet: "ETV Bharat", date: "2026-01-29", type: "ground" }
    ]
  },
  {
    id: "indore",
    place: "Indore, Madhya Pradesh",
    election: "Special Intensive Revision, 2026",
    summary: "Bulk Form 7 objections were filed in Indore, mostly against Muslim voters and often by BJP workers. They claimed the voters had moved away or were not citizens. A booth-level officer said all 53 voters challenged in Bijalpur were verified as citizens. The BJP denied the allegations, and police had not registered an FIR.",
    links: [
      { title: "Anger and disbelief in Indore over attempt to delete thousands of Muslim voters", url: "https://scroll.in/article/1090858/anger-and-disbelief-in-indore-over-attempt-to-delete-thousands-of-muslim-voters", outlet: "Scroll", date: "2026-02-20", type: "ground" }
    ]
  },
  {
    id: "gujarat",
    place: "Gujarat",
    election: "Special Intensive Revision, 2026",
    summary: "Petitions in the Gujarat High Court say thousands of Form 7 objections filed during the revision were fake, and seek an SIT probe into the deletions that followed. The court issued notice in May 2026.",
    links: [
      { title: "Petitions seek investigation into thousands of 'fake' objection pleas during SIR, Gujarat High Court issues notice", url: "https://www.deccanherald.com/india/gujarat/petitions-seek-investigation-into-thousands-of-fake-objection-pleas-during-sir-gujarat-high-court-issues-notice-3996966", outlet: "Deccan Herald", date: "2026-05-09", type: "court" }
    ]
  },
  {
    id: "haridwar",
    place: "Haridwar, Uttarakhand",
    election: "Special Intensive Revision, 2026",
    summary: "In Jhabrera, 35 people, 31 of them BJP booth-level agents, say they never filed the 1,657 objections in their names, most of them against Muslim voters. The local registration officer said the objections were cancelled and no names would be deleted. He also said the Election Commission would not order an investigation. Former Election Commissioner Ashok Lavasa said the authorities should run their own inquiry.",
    links: [
      { title: "Uttarakhand SIR: The unsolved mystery of BJP agents' 'forged' objections against Muslim voters", url: "https://www.newslaundry.com/2026/08/28/exclusive-bjp-agents-identities-misused-to-file-mass-objections-against-haridwars-muslim-voters", outlet: "Newslaundry", date: "2026-08-28", type: "investigation" }
    ]
  },
  {
    id: "telangana",
    place: "Telangana",
    election: "Special Intensive Revision, 2026",
    summary: "Congress complained that a BJP booth-level agent in Musheerabad filed Form 7 applications against 30 voters, which were found to be false on checking. The state's Chief Electoral Officer ordered action against anyone knowingly filing false statements in Forms 6, 7 or 8. The BJP denied its agents filed such forms.",
    links: [
      { title: "T'gana CEO orders action against false voter enrolment", url: "https://theprint.in/india/tgana-ceo-orders-action-against-false-voter-enrolment/3062520/", outlet: "ThePrint (PTI)", date: "2026-10-05", type: "official" }
    ]
  },
  {
    id: "new-delhi",
    place: "New Delhi constituency",
    election: "Delhi Assembly election, February 2025",
    summary: "AAP said 6,167 deletion requests were filed in Arvind Kejriwal's seat between 15 December 2024 and 2 January 2025, with 4,283 of them filed by just 84 people, and that most were fraudulent. The district election officer accused AAP of putting pressure on officials.",
    links: [
      { title: "BJP tampering voter list in New Delhi constituency: AAP", url: "https://www.tribuneindia.com/news/delhi/bjp-tampering-voter-list-in-new-delhi-constituency-aap", outlet: "The Tribune", date: "2025-01-06", type: "allegation" },
      { title: "CM Atishi alleges 'voter scam' in New Delhi constituency ahead of assembly polls", url: "https://www.theweek.in/wire-updates/national/2025/01/06/des16-dl-atishi-electoral-roll.html", outlet: "The Week (PTI)", date: "2025-01-06", type: "allegation" },
      { title: "Delhi polls: AAP exerting pressure, claims district election officer", url: "https://scroll.in/latest/1077644/scroll_in", outlet: "Scroll", date: "2025-01", type: "official" }
    ]
  },
  {
    id: "auto-generated",
    place: "Form 7s filed by the software itself",
    election: "Special Intensive Revision, 2025–2026",
    summary: "During the revision, when an officer did not approve a voter at a hearing, the ECI's ERONET software generated a Form 7 objection in that officer's name, so the same officer raised the objection and decided it, with no reason recorded. Form 7 is meant to be filed by an elector, on one of six grounds. In Uttar Pradesh, 85,854 such forms were found; the state's election office called the report misleading and said notices and hearings came first. In West Bengal, 5.38 lakh voters were removed this way, against about 7,700 deletions through Form 7s filed by people. The Hindu found the same practice in Delhi and Uttarakhand, with no written ECI order behind it.",
    links: [
      { title: "In UP SIR, ECI software auto-generated 85,854 forms to delete voters without a reason", url: "https://www.reporters-collective.in/trc/eci-software-auto-generated-forms-to-delete-without-reason", outlet: "The Reporters' Collective", date: "2026-10-09", type: "investigation" },
      { title: "'Misleading': UP CEO rejects report of 85,854 voters being deleted using Form-7", url: "https://www.socialnews.xyz/2026/10/13/misleading-up-ceo-rejects-report-of-85854-voters-being-deleted-using-form-7/", outlet: "Social News XYZ (IANS)", date: "2026-10-13", type: "official" },
      { title: "Despite no order or SOP issued by ECI, EROs using auto-generated Form 7s to delete voters: report", url: "https://m.thewire.in/article/government/despite-no-order-sop-issued-by-eci-eros-using-auto-generated-form-7s-to-delete-voters", outlet: "The Wire (citing The Hindu)", date: "2026-10-16", type: "investigation" },
      { title: "The ECI software deleted 5.38 lakh Bengal voters with auto-generated rejections without citing a reason", url: "https://m.thewire.in/article/rights/the-eci-software-deleted-5-38-lakh-bengal-voters-with-auto-generated-rejections-without-citing-a-reason", outlet: "The Wire", date: "2026-10-17", type: "investigation" }
    ]
  },
  {
    id: "across-states",
    place: "Across states",
    election: "Background",
    summary: "An October 2026 explainer sets out how bulk Form 7 filings became a flashpoint in several states during the revision. They were filed after the draft rolls came out, so many voters found out only when the final lists were published.",
    links: [
      { title: "Election Commission's Forms 6, 7, and 8: How voter list procedures are triggering controversy across India", url: "https://www.onmanorama.com/news/india/2026/10/10/voter-list-election-forms-6-7-8-controversy-explained.html", outlet: "Onmanorama", date: "2026-10-10", type: "explainer" }
    ]
  }
];

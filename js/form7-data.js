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
    id: "karnataka-2026",
    place: "Bengaluru and Karnataka",
    election: "Special Intensive Revision, October 2026",
    summary: "About 91,000 Form 7 applications reached Karnataka's election office between mid-June and early October. Chief Minister D.K. Shivakumar led a sit-in at the Chief Electoral Officer's office, alleging BJP and JD(S) workers filed pre-printed forms in bulk, including 3,244 in one day in Bhalki and about 13,000 against Muslim voters in Vijayapura. The CEO told all 224 registration officers to act against false filings and said not one voter had been deleted on a Form 7 objection. In Bengaluru, police registered an FIR over 5,698 Form 7s in Jayanagar naming BJP functionaries, and booked a booth agent over 136 forms with mismatched signatures in Malleshwaram. The BJP and JD(S) said filing objections is a lawful right and asked the Governor to stop the criminal cases.",
    links: [
      { title: "BJP asks EC to verify Form-7 applications, accuses K'taka CM of 'pressuring' poll panel", url: "https://theprint.in/india/bjp-asks-ec-to-verify-form-7-applications-accuses-ktaka-cm-of-pressuring-poll-panel/3059635/", outlet: "ThePrint (PTI)", date: "2026-10-01", type: "allegation" },
      { title: "Karnataka CEO orders action over false Form 7 filings after CM DK Shivakumar's protest", url: "https://www.thenewsminute.com/karnataka/karnataka-ceo-orders-action-over-false-form-7-filings-after-cm-dk-shivakumars-protest", outlet: "The News Minute", date: "2026-10-02", type: "official" },
      { title: "Not a single Karnataka voter deleted over objections filed via Form 7: Election Commissioner", url: "https://www.theweek.in/news/india/2026/10/05/karnataka-voter-deleted-over-objections-filed-via-form-7-election-commissioner.html", outlet: "The Week", date: "2026-10-05", type: "official" },
      { title: "Jayanagar Form-7 row: FIR over bid to delete 5,698 voter names", url: "https://www.siasat.com/jayanagar-form-7-row-fir-over-bid-to-delete-5698-voter-names-3553282/", outlet: "Siasat", date: "2026-10-06", type: "police" },
      { title: "Bengaluru: BLA booked over 136 'forged' Form-7 voter deletion applications", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-bla-booked-over-136-forged-form-7-voter-deletion-applications-4172138", outlet: "Deccan Herald", date: "2026-10-06", type: "police" },
      { title: "NDA delegation urges Karnataka Governor to act against alleged interference in SIR", url: "https://dailypioneer.com/news/nda-karnataka-governor-sir-form-7-objections", outlet: "The Pioneer", date: "2026-10-06", type: "allegation" }
    ]
  },
  {
    id: "jharkhand",
    place: "Godda, Jharkhand",
    election: "Special Intensive Revision, September 2026",
    summary: "The Indian Express reported that BJP booth agents in Jharkhand had filed Form 7 objections in bulk, mostly against Muslim voters, and that booth officers refused forms with no verifiable source. In Godda, police registered an FIR and arrested a BJP-affiliated booth agent accused of filing about 200 Form 7s, all against minority voters; he was released on bail. The district election officer ordered a probe, and the BJP filed a counter-complaint.",
    links: [
      { title: "From BJP office: BLOs refuse to accept bulk Form 7s in Jharkhand", url: "https://www.siasat.com/from-bjp-office-blos-refuse-to-accept-bulk-form-7s-in-jharkhand-3535358/", outlet: "Siasat (citing The Indian Express)", date: "2026-09-03", type: "investigation" },
      { title: "Bulk voter deletion forms in Jharkhand's Godda trigger probe: what we know", url: "https://www.outlookindia.com/national/jharkhand-sir-probe-ordered-into-bulk-voter-deletion-forms-in-godda", outlet: "Outlook", date: "2026-09-06", type: "official" },
      { title: "SIR: Jharkhand BLA arrested for allegedly hundreds of Form 7 targeting Muslims", url: "https://www.thequint.com/news/breaking-news/sir-jharkhand-bla-arrested-for-allegedly-hundreds-of-form-7-targeting-muslims", outlet: "The Quint", date: "2026-09-06", type: "police" }
    ]
  },
  {
    id: "rajasthan",
    place: "Rajasthan",
    election: "Special Intensive Revision, January 2026",
    summary: "Former Chief Minister Ashok Gehlot alleged that, on the last day for claims and objections, officials under pressure from the BJP government pushed booth-level officers to remove Congress-leaning voters and even handed them pre-filled Form 7s, threatening transfers to those who refused. The allegation has not been independently verified.",
    links: [
      { title: "BJP manipulating electoral rolls to remove Congress voters: Ex-Rajasthan CM Gehlot", url: "https://www.deccanherald.com/amp/story/india%2Frajasthan%2Fbjp-manipulating-electoral-rolls-to-remove-congress-voters-ex-rajasthan-cm-gehlot-3863647", outlet: "Deccan Herald", date: "2026-01-16", type: "allegation" }
    ]
  },
  {
    id: "assam",
    place: "Assam",
    election: "Special Revision, January 2026",
    summary: "BJP workers and booth agents told Scroll that their names, phone numbers and voter ID details were used without their knowledge. They said these were used to file bulk objections against hundreds of voters, mostly Muslims. Police complaints were filed and some hearings in Nagaon were suspended. The state election department says a Form 7 does not delete a name by itself. Chief Minister Himanta Biswa Sarma dismissed the Opposition's concerns. In one Sribhumi booth the man named as objector found his own name among the 133 voters objected to, and about 26,000 objections were reported in five Dhubri constituencies. Officials said no name would be deleted without verification.",
    links: [
      { title: "BJP workers in Assam say their names used to seek mass voter deletion – without their knowledge", url: "https://scroll.in/article/1090212/bjp-workers-in-assam-say-their-names-used-to-seek-mass-voter-deletion-without-their-knowledge", outlet: "Scroll", date: "2026-01-24", type: "ground" },
      { title: "Genuine citizens being harassed in Assam Special Revision through Form-7, alleges Opposition: Report", url: "https://m.thewire.in/article/communalism/genuine-citizens-being-harassed-in-assam-special-revision-through-form-7-alleges-opposition-report", outlet: "The Wire", date: "2026-01-25", type: "allegation" },
      { title: "Special revision in Assam leaves citizens fighting for identity", url: "https://www.etvbharat.com/en/state/special-revision-in-assam-leaves-citizens-fighting-for-identity-enn26012902557", outlet: "ETV Bharat", date: "2026-01-29", type: "ground" },
      { title: "In Assam, 'forged' forms aimed at deleting thousands of Muslim voters ring alarm bells", url: "https://scroll.in/article/1090187/in-assam-forged-forms-aimed-at-deleting-thousands-of-muslim-voters-ring-alarm-bells", outlet: "Scroll", date: "2026-01-23", type: "investigation" }
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
    summary: "Petitions in the Gujarat High Court say thousands of Form 7 objections filed during the revision were fake, and seek an SIT probe into the deletions that followed. The court issued notice in May 2026. In February the state Congress said 95–99% of Form 7 objections in districts such as Anand, Kheda and Bharuch had been rejected as baseless, and asked who had filed them in bulk.",
    links: [
      { title: "Petitions seek investigation into thousands of 'fake' objection pleas during SIR, Gujarat High Court issues notice", url: "https://www.deccanherald.com/india/gujarat/petitions-seek-investigation-into-thousands-of-fake-objection-pleas-during-sir-gujarat-high-court-issues-notice-3996966", outlet: "Deccan Herald", date: "2026-05-09", type: "court" },
      { title: "Gujarat Congress says 95-99 pc of Form-7 objections rejected, flags irregularities in SIR", url: "https://www.thehawk.in/news/india/gujarat-congress-says-95-99-pc-of-form-7-objections-rejected-flags-irregularities-in-sir", outlet: "The Hawk", date: "2026-02-13", type: "allegation" }
    ]
  },
  {
    id: "haridwar",
    place: "Haridwar and Kichha, Uttarakhand",
    election: "Special Intensive Revision, 2026",
    summary: "In Jhabrera, 35 people, 31 of them BJP booth-level agents, say they never filed the 1,657 objections in their names, most of them against Muslim voters. The local registration officer said the objections were cancelled and no names would be deleted. He also said the Election Commission would not order an investigation. Former Election Commissioner Ashok Lavasa said the authorities should run their own inquiry. Across five Uttarakhand constituencies, Newslaundry found five BJP-linked men had filed about 6,500 objections, all against Muslim names; one agent in Kichha filed 4,855. A BJP spokesperson said an objection does not mean automatic deletion.",
    links: [
      { title: "Uttarakhand SIR: The unsolved mystery of BJP agents' 'forged' objections against Muslim voters", url: "https://www.newslaundry.com/2026/08/28/exclusive-bjp-agents-identities-misused-to-file-mass-objections-against-haridwars-muslim-voters", outlet: "Newslaundry", date: "2026-08-28", type: "investigation" },
      { title: "Exclusive: Inside the bulk objections targeting Muslims in Uttarakhand's SIR", url: "https://www.newslaundry.com/2026/08/21/inside-the-bulk-objections-targeting-muslims-in-uttarakhands-sir", outlet: "Newslaundry", date: "2026-08-21", type: "investigation" }
    ]
  },
  {
    id: "telangana",
    place: "Telangana",
    election: "Special Intensive Revision, 2026",
    summary: "Congress complained that a BJP booth-level agent in Musheerabad filed Form 7 applications against 30 voters, which were found to be false on checking. The state's Chief Electoral Officer ordered action against anyone knowingly filing false statements in Forms 6, 7 or 8. The BJP denied its agents filed such forms. In Hyderabad's Goshamahal, Asaduddin Owaisi said a BJP sympathiser submitted pre-printed Form 7s against 122 voters; the booth officer rejected them, and the BJP denied involvement.",
    links: [
      { title: "T'gana CEO orders action against false voter enrolment", url: "https://theprint.in/india/tgana-ceo-orders-action-against-false-voter-enrolment/3062520/", outlet: "ThePrint (PTI)", date: "2026-10-05", type: "official" },
      { title: "Owaisi alleges submission of Form-7 application against Muslim voters by BJP supporter", url: "https://theprint.in/india/owaisi-alleges-submission-of-form-7-application-against-muslim-voters-by-bjp-supporter/3063295/", outlet: "ThePrint (PTI)", date: "2026-10-06", type: "allegation" }
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
    summary: "During the revision, when an officer did not approve a voter at a hearing, the ECI's ERONET software generated a Form 7 objection in that officer's name, so the same officer raised the objection and decided it, with no reason recorded. Form 7 is meant to be filed by an elector, on one of six grounds. In Uttar Pradesh, 85,854 such forms were found; the state's election office called the report misleading and said notices and hearings came first. In West Bengal, 5.38 lakh voters were removed this way, against about 7,700 deletions through Form 7s filed by people. The Hindu found the same practice in Delhi and Uttarakhand, with no written ECI order behind it. The Reporters' Collective says the UP office's reply in fact confirmed both the blank-reason forms and more than 200 bulk deletion attempts aimed at Muslim voters; the office later called a viral post built on the report 'fake news'.",
    links: [
      { title: "In UP SIR, ECI software auto-generated 85,854 forms to delete voters without a reason", url: "https://www.reporters-collective.in/trc/eci-software-auto-generated-forms-to-delete-without-reason", outlet: "The Reporters' Collective", date: "2026-10-09", type: "investigation" },
      { title: "'Misleading': UP CEO rejects report of 85,854 voters being deleted using Form-7", url: "https://www.socialnews.xyz/2026/10/13/misleading-up-ceo-rejects-report-of-85854-voters-being-deleted-using-form-7/", outlet: "Social News XYZ (IANS)", date: "2026-10-13", type: "official" },
      { title: "UP CEO admits ECI auto-generated 85,000+ voter deletion forms without a reason, confirms mass deletion attempts against Muslims", url: "https://www.reporters-collective.in/trc/up-ceo-admits-eci-auto-generated-voter-deletion-forms", outlet: "The Reporters' Collective", date: "2026-10-14", type: "investigation" },
      { title: "Despite no order or SOP issued by ECI, EROs using auto-generated Form 7s to delete voters: report", url: "https://m.thewire.in/article/government/despite-no-order-sop-issued-by-eci-eros-using-auto-generated-form-7s-to-delete-voters", outlet: "The Wire (citing The Hindu)", date: "2026-10-16", type: "investigation" },
      { title: "The ECI software deleted 5.38 lakh Bengal voters with auto-generated rejections without citing a reason", url: "https://m.thewire.in/article/rights/the-eci-software-deleted-5-38-lakh-bengal-voters-with-auto-generated-rejections-without-citing-a-reason", outlet: "The Wire", date: "2026-10-17", type: "investigation" },
      { title: "Viral post claims UP CEO admitted 85,000 Muslim voters' forms were auto-deleted; election chief calls it 'fake news'", url: "https://organiser.org/2026/10/19/417658/bharat/viral-post-claims-up-ceo-admitted-85000-muslim-voters-forms-were-auto-deleted-election-chief-calls-it-fake-news/", outlet: "Organiser", date: "2026-10-19", type: "official" }
    ]
  },
  {
    id: "across-states",
    place: "Across states",
    election: "Background",
    summary: "An October 2026 explainer sets out how bulk Form 7 filings became a flashpoint in several states during the revision. They were filed after the draft rolls came out, so many voters found out only when the final lists were published. On 10 October 2026 the ECI capped Form 7 filings at 10 per elector during a claims period and required verification before any deletion. In January 2026 the ECI said there was no limit on the number of Form 7s a voter could file, only a mandatory check above five; Frontline traced how the form went from a routine tool to a political weapon.",
    links: [
      { title: "Election Commission's Forms 6, 7, and 8: How voter list procedures are triggering controversy across India", url: "https://www.onmanorama.com/news/india/2026/10/10/voter-list-election-forms-6-7-8-controversy-explained.html", outlet: "Onmanorama", date: "2026-10-10", type: "explainer" },
      { title: "Election Commission sets limits on Form 7 applications to curb bulk filing", url: "https://newsonair.gov.in/election-commission-sets-limits-on-form-7-applications-to-curb-bulk-filing/", outlet: "All India Radio", date: "2026-10-10", type: "official" },
      { title: "Form-7's journey from a civic chore to a political weapon", url: "https://adrindia.org/content/form-seven-voter-deletion-india-election-commission-bjp", outlet: "Frontline (via ADR)", date: "2026-02-02", type: "explainer" },
      { title: "ECI issues clarification on Form-7 procedure", url: "https://www.newsonair.gov.in/eci-issues-clarification-on-form-7-procedure-amid-tmc-bjp-controversy", outlet: "All India Radio", date: "2026-01-17", type: "official" },
      { title: "After facing flak over bulk Form 7s being filed to seek voter deletions, ECI sets limit of 10 applications for one person", url: "https://thewire.in/government/eci-sets-limit-of-10-form-7-applications-for-one-person", outlet: "The Wire", date: "2026-10-10", type: "official" }
    ]
  }
];

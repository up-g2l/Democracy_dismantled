/*
  The ECI's U-turns — content file
  ------------------------------------------------------------
  Each case is one reversal: what the Election Commission said or did first,
  and what it said or did later, often after a court order or public pressure.
  Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  said:          "What it said first",
  did:           "What it did later",
  court:         "Court",
  investigation: "Investigation",
  analysis:      "Analysis",
  allegation:    "Allegation",
  explainer:     "Explainer",
  opinion:       "Opinion"
};

window.CASES = [
  {
    id: "turnout",
    place: "Turnout data: 'mischief', then an app",
    election: "Lok Sabha 2024 – June 2025",
    summary: "In May 2024 the ECI told the Supreme Court that uploading Form 17C, the booth-level record of votes cast, would cause 'mischief' and mistrust, and the Court declined to order it. Days later the ECI released seat-wise absolute turnout figures. In March 2025 it told the Court the new CEC was willing to address the concerns, and in June 2025 it moved turnout reporting to its ECINet app, updated every two hours, while keeping Form 17C itself unpublished.",
    links: [
      { title: "Uploading of Form 17C on website to lead to mischief, discomfort and mistrust, EC tells SC", url: "https://www.deccanherald.com/elections/uploading-of-form-17c-on-website-to-lead-to-mischief-discomfort-and-mistrust-ec-tells-sc-3034551", outlet: "Deccan Herald", date: "2024-05-22", type: "said" },
      { title: "Lok Sabha Elections 2024: Supreme Court declines to consider plea for uploading voters turnout data", url: "https://www.deccanherald.com/amp/story/elections%2Findia%2Fsc-declines-interim-relief-on-plea-seeking-uploading-of-booth-wise-voter-turnout-data-on-ec-website-3036925", outlet: "Deccan Herald", date: "2024-05-24", type: "court" },
      { title: "Lok Sabha Elections 2024 | Seat-wise voter turnout released, Assam's Dhubri sees maximum votes cast", url: "https://www.deccanherald.com/elections/india/lok-sabha-elections-2024-seat-wise-voter-turnout-released-finally-assams-dhubri-sees-maximum-votes-cast-3038770", outlet: "Deccan Herald", date: "2024-05-25", type: "did" },
      { title: "New CEC willing to address concerns over booth-wise voter turnout data: EC tells SC", url: "https://www.tribuneindia.com/news/delhi/new-cec-willing-to-address-concerns-over-booth-wise-voter-turnout-data-ec-tells-sc", outlet: "The Tribune", date: "2025-03-18", type: "did" },
      { title: "Presiding officers to enter voter turn out on ECINET app to keep polling percentage updated", url: "https://www.newsonair.gov.in/presiding-officers-to-enter-voter-turn-out-on-ecinet-app-to-keep-polling-percentage-updated", outlet: "All India Radio", date: "2025-06-03", type: "did" }
    ]
  },
  {
    id: "footage",
    place: "Polling footage: open, then closed after a court order",
    election: "December 2024 – October 2026",
    summary: "On 9 December 2024 the Punjab and Haryana High Court told the ECI to give a petitioner videography and CCTV footage from a Haryana polling station. Within days the Union Law Ministry, after consulting the ECI, amended the election rules so that only papers 'specified in the rules' are open to inspection, putting the footage out of reach. In 2025 the ECI cut the storage period for polling videos to 45 days, citing 'misuse'. In October 2026 an RTI reply showed it holds no record of the 'overwhelming demand' it gave as the reason.",
    links: [
      { title: "Centre changes election conduct rules days after HC tells EC to provide poll documents to petitioner", url: "https://scroll.in/latest/1077066/centre-changes-election-conduct-rules-days-after-hc-tells-ec-to-provide-poll-documents-to-petitioner", outlet: "Scroll", date: "2024-12-21", type: "did" },
      { title: "Citing 'misuse', EC cuts storage time of polling videos, photos to 45 days", url: "https://scroll.in/latest/1083683/citing-misuse-ec-cuts-storage-time-of-polling-videos-photos-to-45-days", outlet: "Scroll", date: "2025-06-20", type: "did" },
      { title: "ECI restricts electoral CCTV access citing 'overwhelming demand', but admits zero records in RTI", url: "https://m.thewire.in/article/politics/eci-restricts-electoral-cctv-access-citing-overwhelming-demand-but-admits-zero-records-in-rti", outlet: "The Wire", date: "2026-10-13", type: "investigation" }
    ]
  },
  {
    id: "duplicate-epic",
    place: "Duplicate voter IDs: 'not fake', then 'we'll fix it'",
    election: "March – May 2025",
    summary: "When the TMC showed voters in different states sharing the same voter ID (EPIC) number, the ECI said on 2 March 2025 that identical numbers 'do not imply duplicate or fake voters'. Five days later it said the numbers came from wrong number series used by state officials since 2000 and promised a unique national number for every voter within three months. In May it said the 20-year-old problem had been fixed; in October 2026 Uttar Pradesh's election chief still described duplicate IDs as 'a long standing' problem.",
    links: [
      { title: "EC statement on duplicate EPIC numbers confirms anomalies in Bengal: TMC", url: "https://www.business-standard.com/politics/ec-statement-on-duplicate-epic-numbers-confirms-anomalies-in-bengal-tmc-125030200529_1.html", outlet: "Business Standard", date: "2025-03-02", type: "allegation" },
      { title: "ECI clarifies identical EPIC numbers do not imply duplicate or fake voters", url: "https://www.newsonair.gov.in/eci-clarifies-identical-epic-numbers-do-not-imply-duplicate-or-fake-voters", outlet: "All India Radio", date: "2025-03-02", type: "said" },
      { title: "Election Commission says it will resolve duplicate voter ID number problem within three months", url: "https://scroll.in/latest/1080056/election-commission-says-it-will-resolve-duplicate-voter-id-number-problem-within-three-months", outlet: "Scroll", date: "2025-03-08", type: "did" },
      { title: "ECI resolves 20-year-old issue of duplicate EPIC numbers", url: "https://www.newsonair.gov.in/eci-resolves-20-year-old-issue-of-duplicate-epic-numbers/", outlet: "All India Radio", date: "2025-05-14", type: "did" },
      { title: "UP CEO's 'Mr Fact-Checker' jibe at Zubair draws flak amid SIR, voter ID duplications", url: "https://m.thewire.in/article/politics/up-ceos-mr-fact-checker-jibe-at-zubair-draws-flak-amid-sir-voter-id-duplications", outlet: "The Wire", date: "2026-10-20", type: "did" }
    ]
  },
  {
    id: "bihar-documents",
    place: "Bihar: documents required, then not, then 'no change'",
    election: "June – September 2025",
    summary: "The Bihar revision began on 24 June 2025 with forms to be submitted along with documents. On 6 July newspaper advertisements said forms could be filed without documents; the same day the ECI said there was 'no change in instructions'. On 8 July it said documents could come any time before 25 July or during claims, and it first said how many electors had given documents only on 1 September, in the Supreme Court. The Wire also found the ECI's stated reasons shifted: its press release cited foreign illegal immigrants; its July affidavit did not mention them.",
    links: [
      { title: "No change in instructions for SIR in Bihar, says EC after advertisement leads to confusion", url: "https://www.deccanherald.com/india/bihar/no-change-in-instructions-for-sir-in-bihar-says-ec-after-advertisement-leads-to-confusion-3617934", outlet: "Deccan Herald", date: "2025-07-06", type: "said" },
      { title: "Timelines, documents, rationale: How the EC changed course in conducting the Bihar SIR", url: "https://m.thewire.in/article/government/how-the-ec-changed-course-in-conducting-the-bihar-sir", outlet: "The Wire", date: "2025-09-05", type: "analysis" }
    ]
  },
  {
    id: "foreigners",
    place: "Bihar: 'many foreigners found', then no number",
    election: "July – October 2025",
    summary: "In July 2025 'EC sources' told reporters that booth officers had found many people from Nepal, Bangladesh and Myanmar on Bihar's rolls. When the election was announced in October, the Chief Election Commissioner declined to say how many alleged illegal migrants had been removed, citing only total deletions for deaths, duplicates, shifting and other reasons.",
    links: [
      { title: "BLOs find many voters from Nepal, Bangladesh, Myanmar in Bihar during SIR: EC sources", url: "https://www.deccanherald.com/amp/story/india%2Fbihar%2Fblos-find-many-voters-from-nepal-bangladesh-myanmar-in-bihar-during-sir-ec-sources-3627949", outlet: "Deccan Herald", date: "2025-07-13", type: "said" },
      { title: "Bihar Assembly elections 2025: CEC Gyanesh Kumar ducks questions on 'illegal migrants' number", url: "https://www.deccanherald.com/amp/story/elections%2Fbihar%2Fbihar-assembly-elections-2025-cec-gyanesh-kumar-ducks-questions-on-illegal-migrants-number-3754533", outlet: "Deccan Herald", date: "2025-10-06", type: "did" }
    ]
  },
  {
    id: "aadhaar",
    place: "Aadhaar: refused for 77 days",
    election: "July – September 2025",
    summary: "Aadhaar was left off the ECI's list of 11 documents for the Bihar revision. The Supreme Court asked it to consider Aadhaar on 10 July 2025; on 21 July the ECI replied that Aadhaar could not be considered. After the Court repeated the suggestion in July and August, it ordered on 8 September that Aadhaar be accepted as a 12th document for identity, not citizenship. The ECI instructed Bihar's officers the next day, about 77 days after the revision began.",
    links: [
      { title: "77 days, multiple suggestions from SC: A timeline of EC's resistance to Aadhaar in Bihar SIR", url: "https://adrindia.org/node/97032", outlet: "The Wire (via ADR)", date: "2025-09", type: "analysis" },
      { title: "Use Aadhaar, any of 11 listed papers for inclusion claim: Supreme Court on Bihar rolls", url: "https://indianexpress.com/article/india/bihar-sir-sc-election-commission-deleted-voter-names-aadhaar-card-10204580/", outlet: "The Indian Express", date: "2025-08-23", type: "court" },
      { title: "Supreme Court allows Aadhaar as 12th identity document for Bihar voter list revision", url: "https://www.newsonair.gov.in/supreme-court-allows-aadhaar-as-12th-identity-document-for-bihar-voter-list-revision", outlet: "All India Radio", date: "2025-09-08", type: "court" },
      { title: "ECI implements Supreme Court order: Aadhaar now valid for identity in SIR Bihar", url: "https://www.scconline.com/blog/post/2025/09/10/supreme-court-directions-aadhaar-accepted-sir-bihar-elections-12th-identity-proof/", outlet: "SCC Online", date: "2025-09-10", type: "did" }
    ]
  },
  {
    id: "deleted-lists",
    place: "Lists of deleted voters: 'not required', then published",
    election: "August 2025 – January 2026",
    summary: "On 10 August 2025 the ECI told the Supreme Court it was not required to publish the names of the 65 lakh voters dropped from Bihar's draft roll, or the reasons. Four days later the Court ordered it to, and the list went up. In January 2026 the Court again had to order the names of 1.25 crore West Bengal voters flagged for 'logical discrepancies' displayed in local offices.",
    links: [
      { title: "SC orders Election Commission to publish list of 65 lakh deleted Bihar voters with reasons by 19th August", url: "https://moneylife.in/article/sc-orders-election-commission-to-publish-list-of-65-lakh-deleted-bihar-voters-with-reasons-by-19th-august/77985.html", outlet: "Moneylife", date: "2025-08", type: "court" },
      { title: "SIR row: Display 'logical discrepancies' list of 1.25 crore voters in West Bengal, SC tells EC", url: "https://www.tribuneindia.com/news/india/sir-row-display-logical-discrepancies-list-of-1-25-crore-voters-in-west-bengal-sc-tells-ec/", outlet: "The Tribune", date: "2026-01-19", type: "court" }
    ]
  },
  {
    id: "searchable",
    place: "Searchable rolls: refused for years, then granted",
    election: "August 2025 – October 2026",
    summary: "In August 2025 the Chief Election Commissioner said voter lists in machine-readable form could not be shared, citing a Supreme Court order. In October 2026, announcing a summary revision in 17 states and union territories, the ECI ordered that parties be given searchable rolls and lists of additions and deletions. A Congress functionary writing in The Wire called it a U-turn after eight years of opposition, though photographs, change logs and the deduplication method stay undisclosed.",
    links: [
      { title: "Voter list in machine-readable form can't be shared: CEC cites SC order", url: "https://www.business-standard.com/india-news/voter-list-in-machine-readable-form-can-t-be-shared-cec-cites-sc-order-125081700647_1.html", outlet: "Business Standard", date: "2025-08-17", type: "said" },
      { title: "Election Commission announces voter list revision in 17 states, SIR schedule to follow", url: "https://www.businesstoday.in/india/story/election-commission-announces-voter-list-revision-in-17-states-sir-schedule-to-follow-561922-2026-10-15", outlet: "Business Today", date: "2026-10-15", type: "did" },
      { title: "After opposing searchable voter rolls for 8 years, ECI finally makes a U-turn on SSR data", url: "https://m.thewire.in/article/government/after-opposing-searchable-voter-rolls-for-8-years-eci-finally-makes-a-u-turn-on-ssr-data", outlet: "The Wire", date: "2026-10-16", type: "opinion" }
    ]
  },
  {
    id: "deadlines",
    place: "Deadlines: held firm, then extended",
    election: "November 2025 – October 2026",
    summary: "Petitioners asked the Supreme Court for more time for Uttar Pradesh's revision in November 2025. As reports of booth officers' deaths mounted, the ECI extended the schedule in 12 states and union territories by a week. In October 2026 the Court declined to extend the Maharashtra deadline without hearing the ECI, and asked it to find the 47 lakh Delhi voters dropped from the draft; two days later the ECI itself extended deadlines in Delhi and five states.",
    links: [
      { title: "Petition in SC seeks three-month extension of poll roll SIR in UP", url: "https://www.tribuneindia.com/news/india/petition-in-sc-seeks-three-month-extension-of-poll-roll-sir-in-up", outlet: "The Tribune", date: "2025-11-30", type: "court" },
      { title: "Election Commission extends SIR schedule by one week", url: "https://www.deccanherald.com/amp/story/india%2Felection-commission-extends-sir-schedule-by-one-week-3814871", outlet: "Deccan Herald", date: "2025-11-30", type: "did" },
      { title: "Supreme Court seeks ECI's response on plea challenging Maharashtra SIR", url: "https://www.livelaw.in/top-stories/supreme-court-seeks-ecis-response-on-plea-challenging-maharashtra-sir-555950", outlet: "LiveLaw", date: "2026-10-26", type: "court" },
      { title: "'Act with due diligence': SC asks ECI to find 47 lakh Delhi voters", url: "https://www.nationalheraldindia.com/national/supreme-court-election-commission-delhi-voters-omitted-draft-electoral-rolls-sir", outlet: "National Herald", date: "2026-10-28", type: "court" },
      { title: "Relief for voters as EC extends SIR deadlines in Delhi, five states", url: "https://www.theweek.in/news/india/2026/10/30/relief-for-voters-as-ec-extends-sir-deadlines-in-delhi-five-states.html", outlet: "The Week", date: "2026-10-30", type: "did" }
    ]
  },
  {
    id: "form7-limit",
    place: "Form 7: 'no limit', then a cap",
    election: "January – October 2026",
    summary: "In January 2026 the ECI said there was no limit on how many Form 7 objections a voter could file, only a mandatory check above five. After months of reports of bulk and forged filings, it capped Form 7 filings at 10 per elector in October 2026 and required verification before any deletion.",
    links: [
      { title: "ECI issues clarification on Form-7 procedure", url: "https://www.newsonair.gov.in/eci-issues-clarification-on-form-7-procedure-amid-tmc-bjp-controversy", outlet: "All India Radio", date: "2026-01-17", type: "said" },
      { title: "After facing flak over bulk Form 7s being filed to seek voter deletions, ECI sets limit of 10 applications for one person", url: "https://thewire.in/government/eci-sets-limit-of-10-form-7-applications-for-one-person", outlet: "The Wire", date: "2026-10-10", type: "did" }
    ]
  },
  {
    id: "form6",
    place: "Form 6: changed, defended, then withdrawn",
    election: "September – October 2026",
    summary: "During the revision the ECI added a declaration to the Form 6 enrolment process. When two Election Commissioners objected that only the Union government can amend the form, the ECI said the Supreme Court had upheld the changes; The Wire found the judgement said nothing of the kind. On 28 September it said Form 6 had never been amended, and two days later it removed the declaration in states where the revision had ended. In October the Supreme Court said it had never approved the changes and asked who had made them.",
    links: [
      { title: "Form 6 Controversy: ECI faces questions over new declaration for first-time voters", url: "https://www.outlookindia.com/national/form-6-controversy-eci-faces-questions-over-new-declaration-for-first-time-voters", outlet: "Outlook", date: "2026-09-24", type: "explainer" },
      { title: "Election Commission says Supreme Court 'upheld' Form 6 changes, but did it?", url: "https://thewire.in/government/election-commission-says-supreme-court-upheld-form-6-changes-but-did-it", outlet: "The Wire", date: "2026-09-27", type: "analysis" },
      { title: "Election Commission announces SIR changes after first meeting since internal dispute surfaced", url: "https://lawstreet.co/executive/election-commission-announces-sir-changes-after-first-meeting-since-internal-dispute-surfaced", outlet: "Law Street", date: "2026-09-28", type: "said" },
      { title: "ECI reverts Form 6 to original format, removes additional declaration in non-SIR states", url: "https://morungexpress.com/eci-reverts-form-6-to-original-format-removes-additional-declaration-in-non-sir-states", outlet: "The Morung Express", date: "2026-09-30", type: "did" },
      { title: "EC withdraws SIR declaration from Form 6 in states where exercise is over", url: "https://www.business-standard.com/india-news/ec-withdraws-sir-declaration-from-form-6-in-states-where-exercise-is-over-126093000314_1.html", outlet: "Business Standard", date: "2026-09-30", type: "did" },
      { title: "SIR Form 6: SC says it never approved changes, seeks record on who modified voter registration form", url: "https://www.moneylife.in/article/sir-form-6-sc-says-it-never-approved-changes-seeks-record-on-who-modified-voter-registration-form/81853.html", outlet: "Moneylife", date: "2026-10", type: "court" }
    ]
  },
  {
    id: "hearings",
    place: "Hearings and ECINet: changed after the commissioners' dissent",
    election: "September 2026",
    summary: "After The Indian Express reported that two Election Commissioners had objected 14 times in 10 months, the full Commission met on 27 September 2026. It then said voters with 'unmapped' or 'logical discrepancy' notices would mostly not need to attend hearings, set up a committee with an outside expert to review ECINet, and promised advance agendas and formal minutes for its meetings. In the same statement it maintained that every SIR order had been approved unanimously.",
    links: [
      { title: "14 times in 10 months, two Election Commissioners objected on record to poll panel steps", url: "https://indianexpress.com/article/express-exclusive/election-commission-sir-14-objections-gyanesh-kumar-sukhbir-singh-sandhu-vivek-joshi-10889737/", outlet: "The Indian Express", date: "2026-09-23", type: "investigation" },
      { title: "Election Commission announces SIR changes after first meeting since internal dispute surfaced", url: "https://lawstreet.co/executive/election-commission-announces-sir-changes-after-first-meeting-since-internal-dispute-surfaced", outlet: "Law Street", date: "2026-09-28", type: "did" }
    ]
  },
  {
    id: "up-form7",
    place: "Uttar Pradesh: 'misleading', then 'up to 100' wrongly removed",
    election: "October 2026",
    summary: "When the Reporters' Collective reported that ECI software had generated 85,854 deletion forms without a reason in Uttar Pradesh, the state's election office called it misleading. Within two weeks the same office acknowledged that up to 100 people statewide had been wrongly removed through bulk Form 7s.",
    links: [
      { title: "'Misleading': UP CEO rejects report of 85,854 voters being deleted using Form-7", url: "https://www.socialnews.xyz/2026/10/13/misleading-up-ceo-rejects-report-of-85854-voters-being-deleted-using-form-7/", outlet: "Social News XYZ (IANS)", date: "2026-10-13", type: "said" },
      { title: "UP CEO admits ECI auto-generated 85,000+ voter deletion forms without a reason, confirms mass deletion attempts against Muslims", url: "https://www.reporters-collective.in/trc/up-ceo-admits-eci-auto-generated-voter-deletion-forms", outlet: "The Reporters' Collective", date: "2026-10-14", type: "investigation" },
      { title: "FIR in UP eight months after man who cannot sign says forged signature was used to delete 26 voters", url: "https://m.thewire.in/article/rights/uttar-pradesh-fir-man-who-cannot-sign-forged-signature-delete-voters", outlet: "The Wire", date: "2026-10-27", type: "did" }
    ]
  }
];

/*
  Uttar Pradesh is fishy — content file
  ------------------------------------------------------------
  Uttar Pradesh's voter-roll revision (SIR) of 2025–2026 and the complaints
  around it: booth-level obstruction before it, the 2.89 crore names cut from
  the draft, the 84 lakh added back, deletion forms no one filed, and the
  altered and duplicated entries found after the final roll.
  Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  allegation:    "Allegation",
  investigation: "Investigation",
  analysis:      "Data analysis",
  ground:        "Ground report",
  official:      "Official response",
  court:         "Court",
  factcheck:     "Fact check"
};

window.CASES = [
  {
    id: "before",
    place: "Before the revision: trouble at the booth",
    election: "Lok Sabha 2024, by-elections 2024–2025",
    summary: "Ahead of the 2024 Lok Sabha vote, Muslim and some Dalit voters in western UP told Scroll of missing names and police obstruction at booths. In Sambhal, police were accused of lathi-charging Muslim voters and taking their identity cards; police said they were stopping fraud. In the November 2024 by-elections the Election Commission suspended five policemen after complaints that voters of one community were being turned away. In the 2025 Milkipur by-poll Akhilesh Yadav released audio he said showed presiding officers chasing a 'fake voting target'; police denied checking voters' IDs. A viral Varanasi list showing one man as 'father' of 48 voters turned out to be an old municipal roll.",
    links: [
      { title: "Cloud of mistrust hangs over elections in western UP", url: "https://scroll.in/article/1066432/", outlet: "Scroll", date: "2024-04-10", type: "ground" },
      { title: "Police accused of voter suppression in an Uttar Pradesh constituency", url: "https://caravanmagazine.in/politics/police-accused-voter-suppression-sambhal-uttar-pradesh", outlet: "The Caravan", date: "2024-05-08", type: "ground" },
      { title: "Uttar Pradesh bypolls: Amid complaints of harassment of voters, EC orders suspension of five cops", url: "https://www.deccanherald.com/amp/story/elections%2Futtar-pradesh%2Futtar-pradesh-bypolls-amid-complaints-of-harassment-of-voters-ec-orders-suspension-of-five-cops-3284000", outlet: "Deccan Herald", date: "2024-11-20", type: "official" },
      { title: "Presiding officers in Milkipur bypoll trying to meet 'fake voting target' for BJP, claims Akhilesh", url: "https://www.tribuneindia.com/news/uttar-pradesh/presiding-officers-in-milkipur-bypoll-trying-to-meet-fake-voting-target-for-bjp-claims-akhilesh", outlet: "The Tribune", date: "2025-02-05", type: "allegation" },
      { title: "Viral voter list shows unmarried seer as father of 50 in Varanasi, Congress smells rat", url: "https://www.deccanherald.com/india/uttarakhand/viral-voter-list-shows-unmarried-seer-as-father-of-50-in-varanasi-congress-smells-rat-3678862", outlet: "Deccan Herald", date: "2025-08", type: "allegation" },
      { title: "Voter list from the 2023 Varanasi municipal elections showing 'Ramkamal Das' as the father of 48 voters is being shared with a misleading claim", url: "https://factly.in/voter-list-from-the-2023-varanasi-municipal-corporation-elections-showing-ramkamal-das-as-the-father-of-48-voters-is-being-shared-with-a-misleading-claim", outlet: "Factly", date: "2025-08", type: "factcheck" }
    ]
  },
  {
    id: "draft",
    place: "2.89 crore names off the draft roll",
    election: "Special Intensive Revision, November 2025 – February 2026",
    summary: "The revision gave about 15.4 crore voters four weeks to fill in forms; petitioners asked the Supreme Court for more time, and Congress MP Tanuj Punia challenged the extra documents demanded. When the draft roll came out on 6 January 2026 it had dropped 2.89 crore names, nearly one in five: 2.1 crore marked as shifted, 46 lakh dead and 25 lakh duplicates. Lucknow and Ghaziabad lost the most; Muslim-majority districts lost proportionately fewer. Akhilesh Yadav said the cuts fell on BJP booths and warned the party would now try to enrol fake voters, and later accused the Commission of helping delete backward-class, Dalit and minority voters through Form 7.",
    links: [
      { title: "Supreme Court seeks ECI response on Congress MP Tanuj Punia's plea against SIR in Uttar Pradesh", url: "https://www.livelaw.in/top-stories/supreme-court-congress-mp-tanuj-punia-plea-against-sir-in-uttar-pradesh-notice-issued-310798", outlet: "LiveLaw", date: "2025-11-21", type: "court" },
      { title: "Petition in SC seeks three-month extension of poll roll SIR in UP", url: "https://www.tribuneindia.com/news/india/petition-in-sc-seeks-three-month-extension-of-poll-roll-sir-in-up", outlet: "The Tribune", date: "2025-11-30", type: "court" },
      { title: "2.89 crore names deleted from voter list in SIR exercise in Uttar Pradesh", url: "https://www.deccanherald.com/amp/story/india%2Futtar-pradesh%2F289-crore-names-deleted-from-voter-list-in-sir-exercise-in-uttar-pradesh-3845199", outlet: "Deccan Herald", date: "2025-12-29", type: "official" },
      { title: "Over 2.89 crore names removed in Uttar Pradesh S.I.R draft roll", url: "https://www.thequint.com/news/breaking-news/over-289-crore-names-removed-in-uttar-pradesh-sir-draft-roll", outlet: "The Quint", date: "2026-01-06", type: "official" },
      { title: "Muslim dominated districts in Uttar Pradesh witness lesser deletions in SIR", url: "https://www.deccanherald.com/amp/story/india%2Futtar-pradesh%2Fmuslim-dominated-districts-in-uttar-pradesh-witness-lesser-deletions-in-sir-3854425", outlet: "Deccan Herald", date: "2026-01-07", type: "analysis" },
      { title: "'BJP will try to get fake voters enrolled now': Akhilesh as SIR sees 2.89 crore names deleted in state", url: "https://www.deccanherald.com/amp/story/india%2Futtar-pradesh%2Fbjp-will-try-to-get-fake-voters-enrolled-now-akhilesh-as-sir-sees-289-crore-names-deleted-in-state-3855535", outlet: "Deccan Herald", date: "2026-01-08", type: "allegation" },
      { title: "Akhilesh Yadav accuses EC of colluding with BJP to delete names of PDA voters in UP from electoral roll", url: "https://m.thewire.in/article/politics/akhilesh-yadav-accuses-ec-of-colluding-with-bjp-to-delete-names-of-pda-voters-in-up-from-electoral-roll", outlet: "The Wire", date: "2026-02-04", type: "allegation" }
    ]
  },
  {
    id: "blos",
    place: "Booth officers under strain",
    election: "December 2025",
    summary: "In Meerut a booth-level officer swallowed poison; his family blamed pressure from revision work, and the district magistrate denied harassment and ordered an inquiry. In Sitapur a 30-year-old booth officer was found hanged; his family linked it to the workload, which police had not confirmed.",
    links: [
      { title: "BLO in Uttar Pradesh's Meerut attempts suicide over SIR work stress; DM orders probe", url: "https://www.etvbharat.com/en/state/blo-in-uttar-pradeshs-meerut-attempts-suicide-over-sir-work-stress-dm-orders-probe-enn25120302369", outlet: "ETV Bharat", date: "2025-12-03", type: "ground" },
      { title: "BLO dies by suicide in UP's Sitapur, family alleges pressure from SIR workload", url: "https://thefederal.com/category/states/north/uttar-pradesh/blo-suicide-uttar-pradesh-sitapur-work-pressure-sir-ec-222573", outlet: "The Federal", date: "2025-12-26", type: "ground" }
    ]
  },
  {
    id: "final",
    place: "84 lakh added back, 16 lakh unexplained",
    election: "Final roll, 10 April 2026",
    summary: "The final roll had 13.40 crore voters, 84 lakh more than the draft, after notices to 1.04 crore 'unmapped' voters and 2.22 crore flagged for discrepancies. That still left the electorate 2 crore below 2024, and analysts writing in The Wire noted only about 83% of the projected adult population was enrolled, with 834 women per 1,000 men against a projected 943. The Reporters' Collective found 84.3 lakh additions against 71.38 lakh published applications, leaving about 16.18 lakh additions unexplained. The state election office said those applications came in before the draft and the law did not require them to be published.",
    links: [
      { title: "Uttar Pradesh electorate grows by over 84 lakh after completion of SIR exercise", url: "https://www.newsonair.gov.in/uttar-pradesh-electorate-grows-by-over-84-lakh-after-completion-of-sir-exercise", outlet: "All India Radio", date: "2026-04-10", type: "official" },
      { title: "Significant net addition, cloud over appeals: five points emerge from the Uttar Pradesh SIR's final figures", url: "https://m.thewire.in/article/government/women-voters-decline-significant-net-addition-five-points-emerge-from-the-uttar-pradesh-sirs-final-figures", outlet: "The Wire", date: "2026-04-11", type: "analysis" },
      { title: "Why the Uttar Pradesh SIR is a riddle", url: "https://m.thewire.in/article/government/why-the-uttar-pradesh-sir-is-a-riddle", outlet: "The Wire", date: "2026-04-21", type: "analysis" },
      { title: "The mysterious 16.18 lakh voters added to Uttar Pradesh's roll", url: "https://www.reporters-collective.in/trc/16-18-lakh-voters-added-to-up-roll", outlet: "The Reporters' Collective", date: "2026-10-06", type: "investigation" },
      { title: "'Misconception being spread on social media': UP CEO rejects report of 16.18 lakh 'mysterious' additions to voter lists", url: "https://www.devdiscourse.com/article/headlines/3989306-misconception-being-spread-on-social-media-up-ceo-rejects-report-of-1618-lakh-mysterious-additions-to-voter-lists", outlet: "Devdiscourse (ANI)", date: "2026-10-08", type: "official" }
    ]
  },
  {
    id: "form7",
    place: "Deletion forms no one filed",
    election: "Special Intensive Revision, 2026",
    summary: "A Congress MP asked the Supreme Court to examine targeted deletions through Form 7. The Reporters' Collective then found that ECI software had generated 85,854 Form 7 deletion requests in election officers' names, with no reason given, whenever an officer did not approve a voter at a hearing. The state's election office called the report misleading, saying notices and hearings came first; the Collective says the same reply confirmed the blank-reason forms and more than 200 bulk deletion attempts aimed at Muslim voters. The Hindu found the practice in other states too, with no written ECI order. The office later called a viral post built on the report 'fake news'.",
    links: [
      { title: "UP voter deletions: SC to hear Congress MP's plea on Form-7 misuse", url: "https://thechenabtimes.com/2026/08/07/uttar-pradesh-supreme-court-to-hear-plea-alleging-targeted-voter-deletions-using-form-7/", outlet: "The Chenab Times", date: "2026-08-07", type: "court" },
      { title: "In UP SIR, ECI software auto-generated 85,854 forms to delete voters without a reason", url: "https://www.reporters-collective.in/trc/eci-software-auto-generated-forms-to-delete-without-reason", outlet: "The Reporters' Collective", date: "2026-10-09", type: "investigation" },
      { title: "'Misleading': UP CEO rejects report of 85,854 voters being deleted using Form-7", url: "https://www.socialnews.xyz/2026/10/13/misleading-up-ceo-rejects-report-of-85854-voters-being-deleted-using-form-7/", outlet: "Social News XYZ (IANS)", date: "2026-10-13", type: "official" },
      { title: "UP CEO admits ECI auto-generated 85,000+ voter deletion forms without a reason, confirms mass deletion attempts against Muslims", url: "https://www.reporters-collective.in/trc/up-ceo-admits-eci-auto-generated-voter-deletion-forms", outlet: "The Reporters' Collective", date: "2026-10-14", type: "investigation" },
      { title: "Despite no order or SOP issued by ECI, EROs using auto-generated Form 7s to delete voters: report", url: "https://m.thewire.in/article/government/despite-no-order-sop-issued-by-eci-eros-using-auto-generated-form-7s-to-delete-voters", outlet: "The Wire (citing The Hindu)", date: "2026-10-16", type: "investigation" },
      { title: "Viral post claims UP CEO admitted 85,000 Muslim voters' forms were auto-deleted; election chief calls it 'fake news'", url: "https://organiser.org/2026/10/19/417658/bharat/viral-post-claims-up-ceo-admitted-85000-muslim-voters-forms-were-auto-deleted-election-chief-calls-it-fake-news/", outlet: "Organiser", date: "2026-10-19", type: "official" }
    ]
  },
  {
    id: "after",
    place: "After the final roll: names changed, IDs duplicated",
    election: "October 2026",
    summary: "When fact-checker Mohammed Zubair showed voters holding several voter IDs, the state's election chief mocked him as 'Mr Fact-Checker' but admitted duplicate IDs were 'a long standing' problem. In Pilibhit, an official probe found 10,470 approved changes to voters' details entered by one computer operator between May and August with no forms on file; opposition parties said most affected voters were Muslim. Two Electoral Registration Officers were removed, the operator was sacked, and an FIR was filed. In the rolls for the Legislative Council polls, software turned names into Hindi sentences such as 'Ram ne Yadav ko maara'; officials blamed translation errors in 158 of 14.8 lakh entries.",
    links: [
      { title: "UP CEO's 'Mr Fact-Checker' jibe at Zubair draws flak amid SIR, voter ID duplications", url: "https://m.thewire.in/article/politics/up-ceos-mr-fact-checker-jibe-at-zubair-draws-flak-amid-sir-voter-id-duplications", outlet: "The Wire", date: "2026-10-20", type: "official" },
      { title: "Pilibhit voter roll irregularities: FIR against two SDMs, computer operator over 10,470 entries", url: "https://m.thewire.in/article/politics/pilibhit-voter-roll-irregularities-fir-against-two-sdms-computer-operator-over-10470-entries", outlet: "The Wire", date: "2026-10-22", type: "official" },
      { title: "'Ram ne Yadav ko maara': What went wrong with UP's digital voter rolls ahead of MLC polls", url: "https://www.outlookindia.com/elections/ram-ne-yadav-ko-maara-what-went-wrong-with-ups-digital-voter-rolls-ahead-of-mlc-polls", outlet: "Outlook", date: "2026-10-23", type: "investigation" },
      { title: "UP voter lists: Software manipulates voters' names, Pilibhit investigation finds 10,470 irregular entries", url: "https://sabrangindia.in/up-voter-lists-software-manipulates-voters-names-pilibhit-investigation-finds-10470-irregular-entries/", outlet: "SabrangIndia", date: "2026-10-23", type: "investigation" }
    ]
  }
];

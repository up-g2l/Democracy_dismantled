/*
  Form 6 misuse page — content file
  ------------------------------------------------------------
  Form 6 is the application a person files to be added to the electoral roll.
  Same format as js/bogus-data.js: each CASE has a list of LINKS.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  allegation:    "Allegation",
  investigation: "Investigation",
  ground:        "Ground report",
  official:      "Official response",
  court:         "Court",
  explainer:     "Explainer"
};

window.CASES = [
  {
    id: "sir-declaration",
    place: "The SIR declaration added to Form 6",
    election: "Nationwide, July–October 2026",
    summary: "In July 2026, the online Form 6 gained a compulsory declaration asking whether the applicant, or a parent or grandparent, was on the roll at the last SIR (Special Intensive Revision). Election Commissioners Sandhu and Joshi objected in writing. They said Form 6 is set by the Registration of Electors Rules, 1960, and only the Union government can amend those rules. Sandhu called the change 'unauthorised and illegal'. The ECI withdrew the declaration on 30 September in states where the revision had finished. The Supreme Court then said it had never approved a modified form.",
    links: [
      { title: "'Illegal, unauthorised': Election Commissioners objected to Form 6 change", url: "https://indianexpress.com/article/express-exclusive/election-commission-illegal-changes-form-6-gyanesh-kumar-10889714/", outlet: "The Indian Express", date: "2026-09-23", type: "investigation" },
      { title: "Form 6 Controversy: ECI faces questions over new declaration for first-time voters", url: "https://www.outlookindia.com/national/form-6-controversy-eci-faces-questions-over-new-declaration-for-first-time-voters", outlet: "Outlook", date: "2026-09-24", type: "explainer" },
      { title: "EC withdraws SIR declaration from Form 6 in states where exercise is over", url: "https://www.business-standard.com/india-news/ec-withdraws-sir-declaration-from-form-6-in-states-where-exercise-is-over-126093000314_1.html", outlet: "Business Standard", date: "2026-09-30", type: "official" },
      { title: "Election Commission removes SIR declaration from online Form 6", url: "https://www.thequint.com/news/breaking-news/election-commission-removes-sir-declaration-form-six", outlet: "The Quint", date: "2026-09", type: "official" },
      { title: "New Form 6 wasn't there when Bihar SIR judgment was delivered, we haven't adjudicated on it: Supreme Court", url: "https://www.livelaw.in/top-stories/new-form-6-wasnt-there-when-bihar-sir-judgment-was-delivered-we-havent-adjudicated-on-it-supreme-court-554233", outlet: "LiveLaw", date: "2026-10", type: "court" },
      { title: "SIR Form 6: SC says it never approved changes, seeks record on who modified voter registration form", url: "https://www.moneylife.in/article/sir-form-6-sc-says-it-never-approved-changes-seeks-record-on-who-modified-voter-registration-form/81853.html", outlet: "Moneylife", date: "2026-10", type: "court" },
      { title: "Who altered Form 6: Did the Supreme Court just torpedo ECI's 'court approval' defence?", url: "https://www.newslaundry.com/2026/10/05/who-altered-form-6-did-the-supreme-court-just-torpedo-ecis-court-approval-defence", outlet: "Newslaundry", date: "2026-10-05", type: "investigation" },
      { title: "SC seeks EC response on SIR, Form 6 row: What's the controversy?", url: "https://www.outlookindia.com/national/sc-seeks-ec-response-on-sir-form-6-row-whats-the-controversy", outlet: "Outlook", date: "2026-10", type: "court" }
    ]
  },
  {
    id: "west-bengal",
    place: "West Bengal",
    election: "Form 6 review 2025, Assembly election April 2026",
    summary: "In July 2025, the state's Chief Electoral Officer ordered an urgent re-check of a year's Form 6 approvals. A sample check had found applications for apparently fictitious voters accepted without verification, and unauthorised staff using officers' logins. In 2026, about 7 lakh voters were added through Form 6 between the final roll and the close of nominations. Mamata Banerjee alleged that BJP workers filed fraudulent applications, which the BJP denies. The Supreme Court declined an oral plea against the additions.",
    links: [
      { title: "West Bengal CEO orders urgent review of voter registration forms over alleged irregularities", url: "https://swarajyamag.com/amp/story/news-brief/west-bengal-ceo-orders-urgent-review-of-voter-registration-forms-over-alleged-irregularities", outlet: "Swarajya", date: "2025-07-30", type: "official" },
      { title: "Form 6 explained: Why voter enrolment is at the centre of Bengal election battle", url: "https://www.businesstoday.in/amp/india/story/form-6-explained-why-voter-enrolment-is-at-the-centre-of-bengal-election-battle-523507-2026-04-01", outlet: "Business Today", date: "2026-04-01", type: "explainer" },
      { title: "Election Commission adds 5 lakh new voters in West Bengal ahead of Assembly polls", url: "https://newsonair.gov.in/election-commission-adds-5-lakh-new-voters-in-west-bengal-ahead-of-assembly-polls/", outlet: "All India Radio", date: "2026-04-19", type: "official" },
      { title: "West Bengal: Nearly 7 lakh voters added ahead of polls; EC yet to give details", url: "https://www.thequint.com/amp/story/news/breaking-news/west-bengal-adds-seven-lakh-new-voters-assembly-elections", outlet: "The Quint", date: "2026-04-20", type: "allegation" },
      { title: "ECI adds nearly 7 lakh voters to Bengal electoral roll ahead of polls, including 5 lakh Form-6 inclusions", url: "https://www.newsgram.com/west-bengal-election-2026/2026/04/20/7-lakh-voters-added-bengal-electoral-roll-form-6", outlet: "NewsGram", date: "2026-04-20", type: "official" },
      { title: "West Bengal SIR: Supreme Court declines oral plea against addition of 7 lakh new voters using Form 6", url: "https://www.livelaw.in/top-stories/west-bengal-sir-supreme-court-declines-oral-plea-against-addition-of-7-lakh-new-voters-using-form-6-530979", outlet: "LiveLaw", date: "2026-04-20", type: "court" }
    ]
  },
  {
    id: "uttar-pradesh",
    place: "Uttar Pradesh",
    election: "Special Intensive Revision, 2026",
    summary: "The Reporters' Collective reported 84.3 lakh additions on the final roll against 71.38 lakh published applications. It said the details of about 16.18 lakh additions were withheld. The state's Chief Electoral Officer rejected the report. He said those Form 6 applications came in before the draft roll and that the law did not require them to be published.",
    links: [
      { title: "The mysterious 16.18 lakh voters added to Uttar Pradesh's roll", url: "https://www.reporters-collective.in/trc/16-18-lakh-voters-added-to-up-roll", outlet: "The Reporters' Collective", date: "2026-10-06", type: "investigation" },
      { title: "'Misconception being spread on social media': UP CEO rejects report of 16.18 lakh 'mysterious' additions to voter lists", url: "https://www.devdiscourse.com/article/headlines/3989306-misconception-being-spread-on-social-media-up-ceo-rejects-report-of-1618-lakh-mysterious-additions-to-voter-lists", outlet: "Devdiscourse (ANI)", date: "2026-10-08", type: "official" }
    ]
  },
  {
    id: "maharashtra",
    place: "Maharashtra",
    election: "Assembly election, November 2024",
    summary: "In October 2024, one account on the EC's Voter Helpline App sent about 1,000 Form 6 applications to a single office in Tuljapur, and 4,000 to 5,000 across the constituency. Ground checks found the applicants did not exist at the addresses given, and all were rejected. An officer filed an FIR alleging forged Aadhaar cards, but no chargesheet had been filed 18 months later. Statewide, the Opposition questions the 40.8 lakh additions before the poll. In Kamthi, booth-level officers said they had not filled the forms for many new voters.",
    links: [
      { title: "A flurry of new voters? The curious case of Kamthi, where the Maha BJP chief won", url: "https://www.newslaundry.com/2025/07/03/a-flurry-of-new-voters-the-curious-case-of-kamthi-where-the-maha-bjp-chief-won", outlet: "Newslaundry", date: "2025-07-03", type: "ground" },
      { title: "Form 6: Rahul Gandhi's Mahadevpura exposé puts focus back on Maharashtra's 40.8 lakh additions", url: "https://thewire.in/government/form-6-rahul-gandhis-mahadevpura-expose-puts-focus-back-on-maharashtras-40-8-lakh-additions", outlet: "The Wire", date: "2025-08-10", type: "investigation" },
      { title: "EC's app was used to file fake voter forms before 2024 Maharashtra polls. The probe hasn't moved", url: "https://www.newslaundry.com/2026/03/10/ecs-app-was-used-to-file-fake-voter-forms-before-2024-maharashtra-polls-the-probe-hasnt-moved", outlet: "Newslaundry", date: "2026-03-10", type: "investigation" }
    ]
  },
  {
    id: "mahadevapura",
    place: "Mahadevapura, Bengaluru",
    election: "Lok Sabha 2024, Bangalore Central",
    summary: "Congress counted 33,692 cases of alleged Form 6 misuse among the 1,00,250 suspect entries Rahul Gandhi presented on 7 August 2025. The Week found no independent check of the Form 6 figure. Karnataka's Chief Electoral Officer said the documents shown were not issued by polling officials, and asked for the names under a signed declaration.",
    links: [
      { title: "Rahul Gandhi flags 1 lakh voter 'discrepancies' in one Assembly seat, alleges EC colluded with BJP", url: "https://scroll.in/latest/1085332/rahul-gandhi-flags-over-1-lakh-voter-discrepancies-in-karnataka-alleges-ec-colluding-with-bjp", outlet: "Scroll", date: "2025-08-07", type: "allegation" },
      { title: "Rahul claims proof of poll fraud, BJP-EC 'collusion'; BJP says 'calculated deceit'; EC asks for signed declaration", url: "https://www.theweek.in/wire-updates/national/2025/08/07/del109-ec-ldall-rahul.html", outlet: "The Week (PTI)", date: "2025-08-07", type: "official" },
      { title: "How Mahadevapura has become symbol of fight over integrity of polls", url: "https://www.theweek.in/magazine/theweek/current/2025/08/16/mahadevapura-voter-fraud-allegations-rahul-gandhi-electoral-roll-probe.html", outlet: "The Week", date: "2025-08-17", type: "explainer" }
    ]
  },
  {
    id: "new-delhi",
    place: "New Delhi constituency",
    election: "Delhi Assembly election, February 2025",
    summary: "Between 15 December 2024 and 2 January 2025, more than 10,500 new-voter applications were filed in Arvind Kejriwal's seat, according to data AAP cited. AAP alleged a BJP-directed drive to add and delete voters there. The district election officer accused AAP of pressuring officials.",
    links: [
      { title: "BJP tampering voter list in New Delhi constituency: AAP", url: "https://www.tribuneindia.com/news/delhi/bjp-tampering-voter-list-in-new-delhi-constituency-aap", outlet: "The Tribune", date: "2025-01-06", type: "allegation" },
      { title: "CM Atishi alleges 'voter scam' in New Delhi constituency ahead of assembly polls", url: "https://www.theweek.in/wire-updates/national/2025/01/06/des16-dl-atishi-electoral-roll.html", outlet: "The Week (PTI)", date: "2025-01-06", type: "allegation" },
      { title: "Delhi polls: AAP exerting pressure, claims district election officer", url: "https://scroll.in/latest/1077644/scroll_in", outlet: "Scroll", date: "2025-01", type: "official" }
    ]
  }
];

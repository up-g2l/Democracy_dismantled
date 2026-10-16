/*
  Supreme Court page — content file
  ------------------------------------------------------------
  Reports on how the Supreme Court has handled cases challenging the
  Election Commission: how long they have taken, what relief was refused,
  and the times the Court did step in. Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  delay:    "Delay",
  refused:  "Relief refused",
  verdict:  "Ruling",
  acted:    "Court stepped in",
  hearing:  "Hearing",
  analysis: "Analysis"
};

window.CASES = [
  {
    id: "appointments-law",
    place: "The 2023 appointment law: no decision yet",
    election: "Filed 2024, still pending",
    summary: "The challenge to the law that dropped the Chief Justice from the selection panel was filed soon after it passed. In March 2024 the Court declined to stay the appointments made under it. In February 2025 the pleas were mentioned twice but not heard, the same week the government named a new CEC under the same law. In July 2026 the Court reserved its decision on whether to send the case to a larger bench. In September 2026 the two judges split, and it went to the Chief Justice. Meanwhile three commissioners have been appointed under the law being challenged.",
    links: [
      { title: "Supreme Court won't stay appointment of new Election Commissioners", url: "https://www.tribuneindia.com/news/india/top-court-wont-stay-appointment-of-ecs-600982", outlet: "The Tribune", date: "2024-03-15", type: "refused" },
      { title: "Supreme Court adjourns pleas challenging Election Commissioners' law", url: "https://www.livelaw.in/amp/top-stories/supreme-court-pleas-challenging-removal-of-cji-from-election-commissioner-appointment-panel-adjourned-to-march-19-284424", outlet: "LiveLaw", date: "2025-02-19", type: "delay" },
      { title: "SC defers hearing on pleas against CEC, ECs appointments", url: "https://www.dtnext.in/news/national/sc-defers-hearing-on-pleas-against-cec-ecs-appointments-823623", outlet: "DT Next", date: "2025-02-19", type: "delay" },
      { title: "SC fixes April 16 for hearing pleas against appointment of CEC, ECs", url: "https://www.business-standard.com/india-news/sc-fixes-april-16-for-hearing-pleas-against-appointment-of-cec-ecs-125031900355_1.html", outlet: "Business Standard", date: "2025-03-19", type: "delay" },
      { title: "ECI Appointments Act, 2023 | Day 5: Supreme Court reserves decision on reference to larger bench", url: "https://www.scobserver.in/reports/eci-appointments-act-2023-day-5-supreme-court-reserves-decision-on-reference-to-larger-bench/", outlet: "Supreme Court Observer", date: "2026-07-30", type: "delay" },
      { title: "Supreme Court split over referring Chief Election Commissioner appointment law challenge to Constitution Bench", url: "https://swarajyamag.com/news-brief/supreme-court-split-over-referring-chief-election-commissioner-appointment-law-challenge-to-constitution-bench", outlet: "Swarajya", date: "2026-09-23", type: "delay" }
    ]
  },
  {
    id: "bonds",
    place: "Electoral bonds: struck down after six years",
    election: "Filed 2017, decided February 2024",
    summary: "Petitions against electoral bonds were filed in 2017. By October 2022 they still had no bench, and the Deccan Herald urged the Court to take them up. The Court refused to halt the scheme while the case was pending. It struck the scheme down on 15 February 2024, by which time the bonds had been used through six years of elections.",
    links: [
      { title: "SC must take up electoral bonds case", url: "https://www.deccanherald.com/amp/story/opinion%2Feditorial%2Fsc-must-take-up-electoral-bonds-case-1150997.html", outlet: "Deccan Herald", date: "2022-10-05", type: "delay" },
      { title: "Electoral bonds: SC verdict too little, too late, too early to celebrate?", url: "https://www.nationalheraldindia.com/amp/story/opinion/electoral-bonds-sc-verdict-too-little-too-late-too-early-to-celebrate", outlet: "National Herald", date: "2024-02-15", type: "analysis" },
      { title: "Electoral bonds: How the SC verdict counters former FM Arun Jaitley's arguments", url: "https://indianexpress.com/article/india/supreme-court-verdict-on-poll-bonds-how-the-verdict-counters-former-fm-arun-jaitleys-arguments-9164201/", outlet: "The Indian Express", date: "2024-02-16", type: "acted" }
    ]
  },
  {
    id: "lok-sabha-2024",
    place: "During the 2024 Lok Sabha election",
    election: "April–May 2024",
    summary: "On the day the second phase of voting began, the Court rejected pleas for full counting of VVPAT slips. It ordered that symbol-loading units be sealed and that losing candidates could ask for a sample of machines to be checked. In May it declined to order the ECI to post booth-wise turnout (Form 17C) in the middle of the election. In 2025 it asked the petitioners to take their concerns to the new CEC instead. Scroll asked whether the Court had done enough to keep the election free and fair.",
    links: [
      { title: "Supreme Court rejects plea seeking 100% vote verification with VVPATs", url: "https://www.scobserver.in/reports/supreme-court-rejects-plea-seeking-100-vote-verification-with-vvpats/", outlet: "Supreme Court Observer", date: "2024-04-26", type: "verdict" },
      { title: "Lok Sabha Elections 2024: Supreme Court declines to consider plea for uploading voters turnout data", url: "https://www.deccanherald.com/amp/story/elections%2Findia%2Fsc-declines-interim-relief-on-plea-seeking-uploading-of-booth-wise-voter-turnout-data-on-ec-website-3036925", outlet: "Deccan Herald", date: "2024-05-24", type: "refused" },
      { title: "Should the Supreme Court have done more to ensure free and fair elections?", url: "https://scroll.in/article/1068591/should-the-supreme-court-have-done-more-to-ensure-free-and-fair-elections", outlet: "Scroll", date: "2024-06-03", type: "analysis" },
      { title: "New CEC willing to address concerns over booth-wise voter turnout data: EC tells SC", url: "https://www.tribuneindia.com/news/delhi/new-cec-willing-to-address-concerns-over-booth-wise-voter-turnout-data-ec-tells-sc", outlet: "The Tribune", date: "2025-03-18", type: "delay" }
    ]
  },
  {
    id: "records",
    place: "Polling footage rule: notice, then extensions",
    election: "Filed December 2024, pending",
    summary: "Petitions against the December 2024 rule change that took CCTV and webcast footage out of public inspection got notice in February 2025. In April 2025 the Court gave the government and the ECI more time to reply and listed the case for July. Meanwhile the ECI told states in May 2025 that polling footage could be destroyed after 45 days.",
    links: [
      { title: "SC issues notice to Union govt, ECI over plea against change in polling rules", url: "https://m.thewire.in/article/law/sc-issues-notice-to-union-govt-eci-over-plea-against-change-in-polling-rules", outlet: "The Wire", date: "2025-02-03", type: "delay" },
      { title: "SC extends deadline for Centre, ECI to reply on election rules amendment pleas", url: "https://english.punjabkesari.com/india/sc-extends-deadline-for-centre-eci-to-reply-on-election-rules-amendment-pleas/", outlet: "Punjab Kesari", date: "2025-04-17", type: "delay" },
      { title: "Citing 'misuse', EC cuts storage time of polling videos, photos to 45 days", url: "https://scroll.in/latest/1083683/citing-misuse-ec-cuts-storage-time-of-polling-videos-photos-to-45-days", outlet: "Scroll", date: "2025-06-20", type: "analysis" }
    ]
  },
  {
    id: "sir",
    place: "The SIR: no stay, then a ruling after the vote",
    election: "Bihar 2025, West Bengal 2026",
    summary: "In July 2025 the Court refused to stay the Bihar revision, though it told the ECI to accept Aadhaar, voter ID and ration cards. It declined again in October 2025. The Bihar election was held in November, and the Court upheld the revision in May 2026. In West Bengal, it declined an oral plea against 7 lakh last-minute Form 6 additions. It also said people whose appeals were still pending could not vote in 2026. Legal scholars argue that the Court moved to supervising the exercise without first deciding whether it was lawful. In October 2026 it brought forward to 28 October a plea asking the ECI to publish the reasons behind Delhi's SIR notices, two days before the deadline for claims. On 15 October it issued notice on a petition by Rahul Gandhi and nine other INDIA bloc leaders seeking the SIR file, an audit of deletions and a halt to the revision, but did not pause it.",
    links: [
      { title: "SC refuses to stay Bihar electoral roll revision", url: "https://sundayguardianlive.com/legally-speaking/sc-refuses-to-stay-bihar-electoral-roll-revision-135867/", outlet: "Sunday Guardian", date: "2025-07-13", type: "refused" },
      { title: "Supreme Court keeps faith in ECI; seeks transparency in Bihar electoral roll revision", url: "https://www.theweek.in/news/india/2025/10/16/supreme-court-keeps-faith-in-eci-seeks-transparency-in-bihar-electoral-roll-revision.amp.html", outlet: "The Week", date: "2025-10-16", type: "refused" },
      { title: "Supreme Court delays verdict, SIR rolls on, justice postponed", url: "https://m.thewire.in/article/government/supreme-court-delays-verdict-sir-rolls-on-justice-postponed", outlet: "The Wire", date: "2026-02-05", type: "analysis" },
      { title: "West Bengal SIR | Can't allow deleted persons to vote in 2026 elections when their appeals are pending: Supreme Court", url: "https://www.livelaw.in/amp/top-stories/west-bengal-sir-cant-allow-deleted-persons-to-vote-in-2026-elections-when-their-appeals-are-pending-supreme-court-530126", outlet: "LiveLaw", date: "2026-04", type: "refused" },
      { title: "West Bengal SIR: Supreme Court declines oral plea against addition of 7 lakh new voters using Form 6", url: "https://www.livelaw.in/top-stories/west-bengal-sir-supreme-court-declines-oral-plea-against-addition-of-7-lakh-new-voters-using-form-6-530979", outlet: "LiveLaw", date: "2026-04-20", type: "refused" },
      { title: "From evasion to implementation: The Supreme Court of India and the 'Special Intensive Revision'", url: "https://blog-iacl-aidc.org/2026-posts/2026/5/12/from-evasion-to-implementation-the-supreme-court-of-india-and-the-special-intensive-revision", outlet: "IACL-AIDC Blog", date: "2026-05-12", type: "analysis" },
      { title: "'Doesn't override existing laws': Supreme Court upholds SIR in Bihar; here's why", url: "https://www.businesstoday.in/amp/india/story/doesnt-override-existing-laws-supreme-court-upholds-sir-in-bihar-heres-why-533505-2026-05-27", outlet: "Business Today", date: "2026-05-27", type: "verdict" },
      { title: "SC advances hearing on plea over Delhi SIR to October 28, 2 days before last date for claims & objections", url: "https://www.etvbharat.com/en/bharat/sc-advances-hearing-on-plea-over-delhi-sir-to-october-28-2-days-before-last-date-for-claims-and-objections-enn26101403372", outlet: "ETV Bharat", date: "2026-10-14", type: "hearing" },
      { title: "'One petitioner has to explain his conduct': Supreme Court issues notice on INDIA bloc leaders' petition against ECI over SIR", url: "https://www.livelaw.in/top-stories/supreme-court-notice-rahul-gandhi-india-bloc-plea-sir-eci-554801", outlet: "LiveLaw", date: "2026-10-15", type: "hearing" }
    ]
  },
  {
    id: "after-polls",
    place: "Challenges brought after the result",
    election: "2026",
    summary: "In February 2026 the Court refused to hear Jan Suraaj's plea for fresh polls in Bihar. It said the party had come only after losing and that the High Court was the right forum. In October 2026 it refused to suspend CEC Gyanesh Kumar while it examines claims that he acted unilaterally. A ThePrint review of six years of cases says the Court has seldom ruled against the ECI, often waiting until after elections, and that its remedies came too late to undo harm.",
    links: [
      { title: "Supreme Court refuses to entertain plea by Prashant Kishor's party seeking fresh polls in Bihar", url: "https://scroll.in/latest/1090548/scroll_in", outlet: "Scroll", date: "2026-02-06", type: "refused" },
      { title: "SC refuses to suspend CEC Gyanesh Kumar, seeks response on 'unilateral' decisions", url: "https://www.thenewsminute.com/news/sc-refuses-to-suspend-cec-gyanesh-kumar-seeks-response-on-unilateral-decisions", outlet: "The News Minute", date: "2026-10-05", type: "refused" },
      { title: "What's the counterweight to ECI? A Supreme Court of not-yets, not-nows, not-heres", url: "https://theprint.in/opinion/counting-on-law/counterweight-election-commission-supreme-court/3069472/", outlet: "ThePrint", date: "2026-10-12", type: "analysis" }
    ]
  },
  {
    id: "stepped-in",
    place: "When the Court did step in",
    election: "2023–2026",
    summary: "The record is not one-sided. In 2023 the Court took the choice of commissioners away from the government alone, and in 2024 it struck down electoral bonds. In 2025 it made the ECI publish the names of 65 lakh deleted Bihar voters, with reasons. In January 2026 it ordered the West Bengal 'logical discrepancy' list to be displayed. In October 2026 it said it had never approved the changed Form 6. Critics' complaint is mostly about timing: these orders often came after the harm was done.",
    links: [
      { title: "Constitutional Bench explainer series: Anoop Baranwal v. Union of India", url: "https://lawandotherthings.com/constitutional-bench-explainer-series-anoop-baranwal-v-union-of-india/", outlet: "Law and Other Things", date: "2023-06-05", type: "acted" },
      { title: "SC directs ECI to publish deleted Bihar voters list before Aug 19", url: "https://www.business-standard.com/india-news/sc-directs-eci-to-publish-deleted-bihar-voters-list-before-aug-19-125081401837_1.html", outlet: "Business Standard", date: "2025-08-14", type: "acted" },
      { title: "Use Aadhaar, any of 11 listed papers for inclusion claim: Supreme Court on Bihar rolls", url: "https://indianexpress.com/article/india/bihar-sir-sc-election-commission-deleted-voter-names-aadhaar-card-10204580/", outlet: "The Indian Express", date: "2025-08-23", type: "acted" },
      { title: "SC directs ECI to display names of voters under logical discrepancies in West Bengal voter list", url: "https://www.newsonair.gov.in/sc-directs-eci-to-display-names-of-voters-under-logical-discrepancies-in-west-bengal-voter-list", outlet: "All India Radio", date: "2026-01-19", type: "acted" },
      { title: "SIR Form 6: SC says it never approved changes, seeks record on who modified voter registration form", url: "https://www.moneylife.in/article/sir-form-6-sc-says-it-never-approved-changes-seeks-record-on-who-modified-voter-registration-form/81853.html", outlet: "Moneylife", date: "2026-10", type: "acted" }
    ]
  }
];

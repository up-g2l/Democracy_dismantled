/*
  Selection page — content file
  ------------------------------------------------------------
  Reports on how the Chief Election Commissioner and Election Commissioners
  are chosen, the controversies over recent appointments, and what has
  happened to commissioners who disagreed. Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  report:     "Report",
  allegation: "Allegation",
  official:   "Government's case",
  court:      "Court",
  explainer:  "Explainer",
  opinion:    "Opinion"
};

window.CASES = [
  {
    id: "law",
    place: "From the Court's panel to the 2023 Act",
    election: "2023",
    summary: "On 2 March 2023, in the Anoop Baranwal case, the Supreme Court ruled unanimously that leaving appointments to the government alone undermined the Commission's independence. Until Parliament made a law, it said, commissioners should be chosen by the Prime Minister, the Leader of the Opposition and the Chief Justice. In December 2023 Parliament passed the new Act. It replaced the Chief Justice with a Union minister picked by the Prime Minister, giving the government two of three votes. It also shielded commissioners from legal proceedings over their official acts.",
    links: [
      { title: "Constitutional Bench explainer series: Anoop Baranwal v. Union of India", url: "https://lawandotherthings.com/constitutional-bench-explainer-series-anoop-baranwal-v-union-of-india/", outlet: "Law and Other Things", date: "2023-06-05", type: "explainer" },
      { title: "Appointing Election Commissioners: The government must not control the watchdog", url: "https://indianexpress.com/article/opinion/columns/appointing-election-commissioners-the-government-must-not-control-the-watchdog-8917864/", outlet: "The Indian Express", date: "2023-08-31", type: "opinion" },
      { title: "Bill downgrades Election Commissioner to status of Cabinet Secy from that of SC Judge", url: "https://indianexpress.com/article/india/bill-downgrades-election-commission-to-status-of-cabinet-secy-from-that-of-sc-judge-8940629/", outlet: "The Indian Express", date: "2023-09", type: "report" },
      { title: "Parliament passes Bill on CEC, ECs' appointment", url: "https://www.tribuneindia.com/news/india/parl-passes-bill-on-cec-ecs-appointment-574233", outlet: "The Tribune", date: "2023-12-21", type: "report" }
    ]
  },
  {
    id: "goel",
    place: "Arun Goel: appointed in a day, gone before the polls",
    election: "2022–2024",
    summary: "Arun Goel's voluntary retirement from the IAS, the Law Ministry's clearance, his place on a four-name panel and the President's approval all happened within about 24 hours in November 2022. The Supreme Court asked why it was done at 'lightning speed'. The government said the process followed set criteria. Goel resigned on 9 March 2024, days before the Lok Sabha schedule was announced, leaving the CEC as the only member. No reason was given.",
    links: [
      { title: "Retired IAS officer Arun Goel takes charge as Election Commissioner", url: "https://indianexpress.com/article/india/retired-ias-officer-arun-goel-assumes-charge-new-election-commissioner-8280116/", outlet: "The Indian Express", date: "2022-11-21", type: "report" },
      { title: "'Why lightning speed?': SC to govt over appointment of Arun Goel as Election Commissioner", url: "https://www.outlookindia.com/national/-why-lightning-speed-over-appointment-of-ec-arun-goel-sc-to-govt-news-239745", outlet: "Outlook", date: "2022-11-24", type: "court" },
      { title: "Arun Goel appointment as EC challenged in SC: Who is the retired bureaucrat?", url: "https://indianexpress.com/article/political-pulse/arun-goel-appointment-as-ec-challenged-in-sc-8565232/", outlet: "The Indian Express", date: "2023-04-19", type: "court" },
      { title: "Election Commissioner Arun Goel resigns ahead of Lok Sabha election", url: "https://www.tribuneindia.com/news/india/election-commissioner-arun-goel-resigns-ahead-of-lok-sabha-election-598901", outlet: "The Tribune", date: "2024-03-09", type: "report" }
    ]
  },
  {
    id: "march-2024",
    place: "March 2024: two picks a day before the hearing",
    election: "Gyanesh Kumar and Sukhbir Singh Sandhu",
    summary: "On 14 March 2024 the Prime Minister's panel chose Gyanesh Kumar and Sukhbir Singh Sandhu as Election Commissioners. The Supreme Court was due to hear the challenge to the new law the next day. Adhir Ranjan Chowdhury, the opposition member, said he got a shortlist of six names only 10 minutes before the meeting, and recorded his dissent. The Court declined to stay the appointments. The government denied rushing them, saying one commissioner could not run the general election alone.",
    links: [
      { title: "'Given 6 names, 10 mins before meet': PM-led panel picks poll commissioners, Adhir registers dissent", url: "https://www.newslaundry.com/2024/03/14/given-6-names-10-mins-before-meet-pm-led-panel-picks-ecs-chowdhury-registers-dissent", outlet: "Newslaundry", date: "2024-03-14", type: "allegation" },
      { title: "'Gave dissent notes on EC appointments… govt in majority in panel': Adhir Ranjan Chowdhury", url: "https://indianexpress.com/article/india/adhir-ranjan-chowdhury-ec-appointments-modi-panel-9213815/", outlet: "The Indian Express", date: "2024-03-14", type: "allegation" },
      { title: "Who is Gyanesh Kumar, the Election Commissioner picked by PM Modi-led panel", url: "https://indianexpress.com/article/who-is/gyanesh-kumar-election-commissioner-pm-modi-led-panel-9214010/", outlet: "The Indian Express", date: "2024-03-14", type: "report" },
      { title: "Who is Sukhbir Singh Sandhu, new Election Commissioner appointed ahead of LS polls", url: "https://indianexpress.com/article/who-is/sukhbir-singh-sandhu-new-election-commissioner-9214016/", outlet: "The Indian Express", date: "2024-03-14", type: "report" },
      { title: "Supreme Court won't stay appointment of new Election Commissioners", url: "https://www.tribuneindia.com/news/india/top-court-wont-stay-appointment-of-ecs-600982", outlet: "The Tribune", date: "2024-03-15", type: "court" },
      { title: "Centre defends dropping Chief Justice of India from EC selection committee", url: "https://www.tribuneindia.com/news/india/centre-defends-dropping-cji-from-ec-selection-committee-602644", outlet: "The Tribune", date: "2024-03-20", type: "official" }
    ]
  },
  {
    id: "feb-2025",
    place: "February 2025: a new CEC over the Opposition's objection",
    election: "Gyanesh Kumar becomes Chief Election Commissioner",
    summary: "The panel met on 17 February 2025, and Gyanesh Kumar was named CEC that night. Rahul Gandhi, as Leader of the Opposition, had asked in a dissent note for the decision to wait until the Supreme Court ruled on the law. He called the late-night appointment 'disrespectful and discourteous'. Kumar had worked under Amit Shah as Secretary of the Cooperation Ministry. Before that, at the Home Ministry, he had a central part in the 2019 Jammu and Kashmir reorganisation and in setting up the Ram temple trust.",
    links: [
      { title: "Gyanesh Kumar named chief poll commissioner overruling Rahul Gandhi's dissent", url: "https://scroll.in/latest/1079285/gyanesh-kumar-named-chief-poll-commissioner-overruling-rahul-gandhis-dissent", outlet: "Scroll", date: "2025-02-18", type: "report" },
      { title: "Rahul Gandhi criticises Amit Shah over new CEC's midnight appointment", url: "https://www.business-standard.com/politics/rahul-gandhi-crticises-amit-shah-over-new-cec-s-midnight-appointment-125021800461_1.html", outlet: "Business Standard", date: "2025-02-18", type: "allegation" },
      { title: "Gyanesh Kumar, who worked on J&K reorganisation and Ram Temple Trust, appointed new CEC", url: "https://maktoobmedia.com/india/gyanesh-kumar-who-worked-on-jk-reorganisation-and-ram-temple-trust-appointed-new-cec/", outlet: "Maktoob", date: "2025-02-18", type: "report" },
      { title: "IIT Kanpur, Roorkee, Harvard University: Educational qualifications of Gyanesh Kumar & Vivek Joshi", url: "https://indianexpress.com/article/education/iit-kanpur-roorkee-harvard-university-educational-qualifications-ec-vivek-joshi-cec-gyanesh-kumar-jee-main-advanced-9842296/", outlet: "The Indian Express", date: "2025-02-18", type: "report" }
    ]
  },
  {
    id: "dissenters",
    place: "What happens to commissioners who disagree",
    election: "Ashok Lavasa, 2019–2020, and the 2026 objections",
    summary: "In 2019 Ashok Lavasa dissented on clean chits for Narendra Modi and Amit Shah and asked for his views to be recorded. That August the Income Tax Department sent notices to his sister and son, after his wife had already faced scrutiny. He resigned in August 2020 to join the Asian Development Bank. Critics say this shows what dissent can cost a commissioner. Even so, in 2026 Sandhu and Joshi, both chosen under the new law, put 14 objections on record against the CEC.",
    links: [
      { title: "Don't go public, tells CEC after colleague protests", url: "https://www.deccanherald.com/amp/story/elections%2Fdont-go-public-tells-cec-after-colleague-protests-734512.html", outlet: "Deccan Herald", date: "2019-05-18", type: "report" },
      { title: "Not just Ashok Lavasa's wife, his sister and son also under I-T Department's scanner", url: "https://thewire.in/government/not-just-ashok-lavasas-wife-his-sister-and-son-also-under-i-t-departments-scanner", outlet: "The Wire", date: "2019-09-25", type: "report" },
      { title: "A society that creates hurdles to exhaust the honest, paves the path for its own perdition", url: "https://indianexpress.com/article/opinion/columns/the-difficulty-of-being-honest-prevention-of-corruption-act-ashok-lavasa-election-commission-of-india-6188078/", outlet: "The Indian Express (Ashok Lavasa)", date: "2019-12-28", type: "opinion" },
      { title: "Ashok Lavasa resigns as Election Commissioner; to join ADB as vice president", url: "https://deccanherald.com/india/ashok-lavasa-resigns-as-election-commissioner-to-join-adb-as-vice-president-874810.html", outlet: "Deccan Herald", date: "2020-08-18", type: "report" },
      { title: "T N Seshan, N Gopalaswami, Ashok Lavasa: When Election Commission members differed", url: "https://indianexpress.com/article/explained/election-commission-india-cec-election-commissioners-dissent-10894190/", outlet: "The Indian Express", date: "2026-09-26", type: "explainer" }
    ]
  },
  {
    id: "challenge",
    place: "The challenge in the Supreme Court",
    election: "2024–2026",
    summary: "Petitioners including ADR and Jaya Thakur argue that dropping the Chief Justice lets the government pick its own referee, which they say breaches the Constitution's basic structure. The government says independence does not depend on having a judge on the panel. It also says the Court should not presume the Prime Minister will act in bad faith. On 23 September 2026 two judges split on sending the case to a Constitution Bench, and the question went to the Chief Justice. A separate challenge to the commissioners' immunity is pending.",
    links: [
      { title: "Supreme Court agrees to hear plea against law dropping CJI from committee to select CEC, ECs", url: "https://indianexpress.com/article/cities/delhi/supreme-court-agrees-to-hear-plea-against-law-dropping-cji-from-committee-to-select-cec-ecs-9213094/", outlet: "The Indian Express", date: "2024-03-14", type: "court" },
      { title: "SC issues notice on plea against law to provide immunity to CEC, ECs", url: "https://indianexpress.com/article/legal-news/sc-notice-plea-law-provide-immunity-cec-ecs-10469521/", outlet: "The Indian Express", date: "2026-01-12", type: "court" },
      { title: "Don't presume PM will act in bad faith in EC appointments: Centre to SC", url: "https://telanganatoday.com/dont-presume-pm-will-act-in-bad-faith-in-ec-appointments-centre-to-sc", outlet: "Telangana Today", date: "2026-07-30", type: "official" },
      { title: "ECI Appointments Act, 2023 | Day 5: Supreme Court reserves decision on reference to larger bench", url: "https://www.scobserver.in/reports/eci-appointments-act-2023-day-5-supreme-court-reserves-decision-on-reference-to-larger-bench/", outlet: "Supreme Court Observer", date: "2026-07-30", type: "court" },
      { title: "Supreme Court split over referring Chief Election Commissioner appointment law challenge to Constitution Bench", url: "https://swarajyamag.com/news-brief/supreme-court-split-over-referring-chief-election-commissioner-appointment-law-challenge-to-constitution-bench", outlet: "Swarajya", date: "2026-09-23", type: "court" },
      { title: "Why is the 2023 Election Commissioner appointment law controversial, and why did SC refer it to CJI?", url: "https://indianexpress.com/article/explained/explained-law/cec-appointment-law-supreme-court-constitution-bench-explained-10891151/", outlet: "The Indian Express", date: "2026-09-24", type: "explainer" }
    ]
  }
];

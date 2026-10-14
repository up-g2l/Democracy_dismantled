/*
  Double standards page — content file
  ------------------------------------------------------------
  Reports comparing how the Election Commission treated the ruling BJP
  and opposition parties in similar situations. Same format as the other case pages.

  LINK fields: title, url, outlet, date ("YYYY-MM-DD" or "YYYY-MM"), type, image (optional)
*/

window.TYPES = {
  ruling:     "Ruling side",
  opposition: "Opposition side",
  official:   "Official response",
  court:      "Court",
  editorial:  "Editorial"
};

window.CASES = [
  {
    id: "affidavit",
    place: "Vote-theft claims: an affidavit for one side",
    election: "August 2025",
    summary: "After Rahul Gandhi's 7 August presentation on Mahadevapura, Karnataka's election office asked for his claims under a signed declaration. The CEC later gave him seven days to file an affidavit or apologise. On 13 August BJP MP Anurag Thakur made similar claims of fake voters in Rae Bareli, Wayanad and other opposition-held seats. Two days later the Commission had not asked him for an affidavit and had not said whether it would.",
    links: [
      { title: "Rahul claims proof of poll fraud, BJP-EC 'collusion'; BJP says 'calculated deceit'; EC asks for signed declaration", url: "https://www.theweek.in/wire-updates/national/2025/08/07/del109-ec-ldall-rahul.html", outlet: "The Week (PTI)", date: "2025-08-07", type: "opposition" },
      { title: "'Chor machaye shor': BJP alleges voter registration irregularities in seats of Rahul, Priyanka", url: "https://www.tribuneindia.com/news/india/chor-machaye-shor-bjp-alleges-voter-registration-irregularities-in-seats-of-rahul-priyanka", outlet: "The Tribune", date: "2025-08-13", type: "ruling" },
      { title: "EC didn't serve notice to BJP's Thakur as it did in Rahul's case: Congress", url: "https://www.theweek.in/wire-updates/national/2025/08/14/del67-cong-bjp-ec.html", outlet: "The Week (PTI)", date: "2025-08-14", type: "ruling" },
      { title: "EC yet to demand affidavit from Anurag over 'vote chori' claims", url: "https://www.tribuneindia.com/news/india/ec-yet-to-demand-affidavit-from-anurag-over-vote-chori-claims", outlet: "The Tribune", date: "2025-08-15", type: "ruling" },
      { title: "Vote theft charge baseless if no proof given in 7 days: CEC to Opposition", url: "https://www.tribuneindia.com/news/india/vote-theft-charge-baseless-if-no-proof-given-in-7-days-cec-to-oppn/amp", outlet: "The Tribune", date: "2025-08-18", type: "opposition" }
    ]
  },
  {
    id: "clean-chits-2019",
    place: "Clean chits for the Prime Minister",
    election: "Lok Sabha election, 2019",
    summary: "The Commission cleared Narendra Modi over a series of 2019 speeches. These included the Latur speech asking first-time voters to dedicate their votes to the Balakot and Pulwama soldiers, which overruled the views of Maharashtra's chief electoral officer and the local election officer. Commissioner Ashok Lavasa dissented, but his dissent was not recorded. When he protested, the CEC asked that differences not be made public.",
    links: [
      { title: "Another EC relief to PM, now for Pulwama", url: "https://www.deccanherald.com/elections/another-ec-relief-to-pm-now-for-pulwama-731682.html", outlet: "Deccan Herald", date: "2019-05-01", type: "ruling" },
      { title: "EC gives PM Modi a clean chit for Latur speech invoking Pulwama", url: "https://www.thequint.com/elections/election-commission-clean-chit-pm-modi-latur-speech-pulwama", outlet: "The Quint", date: "2019-05-01", type: "ruling" },
      { title: "Complaints against Modi: Differences in EC over 2 clean chit decisions", url: "https://www.theweek.in/news/india/2019/05/04/complaints-against-modi-differences-in-over-2-clean-chit-decisions.amp.html", outlet: "The Week (PTI)", date: "2019-05-04", type: "official" },
      { title: "Don't go public, tells CEC after colleague protests", url: "https://www.deccanherald.com/amp/story/elections%2Fdont-go-public-tells-cec-after-colleague-protests-734512.html", outlet: "Deccan Herald", date: "2019-05-18", type: "official" }
    ]
  },
  {
    id: "campaign-2024",
    place: "Campaign speeches: notices to party presidents",
    election: "Lok Sabha election, 2024",
    summary: "Complaints about Narendra Modi's Banswara speech were sent to BJP president J P Nadda, not to Modi himself. Complaints about Rahul Gandhi and Mallikarjun Kharge were likewise sent to the Congress president. Officials said it was the first time the Commission had taken up a complaint against a sitting Prime Minister. A Deccan Herald editorial called the approach 'bizarre'. Opposition leaders, including Congress's Randeep Surjewala and BRS chief K Chandrashekar Rao, were each barred from campaigning for 48 hours over their own remarks. It did order X to take down a Karnataka BJP video targeting Muslims, after campaigning in the state had ended. On 22 May it told both the BJP and Congress to rein in their star campaigners.",
    links: [
      { title: "Election Commission bars Randeep Singh Surjewala from campaigning for 48 hours", url: "https://newsonair.gov.in/election-commission-bars-randeep-singh-surjewala-from-campaigning-for-48-hours", outlet: "All India Radio", date: "2024-04-16", type: "opposition" },
      { title: "EC notice to BJP, Congress over poll code violation plaints against Modi, Rahul Gandhi", url: "https://www.onmanorama.com/news/india/2024/04/25/election-commission-sends-notice-to-congress-bjp-over-hate-speech.amp.html", outlet: "Onmanorama", date: "2024-04-25", type: "ruling" },
      { title: "Bizarre approach to campaign complaints", url: "https://www.deccanherald.com/opinion/editorial/bizarre-approach-to-campaign-complaints-2998776", outlet: "Deccan Herald", date: "2024-04-28", type: "editorial" },
      { title: "EC bans KCR from campaigning for 48 hours", url: "https://deccanchronicle.com/nation/ec-bans-kcr-from-campaigning-for-48-hours-891937", outlet: "Deccan Chronicle", date: "2024-05-01", type: "opposition" },
      { title: "After poll campaigning ends, EC directs X to take down Karnataka BJP video targeting Muslims", url: "https://scroll.in/latest/1067575/after-ec-instruction-karnataka-police-ask-x-to-take-down-bjp-campaign-video-demonising-muslims", outlet: "Scroll", date: "2024-05-07", type: "ruling" },
      { title: "ECI directs BJP, Congress party presidents to caution star campaigners from making statements violating MCC", url: "https://www.newsonair.gov.in/eci-directs-bjp-congress-party-presidents-to-caution-party-star-campaigners-from-making-statements-violating-mcc/", outlet: "All India Radio", date: "2024-05-22", type: "official" }
    ]
  },
  {
    id: "gujarat-dates",
    place: "Gujarat's poll dates held back",
    election: "Assembly elections, 2017 and 2022",
    summary: "In both 2017 and 2022, the Commission announced Himachal Pradesh's poll dates but held back those of BJP-ruled Gujarat, though the two are usually announced together. Critics said the gap let the Gujarat government keep announcing projects before the model code applied. In 2017 the Commission cited flood relief work, and former CEC T S Krishnamurthy called the decision an 'avoidable controversy'. In 2022 CEC Rajiv Kumar said no rule had been broken because the two Assemblies' terms end about 40 days apart.",
    links: [
      { title: "Former CEC Krishnamurthy says EC's decision to not announce Gujarat polls date was an 'avoidable controversy'", url: "https://www.outlookindia.com/amp/story/national/former-cec-krishnamurthy-says-ecs-decision-to-not-announce-gujarat-polls-date-wa-news-303135", outlet: "Outlook", date: "2017-10-17", type: "ruling" },
      { title: "Why were Gujarat dates not announced?", url: "https://www.deccanherald.com/amp/story/opinion%2Feditorial%2Fwhy-were-gujarat-dates-not-announced-1154160.html", outlet: "Deccan Herald", date: "2022-10-16", type: "editorial" },
      { title: "EC must give explanation why it announced polls for Himachal Pradesh, Gujarat on separate dates: Congress", url: "https://www.deccanherald.com/amp/story/india%2Fec-must-give-explanation-why-it-announced-polls-for-himachal-pradesh-gujarat-on-separate-dates-congress-1159020.html", outlet: "Deccan Herald", date: "2022-11-03", type: "ruling" }
    ]
  },
  {
    id: "bihar-cash",
    place: "Cash transfers while the poll code applied",
    election: "Bihar Assembly election, 2025",
    summary: "The NDA government in Bihar kept paying Rs 10,000 instalments to women under the Mukhyamantri Mahila Rojgar Yojana on 17, 24 and 31 October 2025, after the model code had come into force. The RJD complained to the Election Commission, and no response from the Commission was reported. Jan Suraaj later asked the Supreme Court for fresh polls. In February 2026 the Court declined to hear the plea, saying a losing party had come only after its defeat and the High Court was the right forum.",
    links: [
      { title: "RJD's Manoj Jha accuses Bihar government of violating MCC with pre-poll cash transfers", url: "https://outlookindia.com/elections/rjds-manoj-jha-accuses-bihar-government-of-violating-mcc-with-pre-poll-cash-transfers", outlet: "Outlook", date: "2025-11-01", type: "ruling" },
      { title: "Bihar Assembly Elections 2025 | RJD leader writes to EC, says NDA govt violated MCC by transferring money to women ahead of polls", url: "https://www.deccanherald.com/amp/story/elections%2Fbihar%2Fbihar-assembly-elections-2025-rjd-leader-writes-to-ec-says-nda-govt-violated-mcc-by-transferring-money-to-women-ahead-of-polls-3782982", outlet: "Deccan Herald", date: "2025-11-01", type: "ruling" },
      { title: "Prashant Kishor's party moves SC challenging cash transfers ahead of Bihar polls", url: "https://scroll.in/latest/1090531/scroll_in", outlet: "Scroll", date: "2026-02-05", type: "court" },
      { title: "Supreme Court refuses to entertain plea by Prashant Kishor's party seeking fresh polls in Bihar", url: "https://scroll.in/latest/1090548/scroll_in", outlet: "Scroll", date: "2026-02-06", type: "court" }
    ]
  }
];

/*
  Bogus voters page — content file
  ------------------------------------------------------------
  Each CASE is one place / election. Each case has a list of LINKS.

  LINK fields
    title  – headline as published
    url    – link to the article
    outlet – publication name
    date   – "YYYY-MM-DD", or "YYYY-MM" if only the month is known
    type   – one of the keys in TYPES below
    image  – optional image URL or local path; otherwise a drawing is used
*/

window.TYPES = {
  allegation:    "Allegation",
  investigation: "Investigation",
  ground:        "Ground report",
  official:      "Official response",
  factcheck:     "Fact check"
};

window.CASES = [
  {
    id: "mahadevapura",
    place: "Mahadevapura, Bengaluru",
    election: "Lok Sabha 2024, Bangalore Central",
    summary: "On 7 August 2025, Rahul Gandhi said a six-month Congress review of the Mahadevapura roll found about 1,00,250 problem entries: duplicate voters, invalid addresses, many voters at one address, invalid photos and misuse of Form 6, the new-voter form. Karnataka's Chief Electoral Officer asked him to submit the names under a signed declaration. Election officials who visited one cited address, a room listed with 80 voters, found none of them living there.",
    links: [
      { title: "Rahul Gandhi flags 1 lakh voter 'discrepancies' in one Assembly seat, alleges EC colluded with BJP", url: "https://scroll.in/latest/1085332/rahul-gandhi-flags-over-1-lakh-voter-discrepancies-in-karnataka-alleges-ec-colluding-with-bjp", outlet: "Scroll", date: "2025-08-07", type: "allegation" },
      { title: "Rahul Gandhi alleges over 1 lakh fake voters helped BJP win Bangalore Central", url: "https://www.newslaundry.com/2025/08/07/rahul-gandhi-alleges-over-1-lakh-fake-voters-helped-bjp-win-bangalore-central", outlet: "Newslaundry", date: "2025-08-07", type: "allegation" },
      { title: "Rahul claims proof of poll fraud, BJP-EC 'collusion'; BJP says 'calculated deceit'; EC asks for signed declaration", url: "https://www.theweek.in/wire-updates/national/2025/08/07/del109-ec-ldall-rahul.html", outlet: "The Week (PTI)", date: "2025-08-07", type: "official" },
      { title: "TNM Ground Report: Residents unaware of 80 voters in 10 sq ft Bengaluru room", url: "https://www.thenewsminute.com/amp/story/karnataka/tnm-ground-report-residents-unaware-of-80-voters-in-10-sq-ft-bengaluru-room-2", outlet: "The News Minute", date: "2025-08-09", type: "ground" },
      { title: "EC officials visit Mahadevapura's 'one-room house with 80 voters', find none of them living there", url: "https://www.theweek.in/news/india/2025/08/09/none-of-the-80-listed-voters-staying-in-house-no-35-what-ec-officials-found-in-mahadevapura-after-rahul-gandhi-s-vote-theft-charges.amp.html", outlet: "The Week", date: "2025-08-09", type: "ground" },
      { title: "Officials begin on-ground checks amid Mahadevapura voter fraud claims", url: "https://www.deccanherald.com/india/karnataka/officials-begin-on-ground-checks-amid-mahadevapura-voter-fraud-claims-2-3673183", outlet: "Deccan Herald", date: "2025-08", type: "official" },
      { title: "Mahadevapura voter roll row: Karnataka SEC forwards Congress complaint to ECI", url: "https://www.thenewsminute.com/karnataka/mahadevapura-voter-roll-row-karnataka-sec-forwards-congress-complaint-to-eci", outlet: "The News Minute", date: "2025-08", type: "official" }
    ]
  },
  {
    id: "maharashtra",
    place: "Maharashtra",
    election: "Assembly election, November 2024",
    summary: "The Opposition says the roll grew unusually fast in the five months between the 2024 Lok Sabha and Assembly polls: about 41 lakh names statewide, by Alt News's count of EC data. Newslaundry found 33,295 voters added in Kamthi, where several booth-level officers said they could not trace many of them. An RTI reply showed 33,712 added in the Chief Minister's seat. The Election Commission has rejected the claims of arbitrary additions. Alt News found Rahul Gandhi's '1 crore extra votes' figure was not supported by EC data.",
    links: [
      { title: "EC rejects Congress allegations of arbitrary addition, deletion of voters in Maharashtra", url: "https://scroll.in/latest/1077180/scroll_in", outlet: "Scroll", date: "2024-12", type: "official" },
      { title: "Rahul Gandhi says alleged 'match-fixing' in Maharashtra polls 'blueprint for rigged democracy'", url: "https://scroll.in/latest/1083304/rahul-gandhi-says-alleged-match-fixing-in-maharashtra-polls-blueprint-for-rigged-democracy", outlet: "Scroll", date: "2025-06", type: "allegation" },
      { title: "Evasion won't protect credibility, telling truth would: Rahul Gandhi to EC", url: "https://www.business-standard.com/politics/evasion-won-t-protect-credibility-telling-truth-would-rahul-gandhi-to-ec-125060700661_1.html", outlet: "Business Standard", date: "2025-06-07", type: "allegation" },
      { title: "A flurry of new voters? The curious case of Kamthi, where the Maha BJP chief won", url: "https://www.newslaundry.com/2025/07/03/a-flurry-of-new-voters-the-curious-case-of-kamthi-where-the-maha-bjp-chief-won", outlet: "Newslaundry", date: "2025-07-03", type: "investigation" },
      { title: "Form 6: Rahul Gandhi's Mahadevpura exposé puts focus back on Maharashtra's 40.8 lakh additions", url: "https://thewire.in/government/form-6-rahul-gandhis-mahadevpura-expose-puts-focus-back-on-maharashtras-40-8-lakh-additions", outlet: "The Wire", date: "2025-08-10", type: "investigation" },
      { title: "Over 33,000 voters added, 3,411 deleted from Maharashtra CM Devendra Fadnavis's constituency during state elections: RTI", url: "https://www.outlookindia.com/national/over-33000-voters-added-3411-deleted-from-maharashtra-cm-devendra-fadnaviss-constituency-during-state-elections-rti", outlet: "Outlook", date: "2025-08-23", type: "investigation" },
      { title: "Rahul Gandhi's '1 crore vote surge in Maharashtra' claim not supported by EC data", url: "https://www.altnews.in/rahul-gandhis-1-crore-vote-surge-in-maharashtra-claim-not-supported-by-ec-data/", outlet: "Alt News", date: "2025-08-25", type: "factcheck" }
    ]
  },
  {
    id: "haryana",
    place: "Haryana",
    election: "Assembly election, October 2024",
    summary: "On 5 November 2025, Rahul Gandhi alleged about 25 lakh fraudulent entries on Haryana's rolls. As an example, he showed one woman's photo, which he said was a Brazilian model's, appearing on 22 voter records across 10 booths. The Election Commission called the charges unfounded.",
    links: [
      { title: "Rahul Gandhi claims Brazilian woman 'voted 22 times' in Haryana polls, alleges 25 lakh fake voters", url: "https://scroll.in/latest/1088307/rahul-gandhi-alleges-2024-haryana-polls-were-rigged-flags-25-lakh-fake-voters", outlet: "Scroll", date: "2025-11-05", type: "allegation" },
      { title: "Brazilian photo for 22 voters in Haryana: Rahul says lakhs of votes were rigged", url: "https://www.newslaundry.com/2025/11/05/brazilian-photo-appears-as-22-voters-in-haryana-rahul-says-lakhs-of-votes-were-rigged", outlet: "Newslaundry", date: "2025-11-05", type: "allegation" },
      { title: "Rahul Gandhi's 'H Files' drop: 25 lakh fake voters in Haryana, Brazilian model's photo in IDs", url: "https://www.onmanorama.com/news/india/2025/11/05/rahul-gandhi-election-fraud-allegations.html", outlet: "Onmanorama", date: "2025-11-05", type: "allegation" },
      { title: "Rahul unveils his H-files, EC calls the charge 'unfounded'", url: "https://www.thehitavada.com/Encyc/2025/11/6/rahul-unveils-his-h-files-ec-calls-the-charge-unfounded.html", outlet: "The Hitavada", date: "2025-11-06", type: "official" },
      { title: "ECI trashes Rahul's allegations", url: "https://www.dailypioneer.com/2025/impact/eci-trashes-rahul-s-allegations.html", outlet: "The Pioneer", date: "2025-11", type: "official" }
    ]
  },
  {
    id: "bihar",
    place: "Bihar",
    election: "Special Intensive Revision, 2025",
    summary: "The Reporters' Collective found about 1.88 lakh suspected double registrations in 39 constituencies on the draft roll. It later reported that the ECI had not run its duplicate-detection software, leaving about 14.35 lakh suspect duplicates on the final roll. EC sources said field officers found people from Nepal, Bangladesh and Myanmar on the rolls. Newslaundry found that 0.012% of voters were marked ineligible, and that few of the cases it checked were foreign nationals. In October 2026 the Reporters' Collective reported that the SIR software had no option to mark a voter as a foreign national, and RTI replies from over 100 Bihar officers showed no deleted voter recorded as a non-citizen.",
    links: [
      { title: "BLOs find many voters from Nepal, Bangladesh, Myanmar in Bihar during SIR: EC sources", url: "https://www.deccanherald.com/india/bihar/blos-find-many-voters-from-nepal-bangladesh-myanmar-in-bihar-during-sir-ec-sources-3627949", outlet: "Deccan Herald", date: "2025-07", type: "official" },
      { title: "EC sends notice to Bihar Dy CM Vijay Kumar Sinha for 'possessing' 2 voter cards: Officials", url: "https://www.theweek.in/wire-updates/national/2025/08/10/cal30-bh-deputy-cm-ld-ec.html", outlet: "The Week (PTI)", date: "2025-08-10", type: "official" },
      { title: "1.88 lakh cases of dubious double voters in 39 assembly constituencies of Bihar", url: "https://www.reporters-collective.in/trc/1-88-lakh-cases-of-double-voters-in-39-constituencies", outlet: "The Reporters' Collective", date: "2025-09-01", type: "investigation" },
      { title: "ECI skipped its fraud-busting software, flooding Bihar voter roll with lakhs of suspect duplicates", url: "https://www.reporters-collective.in/trc/eci-skipped-its-fraud-busting-software-lakhs-of-duplicates", outlet: "The Reporters' Collective", date: "2025-10-12", type: "investigation" },
      { title: "Bihar's 'purified' voter list marred by major errors, two separate analyses find", url: "https://thewire.in/government/bihars-purified-voter-list-marred-by-major-errors-two-separate-analyses-find", outlet: "The Wire", date: "2025-10", type: "investigation" },
      { title: "Foreign nationals account for around 0.012% of Bihar's voters, SIR shows", url: "https://www.newslaundry.com/2025/11/04/foreign-nationals-account-for-barely-0012-of-bihars-voters-sir-shows", outlet: "Newslaundry", date: "2025-11-04", type: "ground" },
      { title: "SIR held to remove 'infiltrators' but EC had no option to tag them", url: "https://www.siasat.com/sir-held-to-remove-infiltrators-but-ec-had-no-option-to-tag-them-3559402/", outlet: "Siasat (The Reporters' Collective)", date: "2026-10-16", type: "investigation" }
    ]
  },
  {
    id: "uttar-pradesh",
    place: "Uttar Pradesh",
    election: "Special Intensive Revision, 2026",
    summary: "The Reporters' Collective reports that the final roll added 84.3 lakh voters against 71.38 lakh published applications. It says the details of about 16.18 lakh added voters were not published. The state election office and the ECI did not answer its questions before publication. A separate viral Varanasi list showing one man as 'father' of 48 voters was found to be from a 2023 municipal roll, and to reflect a monastery's guru-disciple custom.",
    links: [
      { title: "The mysterious 16.18 lakh voters added to Uttar Pradesh's roll", url: "https://www.reporters-collective.in/trc/16-18-lakh-voters-added-to-up-roll", outlet: "The Reporters' Collective", date: "2026-10-06", type: "investigation" },
      { title: "Viral voter list shows unmarried seer as father of 50 in Varanasi, Congress smells rat", url: "https://www.deccanherald.com/india/uttarakhand/viral-voter-list-shows-unmarried-seer-as-father-of-50-in-varanasi-congress-smells-rat-3678862", outlet: "Deccan Herald", date: "2025-08", type: "allegation" },
      { title: "Voter list from the 2023 Varanasi municipal elections showing 'Ramkamal Das' as the father of 48 voters is being shared with a misleading claim", url: "https://factly.in/voter-list-from-the-2023-varanasi-municipal-corporation-elections-showing-ramkamal-das-as-the-father-of-48-voters-is-being-shared-with-a-misleading-claim", outlet: "Factly", date: "2025-08", type: "factcheck" }
    ]
  },
  {
    id: "delhi",
    place: "New Delhi constituency",
    election: "Delhi Assembly election, February 2025",
    summary: "Ahead of the poll, AAP said more than 10,500 new-voter applications and 6,167 deletion requests were filed in Arvind Kejriwal's seat in under three weeks. It also alleged that voters were being registered at the addresses of BJP MPs. The district election officer accused AAP of putting pressure on officials.",
    links: [
      { title: "BJP tampering voter list in New Delhi constituency: AAP", url: "https://www.tribuneindia.com/news/delhi/bjp-tampering-voter-list-in-new-delhi-constituency-aap", outlet: "The Tribune", date: "2025-01-06", type: "allegation" },
      { title: "CM Atishi alleges 'voter scam' in New Delhi constituency ahead of assembly polls", url: "https://www.theweek.in/wire-updates/national/2025/01/06/des16-dl-atishi-electoral-roll.html", outlet: "The Week (PTI)", date: "2025-01-06", type: "allegation" },
      { title: "BJP adding voters using addresses of party MPs: Kejriwal to EC", url: "https://www.siasat.com/bjp-adding-voters-using-addresses-of-party-mps-kejriwal-to-ec-3163315/amp/", outlet: "Siasat", date: "2025-01", type: "allegation" },
      { title: "Delhi polls: AAP exerting pressure, claims district election officer", url: "https://scroll.in/latest/1077644/scroll_in", outlet: "Scroll", date: "2025-01", type: "official" },
      { title: "AAP attacks BJP's Rakesh Sinha for voting at 2 places", url: "https://www.tribuneindia.com/news/india/aap-attacks-bjps-rakesh-sinha-for-voting-at-2-places/amp", outlet: "The Tribune", date: "2025", type: "allegation" }
    ]
  },
  {
    id: "thrissur",
    place: "Thrissur, Kerala",
    election: "Lok Sabha 2024",
    summary: "The LDF and UDF allege that Thrissur gained 1.46 lakh voters between 2019 and 2024, about double the rise in other big constituencies, with people registered at vacant flats. Newslaundry found some people listed at Thrissur addresses who did not live there, but limited evidence of large-scale manipulation. The BJP rejects the allegations.",
    links: [
      { title: "Former minister VS Sunil Kumar alleges voter list manipulation in Thrissur; seeks EC probe", url: "https://www.onmanorama.com/news/kerala/2025/08/09/thrissur-voter-list-irregularities.html", outlet: "Onmanorama", date: "2025-08-09", type: "allegation" },
      { title: "'Ghost voters' in high-rises: Behind electoral fraud allegations in Thrissur", url: "https://www.newslaundry.com/2025/08/14/ghost-voters-in-high-rises-behind-electoral-fraud-allegations-in-thrissur", outlet: "Newslaundry", date: "2025-08-14", type: "ground" },
      { title: "EC should respond, not me: BJP MP Suresh Gopi on alleged Thrissur voter list manipulation", url: "https://scroll.in/latest/1085607/scroll_in", outlet: "Scroll", date: "2025-08", type: "allegation" }
    ]
  },
  {
    id: "duplicate-epic",
    place: "Duplicate voter ID numbers",
    election: "West Bengal and other states, 2025",
    summary: "The Trinamool Congress said voters in different states shared the same voter ID (EPIC) number. The Election Commission said this came from overlapping number series that states had allotted by hand, not from fake voters being added. It said it would give each voter a unique number within three months.",
    links: [
      { title: "Poll panel says duplicate ID numbers do not imply fake voters", url: "https://scroll.in/latest/1079783/duplicate-voter-id-numbers-do-not-imply-fake-electors-says-election-commission", outlet: "Scroll", date: "2025-03-02", type: "official" },
      { title: "EC statement on duplicate EPIC numbers confirms anomalies in Bengal: TMC", url: "https://www.business-standard.com/politics/ec-statement-on-duplicate-epic-numbers-confirms-anomalies-in-bengal-tmc-125030200529_1.html", outlet: "Business Standard", date: "2025-03-02", type: "allegation" },
      { title: "Decades-long duplicate voter I-card numbers issue to be addressed in 3 months: Election Commission", url: "https://www.deccanherald.com/india/decades-long-duplicate-voter-i-card-numbers-issue-to-be-addressed-in-3-months-election-commission-3436968", outlet: "Deccan Herald", date: "2025-03", type: "official" }
    ]
  },
  {
    id: "west-bengal",
    place: "West Bengal",
    election: "BJP allegations, 2024–2025",
    summary: "The BJP has alleged lakhs of fake and foreign voters on Bengal's rolls. It told the EC there were 16 lakh in 2024, and its state leader Suvendu Adhikari later put the figure at 1 crore. After the 2025 draft rolls marked about 1.83 lakh 'ghost' entries, the TMC said the numbers undercut the BJP's claim.",
    links: [
      { title: "West Bengal: '16 lakh fake voters,' BJP delegation tells Election Commission ahead of Lok Sabha polls, demands action", url: "https://organiser.org/2024/03/01/224416/bharat/west-bengal-16-lakh-fake-voters-bjp-submits-memorandum-to-poll-chief-ahead-of-lok-sabha-elections-demands-action/", outlet: "Organiser", date: "2024-03-01", type: "allegation" },
      { title: "TMC including fake Rohingya voters for ₹10,000, alleges WB Opposition leader Suvendu Adhikari", url: "https://www.theweek.in/news/india/2025/05/26/west-bengal-kolkata-tmc-including-fake-rohingya-voters-for-10-000-alleges-wb-opposition-leader-suvendu-adhikari.amp.html", outlet: "The Week", date: "2025-05-26", type: "allegation" },
      { title: "TMC says Bengal draft rolls 'puncture' BJP's '1 crore Rohingyas' claim as 'ghost voters' at 1.83L", url: "https://www.theweek.in/wire-updates/national/2025/12/16/cal12-wb-sir-tmc-bjp.html", outlet: "The Week (PTI)", date: "2025-12-16", type: "allegation" }
    ]
  }
];

/*
  VIDEOS — what the "Watch" button shows on every page.
  ------------------------------------------------------------
  To add a video, copy one line and change it:
    id      – the part after "v=" in the YouTube address
              (youtube.com/watch?v=FsVh7z4c6Io  →  "FsVh7z4c6Io";
               for Shorts, the part after /shorts/)
    title   – the video's title
    channel – who published it
    topics  – which pages it belongs on. Use the page names:
              reports, bogus-voters, form-6, form-7, centralisation, opacity,
              double-standards, accountability, selection, supreme-court
              A page with no videos of its own shows all of them.
  The home page shows every video. Order here is the order shown.

  CHANNELS — the "More on YouTube" links at the bottom of the overlay.
*/

window.VIDEOS = [
  // DeKoder — data analysis by Prannoy Roy
  { id: "K5qUfsPBSvQ", channel: "DeKoder", title: "More SIR deletions, bigger BJP swing? Prannoy Roy DeKodes the data", topics: ["bogus-voters", "form-7", "accountability"] },
  { id: "oAoAS0cex1k", channel: "DeKoder", title: "SIR data & voter deletions: observations across constituencies | Prannoy Roy", topics: ["bogus-voters", "form-7", "opacity"] },
  { id: "F9DJsLxdgCY", channel: "DeKoder", title: "Prannoy Roy responds to Bengal Chief Electoral Officer's tweet and BJP's claims on SIR", topics: ["bogus-voters", "accountability"] },
  { id: "e7KtOBVCvt8", channel: "DeKoder", title: "Millions of voters deleted? Prannoy Roy examines SIR and BJP's Bengal landslide", topics: ["bogus-voters", "form-7"] },

  // The Indian Express
  { id: "FsVh7z4c6Io", channel: "The Indian Express", title: "Inside the Election Commission: investigation finds ECs split on key issues", topics: ["reports", "centralisation", "opacity", "selection"] },
  { id: "2tcdWRXoUAM", channel: "The Indian Express", title: "Express Investigation: how two Election Commissioners objected to proceedings", topics: ["reports", "centralisation", "opacity"] },
  { id: "bOFRlJ86OWY", channel: "Indian Express Hindi", title: "चुनाव आयोग में बड़ी गड़बड़ियों का खुलासा | वोटर लिस्ट, Bengal SIR पर खुद चुनाव आयुक्तों ने उठाए सवाल", topics: ["reports", "centralisation"] },
  { id: "qOvgKRtDjJc", channel: "The Indian Express", title: "Rahul Gandhi's 'vote chori' claim: SIT finds ₹80-per-voter deletion scam in Karnataka", topics: ["reports", "form-7", "accountability"] },
  { id: "cXmcT2Cgr-E", channel: "Visanalysis", title: "What Indian Express got wrong in its Election Commission exposé (a critique)", topics: ["reports", "centralisation"] },

  // The commissioners and how they decide
  { id: "qCid9IP1Ovs", channel: "NDTV", title: "Election Commission row: 2 ECs raised 14 objections over SIR in 10 months", topics: ["centralisation", "opacity"] },
  { id: "9fNMvpcAPP0", channel: "ThePrint", title: "Two ECs dissent, questions on legality of SIR process: constitutional, legal issues & nuances", topics: ["centralisation", "selection"] },
  { id: "eGOLsczRdMY", channel: "CNBC-TV18", title: "SC reserves order in case over appointment of CEC, ECs", topics: ["selection", "supreme-court"] },
  { id: "R4djWN5Bjbc", channel: "Mojo Story", title: "As EC closes ranks, Gyanesh Kumar triggers fresh controversy | Supreme Court | Barkha Dutt", topics: ["accountability", "selection", "supreme-court"] },
  { id: "XXWX8WsAfz8", channel: "NDTV", title: "Rahul Gandhi to CEC Gyanesh Kumar: 'Resign, turn approver' over SIR row", topics: ["accountability", "selection", "double-standards"] },

  // Openness and answering questions
  { id: "5HRbUMt6RRI", channel: "The Hindu", title: "Deep rot: on the Election Commission of India's functioning during its SIR", topics: ["accountability", "opacity", "double-standards"] },
  { id: "d4H1tBzz610", channel: "The Wire", title: "Election Commission's new press note on SIR an 'admission of guilt'", topics: ["opacity", "accountability"] },

  // Voter rolls: additions and deletions
  { id: "CKuq5x_6mMc", channel: "The Hindu", title: "Election officials probe mass voter deletion filings in Karnataka", topics: ["form-7"] },
  { id: "fkl_X1e2les", channel: "Business Today", title: "Karnataka SIR row: voters allegedly deleted as 'shifted' or 'dead', India Today investigates", topics: ["form-7", "bogus-voters"] },
  { id: "Lf9bD0Y3yJ4", channel: "The Hindu", title: "Rahul Gandhi alleges voter fraud in Karnataka's Mahadevapura", topics: ["bogus-voters", "form-6"] },
  { id: "xZPIv6cS3RQ", channel: "Rahul Gandhi", title: "Special press conference: 'Vote Chori Factory' (opposition presentation)", topics: ["bogus-voters", "form-7", "double-standards"] },
  { id: "kry-MbAGlz4", channel: "The Lallantop", title: "Rahul Gandhi, विपक्ष के Vote Chori के आरोपों पर Election Commission Press Conference में क्या बोला?", topics: ["bogus-voters", "accountability", "double-standards"] },
  { id: "0dg26Zv3tWk", channel: "The Lallantop", title: "Rahul Gandhi ने Election Commission की कथित Vote Chori पर नया Video जारी कर क्या इल्ज़ाम लगाए?", topics: ["bogus-voters"] },
  { id: "SXt2K1w00t8", channel: "CNN-News18", title: "ECI-SIR row: is Rahul Gandhi's 'vote chori' charge gaining ground?", topics: ["bogus-voters", "double-standards"] },

  // In court
  { id: "KQ1z7XJEA60", channel: "India Today", title: "Supreme Court vs Election Commission over Form 6? | CEC Gyanesh Kumar | SIR row", topics: ["form-6", "supreme-court"] }
];

window.VIDEO_CHANNELS = [
  { name: "The Indian Express", url: "https://www.youtube.com/@indianexpress" },
  { name: "DeKoder", url: "https://www.youtube.com/@DeKoderAI" }
];

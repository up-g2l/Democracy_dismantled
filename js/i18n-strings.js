/*
  Interface text in every supported language.
  ------------------------------------------------------------
  To add a language: add it to SITE_LANGS (code, name in its own script,
  Google Fonts family for the script, and dir "rtl" if it reads right to left),
  then add a block below with the same keys. Missing keys fall back to English.
*/

window.SITE_LANGS = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी",    font: "Noto Sans Devanagari" },
  { code: "bn", name: "বাংলা",     font: "Noto Sans Bengali" },
  { code: "mr", name: "मराठी",     font: "Noto Sans Devanagari" },
  { code: "ta", name: "தமிழ்",     font: "Noto Sans Tamil" },
  { code: "te", name: "తెలుగు",    font: "Noto Sans Telugu" },
  { code: "gu", name: "ગુજરાતી",   font: "Noto Sans Gujarati" },
  { code: "kn", name: "ಕನ್ನಡ",     font: "Noto Sans Kannada" },
  { code: "ml", name: "മലയാളം",    font: "Noto Sans Malayalam" },
  { code: "pa", name: "ਪੰਜਾਬੀ",     font: "Noto Sans Gurmukhi" },
  { code: "or", name: "ଓଡ଼ିଆ",      font: "Noto Sans Oriya" },
  { code: "ur", name: "اردو",      font: "Noto Nastaliq Urdu", dir: "rtl" }
];

window.I18N = {
  en: {
    "nav.reports": "Reports", "nav.topics": "Topics", "nav.watch": "Watch", "nav.posts": "Posts",
    "nav.all": "All topics", "lang.label": "Language",
    "home.tagline": "Reporting on India's election machinery, collected in one place. Pick a topic to see the reports, case by case, with their sources.",
    "home.topics": "Topics", "home.open": "Read", "home.skip": "Skip to topics",
    "home.footer": "Every page links to the original reporting. This site is not affiliated with any publisher or political party.",
    "notice.en": "This page is in English.",
    "notice.link": "Read it in your language with Google Translate",
    "notice.offline": "Machine translation will work once the site is online.",
    "watch.title": "Videos", "watch.topic": "On this topic", "watch.all": "All videos", "watch.close": "Close", "watch.more": "More on YouTube:", "watch.open": "Open on YouTube", "watch.play": "Play",
    "share.label": "Share", "share.copy": "Copy link", "share.copied": "Link copied", "share.insta": "Link copied. Paste it into your Instagram story, post or bio."
  },
  hi: {
    "nav.reports": "रिपोर्टें", "nav.topics": "विषय", "nav.watch": "देखें", "nav.posts": "पोस्ट",
    "nav.all": "सभी विषय", "lang.label": "भाषा",
    "home.tagline": "भारत की चुनाव व्यवस्था पर रिपोर्टिंग, एक ही जगह। कोई विषय चुनें और मामलेवार रिपोर्टें उनके स्रोतों के साथ देखें।",
    "home.topics": "विषय", "home.open": "पढ़ें", "home.skip": "विषयों पर जाएँ",
    "home.footer": "हर पृष्ठ मूल रिपोर्टिंग से जुड़ा है। यह साइट किसी प्रकाशक या राजनीतिक दल से संबद्ध नहीं है।",
    "notice.en": "यह पृष्ठ अंग्रेज़ी में है।",
    "notice.link": "Google Translate से हिन्दी में पढ़ें",
    "notice.offline": "साइट ऑनलाइन होने पर मशीन अनुवाद काम करेगा।",
    "watch.title": "वीडियो", "watch.topic": "इस विषय पर", "watch.all": "सभी वीडियो", "watch.close": "बंद करें", "watch.more": "YouTube पर और:", "watch.open": "YouTube पर खोलें", "watch.play": "चलाएँ",
    "share.label": "साझा करें", "share.copy": "लिंक कॉपी करें", "share.copied": "लिंक कॉपी हो गया", "share.insta": "लिंक कॉपी हो गया। इसे अपनी Instagram स्टोरी, पोस्ट या बायो में पेस्ट करें।"
  },
  bn: {
    "nav.reports": "প্রতিবেদন", "nav.topics": "বিষয়", "nav.watch": "দেখুন", "nav.posts": "পোস্ট",
    "nav.all": "সব বিষয়", "lang.label": "ভাষা",
    "home.tagline": "ভারতের নির্বাচন ব্যবস্থা নিয়ে প্রতিবেদন, এক জায়গায়। একটি বিষয় বেছে নিন, ঘটনা ধরে ধরে প্রতিবেদন ও তার সূত্র দেখুন।",
    "home.topics": "বিষয়", "home.open": "পড়ুন", "home.skip": "বিষয়ে যান",
    "home.footer": "প্রতিটি পাতা মূল প্রতিবেদনের সঙ্গে যুক্ত। এই সাইট কোনো প্রকাশক বা রাজনৈতিক দলের সঙ্গে যুক্ত নয়।",
    "notice.en": "এই পাতাটি ইংরেজিতে।",
    "notice.link": "Google Translate-এ বাংলায় পড়ুন",
    "notice.offline": "সাইট অনলাইনে এলে যন্ত্র-অনুবাদ কাজ করবে।",
    "watch.title": "ভিডিও", "watch.topic": "এই বিষয়ে", "watch.all": "সব ভিডিও", "watch.close": "বন্ধ করুন", "watch.more": "YouTube-এ আরও:", "watch.open": "YouTube-এ খুলুন", "watch.play": "চালান",
    "share.label": "শেয়ার করুন", "share.copy": "লিংক কপি করুন", "share.copied": "লিংক কপি হয়েছে", "share.insta": "লিংক কপি হয়েছে। এটি আপনার Instagram স্টোরি, পোস্ট বা বায়োতে পেস্ট করুন।"
  },
  mr: {
    "nav.reports": "वृत्ते", "nav.topics": "विषय", "nav.watch": "पाहा", "nav.posts": "पोस्ट",
    "nav.all": "सर्व विषय", "lang.label": "भाषा",
    "home.tagline": "भारताच्या निवडणूक यंत्रणेवरील वृत्तांकन, एकाच ठिकाणी. एक विषय निवडा आणि प्रकरणनिहाय वृत्ते त्यांच्या स्रोतांसह पाहा.",
    "home.topics": "विषय", "home.open": "वाचा", "home.skip": "विषयांकडे जा",
    "home.footer": "प्रत्येक पान मूळ वृत्तांकनाशी जोडलेले आहे. ही साइट कोणत्याही प्रकाशक किंवा राजकीय पक्षाशी संलग्न नाही.",
    "notice.en": "हे पान इंग्रजीत आहे.",
    "notice.link": "Google Translate वापरून मराठीत वाचा",
    "notice.offline": "साइट ऑनलाइन आल्यावर यंत्र-अनुवाद चालेल.",
    "watch.title": "व्हिडिओ", "watch.topic": "या विषयावर", "watch.all": "सर्व व्हिडिओ", "watch.close": "बंद करा", "watch.more": "YouTube वर अधिक:", "watch.open": "YouTube वर उघडा", "watch.play": "चालवा",
    "share.label": "शेअर करा", "share.copy": "लिंक कॉपी करा", "share.copied": "लिंक कॉपी झाली", "share.insta": "लिंक कॉपी झाली. ती तुमच्या Instagram स्टोरी, पोस्ट किंवा बायोमध्ये पेस्ट करा."
  },
  ta: {
    "nav.reports": "செய்திகள்", "nav.topics": "தலைப்புகள்", "nav.watch": "காணொளிகள்", "nav.posts": "பதிவுகள்",
    "nav.all": "அனைத்து தலைப்புகள்", "lang.label": "மொழி",
    "home.tagline": "இந்தியத் தேர்தல் அமைப்பு பற்றிய செய்திகள், ஒரே இடத்தில். ஒரு தலைப்பைத் தேர்ந்தெடுத்து, ஆதாரங்களுடன் செய்திகளைப் பாருங்கள்.",
    "home.topics": "தலைப்புகள்", "home.open": "படிக்க", "home.skip": "தலைப்புகளுக்குச் செல்ல",
    "home.footer": "ஒவ்வொரு பக்கமும் மூலச் செய்திகளுடன் இணைக்கப்பட்டுள்ளது. இத்தளம் எந்த வெளியீட்டாளருடனோ அரசியல் கட்சியுடனோ தொடர்புடையதல்ல.",
    "notice.en": "இந்தப் பக்கம் ஆங்கிலத்தில் உள்ளது.",
    "notice.link": "Google Translate மூலம் தமிழில் படிக்க",
    "notice.offline": "தளம் இணையத்தில் வெளியான பின் இயந்திர மொழிபெயர்ப்பு செயல்படும்.",
    "watch.title": "காணொளிகள்", "watch.topic": "இந்தத் தலைப்பில்", "watch.all": "அனைத்து காணொளிகளும்", "watch.close": "மூடு", "watch.more": "YouTube-இல் மேலும்:", "watch.open": "YouTube-இல் திற", "watch.play": "இயக்கு",
    "share.label": "பகிர்", "share.copy": "இணைப்பை நகலெடு", "share.copied": "இணைப்பு நகலெடுக்கப்பட்டது", "share.insta": "இணைப்பு நகலெடுக்கப்பட்டது. உங்கள் Instagram ஸ்டோரி, பதிவு அல்லது பயோவில் ஒட்டவும்."
  },
  te: {
    "nav.reports": "వార్తలు", "nav.topics": "అంశాలు", "nav.watch": "వీడియోలు", "nav.posts": "పోస్టులు",
    "nav.all": "అన్ని అంశాలు", "lang.label": "భాష",
    "home.tagline": "భారత ఎన్నికల వ్యవస్థపై వార్తలు, ఒకే చోట. ఒక అంశాన్ని ఎంచుకుని, ఆధారాలతో సహా వార్తలను చూడండి.",
    "home.topics": "అంశాలు", "home.open": "చదవండి", "home.skip": "అంశాలకు వెళ్ళండి",
    "home.footer": "ప్రతి పేజీ అసలు వార్తలకు లింక్ చేస్తుంది. ఈ సైట్‌కు ఏ ప్రచురణకర్తతో గానీ రాజకీయ పార్టీతో గానీ సంబంధం లేదు.",
    "notice.en": "ఈ పేజీ ఆంగ్లంలో ఉంది.",
    "notice.link": "Google Translate ద్వారా తెలుగులో చదవండి",
    "notice.offline": "సైట్ ఆన్‌లైన్‌లోకి వచ్చాక యంత్ర అనువాదం పనిచేస్తుంది.",
    "watch.title": "వీడియోలు", "watch.topic": "ఈ అంశంపై", "watch.all": "అన్ని వీడియోలు", "watch.close": "మూసివేయి", "watch.more": "YouTubeలో మరిన్ని:", "watch.open": "YouTubeలో తెరవండి", "watch.play": "ప్లే చేయి",
    "share.label": "షేర్ చేయండి", "share.copy": "లింక్ కాపీ చేయండి", "share.copied": "లింక్ కాపీ అయింది", "share.insta": "లింక్ కాపీ అయింది. దాన్ని మీ Instagram స్టోరీ, పోస్ట్ లేదా బయోలో పేస్ట్ చేయండి."
  },
  gu: {
    "nav.reports": "અહેવાલો", "nav.topics": "વિષયો", "nav.watch": "જુઓ", "nav.posts": "પોસ્ટ",
    "nav.all": "બધા વિષયો", "lang.label": "ભાષા",
    "home.tagline": "ભારતની ચૂંટણી વ્યવસ્થા અંગેના અહેવાલો, એક જ સ્થળે. એક વિષય પસંદ કરો અને સ્ત્રોતો સાથે અહેવાલો જુઓ.",
    "home.topics": "વિષયો", "home.open": "વાંચો", "home.skip": "વિષયો પર જાઓ",
    "home.footer": "દરેક પાનું મૂળ અહેવાલો સાથે જોડાયેલું છે. આ સાઇટ કોઈ પ્રકાશક કે રાજકીય પક્ષ સાથે સંકળાયેલી નથી.",
    "notice.en": "આ પાનું અંગ્રેજીમાં છે.",
    "notice.link": "Google Translate વડે ગુજરાતીમાં વાંચો",
    "notice.offline": "સાઇટ ઑનલાઇન થયા પછી મશીન અનુવાદ કામ કરશે.",
    "watch.title": "વિડિયો", "watch.topic": "આ વિષય પર", "watch.all": "બધા વિડિયો", "watch.close": "બંધ કરો", "watch.more": "YouTube પર વધુ:", "watch.open": "YouTube પર ખોલો", "watch.play": "ચલાવો",
    "share.label": "શેર કરો", "share.copy": "લિંક કૉપિ કરો", "share.copied": "લિંક કૉપિ થઈ", "share.insta": "લિંક કૉપિ થઈ. તેને તમારી Instagram સ્ટોરી, પોસ્ટ અથવા બાયોમાં પેસ્ટ કરો."
  },
  kn: {
    "nav.reports": "ವರದಿಗಳು", "nav.topics": "ವಿಷಯಗಳು", "nav.watch": "ವೀಡಿಯೊ", "nav.posts": "ಪೋಸ್ಟ್‌ಗಳು",
    "nav.all": "ಎಲ್ಲ ವಿಷಯಗಳು", "lang.label": "ಭಾಷೆ",
    "home.tagline": "ಭಾರತದ ಚುನಾವಣಾ ವ್ಯವಸ್ಥೆ ಕುರಿತ ವರದಿಗಳು, ಒಂದೇ ಕಡೆ. ಒಂದು ವಿಷಯವನ್ನು ಆರಿಸಿ, ಮೂಲಗಳೊಂದಿಗೆ ವರದಿಗಳನ್ನು ನೋಡಿ.",
    "home.topics": "ವಿಷಯಗಳು", "home.open": "ಓದಿ", "home.skip": "ವಿಷಯಗಳಿಗೆ ಹೋಗಿ",
    "home.footer": "ಪ್ರತಿ ಪುಟವೂ ಮೂಲ ವರದಿಗಳಿಗೆ ಲಿಂಕ್ ಮಾಡುತ್ತದೆ. ಈ ಸೈಟ್ ಯಾವುದೇ ಪ್ರಕಾಶಕ ಅಥವಾ ರಾಜಕೀಯ ಪಕ್ಷದೊಂದಿಗೆ ಸಂಬಂಧ ಹೊಂದಿಲ್ಲ.",
    "notice.en": "ಈ ಪುಟ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿದೆ.",
    "notice.link": "Google Translate ಮೂಲಕ ಕನ್ನಡದಲ್ಲಿ ಓದಿ",
    "notice.offline": "ಸೈಟ್ ಆನ್‌ಲೈನ್ ಆದ ನಂತರ ಯಂತ್ರ ಅನುವಾದ ಕೆಲಸ ಮಾಡುತ್ತದೆ.",
    "watch.title": "ವೀಡಿಯೊಗಳು", "watch.topic": "ಈ ವಿಷಯದ ಬಗ್ಗೆ", "watch.all": "ಎಲ್ಲಾ ವೀಡಿಯೊಗಳು", "watch.close": "ಮುಚ್ಚಿ", "watch.more": "YouTube ನಲ್ಲಿ ಇನ್ನಷ್ಟು:", "watch.open": "YouTube ನಲ್ಲಿ ತೆರೆಯಿರಿ", "watch.play": "ಪ್ಲೇ ಮಾಡಿ",
    "share.label": "ಹಂಚಿಕೊಳ್ಳಿ", "share.copy": "ಲಿಂಕ್ ನಕಲಿಸಿ", "share.copied": "ಲಿಂಕ್ ನಕಲಾಯಿತು", "share.insta": "ಲಿಂಕ್ ನಕಲಾಯಿತು. ಅದನ್ನು ನಿಮ್ಮ Instagram ಸ್ಟೋರಿ, ಪೋಸ್ಟ್ ಅಥವಾ ಬಯೋದಲ್ಲಿ ಅಂಟಿಸಿ."
  },
  ml: {
    "nav.reports": "റിപ്പോർട്ടുകൾ", "nav.topics": "വിഷയങ്ങൾ", "nav.watch": "വീഡിയോ", "nav.posts": "പോസ്റ്റുകൾ",
    "nav.all": "എല്ലാ വിഷയങ്ങളും", "lang.label": "ഭാഷ",
    "home.tagline": "ഇന്ത്യയുടെ തിരഞ്ഞെടുപ്പ് സംവിധാനത്തെക്കുറിച്ചുള്ള റിപ്പോർട്ടുകൾ, ഒരിടത്ത്. ഒരു വിഷയം തിരഞ്ഞെടുത്ത് ഉറവിടങ്ങൾ സഹിതം റിപ്പോർട്ടുകൾ കാണുക.",
    "home.topics": "വിഷയങ്ങൾ", "home.open": "വായിക്കുക", "home.skip": "വിഷയങ്ങളിലേക്ക് പോകുക",
    "home.footer": "ഓരോ താളും യഥാർഥ റിപ്പോർട്ടുകളിലേക്ക് ലിങ്ക് ചെയ്യുന്നു. ഈ സൈറ്റിന് ഏതെങ്കിലും പ്രസാധകനുമായോ രാഷ്ട്രീയ പാർട്ടിയുമായോ ബന്ധമില്ല.",
    "notice.en": "ഈ താൾ ഇംഗ്ലീഷിലാണ്.",
    "notice.link": "Google Translate വഴി മലയാളത്തിൽ വായിക്കുക",
    "notice.offline": "സൈറ്റ് ഓൺലൈനായാൽ യന്ത്ര വിവർത്തനം പ്രവർത്തിക്കും.",
    "watch.title": "വീഡിയോകൾ", "watch.topic": "ഈ വിഷയത്തിൽ", "watch.all": "എല്ലാ വീഡിയോകളും", "watch.close": "അടയ്ക്കുക", "watch.more": "YouTube-ൽ കൂടുതൽ:", "watch.open": "YouTube-ൽ തുറക്കുക", "watch.play": "പ്ലേ ചെയ്യുക",
    "share.label": "പങ്കിടുക", "share.copy": "ലിങ്ക് പകർത്തുക", "share.copied": "ലിങ്ക് പകർത്തി", "share.insta": "ലിങ്ക് പകർത്തി. അത് നിങ്ങളുടെ Instagram സ്റ്റോറി, പോസ്റ്റ് അല്ലെങ്കിൽ ബയോയിൽ ഒട്ടിക്കുക."
  },
  pa: {
    "nav.reports": "ਰਿਪੋਰਟਾਂ", "nav.topics": "ਵਿਸ਼ੇ", "nav.watch": "ਦੇਖੋ", "nav.posts": "ਪੋਸਟਾਂ",
    "nav.all": "ਸਾਰੇ ਵਿਸ਼ੇ", "lang.label": "ਭਾਸ਼ਾ",
    "home.tagline": "ਭਾਰਤ ਦੀ ਚੋਣ ਪ੍ਰਣਾਲੀ ਬਾਰੇ ਰਿਪੋਰਟਾਂ, ਇੱਕੋ ਥਾਂ। ਕੋਈ ਵਿਸ਼ਾ ਚੁਣੋ ਅਤੇ ਸਰੋਤਾਂ ਸਮੇਤ ਰਿਪੋਰਟਾਂ ਦੇਖੋ।",
    "home.topics": "ਵਿਸ਼ੇ", "home.open": "ਪੜ੍ਹੋ", "home.skip": "ਵਿਸ਼ਿਆਂ 'ਤੇ ਜਾਓ",
    "home.footer": "ਹਰ ਪੰਨਾ ਮੂਲ ਰਿਪੋਰਟਾਂ ਨਾਲ ਜੁੜਿਆ ਹੈ। ਇਹ ਸਾਈਟ ਕਿਸੇ ਪ੍ਰਕਾਸ਼ਕ ਜਾਂ ਸਿਆਸੀ ਪਾਰਟੀ ਨਾਲ ਸੰਬੰਧਿਤ ਨਹੀਂ ਹੈ।",
    "notice.en": "ਇਹ ਪੰਨਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੈ।",
    "notice.link": "Google Translate ਨਾਲ ਪੰਜਾਬੀ ਵਿੱਚ ਪੜ੍ਹੋ",
    "notice.offline": "ਸਾਈਟ ਆਨਲਾਈਨ ਹੋਣ 'ਤੇ ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ ਕੰਮ ਕਰੇਗਾ।",
    "watch.title": "ਵੀਡੀਓ", "watch.topic": "ਇਸ ਵਿਸ਼ੇ 'ਤੇ", "watch.all": "ਸਾਰੀਆਂ ਵੀਡੀਓ", "watch.close": "ਬੰਦ ਕਰੋ", "watch.more": "YouTube 'ਤੇ ਹੋਰ:", "watch.open": "YouTube 'ਤੇ ਖੋਲ੍ਹੋ", "watch.play": "ਚਲਾਓ",
    "share.label": "ਸਾਂਝਾ ਕਰੋ", "share.copy": "ਲਿੰਕ ਕਾਪੀ ਕਰੋ", "share.copied": "ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ", "share.insta": "ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ। ਇਸਨੂੰ ਆਪਣੀ Instagram ਸਟੋਰੀ, ਪੋਸਟ ਜਾਂ ਬਾਇਓ ਵਿੱਚ ਪੇਸਟ ਕਰੋ।"
  },
  or: {
    "nav.reports": "ରିପୋର୍ଟ", "nav.topics": "ବିଷୟ", "nav.watch": "ଦେଖନ୍ତୁ", "nav.posts": "ପୋଷ୍ଟ",
    "nav.all": "ସମସ୍ତ ବିଷୟ", "lang.label": "ଭାଷା",
    "home.tagline": "ଭାରତର ନିର୍ବାଚନ ବ୍ୟବସ୍ଥା ଉପରେ ରିପୋର୍ଟ, ଗୋଟିଏ ସ୍ଥାନରେ। ଗୋଟିଏ ବିଷୟ ବାଛନ୍ତୁ ଏବଂ ସୂତ୍ର ସହିତ ରିପୋର୍ଟ ଦେଖନ୍ତୁ।",
    "home.topics": "ବିଷୟ", "home.open": "ପଢ଼ନ୍ତୁ", "home.skip": "ବିଷୟକୁ ଯାଆନ୍ତୁ",
    "home.footer": "ପ୍ରତ୍ୟେକ ପୃଷ୍ଠା ମୂଳ ରିପୋର୍ଟ ସହ ଯୋଡ଼ା ହୋଇଛି। ଏହି ସାଇଟ୍ କୌଣସି ପ୍ରକାଶକ କିମ୍ବା ରାଜନୈତିକ ଦଳ ସହ ଜଡ଼ିତ ନୁହେଁ।",
    "notice.en": "ଏହି ପୃଷ୍ଠାଟି ଇଂରାଜୀରେ ଅଛି।",
    "notice.link": "Google Translate ଦ୍ୱାରା ଓଡ଼ିଆରେ ପଢ଼ନ୍ତୁ",
    "notice.offline": "ସାଇଟ୍ ଅନଲାଇନ୍ ହେବା ପରେ ଯାନ୍ତ୍ରିକ ଅନୁବାଦ କାମ କରିବ।",
    "watch.title": "ଭିଡିଓ", "watch.topic": "ଏହି ବିଷୟରେ", "watch.all": "ସମସ୍ତ ଭିଡିଓ", "watch.close": "ବନ୍ଦ କରନ୍ତୁ", "watch.more": "YouTubeରେ ଅଧିକ:", "watch.open": "YouTubeରେ ଖୋଲନ୍ତୁ", "watch.play": "ଚଲାନ୍ତୁ",
    "share.label": "ସେୟାର କରନ୍ତୁ", "share.copy": "ଲିଙ୍କ କପି କରନ୍ତୁ", "share.copied": "ଲିଙ୍କ କପି ହେଲା", "share.insta": "ଲିଙ୍କ କପି ହେଲା। ଏହାକୁ ଆପଣଙ୍କ Instagram ଷ୍ଟୋରି, ପୋଷ୍ଟ କିମ୍ବା ବାୟୋରେ ପେଷ୍ଟ କରନ୍ତୁ।"
  },
  ur: {
    "nav.reports": "رپورٹیں", "nav.topics": "موضوعات", "nav.watch": "دیکھیں", "nav.posts": "پوسٹس",
    "nav.all": "تمام موضوعات", "lang.label": "زبان",
    "home.tagline": "بھارت کے انتخابی نظام پر رپورٹنگ، ایک ہی جگہ۔ کوئی موضوع منتخب کریں اور ذرائع کے ساتھ رپورٹیں دیکھیں۔",
    "home.topics": "موضوعات", "home.open": "پڑھیں", "home.skip": "موضوعات پر جائیں",
    "home.footer": "ہر صفحہ اصل رپورٹنگ سے جڑا ہے۔ یہ سائٹ کسی ناشر یا سیاسی جماعت سے وابستہ نہیں۔",
    "notice.en": "یہ صفحہ انگریزی میں ہے۔",
    "notice.link": "Google Translate کے ذریعے اردو میں پڑھیں",
    "notice.offline": "سائٹ آن لائن ہونے پر مشینی ترجمہ کام کرے گا۔",
    "watch.title": "ویڈیوز", "watch.topic": "اس موضوع پر", "watch.all": "تمام ویڈیوز", "watch.close": "بند کریں", "watch.more": "YouTube پر مزید:", "watch.open": "YouTube پر کھولیں", "watch.play": "چلائیں",
    "share.label": "شیئر کریں", "share.copy": "لنک کاپی کریں", "share.copied": "لنک کاپی ہو گیا", "share.insta": "لنک کاپی ہو گیا۔ اسے اپنی Instagram اسٹوری، پوسٹ یا بائیو میں پیسٹ کریں۔"
  }
};

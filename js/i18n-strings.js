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
    "notice.offline": "Machine translation will work once the site is online."
  },
  hi: {
    "nav.reports": "रिपोर्टें", "nav.topics": "विषय", "nav.watch": "देखें", "nav.posts": "पोस्ट",
    "nav.all": "सभी विषय", "lang.label": "भाषा",
    "home.tagline": "भारत की चुनाव व्यवस्था पर रिपोर्टिंग, एक ही जगह। कोई विषय चुनें और मामलेवार रिपोर्टें उनके स्रोतों के साथ देखें।",
    "home.topics": "विषय", "home.open": "पढ़ें", "home.skip": "विषयों पर जाएँ",
    "home.footer": "हर पृष्ठ मूल रिपोर्टिंग से जुड़ा है। यह साइट किसी प्रकाशक या राजनीतिक दल से संबद्ध नहीं है।",
    "notice.en": "यह पृष्ठ अंग्रेज़ी में है।",
    "notice.link": "Google Translate से हिन्दी में पढ़ें",
    "notice.offline": "साइट ऑनलाइन होने पर मशीन अनुवाद काम करेगा।"
  },
  bn: {
    "nav.reports": "প্রতিবেদন", "nav.topics": "বিষয়", "nav.watch": "দেখুন", "nav.posts": "পোস্ট",
    "nav.all": "সব বিষয়", "lang.label": "ভাষা",
    "home.tagline": "ভারতের নির্বাচন ব্যবস্থা নিয়ে প্রতিবেদন, এক জায়গায়। একটি বিষয় বেছে নিন, ঘটনা ধরে ধরে প্রতিবেদন ও তার সূত্র দেখুন।",
    "home.topics": "বিষয়", "home.open": "পড়ুন", "home.skip": "বিষয়ে যান",
    "home.footer": "প্রতিটি পাতা মূল প্রতিবেদনের সঙ্গে যুক্ত। এই সাইট কোনো প্রকাশক বা রাজনৈতিক দলের সঙ্গে যুক্ত নয়।",
    "notice.en": "এই পাতাটি ইংরেজিতে।",
    "notice.link": "Google Translate-এ বাংলায় পড়ুন",
    "notice.offline": "সাইট অনলাইনে এলে যন্ত্র-অনুবাদ কাজ করবে।"
  },
  mr: {
    "nav.reports": "वृत्ते", "nav.topics": "विषय", "nav.watch": "पाहा", "nav.posts": "पोस्ट",
    "nav.all": "सर्व विषय", "lang.label": "भाषा",
    "home.tagline": "भारताच्या निवडणूक यंत्रणेवरील वृत्तांकन, एकाच ठिकाणी. एक विषय निवडा आणि प्रकरणनिहाय वृत्ते त्यांच्या स्रोतांसह पाहा.",
    "home.topics": "विषय", "home.open": "वाचा", "home.skip": "विषयांकडे जा",
    "home.footer": "प्रत्येक पान मूळ वृत्तांकनाशी जोडलेले आहे. ही साइट कोणत्याही प्रकाशक किंवा राजकीय पक्षाशी संलग्न नाही.",
    "notice.en": "हे पान इंग्रजीत आहे.",
    "notice.link": "Google Translate वापरून मराठीत वाचा",
    "notice.offline": "साइट ऑनलाइन आल्यावर यंत्र-अनुवाद चालेल."
  },
  ta: {
    "nav.reports": "செய்திகள்", "nav.topics": "தலைப்புகள்", "nav.watch": "காணொளிகள்", "nav.posts": "பதிவுகள்",
    "nav.all": "அனைத்து தலைப்புகள்", "lang.label": "மொழி",
    "home.tagline": "இந்தியத் தேர்தல் அமைப்பு பற்றிய செய்திகள், ஒரே இடத்தில். ஒரு தலைப்பைத் தேர்ந்தெடுத்து, ஆதாரங்களுடன் செய்திகளைப் பாருங்கள்.",
    "home.topics": "தலைப்புகள்", "home.open": "படிக்க", "home.skip": "தலைப்புகளுக்குச் செல்ல",
    "home.footer": "ஒவ்வொரு பக்கமும் மூலச் செய்திகளுடன் இணைக்கப்பட்டுள்ளது. இத்தளம் எந்த வெளியீட்டாளருடனோ அரசியல் கட்சியுடனோ தொடர்புடையதல்ல.",
    "notice.en": "இந்தப் பக்கம் ஆங்கிலத்தில் உள்ளது.",
    "notice.link": "Google Translate மூலம் தமிழில் படிக்க",
    "notice.offline": "தளம் இணையத்தில் வெளியான பின் இயந்திர மொழிபெயர்ப்பு செயல்படும்."
  },
  te: {
    "nav.reports": "వార్తలు", "nav.topics": "అంశాలు", "nav.watch": "వీడియోలు", "nav.posts": "పోస్టులు",
    "nav.all": "అన్ని అంశాలు", "lang.label": "భాష",
    "home.tagline": "భారత ఎన్నికల వ్యవస్థపై వార్తలు, ఒకే చోట. ఒక అంశాన్ని ఎంచుకుని, ఆధారాలతో సహా వార్తలను చూడండి.",
    "home.topics": "అంశాలు", "home.open": "చదవండి", "home.skip": "అంశాలకు వెళ్ళండి",
    "home.footer": "ప్రతి పేజీ అసలు వార్తలకు లింక్ చేస్తుంది. ఈ సైట్‌కు ఏ ప్రచురణకర్తతో గానీ రాజకీయ పార్టీతో గానీ సంబంధం లేదు.",
    "notice.en": "ఈ పేజీ ఆంగ్లంలో ఉంది.",
    "notice.link": "Google Translate ద్వారా తెలుగులో చదవండి",
    "notice.offline": "సైట్ ఆన్‌లైన్‌లోకి వచ్చాక యంత్ర అనువాదం పనిచేస్తుంది."
  },
  gu: {
    "nav.reports": "અહેવાલો", "nav.topics": "વિષયો", "nav.watch": "જુઓ", "nav.posts": "પોસ્ટ",
    "nav.all": "બધા વિષયો", "lang.label": "ભાષા",
    "home.tagline": "ભારતની ચૂંટણી વ્યવસ્થા અંગેના અહેવાલો, એક જ સ્થળે. એક વિષય પસંદ કરો અને સ્ત્રોતો સાથે અહેવાલો જુઓ.",
    "home.topics": "વિષયો", "home.open": "વાંચો", "home.skip": "વિષયો પર જાઓ",
    "home.footer": "દરેક પાનું મૂળ અહેવાલો સાથે જોડાયેલું છે. આ સાઇટ કોઈ પ્રકાશક કે રાજકીય પક્ષ સાથે સંકળાયેલી નથી.",
    "notice.en": "આ પાનું અંગ્રેજીમાં છે.",
    "notice.link": "Google Translate વડે ગુજરાતીમાં વાંચો",
    "notice.offline": "સાઇટ ઑનલાઇન થયા પછી મશીન અનુવાદ કામ કરશે."
  },
  kn: {
    "nav.reports": "ವರದಿಗಳು", "nav.topics": "ವಿಷಯಗಳು", "nav.watch": "ವೀಡಿಯೊ", "nav.posts": "ಪೋಸ್ಟ್‌ಗಳು",
    "nav.all": "ಎಲ್ಲ ವಿಷಯಗಳು", "lang.label": "ಭಾಷೆ",
    "home.tagline": "ಭಾರತದ ಚುನಾವಣಾ ವ್ಯವಸ್ಥೆ ಕುರಿತ ವರದಿಗಳು, ಒಂದೇ ಕಡೆ. ಒಂದು ವಿಷಯವನ್ನು ಆರಿಸಿ, ಮೂಲಗಳೊಂದಿಗೆ ವರದಿಗಳನ್ನು ನೋಡಿ.",
    "home.topics": "ವಿಷಯಗಳು", "home.open": "ಓದಿ", "home.skip": "ವಿಷಯಗಳಿಗೆ ಹೋಗಿ",
    "home.footer": "ಪ್ರತಿ ಪುಟವೂ ಮೂಲ ವರದಿಗಳಿಗೆ ಲಿಂಕ್ ಮಾಡುತ್ತದೆ. ಈ ಸೈಟ್ ಯಾವುದೇ ಪ್ರಕಾಶಕ ಅಥವಾ ರಾಜಕೀಯ ಪಕ್ಷದೊಂದಿಗೆ ಸಂಬಂಧ ಹೊಂದಿಲ್ಲ.",
    "notice.en": "ಈ ಪುಟ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿದೆ.",
    "notice.link": "Google Translate ಮೂಲಕ ಕನ್ನಡದಲ್ಲಿ ಓದಿ",
    "notice.offline": "ಸೈಟ್ ಆನ್‌ಲೈನ್ ಆದ ನಂತರ ಯಂತ್ರ ಅನುವಾದ ಕೆಲಸ ಮಾಡುತ್ತದೆ."
  },
  ml: {
    "nav.reports": "റിപ്പോർട്ടുകൾ", "nav.topics": "വിഷയങ്ങൾ", "nav.watch": "വീഡിയോ", "nav.posts": "പോസ്റ്റുകൾ",
    "nav.all": "എല്ലാ വിഷയങ്ങളും", "lang.label": "ഭാഷ",
    "home.tagline": "ഇന്ത്യയുടെ തിരഞ്ഞെടുപ്പ് സംവിധാനത്തെക്കുറിച്ചുള്ള റിപ്പോർട്ടുകൾ, ഒരിടത്ത്. ഒരു വിഷയം തിരഞ്ഞെടുത്ത് ഉറവിടങ്ങൾ സഹിതം റിപ്പോർട്ടുകൾ കാണുക.",
    "home.topics": "വിഷയങ്ങൾ", "home.open": "വായിക്കുക", "home.skip": "വിഷയങ്ങളിലേക്ക് പോകുക",
    "home.footer": "ഓരോ താളും യഥാർഥ റിപ്പോർട്ടുകളിലേക്ക് ലിങ്ക് ചെയ്യുന്നു. ഈ സൈറ്റിന് ഏതെങ്കിലും പ്രസാധകനുമായോ രാഷ്ട്രീയ പാർട്ടിയുമായോ ബന്ധമില്ല.",
    "notice.en": "ഈ താൾ ഇംഗ്ലീഷിലാണ്.",
    "notice.link": "Google Translate വഴി മലയാളത്തിൽ വായിക്കുക",
    "notice.offline": "സൈറ്റ് ഓൺലൈനായാൽ യന്ത്ര വിവർത്തനം പ്രവർത്തിക്കും."
  },
  pa: {
    "nav.reports": "ਰਿਪੋਰਟਾਂ", "nav.topics": "ਵਿਸ਼ੇ", "nav.watch": "ਦੇਖੋ", "nav.posts": "ਪੋਸਟਾਂ",
    "nav.all": "ਸਾਰੇ ਵਿਸ਼ੇ", "lang.label": "ਭਾਸ਼ਾ",
    "home.tagline": "ਭਾਰਤ ਦੀ ਚੋਣ ਪ੍ਰਣਾਲੀ ਬਾਰੇ ਰਿਪੋਰਟਾਂ, ਇੱਕੋ ਥਾਂ। ਕੋਈ ਵਿਸ਼ਾ ਚੁਣੋ ਅਤੇ ਸਰੋਤਾਂ ਸਮੇਤ ਰਿਪੋਰਟਾਂ ਦੇਖੋ।",
    "home.topics": "ਵਿਸ਼ੇ", "home.open": "ਪੜ੍ਹੋ", "home.skip": "ਵਿਸ਼ਿਆਂ 'ਤੇ ਜਾਓ",
    "home.footer": "ਹਰ ਪੰਨਾ ਮੂਲ ਰਿਪੋਰਟਾਂ ਨਾਲ ਜੁੜਿਆ ਹੈ। ਇਹ ਸਾਈਟ ਕਿਸੇ ਪ੍ਰਕਾਸ਼ਕ ਜਾਂ ਸਿਆਸੀ ਪਾਰਟੀ ਨਾਲ ਸੰਬੰਧਿਤ ਨਹੀਂ ਹੈ।",
    "notice.en": "ਇਹ ਪੰਨਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹੈ।",
    "notice.link": "Google Translate ਨਾਲ ਪੰਜਾਬੀ ਵਿੱਚ ਪੜ੍ਹੋ",
    "notice.offline": "ਸਾਈਟ ਆਨਲਾਈਨ ਹੋਣ 'ਤੇ ਮਸ਼ੀਨੀ ਅਨੁਵਾਦ ਕੰਮ ਕਰੇਗਾ।"
  },
  or: {
    "nav.reports": "ରିପୋର୍ଟ", "nav.topics": "ବିଷୟ", "nav.watch": "ଦେଖନ୍ତୁ", "nav.posts": "ପୋଷ୍ଟ",
    "nav.all": "ସମସ୍ତ ବିଷୟ", "lang.label": "ଭାଷା",
    "home.tagline": "ଭାରତର ନିର୍ବାଚନ ବ୍ୟବସ୍ଥା ଉପରେ ରିପୋର୍ଟ, ଗୋଟିଏ ସ୍ଥାନରେ। ଗୋଟିଏ ବିଷୟ ବାଛନ୍ତୁ ଏବଂ ସୂତ୍ର ସହିତ ରିପୋର୍ଟ ଦେଖନ୍ତୁ।",
    "home.topics": "ବିଷୟ", "home.open": "ପଢ଼ନ୍ତୁ", "home.skip": "ବିଷୟକୁ ଯାଆନ୍ତୁ",
    "home.footer": "ପ୍ରତ୍ୟେକ ପୃଷ୍ଠା ମୂଳ ରିପୋର୍ଟ ସହ ଯୋଡ଼ା ହୋଇଛି। ଏହି ସାଇଟ୍ କୌଣସି ପ୍ରକାଶକ କିମ୍ବା ରାଜନୈତିକ ଦଳ ସହ ଜଡ଼ିତ ନୁହେଁ।",
    "notice.en": "ଏହି ପୃଷ୍ଠାଟି ଇଂରାଜୀରେ ଅଛି।",
    "notice.link": "Google Translate ଦ୍ୱାରା ଓଡ଼ିଆରେ ପଢ଼ନ୍ତୁ",
    "notice.offline": "ସାଇଟ୍ ଅନଲାଇନ୍ ହେବା ପରେ ଯାନ୍ତ୍ରିକ ଅନୁବାଦ କାମ କରିବ।"
  },
  ur: {
    "nav.reports": "رپورٹیں", "nav.topics": "موضوعات", "nav.watch": "دیکھیں", "nav.posts": "پوسٹس",
    "nav.all": "تمام موضوعات", "lang.label": "زبان",
    "home.tagline": "بھارت کے انتخابی نظام پر رپورٹنگ، ایک ہی جگہ۔ کوئی موضوع منتخب کریں اور ذرائع کے ساتھ رپورٹیں دیکھیں۔",
    "home.topics": "موضوعات", "home.open": "پڑھیں", "home.skip": "موضوعات پر جائیں",
    "home.footer": "ہر صفحہ اصل رپورٹنگ سے جڑا ہے۔ یہ سائٹ کسی ناشر یا سیاسی جماعت سے وابستہ نہیں۔",
    "notice.en": "یہ صفحہ انگریزی میں ہے۔",
    "notice.link": "Google Translate کے ذریعے اردو میں پڑھیں",
    "notice.offline": "سائٹ آن لائن ہونے پر مشینی ترجمہ کام کرے گا۔"
  }
};

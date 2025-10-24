import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TRANSLATIONS = {
  en: {
    brand: "Speak Up (AR)",
    tagline: "Speak confidently. Express in Arabic.",
    join: "Join Us",
    aboutTitle: "About the Club",
    aboutText:
      "Speak Up بالعربي is a space to develop public speaking and communication skills in Arabic — workshops, practice sessions, and friendly competitions.",
    activitiesTitle: "Activities",
    activities: [
      { title: "Workshops", desc: "Guided technique sessions and feedback." },
      { title: "Practice Sessions", desc: "Weekly practice with peer feedback." },
      { title: "Competitions", desc: "Friendly contests to build confidence." },
    ],
    contactTitle: "Contact Us",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    footer: "© 2025 Speak Up. All rights reserved.",
  },
  ar: {
    brand: "Speak Up بالعربي",
    tagline: "تكلّم بثقة، عبّر بالعربية.",
    join: "انضم إلينا",
    aboutTitle: "عن النادي",
    aboutText:
      "نادي Speak Up بالعربي هو فضاء لتطوير مهارات التواصل والإلقاء باللغة العربية — ورشات، جلسات تمرين ومسابقات ودّية.",
    activitiesTitle: "الأنشطة",
    activities: [
      { title: "ورشات", desc: "جلسات تقنية موجهة مع ملاحظات بناءة." },
      { title: "جلسات تمرين", desc: "تمارين أسبوعية مع ملاحظات الأقران." },
      { title: "مسابقات", desc: "مسابقات ودّية لبناء الثقة." },
    ],
    contactTitle: "اتصل بنا",
    name: "الاسم",
    email: "البريد",
    message: "رسالتك",
    send: "أرسل",
    footer: "© 2025 Speak Up بالعربي. كل الحقوق محفوظة.",
  },
};

export default function App() {
  const [lang, setLang] = useState("ar");
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = "en";
    }
  }, [lang]);

  const switchLang = () => setLang((s) => (s === "ar" ? "en" : "ar"));

  return (
    <div className={`min-h-screen font-sans bg-gradient-to-b from-purple-900 to-purple-800 text-gray-100`}>
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/assets/logo.png" alt="logo" className="w-14 h-14 rounded-md shadow-lg" />
          <div>
            <div className="text-xl font-bold">{t.brand}</div>
            <div className="text-xs opacity-80">{t.tagline}</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={switchLang}
            className="px-3 py-1 bg-yellow-400 text-purple-900 font-semibold rounded-md shadow-sm"
          >
            {lang === "ar" ? "EN" : "ع"}
          </button>
          <a href="#contact" className="px-4 py-2 bg-transparent border border-yellow-400 rounded-md text-yellow-400 font-medium">
            {t.join}
          </a>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {t.tagline.split('.').map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-4 max-w-xl opacity-90">{t.aboutText}</p>

          <div className="mt-8 flex gap-4">
            <a href="#contact" className="inline-block px-6 py-3 bg-yellow-400 rounded-lg font-semibold text-purple-900 shadow-lg">
              {t.join}
            </a>
            <a href="#activities" className="inline-block px-6 py-3 border border-gray-300/20 rounded-lg">
              {lang === 'ar' ? 'اعرف أكثر' : 'Learn more'}
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex-1 flex justify-center">
          <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-purple-700 to-purple-600 flex items-center justify-center shadow-2xl">
            <img src="/assets/logo.png" alt="logo big" className="w-40 h-40" />
          </div>
        </motion.div>
      </header>

      <section id="about" className="max-w-6xl mx-auto px-6 py-12">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="bg-white/5 rounded-2xl p-8 shadow-inner">
          <h2 className="text-2xl font-bold mb-4">{t.aboutTitle}</h2>
          <p className="leading-relaxed">{t.aboutText}</p>
        </motion.div>
      </section>

      <section id="activities" className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">{t.activitiesTitle}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.activities.map((act, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }} className="rounded-xl bg-white/5 p-6 shadow-lg">
              <div className="text-xl font-semibold mb-2">{act.title}</div>
              <div className="opacity-90 leading-relaxed">{act.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6">{t.contactTitle}</h3>
        <motion.form initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); alert(lang === 'ar' ? 'تم الإرسال! (نموذج تجريبي)' : 'Sent! (demo form)'); }}>
          <input placeholder={t.name} className="p-3 rounded-md bg-white/5 placeholder:opacity-60" required />
          <input placeholder={t.email} className="p-3 rounded-md bg-white/5 placeholder:opacity-60" required type="email" />
          <textarea placeholder={t.message} rows={5} className="p-3 rounded-md bg-white/5 placeholder:opacity-60" required />
          <button className="w-36 px-4 py-2 rounded-md bg-yellow-400 text-purple-900 font-semibold">{t.send}</button>
        </motion.form>

        <div className="mt-6 text-sm opacity-80">{lang === 'ar' ? 'مقر النادي: ولاية تيسمسيلت' : 'Club HQ: Tissemsilt Province'}</div>
      </section>

      <footer className="border-t border-white/5 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="opacity-80">{t.footer}</div>
          <div className="flex items-center gap-3">
            <a href="#" className="px-3 py-2 rounded-md bg-white/5">Instagram</a>
            <a href="#" className="px-3 py-2 rounded-md bg-white/5">Facebook</a>
            <a href="#" className="px-3 py-2 rounded-md bg-white/5">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

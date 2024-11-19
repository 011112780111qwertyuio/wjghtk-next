"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "name": "ahmed"
    }
  },
  ar: {
    translation: {
      "dir": "rtl",
      "section_home_title_home": "مرحبًا!",
      "section_home_subtitle_home": "أين تود أن تذهب؟",
      "section_home_title_tours": "استكشاف العوالم",
      "section_home_subtitle_tours": "الناس لا يأخذون، الرحلات تأخذ الناس",
      "table_section_location": "الموقع",
      "table_section_BokingType": "نوع الحجز",
      "table_section_DateFrom": "من تاريخ",
      "table_section_Guests": "الضيوف",
      "table_section_search": "بحث",
      "table_section_apply": "تقدم",
      "table_section_Adult": "بالغ",
      "table_section_Youth": "شباب",
      "table_section_Children": "أطفال",
      "table_section_type": "نوع",
      "loading": "تحميل",
      "myProfile": "ملفي الشخصي",
      "ReservationsAndTrips": "الحجوزات والرحلات",
      "ChangePassword": "تغيير كلمة المرور",
      "Logout": "تسجيل الخروج",
      "Credit": "ائتمان",
      "login": "تسجيل الدخول",
      "signUp": "سجل الآن",
      "home": "الرئيسية",
      "tours": "الرحلات",
      "pages": "الصفحات",
      "destination": "وجهة",
      "Magazines": "مجلات",
      "contact": "تواصل",
      "logo": "WJHTK",
      "com": "COM.",
      "nedHelp": "تحتاج مساعدة؟",
      "callus": "اتصل بنا",
      "emailForUs": "البريد الإلكتروني لنا",
      "follw": "تابعنا",
      "company": "شركة",
      "aboutUs": "معلومات عنا",
      "CommunityBlog": "مدونة المجتمع",
      "rewards": "المكافآت",
      "WorkWithUs": "العمل معنا",
      "MeettheTeam": "تعرف على الفريق",
      "spport": "يدعم",
      "account": "حساب",
      "Legal": "قانوني",
      "AffiliateBrogram": "البرنامج التابع",
      "PrivacyPolicy": "سياسة الخصوصية",
      "SETTINGS": "إعدادات",
      "Setting1": "إعدادات 2",
      "Setting2": "إعدادات 2",
      "GetUpdatesMore": "احصل على التحديثات والمزيد",
      "ThoughtfulThoughtsToyourinbox": "أفكار مدروسة إلى صندوق الوارد الخاص بك",
      "yourEmail": "البريد الإلكتروني الخاص بك",
      "subscribe": "يشترك",
      "OurHappyClients": "عملائنا السعداء",
      "KnowYourCity": "تعرف مدينتك؟",
      "joinSectionTitle": "انضم إلى أكثر من 2000 من السكان المحليين و1200 مساهم من 3000 مدينة.",
      "BecomeLocalExpert": "كن خبيرًا محليًا",
      "HOLIDAYSALE": "تخفيضات العطلة",
      "specialOffers": "عروض خاصة",
      "Newsletters": "النشرات الإخبارية",
      "TravelTips": "نصائح السفر",
      "seeDealis": "عرض الصفقات",


    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "ar", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
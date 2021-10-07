import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { TRANSLATIONS_IT } from "./it/translations";
import { TRANSLATIONS_EN } from "./en/translations";
 
const resources= {
  en: {
    translation: TRANSLATIONS_EN
  },
  it: {
    translation: TRANSLATIONS_IT
  }
}

i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources: resources
 });
 
// i18n.changeLanguage("it"); //dev'essere il context

export default i18n;
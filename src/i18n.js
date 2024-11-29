import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      navbar: {
        presentation: "Presentation",
        experiences: "Experiences",
        publications: "Publications",
        projects: "Projects",
        contact: "Contact",
      },
      home: {
        welcome: "Welcome to my personal website!",
      },
      contact: {
        title: "Contact Me",
        email: "Email",
        message: "Message",
        send: "Send",
      },
    },
  },
  fr: {
    translation: {
      navbar: {
        presentation: "Présentation",
        experiences: "Expériences",
        publications: "Publications",
        projects: "Projets",
        contact: "Contact",
      },
      home: {
        welcome: "Bienvenue sur mon site personnel!",
      },
      contact: {
        title: "Contactez-moi",
        email: "E-mail",
        message: "Message",
        send: "Envoyer",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

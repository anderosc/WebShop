import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJSON from "../src/i18n/en.json"
import etJSON from "../src/i18n/et.json"
import deJSON from "../src/i18n/de.json"
import finJSON from "../src/i18n/fin.json"




const resources = {

  eng: {
    translation: enJSON
  },
  et: {
    translation: etJSON
  },
  de: {
    translation: deJSON
  },
  fin: {
    translation: finJSON
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "eng", 
    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;
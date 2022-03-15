import Vue from "vue";
import VueI18n from "vue-i18n";
import ar from "./ar.json";
import en from "./en.json";

Vue.use(VueI18n);

let lang = localStorage.getItem("lang") || "en"; 

let messages = {
  ar,
  en,
};

let i18n = new VueI18n({
  lang,
  messages,
});

import VeeValidate from "vee-validate";
import arabic from "./vee-validate/locale/ar.js";
import english from "./vee-validate/locale/en.js";

Vue.use(VeeValidate, {
  fieldsBagName: "veeFields",
  i18nRootKey: "validations",
  i18n,
  dictionary: {
    ar: arabic,
    en: english,
  },
});

i18n.locale = lang;
window.i18n = i18n;
export default i18n;

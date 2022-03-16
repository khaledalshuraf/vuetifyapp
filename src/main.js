import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueI18n from "vue-i18n";
import axios from "axios";

window.axios = axios.create({
  baseURL: "http://admin.magnatechno.com",
});

Vue.config.productionTip = false;
Vue.use(VueI18n);
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

let token = null;
let lang = localStorage.getItem("lang") || "en";
console.log(window.axios);
window.axios.defaults.headers.common = {
  Authorization: `Bearer ${token}`,
  lang: lang,
};

import i18n from "@/language/lang";

import("@/assets/scss/ltr.scss");
if (lang == "ar") import("@/assets/scss/rtl.scss");

import VeeValidate from "vee-validate";
Vue.use(VeeValidate);

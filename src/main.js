import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'



Vue.config.productionTip = false
Vue.use(VueI18n)
new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')


let token = null;
let lang= localStorage.getItem('lang') || 'en';
window.axios.defaults.headers.common = { 'Authorization': `Bearer ${token}`, 'lang': lang};

import i18n from '@/language/lang'

import('@/assets/scss/ltr.scss');
if(lang == 'ar')
import('@/assets/scss/rtl.scss');



import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

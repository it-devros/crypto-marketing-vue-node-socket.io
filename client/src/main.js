import Vue from 'vue';

import VueSVGIcon from 'vue-svgicon';
import VeeValidate from 'vee-validate';
import Notifications from 'vue-notification';
import Vuetify from 'vuetify';
import VueCarousel from 'vue-carousel';
import notificationMixin from '@/shared/mixins/notificationMixin';

import 'vuetify/dist/vuetify.min.css';

import App from './App';
import router from './router';
import { i18n, setLanguage } from './i18n';
import store from './shared/store';


Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.use(VueSVGIcon);
Vue.use(Vuetify, {
  theme: {
    primary: '#00b1a7',
    secondary: '#8fced7',
    accent: '#fad46f',
    error: '#e7695d',
  },
});
Vue.use(Notifications);
Vue.use(VueCarousel);
Vue.mixin(notificationMixin);

setLanguage().then(() => new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App),
}));

/* eslint no-console:0 */
console.log('Hello World from Webpacker');

import Vue from 'vue';
import TurbolinksAdapter from 'vue-turbolinks';
import BootstrapVue from 'bootstrap-vue';
import VueTimeago from 'vue-timeago';
import VueSilentbox from 'vue-silentbox';
import { TrixVue } from 'trix-vue2';
import PostListing from 'components/PostListing';
import Autocomplete from 'components/Autocomplete';

Vue.use(TurbolinksAdapter);
Vue.use(BootstrapVue);
Vue.use(VueTimeago, {
  name: 'timeago',
  locale: 'en-US',
  locales: {
    'en-US': require('vue-timeago/locales/en-US.json')
  }
});
Vue.use(VueSilentbox);

document.addEventListener('turbolinks:load', () => {
  new Vue({
    el: '#app',
    components: {
      TrixVue, PostListing, Autocomplete
    },

    data: function() {
      return {
        vueVersion: Vue.version
      };
    }
  });
});

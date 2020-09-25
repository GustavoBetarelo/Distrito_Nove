import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        dark: '#150433',
        purple: '#30124E',
        green: '#00F0B5',
        orange: '#F67110',
      },
    },
  },
});

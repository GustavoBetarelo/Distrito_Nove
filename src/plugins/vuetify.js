import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#30124E',
        secondary: '#F61067',
        blueBackground: '#0071B9',
        textDefault: '#30233D',
      },
    },
  },
});

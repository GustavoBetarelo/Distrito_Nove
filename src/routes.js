import Vue from 'vue';
import VueRouter from 'vue-router';

import Teste from './pages/teste';

Vue.use(VueRouter);

const routes = [
  {
    path: '/teste',
    name: 'Teste',
    component: Teste,
  },
];

const router = new VueRouter({
  mode: 'history',
  history: true,
  routes,
});

export default router;

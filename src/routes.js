import Vue from 'vue';
import VueRouter from 'vue-router';

import Teste from './pages/teste/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/teste',
    name: 'Teste',
    component: Teste,
  },
  {
    path: '/teste-1',
    name: 'Teste1',
    component: () => import('./components/HelloWorld.vue'),
  },
  {
    path: '/teste-2',
    name: 'Teste2',
    component: () => import('./components/teste/index.vue'),
  },
  {
    path: '/teste-3',
    name: 'Teste3',
    component: () => import('./pages/example'),
  },
  {
    path: '/teste-4',
    name: 'Teste4',
    component: () => import('./pages/teste'),
  },
];

const router = new VueRouter({
  mode: 'history',
  history: true,
  routes,
});

export default router;

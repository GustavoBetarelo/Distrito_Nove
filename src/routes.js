import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/landing'),
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('./pages/SignUp'),
  },
];

const router = new VueRouter({
  mode: 'history',
  history: true,
  routes,
});

export default router;

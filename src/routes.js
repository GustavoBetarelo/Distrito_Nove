import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/pages/landing")
  },
];

const router = new VueRouter({
  mode: "history",
  history: true,
  routes
});

export default router;
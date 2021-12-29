import Vue from "vue";
import VueRouter from "vue-router";
import Cycles from "../views/Cycles.vue";
import Board from "../views/Board.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Cycles",
    component: Cycles
  },
  {
    path: "/board",
    name: "Board",
    component: Board
  },
  {
    path: "/cases",
    name: "Cases",
    // route level code-splitting
    // this generates a separate chunk (cases.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "cases" */ "../views/Cases.vue")
  }
];

const router = new VueRouter({
  // mode: "history",
  base: "/",
  routes
});

export default router;

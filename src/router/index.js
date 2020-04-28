import Vue from "vue";
import VueRouter from "vue-router";
import view_one from "../views/view-one.vue";
import view_two from "../views/view-two.vue";
import view_three from "../views/view-three.vue";
import view_four from "../views/view-four.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "view-one",
    component: view_one,
  },
  {
    path: "/two",
    name: "view-two",
    component: view_two,
  },
  {
    path: "/three",
    name: "view-three",
    component: view_three,
  },
  {
    path: "/four",
    name: "view-four",
    component: view_four,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

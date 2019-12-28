import Vue from "vue";
import VueRouter from "vue-router";
import Block from "../views/Block.vue";
import Mute from "../views/Mute.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/block"
  },
  {
    path: "/block",
    name: "block",
    component: Block
  },
  {
    path: "/mute",
    name: "mute",
    component: Mute
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

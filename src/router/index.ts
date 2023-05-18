import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import aboutPerson from "../views/aboutPerson.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/about",
      name: "aboutPerson",
      component: aboutPerson,
    },
  ],
});

export default router;

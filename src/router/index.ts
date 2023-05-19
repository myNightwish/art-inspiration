import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/views/login/index.vue";
import HomePage from "@/views/home/index.vue";
import DetailPage from "@/views/detail/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/home",
      name: "HomePage",
      component: HomePage,
    },
    {
      path: "/detail",
      name: "DetailPage",
      component: DetailPage,
    },
  ],
});

export default router;

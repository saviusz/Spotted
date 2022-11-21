import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/DashboardView.vue";
import NotFound from "../views/NotFound.vue";
import UsersView from "../views/UsersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
    {
      path: "/",
      name: "home",
      component: Dashboard,
    },
    {
      path: "/users",
      name: "users",
      component: UsersView,
    },
    /*{
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },*/
  ],
});

export default router;

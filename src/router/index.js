import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tareas from "../views/Tareas.vue";
import Days from "../views/Days.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tareas",
    name: "Tareas",
    component: Tareas,
  },
  {
    path: "/days",
    name: "Days",
    component: Days,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

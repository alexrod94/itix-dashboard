import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tareas from "../views/Tareas.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

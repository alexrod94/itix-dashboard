import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/app.css";
import "../node_modules/flowbite/dist/flowbite.js";

createApp(App).use(router).mount("#app");

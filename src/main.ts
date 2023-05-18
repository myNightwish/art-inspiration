import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementUI from "element-plus";
import "element-plus/dist/index.css";
import "./assets/main.css";

import {
  UserFilled,
  InfoFilled,
  MoreFilled,
  HelpFilled,
  List,
  Timer,
  Tools,
  Select,
  Promotion,
  Histogram,
} from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries({
  UserFilled,
  InfoFilled,
  MoreFilled,
  HelpFilled,
  List,
  Timer,
  Tools,
  Select,
  Promotion,
  Histogram,
})) {
  app.component(key, component);
}

app.use(createPinia()).use(router).use(ElementUI);

app.mount("#app");

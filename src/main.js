import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
const pinia = createPinia();
import router from "./routes/index";

createApp(App).use(pinia).use(router).mount("#app");

import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
const pinia = createPinia();
import router from "./routes/index";
import { firebaseConfig } from "./util/firebase";

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(pinia).use(router).mount("#app");

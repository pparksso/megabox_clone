import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layout/Layout.vue";
import MainView from "../views/MainView.vue";
import DetailView from "../views/DetailView.vue";
import MyPageView from "../views/MyPageView.vue";

const routes = [
  {
    path: "/",
    name: "layout",
    component: Layout,
    children: [
      { path: "/", component: MainView },
      { path: "detail/:title", component: DetailView },
      { path: "mypage", component: MyPageView },
    ],
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;

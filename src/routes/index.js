import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
      { path: "/", component: MainView, meta: { requiresAuth: false } },
      { path: "detail/:id", component: DetailView, meta: { requiresAuth: false } },
      { path: "mypage", component: MyPageView, meta: { requiresAuth: true } },
    ],
  },
];
const router = createRouter({ history: createWebHistory(), routes });

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("로그인이 해제되었습니다.");
      next("/");
    }
  } else {
    next();
  }
});

export default router;

import { defineStore } from "pinia";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const authStore = defineStore("auth", {
  state: () => ({
    isLoggedIn: false,
    newToken: "",
    loginModalState: false,
  }),
  actions: {
    /**
     * 로그인 액션
     */
    googleLogin() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then((result) => {
          if (result) {
            const token = result.user.accessToken;
            localStorage.setItem("google_token", token);
            this.newToken = token;
            this.isLoggedIn = true;
            this.loginModalState = false;
          }
        })
        .catch((err) => console.log(err));
    },
    /**
     * 일단.. 킵
     */
    hasTokenAct() {
      if (localStorage.getItem("google_token")) {
        this.isLoggedIn = true;
        this.newToken = localStorage.getItem("google_token");
      } else {
        this.isLoggedIn = false;
      }
    },
    /**
     * 로그인 체크 액션
     */
    authCheck() {
      let auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
    },
    /**
     * 로그아웃 액션
     */
    googleLogout() {
      let auth = getAuth();
      signOut(auth)
        .then(() => {
          this.isLoggedIn = false;
          localStorage.removeItem("google_token");
        })
        .catch((err) => console.log(err));
    },
    /**
     * 로그인 모달창 열기 액션
     */
    loginModalOpen() {
      this.loginModalState = true;
    },
    /**
     * 로그인 모달창 닫기 액션
     */
    loginModalClose() {
      this.loginModalState = false;
    },
  },
});

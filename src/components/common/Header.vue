<template>
  <div class="header">
    <div class="container">
      <router-link to="/">
        <h1 class="logo"><img src="assets/images/common/logo.png" alt="megabox" /></h1>
      </router-link>
      <div class="gnb" v-if="isLoggedIn">
        <ul>
          <li>
            <button @click="logout()"><span>로그아웃</span></button>
          </li>
          <li>
            <router-link to="/mypage"><span>마이페이지</span></router-link>
          </li>
        </ul>
      </div>
      <div class="gnb" v-else>
        <ul>
          <li>
            <button @click="loginOpen()"><span>로그인</span></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { authStore } from "../../store/auth";
const auth = authStore();
const { isLoggedIn } = storeToRefs(auth);

// 로그인 모달창 여는 함수
function loginOpen() {
  auth.loginModalOpen();
}

// 로그아웃
function logout() {
  auth.googleLogout();
}
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background-color: #110d0f;
  height: 91px;
  .container {
    width: 80vw;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    .gnb {
      ul {
        display: flex;
        align-items: center;
        li {
          height: 25px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          span {
            font-size: 18px;
            font-weight: 700;
            color: #fff;
          }
          a {
            padding-bottom: 2px;
          }
        }
      }
    }
  }
}
</style>

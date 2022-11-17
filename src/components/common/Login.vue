<template>
  <div class="loginCover">
    <div class="loginModal">
      <div class="top">
        <div class="inner">
          <span>로그인</span>
          <button @click="close()"><span class="material-icons"> close </span></button>
        </div>
      </div>
      <div class="loginBox">
        <div class="googleLoginBtn">
          <button @click="login()">
            <img src="assets/images/common/google.svg" alt="google" />
            <span>구글 계정으로 로그인</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { authStore } from "/src/store/auth";
const auth = authStore();

//로그인 버튼 클릭 이벤트(구글로그인)
function login() {
  auth.googleLogin();
}

// 모달창 닫기 함수
function close() {
  auth.loginModalClose();
}
</script>
<style lang="scss" scoped>
.loginCover {
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .loginModal {
    background-color: #fff;
    width: 30vw;
    height: 18vw;
    .top {
      width: 100%;
      background-color: #503396;
      .inner {
        width: 95%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 2.5vw;
        span {
          font-size: 18px;
          color: #fff;
          &.material-icons {
            font-size: 24px;
          }
        }
      }
    }
    .loginBox {
      display: flex;
      width: 100%;
      height: calc(100% - 2.5vw);
      justify-content: center;
      align-items: center;
      .googleLoginBtn {
        border: 1px solid #aaa;
        border-radius: 5px;
        cursor: pointer;
        padding: 15px 25px;
        display: flex;
        align-items: center;
        box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
        img {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="heartBox">
<<<<<<< HEAD
    <button class="fullHeart">
      <span class="material-icons"> favorite </span>
    </button>
    <button class="emptyHeart">
      <span class="material-icons"> favorite_border </span>
=======
    <button class="fullHeart" v-if="heartState" @click="fullHeartClick">
      <span
        class="material-icons"
        :style="{
          color: heartColor,
          fontSize: heartSize,
        }"
      >
        favorite
      </span>
    </button>
    <button class="emptyHeart" v-else @click="emptyHeartClick">
      <span
        class="material-icons"
        :style="{
          color: heartColor,
          fontSize: heartSize,
        }"
      >
        favorite_border
      </span>
>>>>>>> mypageCSS
    </button>
  </div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { authStore } from "../../store/auth";
import { heartStore } from "../../store/util";
const heart = heartStore();
const auth = authStore();
const { isLoggedIn } = storeToRefs(auth);
const { heartState } = storeToRefs(heart);
defineProps({
  heartColor: String,
  heartSize: String,
});
//빈 하트 클릭
function emptyHeartClick() {
  if (isLoggedIn.value) {
    //로컬스토리지 생성 -> 스테이트 변경 -> 화면 반영
  } else {
    alert("로그인 후 이용가능합니다.");
  }
}

//꽉찬 하트 클릭
function fullHeartClick() {
  //로컬스토리지에서 삭제 -> 스테이트변경 -> 화면반영
}
</script>
<style lang="scss" scoped>
.heartBox {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

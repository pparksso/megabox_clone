<template>
  <div class="heartBox">
    <button class="fullHeart" v-if="heartState" @click="fullHeartClick">
      <span class="material-icons"> favorite </span>
    </button>
    <button class="emptyHeart" v-else @click="emptyHeartClick">
      <span class="material-icons"> favorite_border </span>
    </button>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { authStore } from "../../store/auth";
import { heartStore } from "../../store/util";
const heart = heartStore();
const auth = authStore();
const { isLoggedIn } = storeToRefs(auth);
const { favoriteState } = storeToRefs(heart);
const props = defineProps({
  heartColor: String,
  heartSize: String,
  movie: Object,
  id: Number,
});
let heartState = ref(false);
//빈 하트 클릭
function emptyHeartClick() {
  if (isLoggedIn.value) {
    heart.emptyHeartAct(props.movie.id, props.movie.title, props.movie.popularity, props.movie.poster_path);
  } else {
    alert("로그인 후 이용가능합니다.");
  }
}

//찬 하트 클릭
function fullHeartClick() {
  heart.fullHeartAct(props.id);
}

//하트 체크 함수
const heartCheck = () => {
  const nowHeart = JSON.parse(localStorage.getItem("favorite"));
  if (nowHeart.length > 0) {
    const result = nowHeart.filter((i) => i.id == props.id);
    if (result.length > 0) {
      result[0].id == props.id ? (heartState.value = true) : (heartState.value = false);
    } else {
      return false;
    }
  } else {
    return false;
  }
};

//처음 로딩 시 하트 상태
watch(isLoggedIn, (nowLogin) => {
  if (nowLogin) {
    heartCheck();
  }
});
if (localStorage.getItem("google_token")) {
  heartCheck();
}

//하트 클릭 시 하트 바꾸기
watch(favoriteState, (newFavoriteState) => {
  const result = newFavoriteState.filter((i) => i.id == props.id);
  if (result.length > 0) {
    result[0].id == props.id ? (heartState.value = true) : (heartState.value = false);
  } else heartState.value = false;
});
</script>
<style lang="scss" scoped>
.heartBox {
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  .material-icons {
    color: #ddd;
    font-size: 28px;
  }
}
</style>

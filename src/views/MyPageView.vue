<template>
  <div class="container">
    <div class="title">
      <h1>나의 영화 목록</h1>
    </div>
    <MovieList />
  </div>
</template>
<script setup>
import MovieList from "../components/myPage/MyMovieList.vue";
</script>
<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 201px - 92px);
  width: 80vw;
  margin: 0 auto;
  padding: 100px 0;
  color: #fff;
  .title {
    width: 100%;
    text-align: center;
    h1 {
      font-size: 34px;
      font-weight: 700;
    }
  }
}
</style>

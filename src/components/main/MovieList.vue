<template>
  <div class="content">박스오피스</div>
  <div class="movie-list">
    <MovieItem />
  </div>
</template>
<script setup>
import MovieItem from './MovieItem.vue';
</script>
<style lang="scss" scoped>
.content {
  color: white;
  margin-top: 50px;
  text-align: center;
}
</style>

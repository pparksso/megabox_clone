<template>
  <div class="movie-list">
    <MovieItem />
  </div>
</template>
<script setup>
import MovieItem from './MovieItem.vue';
</script>
<style lang="scss" scoped>
.movie-list {
  display: flex;
  width: 100%;
}
</style>

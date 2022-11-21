<template>
  <div class="container">
    <MovieList />
  </div>
</template>
<script setup>
import MovieList from "../components/main/MovieList.vue";
import { useMovieStore } from "../store/movie";

const movieStore = useMovieStore();

movieStore.getMovieInfo();
</script>
<style lang="scss" scoped>
.container {
  min-height: calc(100vh - 92px - 201px - 50px);
}
</style>

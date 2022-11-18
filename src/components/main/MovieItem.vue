<template>
  <div v-for="movie in movies" :key="movie.id" class="movie-item">
    {{ movie.title }}
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useMovieStore } from '../../store/movie';

const movieStore = useMovieStore();
const { movies } = storeToRefs(movieStore);

movieStore.getMovieInfo();
</script>
<style lang="scss" scoped>
.movie-item {
  font-size: 2em;
  margin: 15px;
  padding: 15px;
}
</style>

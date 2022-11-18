<template>
  <div class="container">
    <div v-for="movie in movies" :key="movie.id" class="movie-item">
      <img :src="url + movie.poster_path" />
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useMovieStore } from '../../store/movie';

const movieStore = useMovieStore();
const { movies } = storeToRefs(movieStore);
const url = 'https://image.tmdb.org/t/p/w300';
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
}
.movie-item {
  width: 245px;
  height: 300px;
}
</style>

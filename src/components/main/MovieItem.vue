<template>
  <div class="container">
    <div v-for="movie in movies" :key="movie.id" class="movie-item">
      <router-link :to="`detail/${movie.id}`">
        <img :src="url + movie.poster_path" />
      </router-link>
      <div class="heart">
        <Heart :movie="movie" :id="movie.id" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import Heart from '../common/Heart.vue';
import { useMovieStore } from '../../store/movie';

const movieStore = useMovieStore();

const { movies } = storeToRefs(movieStore);
const url = 'https://image.tmdb.org/t/p/w300';

//heart css props
const color = '#ddd';
const fontSize = '28px';
</script>

<style lang="scss" scoped>
.container {
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
  .movie-item {
    height: 300px;
    .heart {
      width: 100%;
      margin-top: 10px;
      padding: 3px 0;
      border: 1px solid #aaa;
    }
  }
}
</style>

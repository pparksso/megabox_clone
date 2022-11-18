<template>
  <MovieList />
</template>
<script setup>
import MovieList from '../components/main/MovieList.vue';
import { useMovieStore } from '../store/movie';

const movieStore = useMovieStore();

movieStore.getMovieInfo();
</script>
<style lang="scss" scoped></style>

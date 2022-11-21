<template>
  <h1>{{ details.title }}</h1>
  <h1>{{ details.overview }}</h1>
</template>
<script setup>
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useMovieStore } from '../store/movie';

const route = useRoute();
const params = route.params;
const movieStore = useMovieStore();
const { details } = storeToRefs(movieStore);
movieStore.actionDetailMovie(params.id);
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>

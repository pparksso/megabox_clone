<template>
  <h1>MovieItem</h1>
</template>
<script setup>
import { useMovieStore } from "../../store/movie";

const movieStore = useMovieStore();
movieStore.getMovieInfo();
</script>
<style lang="scss" scoped></style>

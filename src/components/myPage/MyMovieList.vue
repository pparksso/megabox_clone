<template>
  <div class="myMovieList">
    <ul>
      <li v-for="m in movies" :key="m.id">
        <router-link :to="{ path: '/detail/' + m.id }">
          <div class="imgBox"><img :src="url + m.poster_path" :alt="m.original_title" /></div
        ></router-link>
        <router-link :to="{ path: '/detail/' + m.id }" class="title"
          ><div class="titleBox">
            <span>{{ m.title }}</span>
          </div></router-link
        >
        <div class="scoreBox">
          <span>{{ Math.floor(m.popularity) }}</span>
        </div>
        <div class="heart">
          <Heart :heartColor="color" :heartSize="size" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
import Heart from "../common/Heart.vue";
import { useMovieStore } from "../../store/movie";
import { storeToRefs } from "pinia";
const movieStore = useMovieStore();
const { movies } = storeToRefs(movieStore);
const url = "https://image.tmdb.org/t/p/w200";
const color = "rgb(228, 9, 9)";
const size = "30px";
console.log(movies.value);
</script>
<style lang="scss" scoped>
.myMovieList {
  margin-top: 80px;
  ul {
    li {
      border-bottom: 1px solid #bbb;
      display: flex;
      align-items: center;
      padding: 20px;
      .imgBox {
        margin-right: 30px;
        img {
          width: 100px;
        }
      }
      .title {
        flex-grow: 1;
        .titleBox {
          flex-grow: 1;
          padding-left: 100px;
          text-align: left;
          span {
            font-size: 32px;
            font-weight: 700;
          }
        }
      }
      .scoreBox {
        font-size: 15px;
      }
      .heart {
        margin-left: 20px;
        /* border: 1px solid #555; */
      }
    }
  }
}
</style>

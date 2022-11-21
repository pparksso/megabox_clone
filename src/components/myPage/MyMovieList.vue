<template>
  <div class="myMovieList">
    <ul>
      <li v-for="i in favoriteState" :key="i.id" v-if="favoriteState">
        <router-link :to="{ path: '/detail/' + i.id }">
          <div class="imgBox"><img :src="url + i.poster_path" :alt="i.title" /></div
        ></router-link>
        <router-link :to="{ path: '/detail/' + i.id }" class="title"
          ><div class="titleBox">
            <span>{{ i.title }}</span>
          </div></router-link
        >
        <div class="scoreBox">
          <span>{{ Math.floor(i.popularity) }}</span>
        </div>
        <div class="heart">
          <Heart :movie="i" :id="i.id" />
        </div>
      </li>
      <div class="emptyBox" v-else>나의 영화가 없습니다.</div>
    </ul>
  </div>
</template>
<script setup>
import Heart from "../common/Heart.vue";
import { heartStore } from "../../store/util";
import { storeToRefs } from "pinia";
const heart = heartStore();
const { favoriteState } = storeToRefs(heart);
heart.getFavoritAct();

const url = "https://image.tmdb.org/t/p/w200";
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
    .emptyBox {
      text-align: center;
      font-size: 30px;
      padding-top: 100px;
    }
  }
}
</style>

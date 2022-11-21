import { defineStore } from "pinia";
import movieApi from "../api/movie";

// 임의로 정해놨습니다. 바꿔서 쓰시고 노션에 스토어명 등 정리해놓을 곳을 만들어놓을테니 그곳에 기입부탁드리고, 바뀐부분 써놓을 수 있는 부분도 만들어둘테니 그쪽에 기입 부탁드립니다.
export const useMovieStore = defineStore("movie", {
  state: () => ({
    movies: [],
  }),
  actions: {
    getMovieInfo() {
      movieApi
        .getPopularMovie()
        .then((response) => {
          const movies = response.data.results;
          const result = movies.slice(0, 4);
          this.movies = result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

import { defineStore } from "pinia";

export const heartStore = defineStore("heart", {
  state: () => ({
    favoriteState: [],
  }),
  actions: {
    emptyHeartAct(id, title, popularity, poster_path) {
      let favoriteArr = [];
      let existing = JSON.parse(localStorage.getItem("favorite"));
      const movieArr = { id, title, popularity, poster_path };
      if (existing == null) {
        favoriteArr.push(movieArr);
        localStorage.setItem("favorite", JSON.stringify(favoriteArr));
        this.favoriteState = favoriteArr;
      } else {
        favoriteArr.push(...existing, movieArr);
        localStorage.setItem("favorite", JSON.stringify(favoriteArr));
        this.favoriteState = favoriteArr;
      }
    },
    fullHeartAct(id) {
      const oldArr = JSON.parse(localStorage.getItem("favorite"));
      const newArr = oldArr.filter((i) => {
        return i.id !== id;
      });
      if (newArr.length == 0) localStorage.removeItem("favorite");
      else {
        localStorage.setItem("favorite", JSON.stringify(newArr));
      }
      this.favoriteState = newArr;
    },
    getFavoritAct() {
      const storage = JSON.parse(localStorage.getItem("favorite"));
      this.favoriteState = storage;
    },
  },
});

import { defineStore } from "pinia";

export const heartStore = defineStore("heart", {
  state: () => ({
    heartState: false,
  }),
  actions: {},
});

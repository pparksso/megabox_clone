<template>
  <router-view></router-view>
</template>
<script setup></script>

<style lang="scss">
@import "reset-css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
#app {
  font-family: "Noto Sans KR", sans-serif;
}
body {
  box-sizing: border-box;
  overflow-x: hidden;
  font-weight: 400;
  font-size: 16px;
}
a {
  text-decoration: none;
  color: inherit;
}
button {
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>

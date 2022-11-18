<template>
  <div class="heartBox">
    <button class="fullHeart">
      <span class="material-icons"> favorite </span>
    </button>
    <button class="emptyHeart">
      <span class="material-icons"> favorite_border </span>
    </button>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.heartBox {
  width: 100%;
  margin-top: 10px;
  height: 36px;
  border: 1px solid #555;
  display: flex;
  align-items: center;
  justify-content: center;
  button .material-icons {
    font-size: 20px;
    color: #fff;
  }
}
</style>

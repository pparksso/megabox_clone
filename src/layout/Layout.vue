<template>
  <Header />
  <Login v-if="loginModalState" />
  <router-view></router-view>
  <Footer />
</template>
<script setup>
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import Header from "../components/common/Header.vue";
import Footer from "../components/common/Footer.vue";
import Login from "../components/common/Login.vue";
import { authStore } from "../store/auth";
const auth = authStore();
const { loginModalState } = storeToRefs(auth);

onMounted(() => {
  auth.authCheck();
});
</script>
<style lang="scss" scoped></style>

<template>
  <div class="h-screen main">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
.main {
  background-image: url("./assets/bg-white.jpg");
  background-size: cover;
}
</style>

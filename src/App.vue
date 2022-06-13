<template>
  <div class="main">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
.main {
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 1) 35%,
    rgba(204, 204, 204, 1) 100%
  );
}
</style>

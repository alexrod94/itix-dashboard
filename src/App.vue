<template>
  <div class="main">
    <Navbar :name="name" />
    <router-view @newName="newName"></router-view>
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import { ref } from "vue";
const name = ref("");

function newName(n) {
  name.value = n;
  console.log(name.value);
}
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

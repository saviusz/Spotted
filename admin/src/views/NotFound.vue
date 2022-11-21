<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div :class="$style.container">
    <h1>Not Found (404)</h1>
    <p>We tried hard, but resource you're looking on cannot be found</p>
    <div>Try returning to <RouterLink to="/">dashboard</RouterLink></div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
}
</style>

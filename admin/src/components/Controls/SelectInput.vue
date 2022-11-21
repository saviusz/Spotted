<script setup lang="ts">
import UserBadge from "./UserBadge.vue";
</script>

<template>
  <div :class="$style.container" class="panel hoverable"></div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
}
</style>

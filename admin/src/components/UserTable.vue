<script setup lang="ts">
import UserTableRow from "./UserTableRow.vue";
</script>

<template>
  <div :class="$style.container">
    <UserTableRow
      v-for="index in new Array(6).map((x, i) => i)"
      :key="index"
    ></UserTableRow>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  gap: 8px;
}
</style>

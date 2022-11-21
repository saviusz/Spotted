<script setup lang="ts">
import EventLog from "../components/EventLog.vue";
</script>

<template>
  <div :class="$style.container">
    <EventLog class="panel"></EventLog>
  </div>
</template>

<style module>
.container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  min-height: 100%;
}
</style>

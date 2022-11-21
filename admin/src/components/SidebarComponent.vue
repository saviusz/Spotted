<template>
  <div class="panel sidebar">
    <div class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.sidebar {
  grid-area: side;
}
</style>

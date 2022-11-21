<script setup lang="ts">
interface Props {
  username: string;
  imageUrl: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div :class="$style.container">
    <img :src="imageUrl" :class="$style.avatar" />
    <div :class="$style.username">{{ username }}</div>
  </div>
</template>

<style module>
.container {
  display: inline-flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  gap: 0.4em;
  padding: 4px;

  font-size: 1.1em;
}

.username {
}

.avatar {
  height: 1.1em;

  border-radius: 100%;
}
</style>

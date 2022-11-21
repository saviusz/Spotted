<script setup lang="ts">
import UserBadge from "./UserBadge.vue";
</script>

<template>
  <div :class="$style.container" class="panel hoverable">
    <UserBadge
      image-url="https://via.placeholder.com/150"
      username="testujeapi"
      :class="$style.badge"
    />
    <select>
      <option>Role</option>
    </select>
    <button>Warn</button>
    <button>Ban</button>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
}

.badge {
  font-size: 1.5rem;
}

.container button,
.container select {
  opacity: 0;
}

.container:hover button,
.container:hover select {
  opacity: 1;
}
</style>

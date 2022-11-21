<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  links: NavLink[];
}
const props = defineProps<Props>();
</script>

<script lang="ts">
export class NavLink {
  icon: string;
  name: string;
  path: string;
  constructor(name: string, path: string, icon: string) {
    this.name = name;
    this.path = path;
    this.icon = icon;
  }
}
</script>

<template>
  <nav>
    <RouterLink
      class="nav-elem"
      v-for="link in props.links"
      :key="link.name"
      :to="link.path"
      >{{ link.name }}</RouterLink
    >
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  padding: 10px;
  gap: 8px;
}

.nav-elem {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  height: 3rem;

  padding: 8px;

  border-radius: var(--roundness);

  text-decoration: none;
  color: var(--color--text-3);
}

.nav-elem:hover {
  background-color: var(--color--surface-variant);
  color: var(--color--text-2);
}

.nav-elem.router-link-active {
  background-color: var(--color--primary-surface);
  color: var(--color--primary-surface-on);
  font-weight: 600;
}
</style>

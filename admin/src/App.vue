<script setup lang="ts">
import { RouterView } from "vue-router";
import Sidebar from "./components/SidebarComponent.vue";
import Nav, { NavLink } from "./components/NavComponent.vue";

const links = [
  new NavLink("Dashboard", "/", ""),
  new NavLink("Posts", "/posts", ""),
  new NavLink("Users", "/users", ""),
  new NavLink("Community", "/cummunities", ""),
  new NavLink("Analitics", "/analitics", ""),
];
</script>

<template>
  <Sidebar>
    <Nav :links="links" />
  </Sidebar>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
main {
  overflow: auto;
  min-height: 100%;
}
</style>

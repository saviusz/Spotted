<script setup lang="ts">
import UserTable from "@/components/UserTable.vue";
import EventLog from "../components/EventLog.vue";
</script>

<template>
  <section>
    <h1>Admin</h1>
    <UserTable />
  </section>
  <section>
    <h1>Moderator</h1>
    <UserTable />
  </section>
  <section>
    <h1>User</h1>
    <UserTable />
  </section>
</template>

<style module>
h1 {
  margin-block: 24px 16px;
}
.container {
}
</style>

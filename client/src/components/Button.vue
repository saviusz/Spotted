<template>
  <button class="custom-button">
    <Icon v-if="icon && iconPos == 'before'" :icon="icon" />
    <slot />
    <Icon v-if="icon && iconPos == 'after'" :icon="icon" />
  </button>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

type ButtonPriorities = "high" | "normal" | "low";
type ButtonIconPos = "before" | "none" | "after";

interface Props {
  priority?: ButtonPriorities;
  icon?: string;
  iconPos?: ButtonIconPos;
}

const { priority = "normal", iconPos = "before", icon } = defineProps<Props>();
</script>

<style lang="scss" scoped>
.custom-button {
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  padding: var(--margin--small) var(--margin--big);
  margin: var(--margin--small);

  min-height: var(--size--interactive);
  min-width: var(--size--interactive);

  background: var(--color);
  color: var(--color--text);

  border-radius: var(--radius);

  .text {
  }

  .solid {
  }

  .outline {
  }
}
</style>

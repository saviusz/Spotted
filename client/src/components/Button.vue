<template>
  <button
    class="custom-button"
    :class="{
      solid: priority == 'high',
      text: priority == 'low',
    }"
  >
    <Icon v-if="icon && iconPos == 'before'" :icon="icon" />
    <div><slot /></div>
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
  --gradient: var(--gradient--primary);
  --color: var(--color--primary);
  --color2: var(--color--text-1);

  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;

  padding: var(--margin--small) var(--margin--big);
  margin: var(--margin--small);

  min-height: var(--size--interactive);
  min-width: var(--size--interactive);

  border-radius: var(--radius);

  font-size: 1.1em;

  background: transparent;
  background-origin: border-box;
  color: var(--color);
  border: var(--color--outline) solid 2px;
  cursor: pointer;

  transition: all ease 0.3s;

  &.text {
    border-color: transparent;
    padding-inline: var(--margin--small);
  }

  &.solid {
    background-image: var(--gradient);
    background-color: var(--color);
    color: var(--color2);

    border-color: transparent;

    font-size: 1.3em;

    &:hover {
      opacity: 60%;
      transform: translateY(calc(var(--margin--small) * -1));
    }
  }

  &:hover:not(.solid) {
    background: var(--color--surface-variant);
  }

  &:active {
    color: var(--color--text-4);
  }
}
</style>

<script lang="ts">
export enum ButtonPriority {
  high,
  normal,
  low,
  lowest,
}
</script>

<script setup lang="ts">
interface Props {
  priority?: ButtonPriority;
}

const props = withDefaults(defineProps<Props>(), {
  priority: ButtonPriority.normal,
});
</script>

<template>
  <button
    :class="[
      $style.container,
      props.priority == ButtonPriority.high && $style.high,
    ]"
  >
    <slot>Submit</slot>
  </button>
</template>

<style module>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 2rem;

  border: none;
  border-radius: var(--roundness);

  transition: all 0.5s;
}

.high {
  background-color: var(--color--primary);
  color: var(--color--primary-on);
}

.normal {
  background-color: var(--color--primary-surface);
  color: var(--color--primary-surface-on);
}
</style>

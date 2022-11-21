<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { intlFormatDistance } from "date-fns";
import UserBadge from "./UserBadge.vue";

interface Props {
  user: {
    name: string;
  };
  time: Date;
}

const props = defineProps<Props>();
const teraz = ref(Date.now());

const time = computed(() => intlFormatDistance(props.time, teraz.value));

onMounted(() => {
  window.setInterval(() => {
    teraz.value = Date.now();
  }, 30000);
});
</script>

<template>
  <div :class="$style.container">
    <img src="https://via.placeholder.com/150" :class="$style.eventIcon" />
    <div :class="$style.captions">
      <div :class="$style.date">{{ time }}</div>
      <slot>Done action</slot>
      <UserBadge
        :class="$style.userName"
        :username="props.user.name"
        image-url="https://via.placeholder.com/150"
      />
    </div>
  </div>
</template>

<style module>
.eventIcon {
  height: 3rem;
  aspect-ratio: 1 / 1;
}

.container {
  width: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;

  padding: 0.5em 1em;
  gap: 8px;
}

.captions {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-start;

  flex: 1;

  line-height: 1.4;
}

.userName {
  font-size: 0.8em;
  color: var(--color--text-3);
}

.date {
  font-size: 0.9em;
  color: var(--color--text-2);
}
</style>

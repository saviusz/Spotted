<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import ButtonComponent, {
  ButtonPriority,
} from "./Controls/ButtonComponent.vue";
import EventLogItem from "./EventLogItem.vue";

class Event {
  user: { name: string };
  description: string;
  time: Date;
  constructor(user: string, description: string, time: Date) {
    this.user = { name: user };
    this.description = description;
    this.time = time;
  }
}

let arr = [
  new Event(
    "Admiral",
    "Zbanowano użytkownika <a href='#'>elo</a> Seweryn",
    new Date(2002, 2, 10)
  ),
  new Event("Bańka", "Opis", new Date(2003, 2, 10)),
  new Event("Motyl", "Opis", new Date(2008, 2, 10)),
  new Event("Lufa", "Opis", new Date(2022, 10, 18, 18, 37)),
  new Event("Jager", "Opis", new Date(2102, 2, 10)),
  new Event("Piwo", "Opis", new Date(2004, 2, 10)),
];

function getEvents(count: number) {
  return arr.splice(0, count);
}

const events = ref(getEvents(3));

const showMore = () => {
  events.value.push(...getEvents(2));
};
</script>

<template>
  <section :class="$style.container">
    <EventLogItem
      v-for="event of events"
      :key="event.time + '_' + event.user"
      :user="event.user"
      :time="event.time"
    >
      {{ event.description }}
    </EventLogItem>
    <ButtonComponent :priority="ButtonPriority.high" @click="showMore"
      >Daj</ButtonComponent
    >
  </section>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
</style>

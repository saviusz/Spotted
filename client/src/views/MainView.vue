<template>
  <section id="postForm">
    <div>
      <div class="">Post vs Story</div>
      <img src="@/assets/image.png" alt="" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="buttons">
        <sButton icon="ph:caret-down" icon-pos="after">{{
          $t("universal.show_more_options")
        }}</sButton>
        <sButton class="full">{{ $t("posting.send") }}</sButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import sButton from "../components/Button.vue";
</script>

<style lang="scss" scoped>
#postForm {
  > div {
    display: flex;
    flex-flow: column nowrap;

    justify-content: flex-start;
    align-items: stretch;

    gap: 0.5rem;

    padding: 0.5rem;
  }

  .buttons {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;

    gap: 0.3em;

    .full {
      flex: 1;
    }

    > * {
      margin: 0;
    }
  }
}
</style>

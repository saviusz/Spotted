<template>
  <section id="postForm">
    <div>
      <div class="">Post vs Story</div>
      <img src="@/assets/image.png" alt="" />
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <div class="buttons">
        <sButton priority="low" icon="ph:caret-down" icon-pos="after" class="more_options">{{
          $t("universal.show_more_options")
        }}</sButton>
        <sButton priority="high" icon="ph:envelope" icon-pos="after"  class="send">{{ $t("posting.send") }}</sButton>
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

    margin-inline: var(--margin--normal);

    .more_options{
      flex-grow: 1;
    }

    .send {
      flex-shrink: 0;
      flex-grow: 1;
    }

    > * {
      margin: 0;
    }
  }
}
</style>

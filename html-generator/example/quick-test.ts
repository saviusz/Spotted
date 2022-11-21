import { genInflated } from "../src/main";

console.log(
  genInflated(
    `
<style></style>
<template>
    <div fit-text>**Jest godzina**: {{date("hh:mm")}}</div>
    <div>{{message}}</div>
</template>
    `,
    {
      message: "elo --**mordeczko**-- ty moja",
    }
  )
);

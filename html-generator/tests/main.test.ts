import { genEditable } from "../src/main";

describe("Generate editable", () => {
  test("Real use cases", () => {
    expect(genEditable(`<template>{{message}}</template>`)).toBe(
      `<template><span id="message"></span></template>`
    );
  });
});

import { replaceMarkers } from "../src/utils";

describe("Text Formatting", () => {
  test.each`
    input        | expected
    ${"**elo**"} | ${"<span class='stand-out'>elo</span>"}
    ${"*elo*"}   | ${"<b>elo</b>"}
    ${"_elo_"}   | ${"<i>elo</i>"}
    ${"__elo__"} | ${"<u>elo</u>"}
    ${"--elo--"} | ${"<s>elo</s>"}
    ${"@elo"}    | ${"<b>@elo</b>"}
  `("Format $input", ({ input, expected }) => {
    expect(replaceMarkers(input)).toBe(expected);
  });
});

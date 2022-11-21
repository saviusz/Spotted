interface MarkerSubstitutes {
  strong: string;
  bold: string;
  underline: string;
  italic: string;
  strike: string;
  tag: string;
}

interface replaceMarkersOptions {
  substitutes: MarkerSubstitutes;
}

const defaultSubstitutes: MarkerSubstitutes = {
  strong: "<span class='stand-out'>$1</span>",
  bold: "<b>$1</b>",
  underline: "<u>$1</u>",
  italic: "<i>$1</i>",
  strike: "<s>$1</s>",
  tag: "<b>$1</b>",
};

const replaceMarkers = (
  input: string,
  options: replaceMarkersOptions = { substitutes: defaultSubstitutes }
) =>
  input
    .replaceAll(/\*\*(.*?)\*\*/g, options.substitutes.strong)
    .replaceAll(/\*(.*?)\*/g, options.substitutes.bold)
    .replaceAll(/__(.*?)__/g, options.substitutes.underline)
    .replaceAll(/_(.*?)_/g, options.substitutes.italic)
    .replaceAll(/--(.*?)--/g, options.substitutes.strike)
    .replaceAll(
      /(?<=^|\s)(@[A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/g,
      options.substitutes.tag
    );

export default replaceMarkers;

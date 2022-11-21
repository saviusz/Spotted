import { replaceMarkers } from "./sharedUtils";

class Match {
  position: number;
  content: string;
  get end() {
    return this.position + this.content.length;
  }

  constructor(pos: number, content: string) {
    this.position = pos;
    this.content = content;
  }
}

interface IReplaceParenthesisOpt {
  leftParenthesis: string;
  rightParenthesis: string;
}

export function replaceParenthesis(
  input: string,
  replaceFunct: (match: string) => string,
  options: IReplaceParenthesisOpt = {
    leftParenthesis: "{{",
    rightParenthesis: "}}",
  }
) {
  let matches = [];
  let level = 0;

  let leftPos = -1;

  let i = 0;

  while (i < input.length) {
    let found = true;
    for (let j = 0; j < options.leftParenthesis.length; j++) {
      if (input[i + j] !== options.leftParenthesis[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      level++;
      if (level == 1) leftPos = i;
      i += options.leftParenthesis.length;
      continue;
    }

    found = true;
    for (let j = 0; j < options.rightParenthesis.length; j++) {
      if (input[i + j] !== options.rightParenthesis[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      i += options.rightParenthesis.length;
      if (level == 1) matches.push(new Match(leftPos, input.slice(leftPos, i)));
      level--;
    } else {
      i++;
    }
  }

  let output = "";
  let lastEnd = 0;

  for (const match of matches) {
    output += input.slice(lastEnd, match.position);
    output += replaceFunct(
      match.content.slice(
        options.leftParenthesis.length,
        -options.rightParenthesis.length
      )
    );
    lastEnd = match.end;
  }

  output += input.slice(lastEnd);

  return output;
}

export { replaceMarkers };

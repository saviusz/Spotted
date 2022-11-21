import moment from "moment";
import { VM } from "vm2";
import { replaceParenthesis, replaceMarkers } from "./utils";

export interface templateFields {
  message: string;
}

export const genInflated = (template: string, data: templateFields) => {
  const vm = new VM({
    sandbox: {
      ...data,
      date: (format: string) => moment().format(format),
      message: replaceMarkers(data.message),
    },
    timeout: 200,
  });

  const output = replaceParenthesis(template, (match) => {
    try {
      return vm.run(match);
    } catch (error) {
      console.warn(error);
      return match;
    }
  });

  return output;
};

const editableSubstitutes = new Map<string, string>();
editableSubstitutes.set("message", `<span id="message"></span>`);

export const genEditable = (template: string) => {
  template = replaceParenthesis(
    template,
    (match) => editableSubstitutes.get(match) || ""
  );
  return template;
};

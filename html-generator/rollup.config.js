import typescript from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/sharedUtils.ts",
  output: {
    dir: "output",
    format: "iife",
    name: "htmlGenerator",
    sourcemap: "inline",
  },
  plugins: [typescript(), nodeResolve({ preferBuiltins: true }), commonjs()],
};

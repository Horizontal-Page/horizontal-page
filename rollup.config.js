import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

const packageJSON = require("./package.json");

// add minify if it's not there --> babelPlugin , ["minify"]

export default [
  {
    input: "./src/index.ts",
    output: {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      postcss({
        modules: true,
        sourceMap: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      getBabelOutputPlugin({ presets: ["@babel/preset-env", "minify"] }),
    ],
  },
];

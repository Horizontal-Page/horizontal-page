import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";

const packageJSON = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true,
      minifyInternalExports: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        modules: true,
        sourceMap: true,
      }),
      getBabelOutputPlugin({ presets: ["@babel/preset-env", "minify"] }),
    ],
  },
];

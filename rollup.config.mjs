import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json" assert { type: "json" };

const name = "ChatUI";
const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "./src/main.tsx",
  external: ["react", "react-dom"],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({
      extensions,
      babelHelpers: "runtime",
      include: ["src/**/*"],
    }),
    postcss({
      extensions: [".less"], // Thêm cấu hình để xử lý file .less
      extract: true, // Optional: Tách CSS thành file riêng
      minimize: true, // Optional: Tối ưu hóa CSS đầu ra
    }),
    terser({
      output: { comments: false },
      compress: { drop_console: true },
    }),
  ],
  output: {
    file: `dist/${pkg.name}.js`,
    format: "umd",
    name,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
    intro: `exports.version = '${pkg.version}';`,
  },
};

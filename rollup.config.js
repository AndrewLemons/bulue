import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/index.js",
	output: [
		{
			format: "cjs",
			file: "dist/bulue.js",
			name: "Bulue",
			plugins: [terser()],
		},
		{
			format: "esm",
			file: "dist/bulue.es.js",
			name: "Bulue",
			plugins: [terser()],
		},
	],
	external: ["vue"],
	plugins: [vue(), css({ output: "bulue.css" })],
};

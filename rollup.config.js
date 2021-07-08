import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

export default {
	input: "src/index.js",
	output: [
		{
			format: "umd",
			file: "dist/bulue.js",
			name: "Bulue",
			globals: {
				vue: "Vue",
			},
		},
		{
			format: "esm",
			file: "dist/bulue.es.js",
			name: "Bulue",
		},
	],
	external: ["vue"],
	plugins: [vue(), css({ output: "bulue.css" }), terser()],
};

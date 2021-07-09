import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";

const outputConfig = {
	umd: {
		format: "umd",
		name: "Bulue",
		globals: {
			vue: "Vue",
		},
	},
	esm: {
		format: "esm",
		name: "Bulue",
	},
};

export default {
	input: "src/index.js",
	output: [
		{
			...outputConfig.umd,
			file: "dist/bulue.js",
		},
		{
			...outputConfig.umd,
			file: "dist/bulue.min.js",
			plugins: [terser()],
		},
		{
			...outputConfig.esm,
			file: "dist/bulue.es.js",
		},
		{
			...outputConfig.esm,
			file: "dist/bulue.es.min.js",
			plugins: [terser()],
		},
	],
	external: ["vue"],
	plugins: [vue(), css({ output: "bulue.css" })],
};

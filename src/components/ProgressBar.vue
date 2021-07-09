<template>
	<progress
		:class="['progress', colorClass, `is-${size}`]"
		:value="indeterminate ? '' : value"
		:max="max"
	/>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-progress-bar",
	props: {
		value: {
			type: Number,
			default: 0,
		},
		max: {
			type: Number,
			default: 100,
		},
		color: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "normal",
		},
		indeterminate: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...colorTools,
	},
};
</script>

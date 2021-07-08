<template>
	<progress
		:class="['progress', colorClass, `is-${size}`]"
		:value="isIndeterminate ? '' : value"
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
		isIndeterminate: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...colorTools,
	},
};
</script>

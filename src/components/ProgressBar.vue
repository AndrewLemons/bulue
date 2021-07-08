<template>
	<progress
		:class="['progress', `is-${color}`, `is-${size}`]"
		:value="isIndeterminate ? '' : value"
		:max="max"
	/>
</template>

<script>
export default {
	name: "bulue-progress-bar",
	props: {
		value: Number,
		max: Number,
		color: String,
		size: String,
		isIndeterminate: Boolean,
	},
};
</script>

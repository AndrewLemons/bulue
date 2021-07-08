<template>
	<div class="field">
		<label class="label">{{ label }}</label>
		<div
			:class="[
				'field',
				isGrouped ? 'is-grouped' : '',
				hasAddons ? 'has-addons' : '',
			]"
		>
			<slot />
		</div>
		<p :class="['help', colorClass]">{{ message }}</p>
	</div>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-field",
	props: {
		label: {
			type: String,
			default: "",
		},
		message: {
			type: String,
			default: "",
		},
		color: {
			type: String,
			default: "",
		},
		isGrouped: {
			type: Boolean,
			default: false,
		},
		hasAddons: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...colorTools,
	},
};
</script>

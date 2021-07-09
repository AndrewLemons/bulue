<template>
	<div class="control">
		<div
			:class="[
				'select',
				colorClass,
				`is-${size}`,
				multiple ? 'is-multiple' : '',
				rounded ? 'is-rounded' : '',
				loading ? 'is-loading' : '',
			]"
		>
			<select
				v-model="inputValue"
				:multiple="multiple"
				:size="multiple ? display : undefined"
			>
				<slot />
			</select>
		</div>
	</div>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-select",
	emits: ["update:modelValue"],
	props: {
		modelValue: {
			type: String,
		},
		color: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "normal",
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		display: {
			type: Number,
		},
		rounded: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			inputValue: undefined,
		};
	},
	watch: {
		modelValue(newValue) {
			this.inputValue = newValue;
		},
		inputValue(newValue) {
			if (newValue == this.modelValue) return;
			this.$emit("update:modelValue", newValue);
		},
	},
	computed: {
		...colorTools,
	},
};
</script>

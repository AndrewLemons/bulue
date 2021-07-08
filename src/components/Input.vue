<template>
	<div class="control">
		<input
			:class="[
				'input',
				colorClass,
				`is-${size}`,
				isRounded ? 'is-rounded' : '',
				isLoading ? 'is-loading' : '',
			]"
			:type="type"
			:readonly="isReadonly"
			:placeholder="placeholder"
			v-model="inputValue"
		/>
	</div>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-input",
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
		type: {
			type: String,
			default: "",
		},
		isRounded: {
			type: Boolean,
			default: false,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		isReadonly: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
			default: "",
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

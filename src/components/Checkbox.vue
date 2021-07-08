<template>
	<div class="control">
		<label class="checkbox">
			<input type="checkbox" v-model="inputValue" :disabled="isDisabled" />
			{{ label }}
		</label>
	</div>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-checkbox",
	emits: ["update:modelValue"],
	props: {
		modelValue: {
			type: Boolean,
		},
		label: {
			type: String,
			default: "",
		},
		isDisabled: {
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

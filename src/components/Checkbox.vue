<template>
	<div class="control">
		<label class="checkbox" :disabled="disabled">
			<input type="checkbox" v-model="inputValue" :disabled="disabled" />
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
		disabled: {
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

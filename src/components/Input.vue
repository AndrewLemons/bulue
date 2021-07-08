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
	props: {
		value: {
			type: String,
			default: "",
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
		value(newValue) {
			this.inputValue = newValue;
		},
		inputValue(newValue) {
			if (newValue == this.value) return;
			this.$emit("update:value", newValue);
		},
	},
	computed: {
		...colorTools,
	},
	mounted() {
		this.inputValue = this.value;
	},
};
</script>

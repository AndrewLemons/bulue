<template>
	<div class="control">
		<div
			:class="[
				'select',
				colorClass,
				`is-${size}`,
				isMultiple ? 'is-multiple' : '',
				isRounded ? 'is-rounded' : '',
				isLoading ? 'is-loading' : '',
			]"
		>
			<select
				v-model="inputValue"
				:multiple="isMultiple"
				:size="isMultiple ? display : undefined"
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
		isMultiple: {
			type: Boolean,
			default: false,
		},
		display: {
			type: Number,
		},
		isRounded: {
			type: Boolean,
			default: false,
		},
		isLoading: {
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

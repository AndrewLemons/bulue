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
	props: {
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
		value: {
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

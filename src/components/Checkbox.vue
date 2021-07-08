<template>
	<div class="control">
		<label class="checkbox">
			<input type="checkbox" v-model="inputValue" :disabled="isDisabled" />
			<label>
				<slot />
			</label>
		</label>
	</div>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-checkbox",
	props: {
		value: {
			type: Boolean,
			default: false,
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

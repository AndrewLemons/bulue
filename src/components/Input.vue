<template>
	<div class="control">
		<input
			:class="[
				'input',
				currentColor ? `is-${currentColor}` : '',
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
export default {
	name: "bulue-input",
	props: {
		value: String,
		color: String,
		size: String,
		type: String,
		isRounded: Boolean,
		isLoading: Boolean,
		isReadonly: Boolean,
		placeholder: String,
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
		fieldColor() {
			if (this.$parent?._?.type?.name === "bulue-field") {
				return this.$parent.color;
			}
			return undefined;
		},
		currentColor() {
			if (this.fieldColor) return this.fieldColor;
			return this.color;
		},
	},
	mounted() {
		this.inputValue = this.value;
	},
};
</script>

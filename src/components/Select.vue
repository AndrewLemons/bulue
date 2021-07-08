<template>
	<div class="control">
		<div
			:class="[
				'select',
				currentColor ? `is-${currentColor}` : '',
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
export default {
	name: "bulue-select",
	props: {
		color: String,
		size: String,
		isMultiple: Boolean,
		display: Number,
		isRounded: Boolean,
		isLoading: Boolean,
		value: String,
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

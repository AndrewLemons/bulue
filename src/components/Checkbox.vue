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
export default {
	name: "bulue-checkbox",
	props: {
		value: Boolean,
		isDisabled: Boolean,
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
	mounted() {
		this.inputValue = this.value;
	},
};
</script>

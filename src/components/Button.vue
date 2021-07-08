<template>
	<div class="control">
		<button
			:class="[
				'button',
				currentColor ? `is-${currentColor}` : '',
				`is-${size}`,
				isLight ? 'is-light' : '',
				isOutlined ? 'is-outlined' : '',
				isInverted ? 'is-inverted' : '',
				isRounded ? 'is-rounded' : '',
				isLoading ? 'is-loading' : '',
				isStatic ? 'is-static' : '',
				isFullWidth ? 'is-fullwidth' : '',
			]"
			:disabled="isDisabled"
		>
			<slot />
		</button>
	</div>
</template>

<script>
export default {
	name: "bulue-button",
	props: {
		color: String,
		size: String,
		isLight: Boolean,
		isOutlined: Boolean,
		isInverted: Boolean,
		isRounded: Boolean,
		isLoading: Boolean,
		isStatic: Boolean,
		isDisabled: Boolean,
		isFullWidth: Boolean,
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
};
</script>

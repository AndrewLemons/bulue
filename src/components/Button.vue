<template>
	<div class="control">
		<button
			:class="[
				'button',
				colorClass,
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
import { colorTools } from "../tools";

export default {
	name: "bulue-button",
	props: {
		color: {
			type: String,
			default: "",
		},
		size: {
			type: String,
			default: "normal",
		},
		isLight: {
			type: Boolean,
			default: false,
		},
		isOutlined: {
			type: Boolean,
			default: false,
		},
		isInverted: {
			type: Boolean,
			default: false,
		},
		isRounded: {
			type: Boolean,
			default: false,
		},
		isLoading: {
			type: Boolean,
			default: false,
		},
		isStatic: {
			type: Boolean,
			default: false,
		},
		isDisabled: {
			type: Boolean,
			default: false,
		},
		isFullWidth: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...colorTools,
	},
};
</script>

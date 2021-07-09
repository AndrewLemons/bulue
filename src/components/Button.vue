<template>
	<div class="control">
		<button
			:class="[
				'button',
				colorClass,
				`is-${size}`,
				light ? 'is-light' : '',
				outlined ? 'is-outlined' : '',
				inverted ? 'is-inverted' : '',
				rounded ? 'is-rounded' : '',
				loading ? 'is-loading' : '',
				this.static ? 'is-static' : '',
				fullwidth ? 'is-fullwidth' : '',
			]"
			:disabled="disabled"
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
		light: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		inverted: {
			type: Boolean,
			default: false,
		},
		rounded: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		static: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		fullwidth: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		...colorTools,
	},
};
</script>

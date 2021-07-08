<template>
	<div class="field">
		<label class="label">{{ label }}</label>
		<div
			:class="[
				'field',
				isGrouped ? 'is-grouped' : '',
				hasAddons ? 'has-addons' : '',
			]"
		>
			<slot />
		</div>
		<p :class="['help', color ? `is-${color}` : '']">{{ message }}</p>
	</div>
</template>

<script>
export default {
	name: "bulue-field",
	props: {
		label: String,
		message: String,
		color: String,
		isGrouped: Boolean,
		hasAddons: Boolean,
	},
};
</script>

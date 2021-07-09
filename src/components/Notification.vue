<template>
	<transition name="fade">
		<div
			v-if="modelValue"
			:class="['notification', colorClass, light ? 'is-light' : '']"
		>
			<button v-if="closable" class="delete" @click="close()"></button>
			<slot />
		</div>
	</transition>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-notification",
	emits: ["update:modelValue"],
	props: {
		modelValue: {
			type: Boolean,
		},
		color: {
			type: String,
			default: "",
		},
		light: {
			type: Boolean,
			default: false,
		},
		closable: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		...colorTools,
	},
	methods: {
		close() {
			this.$emit("update:modelValue", false);
		},
	},
};
</script>

<template>
	<transition name="fade">
		<div :class="['modal', modelValue ? 'is-active' : '']" v-if="modelValue">
			<div class="modal-background"></div>
			<div class="b-loader" />
		</div>
	</transition>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-loading",
	emits: ["update:modelValue"],
	props: {
		modelValue: {
			type: Boolean,
		},
	},
	data() {
		return {
			state: false,
		};
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

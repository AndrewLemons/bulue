<template>
	<transition name="fade">
		<div :class="['modal', modelValue ? 'is-active' : '']" v-if="modelValue">
			<div class="modal-background"></div>
			<div class="modal-card" v-if="$slots.header || $slots.footer">
				<header class="modal-card-head">
					<slot name="header" />
				</header>
				<section class="modal-card-body">
					<slot name="body" />
				</section>
				<footer class="modal-card-foot">
					<slot name="footer" />
				</footer>
			</div>
			<div class="modal-content" v-else>
				<slot />
			</div>
			<button
				v-if="closable"
				class="modal-close is-large"
				aria-label="close"
				@click="close"
			></button>
		</div>
	</transition>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-modal",
	emits: ["update:modelValue"],
	props: {
		modelValue: {
			type: Boolean,
		},
		closable: {
			type: Boolean,
			default: true,
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

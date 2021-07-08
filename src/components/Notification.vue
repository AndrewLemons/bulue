<template>
	<transition name="fade">
		<div
			v-if="isActive"
			:class="['notification', colorClass, isLight ? 'is-light' : '']"
		>
			<button v-if="isClosable" class="delete" @click="close()"></button>
			<slot />
		</div>
	</transition>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-notification",
	props: {
		isActive: {
			type: Boolean,
			default: true,
		},
		color: {
			type: String,
			default: "",
		},
		isLight: {
			type: Boolean,
			default: false,
		},
		isClosable: {
			type: Boolean,
			default: true,
		},
	},
	computed: {
		...colorTools,
	},
};
</script>

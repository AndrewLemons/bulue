<template>
	<nav
		:class="[
			'navbar',
			colorClass,
			fixed ? 'is-fixed-top' : '',
			spaced ? 'is-spaced' : '',
			shadow ? 'has-shadow' : '',
		]"
	>
		<div class="navbar-brand">
			<slot name="brand" />
			<a
				:class="['navbar-burger', state ? 'is-active' : '']"
				@click="state = !state"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div :class="['navbar-menu', state ? 'is-active' : '']">
			<div class="navbar-start">
				<slot name="start" />
			</div>

			<div class="navbar-end">
				<slot name="end" />
			</div>
		</div>
	</nav>
</template>

<script>
import { colorTools } from "../tools";

export default {
	name: "bulue-navbar",
	props: {
		color: {
			type: String,
			default: "",
		},
		fixed: {
			type: Boolean,
			default: false,
		},
		spaced: {
			type: Boolean,
			default: false,
		},
		shadow: {
			type: Boolean,
			default: false,
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
};
</script>

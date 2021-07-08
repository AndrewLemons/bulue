<template>
	<transition name="fade">
		<div
			v-if="isActive"
			:class="['notification', `is-${color}`, isLight ? 'is-light' : '']"
		>
			<button
				v-if="isClosable"
				class="delete"
				@click="$emit('update:isActive', false)"
			></button>
			<slot />
		</div>
	</transition>
</template>

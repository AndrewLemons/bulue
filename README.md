# Bulue

Bulue provides simple Bulma components for Vue 3.

## Installation

`npm install bulue`

## Usage

```javascript
import Bulue from "bulue";
myApp.use(Bulue);
```

```html
<template>
	<section class="section">
		<b-field label="Name">
			<b-input v-model:value="name" />
		</b-field>
		<b-button color="success">Done</b-button>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				name: "",
			};
		},
	};
</script>
```

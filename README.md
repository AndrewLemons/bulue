# Bulue

![[components]](https://img.shields.io/badge/components-7-blue)
![[version]](https://img.shields.io/npm/v/bulue)
![[downloads]](https://img.shields.io/npm/dt/bulue)
![[repo stars]](https://img.shields.io/github/stars/andrewlemons/bulue?style=social)

Bulue provides simple Bulma components for Vue 3.

## Installation

`npm install bulue`

## Usage

```javascript
import "bulma/css/bulma.css"; // Customized Bulma works too!
import "bulue/dist/bulue.css";

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

<template>
	<div class="root">
		<nuxt class="nuxt" />
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
	name: 'Layout.Default'
})
export default class extends Vue {}
</script>

<style lang="scss">
:root {
	$accent-hue: 175;
	--accent-color: hsl(#{$accent-hue}, 99%, 53%);
	--base-black: hsl(#{30 + $accent-hue}, 25%, 22%);
	--text-black: hsl(#{45 + $accent-hue}, 8%, 85%);
	--bg: hsl(#{35 + $accent-hue}, 8%, 15%);
}

body,
html {
	overflow: hidden;
}
</style>
<style lang="scss" scoped>
.root {
	background: var(--bg);
	width: 100vw;
	height: 100vh;
	overflow-y: scroll;
}
</style>

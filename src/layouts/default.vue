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
	$accent-hue: 174;
	--accent-color: hsl(#{$accent-hue}, 98%, 53%);
	--base-black: hsl(#{60 + $accent-hue}, 9%, 15%);
	--text-black: hsl(#{60 + $accent-hue}, 4%, 55%);
	--bg: hsl(#{30 + $accent-hue}, 13%, 10%);
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
	overflow: hidden;
}

.nuxt {
	width: 100%;
	min-height: 100%;
}
</style>

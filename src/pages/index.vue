<template>
	<div>
		<p>fuck {{ oh }}</p>
	</div>
</template>

<script>
import { Vue, Component } from 'nuxt-property-decorator'

@Component({ name: 'Page.Index' })
export default class extends Vue {
	get oh() {
		return 100
	}
}
</script>

<style lang="scss" scoped>
p {
	font-size: 16px;
}
</style>

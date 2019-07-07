<template>
	<div></div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
	name: 'Page.Aboutme',
	head: { title: 'aboutme' },
	transition: 'aboutme'
})
export default class extends Vue {}
</script>

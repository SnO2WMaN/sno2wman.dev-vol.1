<template>
	<div class="badge">
		<div class="title">
			<p>{{ title }}</p>
		</div>
		<div class="body" :style="{ 'background-color': color }">
			<p>{{ body }}</p>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({ name: 'Badge' })
export default class extends Vue {
	@Prop({ required: true })
	title!: string

	@Prop({ required: true })
	body!: string

	@Prop({ default: '#FFF' })
	color!: string
}
</script>

<style lang="scss" scoped>
.badge {
	display: flex;
	border-radius: 4px;
	overflow: hidden;
	border: 1px solid #1f1f1f;
}

.title,
.body {
	padding: 4px 6px;
	p {
		font-family: 'IBM Plex Sans', monospace;
		font-size: 0.8rem;
		line-height: 1em;
	}
}

.title {
	background: #1f1f1f;
	& > p {
		color: white;
	}
}
</style>

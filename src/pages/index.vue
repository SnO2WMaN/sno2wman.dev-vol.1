<template>
	<section>
		<div class="card">
			<div class="icon">
				<img src="~/assets/icon.gif" />
			</div>
			<div class="name">
				<h1>SnO2WMaN</h1>
			</div>
			<div class="positions">
				<li
					v-for="(text, i) in [
						'frontend developer',
						'internet explorer',
						'+ pixelart',
						'+ voxelart'
					]"
					:key="i"
					class="position"
				>
					<p>{{ text }}</p>
				</li>
			</div>
			<div class="button">
				<p>more</p>
				<div class="arrow"></div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Badge from '~/components/Badge.vue'

@Component({
	name: 'Page.Index',
	components: {
		Badge
	}
})
export default class extends Vue {
	get oh() {
		return 100
	}
}
</script>

<style lang="scss" scoped>
section {
	width: 100%;
	height: 100vh;
	user-select: none;
	pointer-events: none;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #effaff;
}

.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 64px;
	border: 1px solid #2f2f2f;
	position: relative;
	overflow: hidden;
	&::before {
		content: '';
		size: 100%;
		position: absolute;
		background-image: url('~assets/point_9_black.png');
		opacity: 0.25;
	}
}

.icon {
	display: flex;
	margin-bottom: 24px;
	z-index: 1;
	border: 1px solid #2f2f2f;
	border-radius: 50%;
	overflow: hidden;
	img {
		size: 128px;
	}
}

.name {
	position: relative;
	padding-bottom: 12px;
	z-index: 1;
	h1 {
		color: #2f2f2f;
		font-size: 2rem;
		font-family: 'Barlow', sans-serif;
		letter-spacing: 0.05em;
		line-height: 1em;
	}
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		border-bottom: 1px solid #2f2f2f;
		width: 50%;
	}
}
.positions {
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	z-index: 1;
}

.badges {
	margin-top: 12px;
	z-index: 1;
	display: flex;
	flex-wrap: wrap;
}

.badge {
	&:not(:last-of-type) {
		margin-right: 8px;
	}
}

.position {
	display: flex;
	list-style: none;
	&:not(:last-of-type) {
		margin-bottom: 4px;
	}
	& > p {
		color: #2f2f2f;
		font-size: 0.9rem;
		font-family: 'IBM Plex Mono', monospace;
	}
}

.button {
	width: calc(100% - 24px);
	margin-top: 36px;
	padding: 16px 24px;
	border: 1px solid #2f2f2f;
	display: flex;
	align-items: center;
	overflow: hidden;
	position: relative;
	&::before {
		$size: 16;
		content: '';
		position: absolute;
		width: 100%;
		height: calc(100% + #{$size * 1px});
		top: 0;
		left: 0;
		background-image: url('~assets/stripe_'+$size+'_black.png');
		opacity: 0.15;
		animation: card-pattern 1s linear infinite;
		@keyframes card-pattern {
			from {
				transform: translateY(0);
			}
			to {
				transform: translateY(-#{$size * 1px});
			}
		}
	}
	& > p {
		font-family: 'IBM Plex Mono', monospace;
		line-height: 1em;
		font-size: 0.9rem;
		margin-right: 6px;
	}
	& > .arrow {
		flex-grow: 2;
		border-bottom: 1px solid #2f2f2f;
		position: relative;
		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 6px;
			border-bottom: 1px solid #2f2f2f;
			right: (1px / 1.414);
			top: 0;
		}
		&::before {
			transform: rotate(45deg);
			transform-origin: right center;
		}
		&::after {
			transform: rotate(-45deg);
			transform-origin: right center;
		}
	}
}
</style>

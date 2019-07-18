<template>
	<section>
		<div class="card">
			<div class="pattern" animate></div>
			<div class="covers">
				<div class="cover" animate></div>
				<div class="cover" animate></div>
				<div class="cover" animate></div>
				<div class="cover" animate></div>
			</div>
			<div class="outlines">
				<div class="outline" animate></div>
				<div class="outline" animate></div>
				<div class="outline" animate></div>
				<div class="outline" animate></div>
				<div class="outline" animate></div>
				<div class="outline" animate></div>
				<div class="outline" animate></div>
				<div class="outline" animate></div>
			</div>
			<div class="icon" animate>
				<div class="border" animate></div>
				<div class="border" animate></div>
				<img src="~/assets/icon.gif" animate />
			</div>
			<div class="name" animate>
				<h1>
					<span v-for="c in 'SnO2WMaN'.split('')" :key="c" animate>{{
						c
					}}</span>
				</h1>
				<div class="border" animate></div>
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
					<div class="cover" animate></div>
					<div class="cover" animate></div>
					<p animate>{{ text }}</p>
				</li>
			</div>
			<div class="button" finish @click="move">
				<div class="pattern" animate></div>
				<div class="outlines">
					<div v-for="i in 8" :key="i" class="outline" animate></div>
				</div>
				<p animate>more</p>
				<div class="arrow" animate></div>
				<div class="hoverer" finish></div>
				<div class="link" finish @click="move" />
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
	name: 'Page.Index',
	transition: 'default',
	head: {
		titleTemplate: 'sno2wman.dev'
	}
})
export default class extends Vue {
	mounted() {
		this.$nextTick(() => {
			const animators = Array.from(this.$el.querySelectorAll('[animate]'))
			const finishs = Array.from(this.$el.querySelectorAll('[finish]'))
			if (this.$store.getters.isAnimated('index')) {
				animators.forEach($e => {
					$e.classList.add('animated', 'quick')
				})
				finishs.forEach($e => {
					$e.classList.add('finished')
				})
			} else {
				Promise.all(
					animators.map(
						$e =>
							new Promise(resolve => {
								$e.classList.add('animated')
								$e.addEventListener('transitionend', resolve)
								$e.addEventListener('animationend', resolve)
							})
					)
				).then(() => {
					finishs.forEach($e => {
						$e.classList.add('finished')
						this.$store.commit('animated', 'index')
					})
				})
			}
		})
	}

	get finished(): boolean {
		return this.$store.getters.isAnimated('index')
	}

	move() {
		if (this.$store.getters.isAnimated('index')) this.$router.push('/aboutme')
	}
}
</script>

<style lang="scss" scoped>
$rdb: 0.4s;

.animated.quick {
	transition-duration: 0s !important;
	transition-delay: 0s !important;
	animation-play-state: paused !important;
}

section {
	user-select: none;
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	align-items: center;
}

.covers {
	position: absolute;
	size: 100%;
	top: 0;
	left: 0;
	& > .cover {
		position: absolute;
		size: 100%;
		top: 0;
		left: 0;
		animation-fill-mode: both;
		animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		animation-play-state: paused;
		$delaybase: $rdb + 0.7s;
		$duration: 0.4s;
		$glitchdelay: 0.12s;
		&.animated {
			animation-play-state: running;
		}
		&:nth-of-type(2n + 1) {
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		}
		&:nth-of-type(2n) {
			animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
		}
		&:nth-of-type(1),
		&:nth-of-type(2) {
			animation-duration: $duration;
			background-color: var(--base-black);
		}
		&:nth-of-type(1) {
			animation-name: cover-y-1;
			transform-origin: top;
			animation-delay: $delaybase;
		}
		&:nth-of-type(2) {
			animation-name: cover-y-2;
			animation-delay: $duration + $glitchdelay + $delaybase;
			transform-origin: bottom;
		}
		&:nth-of-type(3),
		&:nth-of-type(4) {
			animation-duration: $duration;
			background-color: var(--accent-color);
		}
		&:nth-of-type(3) {
			animation-name: cover-y-1;
			transform-origin: top;
			animation-delay: $glitchdelay + $delaybase;
		}
		&:nth-of-type(4) {
			animation-name: cover-y-2;
			animation-delay: $duration + $delaybase;
			transform-origin: bottom;
		}
	}
}

@keyframes cover-y-1 {
	from {
		transform: scaleY(0);
	}
	to {
		transform: scaleY(1);
		visibility: hidden;
	}
}
@keyframes cover-y-2 {
	from {
		transform: scaleY(1);
		visibility: hidden;
	}
	to {
		transform: scaleY(0);
		visibility: visible;
	}
}
@keyframes cover-x-1 {
	from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
		visibility: hidden;
	}
}
@keyframes cover-x-2 {
	from {
		transform: scaleX(1);
		visibility: hidden;
	}
	to {
		transform: scaleX(0);
		visibility: visible;
	}
}

.card {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 64px;
	position: relative;
	overflow: hidden;
}

.card > .pattern {
	content: '';
	size: 100%;
	position: absolute;
	background-image: url('~assets/point_9_white.png');
	opacity: 0;
	transform: scale(1.25);
	transition: 1.5s opacity, 1.5s transform;
	transition-timing-function: linear;
	transition-delay: 0.5s + $rdb;
	&.animated {
		transform: scale(1);
		opacity: 0.125;
	}
}

.outlines {
	position: absolute;
	left: 0;
	top: 0;
	size: 100%;
	overflow: hidden;
}

.outline {
	position: absolute;
	size: 100%;
	border: 1px;
	&:nth-of-type(4n + 1) {
		border-top-style: solid;
		transform-origin: right;
		transform: translateX(100%);
	}
	&:nth-of-type(4n + 2) {
		border-left-style: solid;
		transform-origin: top;
		transform: translateY(-100%);
	}
	&:nth-of-type(4n + 3) {
		border-bottom-style: solid;
		transform-origin: left;
		transform: translateX(-100%);
	}
	&:nth-of-type(4n + 4) {
		border-right-style: solid;
		transform-origin: bottom;
		transform: translateY(100%);
	}
	transition: transform;
	$bd: 0.3s;
	$go: 0.75s;
	$delaybase: $rdb;
	@for $i from 1 through 4 {
		&:nth-of-type(#{$i}) {
			border-color: var(--accent-color);
			transition-duration: $bd;
			transition-delay: ($i - 1) * $bd + $delaybase;
			transition-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
		}
	}
	@for $i from 1 through 4 {
		&:nth-of-type(#{$i + 4}) {
			border-color: var(--base-black);
			transition-duration: $go;
			transition-timing-function: cubic-bezier(1, 0, 0, 1);
			transition-delay: ($i - 1) * $bd + $delaybase;
		}
	}
	&.animated {
		&:nth-of-type(2n + 1) {
			transform: translateX(0);
		}
		&:nth-of-type(2n) {
			transform: translateY(0);
		}
	}
}

.icon {
	display: flex;
	margin-bottom: 24px;
	z-index: 1;
	border-radius: 50%;
	overflow: hidden;
	pointer-events: none;
	position: relative;
	$delaybase: $rdb + 0.8s;
	& > .border {
		position: absolute;
		top: 0;
		left: 0;
		size: 100%;
		border: 64px solid;
		transform: scale(0);
		transition: transform 0.5s cubic-bezier(0.95, 0.05, 0.795, 0.035),
			border-width 0.5s cubic-bezier(0.19, 1, 0.265, 0.945);
		border-radius: 50%;
		z-index: 1;
		&:nth-of-type(1) {
			border-color: var(--accent-color);
			transition-delay: (0s + $delaybase), (0.5s + $delaybase);
		}
		&:nth-of-type(2) {
			border-color: var(--base-black);
			transition-delay: (0.05s + $delaybase), (0.55s + $delaybase);
		}
		&.animated {
			transform: scale(1);
			border-width: 1px;
		}
	}
	img {
		border-radius: 50%;
		size: 128px;
		transform: scale(0) rotate(1rad);
		transition: transform 0.55s (0.55s + $delaybase)
			cubic-bezier(0.19, 1, 0.335, 1.095);
		&.animated {
			transform: scale(1) rotate(0);
		}
	}
}

.name {
	position: relative;
	padding-bottom: 12px;
	z-index: 1;
	$delaybase: $rdb + 1.4s;
	h1 {
		color: var(--text-black);
		font-size: 2rem;
		font-family: 'Roboto', sans-serif;
		font-weight: 100;
		letter-spacing: 0.1em;
		line-height: 1em;
		overflow: hidden;
		& > span {
			display: inline-block;
			transform: translateY(100%);
			opacity: 0;
			transition-property: transform, opacity;
			transition-timing-function: cubic-bezier(0.25, 0.84, 0.33, 0.945);
			&.animated {
				transform: translateY(0);
				opacity: 1;
			}
			@for $i from 1 through 8 {
				&:nth-of-type(#{$i}) {
					transition-delay: 0.04s * sqrt(pow(4.5 - $i, 2)) + $delaybase;
					transition-duration: 0.2s;
				}
			}
		}
	}

	.border {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0 auto;
		border-bottom: 1px solid var(--text-black);
		width: 50%;
		transform: scaleX(0);
		transition: transform 0.3s cubic-bezier(1, 0, 0, 1);
		transition-delay: $delaybase + 0.1s;
		&.animated {
			transform: scaleX(1);
		}
	}
}

.positions {
	display: flex;
	flex-direction: column;
	margin-top: 16px;
	z-index: 1;
}

.position {
	display: flex;
	list-style: none;
	position: relative;
	padding: 2px 4px;
	overflow: hidden;
	&:not(:last-of-type) {
		margin-bottom: 2px;
	}
	& > p {
		color: var(--text-black);
		font-size: 0.8rem;
		font-family: 'Roboto Mono', monospace;
		font-weight: 300;
		transition: transform 0.5s, opacity 0.75s;
		transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
		opacity: 0;
		transform: translateX(-20%);
		&.animated {
			opacity: 1;
			transform: translateX(0);
		}
	}
	$coverdur: 0.4s;
	& > .cover {
		position: absolute;
		size: 100%;
		top: 0;
		left: 0;
		animation-duration: $coverdur;
		background-color: var(--accent-color);
		animation-fill-mode: both;
		z-index: 1;
		animation-play-state: paused;
		&.animated {
			animation-play-state: running;
		}

		&:nth-of-type(1) {
			animation-name: cover-x-1;
			transform-origin: left;
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
		}
		&:nth-of-type(2) {
			animation-name: cover-x-2;
			transform-origin: right;
			animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
		}
	}
	@for $i from 1 through 4 {
		$delaybase: $rdb + 1.4s + $i * 0.05s;
		&:nth-of-type(#{$i}) {
			& > p {
				transition-delay: $delaybase + $coverdur - 0.05s;
			}
			& > .cover {
				&:nth-of-type(1) {
					animation-delay: $delaybase;
				}
				&:nth-of-type(2) {
					animation-delay: $coverdur + $delaybase;
				}
			}
		}
	}
}

.button {
	width: calc(100% - 24px);
	margin-top: 36px;
	padding: 16px 24px;
	display: flex;
	align-items: center;
	overflow: hidden;
	position: relative;
	&.finished {
		cursor: pointer;
	}
	& > .link {
		position: absolute;
		size: 100%;
		left: 0;
		top: 0;
		z-index: 50;
		visibility: hidden;
		&.finished {
			visibility: hidden;
		}
	}
	& > .pattern {
		$size: 16;
		content: '';
		position: absolute;
		width: 100%;
		height: calc(100% + #{$size * 1px});
		top: 0;
		left: 0;
		background-image: url('~assets/stripe_'+$size+'_white.png');
		opacity: 0;
		animation: card-pattern 1s linear infinite;
		animation-play-state: running !important;
		@keyframes card-pattern {
			from {
				transform: translateY(0);
			}
			to {
				transform: translateY(-#{$size * 1px});
			}
		}
		transition: 0.2s cubic-bezier(0.23, 1, 0.32, 1);
		transition-delay: $rdb + 1.8s;
		&.animated {
			opacity: 0.15;
		}
	}
	& > p {
		color: var(--text-black);
		font-family: 'Roboto Mono', monospace;
		font-weight: 300;
		line-height: 1em;
		font-size: 0.9rem;
		margin-right: 6px;
		transform: translateX(-20%);
		opacity: 0;
		transition: 0.5s cubic-bezier(0.23, 1, 0.32, 1);
		transition-delay: $rdb + 1.9s;
		&.animated {
			opacity: 1;
			transform: translateX(0);
		}
	}
	& > .arrow {
		flex-grow: 2;
		border-bottom: 1px solid var(--text-black);
		position: relative;
		$delaybase: $rdb + 1.8s;
		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 6px;
			border-bottom: 1px solid var(--text-black);
			right: (1px / 1.414);
			top: 0;
			transition: transform 0.25s ($delaybase + 0.25s) ease;
		}
		&::before {
			transform-origin: right center;
		}
		&::after {
			transform-origin: right center;
		}
		transform-origin: left;
		transform: scaleX(0);
		transition: transform 0.25s $delaybase cubic-bezier(0.86, 0, 0.07, 1);
		&.animated {
			transform: scaleX(1);
			&::before {
				transform: rotate(45deg);
			}
			&::after {
				transform: rotate(-45deg);
			}
		}
	}
	.outline {
		$bd: 0.16s;
		$go: 0.4s;
		$delaybase: $rdb + 1.45s;
		z-index: 1;
		@for $i from 1 through 4 {
			&:nth-of-type(#{$i}) {
				transition-duration: $bd;
				transition-delay: ($i - 1) * $bd + $delaybase;
			}
		}
		@for $i from 1 through 4 {
			&:nth-of-type(#{$i + 4}) {
				transition-duration: $go;
				transition-delay: ($i - 1) * $bd + $delaybase;
			}
		}
	}
	& > .hoverer {
		content: '';
		position: absolute;
		size: 100%;
		left: 0;
		top: 0;
		transition: border-width 0.125s;
		border: 1px solid var(--text-black);
		visibility: hidden;
		&.finished {
			visibility: visible;
		}
	}
	&:hover {
		& > .hoverer {
			border-width: 4px;
		}
	}
}
</style>
